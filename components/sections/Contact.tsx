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

export default function Contact() {
  return (
    <section id="contact" className="py-24 lg:py-32 bg-magenta">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <FadeIn>
            <div>
              <p className="text-white/60 text-xs font-semibold uppercase tracking-[0.2em] mb-5">
                Work With CL
              </p>
              <h2 className="text-white text-4xl lg:text-5xl font-black leading-tight mb-6">
                Let&apos;s Build<br />Something<br />Together.
              </h2>
              <p className="text-white/70 text-base leading-relaxed mb-8">
                Whether it&apos;s a keynote, a board seat, a consulting project, or a new partnership —
                Chan Leong brings strategic depth and a builder&apos;s mindset to every engagement.
                Reach out and let&apos;s explore what&apos;s possible.
              </p>

              {/* Engagement types */}
              <div className="mb-8">
                <p className="text-white/50 text-xs font-semibold uppercase tracking-wider mb-3">Open For</p>
                <div className="flex flex-wrap gap-2">
                  {engagements.map((t) => (
                    <span key={t} className="bg-white/15 text-white text-xs font-medium px-3 py-1.5 rounded-full">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Contact */}
              <a
                href="mailto:chanleong@skribble.me?subject=Collaboration Inquiry"
                className="inline-flex items-center gap-4 bg-white text-magenta font-bold text-sm px-6 py-4 rounded-2xl hover:bg-white/90 transition-colors group"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                chanleong@skribble.me
                <span className="text-magenta/40 font-normal group-hover:text-magenta/70 transition-colors ml-auto">→</span>
              </a>
            </div>
          </FadeIn>

          {/* Right — profile card */}
          <FadeIn delay={0.15}>
            <div className="bg-white/10 border border-white/20 rounded-3xl p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center">
                  <span className="text-white font-black text-xl">CL</span>
                </div>
                <div>
                  <p className="text-white font-bold">Teng Chan Leong</p>
                  <p className="text-white/60 text-sm">CEO · Skribble Group</p>
                  <p className="text-white/60 text-sm">Founder · SAMA Alliance</p>
                </div>
              </div>

              <div className="space-y-3 mb-8">
                {[
                  "10+ years building businesses across Southeast Asia",
                  "Carnegie Mellon University — Chemical Engineering",
                  "Prestige 40 Under 40 (2024)",
                  "Based in Kuala Lumpur, Malaysia",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 text-sm text-white/70">
                    <div className="w-1.5 h-1.5 rounded-full bg-teal shrink-0" />
                    {item}
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-2 gap-3">
                <a
                  href="https://linkedin.com/in/tengchanleong"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-[#0A66C2] text-white font-semibold text-sm px-4 py-3 rounded-xl hover:bg-[#0958a8] transition-colors"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  LinkedIn
                </a>
                <a
                  href="mailto:chanleong@skribble.me"
                  className="flex items-center justify-center gap-2 bg-white/15 text-white font-semibold text-sm px-4 py-3 rounded-xl hover:bg-white/20 transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
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
