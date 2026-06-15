import Link from "next/link";
import { navLinks, FOOTER_VISA_NOTE, COMPANY_EMAIL } from "./data";

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Service", href: "/terms-of-service" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-haze bg-white">
      <div className="container-page py-12">
        <div className="grid gap-8 md:grid-cols-[1.5fr_1fr_1fr]">
          <div className="max-w-sm">
            <Link href="/" className="flex items-center gap-2">
              <span className="grid h-9 w-9 place-items-center rounded-lg bg-brand text-base font-bold text-white">
                E
              </span>
              <span className="font-serif text-xl font-semibold text-ink">
                EuroTalentia
              </span>
            </Link>
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
                  <Link
                    href={link.href}
                    className="text-sm text-muted transition-colors hover:text-brand"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-ink">
              Legal &amp; Contact
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm text-muted">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="transition-colors hover:text-brand"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href={`mailto:${COMPANY_EMAIL}`}
                  className="transition-colors hover:text-brand"
                >
                  {COMPANY_EMAIL}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Compliance disclaimer */}
        <p className="mt-10 border-t border-haze pt-6 text-xs leading-relaxed text-muted">
          {FOOTER_VISA_NOTE} EuroTalentia is a recruitment matching service and
          does not guarantee employment, interviews, or job placement.
        </p>

        <div className="mt-6 flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-xs text-muted">
            © {year} EuroTalentia. All rights reserved.
          </p>
          <div className="flex gap-5 text-xs text-muted">
            <Link
              href="/privacy-policy"
              className="transition-colors hover:text-brand"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-of-service"
              className="transition-colors hover:text-brand"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
