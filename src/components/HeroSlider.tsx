"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { HERO_SLIDES } from "@/services/content";
import type { CompanyVideo, HeroSlide } from "@/types/content";
import { VideoModal } from "@/components/VideoModal";

interface HeroSliderProps {
  slides?: HeroSlide[];
  companyVideo?: CompanyVideo;
}

export function HeroSlider({
  slides = HERO_SLIDES,
  companyVideo,
}: HeroSliderProps) {
  const activeSlides = slides.length > 0 ? slides : HERO_SLIDES;
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
      setActiveIndex((prev) => (prev + 1) % activeSlides.length);
    }, 5000);
    return () => window.clearInterval(timer);
  }, [paused, activeSlides.length]);

  const safeIdx = activeIndex % activeSlides.length;
  const currentSlide = activeSlides[safeIdx];

  return (
    <section
      aria-label="Hero Banner HIPMI PT Universitas Telkom"
      className="relative flex min-h-[640px] w-full flex-col justify-end overflow-hidden bg-[#06231D] lg:min-h-[680px]"
    >
      {/* Full-Bleed Backdrop Layers */}
      {activeSlides.map((slide, idx) => (
        <div
          key={slide.id}
          aria-hidden={idx !== safeIdx}
          className={`pointer-events-none absolute inset-0 transition-opacity duration-700 ${
            idx === safeIdx ? "opacity-100" : "opacity-0"
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

      {/* Clean Atmospheric Scrim Over Full-Bleed Photography (Kideco Style) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(6,35,29,0.52)_0%,rgba(6,35,29,0.34)_40%,rgba(6,35,29,0.82)_100%),linear-gradient(90deg,rgba(6,35,29,0.86)_0%,rgba(6,35,29,0.58)_46%,rgba(6,35,29,0.18)_100%)]"
      />

      {/* Content Container */}
      <div className="relative z-10 mx-auto flex min-h-[640px] w-full max-w-[1280px] flex-col justify-end px-4 pb-12 pt-20 sm:px-6 lg:min-h-[680px] lg:px-10 lg:pb-14">
        {/* Main Editorial Headline & Narrative (Clean Photo-Forward Hero) */}
        <div className="max-w-2xl pb-10">
          <p className="font-display text-[11px] font-bold uppercase tracking-[0.16em] text-[#E3EF26]">
            UKM KEWIRAUSAHAAN &bull; UNIVERSITAS TELKOM
          </p>

          <h1 className="mt-4 font-display text-[36px] font-extrabold leading-[1.08] tracking-[-0.02em] text-white sm:text-[48px] lg:text-[56px]">
            {currentSlide.title}
          </h1>

          <p className="mt-5 max-w-xl text-base leading-[1.65] text-white/88 sm:text-[17px]">
            {currentSlide.subtitle}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-6">
            <Link
              href="/partnership"
              className="inline-flex min-h-[46px] items-center rounded-[2px] bg-[#E3EF26] px-6 font-display text-xs font-bold uppercase tracking-[0.06em] text-[#06231D] transition hover:bg-white"
            >
              Jelajahi Kemitraan
            </Link>
            <Link
              href="/program-kerja/okk"
              className="inline-flex min-h-[44px] items-center gap-2 font-display text-sm font-bold text-white transition hover:text-[#E3EF26]"
            >
              <span>Lihat Program Kerja</span>
              <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </div>

        {/* Minimal Kideco-Style Bottom Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-t border-white/15 pt-5">
          <div className="flex flex-wrap items-center gap-4">
            <span className="font-mono text-xs font-medium tracking-wider text-white/75">
              {currentSlide.indexLabel}
            </span>
            <div className="flex items-center gap-1" role="tablist" aria-label="Pilih slide hero">
              {activeSlides.map((s, idx) => (
                <button
                  key={s.id}
                  type="button"
                  role="tab"
                  aria-selected={idx === safeIdx}
                  aria-label={`Tampilkan slide hero ${idx + 1}`}
                  onClick={() => setActiveIndex(idx)}
                  className="inline-flex h-9 min-w-[24px] cursor-pointer items-center justify-center px-1"
                >
                  <span
                    className={`block h-1 rounded-full transition-all ${
                      idx === safeIdx
                        ? "w-7 bg-[#E3EF26]"
                        : "w-2.5 bg-white/35 hover:bg-white/70"
                    }`}
                  />
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <button
              type="button"
              onClick={() => setPaused((p) => !p)}
              aria-pressed={paused}
              className="inline-flex min-h-[40px] cursor-pointer items-center gap-2 text-xs font-semibold text-white/80 transition hover:text-[#E3EF26]"
            >
              <span aria-hidden="true">{paused ? "▶" : "❚❚"}</span>
              <span>{paused ? "Putar Slide" : "Jeda Slide"}</span>
            </button>

            <button
              type="button"
              onClick={() => setVideoModalOpen(true)}
              className="inline-flex min-h-[40px] cursor-pointer items-center gap-2 border-l border-white/20 pl-4 font-display text-xs font-bold text-[#E3EF26] transition hover:text-white"
            >
              <span aria-hidden="true">▶</span>
              <span>Putar Video Profil</span>
            </button>
          </div>
        </div>
      </div>

      <VideoModal
        open={videoModalOpen}
        onClose={() => setVideoModalOpen(false)}
        posterSrc={companyVideo?.posterSrc}
        posterAlt={companyVideo?.posterAlt}
        videoUrl={companyVideo?.videoUrl}
      />
    </section>
  );
}
