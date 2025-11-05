# AGENTS.md

This is a help center for Standout platform customers, built with Docusaurus.

## Project Purpose

This help center is designed to help customers of our integration platform understand and use the product. It targets users who use the interface to keep track of their integrations, their runs, and build integrations via the interface.

## Target Audience

- **Primary audience**: Non-technical users who use the interface for integrations
- Users who need help with:
  - Monitoring their integrations
  - Understanding runs and results
  - Building integrations via the interface
  - Troubleshooting common problems

## Content Principles

### Tone and Style

- **Positive tone**: All content should be positive about our product
- **Easy-to-read language**: Use simple, clear language that everyone can understand
- **Avoid technical jargon**: When possible, use everyday terms instead of technical ones

### Language

- All content should be available in **both Swedish and English**
- English is the default language
- Use Docusaurus i18n to handle translations

## Technical Stack

- **Framework**: Docusaurus 3.9.2
- **Language**: TypeScript
- **UI**: React 19.0
- **Styling**: CSS Modules + Infima
- **Content**: Markdown/MDX

## Accessibility and Readability

### For Users with Reading Difficulties or ADHD

When content is created or updated, follow these principles:

- **Short sentences**: Use short, direct sentences
- **Short paragraphs**: Break up long texts into short, focused paragraphs (max 3-4 sentences)
- **Clear structure**: Use consistent hierarchy with headings (H1-H6)
- **Bullet points**: Use bullet points and numbered lists to organize information
- **Visual hierarchy**: Clear visual hierarchy with spacing and structure
- **Simple language**: Avoid technical jargon when possible, explain terms when needed

### Design and Theme

- **High contrast**: Ensure high contrast between text and background in both light and dark themes
- **Large font sizes**: Use readable font sizes (minimum 16px for body text)
- **Theme support**: All components must work in both dark and light themes
- **Responsive design**: Work perfectly on mobile, tablet, and desktop

## AI-Friendly Content

When content is created for the help center, it should be optimized for AI understanding:

### Structured Content

- **Consistent hierarchy**: Use clear H1-H6 headings with logical order
- **Descriptive headings**: Each section should have a descriptive heading that summarizes the content
- **Clear organization**: Use bullet points and numbered lists for clear organization

### Frontmatter Metadata

All documents should have complete frontmatter with:

```yaml
---
title: Clear, descriptive title
description: Brief summary of content (max 160 characters)
keywords: [relevant, keywords, for, AI, indexing]
tags: [categorization, tags]
---
```

### Semantic Markdown

- **Semantic HTML elements**: Use semantic HTML elements where possible
- **Clear structure**: Each document should have a clear, logical structure
- **Meaningful links**: Use descriptive anchor text for links

### Consistent Terminology

- **Standardized terms**: Use the same terms consistently throughout the documentation
- **Glossary**: Clear definitions of important terms
- **Avoid synonyms**: Use the same word for the same concept

### Examples and Code

- **Clear examples**: Use concrete examples with descriptions
- **Code blocks with explanations**: All code blocks should have an explanation of what they do
- **Scenarios**: Use scenarios to show how things work in practice

### Schema.org Markup

- Consider adding structured data where relevant (via Docusaurus config or custom components)

## React Components

When React components are created or updated, follow these accessibility principles:

### HTML and Semantics

- **Semantic HTML**: Use semantic HTML elements (`<nav>`, `<main>`, `<article>`, `<section>`, etc.)
- **ARIA attributes**: Use ARIA attributes where relevant for better screen reader support
- **Clear structure**: Components should have a clear, logical DOM structure

### Design and Contrast

- **Clear contrast**: Ensure high contrast between colors (WCAG AA minimum)
- **Theme support**: All components must work in both dark and light themes
- **Color schemes**: Use Docusaurus theme variables for consistency

### Responsive Design

- **Mobile-first**: Design for mobile first, then scale up
- **Breakpoints**: Use consistent breakpoints for different screen sizes
- **Flexible layouts**: Use flexbox/grid for flexible layouts

### Interactions

- **Clear feedback**: Provide clear visual feedback for all interactions
- **Hover states**: Use hover states for interactive elements
- **Focus states**: Clear focus states for keyboard navigation

### Typography

- **Readable font sizes**: Minimum 16px for body text
- **Line spacing**: Use generous line spacing (minimum 1.5 line-height)
- **Font hierarchy**: Clear hierarchy between different text sizes

### Keyboard Navigation

- **Tab order**: Ensure logical tab order
- **Keyboard shortcuts**: Consider keyboard shortcuts for common actions
- **Skip links**: Use skip links to jump over navigation

## Production URL Configuration

The production app is located at `https://app.standout.se`. Locally it often runs on `localhost:3000`.

- Use `src/config/app.ts` to configure the correct URL based on environment
- Use the `ProductLink` component for links to the product
- Links should automatically use the correct URL depending on environment

## Build and Test Commands

```bash
# Install dependencies
npm install

# Start development server
npm run start

# Build for production
npm run build

# Type checking
npm run typecheck

# Generate translations
npm run write-translations
```

## Code Style and Conventions

- **TypeScript**: Use TypeScript for all new components
- **Strict mode**: Use TypeScript strict mode
- **Naming**: Use camelCase for variables/functions, PascalCase for components
- **Imports**: Use named imports when possible
- **Comments**: Comment complex logic, but avoid obvious comments

## Project Structure

```text
/
├── help/              # Help content (English as default)
│   ├── getting-started/    # Getting started articles
│   ├── using-standout/      # Using Standout articles
│   ├── tutorials/           # Tutorial articles
│   └── troubleshooting/    # Troubleshooting articles
├── i18n/              # Translations (Swedish translations)
│   └── sv/            # Swedish translations
├── src/
│   ├── components/    # React components
│   ├── config/        # Configuration files
│   ├── css/           # Global styles
│   └── pages/         # Pages
├── static/            # Static files (images, etc.)
├── plugins/           # Custom Docusaurus plugins
└── docusaurus.config.ts # Docusaurus configuration
```

## Content Categories

The help center is organized into four main categories. Each category serves a specific purpose and should contain specific types of articles:

### Getting Started (`help/getting-started/`)

**Purpose**: Help new users get up and running with Standout quickly.

**Article Types**:

- Account setup and initial configuration
- First-time user onboarding guides
- Creating your first workspace
- Inviting team members
- Basic navigation and interface overview
- Understanding core concepts and terminology

**Examples**:

- "Creating your first account"
- "Inviting teammates"
- "Navigating your workspace"
- "Understanding integrations"

### Using Standout (`help/using-standout/`)

**Purpose**: Guide users on day-to-day operations and features.

**Article Types**:

- How to perform common tasks
- Feature explanations and usage
- Managing integrations, runs, and data
- Viewing and controlling invoices
- Workspace management
- Team collaboration features

**Examples**:

- "Managing integrations"
- "Viewing and controlling invoices"
- "Restarting failed runs"
- "Configuring notifications"

### Tutorials (`help/tutorials/`)

**Purpose**: Step-by-step guides for building workflows and mastering advanced features.

**Article Types**:

- Step-by-step walkthroughs for complex tasks
- Building integrations from scratch
- Automating processes
- Best practices and workflows
- Advanced feature usage
- Integration patterns and examples

**Examples**:

- "Building an integration from scratch"
- "Automating processes"
- "Working with teams efficiently"
- "Setting up automated workflows"

### Troubleshooting (`help/troubleshooting/`)

**Purpose**: Help users resolve common issues and errors quickly.

**Article Types**:

- Error message explanations
- Common problems and solutions
- Diagnostic steps
- Recovery procedures
- Known issues and workarounds
- Contact information for support

**Examples**:

- "Job failed: what to do next"
- "Can't log in"
- "Integration not syncing"
- "Understanding error messages"

## i18n Structure

Docusaurus uses the standard i18n folder structure:

- **Translation files location**: `i18n/{locale}/` for all translation files
- **Documentation translations**: `i18n/{locale}/docusaurus-plugin-content-docs-{pluginId}/current/`
  - Example: `i18n/sv/docusaurus-plugin-content-docs-getting-started/current/`
- **Component translations**: `i18n/{locale}/code.json`
- **Theme translations**: `i18n/{locale}/docusaurus-theme-classic/`
  - Navbar: `i18n/{locale}/docusaurus-theme-classic/navbar.json`
  - Footer: `i18n/{locale}/docusaurus-theme-classic/footer.json`
- **Default language**: English (`en`) - source files are in `help/` directory
- **URL structure**: URLs will be `/en/` for default locale and `/{locale}/` for other locales
- **Locale dropdown**: Automatic in navbar (configured in `docusaurus.config.ts`)
- **Translation workflow**:
  - English content is written directly in `help/` directories
  - Swedish translations go in `i18n/sv/docusaurus-plugin-content-docs-{pluginId}/current/`
  - Use `npm run write-translations` to extract translation keys for React components
  - All documents should have translations to both languages

### Using Translate Component in React

When creating or updating React components, use the `Translate` component from Docusaurus for all user-facing text:

```tsx
import Translate from '@docusaurus/Translate';

// In your component
<Translate id="homepage.hero.title" description="Hero title on homepage">
  Hi. How can we help?
</Translate>
```

**Key Points**:

- **Import**: Always import `Translate` from `@docusaurus/Translate`
- **Translation keys**: Use descriptive keys following the pattern `{section}.{subsection}.{key}`
- **Description**: Always provide a `description` prop to help translators understand the context
- **Default text**: The children of `Translate` serve as the default English text and will be used if no translation is found
- **Translation file**: Translation keys are stored in `i18n/{locale}/code.json`
- **Works for all locales**: `Translate` works for both default and non-default locales - it automatically uses children as fallback for default locale

**Example**:

```tsx
import Translate from '@docusaurus/Translate';

function MyComponent() {
  return (
    <h1>
      <Translate id="myComponent.title" description="Component title">
        Welcome to Standout
      </Translate>
    </h1>
  );
}
```

**After adding new translation keys**:

1. Run `npm run write-translations` to extract new keys to `i18n/sv/code.json`
2. Manually translate the keys in `i18n/sv/code.json`
3. Test by switching locales in the browser

## Additional Resources

- [Docusaurus documentation](https://docusaurus.io/docs)
- [AGENTS.md specification](https://agents.md)
- [WCAG accessibility guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
