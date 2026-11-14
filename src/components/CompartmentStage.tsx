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
  const [direction, setDirection] = useState<"next" | "prev">("next");
  const [navSeq, setNavSeq] = useState(0);
  const [prevSlide, setPrevSlide] = useState<(typeof compartment.prokerSlides)[number] | null>(null);

  const activeSlides =
    mode === "proker" ? compartment.prokerSlides : compartment.jobdeskSlides;
  const safeIndex = Math.min(slideIdx, Math.max(0, activeSlides.length - 1));
  const slide = activeSlides[safeIndex];

  const handleModeSwitch = (nextMode: "proker" | "jobdesk") => {
    if (nextMode === mode) return;
    setPrevSlide(slide ?? null);
    setDirection(nextMode === "jobdesk" ? "next" : "prev");
    setNavSeq((seq) => seq + 1);
    setMode(nextMode);
    setSlideIdx(0);
  };

  const handlePrev = () => {
    if (activeSlides.length <= 1) return;
    setPrevSlide(slide ?? null);
    setDirection("prev");
    setNavSeq((seq) => seq + 1);
    setSlideIdx((prev) => (prev - 1 + activeSlides.length) % activeSlides.length);
  };

  const handleNext = () => {
    if (activeSlides.length <= 1) return;
    setPrevSlide(slide ?? null);
    setDirection("next");
    setNavSeq((seq) => seq + 1);
    setSlideIdx((prev) => (prev + 1) % activeSlides.length);
  };

  if (!slide) return null;

  const slideNum = String(safeIndex + 1).padStart(2, "0");
  const slideTotal = String(activeSlides.length).padStart(2, "0");
  const isMixed = hasProker && hasJobdesk;
  const enterAnimClass =
    navSeq > 0
      ? direction === "next"
        ? "animate-proker-enter-next"
        : "animate-proker-enter-prev"
      : "";
  const exitAnimClass =
    direction === "next"
      ? "animate-proker-exit-next"
      : "animate-proker-exit-prev";

  return (
    <section
      aria-label={compartment.name}
      className="relative flex min-h-[680px] w-full flex-col justify-between overflow-hidden bg-[#06231D] text-[#FFFDEE]"
    >
      {/* Full-Bleed Edge-to-Edge Visual Stage Backdrop (matches Desktop 1 Hero) */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden bg-[#06231D]">
        {prevSlide && navSeq > 0 ? (
          <div
            key={`exit-${prevSlide.id}-${navSeq}`}
            aria-hidden="true"
            className={`absolute inset-0 z-[1] ${exitAnimClass}`}
          >
            <MediaSlot
              imageSrc={prevSlide.imageSrc}
              imageAlt={prevSlide.imageAlt}
              slotStatus={prevSlide.slotStatus}
              slotLabel={prevSlide.mediaSourceLabel}
              fit="poster"
              width={1440}
              height={680}
            />
          </div>
        ) : null}

        <div
          key={`enter-${slide.id}-${navSeq}`}
          className={`absolute inset-0 z-[2] ${enterAnimClass}`}
        >
          <MediaSlot
            imageSrc={slide.imageSrc}
            imageAlt={slide.imageAlt}
            slotStatus={slide.slotStatus}
            slotLabel={slide.mediaSourceLabel}
            fit="poster"
            width={1440}
            height={680}
          />
        </div>
      </div>

      {/* Asymmetric Left-to-Right Gradient Scrim (WCAG AA contrast R-25, matches Hero Desktop 1) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-[3] bg-[linear-gradient(180deg,rgba(6,35,29,0.88)_0%,rgba(6,35,29,0.74)_55%,rgba(6,35,29,0.92)_100%)] lg:bg-[linear-gradient(90deg,#06231D_0%,#06231D_56%,rgba(6,35,29,0.94)_61%,rgba(6,35,29,0.42)_74%,rgba(6,35,29,0.08)_92%,rgba(6,35,29,0.06)_100%)]"
      />

      {/* Foreground Copy & Interactive Controls */}
      <div className="relative z-10 mx-auto flex min-h-[680px] w-full max-w-[1280px] flex-1 flex-col justify-between px-4 py-10 sm:px-6 lg:px-10">
        {/* Top Meta Strip */}
        <div className="flex flex-wrap items-center justify-between gap-3">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#1E593B] bg-[#06231D]/85 px-4 py-1.5 font-display text-[11px] font-bold uppercase tracking-[0.06em] text-[#E3EF26] backdrop-blur-xs">
            <span aria-hidden="true">●</span>
            {compartment.code} &bull;{" "}
            {isMixed
              ? mode === "proker"
                ? "PROGRAM KERJA"
                : "JOBDESK"
              : `SLIDE ${slideNum} / ${slideTotal}`}
          </span>

          <span className="rounded-full border border-[#124236] bg-[#06231D]/80 px-4 py-1.5 text-[11px] font-medium text-[#C7DCD2] backdrop-blur-xs">
            Pola Operasional: {compartment.patternLabel} &bull; {bidangName}
          </span>
        </div>

        {/* Left Content Column */}
        <div className="my-10 max-w-xl">
          <div key={`copy-${slide.id}-${navSeq}`} className={enterAnimClass}>
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
          </div>

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
        <div className="flex flex-wrap items-center justify-between gap-4 border-t border-[#124236]/80 pt-5 lg:max-w-[56%]">
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
              className="inline-flex min-h-[44px] min-w-[44px] cursor-pointer items-center justify-center rounded-[4px] border border-[#1E593B] bg-[#06231D]/90 px-4 text-xs font-semibold text-[#FFFDEE] backdrop-blur-xs transition hover:border-[#E3EF26] hover:text-[#E3EF26] disabled:cursor-not-allowed disabled:opacity-40"
            >
              &larr; Sebelumnya
            </button>
            <button
              type="button"
              onClick={handleNext}
              disabled={activeSlides.length <= 1}
              aria-label={`Slide berikutnya di ${compartment.name}`}
              className="inline-flex min-h-[44px] min-w-[44px] cursor-pointer items-center justify-center rounded-[4px] border border-[#1E593B] bg-[#06231D]/90 px-4 text-xs font-semibold text-[#FFFDEE] backdrop-blur-xs transition hover:border-[#E3EF26] hover:text-[#E3EF26] disabled:cursor-not-allowed disabled:opacity-40"
            >
              Berikutnya &rarr;
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
