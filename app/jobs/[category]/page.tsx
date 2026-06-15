import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  MapPin,
  Briefcase,
  GaugeCircle,
  GraduationCap,
  Languages,
  ArrowRight,
  ArrowLeft,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  categories,
  getCategory,
  applyHref,
  categoryHeading,
} from "@/components/data";

type Params = { category: string };

export function generateStaticParams(): Params[] {
  return categories.map((c) => ({ category: c.slug }));
}

export function generateMetadata({ params }: { params: Params }): Metadata {
  const category = getCategory(params.category);
  if (!category) {
    return { title: "Job category not found" };
  }
  const title = categoryHeading(category.name);
  const description = `${category.tagline} Explore ${category.name.toLowerCase()} role types including ${category.jobs
    .map((j) => j.title)
    .slice(0, 3)
    .join(", ")} and apply with EuroTalentia — free for candidates, recruiter support included.`;

  return {
    title,
    description,
    alternates: { canonical: `/jobs/${category.slug}` },
    openGraph: {
      title: `${title} | EuroTalentia`,
      description,
      url: `/jobs/${category.slug}`,
      images: [{ url: category.image }],
    },
  };
}

function Badge({
  icon: Icon,
  label,
}: {
  icon: typeof MapPin;
  label: string;
}) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full bg-haze px-2.5 py-1 text-xs font-medium text-ink">
      <Icon className="h-3.5 w-3.5 text-brand" />
      {label}
    </span>
  );
}

export default function CategoryPage({ params }: { params: Params }) {
  const category = getCategory(params.category);
  if (!category) notFound();

  const { name, tagline, description, image, jobs, slug } = category;

  return (
    <>
      <Header />
      <main className="pt-16 md:pt-[72px]">
        {/* Hero */}
        <section className="relative isolate overflow-hidden">
          <div className="absolute inset-0 -z-10">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={image}
              alt={`${name} roles across Europe`}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-ink/80 via-ink/55 to-ink/25" />
          </div>

          <div className="container-page py-14 sm:py-20">
            <Link
              href="/jobs"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-white/85 transition-colors hover:text-white"
            >
              <ArrowLeft className="h-4 w-4" />
              All categories
            </Link>
            <h1 className="mt-5 max-w-3xl font-serif text-[2rem] font-semibold leading-tight text-white sm:text-5xl">
              {categoryHeading(name)}
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/90 sm:text-lg">
              {tagline}
            </p>
            <div className="mt-7">
              <Link href={applyHref(slug)} className="btn-primary">
                Apply for {name} roles
              </Link>
            </div>
          </div>
        </section>

        {/* Intro + roles */}
        <section className="bg-white py-14 sm:py-20">
          <div className="container-page">
            <div className="max-w-3xl">
              <span className="eyebrow">Example roles</span>
              <h2 className="section-title mt-4">
                Roles we recruit for in {name}
              </h2>
              <p className="mt-4 text-muted">{description}</p>
            </div>

            {/* Job cards: desktop 3 / tablet 2 / mobile 1 */}
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {jobs.map((job) => (
                <article
                  key={job.slug}
                  className="flex flex-col rounded-2xl border border-haze bg-white p-6 shadow-soft transition-all duration-200 hover:-translate-y-1 hover:shadow-card"
                >
                  <h3 className="text-lg font-semibold text-ink">{job.title}</h3>

                  <div className="mt-3 flex items-center gap-1.5 text-xs font-medium text-muted">
                    <MapPin className="h-3.5 w-3.5 text-brand" />
                    {job.locationType}
                  </div>

                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                    {job.description}
                  </p>

                  {/* Filter-like badges */}
                  <div className="mt-4 flex flex-wrap gap-2">
                    <Badge icon={Briefcase} label={job.workType} />
                    <Badge icon={GaugeCircle} label={job.experience} />
                    <Badge
                      icon={GraduationCap}
                      label={`Training: ${job.training}`}
                    />
                    <Badge icon={Languages} label={job.languages} />
                  </div>

                  <Link
                    href={applyHref(slug, job.slug)}
                    className="btn-secondary mt-5 w-full text-xs"
                    aria-label={`Apply for ${job.title} roles`}
                  >
                    Apply for this role type
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="bg-haze/60 py-16 sm:py-20">
          <div className="container-page">
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand to-brand-dark px-6 py-14 text-center shadow-card sm:px-10">
              <h2 className="mx-auto max-w-2xl font-serif text-3xl font-semibold leading-tight text-white sm:text-4xl">
                Interested in {name} roles across Europe?
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-base text-white/85">
                Apply in a couple of minutes. Free for candidates, with recruiter
                support from application to interview.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Link
                  href={applyHref(slug)}
                  className="btn inline-flex bg-white text-brand-dark hover:bg-haze"
                >
                  Apply for {name} roles
                </Link>
                <Link
                  href="/jobs"
                  className="btn inline-flex border border-white/40 text-white hover:bg-white/10"
                >
                  Browse other categories
                  <ArrowRight className="h-4 w-4" />
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
