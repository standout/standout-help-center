import React from 'react';
import Translate from '@docusaurus/Translate';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Link from '@docusaurus/Link';
import clsx from 'clsx';
import styles from './styles.module.css';

interface Article {
  titleKey?: string;
  title?: string;
  url: string;
}

interface CategoryCardProps {
  icon: React.ReactNode;
  titleKey?: string;
  title?: string;
  descriptionKey?: string;
  description?: string;
  articles: Article[];
  categoryUrl: string;
}

export default function CategoryCard({
  icon,
  titleKey,
  title,
  descriptionKey,
  description,
  articles,
  categoryUrl,
}: CategoryCardProps): React.ReactElement {
  const {i18n} = useDocusaurusContext();
  const currentLocale = i18n.currentLocale || i18n.defaultLocale || 'en';
  const isDefaultLocale = currentLocale === i18n.defaultLocale;
  const localePrefix = isDefaultLocale ? '' : `/${currentLocale}`;

  // Add locale prefix to URLs if not default locale
  const localizedCategoryUrl = `${localePrefix}${categoryUrl}`;
  const getLocalizedUrl = (url: string) => {
    if (url.startsWith('/')) {
      return `${localePrefix}${url}`;
    }
    return url;
  };

  return (
    <div className={styles.categoryCard}>
      <Link to={localizedCategoryUrl} className={styles.categoryLink}>
        <div className={styles.categoryHeader}>
          <div className={styles.categoryIcon}>{icon}</div>
          <h3 className={styles.categoryTitle}>
            {titleKey ? (
              <Translate id={titleKey} description="Category title">
                {title}
              </Translate>
            ) : (
              title
            )}
          </h3>
        </div>
        <p className={styles.categoryDescription}>
          {descriptionKey ? (
            <Translate id={descriptionKey} description="Category description">
              {description}
            </Translate>
          ) : (
            description
          )}
        </p>
      </Link>
      <ul className={styles.articleList}>
        {articles.map((article, idx) => (
                      <li key={idx} className={styles.articleItem}>
                        <Link to={getLocalizedUrl(article.url)} className={styles.articleLink} onClick={(e) => e.stopPropagation()}>
                          {article.titleKey ? (
                            <Translate id={article.titleKey} description="Article title">
                              {article.title}
                            </Translate>
                          ) : (
                            article.title
                          )}
                        </Link>
                      </li>
        ))}
      </ul>
    </div>
  );
}
