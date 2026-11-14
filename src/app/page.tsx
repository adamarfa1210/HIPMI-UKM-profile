import Link from "next/link";
import { HeroSlider } from "@/components/HeroSlider";
import { TentangSection } from "@/components/TentangSection";
import { PartnershipMarquee } from "@/components/PartnershipMarquee";
import { AchievementSlider } from "@/components/AchievementSlider";
import { MediaSlot } from "@/components/MediaSlot";
import {
  BIDANG_LIST,
  KADER_BUSINESSES,
  TESTIMONIALS,
} from "@/services/content";

export default function HomePage() {
  return (
    <>
      <HeroSlider />
      <TentangSection />
      <PartnershipMarquee />

      {/* Section 03 - Bisnis Kader Showcase Preview */}
      <section
        id="bisnis-kader"
        className="bg-[#FFFDEE] py-14 text-[#06231D] md:py-20"
      >
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-10">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="font-display text-xs font-bold uppercase tracking-[0.08em] text-[#076653]">
                03 / BISNIS KADER
              </p>
              <h2 className="mt-2 font-display text-[28px] font-extrabold leading-tight sm:text-[34px]">
                Direktori Usaha Kader Telkom
              </h2>
            </div>
            <Link
              href="/bisnis-kader"
              className="inline-flex min-h-[44px] items-center rounded-[4px] bg-[#06231D] px-5 font-display text-xs font-bold text-[#E3EF26] transition hover:bg-[#0C342C]"
            >
              Lihat Direktori Bisnis &rarr;
            </Link>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {KADER_BUSINESSES.slice(0, 3).map((biz) => (
              <article
                key={biz.id}
                className="flex flex-col overflow-hidden rounded-[8px] border border-[#D4E4DC] bg-white"
              >
                <div className="aspect-square w-full overflow-hidden border-b border-[#D4E4DC] bg-[#09352C]">
                  <MediaSlot
                    imageSrc={biz.imageSrc}
                    imageAlt={biz.imageAlt}
                    slotStatus={biz.slotStatus}
                    slotLabel={biz.pendingLabel}
                    width={626}
                    height={626}
                  />
                </div>
                <div className="flex flex-1 flex-col justify-between p-5">
                  <div>
                    <span className="inline-flex rounded-full bg-[#E2FBCE] px-3 py-1 font-display text-[11px] font-bold uppercase tracking-[0.06em] text-[#06231D]">
                      {biz.sector}
                    </span>
                    <h3 className="mt-3 font-display text-[19px] font-bold text-[#06231D]">
                      {biz.businessName}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-[#2F4F46]">
                      {biz.description}
                    </p>
                  </div>
                  <p className="mt-4 border-t border-[#D4E4DC] pt-3 text-xs font-medium text-[#2F4F46]">
                    {biz.ownerLabel}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <AchievementSlider />

      {/* Section 05 - Program Kerja Bidang Overview */}
      <section
        id="program-kerja"
        className="bg-[#E2FBCE] py-14 text-[#06231D] md:py-20"
      >
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-10">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="font-display text-xs font-bold uppercase tracking-[0.08em] text-[#076653]">
                05 / PROGRAM KERJA
              </p>
              <h2 className="mt-2 font-display text-[28px] font-extrabold leading-tight sm:text-[34px]">
                Agenda &amp; Program Unggulan 4 Bidang
              </h2>
            </div>
            <Link
              href="/program-kerja/okk"
              className="inline-flex min-h-[44px] items-center rounded-[4px] bg-[#06231D] px-5 font-display text-xs font-bold text-[#E3EF26] transition hover:bg-[#0C342C]"
            >
              Jelajahi Program Kerja &rarr;
            </Link>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {BIDANG_LIST.map((bidang) => (
              <Link
                key={bidang.slug}
                href={`/program-kerja/${bidang.slug}`}
                className="group flex flex-col justify-between rounded-[8px] border border-[#076653]/25 bg-white p-6 transition hover:-translate-y-0.5 hover:border-[#06231D] hover:shadow-md"
              >
                <div>
                  <span className="inline-flex rounded-full bg-[#06231D] px-3 py-1 font-display text-[11px] font-bold uppercase tracking-[0.06em] text-[#E3EF26]">
                    Bidang {bidang.shortName}
                  </span>
                  <h3 className="mt-4 font-display text-lg font-extrabold text-[#06231D]">
                    {bidang.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#2F4F46]">
                    {bidang.description}
                  </p>
                </div>

                <div className="mt-6 border-t border-[#D4E4DC] pt-4">
                  <p className="text-xs font-semibold text-[#076653]">
                    {bidang.compartmentSummary}
                  </p>
                  <span className="mt-2 inline-block font-display text-xs font-bold text-[#06231D] group-hover:underline">
                    Buka Halaman Bidang &rarr;
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Section 06 - Testimoni Nyata (Standar R-18) */}
      <section
        id="testimoni"
        className="bg-[#FFFDEE] py-14 text-[#06231D] md:py-20"
      >
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-10">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="font-display text-xs font-bold uppercase tracking-[0.08em] text-[#076653]">
                06 / TESTIMONI NYATA (STANDAR R-18)
              </p>
              <h2 className="mt-2 font-display text-[28px] font-extrabold leading-tight sm:text-[34px]">
                Suara Kader &amp; Mitra Terverifikasi
              </h2>
            </div>
            <Link
              href="/testimoni"
              className="inline-flex min-h-[44px] items-center rounded-[4px] border border-[#06231D] bg-white px-5 font-display text-xs font-bold text-[#06231D] transition hover:bg-[#E2FBCE]"
            >
              Semua Testimoni &rarr;
            </Link>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {TESTIMONIALS.slice(0, 2).map((item) => (
              <article
                key={item.id}
                className="flex flex-col justify-between rounded-[8px] border border-[#D4E4DC] bg-white p-6"
              >
                <p className="text-[15px] leading-[1.65] text-[#06231D]">
                  &ldquo;{item.quote}&rdquo;
                </p>
                <p className="mt-5 border-t border-[#D4E4DC] pt-4 font-display text-[13px] font-bold text-[#076653]">
                  {item.authorLabel} &bull; {item.roleOrOrg}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
