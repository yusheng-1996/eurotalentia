"use client";

import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { jobCategories } from "./data";

export default function JobCategories() {
  const trackRef = useRef<HTMLDivElement>(null);

  const scrollByCards = (dir: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    const amount = Math.min(el.clientWidth * 0.8, 600);
    el.scrollBy({ left: dir * amount, behavior: "smooth" });
  };

  const handleSelect = (slug: string) => {
    // Reflect the selected category in the URL without a full navigation,
    // then scroll the application form into view.
    try {
      const url = new URL(window.location.href);
      url.searchParams.set("category", slug);
      window.history.replaceState({}, "", `${url.pathname}?${url.searchParams}`);
    } catch {
      /* no-op: history not available */
    }
    document.getElementById("apply")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="categories" className="bg-haze/60 py-16 sm:py-20">
      <div className="container-page">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-xl">
            <span className="eyebrow">Explore by sector</span>
            <h2 className="section-title mt-4">Job Categories</h2>
            <p className="mt-3 text-muted">
              Browse the sectors we recruit for across Europe. Pick one to start
              your application — we&apos;ll tailor matches to your choice.
            </p>
          </div>

          {/* Arrows (desktop) */}
          <div className="hidden gap-2 sm:flex">
            <button
              type="button"
              onClick={() => scrollByCards(-1)}
              aria-label="Previous categories"
              className="grid h-11 w-11 place-items-center rounded-full border border-ink/15 bg-white text-ink transition-colors hover:border-brand hover:text-brand"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={() => scrollByCards(1)}
              aria-label="Next categories"
              className="grid h-11 w-11 place-items-center rounded-full border border-ink/15 bg-white text-ink transition-colors hover:border-brand hover:text-brand"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Track */}
        <div
          ref={trackRef}
          className="no-scrollbar mt-8 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-2"
        >
          {jobCategories.map(({ name, icon: Icon, slug }) => (
            <button
              key={slug}
              type="button"
              onClick={() => handleSelect(slug)}
              className="group flex w-[160px] shrink-0 snap-start flex-col items-start gap-4 rounded-2xl border border-haze bg-white p-5 text-left shadow-soft transition-all duration-200 hover:-translate-y-1 hover:border-brand/40 hover:shadow-card sm:w-[200px]"
            >
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-brand-tint text-brand transition-colors group-hover:bg-brand group-hover:text-white">
                <Icon className="h-6 w-6" />
              </span>
              <span className="text-sm font-semibold leading-snug text-ink">
                {name}
              </span>
              <span className="mt-auto text-xs font-medium text-brand opacity-0 transition-opacity group-hover:opacity-100">
                Apply now →
              </span>
            </button>
          ))}
        </div>

        <p className="mt-4 text-center text-xs text-muted sm:hidden">
          Swipe to see more →
        </p>
      </div>
    </section>
  );
}
