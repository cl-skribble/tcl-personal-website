import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Ventures from "@/components/sections/Ventures";
import Awards from "@/components/sections/Awards";
import Speaking from "@/components/sections/Speaking";
import Press from "@/components/sections/Press";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Ventures />
        <Awards />
        <Speaking />
        <Press />
        <Contact />
      </main>
      {/* ── Footer — KL skyline illustration ── */}
      <footer className="relative overflow-hidden" style={{ background: "#060e1c" }}>

        {/* KL skyline illustration — full bleed */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/kl-skyline.png"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover object-top pointer-events-none"
        />

        {/* TOP overlay — very slow fade from Contact blue to transparent over 55% of footer.
            Shallow initial slope removes the visible seam at the section boundary. */}
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(0,82,204,0.95) 0%, rgba(0,82,204,0.88) 4%, rgba(0,82,204,0.74) 10%, rgba(0,82,204,0.55) 18%, rgba(0,82,204,0.34) 28%, rgba(0,82,204,0.14) 40%, rgba(0,82,204,0.03) 50%, transparent 58%)",
          }}
        />

        {/* BOTTOM overlay — only the final stretch, keeps nav text readable.
            No overlay in the middle so the full illustration colour shows. */}
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(6,14,28,0.72) 0%, rgba(6,14,28,0.20) 14%, transparent 26%)",
          }}
        />

        {/* Content — all pushed to bottom so buildings show freely above */}
        <div className="relative flex flex-col min-h-[680px] lg:min-h-[780px] justify-end">

          {/* Headline — sits in the foreground/hill zone */}
          <div className="max-w-7xl mx-auto w-full px-6 lg:px-8 pb-8">
            <h2
              className="text-white font-black leading-tight max-w-2xl mb-8"
              style={{ fontSize: "clamp(2.2rem, 4.5vw, 3.6rem)", textShadow: "0 2px 20px rgba(6,14,28,0.5)" }}
            >
              Big ideas.<br />
              Bold execution.<br />
              <span style={{ color: "#0ea5e9" }}>Southeast Asia.</span>
            </h2>
          </div>

          {/* Bottom bar — no separate background, illustration shows through */}
          <div className="border-t border-white/12">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 py-7 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">

              {/* Left — CL mark + copyright */}
              <div className="flex flex-col gap-3 shrink-0">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/cl-mark.png" alt="CL" width={44} height={44} className="object-contain opacity-75" />
                <p className="text-white/75 text-xs">
                  © {new Date().getFullYear()} Teng Chan Leong. All rights reserved.
                </p>
              </div>

              {/* Centre — nav links */}
              <nav className="flex flex-wrap gap-x-10 gap-y-2">
                {[
                  { label: "About",    href: "#about"    },
                  { label: "Speaking", href: "#speaking" },
                  { label: "Awards",   href: "#awards"   },
                  { label: "Press",    href: "#press"    },
                  { label: "SAMA",     href: "#ventures" },
                  { label: "Contact",  href: "#contact"  },
                ].map(({ label, href }) => (
                  <a
                    key={href}
                    href={href}
                    className="text-white text-sm hover:text-white/70 transition-colors"
                  >
                    {label}
                  </a>
                ))}
              </nav>

              {/* Right — CTA + social */}
              <div className="flex items-center gap-4 shrink-0">
                <a
                  href="mailto:chanleong@skribble.me?subject=Let's Connect"
                  className="bg-[#0052cc] text-white font-semibold text-sm px-6 py-2.5 rounded-full hover:bg-[#0047b3] transition-colors whitespace-nowrap"
                >
                  Let&apos;s Connect
                </a>
                <a
                  href="https://linkedin.com/in/tengchanleong"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a
                  href="mailto:chanleong@skribble.me"
                  aria-label="Email"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  <svg className="w-[18px] h-[18px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                </a>
              </div>

            </div>
          </div>

        </div>
      </footer>
    </>
  );
}
