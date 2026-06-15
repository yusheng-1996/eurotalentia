import { Briefcase, GaugeCircle } from "lucide-react";
import { featuredRoles } from "./data";

export default function FeaturedRoles() {
  return (
    <section id="roles" className="bg-haze/60 py-16 sm:py-20">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">What you can apply for</span>
          <h2 className="section-title mt-4">Featured role types</h2>
          <p className="mt-3 text-muted">
            A snapshot of the kinds of roles we place candidates in across
            Europe. Don&apos;t see your fit? Apply anyway — new roles open daily.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featuredRoles.map((role) => (
            <article
              key={role.category}
              className="flex flex-col overflow-hidden rounded-2xl border border-haze bg-white shadow-soft transition-all duration-200 hover:-translate-y-1 hover:shadow-card"
            >
              <div className="relative h-36 w-full overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={role.image}
                  alt={role.category}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h3 className="text-base font-semibold text-ink">
                  {role.category}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">
                  {role.examples}
                </p>

                <dl className="mt-4 space-y-2 border-t border-haze pt-4 text-xs">
                  <div className="flex items-center gap-2 text-muted">
                    <Briefcase className="h-4 w-4 text-brand" />
                    <dt className="sr-only">Work type</dt>
                    <dd className="font-medium text-ink">{role.workType}</dd>
                  </div>
                  <div className="flex items-center gap-2 text-muted">
                    <GaugeCircle className="h-4 w-4 text-brand" />
                    <dt className="sr-only">Experience</dt>
                    <dd className="font-medium text-ink">{role.experience}</dd>
                  </div>
                </dl>

                <a
                  href="#apply"
                  className="btn-secondary mt-5 w-full text-xs"
                  aria-label={`Apply for roles similar to ${role.category}`}
                >
                  Apply for similar roles
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
