import Image from "next/image";
import FadeIn from "@/components/FadeIn";

const credentials = [
  { label: "Education", value: "Carnegie Mellon University, BSc Chemical Engineering '14" },
  { label: "School", value: "St. George's Institution, Taiping '08" },
  { label: "Current Role", value: "CEO, Skribble Group" },
  { label: "Board", value: "INTI Industry Advisory Board" },
];

const communities = [
  "American University Alumni Malaysia (AUAM)",
  "USAPPS Education NGO",
  "BNI Business Network",
  "REGENERASI Youth Movement",
  "FutureLab Mentorship",
];

export default function About() {
  return (
    <section id="about" className="py-24 lg:py-32 bg-cream">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Photo */}
          <FadeIn direction="left">
            <div className="relative">
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden max-w-sm mx-auto lg:max-w-none">
                <Image
                  src="/images/profile.jpg"
                  alt="Teng Chan Leong"
                  fill
                  sizes="(max-width: 768px) 90vw, 45vw"
                  className="object-cover object-top"
                />
              </div>
              {/* Accent dot */}
              <div className="absolute -top-4 -left-4 w-20 h-20 rounded-full bg-teal/20 -z-10" />
              <div className="absolute -bottom-4 -right-4 w-14 h-14 rounded-full bg-magenta/15 -z-10" />
            </div>
          </FadeIn>

          {/* Content */}
          <FadeIn direction="right" delay={0.1}>
            <div>
              <p className="text-magenta text-xs font-semibold uppercase tracking-[0.2em] mb-4">
                About CL
              </p>
              <h2 className="text-4xl lg:text-5xl font-black text-carbon leading-tight mb-6">
                A Builder,<br />
                A Leader,<br />
                <span className="text-magenta">A Connector.</span>
              </h2>

              <div className="space-y-4 text-carbon/70 leading-relaxed mb-8">
                <p>
                  With over <strong className="text-carbon font-semibold">10 years</strong> spearheading digital initiatives,
                  Chan Leong is no stranger to the transformative power of data, branding, and marketing.
                  As CEO of <strong className="text-carbon font-semibold">Skribble Group</strong>, he translates deep expertise
                  into tangible results for businesses across Southeast Asia.
                </p>
                <p>
                  His journey began at a Malaysian conglomerate, where he served as Head of Digital
                  Transformation. Today he leads Skribble Group — spanning Skribble Me, Skribble Lab,
                  Skribble Ventures and Skribble Media — and founded <strong className="text-carbon font-semibold">SAMA Alliance</strong>,
                  a regional marketing alliance with 50+ independent agencies across APAC.
                </p>
              </div>

              {/* Credential list */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {credentials.map((c) => (
                  <div key={c.label} className="bg-white rounded-xl p-4">
                    <p className="text-[10px] font-semibold uppercase tracking-wider text-carbon/40 mb-1">{c.label}</p>
                    <p className="text-xs font-semibold text-carbon leading-snug">{c.value}</p>
                  </div>
                ))}
              </div>

              {/* Community */}
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-wider text-carbon/40 mb-3">Community</p>
                <div className="flex flex-wrap gap-2">
                  {communities.map((c) => (
                    <span key={c} className="text-xs bg-white border border-carbon/10 text-carbon/70 px-3 py-1.5 rounded-full font-medium">
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
