import type { Metadata } from "next";
import { NewsArchiveSection } from "@/components/NewsArchiveSection";
import { SubpageBannerCta } from "@/components/SubpageBannerCta";
import { SubpageMasthead } from "@/components/SubpageMasthead";
import { getPublicNews, getSiteConfig } from "@/services/api";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Berita & Publikasi | HIPMI PT Universitas Telkom",
  description:
    "Kabar terbaru, pengumuman resmi, prestasi kader, dan liputan kegiatan wirausaha HIPMI PT Universitas Telkom.",
};

export default async function BeritaPage() {
  const [articles, siteConfig] = await Promise.all([
    getPublicNews(),
    getSiteConfig(),
  ]);

  const featuredBanner =
    articles.find((a) => a.isFeatured && a.imageSrc) ??
    articles.find((a) => a.imageSrc);

  return (
    <>
      <SubpageMasthead
        eyebrow="06 / REDAKSI & PUBLIKASI"
        title="Berita HIPMI PT"
        description="Liputan kegiatan resmi, prestasi bisnis kader, pengumuman program kerja, dan warta ekosistem pengusaha muda Universitas Telkom."
        primaryCtaLabel="Jelajahi Berita"
        primaryCtaHref="#arsip-berita"
        secondaryCtaLabel="Hubungi Redaksi"
        secondaryCtaHref={siteConfig.ctaCollaborationHref}
        showcaseLabel="BERITA TERKINI • KEGIATAN • PRESTASI"
        bannerImageSrc={featuredBanner?.imageSrc ?? null}
        bannerImageAlt={
          featuredBanner?.imageAlt || "Publikasi Berita HIPMI PT Telkom"
        }
      />

      <NewsArchiveSection articles={articles} />

      <SubpageBannerCta
        eyebrow="REDAKSI & MEDIA"
        heading="Punya Kabar Kegiatan atau Liputan Kolaborasi?"
        description="Sampaikan rilis kegiatan, kerja sama media, atau publikasi usaha kader melalui kanal sekretariat resmi HIPMI PT Telkom."
        ctaLabel="Hubungi Sekretariat"
        ctaHref={siteConfig.ctaCollaborationHref}
      />
    </>
  );
}
