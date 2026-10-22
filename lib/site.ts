/** Canonical site origin. Used for sitemap, robots, canonicals and JSON-LD. */
export const SITE_URL = "https://tengchanleong.com";

/** Date the site content last changed (YYYY-MM-DD). Used as sitemap lastmod; bump it when content changes. */
export const SITE_LAST_UPDATED = "2026-10-22";

/** Serialise JSON-LD for a <script> tag; escapes "<" per the Next.js JSON-LD guide. */
export const jsonLdString = (data: unknown) =>
  JSON.stringify(data).replace(/</g, "\\u003c");
