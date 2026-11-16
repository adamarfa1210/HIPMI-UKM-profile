"use client";

import { useState } from "react";
import { TESTIMONIALS } from "@/services/content";
import type { TestimonialItem } from "@/types/content";

const FILTERS = ["Semua", "Kader & Alumni", "Mitra Kolaborasi"] as const;

export function TestimonialFilterGrid({
  items = TESTIMONIALS,
}: {
  items?: TestimonialItem[];
}) {
  const [selected, setSelected] = useState<string>("Semua");

  const visible =
    selected === "Semua"
      ? items
      : items.filter((t) => t.category === selected);

  return (
    <section className="bg-white py-16 text-[#313238] md:py-20">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-10">
        <div className="flex flex-col justify-between gap-6 border-b border-[#ECEEEF] pb-8 md:flex-row md:items-end">
          <div>
            <p className="font-display text-[11px] font-bold uppercase tracking-[0.14em] text-[#076653]">
              SUARA KADER &amp; MITRA
            </p>
            <h2 className="mt-2 font-display text-[28px] font-extrabold tracking-[-0.02em] text-[#313238] sm:text-[32px]">
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
                  className={`inline-flex min-h-[42px] cursor-pointer items-center rounded-[2px] px-4 text-xs font-semibold transition ${
                    active
                      ? "bg-[#06231D] text-[#E3EF26]"
                      : "border border-[#E5E7EB] bg-[#F7F7F8] text-[#313238] hover:border-[#06231D]"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* 3-Column Clean Editorial Quote Grid */}
        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {visible.map((item) => (
            <article
              key={item.id}
              className="flex flex-col justify-between border border-[#E5E7EB] bg-white p-6"
            >
              <div>
                <div className="flex items-center justify-between gap-2">
                  <span className="font-display text-[11px] font-bold uppercase tracking-[0.08em] text-[#076653]">
                    {item.category}
                  </span>
                  <span
                    aria-hidden="true"
                    className="font-display text-2xl font-extrabold text-[#076653]"
                  >
                    &ldquo;
                  </span>
                </div>
                <p className="mt-4 text-[15px] leading-[1.7] text-[#313238]">
                  {item.quote}
                </p>
              </div>

              <div className="mt-6 border-t border-[#ECEEEF] pt-4">
                <p className="font-display text-[13px] font-bold text-[#313238]">
                  {item.authorLabel}
                </p>
                <p className="mt-0.5 text-xs text-[#5E636B]">{item.roleOrOrg}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
