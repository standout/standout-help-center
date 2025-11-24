import type {ReactNode} from 'react';
import clsx from 'clsx';
import Translate from '@docusaurus/Translate';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import CategoryCard from '@site/src/components/CategoryCard';
import Search from '@site/src/components/Search';

import styles from './index.module.css';

// Categories data - will be translated using Translate component in JSX
// English text is used as fallback for default locale
const categories = [
  {
    icon: '🚀',
    titleKey: 'homepage.categories.gettingStarted.title',
    title: 'Getting Started',
    descriptionKey: 'homepage.categories.gettingStarted.description',
    description: 'Everything you need to know to get started with Standout.',
    categoryUrl: '/help/getting-started/',
    articles: [
      {titleKey: 'homepage.categories.gettingStarted.articles.account', title: 'Create your account', url: '/help/getting-started/create-your-account'},
      {titleKey: 'homepage.categories.gettingStarted.articles.teammates', title: 'Inviting teammates', url: '/help/getting-started/inviting-teammates'},
      {titleKey: 'homepage.categories.gettingStarted.articles.search', title: 'Using search', url: '/help/getting-started/using-search'},
    ],
  },
  {
    icon: '💼',
    titleKey: 'homepage.categories.usingStandout.title',
    title: 'Using Standout',
    descriptionKey: 'homepage.categories.usingStandout.description',
    description: 'Learn how to use Standout day-to-day and make the most of its features.',
    categoryUrl: '/help/using-standout/',
    articles: [
      {titleKey: 'homepage.categories.usingStandout.articles.integrations', title: 'Integrations', url: '/help/using-standout/integrations'},
      {titleKey: 'homepage.categories.usingStandout.articles.members', title: 'Members', url: '/help/using-standout/members'},
      {titleKey: 'homepage.categories.usingStandout.articles.billing', title: 'Plans and billing', url: '/help/using-standout/plans-and-billing'},
    ],
  },
  {
    icon: '📚',
    titleKey: 'homepage.categories.tutorials.title',
    title: 'Tutorials',
    descriptionKey: 'homepage.categories.tutorials.description',
    description: 'Step-by-step guides for building workflows and mastering Standout.',
    categoryUrl: '/help/tutorials/',
    articles: [
      {titleKey: 'homepage.categories.tutorials.articles.building', title: 'Building and publishing integrations', url: '/help/tutorials/building-and-publishing-integrations'},
      {titleKey: 'homepage.categories.tutorials.articles.teams', title: 'Working with teams efficiently', url: '/help/tutorials/working-with-teams-efficiently'},
    ],
  },
  {
    icon: '🔧',
    titleKey: 'homepage.categories.troubleshooting.title',
    title: 'Troubleshooting',
    descriptionKey: 'homepage.categories.troubleshooting.description',
    description: 'Find quick solutions to common issues and errors.',
    categoryUrl: '/help/troubleshooting/',
    articles: [
      {titleKey: 'homepage.categories.troubleshooting.articles.cantLogin', title: "Can't log in", url: '/help/troubleshooting/cant-log-in'},
      {titleKey: 'homepage.categories.troubleshooting.articles.notWorking', title: 'Integration does not work', url: '/help/troubleshooting/integration-not-working'},
    ],
  },
];

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();

  return (
    <header className={styles.heroBanner}>
      <div className="container">
        <Heading as="h1" className={styles.heroTitle}>
          <Translate id="homepage.hero.title" description="Hero title on homepage">
            Hi. How can we help?
          </Translate>
        </Heading>
        <div className={styles.searchContainer}>
          <Search placeholder="Search for help..." />
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description={siteConfig.tagline}>
      <HomepageHeader />
      <main className={styles.mainContent}>
        <div className="container">
          <div className={styles.categoriesGrid}>
            {categories.map((category, idx) => (
              <CategoryCard
                key={idx}
                icon={category.icon}
                titleKey={category.titleKey}
                title={category.title}
                descriptionKey={category.descriptionKey}
                description={category.description}
                articles={category.articles}
                categoryUrl={category.categoryUrl}
              />
            ))}
          </div>
        </div>
      </main>
    </Layout>
  );
}
