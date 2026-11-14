"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { HERO_SLIDES } from "@/services/content";
import { VideoModal } from "@/components/VideoModal";

export function HeroSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches) {
      setPaused(true);
    }
  }, []);

  useEffect(() => {
    if (paused) return;
    const timer = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 5000);
    return () => window.clearInterval(timer);
  }, [paused]);

  const currentSlide = HERO_SLIDES[activeIndex];

  return (
    <section
      aria-label="Hero Banner HIPMI PT Universitas Telkom"
      className="relative flex min-h-[680px] w-full flex-col justify-between overflow-hidden bg-[#06231D]"
    >
      {/* Full-Bleed Backdrop Layers */}
      {HERO_SLIDES.map((slide, idx) => (
        <div
          key={slide.id}
          aria-hidden={idx !== activeIndex}
          className={`pointer-events-none absolute inset-0 transition-opacity duration-700 ${
            idx === activeIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={slide.imageSrc}
            alt={slide.imageAlt}
            width={1440}
            height={680}
            className="h-full w-full object-cover object-center"
            loading={idx === 0 ? "eager" : "lazy"}
          />
        </div>
      ))}

      {/* Asymmetric Left-to-Right Gradient Scrim (WCAG AA contrast R-25) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,#06231D_0%,rgba(6,35,29,0.92)_38%,rgba(6,35,29,0.58)_68%,rgba(6,35,29,0.22)_100%)]"
      />

      {/* Content Container */}
      <div className="relative z-10 mx-auto flex min-h-[680px] w-full max-w-[1280px] flex-col justify-between px-4 py-10 sm:px-6 lg:px-10">
        {/* Top Meta Strip */}
        <div className="flex flex-wrap items-center justify-between gap-3">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#1E593B] bg-[#06231D]/85 px-4 py-1.5 font-display text-[11px] font-bold uppercase tracking-[0.06em] text-[#E3EF26] backdrop-blur-xs">
            <span aria-hidden="true">●</span>
            BACKDROP SLIDE {currentSlide.indexLabel} &bull; FADE 5.0 DETIK
          </span>
          <span className="rounded-full border border-[#124236] bg-[#06231D]/80 px-4 py-1.5 text-xs text-[#C7DCD2] backdrop-blur-xs">
            Ekosistem Pengusaha Muda Kampus
          </span>
        </div>

        {/* Main Left Copy */}
        <div className="my-10 max-w-2xl">
          <div className="mb-4 flex items-center gap-3">
            <span className="h-[2px] w-8 bg-[#E3EF26]" aria-hidden="true" />
            <p className="font-display text-xs font-bold uppercase tracking-[0.08em] text-[#E3EF26]">
              UKM KEWIRAUSAHAAN &bull; UNIVERSITAS TELKOM
            </p>
          </div>

          <h1 className="font-display text-[36px] font-extrabold leading-[1.08] tracking-[-0.02em] text-[#FFFDEE] sm:text-[48px] lg:text-[54px]">
            {currentSlide.title}
          </h1>

          <p className="mt-5 max-w-xl text-base leading-[1.6] text-[#FFFDEE]/90 sm:text-[17px]">
            {currentSlide.subtitle}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              href="/partnership"
              className="inline-flex min-h-[48px] items-center rounded-[4px] bg-[#E3EF26] px-6 font-display text-sm font-bold text-[#06231D] transition hover:bg-[#E2FBCE]"
            >
              Jelajahi Kemitraan
            </Link>
            <Link
              href="/program-kerja/okk"
              className="inline-flex min-h-[48px] items-center rounded-[4px] border border-[#1E593B] bg-[#0C342C]/90 px-6 font-display text-sm font-bold text-[#FFFDEE] transition hover:border-[#E3EF26] hover:text-[#E3EF26]"
            >
              Lihat Program Kerja
            </Link>
          </div>
        </div>

        {/* Bottom Controls Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-t border-[#124236]/80 pt-5">
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-xs font-medium text-[#C7DCD2]">
              {currentSlide.indexLabel} &bull;{" "}
              {paused ? "Dijeda" : "Auto-Fade 5.0s"}
            </span>
            <div className="flex items-center gap-1" role="tablist" aria-label="Pilih slide hero">
              {HERO_SLIDES.map((s, idx) => (
                <button
                  key={s.id}
                  type="button"
                  role="tab"
                  aria-selected={idx === activeIndex}
                  aria-label={`Tampilkan slide hero ${idx + 1}`}
                  onClick={() => setActiveIndex(idx)}
                  className="inline-flex h-11 min-w-[28px] cursor-pointer items-center justify-center px-1"
                >
                  <span
                    className={`block h-1.5 rounded-full transition-all ${
                      idx === activeIndex
                        ? "w-8 bg-[#E3EF26]"
                        : "w-3 bg-[#1E593B] hover:bg-[#C7DCD2]"
                    }`}
                  />
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <button
              type="button"
              onClick={() => setPaused((p) => !p)}
              aria-pressed={paused}
              className="inline-flex min-h-[44px] cursor-pointer items-center gap-2 rounded-[4px] border border-[#1E593B] bg-[#06231D]/90 px-4 text-xs font-semibold text-[#FFFDEE] transition hover:border-[#E3EF26] hover:text-[#E3EF26]"
            >
              <span aria-hidden="true">{paused ? "▶" : "❚❚"}</span>
              <span>{paused ? "Putar Slide" : "Jeda Slide"}</span>
            </button>

            <button
              type="button"
              onClick={() => setVideoModalOpen(true)}
              className="inline-flex min-h-[44px] cursor-pointer items-center gap-2 rounded-[4px] border border-[#E3EF26]/50 bg-[#09352C]/90 px-4 font-display text-xs font-bold text-[#E3EF26] transition hover:bg-[#076653]"
            >
              <span aria-hidden="true">▶</span>
              <span>Video Company Profile</span>
            </button>
          </div>
        </div>
      </div>

      <VideoModal
        open={videoModalOpen}
        onClose={() => setVideoModalOpen(false)}
      />
    </section>
  );
}
