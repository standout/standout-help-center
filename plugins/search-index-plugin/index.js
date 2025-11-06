const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

/**
 * Docusaurus plugin to generate a search index JSON file
 * This runs at build time and creates a searchable index of all help content
 */
function searchIndexPlugin(context, options) {
  return {
    name: 'search-index-plugin',
    async loadContent() {
      // Index generation happens in postBuild per locale
      // This allows us to generate separate indexes for each language
      return [];
    },
    async contentLoaded({content, actions}) {
      const {setGlobalData} = actions;
      setGlobalData(content);
    },
    async postBuild({outDir, siteDir}) {
      // Determine locale from outDir path
      // Default locale: build/, Other locales: build/{locale}/
      const outDirParts = outDir.split(path.sep);
      const buildDirIndex = outDirParts.findIndex((part) => part === 'build');
      const defaultLocale = context.i18n?.defaultLocale || 'en';
      // If there's a locale after 'build' in the path, use it; otherwise it's default locale
      const isDefaultLocale = !(buildDirIndex >= 0 && outDirParts.length > buildDirIndex + 1);
      let currentLocale = isDefaultLocale
        ? '' // Use empty string for default locale URL generation
        : outDirParts[buildDirIndex + 1]; // Use the locale from path for non-default locales

      // Get all supported locales from context
      const supportedLocales = context.i18n?.locales || [context.i18n?.defaultLocale || 'en'];

      // Find the help content directory for this locale
      // Check for translated content in i18n/{locale}/docusaurus-plugin-content-docs/{pluginId}/
      let helpDir = path.join(siteDir, 'help');
      const i18nPath = path.join(siteDir, 'i18n', currentLocale);

      // Plugin IDs that correspond to our help categories
      const pluginIds = ['getting-started', 'using-standout', 'tutorials', 'troubleshooting'];

      // Check if translated content exists for any plugin
      let hasTranslatedContent = false;
      for (const pluginId of pluginIds) {
        const translatedPluginPath = path.join(i18nPath, 'docusaurus-plugin-content-docs', pluginId);
        if (fs.existsSync(translatedPluginPath)) {
          hasTranslatedContent = true;
          break;
        }
      }

      const searchIndex = [];

      // Helper function to get content for a category
      const getCategoryContent = (category, pluginId) => {
        // First check for translated content in i18n/{locale}/docusaurus-plugin-content-docs-{pluginId}/current/
        // Note: Docusaurus uses this structure: docusaurus-plugin-content-docs-{pluginId}/current/
        const translatedCategoryDir = path.join(i18nPath, `docusaurus-plugin-content-docs-${pluginId}`, 'current');
        if (fs.existsSync(translatedCategoryDir)) {
          return translatedCategoryDir;
        }

        // Fallback to default help directory
        return path.join(helpDir, category);
      };

      const categories = [
        {name: 'getting-started', pluginId: 'getting-started'},
        {name: 'using-standout', pluginId: 'using-standout'},
        {name: 'tutorials', pluginId: 'tutorials'},
        {name: 'troubleshooting', pluginId: 'troubleshooting'},
      ];

      for (const {name: category, pluginId} of categories) {
        // Get translated content directory if it exists
        const translatedCategoryDir = path.join(i18nPath, `docusaurus-plugin-content-docs-${pluginId}`, 'current');
        const defaultCategoryDir = path.join(helpDir, category);

        // For non-default locales, only use translated content if it exists
        // For default locale, use default directory
        if (isDefaultLocale) {
          // Default locale: use help directory
          if (!fs.existsSync(defaultCategoryDir)) continue;

          const files = fs.readdirSync(defaultCategoryDir);
          for (const file of files) {
            if (!file.endsWith('.md')) continue;
            if (file === 'index.md') continue;

            const filePath = path.join(defaultCategoryDir, file);
            if (!fs.existsSync(filePath)) continue;

            const fileContent = fs.readFileSync(filePath, 'utf-8');
            const {data: frontmatter, content} = matter(fileContent);

            // Try to extract title from content if not in frontmatter
            let title = frontmatter.title;
            if (!title && content) {
              const titleMatch = content.match(/^#\s+(.+)$/m);
              if (titleMatch) {
                title = titleMatch[1].trim();
              }
            }
            // Fallback to filename
            if (!title) {
              title = file.replace('.md', '').replace(/-/g, ' ');
            }

            let description = frontmatter.description || '';
            if (!description && content) {
              const firstParagraph = content
                .split('\n\n')
                .find((p) => p.trim().length > 0 && !p.startsWith('#'));
              if (firstParagraph) {
                description = firstParagraph.replace(/[#*`]/g, '').trim().substring(0, 200);
              }
            }

            const keywords = frontmatter.keywords || [];
            const searchableText = [
              title,
              description,
              ...keywords,
              content.replace(/[#*`]/g, '').replace(/\n/g, ' '),
            ]
              .join(' ')
              .toLowerCase();

            const slug = file.replace('.md', '');
            // Ensure URL starts with single slash, not double
            let url = `/help/${category}/${slug}`;
            // Normalize: remove any double slashes at the start
            url = url.replace(/^\/+/, '/');

            searchIndex.push({
              id: `${category}-${slug}`,
              title,
              description,
              category,
              url,
              keywords,
              searchableText,
            });
          }
        } else {
          // Non-default locale: include translated files, fallback to English if not translated
          const files = new Set();

          // Add files from translated directory if it exists
          if (fs.existsSync(translatedCategoryDir)) {
            const translatedFiles = fs.readdirSync(translatedCategoryDir);
            translatedFiles.forEach(file => files.add(file));
          }

          // Also add files from default directory (for fallback)
          if (fs.existsSync(defaultCategoryDir)) {
            const defaultFiles = fs.readdirSync(defaultCategoryDir);
            defaultFiles.forEach(file => files.add(file));
          }

          for (const file of files) {
            if (!file.endsWith('.md')) continue;
            if (file === 'index.md') continue;

            // Try to get file from translated directory first, then fallback to default
            let filePath = path.join(translatedCategoryDir, file);
            if (!fs.existsSync(filePath)) {
              filePath = path.join(defaultCategoryDir, file);
            }
            if (!fs.existsSync(filePath)) continue;

            const fileContent = fs.readFileSync(filePath, 'utf-8');
            const {data: frontmatter, content} = matter(fileContent);

            // Try to extract title from content if not in frontmatter
            let title = frontmatter.title;
            if (!title && content) {
              const titleMatch = content.match(/^#\s+(.+)$/m);
              if (titleMatch) {
                title = titleMatch[1].trim();
              }
            }
            // Fallback to filename
            if (!title) {
              title = file.replace('.md', '').replace(/-/g, ' ');
            }

            let description = frontmatter.description || '';
            if (!description && content) {
              const firstParagraph = content
                .split('\n\n')
                .find((p) => p.trim().length > 0 && !p.startsWith('#'));
              if (firstParagraph) {
                description = firstParagraph.replace(/[#*`]/g, '').trim().substring(0, 200);
              }
            }

            const keywords = frontmatter.keywords || [];
            const searchableText = [
              title,
              description,
              ...keywords,
              content.replace(/[#*`]/g, '').replace(/\n/g, ' '),
            ]
              .join(' ')
              .toLowerCase();

            const slug = file.replace('.md', '');
            // Only add locale prefix for non-default locales
            const localePrefix = isDefaultLocale ? '' : `/${currentLocale}`;
            // Ensure URL starts with single slash, not double
            let url = `${localePrefix}/help/${category}/${slug}`;
            // Normalize: remove any double slashes at the start
            url = url.replace(/^\/+/, '/');

            searchIndex.push({
              id: `${category}-${slug}`,
              title,
              description,
              category,
              url,
              keywords,
              searchableText,
            });
          }
        }

        // Handle index.md
        if (isDefaultLocale) {
          // Default locale: use index.md from help directory
          const indexPath = path.join(defaultCategoryDir, 'index.md');
          if (fs.existsSync(indexPath)) {
            const fileContent = fs.readFileSync(indexPath, 'utf-8');
            const {data: frontmatter, content} = matter(fileContent);

            // Try to extract title from content if not in frontmatter
            let title = frontmatter.title;
            if (!title && content) {
              const titleMatch = content.match(/^#\s+(.+)$/m);
              if (titleMatch) {
                title = titleMatch[1].trim();
              }
            }
            // Fallback to category name
            if (!title) {
              title = category.replace(/-/g, ' ');
            }

            let description = frontmatter.description || '';
            if (!description && content) {
              const firstParagraph = content
                .split('\n\n')
                .find((p) => p.trim().length > 0 && !p.startsWith('#'));
              if (firstParagraph) {
                description = firstParagraph.replace(/[#*`]/g, '').trim().substring(0, 200);
              }
            }

            // Ensure URL starts with single slash, not double
            let url = `/help/${category}/`;
            url = url.replace(/^\/+/, '/');

            searchIndex.push({
              id: `${category}-index`,
              title,
              description,
              category,
              url,
              keywords: frontmatter.keywords || [],
              searchableText: [title, description, content.replace(/[#*`]/g, '').replace(/\n/g, ' ')]
                .join(' ')
                .toLowerCase(),
            });
          }
        } else {
          // Non-default locale: use translated index.md if it exists, otherwise fallback to default
          let indexPath = path.join(translatedCategoryDir, 'index.md');
          if (!fs.existsSync(indexPath)) {
            indexPath = path.join(defaultCategoryDir, 'index.md');
          }

          if (fs.existsSync(indexPath)) {
            const fileContent = fs.readFileSync(indexPath, 'utf-8');
            const {data: frontmatter, content} = matter(fileContent);

            // Try to extract title from content if not in frontmatter
            let title = frontmatter.title;
            if (!title && content) {
              const titleMatch = content.match(/^#\s+(.+)$/m);
              if (titleMatch) {
                title = titleMatch[1].trim();
              }
            }
            // Fallback to category name
            if (!title) {
              title = category.replace(/-/g, ' ');
            }

            let description = frontmatter.description || '';
            if (!description && content) {
              const firstParagraph = content
                .split('\n\n')
                .find((p) => p.trim().length > 0 && !p.startsWith('#'));
              if (firstParagraph) {
                description = firstParagraph.replace(/[#*`]/g, '').trim().substring(0, 200);
              }
            }

            // Only add locale prefix for non-default locales
            const localePrefix = isDefaultLocale ? '' : `/${currentLocale}`;
            // Ensure URL starts with single slash, not double
            let url = `${localePrefix}/help/${category}/`;
            url = url.replace(/^\/+/, '/');

            searchIndex.push({
              id: `${category}-index`,
              title,
              description,
              category,
              url,
              keywords: frontmatter.keywords || [],
              searchableText: [title, description, content.replace(/[#*`]/g, '').replace(/\n/g, ' ')]
                .join(' ')
                .toLowerCase(),
            });
          }
        }
      }

      // Write to build output directory
      // The outDir is already the build directory (build/ or build/{locale}/)
      // These files will be served directly from the build output
      const staticDir = path.join(outDir, 'search-index.json');
      fs.writeFileSync(staticDir, JSON.stringify(searchIndex, null, 2));

      // Also write to static/ folder for dev server access
      // Docusaurus dev server serves static files from static/ folder
      // Production build serves from build/ directory
      const staticFolder = path.join(siteDir, 'static');
      if (!fs.existsSync(staticFolder)) {
        fs.mkdirSync(staticFolder, {recursive: true});
      }

      if (isDefaultLocale) {
        // Default locale: write to root static folder
        fs.writeFileSync(
          path.join(staticFolder, 'search-index.json'),
          JSON.stringify(searchIndex, null, 2)
        );
      } else {
        // Non-default locale: write to locale-specific folder
        const localeStaticFolder = path.join(staticFolder, currentLocale);
        if (!fs.existsSync(localeStaticFolder)) {
          fs.mkdirSync(localeStaticFolder, {recursive: true});
        }
        fs.writeFileSync(
          path.join(localeStaticFolder, 'search-index.json'),
          JSON.stringify(searchIndex, null, 2)
        );
      }

      console.log(`[search-index-plugin] Generated search index for locale: ${currentLocale} (${searchIndex.length} items)`);
    },
  };
}

module.exports = searchIndexPlugin;
