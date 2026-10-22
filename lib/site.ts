/** Canonical site origin. Used for sitemap, robots, canonicals and JSON-LD. */
export const SITE_URL = "https://tengchanleong.com";

/** Serialise JSON-LD for a <script> tag; escapes "<" per the Next.js JSON-LD guide. */
export const jsonLdString = (data: unknown) =>
  JSON.stringify(data).replace(/</g, "\\u003c");
