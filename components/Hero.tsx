import { Check } from "lucide-react";

const trustPoints = [
  "Free for candidates",
  "Europe-wide opportunities",
  "Recruiter support from application to interview",
];

export default function Hero() {
  return (
    <section id="home" className="relative isolate overflow-hidden pt-16 md:pt-[72px]">
      {/* Background image */}
      <div className="absolute inset-0 -z-10">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1920&q=80"
          alt="Professionals collaborating in a modern European workplace"
          className="h-full w-full object-cover"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/70 via-ink/45 to-ink/20" />
      </div>

      <div className="container-page py-16 sm:py-20 lg:py-28">
        <div className="max-w-2xl rounded-2xl bg-white/95 p-7 shadow-card backdrop-blur sm:p-9 lg:p-11">
          <span className="eyebrow">Recruitment across Europe</span>

          <h1 className="mt-5 font-serif text-[2rem] font-semibold leading-[1.1] text-ink sm:text-5xl">
            Find Flexible Job Opportunities Across Europe
          </h1>

          <p className="mt-5 text-base leading-relaxed text-muted sm:text-lg">
            EuroTalentia connects candidates with entry-level, professional,
            flexible, and relocation-friendly roles across Europe. Tell us your
            skills, preferred country, language, and availability — our
            recruitment team will match you with suitable opportunities.
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <a href="#apply" className="btn-primary w-full sm:w-auto">
              Apply in 2 Minutes
            </a>
            <a href="#categories" className="btn-secondary w-full sm:w-auto">
              Explore Job Categories
            </a>
          </div>

          <ul className="mt-7 grid gap-2.5 border-t border-haze pt-6 sm:gap-3">
            {trustPoints.map((point) => (
              <li key={point} className="flex items-start gap-2.5">
                <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-brand-tint">
                  <Check className="h-3 w-3 text-brand-dark" strokeWidth={3} />
                </span>
                <span className="text-sm font-medium text-ink">{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
