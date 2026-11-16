import type { Metadata } from "next";
import { SubpageMasthead } from "@/components/SubpageMasthead";
import {
  DirectoryFilterGrid,
  type DirectoryCardItem,
} from "@/components/DirectoryFilterGrid";
import { SubpageBannerCta } from "@/components/SubpageBannerCta";
import { getKaderBusinesses, getSiteConfig } from "@/services/api";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Bisnis Kader | UKM HIPMI PT Universitas Telkom",
  description:
    "Etalase rintisan dan usaha aktif kader UKM HIPMI PT Universitas Telkom Bandung.",
};

export default async function BisnisKaderPage() {
  const [businesses, siteConfig] = await Promise.all([
    getKaderBusinesses(),
    getSiteConfig(),
  ]);

  const cards: DirectoryCardItem[] = businesses.map((item) => ({
    id: item.id,
    category: item.sector,
    title: item.businessName,
    description: item.description,
    metaPrimary: item.ownerLabel,
    metaSecondary: item.verifiedLabel,
    imageSrc: item.imageSrc,
    imageAlt: item.imageAlt,
    pendingLabel: item.pendingLabel,
    slotStatus: item.slotStatus,
    fit: "cover",
  }));

  return (
    <>
      <SubpageMasthead
        eyebrow="01 / KADER ENTREPRENEUR SHOWCASE"
        title="BISNIS KADER"
        description="Etalase usaha rintisan dan bisnis aktif milik kader UKM HIPMI PT Universitas Telkom lintas sektor industri yang dikurasi langsung melalui sistem CMS."
        primaryCtaLabel="Daftarkan Usaha Kader"
        primaryCtaHref={siteConfig.ctaBusinessHref || "#kontak-kolaborasi"}
        secondaryCtaLabel="Lihat Direktori Lengkap"
        secondaryCtaHref="#direktori"
        showcaseLabel="KADER ENTREPRENEUR SHOWCASE"
        bannerImageSrc="/assets/01-hero-home/hero-slide-04.jpg"
        bannerImageAlt="Showcase produk inovasi dan rintisan bisnis kreatif kader HIPMI PT Universitas Telkom"
        bannerFit="full"
      />

      <DirectoryFilterGrid
        sectionEyebrow="ETALASE USAHA MAHASISWA"
        sectionHeading="Direktori Usaha Kader Telkom"
        categories={[
          "Teknologi & Jasa",
          "Kuliner / F&B",
          "Kreatif & Media",
          "Fesyen & Ritel",
        ]}
        items={cards}
      />

      <SubpageBannerCta
        eyebrow="02 / PENDAFTARAN ETALASE USAHA"
        heading="Kader HIPMI PT Telkom Memiliki Usaha Aktif?"
        description="Ajukan profil usaha untuk diverifikasi pengurus dan dipublikasikan di etalase resmi Direktori Bisnis Kader Universitas Telkom."
        ctaLabel="Ajukan Kurasi Usaha"
        ctaHref={siteConfig.whatsappContactUrl || "/#tentang"}
      />
    </>
  );
}
