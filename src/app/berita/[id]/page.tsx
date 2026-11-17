import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SubpageBannerCta } from "@/components/SubpageBannerCta";
import {
  getPublicNews,
  getPublicNewsById,
  getSiteConfig,
} from "@/services/api";

export const dynamic = "force-dynamic";

function formatDateLong(dateStr?: string | null): string {
  if (!dateStr) return "Baru diterbitkan";
  const d = new Date(dateStr);
  if (Number.isNaN(d.getTime())) return "Baru diterbitkan";
  return d.toLocaleDateString("id-ID", {
    weekday: "long",
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const article = await getPublicNewsById(id);
  if (!article) {
    return {
      title: "Berita Tidak Ditemukan | HIPMI PT Telkom",
    };
  }
  return {
    title: `${article.title} | Berita HIPMI PT Telkom`,
    description: article.summary,
  };
}

export default async function BeritaDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const [article, allNews, siteConfig] = await Promise.all([
    getPublicNewsById(id),
    getPublicNews(),
    getSiteConfig(),
  ]);

  if (!article) {
    notFound();
  }

  const relatedNews = allNews
    .filter((item) => item.id !== article.id)
    .slice(0, 3);

  return (
    <>
      {/* Editorial Article Header */}
      <section className="bg-[#06231D] py-12 text-[#FFFDEE] sm:py-16">
        <div className="mx-auto max-w-[960px] px-4 sm:px-6 lg:px-10">
          <Link
            href="/berita"
            className="inline-flex items-center gap-2 font-display text-xs font-bold uppercase tracking-[0.1em] text-[#E3EF26] transition hover:text-[#FFFDEE]"
          >
            &larr; Kembali ke Berita HIPMI
          </Link>

          <div className="mt-6 flex flex-wrap items-center gap-3 text-xs font-bold uppercase tracking-[0.12em]">
            <span className="rounded-[2px] bg-[#E3EF26] px-2.5 py-1 text-[#06231D]">
              {article.category}
            </span>
            <time className="text-[#C7DCD2]">
              {formatDateLong(article.publishedAt)}
            </time>
            <span className="text-[#FFFDEE]/30">&bull;</span>
            <span className="text-[#C7DCD2]">
              {article.authorName || "Redaksi HIPMI PT Telkom"}
            </span>
          </div>

          <h1 className="mt-5 font-display text-3xl font-extrabold leading-[1.15] tracking-[-0.025em] text-[#FFFDEE] sm:text-4xl lg:text-[44px]">
            {article.title}
          </h1>

          <p className="mt-5 text-base leading-[1.75] text-[#C7DCD2] sm:text-lg">
            {article.summary}
          </p>
        </div>
      </section>

      {/* Main Article Body */}
      <article className="bg-[#FFFDEE] py-12 text-[#06231D] sm:py-16">
        <div className="mx-auto max-w-[960px] px-4 sm:px-6 lg:px-10">
          {article.imageSrc ? (
            <figure className="mb-10 overflow-hidden rounded-[4px] border border-[#06231D]/15 bg-[#06231D]">
              <div className="aspect-[16/9] w-full overflow-hidden">
                <img
                  src={article.imageSrc}
                  alt={article.imageAlt}
                  className="h-full w-full object-cover"
                />
              </div>
            </figure>
          ) : null}

          <div className="prose-hipmi space-y-6 text-base leading-[1.85] text-[#22352E] sm:text-[17px]">
            {article.content.split(/\n{2,}/).map((paragraph, idx) => (
              <p key={idx} className="whitespace-pre-line">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </article>

      {/* Related News (3-across) */}
      {relatedNews.length > 0 ? (
        <section className="border-t border-[#06231D]/15 bg-[#F4F3E6] py-14 text-[#06231D]">
          <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-10">
            <div className="mb-8 flex items-end justify-between gap-4">
              <div>
                <p className="font-display text-[11px] font-bold uppercase tracking-[0.14em] text-[#076653]">
                  BACA JUGA
                </p>
                <h2 className="mt-1 font-display text-2xl font-extrabold tracking-[-0.02em] text-[#06231D]">
                  Berita HIPMI Lainnya
                </h2>
              </div>
              <Link
                href="/berita"
                className="font-display text-xs font-bold uppercase tracking-[0.08em] text-[#076653] hover:text-[#06231D]"
              >
                Lihat Semua &rarr;
              </Link>
            </div>

            <div className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
              {relatedNews.map((item) => (
                <Link
                  key={item.id}
                  href={`/berita/${item.id}`}
                  className="group flex flex-col overflow-hidden rounded-[4px] border border-[#06231D]/15 bg-white transition hover:-translate-y-0.5 hover:border-[#076653] hover:shadow-md"
                >
                  <div className="aspect-[16/9] w-full overflow-hidden bg-[#06231D]">
                    {item.imageSrc ? (
                      <img
                        src={item.imageSrc}
                        alt={item.imageAlt}
                        className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-[#06231D] to-[#076653]">
                        <span className="font-display text-xs font-bold uppercase tracking-[0.14em] text-[#E3EF26]">
                          HIPMI PT NEWS
                        </span>
                      </div>
                    )}
                  </div>
                  <div className="flex flex-1 flex-col justify-between p-5">
                    <div>
                      <p className="text-[11px] font-bold uppercase tracking-[0.1em] text-[#076653]">
                        {item.category}
                      </p>
                      <h3 className="mt-2 font-display text-base font-extrabold leading-[1.35] text-[#06231D] group-hover:text-[#076653]">
                        {item.title}
                      </h3>
                    </div>
                    <span className="mt-4 font-display text-xs font-bold uppercase tracking-[0.08em] text-[#076653]">
                      Baca Artikel &rarr;
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <SubpageBannerCta
        eyebrow="REDAKSI & MEDIA"
        heading="Kolaborasi Media & Liputan Wirausaha"
        description="Tertarik berkolaborasi dalam program kerja atau liputan kegiatan HIPMI PT Universitas Telkom? Hubungi kanal resmi kami."
        ctaLabel="Hubungi Sekretariat"
        ctaHref={siteConfig.ctaCollaborationHref}
      />
    </>
  );
}
