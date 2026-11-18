import { plain, sortedArticles, topics } from "@/lib/insights";
import { SITE_URL } from "@/lib/site";

export const dynamic = "force-static";

const esc = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

export function GET() {
  const items = sortedArticles()
    .map((a) => {
      const url = `${SITE_URL}/insights/${a.slug}`;
      return `    <item>
      <title>${esc(a.title)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <pubDate>${new Date(`${a.published}T09:00:00+08:00`).toUTCString()}</pubDate>
      <dc:creator>Teng Chan Leong</dc:creator>
${a.topics.map((t) => `      <category>${esc(topics[t].label)}</category>`).join("\n")}
      <description>${esc(plain(a.summary))}</description>
    </item>`;
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:dc="http://purl.org/dc/elements/1.1/">
  <channel>
    <title>Insights by Teng Chan Leong</title>
    <link>${SITE_URL}/insights</link>
    <atom:link href="${SITE_URL}/insights/feed.xml" rel="self" type="application/rss+xml" />
    <description>Regional business, marketing, leadership, digital and AI, by Teng Chan Leong, CEO of Skribble Group and founder of SAMA.</description>
    <language>en</language>
${items}
  </channel>
</rss>
`;
  return new Response(xml, { headers: { "Content-Type": "application/rss+xml; charset=utf-8" } });
}
