export default function FinalCta() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="container-page">
        <div className="relative isolate overflow-hidden rounded-3xl bg-brand px-6 py-14 text-center shadow-card sm:px-10 sm:py-16">
          {/* subtle decorative layer */}
          <div className="absolute inset-0 -z-10 bg-gradient-to-br from-brand to-brand-dark" />
          <h2 className="mx-auto max-w-2xl font-serif text-3xl font-semibold leading-tight text-white sm:text-4xl">
            Ready to find your next opportunity in Europe?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-white/85">
            Apply in a couple of minutes. Free for candidates, with recruiter
            support every step of the way.
          </p>
          <div className="mt-8">
            <a
              href="#apply"
              className="btn inline-flex bg-white text-brand-dark hover:bg-haze"
            >
              Apply Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
