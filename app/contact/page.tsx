import type { Metadata } from "next";
import Link from "next/link";
import { Mail, Clock3, MessageSquare } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { COMPANY_EMAIL } from "@/components/data";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with the EuroTalentia recruitment team. Email us with your questions, or apply online to be matched with suitable roles across Europe.",
  alternates: { canonical: "/contact" },
};

const items = [
  {
    icon: Mail,
    title: "Email us",
    body: COMPANY_EMAIL,
    href: `mailto:${COMPANY_EMAIL}`,
  },
  {
    icon: Clock3,
    title: "Office hours",
    body: "Mon–Fri, 9:00–18:00 CET",
  },
  {
    icon: MessageSquare,
    title: "Response time",
    body: "We aim to reply within 24 hours",
  },
];

export default function Contact() {
  return (
    <>
      <Header />
      <main className="pt-16 md:pt-[72px]">
        <section className="bg-white py-14 sm:py-20">
          <div className="container-page max-w-3xl">
            <span className="eyebrow">Get in touch</span>
            <h1 className="mt-4 font-serif text-[2rem] font-semibold leading-tight text-ink sm:text-5xl">
              Contact EuroTalentia
            </h1>
            <p className="mt-5 text-base leading-relaxed text-muted sm:text-lg">
              Have a question about applying or about how we work? Reach out and
              our recruitment team will be happy to help. The fastest way to be
              considered for roles is to complete our application form.
            </p>

            <div className="mt-10 grid gap-5 sm:grid-cols-3">
              {items.map(({ icon: Icon, title, body, href }) => (
                <div
                  key={title}
                  className="rounded-2xl border border-haze bg-white p-6 shadow-soft"
                >
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-tint text-brand">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h2 className="mt-4 text-sm font-semibold uppercase tracking-wider text-ink">
                    {title}
                  </h2>
                  {href ? (
                    <a
                      href={href}
                      className="mt-1.5 block text-sm font-medium text-brand transition-colors hover:text-brand-dark"
                    >
                      {body}
                    </a>
                  ) : (
                    <p className="mt-1.5 text-sm text-muted">{body}</p>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Link href="/#apply" className="btn-primary w-full sm:w-auto">
                Apply Now
              </Link>
              <Link href="/jobs" className="btn-secondary w-full sm:w-auto">
                Browse job categories
              </Link>
            </div>

            <p className="mt-12 border-t border-haze pt-6 text-xs leading-relaxed text-muted">
              EuroTalentia is a recruitment matching service. See our{" "}
              <Link
                href="/terms-of-service"
                className="font-medium text-brand underline-offset-2 hover:underline"
              >
                Terms of Service
              </Link>{" "}
              for full details.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
