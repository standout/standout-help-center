import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Standout Help Center',
  tagline: 'Help and documentation for the Standout platform',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://help.standout.se',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'standout', // Usually your GitHub org/user name.
  projectName: 'standout-help-center', // Usually your repo name.

  onBrokenLinks: 'throw',

  // Internationalization configuration
  // English is the default locale, Swedish is also supported
  // URLs will be /en/ and /sv/, but translation files are in i18n/ folder
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'sv'],
    localeConfigs: {
      sv: {
        label: 'Svenska',
        direction: 'ltr',
        htmlLang: 'sv-SE',
      },
      en: {
        label: 'English',
        direction: 'ltr',
        htmlLang: 'en-US',
      },
    },
  },

  presets: [
    [
      'classic',
      {
        docs: false, // Disable default docs
        blog: false, // Disable blog
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],
  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'getting-started',
        path: 'help/getting-started',
        routeBasePath: 'help/getting-started',
        sidebarPath: './sidebars.ts',
        // editUrl: 'https://github.com/standout/standout-help-center/tree/main/',
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'using-standout',
        path: 'help/using-standout',
        routeBasePath: 'help/using-standout',
        sidebarPath: './sidebars.ts',
        // editUrl: 'https://github.com/standout/standout-help-center/tree/main/',
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'tutorials',
        path: 'help/tutorials',
        routeBasePath: 'help/tutorials',
        sidebarPath: './sidebars.ts',
        // editUrl: 'https://github.com/standout/standout-help-center/tree/main/',
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'troubleshooting',
        path: 'help/troubleshooting',
        routeBasePath: 'help/troubleshooting',
        sidebarPath: './sidebars.ts',
        // editUrl: 'https://github.com/standout/standout-help-center/tree/main/',
      },
    ],
    require.resolve('./plugins/search-index-plugin'),
  ],

  themeConfig: {
    image: 'img/standout-help-center-social-card.webp',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Standout Help Center',
      logo: {
        alt: 'Standout Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'gettingStartedSidebar',
          docsPluginId: 'getting-started',
          position: 'left',
          label: 'Getting Started',
        },
        {
          type: 'docSidebar',
          sidebarId: 'usingStandoutSidebar',
          docsPluginId: 'using-standout',
          position: 'left',
          label: 'Using Standout',
        },
        {
          type: 'docSidebar',
          sidebarId: 'tutorialsSidebar',
          docsPluginId: 'tutorials',
          position: 'left',
          label: 'Tutorials',
        },
        {
          type: 'docSidebar',
          sidebarId: 'troubleshootingSidebar',
          docsPluginId: 'troubleshooting',
          position: 'left',
          label: 'Troubleshooting',
        },
        {
          to: '/faq',
          label: 'FAQ',
          position: 'left',
        },
        {
          type: 'localeDropdown',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Categories',
          items: [
            {
              label: 'Getting Started',
              to: '/help/getting-started/',
            },
            {
              label: 'Using Standout',
              to: '/help/using-standout/',
            },
            {
              label: 'Tutorials',
              to: '/help/tutorials/',
            },
            {
              label: 'Troubleshooting',
              to: '/help/troubleshooting/',
            },
          ],
        },
        {
          title: 'Explore Standout',
          items: [
            {
              label: 'Our Website',
              href: 'https://standout.se',
            },
            {
              label: 'Integration Platform',
              href: 'https://app.integrationer.se',
            },
            {
              label: 'Trust Center',
              href: 'https://trust.standout.se',
            },
            {
              label: 'Support Portal',
              href: 'https://standoutab.atlassian.net/servicedesk/customer/portal/5',
            },
          ],
        },
        {
          title: 'Resources',
          items: [
            {
              label: 'Home',
              to: '/',
            },
            {
              label: 'FAQ',
              to: '/faq',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Standout.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
