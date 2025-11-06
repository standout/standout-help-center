import React, {useState, useEffect, useRef, useCallback} from 'react';
import Translate from '@docusaurus/Translate';
import {useHistory} from '@docusaurus/router';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import clsx from 'clsx';
import styles from './styles.module.css';

interface SearchResult {
  id: string;
  title: string;
  description: string;
  category: string;
  url: string;
  keywords: string[];
  searchableText: string;
}

interface SearchProps {
  className?: string;
  placeholder?: string | React.ReactNode;
}

export default function Search({
  className = '',
  placeholder,
}: SearchProps): React.ReactElement {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [searchIndex, setSearchIndex] = useState<SearchResult[]>([]);
  const history = useHistory();
  const {i18n} = useDocusaurusContext();
  const inputRef = useRef<HTMLInputElement>(null);
  const resultsRef = useRef<HTMLDivElement>(null);

  // Get placeholder text - handle both string and Translate component
  // If placeholder is a Translate component, extract the message or use default
  const placeholderText =
    typeof placeholder === 'string'
      ? placeholder
      : 'Search for help...';

  // Get the current locale (default to 'en' if not available)
  const currentLocale = i18n.currentLocale || i18n.defaultLocale || 'en';
  const isDefaultLocale = currentLocale === i18n.defaultLocale;
  const baseUrl = isDefaultLocale ? '' : `/${currentLocale}`;

  // Load search index - use locale-specific index
  useEffect(() => {
    // Construct the correct path for the search index
    // For default locale: /search-index.json (served from static/ or build/)
    // For other locales: /{locale}/search-index.json (served from static/{locale}/ or build/{locale}/)
    const indexPath = isDefaultLocale ? '/search-index.json' : `${baseUrl}/search-index.json`;

    console.log(`[Search] Attempting to load search index from: ${indexPath} (locale: ${currentLocale}, isDefault: ${isDefaultLocale})`);

    fetch(indexPath)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Failed to fetch ${indexPath}: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        setSearchIndex(data);
        console.log(`[Search] Successfully loaded ${data.length} items from ${indexPath}`);
      })
      .catch((err) => {
        console.error(`[Search] Failed to load search index from ${indexPath}:`, err);
        // Fallback: try alternative paths
        const fallbackPaths = isDefaultLocale
          ? [] // No fallback for default locale - file should exist
          : ['/search-index.json']; // If locale-specific fails, try default

        if (fallbackPaths.length > 0) {
          for (const fallbackPath of fallbackPaths) {
            fetch(fallbackPath)
              .then((res) => {
                if (res.ok) {
                  return res.json();
                }
                throw new Error(`Failed to fetch ${fallbackPath}: ${res.status}`);
              })
              .then((data) => {
                setSearchIndex(data);
                console.warn(`[Search] Using fallback index from ${fallbackPath}`);
              })
              .catch((fallbackErr) => {
                console.error(`[Search] Fallback path ${fallbackPath} also failed:`, fallbackErr);
              });
          }
        } else {
          console.error(`[Search] No fallback available. Search index file may not be generated.`);
        }
      });
  }, [baseUrl, isDefaultLocale, currentLocale]);

  // Search function
  const performSearch = useCallback(
    (searchQuery: string) => {
      if (!searchQuery.trim() || searchIndex.length === 0) {
        setResults([]);
        setIsOpen(false);
        return;
      }

      const queryLower = searchQuery.toLowerCase().trim();
      const queryWords = queryLower.split(/\s+/);

      // Score each result
      const scoredResults = searchIndex
        .map((item) => {
          let score = 0;
          const titleLower = item.title.toLowerCase();
          const descriptionLower = item.description.toLowerCase();
          const searchableText = item.searchableText;

          // Exact title match gets highest score
          if (titleLower === queryLower) {
            score += 100;
          } else if (titleLower.startsWith(queryLower)) {
            score += 50;
          } else if (titleLower.includes(queryLower)) {
            score += 30;
          }

          // Check for word matches in title
          queryWords.forEach((word) => {
            if (titleLower.includes(word)) {
              score += 20;
            }
          });

          // Check for matches in description
          if (descriptionLower.includes(queryLower)) {
            score += 10;
          }

          // Check for matches in keywords
          if (item.keywords.some((keyword) => keyword.toLowerCase().includes(queryLower))) {
            score += 15;
          }

          // Check for matches in searchable text
          queryWords.forEach((word) => {
            if (searchableText.includes(word)) {
              score += 5;
            }
          });

          return {item, score};
        })
        .filter(({score}) => score > 0)
        .sort((a, b) => b.score - a.score)
        .slice(0, 10) // Limit to top 10 results
        .map(({item}) => item);

      setResults(scoredResults);
      setIsOpen(scoredResults.length > 0);
      setSelectedIndex(0);
    },
    [searchIndex]
  );

  // Handle input change
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    performSearch(value);
  };

  // Handle keyboard navigation
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (!isOpen || results.length === 0) {
        if (e.key === 'Enter' && query.trim()) {
          // If no results, try to navigate to first category or search page
          return;
        }
        return;
      }

      switch (e.key) {
        case 'ArrowDown':
          e.preventDefault();
          setSelectedIndex((prev) => (prev < results.length - 1 ? prev + 1 : prev));
          break;
        case 'ArrowUp':
          e.preventDefault();
          setSelectedIndex((prev) => (prev > 0 ? prev - 1 : 0));
          break;
                    case 'Enter':
                      e.preventDefault();
                      if (results[selectedIndex]) {
                        // Ensure URL is absolute path starting with /
                        const url = results[selectedIndex].url.startsWith('/')
                          ? results[selectedIndex].url
                          : `/${results[selectedIndex].url}`;
                        history.push(url);
                        setIsOpen(false);
                        setQuery('');
                        inputRef.current?.blur();
                      }
                      break;
        case 'Escape':
          e.preventDefault();
          setIsOpen(false);
          setQuery('');
          inputRef.current?.blur();
          break;
      }
    },
    [isOpen, results, selectedIndex, query, history]
  );

  // Scroll selected result into view
  useEffect(() => {
    if (resultsRef.current && isOpen) {
      const selectedElement = resultsRef.current.children[selectedIndex] as HTMLElement;
      if (selectedElement) {
        selectedElement.scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
        });
      }
    }
  }, [selectedIndex, isOpen]);

  // Handle click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        inputRef.current &&
        resultsRef.current &&
        !inputRef.current.contains(event.target as Node) &&
        !resultsRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [isOpen]);

  // Get category label with translation key
  const getCategoryInfo = (category: string): {labelKey: string; label: string; icon: string} => {
    const categoryMap: Record<string, {labelKey: string; label: string; icon: string}> = {
      'getting-started': {
        labelKey: 'search.category.gettingStarted',
        label: 'Getting Started',
        icon: '🚀',
      },
      'using-standout': {
        labelKey: 'search.category.usingStandout',
        label: 'Using Standout',
        icon: '💼',
      },
      tutorials: {
        labelKey: 'search.category.tutorials',
        label: 'Tutorials',
        icon: '📚',
      },
      troubleshooting: {
        labelKey: 'search.category.troubleshooting',
        label: 'Troubleshooting',
        icon: '🔧',
      },
    };
    return categoryMap[category] || {labelKey: '', label: category, icon: ''};
  };

  return (
    <div className={clsx(styles.searchContainer, className)}>
      <div className={styles.searchInputWrapper}>
        <input
          ref={inputRef}
          type="search"
          value={query}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          onFocus={() => {
            if (results.length > 0) {
              setIsOpen(true);
            }
          }}
          placeholder={placeholderText}
          className={styles.searchInput}
          aria-label="Search for help"
          aria-expanded={isOpen}
          aria-haspopup="listbox"
          role="combobox"
        />
      </div>
      {isOpen && results.length > 0 && (
        <div ref={resultsRef} className={styles.resultsContainer} role="listbox">
          {results.map((result, index) => (
            <div
              key={result.id}
              className={clsx(styles.resultItem, {
                [styles.resultItemSelected]: index === selectedIndex,
              })}
              role="option"
              aria-selected={index === selectedIndex}
              onMouseEnter={() => setSelectedIndex(index)}
              onClick={() => {
                // Ensure URL is absolute path starting with /
                const url = result.url.startsWith('/') ? result.url : `/${result.url}`;
                history.push(url);
                setIsOpen(false);
                setQuery('');
                inputRef.current?.blur();
              }}
            >
              <div className={styles.resultHeader}>
                <h3 className={styles.resultTitle}>{result.title}</h3>
                <span className={styles.resultCategory}>
                  {(() => {
                    const {labelKey, label, icon} = getCategoryInfo(result.category);
                    return (
                      <>
                        {icon && <span className={styles.categoryIcon}>{icon}</span>}
                        {labelKey ? (
                          <Translate id={labelKey} description="Search result category">
                            {label}
                          </Translate>
                        ) : (
                          label
                        )}
                      </>
                    );
                  })()}
                </span>
              </div>
              {result.description && (
                <p className={styles.resultDescription}>{result.description}</p>
              )}
            </div>
          ))}
        </div>
      )}
      {isOpen && query.trim() && results.length === 0 && (
        <div className={styles.noResults}>
          <p>No results found for "{query}"</p>
        </div>
      )}
    </div>
  );
}
