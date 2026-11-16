"use client";

import Link from "next/link";
import { useState } from "react";
import { ACHIEVEMENTS } from "@/services/content";
import type { AchievementItem } from "@/types/content";
import { MediaSlot } from "@/components/MediaSlot";
import { CarouselHeader } from "@/components/CarouselHeader";

export function AchievementSlider({ items = ACHIEVEMENTS }: { items?: AchievementItem[] }) {
  const activeItems = items.length > 0 ? items : ACHIEVEMENTS;
  const total = activeItems.length;
  const [index, setIndex] = useState(total > 3 ? 3 : 0);

  const goPrev = () => setIndex((prev) => (prev - 1 + total) % total);
  const goNext = () => setIndex((prev) => (prev + 1) % total);

  const visibleCount = Math.min(3, total);
  const visibleItems = Array.from({ length: visibleCount }, (_, offset) => activeItems[(index + offset) % total]);

  return (
    <section
      id="prestasi"
      className="bg-white py-16 text-[#313238] md:py-24"
      onKeyDown={(e) => {
        if (e.key === "ArrowLeft") goPrev();
        if (e.key === "ArrowRight") goNext();
      }}
    >
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-10">
        <CarouselHeader
          eyebrow="PENCAPAIAN KADER"
          title="Prestasi & Penghargaan"
          onPrev={goPrev}
          onNext={goNext}
          prevLabel="Prestasi sebelumnya"
          nextLabel="Prestasi berikutnya"
          moreHref="/prestasi"
        />

        {/* Kideco 3-Column Visual Achievement Cards */}
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {visibleItems.map((item) => (
            <Link
              key={item.id}
              href="/prestasi"
              className="group flex flex-col"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#06231D]">
                <MediaSlot
                  imageSrc={item.imageSrc}
                  imageAlt={item.imageAlt}
                  slotStatus={item.slotStatus}
                  slotLabel={item.pendingLabel}
                  width={480}
                  height={300}
                />
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#06231D]/70 via-transparent to-transparent"
                />
                <span className="absolute bottom-3 left-4 font-display text-[11px] font-bold uppercase tracking-[0.06em] text-[#E3EF26]">
                  {item.category}
                </span>
              </div>

              <h3 className="mt-4 text-center font-display text-sm font-bold leading-snug text-[#313238] transition group-hover:text-[#076653]">
                {item.title}
              </h3>
              <p className="mt-1 text-center text-xs text-[#5E636B]">
                {item.organizerLabel}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
