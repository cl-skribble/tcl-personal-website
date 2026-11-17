import Link from "next/link";
import { hasHan, type Testimonial } from "@/lib/testimonials";

function Attribution({ t, large = false }: { t: Testimonial; large?: boolean }) {
  return (
    <figcaption className={large ? "mt-6" : "mt-4"}>
      <span className={`block text-white font-semibold ${large ? "text-base" : "text-[15px]"}`}>{t.name}</span>
      <span className="block text-white/55 text-sm">{t.title}{t.title && t.company ? ", " : ""}{t.company}</span>
    </figcaption>
  );
}

/** "What guests said" on past event pages. Lead quote large, the rest in a two-column grid. */
export default function Testimonials({ items, feedbackHref }: { items: Testimonial[]; feedbackHref: string }) {
  const [lead, ...rest] = items;

  return (
    <section className="bg-catalyst-navy pb-20" aria-labelledby="testimonials-heading">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <div className="border-t border-white/10 pt-14">
          <div className="flex flex-wrap items-baseline justify-between gap-4 mb-10">
            <h2 id="testimonials-heading" className="font-display font-extrabold uppercase text-3xl sm:text-4xl text-white">
              What guests said
            </h2>
            <Link href={feedbackHref} className="text-sm font-semibold text-blueprint-cyan hover:text-white transition-colors">
              Were you there? Add yours →
            </Link>
          </div>

          {!lead ? (
            <p className="text-white/55 text-[15px]">
              No feedback yet. If you attended,{" "}
              <Link href={feedbackHref} className="underline decoration-white/30 underline-offset-4 hover:decoration-white text-white/80">
                share a line
              </Link>
              .
            </p>
          ) : (
            <>
              <figure className="relative max-w-3xl pt-14">
                <span aria-hidden="true" className="absolute top-0 -left-1 font-display font-extrabold text-[110px] leading-[0.8] text-catalyst-blue select-none">
                  &ldquo;
                </span>
                <blockquote
                  lang={hasHan(lead.quote) ? "zh" : undefined}
                  className={`relative text-white text-2xl sm:text-[32px] font-medium tracking-tight ${hasHan(lead.quote) ? "leading-[1.6]" : "leading-[1.3]"}`}
                >
                  {lead.quote}
                </blockquote>
                <Attribution t={lead} large />
              </figure>

              {rest.length > 0 && (
                <div className="mt-14 grid sm:grid-cols-2 gap-x-10 gap-y-10">
                  {rest.map((t, i) => (
                    <figure key={`${t.name}-${i}`} className="border-l-2 border-blueprint-cyan/60 pl-5">
                      <blockquote
                        lang={hasHan(t.quote) ? "zh" : undefined}
                        className={`text-white/85 text-[17px] ${hasHan(t.quote) ? "leading-[1.8]" : "leading-relaxed"}`}
                      >
                        {t.quote}
                      </blockquote>
                      <Attribution t={t} />
                    </figure>
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </section>
  );
}
