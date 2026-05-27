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
      <footer className="bg-carbon">
        {/* Punchy exit statement */}
        <div className="border-b border-white/8 py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <p className="text-white/20 text-xs font-semibold uppercase tracking-[0.3em] mb-6">Teng Chan Leong</p>
            <h2 className="text-white text-4xl md:text-5xl lg:text-6xl font-black leading-tight max-w-3xl mb-10">
              Big ideas.<br />
              Bold execution.<br />
              <span className="text-magenta">Southeast Asia.</span>
            </h2>
            <div className="flex flex-wrap gap-4">
              <a
                href="mailto:chanleong@skribble.me?subject=Collaboration Inquiry"
                className="bg-magenta text-white font-semibold text-sm px-7 py-3.5 rounded-full hover:bg-magenta-light transition-colors"
              >
                Get in Touch
              </a>
              <a
                href="https://linkedin.com/in/tengchanleong"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-white/20 text-white/60 font-semibold text-sm px-7 py-3.5 rounded-full hover:border-white/40 hover:text-white/90 transition-colors"
              >
                LinkedIn ↗
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-6">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/20 text-xs">
              © {new Date().getFullYear()} Teng Chan Leong. All rights reserved.
            </p>
            <div className="flex items-center gap-8 text-white/25 text-xs">
              <a href="https://skribble.me" target="_blank" rel="noopener noreferrer" className="hover:text-white/50 transition-colors">Skribble Group</a>
              <a href="https://linkedin.com/in/tengchanleong" target="_blank" rel="noopener noreferrer" className="hover:text-white/50 transition-colors">SAMA Alliance</a>
              <a href="mailto:chanleong@skribble.me" className="hover:text-white/50 transition-colors">chanleong@skribble.me</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
