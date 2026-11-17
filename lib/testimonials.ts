export type Testimonial = { name: string; title: string; company: string; quote: string };

/** Max length of a one-liner, in characters (Chinese packs more per character, so this fits all three languages). */
export const QUOTE_MAX = 160;

/** Han characters: used to tag Chinese quotes with lang="zh" so the browser picks a CJK font and line height. */
export const hasHan = (s: string) => /[㐀-鿿豈-﫿]/.test(s);

const DEMO: Testimonial[] = [
  { name: "Aisyah Rahman", title: "Head of Marketing", company: "Kiara Living", quote: "I left with three AI workflows and had two running in our team by Friday." },
  { name: "Daniel Wong", title: "Founder", company: "Brightline Studio", quote: "终于有人用真实案例讲AI，而不是空谈。第二天就用上了。" },
  { name: "Hafiz Ismail", title: "Operations Manager", company: "Sinar Logistik", quote: "Sesi yang sangat praktikal. Saya terus automasikan laporan mingguan kami." },
  { name: "Priya Nair", title: "Finance Director", company: "Meridian Group", quote: "Practical, honest, and no hype. The dashboard demo alone was worth the afternoon." },
];

/**
 * Approved testimonials for an event, from the RSVP sheet's Apps Script (doGet ?action=testimonials).
 * Only rows marked Approved in the "_Testimonials" tab come back. Fails quiet: on any error the page hides the quotes.
 * TESTIMONIALS_DEMO=1 (local dev only) returns sample quotes so the section can be previewed before real ones arrive.
 */
export async function getTestimonials(slug: string): Promise<Testimonial[]> {
  if (process.env.TESTIMONIALS_DEMO === "1" && process.env.NODE_ENV !== "production") return DEMO;
  const base = process.env.RSVP_WEBHOOK_URL;
  if (!base) return [];
  try {
    const res = await fetch(`${base}?action=testimonials&slug=${encodeURIComponent(slug)}`, {
      next: { revalidate: 300 },
    });
    const out = await res.json();
    if (!out?.ok || !Array.isArray(out.testimonials)) return [];
    return out.testimonials
      .map((t: Testimonial) => ({
        name: String(t.name ?? "").trim(),
        title: String(t.title ?? "").trim(),
        company: String(t.company ?? "").trim(),
        quote: String(t.quote ?? "").trim(),
      }))
      .filter((t: Testimonial) => t.name && t.quote);
  } catch {
    return [];
  }
}
