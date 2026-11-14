import Link from "next/link";
import { HeroSlider } from "@/components/HeroSlider";
import { TentangSection } from "@/components/TentangSection";
import {
  HomeBidangTiles,
  HomeBusinessCarousel,
  KidecoStatsBand,
} from "@/components/HomeKidecoBands";
import { AchievementSlider } from "@/components/AchievementSlider";
import { PartnershipMarquee } from "@/components/PartnershipMarquee";
import { TESTIMONIALS } from "@/services/content";

export default function HomePage() {
  return (
    <>
      <HeroSlider />
      <TentangSection />
      <KidecoStatsBand />
      <HomeBidangTiles />
      <HomeBusinessCarousel />
      <AchievementSlider />
      <PartnershipMarquee />

      {/* Crisp White Editorial Testimonials Strip */}
      <section
        id="testimoni"
        className="bg-white py-16 text-[#313238] md:py-20"
      >
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-10">
          <div className="flex flex-wrap items-end justify-between gap-4 border-b border-[#ECEEEF] pb-6">
            <div>
              <p className="font-display text-[11px] font-bold uppercase tracking-[0.14em] text-[#076653]">
                SUARA KADER &amp; MITRA
              </p>
              <h2 className="mt-2 font-display text-[26px] font-extrabold leading-tight tracking-[-0.02em] text-[#313238] sm:text-[32px]">
                Testimoni Terverifikasi
              </h2>
            </div>
            <Link
              href="/testimoni"
              className="text-xs font-semibold text-[#5E636B] transition hover:text-[#076653] hover:underline"
            >
              Tampilkan lebih banyak &rarr;
            </Link>
          </div>

          <div className="mt-10 grid gap-8 md:grid-cols-2 md:gap-0 md:divide-x md:divide-[#E5E7EB]">
            {TESTIMONIALS.slice(0, 2).map((item, idx) => (
              <article
                key={item.id}
                className={`flex flex-col justify-between ${
                  idx === 0 ? "md:pr-10" : "md:pl-10"
                }`}
              >
                <p className="text-[15px] leading-[1.75] text-[#313238]">
                  &ldquo;{item.quote}&rdquo;
                </p>
                <p className="mt-5 font-display text-xs font-bold text-[#076653]">
                  {item.authorLabel} &bull;{" "}
                  <span className="font-normal text-[#5E636B]">
                    {item.roleOrOrg}
                  </span>
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
