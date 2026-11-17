"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import type { NewsArticle, NewsCategory } from "@/types/content";

const CATEGORY_TABS: Array<"Semua" | NewsCategory> = [
  "Semua",
  "Kegiatan",
  "Pengumuman",
  "Prestasi",
  "Bisnis",
];

function formatNewsDate(dateStr?: string | null): string {
  if (!dateStr) return "Baru diterbitkan";
  const d = new Date(dateStr);
  if (Number.isNaN(d.getTime())) return "Baru diterbitkan";
  return d.toLocaleDateString("id-ID", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

function NewsCover({
  src,
  alt,
  featured = false,
}: {
  src: string | null;
  alt: string;
  featured?: boolean;
}) {
  if (src) {
    return (
      <img
        src={src}
        alt={alt}
        className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
      />
    );
  }

  return (
    <div className="flex h-full w-full flex-col items-center justify-center bg-gradient-to-br from-[#06231D] via-[#0C342C] to-[#076653] p-6 text-center">
      <span className="inline-flex h-11 w-11 items-center justify-center rounded-[4px] border border-[#E3EF26]/40 bg-[#06231D]/70 font-display text-sm font-extrabold tracking-[0.14em] text-[#E3EF26]">
        HP
      </span>
      <p className="mt-3 font-display text-[11px] font-bold uppercase tracking-[0.14em] text-[#FFFDEE]/80">
        {featured ? "SOROTAN UTAMA HIPMI PT" : "WARTA HIPMI PT TELKOM"}
      </p>
    </div>
  );
}

export function NewsArchiveSection({ articles }: { articles: NewsArticle[] }) {
  const [activeCategory, setActiveCategory] = useState<"Semua" | NewsCategory>(
    "Semua"
  );

  const filteredArticles = useMemo(() => {
    if (activeCategory === "Semua") return articles;
    return articles.filter((item) => item.category === activeCategory);
  }, [articles, activeCategory]);

  const { featuredArticle, gridArticles } = useMemo(() => {
    if (filteredArticles.length === 0) {
      return { featuredArticle: null, gridArticles: [] as NewsArticle[] };
    }
    const hero =
      filteredArticles.find((item) => item.isFeatured) ?? filteredArticles[0];
    return {
      featuredArticle: hero,
      gridArticles: filteredArticles.filter((item) => item.id !== hero.id),
    };
  }, [filteredArticles]);

  return (
    <section
      id="arsip-berita"
      className="bg-[#FFFDEE] py-14 text-[#06231D] sm:py-16"
    >
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-10">
        {/* Category Tabs Bar */}
        <div className="mb-10 flex flex-col gap-4 border-b border-[#06231D]/15 pb-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-display text-[11px] font-bold uppercase tracking-[0.16em] text-[#076653]">
              KABAR &amp; PUBLIKASI RESMI
            </p>
            <h2 className="mt-1 font-display text-2xl font-extrabold tracking-[-0.02em] text-[#06231D] sm:text-3xl">
              Berita &amp; Liputan HIPMI PT Telkom
            </h2>
          </div>

          <div
            role="tablist"
            aria-label="Filter kategori berita"
            className="flex flex-wrap gap-2"
          >
            {CATEGORY_TABS.map((cat) => {
              const active = activeCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => setActiveCategory(cat)}
                  className={`cursor-pointer rounded-[2px] border px-4 py-2 font-display text-xs font-bold uppercase tracking-[0.08em] transition ${
                    active
                      ? "border-[#06231D] bg-[#06231D] text-[#E3EF26]"
                      : "border-[#06231D]/20 bg-white text-[#06231D] hover:border-[#076653] hover:text-[#076653]"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {!featuredArticle ? (
          <div className="rounded-[4px] border border-dashed border-[#06231D]/25 bg-white p-12 text-center">
            <p className="font-display text-sm font-bold uppercase tracking-[0.12em] text-[#076653]">
              BELUM ADA PUBLIKASI
            </p>
            <p className="mx-auto mt-2 max-w-md text-sm text-[#4A5A53]">
              {activeCategory === "Semua"
                ? "Belum ada berita publikasi yang ditayangkan oleh pengelola redaksi HIPMI PT Telkom."
                : `Belum ada berita pada kategori ${activeCategory}.`}
            </p>
          </div>
        ) : (
          <div className="space-y-12">
            {/* 1. Kotak Paling Besar di Paling Atas (Featured Card — Valorant News Layout) */}
            <Link
              href={`/berita/${featuredArticle.id}`}
              className="group grid overflow-hidden rounded-[4px] border border-[#06231D]/15 bg-[#06231D] text-[#FFFDEE] shadow-sm transition hover:border-[#076653] lg:grid-cols-12"
            >
              <div className="relative aspect-[16/9] overflow-hidden bg-[#041612] lg:col-span-7 lg:aspect-auto lg:min-h-[380px]">
                <NewsCover
                  src={featuredArticle.imageSrc}
                  alt={featuredArticle.imageAlt}
                  featured
                />
                <div className="pointer-events-none absolute left-4 top-4 inline-flex items-center gap-2">
                  <span className="rounded-[2px] bg-[#E3EF26] px-2.5 py-1 font-display text-[10px] font-extrabold uppercase tracking-[0.12em] text-[#06231D]">
                    BERITA UTAMA
                  </span>
                </div>
              </div>

              <div className="flex flex-col justify-between p-6 sm:p-8 lg:col-span-5 lg:p-10">
                <div>
                  <div className="flex flex-wrap items-center gap-3 text-xs font-bold uppercase tracking-[0.1em]">
                    <span className="text-[#E3EF26]">
                      {featuredArticle.category}
                    </span>
                    <span className="text-[#FFFDEE]/35">&bull;</span>
                    <time className="text-[#C7DCD2]">
                      {formatNewsDate(featuredArticle.publishedAt)}
                    </time>
                  </div>

                  <h3 className="mt-4 font-display text-2xl font-extrabold leading-[1.2] tracking-[-0.02em] text-[#FFFDEE] transition group-hover:text-[#E3EF26] sm:text-3xl">
                    {featuredArticle.title}
                  </h3>

                  <p className="mt-4 line-clamp-4 text-sm leading-[1.75] text-[#C7DCD2]">
                    {featuredArticle.summary}
                  </p>
                </div>

                <div className="mt-8 flex items-center justify-between border-t border-[#124236] pt-5">
                  <span className="text-xs font-medium text-[#C7DCD2]">
                    {featuredArticle.authorName || "Redaksi HIPMI PT Telkom"}
                  </span>
                  <span className="font-display text-xs font-bold uppercase tracking-[0.1em] text-[#E3EF26] transition group-hover:translate-x-1">
                    Baca Artikel &rarr;
                  </span>
                </div>
              </div>
            </Link>

            {/* 2. 3 Kotak Menyamping di Bawahnya (3-Column Grid) */}
            {gridArticles.length > 0 ? (
              <div className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
                {gridArticles.map((article) => (
                  <Link
                    key={article.id}
                    href={`/berita/${article.id}`}
                    className="group flex flex-col overflow-hidden rounded-[4px] border border-[#06231D]/15 bg-white transition hover:-translate-y-0.5 hover:border-[#076653] hover:shadow-md"
                  >
                    <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#06231D]">
                      <NewsCover src={article.imageSrc} alt={article.imageAlt} />
                    </div>

                    <div className="flex flex-1 flex-col justify-between p-5 sm:p-6">
                      <div>
                        <div className="flex flex-wrap items-center gap-2.5 text-[11px] font-bold uppercase tracking-[0.1em]">
                          <span className="text-[#076653]">
                            {article.category}
                          </span>
                          <span className="text-[#06231D]/30">&bull;</span>
                          <time className="text-[#5E636B]">
                            {formatNewsDate(article.publishedAt)}
                          </time>
                        </div>

                        <h3 className="mt-3 font-display text-lg font-extrabold leading-[1.3] tracking-[-0.015em] text-[#06231D] transition group-hover:text-[#076653]">
                          {article.title}
                        </h3>

                        <p className="mt-2.5 line-clamp-3 text-sm leading-[1.65] text-[#4A5A53]">
                          {article.summary}
                        </p>
                      </div>

                      <div className="mt-5 flex items-center justify-between border-t border-[#06231D]/10 pt-4 text-xs">
                        <span className="truncate font-medium text-[#5E636B]">
                          {article.authorName || "HIPMI PT Telkom"}
                        </span>
                        <span className="shrink-0 font-display font-bold uppercase tracking-[0.08em] text-[#076653] group-hover:text-[#06231D]">
                          Baca &rarr;
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            ) : null}
          </div>
        )}
      </div>
    </section>
  );
}
