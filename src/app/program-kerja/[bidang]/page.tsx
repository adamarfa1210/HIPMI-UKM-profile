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
      {/* Bidang Masthead (#FFFDEE) */}
      <section className="border-b border-[#D4E4DC] bg-[#FFFDEE] py-12 text-[#06231D] md:py-14">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-10">
          <div className="flex items-center gap-3">
            <span className="h-[2px] w-7 bg-[#076653]" aria-hidden="true" />
            <p className="font-display text-xs font-bold uppercase tracking-[0.08em] text-[#076653]">
              {currentBidang.eyebrow}
            </p>
          </div>

          <h1 className="mt-3 font-display text-[34px] font-extrabold leading-tight tracking-[-0.02em] sm:text-[44px]">
            {currentBidang.title}
          </h1>

          <p className="mt-3 max-w-3xl text-base leading-[1.6] text-[#2F4F46]">
            {currentBidang.description}
          </p>

          {/* 4-Bidang Quick Switcher + Summary */}
          <div className="mt-7 flex flex-col justify-between gap-4 border-t border-[#D4E4DC] pt-6 sm:flex-row sm:items-center">
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
                    className={`inline-flex min-h-[44px] items-center rounded-full px-5 font-display text-xs font-bold transition ${
                      active
                        ? "bg-[#06231D] text-[#E3EF26]"
                        : "border border-[#D4E4DC] bg-white text-[#06231D] hover:bg-[#E2FBCE]"
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
