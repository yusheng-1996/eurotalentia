import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, Search, FileSearch, UserCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Thank You — Your Application Has Been Received",
  description:
    "Thanks for applying with EuroTalentia. Our recruitment team will review your details and contact you if your profile matches current opportunities.",
  robots: { index: false, follow: true },
};

const nextSteps = [
  {
    icon: FileSearch,
    title: "We review your details",
    body: "Our recruitment team reads through your application and preferences.",
  },
  {
    icon: Search,
    title: "We match your profile",
    body: "We compare your skills and availability against current opportunities across Europe.",
  },
  {
    icon: UserCheck,
    title: "A recruiter contacts you",
    body: "If there's a fit, a recruiter reaches out by email or WhatsApp with next steps.",
  },
];

export default function ThankYou() {
  return (
    <main className="flex min-h-screen flex-col bg-haze/50">
      {/* Slim header */}
      <header className="bg-white">
        <div className="container-page flex h-16 items-center md:h-[72px]">
          <Link href="/" className="flex items-center gap-2">
            <span className="grid h-9 w-9 place-items-center rounded-lg bg-brand text-base font-bold text-white">
              E
            </span>
            <span className="font-serif text-xl font-semibold text-ink">
              EuroTalentia
            </span>
          </Link>
        </div>
      </header>

      <section className="flex flex-1 items-center py-16 sm:py-20">
        <div className="container-page">
          <div className="mx-auto max-w-2xl rounded-3xl border border-haze bg-white p-8 text-center shadow-card sm:p-12">
            <span className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-brand-tint text-brand">
              <CheckCircle2 className="h-9 w-9" />
            </span>

            <h1 className="mt-6 font-serif text-3xl font-semibold leading-tight text-ink sm:text-4xl">
              Thank You — Your Application Has Been Received
            </h1>

            <p className="mt-4 text-base leading-relaxed text-muted">
              Our recruitment team will review your details and contact you if
              your profile matches current opportunities. Please keep an eye on
              your email and WhatsApp.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
              <Link href="/" className="btn-primary w-full sm:w-auto">
                Back to Home
              </Link>
              <Link
                href="/#categories"
                className="btn-secondary w-full sm:w-auto"
              >
                Explore Job Categories
              </Link>
            </div>
          </div>

          {/* What happens next */}
          <div className="mx-auto mt-12 max-w-3xl">
            <h2 className="text-center font-serif text-2xl font-semibold text-ink">
              What happens next?
            </h2>
            <ol className="mt-8 grid gap-5 sm:grid-cols-3">
              {nextSteps.map(({ icon: Icon, title, body }, i) => (
                <li
                  key={title}
                  className="rounded-2xl border border-haze bg-white p-6 shadow-soft"
                >
                  <div className="flex items-center justify-between">
                    <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand text-white">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="font-serif text-3xl font-semibold text-haze">
                      {i + 1}
                    </span>
                  </div>
                  <h3 className="mt-4 text-base font-semibold text-ink">
                    {title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {body}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>
    </main>
  );
}
