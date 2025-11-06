/**
 * App URL configuration
 *
 * Handles environment-based configuration for the production app URL.
 * Production: https://app.standout.se
 * Development: http://localhost:3000
 */

/**
 * Get the base URL for the production app based on the current environment
 * @returns The base URL for the app
 */
export function getAppBaseUrl(): string {
  // In browser environment, check if we're in development mode
  if (typeof window !== 'undefined') {
    // Check if we're running on localhost or in development
    const isDevelopment =
      window.location.hostname === 'localhost' ||
      window.location.hostname === '127.0.0.1' ||
      window.location.hostname.startsWith('localhost:') ||
      process.env.NODE_ENV === 'development';

    return isDevelopment ? 'http://localhost:3000' : 'https://app.standout.se';
  }

  // In Node.js environment (SSR), check environment variable
  if (process.env.NODE_ENV === 'development' || process.env.NODE_ENV !== 'production') {
    return 'http://localhost:3000';
  }

  return 'https://app.standout.se';
}

/**
 * Build a full URL to a path in the app
 * @param path - The path to append to the base URL (should start with /)
 * @returns The full URL
 */
export function getAppUrl(path: string): string {
  const baseUrl = getAppBaseUrl();
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${baseUrl}${cleanPath}`;
}

/**
 * Check if we're currently in development mode
 * @returns true if in development, false otherwise
 */
export function isDevelopment(): boolean {
  if (typeof window !== 'undefined') {
    return (
      window.location.hostname === 'localhost' ||
      window.location.hostname === '127.0.0.1' ||
      window.location.hostname.startsWith('localhost:')
    );
  }
  return process.env.NODE_ENV === 'development' || process.env.NODE_ENV !== 'production';
}
