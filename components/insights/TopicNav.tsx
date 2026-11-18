import { articlesForTopic, sortedArticles, topicOrder, topics, type Topic } from "@/lib/insights";

export default function TopicNav({ active }: { active?: Topic }) {
  const pill = (on: boolean) =>
    `whitespace-nowrap text-sm font-semibold px-4 py-2 rounded-full transition-colors ${
      on ? "bg-catalyst-blue text-white" : "border border-white/15 text-white/70 hover:text-white hover:border-white/40"
    }`;
  return (
    <nav aria-label="Insight topics" className="flex flex-wrap gap-2.5">
      <a href="/insights" className={pill(!active)} aria-current={!active ? "page" : undefined}>
        All <span className="opacity-60">({sortedArticles().length})</span>
      </a>
      {topicOrder.map((t) => (
        <a key={t} href={`/insights/topic/${t}`} className={pill(active === t)} aria-current={active === t ? "page" : undefined}>
          {topics[t].label} <span className="opacity-60">({articlesForTopic(t).length})</span>
        </a>
      ))}
    </nav>
  );
}
