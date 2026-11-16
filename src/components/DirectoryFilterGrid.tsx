"use client";

import { useState } from "react";
import type { SlotStatus } from "@/types/content";
import { MediaSlot } from "@/components/MediaSlot";

export interface DirectoryCardItem {
  id: string;
  category: string;
  title: string;
  description: string;
  metaPrimary: string;
  metaSecondary: string;
  imageSrc: string | null;
  imageAlt: string;
  pendingLabel?: string;
  slotStatus: SlotStatus;
  fit?: "cover" | "contain";
}

interface DirectoryFilterGridProps {
  sectionEyebrow: string;
  sectionHeading: string;
  categories: string[];
  items: DirectoryCardItem[];
}

export function DirectoryFilterGrid({
  sectionEyebrow,
  sectionHeading,
  categories,
  items,
}: DirectoryFilterGridProps) {
  const [selected, setSelected] = useState<string>("Semua");

  const filterList = ["Semua", ...categories];
  const visibleItems =
    selected === "Semua"
      ? items
      : items.filter((item) => item.category === selected);

  return (
    <section
      id="direktori"
      className="bg-white py-16 text-[#313238] md:py-20"
    >
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-10">
        <div className="flex flex-col justify-between gap-6 border-b border-[#ECEEEF] pb-8 md:flex-row md:items-end">
          <div>
            <p className="font-display text-[11px] font-bold uppercase tracking-[0.14em] text-[#076653]">
              {sectionEyebrow}
            </p>
            <h2 className="mt-2 font-display text-[28px] font-extrabold tracking-[-0.02em] text-[#313238] sm:text-[34px]">
              {sectionHeading}
            </h2>
          </div>

          <div
            className="flex flex-wrap gap-2"
            role="group"
            aria-label="Filter kategori"
          >
            {filterList.map((cat) => {
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

        {/* 3up Editorial 1:1 Directory Cards (Kideco White Minimal Grid) */}
        {visibleItems.length === 0 ? (
          <p className="mt-10 rounded-[6px] border border-[#E5E7EB] bg-[#F7F7F8] p-8 text-center text-sm text-[#5E636B]">
            Belum ada data yang dipublikasikan pada kategori ini.
          </p>
        ) : (
          <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {visibleItems.map((item) => (
            <article
              key={item.id}
              className="flex flex-col overflow-hidden border border-[#E5E7EB] bg-white transition hover:border-[#076653]/45"
            >
              <div className="aspect-square w-full overflow-hidden border-b border-[#ECEEEF] bg-[#06231D]">
                <MediaSlot
                  imageSrc={item.imageSrc}
                  imageAlt={item.imageAlt}
                  slotStatus={item.slotStatus}
                  slotLabel={item.pendingLabel}
                  fit={item.fit ?? "cover"}
                  width={410}
                  height={410}
                />
              </div>

              <div className="flex flex-1 flex-col justify-between p-6">
                <div>
                  <p className="font-display text-[11px] font-bold uppercase tracking-[0.08em] text-[#076653]">
                    {item.category}
                  </p>
                  <h3 className="mt-2 font-display text-lg font-extrabold leading-snug text-[#313238]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-[1.7] text-[#5E636B]">
                    {item.description}
                  </p>
                </div>

                <div className="mt-5 border-t border-[#ECEEEF] pt-4 text-xs text-[#5E636B]">
                  <p className="font-semibold text-[#313238]">
                    {item.metaPrimary}
                  </p>
                  <p className="mt-1">{item.metaSecondary}</p>
                </div>
              </div>
            </article>
          ))}
          </div>
        )}
      </div>
    </section>
  );
}
