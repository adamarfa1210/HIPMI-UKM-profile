"use client";

import Link from "next/link";
import { useState } from "react";
import {
  BIDANG_LIST,
  BIDANG_PROGRAMS,
  KADER_BUSINESSES,
  PARTNER_ITEMS,
} from "@/services/content";
import type { BidangSlug } from "@/types/content";
import { CarouselHeader } from "@/components/CarouselHeader";
import { MediaSlot } from "@/components/MediaSlot";

const BIDANG_TILE_MEDIA: Record<BidangSlug, { imageSrc: string; imageAlt: string }> = {
  okk: {
    imageSrc: "/assets/01-hero-home/hero-slide-02.jpg",
    imageAlt: "Pembinaan organisasi dan kepemimpinan kader HIPMI PT Universitas Telkom",
  },
  medkominfo: {
    imageSrc: "/assets/01-hero-home/hero-slide-01.jpg",
    imageAlt: "Kolaborasi tim media dan komunikasi kreatif HIPMI PT Universitas Telkom",
  },
  eksternal: {
    imageSrc: "/assets/01-hero-home/hero-slide-05.jpg",
    imageAlt: "Jejaring kemitraan eksternal dan kunjungan perusahaan kader HIPMI PT",
  },
  ekraf: {
    imageSrc: "/assets/01-hero-home/hero-slide-04.jpg",
    imageAlt: "Showcase ekonomi kreatif dan kompetisi bisnis kader Universitas Telkom",
  },
};

/** Kideco-inspired structural highlight strip showing real, non-fabricated entity counts. */
export function KidecoStatsBand() {
  const totalCompartments = BIDANG_LIST.reduce(
    (sum, item) => sum + BIDANG_PROGRAMS[item.slug].compartments.length,
    0
  );
  const totalPrograms = BIDANG_LIST.reduce(
    (sum, item) =>
      sum +
      BIDANG_PROGRAMS[item.slug].compartments.reduce(
        (cSum, comp) =>
          cSum + comp.prokerSlides.length + comp.jobdeskSlides.length,
        0
      ),
    0
  );

  const metrics = [
    { value: String(BIDANG_LIST.length), label: "Bidang Eksekutif Aktif" },
    { value: String(totalCompartments), label: "Kompartemen Pengurus" },
    { value: String(totalPrograms), label: "Agenda Kerja & Jobdesk" },
    { value: String(PARTNER_ITEMS.length), label: "Klaster Mitra Kolaborasi" },
  ];

  return (
    <section className="bg-white py-12 text-[#313238] md:py-16">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-10">
        <div className="relative overflow-hidden bg-[linear-gradient(90deg,#F7F7F9_0%,#ECEEEF_72%,#DFE2E6_100%)]">
          {/* Iconic Kideco right-edge visual peek on large viewports */}
          <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-24 overflow-hidden lg:block xl:w-28">
            <img
              src="/assets/01-hero-home/hero-slide-03.jpg"
              alt=""
              width={240}
              height={400}
              className="h-full w-full object-cover object-center"
              loading="lazy"
            />
          </div>

          <div className="relative z-10 px-6 py-10 sm:px-10 md:py-12 lg:pr-36">
            <h2 className="max-w-2xl font-display text-[24px] font-extrabold leading-snug tracking-[-0.02em] text-[#313238] sm:text-[30px]">
              HIPMI PT Telkom: Wadah Kolaborasi Wirausaha Mahasiswa Terstruktur
            </h2>
            <p className="mt-3 max-w-3xl text-sm leading-[1.7] text-[#5E636B]">
              Seluruh pembinaan kader dijalankan terpadu lintas empat bidang
              struktural dengan kompartemen aktif, program kerja terdokumentasi,
              serta etalase bisnis mahasiswa lintas industri.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-y-8 md:grid-cols-4 md:divide-x md:divide-[#D1D5DB]">
              {metrics.map((metric) => (
                <div key={metric.label} className="px-2 text-center md:px-6">
                  <p className="font-display text-[36px] font-extrabold leading-none tracking-[-0.02em] text-[#06231D] sm:text-[42px]">
                    {metric.value}
                  </p>
                  <p className="mt-3 text-xs font-medium leading-relaxed text-[#5E636B]">
                    {metric.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/** Kideco "Integrasi Strategi" centered photography tiles linking to the 4 Bidang routes. */
export function HomeBidangTiles() {
  return (
    <section
      id="program-kerja"
      className="bg-white py-16 text-[#313238] md:py-24"
    >
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-display text-[11px] font-bold uppercase tracking-[0.14em] text-[#076653]">
            STRUKTUR &amp; PROGRAM KERJA
          </p>
          <h2 className="mt-3 font-display text-[28px] font-extrabold leading-tight tracking-[-0.02em] text-[#313238] sm:text-[38px]">
            Empat Bidang Penggerak Organisasi
          </h2>
          <p className="mt-4 text-sm leading-[1.7] text-[#5E636B] sm:text-[15px]">
            Setiap bidang menaungi kompartemen kerja dan agenda unggulan yang
            dapat ditelusuri langsung hingga rincian jobdesk pengurus.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {BIDANG_LIST.map((bidang) => {
            const tile = BIDANG_TILE_MEDIA[bidang.slug];
            return (
              <Link
                key={bidang.slug}
                href={`/program-kerja/${bidang.slug}`}
                className="group relative block aspect-[4/5] overflow-hidden bg-[#06231D]"
              >
                <img
                  src={tile.imageSrc}
                  alt={tile.imageAlt}
                  width={480}
                  height={600}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-[linear-gradient(180deg,transparent_40%,rgba(6,35,29,0.9)_100%)]"
                />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <p className="font-display text-[11px] font-bold uppercase tracking-[0.08em] text-[#E3EF26]">
                    {bidang.compartmentSummary}
                  </p>
                  <h3 className="mt-1 font-display text-2xl font-extrabold text-white">
                    {bidang.shortName}
                  </h3>
                  <p className="mt-1.5 text-xs text-white/80 opacity-90 transition group-hover:text-[#E3EF26]">
                    Buka Program Kerja &rarr;
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/** Kideco "Berita Terbaru" muted grey 3-column carousel section showcasing Bisnis Kader. */
export function HomeBusinessCarousel() {
  const [index, setIndex] = useState(0);
  const total = KADER_BUSINESSES.length;

  const goPrev = () => setIndex((prev) => (prev - 1 + total) % total);
  const goNext = () => setIndex((prev) => (prev + 1) % total);

  const visibleItems = [0, 1, 2].map(
    (offset) => KADER_BUSINESSES[(index + offset) % total]
  );

  return (
    <section
      id="bisnis-kader"
      className="bg-[#F7F7F8] py-16 text-[#313238] md:py-24"
    >
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-10">
        <CarouselHeader
          eyebrow="ETALASE USAHA MAHASISWA"
          title="Bisnis & Rintisan Karya Kader"
          onPrev={goPrev}
          onNext={goNext}
          prevLabel="Usaha kader sebelumnya"
          nextLabel="Usaha kader berikutnya"
          moreHref="/bisnis-kader"
        />

        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {visibleItems.map((biz) => (
            <article key={biz.id} className="group flex flex-col">
              <Link
                href="/bisnis-kader"
                className="block aspect-[16/10] w-full overflow-hidden bg-[#06231D]"
              >
                <MediaSlot
                  imageSrc={biz.imageSrc}
                  imageAlt={biz.imageAlt}
                  slotStatus={biz.slotStatus}
                  slotLabel={biz.pendingLabel}
                  width={480}
                  height={300}
                />
              </Link>

              <p className="mt-4 text-xs font-medium text-[#7A7F87]">
                {biz.sector} &bull; {biz.ownerLabel}
              </p>

              <h3 className="mt-1.5 font-display text-base font-extrabold leading-snug text-[#313238] transition group-hover:text-[#076653]">
                <Link href="/bisnis-kader">{biz.businessName}</Link>
              </h3>

              <p className="mt-2 line-clamp-2 text-xs leading-[1.7] text-[#5E636B]">
                {biz.description}
              </p>

              <div className="mt-4">
                <Link
                  href="/bisnis-kader"
                  className="text-xs font-semibold text-[#5E636B] transition hover:text-[#076653] hover:underline"
                >
                  Selengkapnya
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
