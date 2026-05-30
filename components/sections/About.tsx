import Image from "next/image";
import FadeIn from "@/components/FadeIn";

/* ── Skribble S-mark as inline SVG (used as credential logo) ── */
function SkribbleMark() {
  return (
    <svg viewBox="-0.5 -0.5 13.5 16" className="w-full h-full" fill="#B71E6C">
      <path d="M2.15386 14.4778C3.34233 14.4778 4.30577 13.4671 4.30577 12.2203C4.30577 10.9736 3.34233 9.96289 2.15386 9.96289C0.965395 9.96289 0.00195312 10.9736 0.00195312 12.2203C0.00195312 13.4671 0.965395 14.4778 2.15386 14.4778Z"/>
      <path d="M4.67377 4.49901C4.67377 4.01643 5.09428 3.61527 6.41647 3.61527C7.58485 3.61527 8.82943 3.95722 10.1502 4.66036L11.5091 1.22459C10.1121 0.400062 8.25511 -0.00109863 6.45457 -0.00109863C2.29891 -0.00109863 0.211914 2.12757 0.211914 4.73881C0.211914 9.98203 7.62295 8.55502 7.62295 10.3225C7.62295 10.8051 7.16293 11.0863 5.88025 11.0863C5.62344 11.0863 5.36097 11.0656 5.09569 11.0375C5.22974 11.4046 5.30735 11.8028 5.30735 12.2202C5.30735 13.1632 4.92918 14.0129 4.32523 14.6154C4.82476 14.6716 5.33416 14.7027 5.84356 14.7027C9.99922 14.7027 12.0862 12.5326 12.0862 9.9613C12.0862 4.77878 4.67518 6.18506 4.67518 4.49752L4.67377 4.49901Z"/>
    </svg>
  );
}

const credentials = [
  {
    label: "Education",
    value: "Carnegie Mellon University, BSc Chemical Engineering '14",
    logo: (
      <div className="w-20 h-20 rounded-xl overflow-hidden bg-white flex items-center justify-center p-2 border border-slate-gray/10 shrink-0">
        <img src="/images/logos/cmu.jpg" alt="Carnegie Mellon University"
          className="w-full h-full object-contain" style={{ mixBlendMode: "multiply" }}/>
      </div>
    ),
  },
  {
    label: "Secondary School",
    value: "St. George's Institution, Taiping '08",
    logo: (
      <div className="w-20 h-20 rounded-xl overflow-hidden bg-white flex items-center justify-center p-1.5 border border-slate-gray/10 shrink-0">
        <img src="/images/logos/sgi-crest.jpg" alt="St. George's Institution"
          className="w-full h-full object-contain" style={{ mixBlendMode: "multiply" }}/>
      </div>
    ),
  },
  {
    label: "Current Role",
    value: "Founder & CEO, Skribble Group",
    logo: (
      <div className="w-20 h-20 rounded-xl bg-white flex items-center justify-center p-3 border border-slate-gray/10 shrink-0">
        <SkribbleMark />
      </div>
    ),
  },
  {
    label: "NGO",
    value: "USAPPS Education — University Advisory & Mentorship",
    logo: (
      <div className="w-20 h-20 rounded-xl overflow-hidden bg-white flex items-center justify-center p-2 border border-slate-gray/10 shrink-0">
        <img src="/images/logos/usapps.jpg" alt="USAPPS"
          className="w-full h-full object-contain" style={{ mixBlendMode: "multiply" }}/>
      </div>
    ),
  },
];

const communities = [
  "American University Alumni Malaysia (AUAM)",
  "BNI Business Network",
  "REGENERASI Youth Movement",
  "FutureLab Mentorship",
  "INTI Industry Advisory Board",
];

function BlueprintCornerMarks() {
  return (
    <svg className="absolute inset-0 w-full h-full pointer-events-none"
      viewBox="0 0 300 400" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
      <g stroke="#4a5568" strokeWidth="1" strokeLinecap="square" opacity="0.5">
        <line x1="12" y1="12" x2="28" y2="12"/><line x1="12" y1="12" x2="12" y2="28"/>
        <line x1="288" y1="12" x2="272" y2="12"/><line x1="288" y1="12" x2="288" y2="28"/>
        <line x1="12" y1="388" x2="28" y2="388"/><line x1="12" y1="388" x2="12" y2="372"/>
        <line x1="288" y1="388" x2="272" y2="388"/><line x1="288" y1="388" x2="288" y2="372"/>
      </g>
      <g stroke="#4a5568" strokeWidth="0.5" opacity="0.35">
        <line x1="0" y1="200" x2="8" y2="200"/><line x1="292" y1="200" x2="300" y2="200"/>
        <line x1="150" y1="0" x2="150" y2="8"/><line x1="150" y1="392" x2="150" y2="400"/>
      </g>
      <line x1="143" y1="200" x2="157" y2="200" stroke="#0052cc" strokeWidth="0.6" opacity="0.3"/>
      <line x1="150" y1="193" x2="150" y2="207" stroke="#0052cc" strokeWidth="0.6" opacity="0.3"/>
      <circle cx="150" cy="200" r="2" fill="none" stroke="#0052cc" strokeWidth="0.6" opacity="0.3"/>
      <line x1="0" y1="133" x2="300" y2="133" stroke="#4a5568" strokeWidth="0.3" opacity="0.18"/>
      <line x1="0" y1="267" x2="300" y2="267" stroke="#4a5568" strokeWidth="0.3" opacity="0.18"/>
    </svg>
  );
}

export default function About() {
  return (
    <section id="about" className="py-24 lg:py-32 bg-warm-white blueprint-grid-fine relative overflow-hidden">

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Photo with blueprint frame */}
          <FadeIn direction="left">
            <div className="relative">
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden max-w-sm mx-auto lg:max-w-none border border-slate-gray/15">
                <Image src="/images/thailand-launch.jpg" alt="Teng Chan Leong"
                  fill sizes="(max-width: 768px) 90vw, 45vw"
                  className="object-cover object-center"/>
                <BlueprintCornerMarks />
              </div>
              <div className="absolute -top-3 -left-3 w-16 h-16 rounded-full bg-catalyst-blue/10 -z-10"/>
              <div className="absolute -bottom-3 -right-3 w-12 h-12 rounded-full bg-blueprint-cyan/10 -z-10"/>
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
              <p className="text-catalyst-blue text-xs font-semibold uppercase tracking-[0.2em] mb-4">About CL</p>
              <h2 className="text-4xl lg:text-5xl font-black text-catalyst-navy leading-tight mb-6">
                A Builder,<br />A Leader,<br />
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
                  His journey began at a Malaysian conglomerate as Head of Digital Transformation. Today he leads
                  Skribble Group — spanning Skribble Me, Skribble Lab, Skribble Ventures and Skribble Media — and
                  founded <strong className="text-catalyst-navy font-semibold">SAMA Alliance</strong>, a regional
                  marketing alliance with 50+ independent agencies across APAC.
                </p>
              </div>

              {/* Credential cards with logos */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {credentials.map((c) => (
                  <div key={c.label}
                    className="bg-white border border-slate-gray/12 rounded-xl p-4 group hover:border-catalyst-blue/30 transition-colors">
                    {/* Label sits above — not part of the logo alignment */}
                    <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-gray/50 mb-3">{c.label}</p>
                    {/* Logo centred only against the value text */}
                    <div className="flex items-center gap-3">
                      {c.logo}
                      <p className="text-sm font-semibold text-catalyst-navy leading-snug">{c.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Community */}
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-gray/50 mb-3">Community &amp; Advisory</p>
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
