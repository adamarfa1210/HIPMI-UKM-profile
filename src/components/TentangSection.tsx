"use client";

import Link from "next/link";
import { useState } from "react";
import { COMPANY_VIDEO, TENTANG_PILLARS } from "@/services/content";
import { VideoModal } from "@/components/VideoModal";

const PILLAR_LINKS = ["/bisnis-kader", "/partnership", "/program-kerja/okk"] as const;

export function TentangSection() {
  const [videoOpen, setVideoOpen] = useState(false);

  return (
    <section
      id="tentang"
      className="bg-white py-16 text-[#313238] md:py-24"
    >
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-10">
        {/* Kideco Style Asymmetric 2-Column Intro */}
        <div className="grid items-start gap-8 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <p className="font-display text-[11px] font-bold uppercase tracking-[0.14em] text-[#076653]">
              TENTANG HIPMI PT
            </p>
            <h2 className="mt-3 font-display text-[30px] font-extrabold leading-[1.15] tracking-[-0.02em] text-[#313238] sm:text-[38px]">
              {COMPANY_VIDEO.title}
            </h2>
          </div>

          <div className="space-y-4 lg:col-span-6 lg:col-start-7">
            <p className="text-[15px] leading-[1.75] text-[#5E636B]">
              {COMPANY_VIDEO.description}
            </p>
            <p className="text-[15px] leading-[1.75] text-[#5E636B]">
              Melalui sinergi pembinaan bisnis mahasiswa, jejaring alumni HIPMI
              nasional, dan kolaborasi mitra industri, setiap kader ditempa untuk
              siap membangun usaha berdaya saing tinggi.
            </p>
            <div className="pt-1">
              <Link
                href="/partnership"
                className="inline-flex min-h-[40px] items-center gap-2 font-display text-[13px] font-semibold text-[#313238] transition hover:text-[#076653]"
              >
                <span>Lebih Lanjut</span>
                <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Centered Wide Video Poster (Kideco Signature Media Block) */}
        <div className="mx-auto mt-12 max-w-[920px] md:mt-14">
          <button
            type="button"
            onClick={() => setVideoOpen(true)}
            aria-label="Putar video company profile UKM HIPMI PT Universitas Telkom"
            className="group relative block aspect-video w-full cursor-pointer overflow-hidden bg-[#06231D] text-left shadow-sm"
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
              className="absolute inset-0 bg-[#06231D]/25 transition group-hover:bg-[#06231D]/35"
            />
            <div className="absolute left-0 right-0 top-5 flex items-center justify-center gap-2 text-xs font-bold tracking-[0.06em] text-white/95 drop-shadow">
              <img
                src="/assets/logo-bintang.png"
                alt=""
                width={20}
                height={20}
                className="h-5 w-5 object-contain"
              />
              <span>HIPMI PT TELKOM</span>
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="inline-flex h-14 w-20 items-center justify-center rounded-[12px] bg-white/80 text-lg text-[#06231D] shadow-md backdrop-blur-xs transition group-hover:scale-105 group-hover:bg-[#E3EF26]">
                ▶
              </span>
            </div>
          </button>
        </div>

        {/* 3 Pillars Row with Crisp Hairline Dividers (No Boxy Card Borders) */}
        <div className="mt-16 grid gap-10 border-t border-[#ECEEEF] pt-12 md:grid-cols-3 md:gap-0 md:divide-x md:divide-[#E5E7EB]">
          {TENTANG_PILLARS.map((pillar, idx) => {
            const cleanTitle = pillar.title.replace(/^\d+\s*•\s*/, "");
            return (
              <div
                key={pillar.id}
                className="flex flex-col items-center px-4 text-center md:px-8"
              >
                <h3 className="font-display text-[22px] font-extrabold leading-snug text-[#313238]">
                  {cleanTitle}
                </h3>
                <p className="mt-3 max-w-[300px] text-sm leading-[1.7] text-[#5E636B]">
                  {pillar.description}
                </p>
                <Link
                  href={PILLAR_LINKS[idx] ?? "/program-kerja/okk"}
                  className="mt-5 inline-flex min-h-[36px] items-center gap-1.5 text-[13px] font-medium text-[#5E636B] transition hover:text-[#076653]"
                >
                  <span>Lebih Lanjut</span>
                  <span aria-hidden="true">&rarr;</span>
                </Link>
              </div>
            );
          })}
        </div>
      </div>

      <VideoModal open={videoOpen} onClose={() => setVideoOpen(false)} />
    </section>
  );
}
