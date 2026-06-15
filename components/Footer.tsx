import { navLinks } from "./data";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-haze bg-white">
      <div className="container-page py-12">
        <div className="grid gap-8 md:grid-cols-[1.5fr_1fr_1fr]">
          <div className="max-w-sm">
            <a href="#home" className="flex items-center gap-2">
              <span className="grid h-9 w-9 place-items-center rounded-lg bg-brand text-base font-bold text-white">
                E
              </span>
              <span className="font-serif text-xl font-semibold text-ink">
                EuroTalentia
              </span>
            </a>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              Connecting candidates with flexible, entry-level and professional
              roles across 25+ European countries. Free for candidates,
              recruiter support included.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-ink">
              Explore
            </h3>
            <ul className="mt-4 space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-muted transition-colors hover:text-brand"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-ink">
              Contact
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm text-muted">
              <li>
                <a
                  href="mailto:hello@eurotalentia.com"
                  className="transition-colors hover:text-brand"
                >
                  hello@eurotalentia.com
                </a>
              </li>
              <li>Mon–Fri, 9:00–18:00 CET</li>
              <li>Response within 24 hours</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-haze pt-6 sm:flex-row">
          <p className="text-xs text-muted">
            © {year} EuroTalentia. All rights reserved.
          </p>
          <div className="flex gap-5 text-xs text-muted">
            <a href="#" className="transition-colors hover:text-brand">
              Privacy Policy
            </a>
            <a href="#" className="transition-colors hover:text-brand">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
