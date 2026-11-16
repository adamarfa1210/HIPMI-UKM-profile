import type { Metadata } from "next";
import { SubpageMasthead } from "@/components/SubpageMasthead";
import {
  DirectoryFilterGrid,
  type DirectoryCardItem,
} from "@/components/DirectoryFilterGrid";
import { SubpageBannerCta } from "@/components/SubpageBannerCta";
import { getAchievements, getSiteConfig } from "@/services/api";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Prestasi Kader | UKM HIPMI PT Universitas Telkom",
  description:
    "Arsip resmi pencapaian kompetisi bisnis, pendanaan hibah, dan rekognisi kader UKM HIPMI PT Universitas Telkom.",
};

export default async function PrestasiPage() {
  const [achievements, siteConfig] = await Promise.all([
    getAchievements(),
    getSiteConfig(),
  ]);

  const cards: DirectoryCardItem[] = achievements.map((item) => ({
    id: item.id,
    category: item.category,
    title: item.title,
    description: item.description,
    metaPrimary: item.recipientLabel,
    metaSecondary: item.organizerLabel,
    imageSrc: item.imageSrc,
    imageAlt: item.imageAlt,
    pendingLabel: item.pendingLabel,
    slotStatus: item.slotStatus,
    fit: "cover",
  }));

  return (
    <>
      <SubpageMasthead
        eyebrow="01 / HALL OF ACHIEVEMENT"
        title="PRESTASI KADER"
        description="Arsip resmi pencapaian kompetisi bisnis, pendanaan hibah kewirausahaan, serta rekognisi kader UKM HIPMI PT Universitas Telkom."
        primaryCtaLabel="Laporkan Prestasi Kader"
        primaryCtaHref={siteConfig.ctaAchievementHref || "#kontak-kolaborasi"}
        secondaryCtaLabel="Jelajahi Arsip Prestasi"
        secondaryCtaHref="#direktori"
        showcaseLabel="HALL OF ACHIEVEMENT & RECOGNITION"
        bannerImageSrc="/assets/05-prestasi/prestasi-04-rekognisi.jpg"
        bannerImageAlt="Penyerahan piala penghargaan kader HIPMI PT Universitas Telkom di panggung rekognisi"
        bannerFit="right"
      />

      <DirectoryFilterGrid
        sectionEyebrow="ARSIP REKAM JEJAK NYATA"
        sectionHeading="Capaian Kompetisi, Hibah & Rekognisi"
        categories={[
          "Kompetisi Bisnis",
          "Pendanaan & Hibah",
          "Tingkat Nasional",
          "Rekognisi",
        ]}
        items={cards}
      />

      <SubpageBannerCta
        eyebrow="02 / DOKUMENTASI CAPAIAN"
        heading="Catatkan Prestasi Bisnis & Kompetisi Kader"
        description="Pengiriman bukti sertifikat atau pengumuman hibah akan diverifikasi pengurus sebelum ditampilkan pada halaman Hall of Achievement."
        ctaLabel="Kirim Bukti ke Sekretariat"
        ctaHref={siteConfig.whatsappContactUrl || "/#tentang"}
      />
    </>
  );
}
