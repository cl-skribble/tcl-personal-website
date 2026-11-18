import type { Metadata } from "next";
import PageShell from "@/components/events/PageShell";
import ArticleCard from "@/components/insights/ArticleCard";
import TopicNav from "@/components/insights/TopicNav";
import { sortedArticles } from "@/lib/insights";
import { SITE_URL, jsonLdString } from "@/lib/site";

export const metadata: Metadata = {
  title: "Insights: Regional Business, Marketing, Leadership, Digital & AI | Teng Chan Leong",
  description:
    "Articles by Teng Chan Leong, CEO of Skribble Group and founder of SAMA, on regional business in Southeast Asia, marketing, leadership, digital transformation, AI, and a daily digest of mental models for leaders.",
  alternates: {
    canonical: "/insights",
    types: { "application/rss+xml": [{ url: "/insights/feed.xml", title: "Teng Chan Leong: Insights" }] },
  },
  openGraph: {
    title: "Insights by Teng Chan Leong",
    description: "Regional business, marketing, leadership, digital and AI, from an operator in Southeast Asia.",
    url: `${SITE_URL}/insights`,
    type: "website",
    images: [{ url: "/images/profile.jpg", alt: "Teng Chan Leong" }],
  },
};

export default function InsightsPage() {
  const list = sortedArticles();
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "@id": `${SITE_URL}/insights#blog`,
    name: "Insights by Teng Chan Leong",
    url: `${SITE_URL}/insights`,
    inLanguage: "en",
    author: { "@id": `${SITE_URL}/#person` },
    publisher: { "@id": `${SITE_URL}/#person` },
    blogPost: list.map((a) => ({
      "@type": "BlogPosting",
      headline: a.title,
      url: `${SITE_URL}/insights/${a.slug}`,
      datePublished: a.published,
    })),
  };

  return (
    <PageShell eyebrow="Insights · Articles" title={<>Insights</>}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdString(jsonLd) }} />
      <section className="bg-catalyst-navy py-14">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <p className="text-white/80 text-lg leading-relaxed max-w-3xl">
            Long-form thinking from Teng Chan Leong, CEO of Skribble Group and founder of SAMA, the Strategic Asia
            Marketing Alliance, based in Kuala Lumpur, Malaysia. Written from the work: building agencies across
            Southeast Asia, speaking at forums, and running the businesses day to day.
          </p>
          <div className="mt-8">
            <TopicNav />
          </div>
        </div>
      </section>
      <section className="bg-catalyst-navy pb-24">
        <div className="max-w-5xl mx-auto px-6 lg:px-8 grid gap-6 sm:grid-cols-2">
          {list.map((a) => <ArticleCard key={a.slug} a={a} />)}
        </div>
        <div className="max-w-5xl mx-auto px-6 lg:px-8 mt-12 text-sm text-white/50">
          <a href="/insights/feed.xml" className="hover:text-blueprint-cyan">RSS feed</a>
          <span className="mx-2">·</span>
          <a href="/speaking#book" className="hover:text-blueprint-cyan">Invite Chan Leong to speak on these topics →</a>
        </div>
      </section>
    </PageShell>
  );
}
