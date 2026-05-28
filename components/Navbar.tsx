"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const links = [
  { label: "About",    href: "#about" },
  { label: "Speaking", href: "#speaking" },
  { label: "Awards",   href: "#awards" },
  { label: "Press",    href: "#press" },
  { label: "SAMA",     href: "#ventures" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const handleClick = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [menuOpen]);

  return (
    <header
      ref={menuRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-catalyst-navy/95 backdrop-blur-sm shadow-sm border-b border-catalyst-blue/15"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between h-16">

        {/* CL logomark */}
        <a href="#" className="flex items-center gap-2.5 group">
          <Image
            src="/images/cl-mark.png"
            alt="CL — Teng Chan Leong"
            width={36}
            height={36}
            className={`object-contain transition-all duration-300 ${
              scrolled ? "brightness-0 invert opacity-90" : "brightness-0 invert opacity-95"
            }`}
          />
          <span
            className={`text-xs font-semibold tracking-[0.18em] uppercase transition-colors duration-300 ${
              scrolled ? "text-warm-white/60" : "text-white/50"
            }`}
          >
            TCL
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`text-sm font-medium transition-colors hover:text-catalyst-blue-l ${
                scrolled ? "text-warm-white/65" : "text-white/75"
              }`}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="bg-catalyst-blue text-white text-sm font-semibold px-5 py-2 rounded-full hover:bg-catalyst-blue-l transition-colors"
          >
            Invite to Speak
          </a>
        </nav>

        {/* Mobile menu button */}
        <button
          className={`md:hidden p-2 transition-colors ${scrolled ? "text-warm-white" : "text-white"}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <div className="w-5 space-y-1.5">
            <span className={`block h-0.5 bg-current transition-transform ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block h-0.5 bg-current transition-opacity ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 bg-current transition-transform ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden overflow-hidden bg-catalyst-navy border-t border-catalyst-blue/15"
          >
            <div className="px-6 py-4 space-y-3">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="block text-sm font-medium text-warm-white/65 hover:text-catalyst-blue-l py-1.5 transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#contact"
                className="block bg-catalyst-blue text-white text-sm font-semibold px-5 py-2.5 rounded-full text-center hover:bg-catalyst-blue-l transition-colors mt-2"
                onClick={() => setMenuOpen(false)}
              >
                Invite to Speak
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
