import type { Block } from "@/lib/insights";

const isExternal = (href: string) => /^https?:\/\//.test(href);

/** Renders **bold** and [text](href) inline markup. */
export function Inline({ text }: { text: string }) {
  const parts = text.split(/(\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\))/g);
  return (
    <>
      {parts.map((part, i) => {
        const bold = part.match(/^\*\*([^*]+)\*\*$/);
        if (bold) return <strong key={i} className="font-semibold text-white">{bold[1]}</strong>;
        const link = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
        if (link) {
          const [, label, href] = link;
          return isExternal(href)
            ? <a key={i} href={href} target="_blank" rel="noopener noreferrer" className="text-blueprint-cyan underline underline-offset-2 decoration-blueprint-cyan/40 hover:decoration-blueprint-cyan">{label}</a>
            : <a key={i} href={href} className="text-blueprint-cyan underline underline-offset-2 decoration-blueprint-cyan/40 hover:decoration-blueprint-cyan">{label}</a>;
        }
        return part;
      })}
    </>
  );
}

export const slugify = (s: string) =>
  s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "").slice(0, 60);

export function Blocks({ blocks }: { blocks: Block[] }) {
  return (
    <>
      {blocks.map((b, i) => {
        switch (b.type) {
          case "h2":
            return (
              <h2 key={i} id={slugify(b.text)} className="scroll-mt-24 font-display font-extrabold uppercase tracking-tight text-2xl sm:text-3xl text-white leading-tight pt-6">
                {b.text}
              </h2>
            );
          case "h3":
            return <h3 key={i} className="text-white font-semibold text-xl pt-2">{b.text}</h3>;
          case "ul":
            return (
              <ul key={i} className="list-disc pl-6 space-y-2.5 marker:text-blueprint-cyan">
                {b.items.map((t, j) => <li key={j}><Inline text={t} /></li>)}
              </ul>
            );
          case "ol":
            return (
              <ol key={i} className="list-decimal pl-6 space-y-2.5 marker:text-blueprint-cyan marker:font-semibold">
                {b.items.map((t, j) => <li key={j}><Inline text={t} /></li>)}
              </ol>
            );
          case "quote":
            return (
              <blockquote key={i} className="border-l-2 border-blueprint-cyan pl-5 py-1">
                <p className="text-white text-xl leading-snug">&ldquo;{b.text}&rdquo;</p>
                {b.cite && (
                  <footer className="text-white/50 text-sm mt-2">
                    {b.href
                      ? <a href={b.href} target="_blank" rel="noopener noreferrer" className="hover:text-blueprint-cyan">{b.cite} ↗</a>
                      : b.cite}
                  </footer>
                )}
              </blockquote>
            );
          case "callout":
            return (
              <aside key={i} className="rounded-xl border border-catalyst-blue/40 bg-catalyst-blue/10 px-6 py-5">
                <p className="text-blueprint-cyan text-xs font-semibold uppercase tracking-[0.2em] mb-2">{b.title}</p>
                <p className="text-white/85"><Inline text={b.text} /></p>
              </aside>
            );
          default:
            return <p key={i}><Inline text={b.text} /></p>;
        }
      })}
    </>
  );
}
