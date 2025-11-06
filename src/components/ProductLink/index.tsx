import React from 'react';
import {getAppUrl} from '@site/src/config/app';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

interface ProductLinkProps {
  /**
   * The path to append to the app base URL (should start with /)
   * @example "/integrations" or "/dashboard"
   */
  path: string;

  /**
   * The text or content to display as the link
   */
  children: React.ReactNode;

  /**
   * Additional className for styling
   */
  className?: string;

  /**
   * Whether to open the link in a new tab
   * @default false
   */
  openInNewTab?: boolean;

  /**
   * Additional props for the anchor element
   */
  [key: string]: any;
}

/**
 * ProductLink component
 *
 * Creates a link to the production app (app.standout.se or localhost:3000 in development).
 * Automatically uses the correct URL based on the environment.
 *
 * @example
 * <ProductLink path="/integrations">View integrations</ProductLink>
 * <ProductLink path="/dashboard" openInNewTab>Open dashboard</ProductLink>
 */
export default function ProductLink({
  path,
  children,
  className = '',
  openInNewTab = false,
  ...props
}: ProductLinkProps): React.ReactElement {
  const {i18n} = useDocusaurusContext();
  const appUrl = getAppUrl(path);

  // Add locale to path if needed (for future use)
  // Currently, the app URL doesn't include locale, but we keep this for future extensibility
  const finalUrl = appUrl;

  return (
    <a
      href={finalUrl}
      className={className}
      target={openInNewTab ? '_blank' : undefined}
      rel={openInNewTab ? 'noopener noreferrer' : undefined}
      {...props}
    >
      {children}
    </a>
  );
}
