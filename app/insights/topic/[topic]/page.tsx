import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageShell from "@/components/events/PageShell";
import ArticleCard from "@/components/insights/ArticleCard";
import TopicNav from "@/components/insights/TopicNav";
import { articlesForTopic, isTopic, topicOrder, topics } from "@/lib/insights";
import { SITE_URL, jsonLdString } from "@/lib/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return topicOrder.map((topic) => ({ topic }));
}

export async function generateMetadata({ params }: { params: Promise<{ topic: string }> }): Promise<Metadata> {
  const { topic } = await params;
  if (!isTopic(topic)) return {};
  const t = topics[topic];
  return {
    title: `${t.title}: Articles by Teng Chan Leong`,
    description: t.intro.slice(0, 158).replace(/\s+\S*$/, "") + "…",
    keywords: t.keywords,
    alternates: { canonical: `/insights/topic/${topic}` },
    openGraph: { title: `${t.title} | Teng Chan Leong`, description: t.intro, url: `${SITE_URL}/insights/topic/${topic}`, type: "website" },
  };
}

export default async function TopicPage({ params }: { params: Promise<{ topic: string }> }) {
  const { topic } = await params;
  if (!isTopic(topic)) notFound();
  const t = topics[topic];
  const list = articlesForTopic(topic);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        name: `${t.title}: articles by Teng Chan Leong`,
        url: `${SITE_URL}/insights/topic/${topic}`,
        about: { "@type": "Thing", name: t.title },
        author: { "@id": `${SITE_URL}/#person` },
        isPartOf: { "@id": `${SITE_URL}/insights#blog` },
        mainEntity: {
          "@type": "ItemList",
          itemListElement: list.map((a, i) => ({ "@type": "ListItem", position: i + 1, url: `${SITE_URL}/insights/${a.slug}`, name: a.title })),
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
          { "@type": "ListItem", position: 2, name: "Insights", item: `${SITE_URL}/insights` },
          { "@type": "ListItem", position: 3, name: t.label, item: `${SITE_URL}/insights/topic/${topic}` },
        ],
      },
    ],
  };

  return (
    <PageShell eyebrow={`Insights · ${t.label}`} title={<>{t.label}</>}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdString(jsonLd) }} />
      <section className="bg-catalyst-navy py-14">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <p className="text-white/45 text-sm mb-3"><a href="/insights" className="hover:text-blueprint-cyan">Insights</a> / {t.label}</p>
          <h2 className="text-white text-2xl font-semibold mb-3">{t.title}</h2>
          <p className="text-white/75 text-lg leading-relaxed max-w-3xl">{t.intro}</p>
          <div className="mt-8"><TopicNav active={topic} /></div>
        </div>
      </section>
      <section className="bg-catalyst-navy pb-24">
        <div className="max-w-5xl mx-auto px-6 lg:px-8 grid gap-6 sm:grid-cols-2">
          {list.map((a) => <ArticleCard key={a.slug} a={a} headingLevel="h3" />)}
        </div>
      </section>
    </PageShell>
  );
}
