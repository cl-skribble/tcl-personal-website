import Image from "next/image";
import FadeIn from "@/components/FadeIn";

const credentials = [
  { label: "Education",    value: "Carnegie Mellon University, BSc Chemical Engineering '14" },
  { label: "School",       value: "St. George's Institution, Taiping '08" },
  { label: "Current Role", value: "CEO, Skribble Group" },
  { label: "Board",        value: "INTI Industry Advisory Board" },
];

const communities = [
  "American University Alumni Malaysia (AUAM)",
  "USAPPS Education NGO",
  "BNI Business Network",
  "REGENERASI Youth Movement",
  "FutureLab Mentorship",
];

/* ── Blueprint: orthographic cross-section elements ── */
function BlueprintCornerMarks() {
  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none"
      viewBox="0 0 300 400"
      preserveAspectRatio="xMidYMid slice"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Corner registration marks */}
      <g stroke="#4a5568" strokeWidth="1" strokeLinecap="square" opacity="0.5">
        <line x1="12" y1="12" x2="28" y2="12"/><line x1="12" y1="12" x2="12" y2="28"/>
        <line x1="288" y1="12" x2="272" y2="12"/><line x1="288" y1="12" x2="288" y2="28"/>
        <line x1="12" y1="388" x2="28" y2="388"/><line x1="12" y1="388" x2="12" y2="372"/>
        <line x1="288" y1="388" x2="272" y2="388"/><line x1="288" y1="388" x2="288" y2="372"/>
      </g>
      {/* Dimension lines */}
      <g stroke="#4a5568" strokeWidth="0.5" opacity="0.35">
        <line x1="0"   y1="200" x2="8"   y2="200"/>
        <line x1="292" y1="200" x2="300" y2="200"/>
        <line x1="150" y1="0"   x2="150" y2="8"/>
        <line x1="150" y1="392" x2="150" y2="400"/>
      </g>
      {/* Blueprint crosshair at center */}
      <line x1="143" y1="200" x2="157" y2="200" stroke="#0052cc" strokeWidth="0.6" opacity="0.3"/>
      <line x1="150" y1="193" x2="150" y2="207" stroke="#0052cc" strokeWidth="0.6" opacity="0.3"/>
      <circle cx="150" cy="200" r="2" fill="none" stroke="#0052cc" strokeWidth="0.6" opacity="0.3"/>
      {/* Fine section lines */}
      <line x1="0"  y1="133" x2="300" y2="133" stroke="#4a5568" strokeWidth="0.3" opacity="0.18"/>
      <line x1="0"  y1="267" x2="300" y2="267" stroke="#4a5568" strokeWidth="0.3" opacity="0.18"/>
    </svg>
  );
}

export default function About() {
  return (
    <section id="about" className="py-24 lg:py-32 bg-warm-white blueprint-grid-fine">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Photo with blueprint frame */}
          <FadeIn direction="left">
            <div className="relative">
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden max-w-sm mx-auto lg:max-w-none border border-slate-gray/15">
                <Image
                  src="/images/profile.jpg"
                  alt="Teng Chan Leong"
                  fill
                  sizes="(max-width: 768px) 90vw, 45vw"
                  className="object-cover object-top"
                />
                {/* Blueprint overlay on photo */}
                <BlueprintCornerMarks />
              </div>
              {/* Blueprint accent dots */}
              <div className="absolute -top-3 -left-3 w-16 h-16 rounded-full bg-catalyst-blue/10 -z-10" />
              <div className="absolute -bottom-3 -right-3 w-12 h-12 rounded-full bg-blueprint-cyan/10 -z-10" />
              {/* Technical label */}
              <div className="mt-3 flex items-center gap-2 justify-center lg:justify-start">
                <div className="h-px w-6 bg-slate-gray/30"/>
                <span className="text-[10px] font-semibold uppercase tracking-widest text-slate-gray/50">Profile — KL, Malaysia</span>
                <div className="h-px w-6 bg-slate-gray/30"/>
              </div>
            </div>
          </FadeIn>

          {/* Content */}
          <FadeIn direction="right" delay={0.1}>
            <div>
              <p className="text-catalyst-blue text-xs font-semibold uppercase tracking-[0.2em] mb-4">
                About CL
              </p>
              <h2 className="text-4xl lg:text-5xl font-black text-catalyst-navy leading-tight mb-6">
                A Builder,<br />
                A Leader,<br />
                <span className="text-catalyst-blue">A Connector.</span>
              </h2>

              <div className="space-y-4 text-slate-gray leading-relaxed mb-8">
                <p>
                  With over <strong className="text-catalyst-navy font-semibold">10 years</strong> spearheading digital initiatives,
                  Chan Leong is no stranger to the transformative power of data, branding, and marketing.
                  As CEO of <strong className="text-catalyst-navy font-semibold">Skribble Group</strong>, he translates deep expertise
                  into tangible results for businesses across Southeast Asia.
                </p>
                <p>
                  His journey began at a Malaysian conglomerate, where he served as Head of Digital
                  Transformation. Today he leads Skribble Group — spanning Skribble Me, Skribble Lab,
                  Skribble Ventures and Skribble Media — and founded <strong className="text-catalyst-navy font-semibold">SAMA Alliance</strong>,
                  a regional marketing alliance with 50+ independent agencies across APAC.
                </p>
              </div>

              {/* Credential cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {credentials.map((c) => (
                  <div key={c.label} className="bg-white border border-slate-gray/12 rounded-xl p-4 group hover:border-catalyst-blue/30 transition-colors">
                    <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-gray/50 mb-1">{c.label}</p>
                    <p className="text-xs font-semibold text-catalyst-navy leading-snug">{c.value}</p>
                  </div>
                ))}
              </div>

              {/* Community */}
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-gray/50 mb-3">Community</p>
                <div className="flex flex-wrap gap-2">
                  {communities.map((c) => (
                    <span key={c} className="text-xs bg-white border border-slate-gray/15 text-slate-gray px-3 py-1.5 rounded-full font-medium hover:border-catalyst-blue/30 hover:text-catalyst-navy transition-colors">
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
