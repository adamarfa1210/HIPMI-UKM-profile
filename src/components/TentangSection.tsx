"use client";

import { useState } from "react";
import { COMPANY_VIDEO, TENTANG_PILLARS } from "@/services/content";
import { VideoModal } from "@/components/VideoModal";

export function TentangSection() {
  const [videoOpen, setVideoOpen] = useState(false);

  return (
    <section
      id="tentang"
      className="bg-[#FFFDEE] py-14 text-[#06231D] md:py-20"
    >
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-10">
        <div className="grid items-center gap-10 lg:grid-cols-12">
          {/* Narrative Left */}
          <div className="lg:col-span-6">
            <p className="font-display text-xs font-bold uppercase tracking-[0.08em] text-[#076653]">
              {COMPANY_VIDEO.eyebrow}
            </p>
            <h2 className="mt-3 font-display text-[28px] font-extrabold leading-[1.18] tracking-[-0.015em] text-[#06231D] sm:text-[36px]">
              {COMPANY_VIDEO.title}
            </h2>
            <p className="mt-4 text-base leading-[1.65] text-[#2F4F46]">
              {COMPANY_VIDEO.description}
            </p>
          </div>

          {/* Interactive Video Poster Right */}
          <div className="lg:col-span-6">
            <button
              type="button"
              onClick={() => setVideoOpen(true)}
              aria-label="Putar video company profile UKM HIPMI PT Universitas Telkom"
              className="group relative block aspect-video w-full cursor-pointer overflow-hidden rounded-[8px] border border-[#D4E4DC] bg-[#06231D] text-left shadow-lg"
            >
              <img
                src={COMPANY_VIDEO.posterSrc}
                alt={COMPANY_VIDEO.posterAlt}
                width={1280}
                height={720}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.02]"
                loading="lazy"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-[#06231D]/85 via-[#06231D]/25 to-transparent"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-[#E3EF26] text-xl font-bold text-[#06231D] shadow-xl transition group-hover:scale-105">
                  ▶
                </span>
              </div>
              <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between gap-2 text-xs text-[#FFFDEE]">
                <span className="font-medium">
                  Video Company Profile (preload=&quot;none&quot; + poster thumbnail)
                </span>
              </div>
            </button>
          </div>
        </div>

        {/* 3 Pillars Row */}
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {TENTANG_PILLARS.map((pillar) => (
            <div
              key={pillar.id}
              className="rounded-[8px] border border-[#D4E4DC] bg-white p-6"
            >
              <h3 className="font-display text-[19px] font-bold text-[#06231D]">
                {pillar.title}
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-[#2F4F46]">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <VideoModal open={videoOpen} onClose={() => setVideoOpen(false)} />
    </section>
  );
}
