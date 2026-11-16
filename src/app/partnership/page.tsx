import type { Metadata } from "next";
import { SubpageMasthead } from "@/components/SubpageMasthead";
import {
  DirectoryFilterGrid,
  type DirectoryCardItem,
} from "@/components/DirectoryFilterGrid";
import { SubpageBannerCta } from "@/components/SubpageBannerCta";
import { getPartners, getSiteConfig } from "@/services/api";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Key Partnership | UKM HIPMI PT Universitas Telkom",
  description:
    "Direktori kemitraan strategis dan jejaring kolaborasi UKM HIPMI PT Universitas Telkom.",
};

export default async function PartnershipPage() {
  const [partners, siteConfig] = await Promise.all([
    getPartners(),
    getSiteConfig(),
  ]);

  const cards: DirectoryCardItem[] = partners.map((item) => ({
    id: item.id,
    category: item.category,
    title: item.name,
    description: item.scope,
    metaPrimary: `Status: ${item.status}`,
    metaSecondary: `Periode: ${item.period}`,
    imageSrc: item.imageSrc,
    imageAlt: item.imageAlt,
    slotStatus: item.slotStatus,
    fit: "contain",
  }));

  return (
    <>
      <SubpageMasthead
        eyebrow="01 / KEY PARTNERSHIP"
        title="KEY PARTNERSHIP"
        description="Kolaborasi strategis antara UKM HIPMI PT Universitas Telkom bersama korporasi, asosiasi BPC dan BPD HIPMI, dinas/inkubator kewirausahaan, serta media partner."
        primaryCtaLabel="Ajukan Kolaborasi Mitra"
        primaryCtaHref={siteConfig.ctaCollaborationHref || "#kontak-kolaborasi"}
        secondaryCtaLabel="Lihat Direktori Mitra"
        secondaryCtaHref="#direktori"
        showcaseLabel="STRATEGIC PARTNER SHOWCASE"
        bannerImageSrc="/assets/01-hero-home/hero-slide-05.jpg"
        bannerImageAlt="Delegasi mahasiswa HIPMI PT Universitas Telkom bersalaman dan berdiskusi dengan mitra korporasi"
        bannerFit="full"
      />

      <DirectoryFilterGrid
        sectionEyebrow="DIREKTORI KEMITRAAN"
        sectionHeading="Jejaring Lembaga Mitra"
        categories={[
          "Korporasi & BUMN",
          "Asosiasi & HIPMI",
          "Dinas & Inkubator",
          "Komunitas & Media",
          "Mitra Strategis",
        ]}
        items={cards}
      />

      <SubpageBannerCta
        eyebrow="02 / PELUANG KOLABORASI BARU"
        heading="Ingin Bermitra dengan HIPMI PT Universitas Telkom?"
        description="Terbuka untuk sponsorship program kerja, media partner, narasumber praktisi, serta kolaborasi inkubasi bisnis kader."
        ctaLabel="Hubungi Tim Partnership"
        ctaHref={siteConfig.whatsappContactUrl || "/#tentang"}
      />
    </>
  );
}
