"use client";

import Link from "next/link";
import { useState } from "react";
import { PARTNER_ITEMS } from "@/services/content";

export function PartnershipMarquee() {
  const [paused, setPaused] = useState(false);

  return (
    <section
      id="partnership"
      className="bg-[#0C342C] py-14 text-[#FFFDEE] md:py-16"
    >
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-10">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="font-display text-xs font-bold uppercase tracking-[0.08em] text-[#E3EF26]">
              02 / PARTNERSHIP &bull; LOGO MARQUEE
            </p>
            <h2 className="mt-2 font-display text-[26px] font-extrabold leading-tight sm:text-[32px]">
              Mitra &amp; Jaringan Kolaborasi
            </h2>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <button
              type="button"
              onClick={() => setPaused((p) => !p)}
              aria-pressed={paused}
              className="inline-flex min-h-[44px] cursor-pointer items-center gap-2 rounded-[4px] border border-[#1E593B] bg-[#06231D] px-4 text-[13px] font-semibold text-[#FFFDEE] transition hover:border-[#E3EF26] hover:text-[#E3EF26]"
            >
              <span aria-hidden="true">{paused ? "▶" : "❚❚"}</span>
              <span>{paused ? "Putar Marquee" : "Jeda Marquee"}</span>
            </button>
            <Link
              href="/partnership"
              className="inline-flex min-h-[44px] items-center rounded-[4px] bg-[#E3EF26] px-4 font-display text-xs font-bold text-[#06231D] transition hover:bg-[#E2FBCE]"
            >
              Semua Kemitraan &rarr;
            </Link>
          </div>
        </div>
      </div>

      {/* Seamless Marquee Track */}
      <div
        className={`marquee-wrapper relative mt-8 overflow-hidden ${
          paused ? "marquee-paused" : ""
        }`}
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-[#0C342C] to-transparent sm:w-20"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-[#0C342C] to-transparent sm:w-20"
        />

        <div className="animate-marquee items-center gap-8 px-4">
          {[...PARTNER_ITEMS, ...PARTNER_ITEMS].map((partner, index) => (
            <div
              key={`${partner.id}-${index}`}
              className="flex h-[92px] w-[240px] shrink-0 items-center gap-3 rounded-[8px] border border-[#124236] bg-[#09352C] px-4 py-3"
            >
              <img
                src={partner.imageSrc}
                alt={partner.imageAlt}
                width={56}
                height={56}
                className="h-14 w-14 shrink-0 rounded-[4px] bg-[#F6FAF9] object-contain p-1"
                loading="lazy"
              />
              <div className="min-w-0">
                <p className="truncate font-display text-xs font-bold text-[#FFFDEE]">
                  {partner.name}
                </p>
                <p className="mt-0.5 truncate text-[11px] text-[#C7DCD2]">
                  {partner.category}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
