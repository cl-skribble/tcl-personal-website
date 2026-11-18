import ArticleCard from "@/components/insights/ArticleCard";
import { sortedArticles } from "@/lib/insights";

/** Homepage strip: latest three articles, server-rendered so crawlers see the links. */
export default function Insights() {
  const latest = sortedArticles().slice(0, 3);
  return (
    <section id="insights" className="bg-catalyst-navy py-24 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-10">
          <div>
            <p className="text-blueprint-cyan text-xs font-semibold uppercase tracking-[0.25em] mb-3">Insights</p>
            <h2 className="font-display font-extrabold uppercase tracking-tight text-4xl sm:text-5xl text-white leading-[0.95]">
              Thinking out loud
            </h2>
            <p className="text-white/60 mt-4 max-w-2xl">
              Articles on regional business in Southeast Asia, marketing, leadership, digital transformation and AI.
            </p>
          </div>
          <a href="/insights" className="text-blueprint-cyan font-semibold text-sm hover:underline shrink-0">All insights →</a>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {latest.map((a) => <ArticleCard key={a.slug} a={a} headingLevel="h3" />)}
        </div>
      </div>
    </section>
  );
}
