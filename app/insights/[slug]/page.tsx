import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import PageShell from "@/components/events/PageShell";
import ArticleCard from "@/components/insights/ArticleCard";
import Carousel from "@/components/insights/Carousel";
import { Blocks, Inline, slugify } from "@/components/insights/Rich";
import {
  articles, fmtArticleDate, getArticle, plain, readingMinutes, related, topics, wordCount,
} from "@/lib/insights";
import { SITE_URL, jsonLdString } from "@/lib/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const a = getArticle(slug);
  if (!a) return {};
  const image = a.image?.src ?? a.carousel?.[0]?.src ?? "/images/profile.jpg";
  return {
    title: `${a.seoTitle ?? a.title} | Teng Chan Leong`,
    description: a.description,
    keywords: a.keywords,
    authors: [{ name: "Teng Chan Leong", url: SITE_URL }],
    alternates: { canonical: `/insights/${a.slug}` },
    openGraph: {
      type: "article",
      title: a.title,
      description: a.description,
      url: `${SITE_URL}/insights/${a.slug}`,
      publishedTime: a.published,
      modifiedTime: a.updated ?? a.published,
      authors: [SITE_URL],
      section: topics[a.topics[0]].label,
      tags: a.keywords,
      images: [{ url: image, alt: a.image?.alt ?? "Teng Chan Leong" }],
    },
    twitter: { card: "summary_large_image", title: a.title, description: a.description, images: [image] },
  };
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return <p className="text-blueprint-cyan text-xs font-semibold uppercase tracking-[0.2em] mb-3">{children}</p>;
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const a = getArticle(slug);
  if (!a) notFound();

  const url = `${SITE_URL}/insights/${a.slug}`;
  const primary = topics[a.topics[0]];
  const toc = a.body.filter((b): b is { type: "h2"; text: string } => b.type === "h2");
  const more = related(a);
  const abs = (href: string) => (href.startsWith("/") ? `${SITE_URL}${href}` : href);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        "@id": `${url}#article`,
        headline: a.title,
        description: a.description,
        url,
        mainEntityOfPage: url,
        datePublished: a.published,
        dateModified: a.updated ?? a.published,
        inLanguage: "en",
        image: [a.image?.src, ...(a.carousel ?? []).map((c) => c.src)].filter(Boolean).length
          ? [a.image?.src, ...(a.carousel ?? []).map((c) => c.src)].filter(Boolean).map((src) => `${SITE_URL}${src}`)
          : `${SITE_URL}/images/profile.jpg`,
        author: {
          "@type": "Person",
          "@id": `${SITE_URL}/#person`,
          name: "Teng Chan Leong",
          alternateName: "Chan Leong Teng",
          url: SITE_URL,
          jobTitle: "Chief Executive Officer, Skribble Group; Founder, SAMA",
        },
        publisher: { "@id": `${SITE_URL}/#person` },
        isPartOf: { "@id": `${SITE_URL}/insights#blog` },
        articleSection: primary.label,
        keywords: a.keywords.join(", "),
        about: a.topics.map((t) => ({ "@type": "Thing", name: topics[t].title })),
        wordCount: wordCount(a),
        abstract: plain(a.summary),
        citation: a.sources.filter((s) => s.href).map((s) => abs(s.href!)),
        speakable: { "@type": "SpeakableSpecification", cssSelector: [".article-summary", ".article-takeaways"] },
      },
      {
        "@type": "FAQPage",
        "@id": `${url}#faq`,
        mainEntity: a.faq.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
          { "@type": "ListItem", position: 2, name: "Insights", item: `${SITE_URL}/insights` },
          { "@type": "ListItem", position: 3, name: primary.label, item: `${SITE_URL}/insights/topic/${a.topics[0]}` },
          { "@type": "ListItem", position: 4, name: a.title, item: url },
        ],
      },
    ],
  };

  return (
    <PageShell eyebrow={`Insights · ${primary.label}`} title={<>{a.title}</>} compact>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdString(jsonLd) }} />

      <article className="bg-catalyst-navy">
        {/* Byline */}
        <div className="max-w-3xl mx-auto px-6 lg:px-8 pt-10">
          <nav aria-label="Breadcrumb" className="text-white/45 text-sm mb-6">
            <a href="/insights" className="hover:text-blueprint-cyan">Insights</a>
            <span className="mx-2">/</span>
            <a href={`/insights/topic/${a.topics[0]}`} className="hover:text-blueprint-cyan">{primary.label}</a>
          </nav>
          <p className="text-white/80 text-xl leading-relaxed">{a.description}</p>
          <div className="flex items-center gap-4 mt-8 pb-8 border-b border-white/10">
            <Image src="/images/profile-avatar.jpg" alt="Teng Chan Leong" width={52} height={52} className="rounded-full object-cover w-13 h-13" />
            <div className="text-sm">
              <p className="text-white font-semibold">
                <a href="/#about" rel="author" className="hover:text-blueprint-cyan">Teng Chan Leong</a>
              </p>
              <p className="text-white/50">CEO, Skribble Group · Founder, SAMA</p>
              <p className="text-white/40 mt-0.5">
                <time dateTime={a.published}>{fmtArticleDate(a.published)}</time> · {readingMinutes(a)} min read
              </p>
              {a.digestDate && (
                <p className="text-blueprint-cyan/80 mt-0.5">From the daily digest of {fmtArticleDate(a.digestDate)}</p>
              )}
            </div>
          </div>
        </div>

        {a.image && (
          <div className="max-w-4xl mx-auto px-6 lg:px-8 pt-10">
            <Image src={a.image.src} alt={a.image.alt} width={1600} height={1000} className="w-full h-auto rounded-2xl object-cover max-h-[520px]" priority />
          </div>
        )}

        <div className="max-w-3xl mx-auto px-6 lg:px-8 py-10 space-y-10">
          {/* Answer first */}
          <section aria-label="Short answer" className="rounded-2xl border border-blueprint-cyan/30 bg-blueprint-cyan/[0.06] p-6 sm:p-7">
            <SectionLabel>The short answer</SectionLabel>
            <p className="article-summary text-white text-lg leading-relaxed"><Inline text={a.summary} /></p>
          </section>

          <section aria-label="Key takeaways">
            <SectionLabel>Key takeaways</SectionLabel>
            <ul className="article-takeaways space-y-3">
              {a.takeaways.map((t) => (
                <li key={t} className="flex gap-3 text-white/85 leading-relaxed">
                  <span aria-hidden="true" className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blueprint-cyan" />
                  <span><Inline text={t} /></span>
                </li>
              ))}
            </ul>
          </section>

          {a.carousel && a.carousel.length > 0 && (
            <div>
              <SectionLabel>The carousel · swipe through</SectionLabel>
              <Carousel slides={a.carousel} title={a.title} />
            </div>
          )}

          {toc.length > 2 && (
            <nav aria-label="In this article" className="border-y border-white/10 py-6">
              <SectionLabel>In this article</SectionLabel>
              <ol className="space-y-1.5 text-[15px]">
                {toc.map((h) => (
                  <li key={h.text}>
                    <a href={`#${slugify(h.text)}`} className="text-white/70 hover:text-blueprint-cyan">{h.text}</a>
                  </li>
                ))}
              </ol>
            </nav>
          )}

          {/* Body */}
          <div className="space-y-5 text-white/80 text-[17px] leading-[1.75]">
            <Blocks blocks={a.body} />
          </div>

          {/* FAQ */}
          <section aria-labelledby="faq" className="pt-4">
            <h2 id="faq" className="font-display font-extrabold uppercase tracking-tight text-2xl sm:text-3xl text-white mb-6">
              Frequently asked questions
            </h2>
            <dl className="space-y-6">
              {a.faq.map((f) => (
                <div key={f.q}>
                  <dt className="text-white font-semibold text-lg mb-1.5">{f.q}</dt>
                  <dd className="text-white/70 leading-relaxed">{f.a}</dd>
                </div>
              ))}
            </dl>
          </section>

          {a.sources.length > 0 && (
            <section aria-label="Sources" className="border-t border-white/10 pt-8">
              <SectionLabel>Sources and further reading</SectionLabel>
              <ul className="space-y-2 text-sm text-white/60">
                {a.sources.map((s) => (
                  <li key={s.label}>
                    {s.href ? (
                      <a href={s.href} {...(s.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})} className="hover:text-blueprint-cyan">
                        {s.label}{s.href.startsWith("http") ? " ↗" : ""}
                      </a>
                    ) : s.label}
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* Author */}
          <section aria-label="About the author" className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-8">
            <div className="flex flex-col sm:flex-row gap-6">
              <Image src="/images/profile-avatar.jpg" alt="Teng Chan Leong" width={96} height={96} className="rounded-full object-cover w-24 h-24 shrink-0" />
              <div>
                <SectionLabel>About the author</SectionLabel>
                <p className="text-white font-semibold text-lg">Teng Chan Leong</p>
                <p className="text-white/70 leading-relaxed mt-2">
                  Teng Chan Leong (also written Chan Leong Teng) is Chief Executive Officer of Skribble Group, a marketing
                  and technology group in Kuala Lumpur, Malaysia, and founder of SAMA, the Strategic Asia Marketing
                  Alliance of more than 50 independent agencies across Southeast Asia. He was named Agency Leader of the
                  Year (Bronze) at the Agency of the Year Awards 2023 and to Prestige Malaysia&apos;s 40 Under 40, and
                  speaks on regional business, marketing, leadership, digital transformation and AI.
                </p>
                <div className="flex flex-wrap gap-3 mt-5">
                  <a href="/speaking#book" className="bg-catalyst-blue text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-catalyst-blue-l transition-colors">
                    Invite to speak
                  </a>
                  <a href="/press" className="border border-white/25 text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:border-white/60 transition-colors">
                    Press &amp; interviews
                  </a>
                  <a href="https://linkedin.com/in/tengchanleong" target="_blank" rel="noopener noreferrer me" className="border border-white/25 text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:border-white/60 transition-colors">
                    LinkedIn ↗
                  </a>
                </div>
              </div>
            </div>
          </section>

          <p className="text-white/35 text-xs">
            Written with AI assistance from Chan Leong&apos;s own talks, notes and posts.
            {a.event && <> Related event: <a href={`/events/${a.event}`} className="underline hover:text-blueprint-cyan">see photos and details</a>.</>}
          </p>
        </div>
      </article>

      {more.length > 0 && (
        <section className="bg-[#081323] border-t border-white/10 py-16">
          <div className="max-w-5xl mx-auto px-6 lg:px-8">
            <h2 className="font-display font-extrabold uppercase tracking-tight text-2xl sm:text-3xl text-white mb-8">More insights</h2>
            <div className="grid gap-6 md:grid-cols-3">
              {more.map((x) => <ArticleCard key={x.slug} a={x} headingLevel="h3" />)}
            </div>
            <p className="mt-10 text-sm"><a href="/insights" className="text-blueprint-cyan font-semibold hover:underline">All insights →</a></p>
          </div>
        </section>
      )}
    </PageShell>
  );
}
