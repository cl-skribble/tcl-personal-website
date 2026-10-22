import type { Metadata } from "next";
import PageShell from "@/components/events/PageShell";
import { allCoverage, pressCategories } from "@/lib/press";
import { SITE_URL, jsonLdString } from "@/lib/site";

export const metadata: Metadata = {
  title: "Press & Media | Teng Chan Leong",
  description:
    "Interviews, articles, industry reports and announcements featuring Teng Chan Leong, CEO of Skribble Group and Founder of SAMA, with links to every original source.",
  alternates: { canonical: "/press" },
};

const featured = [
  { outlet: "The Edge Malaysia", title: "Gen AI Setting New Job Standards for Creative Industry", note: "Q&A with Skribble CEO Teng Chan Leong on AI and creative work.", url: "https://theedgemalaysia.com/node/727331" },
  { outlet: "BFM 89.9", title: "The Strategic Asia Marketing Alliance: Where Rivals and Partners Unite", note: "Podcast on SAMA and regional collaboration.", url: "https://www.bfm.my/content/podcast/the-strategic-asia-marketing-alliance-where-rivals-and-partners-unite" },
  { outlet: "BFM 89.9", title: "3 Branding Lessons from Disney's Snow White Remake", note: "Podcast guest appearance on brand clarity.", url: "https://www.bfm.my/content/podcast/3-branding-lessons-from-disneys-snow-white-remake" },
  { outlet: "Agency of the Year Awards 2023", title: "Agency Leader of the Year, Bronze", note: "Official winners record.", url: "https://awards.marketing-interactive.com/agency-of-the-year-my/2023-aoty-winners/" },
  { outlet: "Andersen Consulting", title: "Andersen Consulting Adds Collaborating Firm Skribble", note: "Andersen names Skribble as a collaborating firm.", url: "https://global.andersen.com/resources/andersen-consulting-adds-collaborating-firm-skribble" },
  { outlet: "REHDA Institute", title: "Summary Report: Digital Marketing Insight for Malaysia Real Estate", note: "Industry report naming Teng Chan Leong and Skribble.", url: "https://rehdainstitute.com/wp-content/uploads/2023/10/F_DMTI-Summary-Report_v2.pdf" },
];

export default function PressPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Press & Media: Teng Chan Leong",
    url: `${SITE_URL}/press`,
    about: { "@id": `${SITE_URL}/#person` },
    mainEntity: {
      "@type": "ItemList",
      itemListElement: allCoverage.map((a, i) => ({
        "@type": "ListItem",
        position: i + 1,
        url: a.url,
        name: `${a.outlet}: ${a.title}`,
      })),
    },
  };

  return (
    <PageShell eyebrow="Interviews · Articles · Reports" title={<>Press &amp; Media</>}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdString(jsonLd) }} />

      <section className="bg-catalyst-navy py-16">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <p className="text-white/70 max-w-2xl mb-10 leading-relaxed">
            Original sources featuring Teng Chan Leong, Chief Executive Officer of Skribble Group and
            Founder of the Strategic Asia Marketing Alliance (SAMA). Every item links to the publisher&apos;s own page.
          </p>
          <h2 className="font-display font-extrabold uppercase text-3xl text-white mb-8">Start here</h2>
          <div className="grid md:grid-cols-2 gap-5">
            {featured.map((f) => (
              <a key={f.url} href={f.url} target="_blank" rel="noopener noreferrer"
                className="block rounded-2xl border border-white/10 bg-catalyst-navy-l p-6 hover:border-blueprint-cyan/50 transition-colors">
                <p className="text-blueprint-cyan text-xs font-semibold uppercase tracking-widest mb-2">{f.outlet}</p>
                <h3 className="text-white font-bold leading-snug mb-2">{f.title}</h3>
                <p className="text-white/55 text-sm">{f.note}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {pressCategories.map((cat) => {
        const items = allCoverage.filter((a) => a.category === cat);
        if (!items.length) return null;
        return (
          <section key={cat} className="bg-catalyst-navy py-12 border-t border-white/10">
            <div className="max-w-5xl mx-auto px-6 lg:px-8">
              <h2 className="font-display font-extrabold uppercase text-2xl text-white/80 mb-6">{cat}</h2>
              <ul className="divide-y divide-white/8">
                {items.map((item) => (
                  <li key={item.url}>
                    <a href={item.url} target="_blank" rel="noopener noreferrer"
                      className="flex items-start gap-4 py-3.5 group">
                      <div className="flex-1 min-w-0">
                        <p className="text-xs font-semibold text-white/45 mb-0.5">{item.outlet}</p>
                        <p className="text-white group-hover:text-blueprint-cyan transition-colors leading-snug">{item.title}</p>
                        {item.note && <p className="text-white/45 text-xs mt-0.5">{item.note}</p>}
                      </div>
                      <span className="text-white/30 group-hover:text-blueprint-cyan shrink-0">↗</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        );
      })}
    </PageShell>
  );
}
