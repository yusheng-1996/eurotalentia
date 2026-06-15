"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { navLinks } from "./data";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 shadow-soft backdrop-blur"
          : "bg-white/80 backdrop-blur"
      }`}
    >
      <div className="container-page flex h-16 items-center justify-between md:h-[72px]">
        {/* Brand */}
        <a href="#home" className="flex items-center gap-2" aria-label="EuroTalentia home">
          <span className="grid h-9 w-9 place-items-center rounded-lg bg-brand text-base font-bold text-white">
            E
          </span>
          <span className="font-serif text-xl font-semibold tracking-tight text-ink">
            EuroTalentia
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-7 lg:flex">
          {navLinks
            .filter((l) => l.label !== "Apply")
            .map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted transition-colors hover:text-brand"
              >
                {link.label}
              </a>
            ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:block">
          <a href="#apply" className="btn-primary">
            Apply Now
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          className="grid h-10 w-10 place-items-center rounded-lg text-ink lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden ${
          open ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        <div
          className={`overflow-hidden border-t border-haze bg-white transition-[max-height,opacity] duration-300 ${
            open ? "max-h-[420px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <nav className="container-page flex flex-col gap-1 py-4">
            {navLinks
              .filter((l) => l.label !== "Apply")
              .map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-3 text-base font-medium text-ink transition-colors hover:bg-haze"
                >
                  {link.label}
                </a>
              ))}
            <a
              href="#apply"
              onClick={() => setOpen(false)}
              className="btn-primary mt-2 w-full"
            >
              Apply Now
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
