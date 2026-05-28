import Image from "next/image";
import FadeIn from "@/components/FadeIn";

const engagements = [
  "Keynote Speaking",
  "Business Consulting",
  "Board & Advisory",
  "Strategic Partnerships",
  "Mentoring & Coaching",
  "Investment & Ventures",
  "Media & Interviews",
  "Workshops & Training",
];

/* ── Blueprint: radial compass for background ── */
function BlueprintCompass() {
  return (
    <svg
      className="absolute right-[-40px] bottom-[-40px] w-[480px] h-[480px] pointer-events-none"
      viewBox="0 0 240 240"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Concentric rings */}
      <circle cx="120" cy="120" r="108" fill="none" stroke="white" strokeWidth="0.5" opacity="0.08"/>
      <circle cx="120" cy="120" r="86"  fill="none" stroke="white" strokeWidth="0.4" opacity="0.10"/>
      <circle cx="120" cy="120" r="64"  fill="none" stroke="white" strokeWidth="0.4" opacity="0.12"/>
      <circle cx="120" cy="120" r="42"  fill="none" stroke="white" strokeWidth="0.5" opacity="0.14"/>
      <circle cx="120" cy="120" r="20"  fill="none" stroke="white" strokeWidth="0.5" opacity="0.16"/>

      {/* Cardinal lines */}
      <line x1="120" y1="12"  x2="120" y2="228" stroke="white" strokeWidth="0.4" opacity="0.10"/>
      <line x1="12"  y1="120" x2="228" y2="120" stroke="white" strokeWidth="0.4" opacity="0.10"/>
      {/* Diagonal lines */}
      <line x1="44"  y1="44"  x2="196" y2="196" stroke="white" strokeWidth="0.3" opacity="0.07"/>
      <line x1="196" y1="44"  x2="44"  y2="196" stroke="white" strokeWidth="0.3" opacity="0.07"/>
      {/* 22.5° lines */}
      {[22.5, 67.5, 112.5, 157.5, 202.5, 247.5, 292.5, 337.5].map((deg, i) => {
        const rad = (deg * Math.PI) / 180;
        return (
          <line key={i}
            x1={120} y1={120}
            x2={120 + 108 * Math.cos(rad)}
            y2={120 + 108 * Math.sin(rad)}
            stroke="white" strokeWidth="0.25" opacity="0.06"/>
        );
      })}

      {/* Tick marks at cardinal positions */}
      <g stroke="white" strokeWidth="0.7" opacity="0.2">
        <line x1="120" y1="12"  x2="120" y2="20"/>
        <line x1="120" y1="220" x2="120" y2="228"/>
        <line x1="12"  y1="120" x2="20"  y2="120"/>
        <line x1="220" y1="120" x2="228" y2="120"/>
      </g>

      {/* Crosshair at centre */}
      <line x1="112" y1="120" x2="128" y2="120" stroke="white" strokeWidth="0.7" opacity="0.25"/>
      <line x1="120" y1="112" x2="120" y2="128" stroke="white" strokeWidth="0.7" opacity="0.25"/>
      <circle cx="120" cy="120" r="3" fill="none" stroke="white" strokeWidth="0.7" opacity="0.25"/>

      {/* Accent arc */}
      <path d="M 162 78 A 60 60 0 0 1 184 120" fill="none" stroke="white" strokeWidth="0.6" opacity="0.18"/>
    </svg>
  );
}

export default function Contact() {
  return (
    <section id="contact" className="py-24 lg:py-32 bg-catalyst-blue relative overflow-hidden">

      {/* Blueprint compass */}
      <BlueprintCompass />

      {/* Kinetic ambient glow */}
      <div className="absolute top-[-80px] right-[10%] w-80 h-80 rounded-full opacity-20 blur-[80px] glow-pulse pointer-events-none"
        style={{ background: "#0ea5e9" }}/>
      <div className="absolute bottom-[-40px] left-[5%] w-64 h-64 rounded-full opacity-15 blur-[60px] glow-pulse pointer-events-none"
        style={{ animationDelay: "2s", background: "#003d99" }}/>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left */}
          <FadeIn>
            <div>
              <p className="text-white/55 text-xs font-semibold uppercase tracking-[0.2em] mb-5">Work With CL</p>
              <h2 className="text-white text-4xl lg:text-5xl font-black leading-tight mb-6">
                Let&apos;s Build<br />Something<br />Together.
              </h2>
              <div className="h-px w-12 bg-white/30 mb-6"/>
              <p className="text-white/68 text-base leading-relaxed mb-8">
                Whether it&apos;s a keynote, a board seat, a consulting project, or a new partnership —
                Chan Leong brings strategic depth and a builder&apos;s mindset to every engagement.
              </p>

              {/* Engagement types */}
              <div className="mb-8">
                <p className="text-white/45 text-xs font-semibold uppercase tracking-wider mb-3">Open For</p>
                <div className="flex flex-wrap gap-2">
                  {engagements.map((t) => (
                    <span key={t} className="bg-white/12 text-white text-xs font-medium px-3 py-1.5 rounded-full border border-white/15 hover:bg-white/20 transition-colors">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <a
                href="mailto:chanleong@skribble.me?subject=Collaboration Inquiry"
                className="flex w-full sm:w-auto sm:inline-flex items-center gap-4 bg-white text-catalyst-blue font-bold text-sm px-6 py-4 rounded-2xl hover:bg-warm-white transition-colors group"
              >
                <svg className="w-5 h-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
                chanleong@skribble.me
                <span className="text-catalyst-blue/35 font-normal group-hover:text-catalyst-blue/65 transition-colors ml-auto">→</span>
              </a>
            </div>
          </FadeIn>

          {/* Right — profile card */}
          <FadeIn delay={0.15}>
            <div
              className="rounded-3xl p-8 relative overflow-hidden"
              style={{
                background: "rgba(255,255,255,0.10)",
                backdropFilter: "blur(12px)",
                WebkitBackdropFilter: "blur(12px)",
                border: "1px solid rgba(255,255,255,0.20)",
                boxShadow: "0 8px 40px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.12)",
              }}
            >
              {/* Inset highlight */}
              <div className="absolute inset-0 rounded-3xl pointer-events-none"
                style={{ background: "linear-gradient(135deg, rgba(255,255,255,0.08) 0%, transparent 55%)" }}/>

              <div className="relative flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl overflow-hidden bg-white/15 flex items-center justify-center border border-white/20">
                  <Image src="/images/cl-mark.png" alt="CL" width={40} height={40}
                    className="object-contain brightness-0 invert opacity-85"/>
                </div>
                <div>
                  <p className="text-white font-bold text-base">Teng Chan Leong</p>
                  <p className="text-white/58 text-sm">CEO · Skribble Group</p>
                  <p className="text-white/58 text-sm">Founder · SAMA Alliance</p>
                </div>
              </div>

              <div className="relative space-y-3 mb-8">
                {[
                  "10+ years building businesses across Southeast Asia",
                  "Carnegie Mellon University — Chemical Engineering",
                  "Prestige 40 Under 40 (2024)",
                  "Based in Kuala Lumpur, Malaysia",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 text-sm text-white/65">
                    <div className="w-1.5 h-1.5 rounded-full bg-blueprint-cyan shrink-0"/>
                    {item}
                  </div>
                ))}
              </div>

              <div className="relative grid grid-cols-2 gap-3">
                <a href="https://linkedin.com/in/tengchanleong" target="_blank" rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-[#0A66C2] text-white font-semibold text-sm px-4 py-3 rounded-xl hover:bg-[#0958a8] transition-colors">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  LinkedIn
                </a>
                <a href="mailto:chanleong@skribble.me"
                  className="flex items-center justify-center gap-2 bg-white/15 text-white font-semibold text-sm px-4 py-3 rounded-xl hover:bg-white/22 transition-colors border border-white/15">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                  Email
                </a>
              </div>
            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  );
}
