import Image from "next/image";
import Navbar from "@/components/Navbar";

/** Shared chrome for inner pages: navbar, blueprint header, slim footer. */
export default function PageShell({
  eyebrow, title, children, compact = false,
}: { eyebrow: string; title: React.ReactNode; children: React.ReactNode; compact?: boolean }) {
  return (
    <>
      <Navbar />
      <main>
        <header className="relative overflow-hidden bg-catalyst-navy blueprint-grid pt-36 pb-16 border-b border-white/10">
          <div aria-hidden="true" className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-catalyst-blue glow-pulse blur-3xl" />
          <div className="relative max-w-5xl mx-auto px-6 lg:px-8">
            <p className="text-blueprint-cyan text-xs font-semibold uppercase tracking-[0.25em] mb-4">{eyebrow}</p>
            <h1 className={`font-display font-extrabold uppercase tracking-tight leading-[0.95] text-white ${
              compact ? "text-4xl sm:text-5xl lg:text-6xl max-w-4xl" : "text-5xl sm:text-7xl"
            }`}>
              {title}
            </h1>
          </div>
        </header>
        {children}
      </main>
      <footer className="border-t border-white/10 bg-[#060e1c]">
        <div className="max-w-5xl mx-auto px-6 lg:px-8 py-8 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Image src="/images/cl-mark.png" alt="CL" width={32} height={32} className="object-contain opacity-75" />
            <p className="text-white/60 text-xs">© {new Date().getFullYear()} Teng Chan Leong. All rights reserved.</p>
          </div>
          <a href="/" className="text-white/70 text-sm hover:text-white transition-colors">← Back to home</a>
        </div>
      </footer>
    </>
  );
}
