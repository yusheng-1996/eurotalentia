"use client";

import { useRef } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { jobCategories, applyHref } from "./data";

export default function JobCategories() {
  const trackRef = useRef<HTMLDivElement>(null);

  const scrollByCards = (dir: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    const amount = Math.min(el.clientWidth * 0.8, 600);
    el.scrollBy({ left: dir * amount, behavior: "smooth" });
  };

  return (
    <section id="categories" className="scroll-mt-24 bg-haze/60 py-16 sm:py-20">
      <div className="container-page">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-xl">
            <span className="eyebrow">Explore by sector</span>
            <h2 className="section-title mt-4">Job Categories</h2>
            <p className="mt-3 text-muted">
              Browse the sectors we recruit for across Europe. Open a category to
              see live role types, or jump straight to your application.
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
            <div
              key={slug}
              className="group flex w-[170px] shrink-0 snap-start flex-col rounded-2xl border border-haze bg-white p-5 shadow-soft transition-all duration-200 hover:-translate-y-1 hover:border-brand/40 hover:shadow-card sm:w-[210px]"
            >
              {/* Main clickable area -> category page */}
              <Link href={`/jobs/${slug}`} className="flex flex-col gap-4">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-brand-tint text-brand transition-colors group-hover:bg-brand group-hover:text-white">
                  <Icon className="h-6 w-6" />
                </span>
                <span className="text-sm font-semibold leading-snug text-ink">
                  {name}
                </span>
              </Link>

              {/* Small apply CTA -> home form with category param */}
              <Link
                href={applyHref(slug)}
                className="mt-4 text-xs font-semibold text-brand transition-colors hover:text-brand-dark"
              >
                Apply now →
              </Link>
            </div>
          ))}
        </div>

        <p className="mt-4 text-center text-xs text-muted sm:hidden">
          Swipe to see more →
        </p>

        <div className="mt-8 text-center">
          <Link href="/jobs" className="btn-secondary">
            View all job categories
          </Link>
        </div>
      </div>
    </section>
  );
}
