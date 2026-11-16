"use client";

import Link from "next/link";
import { useState } from "react";
import { PARTNER_ITEMS } from "@/services/content";
import type { PartnerItem } from "@/types/content";

export function PartnershipMarquee({ items = PARTNER_ITEMS }: { items?: PartnerItem[] }) {
  const activeItems = items.length > 0 ? items : PARTNER_ITEMS;
  const [paused, setPaused] = useState(false);

  return (
    <section
      id="partnership"
      className="border-y border-[#ECEEEF] bg-[#F8F8F8] py-14 text-[#313238] md:py-16"
    >
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-10">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="font-display text-[11px] font-bold uppercase tracking-[0.14em] text-[#076653]">
              MITRA &amp; JARINGAN KOLABORASI
            </p>
            <h2 className="mt-2 font-display text-[26px] font-extrabold leading-tight tracking-[-0.02em] text-[#313238] sm:text-[32px]">
              Ekosistem Mitra Strategis
            </h2>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={() => setPaused((p) => !p)}
              aria-pressed={paused}
              className="inline-flex min-h-[42px] cursor-pointer items-center gap-2 rounded-[2px] border border-[#D1D5DB] bg-white px-4 text-xs font-semibold text-[#313238] transition hover:border-[#06231D] hover:text-[#06231D]"
            >
              <span aria-hidden="true">{paused ? "▶" : "❚❚"}</span>
              <span>{paused ? "Putar Marquee" : "Jeda Marquee"}</span>
            </button>
            <Link
              href="/partnership"
              className="inline-flex min-h-[42px] items-center gap-1.5 rounded-[2px] bg-[#06231D] px-5 font-display text-xs font-bold text-[#E3EF26] transition hover:bg-[#076653]"
            >
              <span>Tampilkan lebih banyak</span>
              <span aria-hidden="true">&rarr;</span>
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
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-[#F8F8F8] to-transparent sm:w-20"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-[#F8F8F8] to-transparent sm:w-20"
        />

        <div className="animate-marquee items-center gap-6 px-4">
          {[...activeItems, ...activeItems].map((partner, index) => (
            <div
              key={`${partner.id}-${index}`}
              className="flex h-[88px] w-[250px] shrink-0 items-center gap-3.5 border border-[#E5E7EB] bg-white px-4 py-3"
            >
              <img
                src={partner.imageSrc}
                alt={partner.imageAlt}
                width={52}
                height={52}
                className="h-13 w-13 shrink-0 object-contain"
                loading="lazy"
              />
              <div className="min-w-0">
                <p className="truncate font-display text-xs font-bold text-[#313238]">
                  {partner.name}
                </p>
                <p className="mt-0.5 truncate text-[11px] text-[#5E636B]">
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
