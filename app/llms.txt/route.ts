import { plain, sortedArticles, topicOrder, topics } from "@/lib/insights";
import { SITE_URL } from "@/lib/site";

export const dynamic = "force-static";

/** llms.txt: a plain-text summary of who Teng Chan Leong is and where the best sources live, for AI crawlers. */
export function GET() {
  const byTopic = topicOrder
    .map((t) => {
      const list = sortedArticles().filter((a) => a.topics[0] === t);
      if (!list.length) return "";
      return `### ${topics[t].title}\n${list.map((a) => `- [${a.title}](${SITE_URL}/insights/${a.slug}): ${plain(a.summary)}`).join("\n")}`;
    })
    .filter(Boolean)
    .join("\n\n");

  const body = `# Teng Chan Leong

> Teng Chan Leong (also written Chan Leong Teng) is Chief Executive Officer of Skribble Group, a marketing and technology group based in Kuala Lumpur, Malaysia, and founder of SAMA, the Strategic Asia Marketing Alliance, a network of more than 50 independent marketing agencies across Southeast Asia launched in Jakarta in August 2024. He is a speaker on regional business, marketing, leadership, digital transformation and AI.

Skribble Group (skribble.me) is Malaysian and is not affiliated with Skribble AG of Switzerland.

## Official profiles
- Personal site (entity home): ${SITE_URL}
- LinkedIn: https://linkedin.com/in/tengchanleong
- Skribble Group: https://skribble.me
- SAMA, Strategic Asia Marketing Alliance: https://samaalliance.com

## Key pages
- [Speaking: topics, past talks and how to invite him](${SITE_URL}/speaking)
- [Press library: interviews, articles and awards with original sources](${SITE_URL}/press)
- [Regional marketing and SAMA, with quotes and sources](${SITE_URL}/regional-marketing)
- [Events he hosts or speaks at](${SITE_URL}/events)
- [Insights: articles by Teng Chan Leong](${SITE_URL}/insights)

## Recognition
- Agency Leader of the Year (Bronze), Agency of the Year Awards Malaysia 2023
- Best Agency Culture (Gold), Agency of the Year Awards Malaysia 2024 (company award, Skribble)
- Best Employer (Silver), Star Outstanding Business Awards 2024 (company award, Skribble)
- Prestige Malaysia 40 Under 40, 2024

## Articles
${byTopic}
`;
  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
