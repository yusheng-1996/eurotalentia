import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { categories } from "@/components/data";

export const metadata: Metadata = {
  title: "Explore Job Opportunities Across Europe",
  description:
    "Browse all job categories at EuroTalentia — from grocery retail and hospitality to healthcare, logistics, finance and more. Find role types across 25+ European countries and apply in minutes.",
  alternates: { canonical: "/jobs" },
  openGraph: {
    title: "Explore Job Opportunities Across Europe | EuroTalentia",
    description:
      "Browse every sector we recruit for across Europe and apply in minutes. Free for candidates, recruiter support included.",
    url: "/jobs",
  },
};

export default function JobsPage() {
  return (
    <>
      <Header />
      <main className="pt-16 md:pt-[72px]">
        {/* Intro */}
        <section className="bg-white py-14 sm:py-20">
          <div className="container-page max-w-3xl">
            <span className="eyebrow">Job categories</span>
            <h1 className="mt-4 font-serif text-[2rem] font-semibold leading-tight text-ink sm:text-5xl">
              Explore Job Opportunities Across Europe
            </h1>
            <p className="mt-5 text-base leading-relaxed text-muted sm:text-lg">
              We recruit across {categories.length} sectors in 25+ European
              countries — from entry-level positions with full training to
              professional roles. Pick a category to see the kinds of roles
              available, or apply directly and we&apos;ll match you.
            </p>
          </div>
        </section>

        {/* Category grid */}
        <section className="bg-haze/60 py-14 sm:py-16">
          <div className="container-page">
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {categories.map(({ name, slug, icon: Icon, tagline }) => (
                <Link
                  key={slug}
                  href={`/jobs/${slug}`}
                  className="group flex flex-col rounded-2xl border border-haze bg-white p-6 shadow-soft transition-all duration-200 hover:-translate-y-1 hover:border-brand/40 hover:shadow-card"
                >
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-brand-tint text-brand transition-colors group-hover:bg-brand group-hover:text-white">
                    <Icon className="h-6 w-6" />
                  </span>
                  <h2 className="mt-5 text-lg font-semibold text-ink">{name}</h2>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                    {tagline}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand transition-colors group-hover:text-brand-dark">
                    View roles
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Apply CTA */}
        <section className="bg-white py-16 sm:py-20">
          <div className="container-page">
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand to-brand-dark px-6 py-14 text-center shadow-card sm:px-10">
              <h2 className="mx-auto max-w-2xl font-serif text-3xl font-semibold leading-tight text-white sm:text-4xl">
                Ready to apply? It only takes a couple of minutes.
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-base text-white/85">
                Tell us your skills, preferred country and availability — we&apos;ll
                match you with suitable opportunities across Europe.
              </p>
              <div className="mt-8">
                <Link
                  href="/#apply"
                  className="btn inline-flex bg-white text-brand-dark hover:bg-haze"
                >
                  Apply Now
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
