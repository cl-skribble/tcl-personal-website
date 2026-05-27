"use client";

import { useEffect, useState } from "react";

const links = [
  { label: "About", href: "#about" },
  { label: "Speaking", href: "#speaking" },
  { label: "Awards", href: "#awards" },
  { label: "Press", href: "#press" },
  { label: "SAMA", href: "#ventures" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-sm shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between h-16">
        <a
          href="#"
          className={`text-lg font-black tracking-tight transition-colors ${
            scrolled ? "text-carbon" : "text-white"
          }`}
        >
          TCL
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`text-sm font-medium transition-colors hover:text-magenta ${
                scrolled ? "text-carbon/70" : "text-white/80"
              }`}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="bg-magenta text-white text-sm font-semibold px-5 py-2 rounded-full hover:bg-magenta-light transition-colors"
          >
            Invite to Speak
          </a>
        </nav>

        {/* Mobile menu button */}
        <button
          className={`md:hidden p-2 transition-colors ${scrolled ? "text-carbon" : "text-white"}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <div className="w-5 space-y-1.5">
            <span
              className={`block h-0.5 bg-current transition-transform ${
                menuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block h-0.5 bg-current transition-opacity ${menuOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`block h-0.5 bg-current transition-transform ${
                menuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-carbon/10 px-6 py-4 space-y-3">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="block text-sm font-medium text-carbon/70 hover:text-magenta py-1"
              onClick={() => setMenuOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="block bg-magenta text-white text-sm font-semibold px-5 py-2.5 rounded-full text-center hover:bg-magenta-light transition-colors mt-2"
            onClick={() => setMenuOpen(false)}
          >
            Invite to Speak
          </a>
        </div>
      )}
    </header>
  );
}
