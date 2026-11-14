"use client";

import { useState } from "react";
import type { CompartmentStage } from "@/types/content";
import { MediaSlot } from "@/components/MediaSlot";

interface CompartmentStageProps {
  bidangName: string;
  compartment: CompartmentStage;
}

export function CompartmentStageCard({
  bidangName,
  compartment,
}: CompartmentStageProps) {
  const hasProker = compartment.prokerSlides.length > 0;
  const hasJobdesk = compartment.jobdeskSlides.length > 0;

  const [mode, setMode] = useState<"proker" | "jobdesk">(
    hasProker ? "proker" : "jobdesk"
  );
  const [slideIdx, setSlideIdx] = useState(0);

  const activeSlides =
    mode === "proker" ? compartment.prokerSlides : compartment.jobdeskSlides;
  const safeIndex = Math.min(slideIdx, Math.max(0, activeSlides.length - 1));
  const slide = activeSlides[safeIndex];

  const handleModeSwitch = (nextMode: "proker" | "jobdesk") => {
    setMode(nextMode);
    setSlideIdx(0);
  };

  const handlePrev = () => {
    if (activeSlides.length <= 1) return;
    setSlideIdx((prev) => (prev - 1 + activeSlides.length) % activeSlides.length);
  };

  const handleNext = () => {
    if (activeSlides.length <= 1) return;
    setSlideIdx((prev) => (prev + 1) % activeSlides.length);
  };

  if (!slide) return null;

  const slideNum = String(safeIndex + 1).padStart(2, "0");
  const slideTotal = String(activeSlides.length).padStart(2, "0");
  const isMixed = hasProker && hasJobdesk;

  return (
    <section
      aria-label={compartment.name}
      className="relative flex min-h-[680px] w-full flex-col justify-between overflow-hidden bg-[#06231D] text-[#FFFDEE]"
    >
      {/* Right Visual Stage Backdrop (Hero Style Composition) */}
      <div className="pointer-events-none relative inset-y-0 right-0 order-2 mx-4 mb-6 h-[320px] overflow-hidden rounded-[8px] border border-[#124236] lg:pointer-events-auto lg:absolute lg:bottom-8 lg:right-8 lg:top-16 lg:m-0 lg:h-auto lg:w-[46%]">
        <MediaSlot
          imageSrc={slide.imageSrc}
          imageAlt={slide.imageAlt}
          slotStatus={slide.slotStatus}
          slotLabel={slide.mediaSourceLabel}
          fit="poster"
          width={960}
          height={640}
        />
      </div>

      {/* Gradient Scrim Overlay on Desktop (stops before right poster stage) */}
      <div
        aria-hidden="true"
        className="pointer-events-none hidden bg-[linear-gradient(90deg,#06231D_0%,#06231D_47%,rgba(6,35,29,0.2)_56%,transparent_64%)] lg:absolute lg:inset-0 lg:block"
      />

      {/* Foreground Copy & Interactive Controls */}
      <div className="relative z-10 mx-auto flex w-full max-w-[1280px] flex-1 flex-col justify-between px-4 py-8 sm:px-6 lg:min-h-[680px] lg:px-10">
        {/* Top Meta Strip */}
        <div className="flex flex-wrap items-center justify-between gap-3">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#1E593B] bg-[#09352C] px-4 py-1.5 font-display text-[11px] font-bold uppercase tracking-[0.06em] text-[#E3EF26]">
            <span aria-hidden="true">●</span>
            {compartment.code} &bull;{" "}
            {isMixed
              ? mode === "proker"
                ? "PROGRAM KERJA"
                : "JOBDESK"
              : `SLIDE ${slideNum} / ${slideTotal}`}
          </span>

          <span className="rounded-full border border-[#124236] bg-[#0C342C] px-4 py-1.5 text-[11px] font-medium text-[#C7DCD2]">
            Pola Operasional: {compartment.patternLabel} &bull; {bidangName}
          </span>
        </div>

        {/* Left Content Column */}
        <div className="my-8 max-w-xl lg:my-10">
          <div className="mb-3 flex items-center gap-3">
            <span className="h-[2px] w-7 bg-[#E3EF26]" aria-hidden="true" />
            <p className="font-display text-xs font-bold uppercase tracking-[0.08em] text-[#E3EF26]">
              {slide.kind === "proker" ? "PROGRAM KERJA" : "JOBDESK"} &bull;{" "}
              {compartment.name.toUpperCase()}
            </p>
          </div>

          <h2 className="font-display text-[30px] font-extrabold leading-[1.1] tracking-[-0.02em] text-[#FFFDEE] sm:text-[42px] lg:text-[48px]">
            {slide.title}
          </h2>

          <p className="mt-4 text-base leading-[1.6] text-[#C7DCD2] sm:text-[17px]">
            {slide.description}
          </p>

          <p className="mt-3 text-xs text-[#E3EF26]/90">
            Media: {slide.mediaSourceLabel}
          </p>

          {/* Program Kerja <-> Jobdesk Mode Switcher */}
          {isMixed ? (
            <div
              className="mt-7 flex flex-wrap gap-3"
              role="tablist"
              aria-label={`Pilih mode ${compartment.name}`}
            >
              <button
                type="button"
                role="tab"
                aria-selected={mode === "proker"}
                onClick={() => handleModeSwitch("proker")}
                className={`inline-flex min-h-[48px] cursor-pointer items-center rounded-[4px] px-5 font-display text-xs font-bold uppercase tracking-[0.04em] transition ${
                  mode === "proker"
                    ? "bg-[#E3EF26] text-[#06231D]"
                    : "border border-[#1E593B] bg-[#0C342C] text-[#FFFDEE] hover:border-[#E3EF26]"
                }`}
              >
                Program Kerja ({compartment.prokerSlides.length})
              </button>
              <button
                type="button"
                role="tab"
                aria-selected={mode === "jobdesk"}
                onClick={() => handleModeSwitch("jobdesk")}
                className={`inline-flex min-h-[48px] cursor-pointer items-center rounded-[4px] px-5 font-display text-xs font-bold uppercase tracking-[0.04em] transition ${
                  mode === "jobdesk"
                    ? "bg-[#E3EF26] text-[#06231D]"
                    : "border border-[#1E593B] bg-[#0C342C] text-[#FFFDEE] hover:border-[#E3EF26]"
                }`}
              >
                Jobdesk ({compartment.jobdeskSlides.length})
              </button>
            </div>
          ) : null}
        </div>

        {/* Bottom Slide Controls */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-t border-[#124236] pt-5 lg:max-w-[52%]">
          <div className="flex items-center gap-3">
            <div className="flex gap-1.5" aria-hidden="true">
              {activeSlides.map((s, idx) => (
                <span
                  key={s.id}
                  className={`h-1.5 rounded-full transition-all ${
                    idx === safeIndex
                      ? "w-7 bg-[#E3EF26]"
                      : "w-3 bg-[#1E593B]"
                  }`}
                />
              ))}
            </div>
            <span className="text-xs text-[#C7DCD2]">
              {slideNum} / {slideTotal} &bull; {slide.title}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handlePrev}
              disabled={activeSlides.length <= 1}
              aria-label={`Slide sebelumnya di ${compartment.name}`}
              className="inline-flex min-h-[44px] min-w-[44px] cursor-pointer items-center justify-center rounded-[4px] border border-[#1E593B] bg-[#0C342C] px-4 text-xs font-semibold text-[#FFFDEE] transition hover:border-[#E3EF26] hover:text-[#E3EF26] disabled:cursor-not-allowed disabled:opacity-40"
            >
              &larr; Sebelumnya
            </button>
            <button
              type="button"
              onClick={handleNext}
              disabled={activeSlides.length <= 1}
              aria-label={`Slide berikutnya di ${compartment.name}`}
              className="inline-flex min-h-[44px] min-w-[44px] cursor-pointer items-center justify-center rounded-[4px] border border-[#1E593B] bg-[#0C342C] px-4 text-xs font-semibold text-[#FFFDEE] transition hover:border-[#E3EF26] hover:text-[#E3EF26] disabled:cursor-not-allowed disabled:opacity-40"
            >
              Berikutnya &rarr;
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
