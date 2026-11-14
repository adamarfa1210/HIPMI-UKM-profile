import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { CompartmentStageCard } from "@/components/CompartmentStage";
import {
  BIDANG_LIST,
  BIDANG_PROGRAMS,
  isValidBidang,
} from "@/services/content";

export function generateStaticParams() {
  return BIDANG_LIST.map((b) => ({ bidang: b.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ bidang: string }>;
}): Promise<Metadata> {
  const { bidang } = await params;
  if (!isValidBidang(bidang)) {
    return { title: "Program Kerja | UKM HIPMI PT Universitas Telkom" };
  }
  const page = BIDANG_PROGRAMS[bidang];
  return {
    title: `${page.title} - Program Kerja | UKM HIPMI PT Universitas Telkom`,
    description: page.description,
  };
}

export default async function ProgramKerjaBidangPage({
  params,
}: {
  params: Promise<{ bidang: string }>;
}) {
  const { bidang } = await params;
  if (!isValidBidang(bidang)) {
    notFound();
  }

  const currentBidang = BIDANG_PROGRAMS[bidang];

  return (
    <>
      {/* Bidang Masthead (Kideco White Header + Sub-nav Bar) */}
      <section className="border-b border-[#E5E7EB] bg-white py-12 text-[#313238] md:py-14">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-10">
          <div className="flex items-center gap-3">
            <span className="h-[2px] w-7 bg-[#076653]" aria-hidden="true" />
            <p className="font-display text-[11px] font-bold uppercase tracking-[0.14em] text-[#076653]">
              {currentBidang.eyebrow}
            </p>
          </div>

          <h1 className="mt-3 font-display text-[34px] font-extrabold leading-tight tracking-[-0.02em] text-[#313238] sm:text-[44px]">
            {currentBidang.title}
          </h1>

          <p className="mt-3 max-w-3xl text-[15px] leading-[1.7] text-[#5E636B]">
            {currentBidang.description}
          </p>

          {/* 4-Bidang Quick Switcher + Summary */}
          <div className="mt-7 flex flex-col justify-between gap-4 border-t border-[#ECEEEF] pt-6 sm:flex-row sm:items-center">
            <nav
              aria-label="Pilih bidang program kerja"
              className="flex flex-wrap gap-2"
            >
              {BIDANG_LIST.map((item) => {
                const active = item.slug === currentBidang.slug;
                return (
                  <Link
                    key={item.slug}
                    href={`/program-kerja/${item.slug}`}
                    aria-current={active ? "page" : undefined}
                    className={`inline-flex min-h-[42px] items-center rounded-[2px] px-5 font-display text-xs font-bold transition ${
                      active
                        ? "bg-[#06231D] text-[#E3EF26]"
                        : "border border-[#E5E7EB] bg-[#F7F7F8] text-[#313238] hover:border-[#06231D]"
                    }`}
                  >
                    {item.shortName}
                  </Link>
                );
              })}
            </nav>

            <p className="text-xs font-semibold text-[#076653]">
              {currentBidang.summaryStats}
            </p>
          </div>
        </div>
      </section>

      {/* Hero-Style Compartments Stack (seamless without dark separator bars) */}
      {currentBidang.compartments.map((compartment) => (
        <CompartmentStageCard
          key={compartment.id}
          bidangName={currentBidang.title}
          compartment={compartment}
        />
      ))}
    </>
  );
}
