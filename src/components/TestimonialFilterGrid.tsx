"use client";

import { useState } from "react";
import { TESTIMONIALS } from "@/services/content";

const FILTERS = ["Semua", "Kader & Alumni", "Mitra Kolaborasi"] as const;

export function TestimonialFilterGrid() {
  const [selected, setSelected] = useState<string>("Semua");

  const visible =
    selected === "Semua"
      ? TESTIMONIALS
      : TESTIMONIALS.filter((t) => t.category === selected);

  return (
    <section className="bg-[#FFFDEE] py-14 text-[#06231D] md:py-20">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-10">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="font-display text-xs font-bold uppercase tracking-[0.08em] text-[#076653]">
              01 / SUARA KADER &amp; MITRA
            </p>
            <h2 className="mt-2 font-display text-[28px] font-extrabold sm:text-[32px]">
              Kata Kader &amp; Mitra Nyata
            </h2>
          </div>

          <div className="flex flex-wrap gap-2" role="group" aria-label="Filter testimoni">
            {FILTERS.map((cat) => {
              const active = selected === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelected(cat)}
                  aria-pressed={active}
                  className={`inline-flex min-h-[44px] cursor-pointer items-center rounded-full px-4 text-xs font-semibold transition ${
                    active
                      ? "bg-[#06231D] text-[#E3EF26]"
                      : "border border-[#D4E4DC] bg-white text-[#06231D] hover:bg-[#E2FBCE]"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* 3-Column Simple Grid (No submit CTA button per user request) */}
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {visible.map((item) => (
            <article
              key={item.id}
              className="flex flex-col justify-between rounded-[8px] border border-[#D4E4DC] bg-white p-6 shadow-xs"
            >
              <div>
                <div className="flex items-center justify-between gap-2">
                  <span className="inline-flex rounded-full bg-[#E2FBCE] px-3 py-1 font-display text-[11px] font-bold uppercase tracking-[0.06em] text-[#06231D]">
                    {item.category}
                  </span>
                  <span
                    aria-hidden="true"
                    className="font-display text-2xl font-extrabold text-[#076653]"
                  >
                    &ldquo;
                  </span>
                </div>
                <p className="mt-4 text-[15px] leading-[1.65] text-[#06231D]">
                  {item.quote}
                </p>
              </div>

              <div className="mt-6 border-t border-[#D4E4DC] pt-4">
                <p className="font-display text-[13px] font-bold text-[#06231D]">
                  {item.authorLabel}
                </p>
                <p className="mt-0.5 text-xs text-[#2F4F46]">{item.roleOrOrg}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
