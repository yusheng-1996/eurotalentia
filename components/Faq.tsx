"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { faqItems } from "./data";

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-haze/60 py-16 sm:py-20">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Good to know</span>
          <h2 className="section-title mt-4">Frequently asked questions</h2>
          <p className="mt-3 text-muted">
            Everything candidates usually ask before applying.
          </p>
        </div>

        <div className="mx-auto mt-10 max-w-3xl space-y-3">
          {faqItems.map((item, i) => {
            const isOpen = open === i;
            return (
              <div
                key={item.q}
                className="overflow-hidden rounded-2xl border border-haze bg-white shadow-soft"
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left sm:px-6"
                >
                  <span className="text-base font-semibold text-ink">
                    {item.q}
                  </span>
                  <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-brand-tint text-brand">
                    {isOpen ? (
                      <Minus className="h-4 w-4" />
                    ) : (
                      <Plus className="h-4 w-4" />
                    )}
                  </span>
                </button>
                <div
                  className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 text-sm leading-relaxed text-muted sm:px-6">
                      {item.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
