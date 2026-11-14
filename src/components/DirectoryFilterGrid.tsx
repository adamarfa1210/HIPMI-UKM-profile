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
      className="bg-[#FFFDEE] py-14 text-[#06231D] md:py-20"
    >
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-10">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="font-display text-xs font-bold uppercase tracking-[0.08em] text-[#076653]">
              {sectionEyebrow}
            </p>
            <h2 className="mt-2 font-display text-[28px] font-extrabold sm:text-[34px]">
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

        {/* 3up 1:1 Directory Cards */}
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {visibleItems.map((item) => (
            <article
              key={item.id}
              className="flex flex-col overflow-hidden rounded-[8px] border border-[#D4E4DC] bg-white shadow-xs"
            >
              <div className="aspect-square w-full overflow-hidden border-b border-[#D4E4DC] bg-[#09352C]">
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

              <div className="flex flex-1 flex-col justify-between p-5">
                <div>
                  <span className="inline-flex rounded-full bg-[#E2FBCE] px-3 py-1 font-display text-[11px] font-bold uppercase tracking-[0.06em] text-[#06231D]">
                    {item.category}
                  </span>
                  <h3 className="mt-3 font-display text-lg font-extrabold text-[#06231D]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#2F4F46]">
                    {item.description}
                  </p>
                </div>

                <div className="mt-5 border-t border-[#D4E4DC] pt-4 text-xs text-[#2F4F46]">
                  <p className="font-semibold text-[#06231D]">
                    {item.metaPrimary}
                  </p>
                  <p className="mt-1">{item.metaSecondary}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
