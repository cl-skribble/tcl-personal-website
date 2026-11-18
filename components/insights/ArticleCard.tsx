import type { Article } from "@/lib/insights";
import { fmtArticleDate, readingMinutes, topics } from "@/lib/insights";

export default function ArticleCard({ a, headingLevel = "h2" }: { a: Article; headingLevel?: "h2" | "h3" }) {
  const H = headingLevel;
  return (
    <article className="group relative flex flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-6 hover:border-blueprint-cyan/50 hover:bg-white/[0.05] transition-colors">
      <div className="flex flex-wrap items-center gap-2 mb-4">
        {a.topics.map((t, i) => (
          <a
            key={t}
            href={`/insights/topic/${t}`}
            className={`relative z-10 text-[11px] font-semibold uppercase tracking-widest px-2.5 py-1 rounded-full ${
              i === 0 ? "bg-catalyst-blue text-white" : "border border-white/20 text-white/60 hover:text-white"
            }`}
          >
            {topics[t].label}
          </a>
        ))}
      </div>
      <H className="font-display font-extrabold uppercase tracking-tight text-2xl leading-[1.05] text-white group-hover:text-blueprint-cyan transition-colors">
        <a href={`/insights/${a.slug}`} className="after:absolute after:inset-0">{a.title}</a>
      </H>
      <p className="text-white/65 text-[15px] leading-relaxed mt-3 line-clamp-4">{a.description}</p>
      <p className="text-white/40 text-xs mt-auto pt-5">
        <time dateTime={a.published}>{fmtArticleDate(a.published)}</time> · {readingMinutes(a)} min read
      </p>
    </article>
  );
}
