"use client";

import Link from "next/link";
import { useState } from "react";
import { ACHIEVEMENTS } from "@/services/content";
import { MediaSlot } from "@/components/MediaSlot";

export function AchievementSlider() {
  const [index, setIndex] = useState(0);
  const total = ACHIEVEMENTS.length;

  const goPrev = () => setIndex((prev) => (prev - 1 + total) % total);
  const goNext = () => setIndex((prev) => (prev + 1) % total);

  const counterText = `${String(index + 1).padStart(2, "0")} / ${String(
    total
  ).padStart(2, "0")}`;

  return (
    <section
      id="prestasi"
      className="bg-[#06231D] py-14 text-[#FFFDEE] md:py-20"
      onKeyDown={(e) => {
        if (e.key === "ArrowLeft") goPrev();
        if (e.key === "ArrowRight") goNext();
      }}
    >
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-10">
        {/* Header + Arrow Controls */}
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="font-display text-xs font-bold uppercase tracking-[0.08em] text-[#E3EF26]">
              04 / PRESTASI &bull; EDITORIAL SLIDER
            </p>
            <h2 className="mt-2 font-display text-[28px] font-extrabold leading-tight sm:text-[34px]">
              Capaian &amp; Rekam Jejak Kader
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <span className="font-mono text-[13px] font-semibold text-[#C7DCD2]">
              {counterText}
            </span>
            <button
              type="button"
              onClick={goPrev}
              aria-label="Slide prestasi sebelumnya"
              className="inline-flex h-11 min-w-[44px] cursor-pointer items-center justify-center rounded-[4px] border border-[#1E593B] bg-[#0C342C] px-3 text-[#FFFDEE] transition hover:border-[#E3EF26] hover:text-[#E3EF26]"
            >
              <svg
                width="36"
                height="12"
                viewBox="0 0 45 14"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M44 7H2M2 7L8 1M2 7L8 13"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <button
              type="button"
              onClick={goNext}
              aria-label="Slide prestasi berikutnya"
              className="inline-flex h-11 min-w-[44px] cursor-pointer items-center justify-center rounded-[4px] border border-[#1E593B] bg-[#0C342C] px-3 text-[#FFFDEE] transition hover:border-[#E3EF26] hover:text-[#E3EF26]"
            >
              <svg
                width="36"
                height="12"
                viewBox="0 0 45 14"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M1 7H43M43 7L37 1M43 7L37 13"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <Link
              href="/prestasi"
              className="inline-flex min-h-[44px] items-center rounded-[4px] bg-[#E3EF26] px-4 font-display text-xs font-bold text-[#06231D] transition hover:bg-[#E2FBCE]"
            >
              Arsip Prestasi &rarr;
            </Link>
          </div>
        </div>

        {/* Horizontal Editorial Slider Track */}
        <div className="mt-8 overflow-hidden rounded-[8px] border border-[#124236] bg-[#0C342C]">
          <div
            className="flex transition-transform duration-[800ms] ease-[cubic-bezier(0.645,0.075,0.275,0.995)]"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {ACHIEVEMENTS.map((item) => (
              <article
                key={item.id}
                className="grid w-full shrink-0 gap-6 p-6 md:grid-cols-12 md:p-8"
              >
                <div className="aspect-square w-full overflow-hidden rounded-[8px] border border-[#124236] md:col-span-5">
                  <MediaSlot
                    imageSrc={item.imageSrc}
                    imageAlt={item.imageAlt}
                    slotStatus={item.slotStatus}
                    slotLabel={item.pendingLabel}
                    width={626}
                    height={626}
                  />
                </div>
                <div className="flex flex-col justify-center md:col-span-7 md:pl-4">
                  <span className="inline-flex w-fit items-center rounded-full border border-[#E3EF26]/40 bg-[#06231D] px-3 py-1 font-display text-[11px] font-bold uppercase tracking-[0.06em] text-[#E3EF26]">
                    {item.category}
                  </span>
                  <h3 className="mt-4 font-display text-2xl font-extrabold text-[#FFFDEE] sm:text-[28px]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-base leading-relaxed text-[#C7DCD2]">
                    {item.description}
                  </p>
                  <div className="mt-6 space-y-1 border-t border-[#124236] pt-4 text-xs text-[#C7DCD2]">
                    <p>{item.recipientLabel}</p>
                    <p>{item.organizerLabel}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
