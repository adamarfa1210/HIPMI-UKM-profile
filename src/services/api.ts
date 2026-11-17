import {
  ACHIEVEMENTS,
  BIDANG_LIST,
  BIDANG_PROGRAMS,
  COMPANY_VIDEO,
  HERO_SLIDES,
  KADER_BUSINESSES,
  PARTNER_ITEMS,
  TENTANG_PILLARS,
  TESTIMONIALS,
} from "@/services/content";
import type {
  AchievementItem,
  AnnouncementItem,
  BidangProgramPage,
  BidangSlug,
  BidangSummary,
  CompanyVideo,
  HeroSlide,
  HomeStats,
  KaderBusiness,
  NewsArticle,
  PartnerItem,
  SiteConfig,
  TentangPillarItem,
  TestimonialItem,
} from "@/types/content";

const API_BASE = (
  process.env.BACKEND_API_URL ||
  process.env.NEXT_PUBLIC_API_URL ||
  "https://hipmi-backend.vercel.app"
).replace(/\/$/, "");

export const DEFAULT_SITE_CONFIG: SiteConfig = {
  secretariatAddress:
    "Student Center Universitas Telkom, Jl. Telekomunikasi No. 1, Terusan Buahbatu, Kabupaten Bandung, Jawa Barat 40257",
  officialEmail: "sekretariat@hipmipt-telkom.org",
  officialInstagram: "@hipmipt.telkom",
  whatsappContactLabel: "Humas & Kemitraan Pengurus",
  whatsappContactUrl: "https://wa.me/6281234567890",
  copyrightText:
    "© 2026 UKM HIPMI PT UNIVERSITAS TELKOM. Seluruh hak cipta dilindungi.",
  ctaCollaborationHref: "#kontak-kolaborasi",
  ctaBusinessHref: "#kontak-kolaborasi",
  ctaAchievementHref: "#kontak-kolaborasi",
};

function resolveMediaUrl(src: string | null | undefined): string | null {
  if (!src) return null;
  if (src.startsWith("/uploads/")) {
    return `${API_BASE}${src}`;
  }
  return src;
}

async function fetchPublic<T>(path: string, _tags: string[]): Promise<T | null> {
  try {
    const res = await fetch(`${API_BASE}/api/public${path}`, {
      cache: "no-store",
      signal: AbortSignal.timeout(8000),
    });
    if (!res.ok) return null;
    const json = (await res.json()) as { success?: boolean; data?: T };
    if (!json?.success || json.data === undefined) return null;
    return json.data;
  } catch {
    return null;
  }
}

export interface HomePageData {
  heroSlides: HeroSlide[];
  companyVideo: CompanyVideo;
  pillars: TentangPillarItem[];
  stats: HomeStats;
  bidangs: BidangSummary[];
  announcements: AnnouncementItem[];
  siteConfig: SiteConfig;
}

export async function getHomeData(): Promise<HomePageData> {
  const api = await fetchPublic<any>("/home", [
    "home",
    "hero",
    "tentang",
    "settings",
    "announcements",
    "programs",
    "partners",
  ]);

  const defaultStats: HomeStats = {
    bidangCount: BIDANG_LIST.length,
    compartmentCount: BIDANG_LIST.reduce(
      (sum, b) => sum + b.compartments.length,
      0
    ),
    prokerJobdeskCount: BIDANG_LIST.reduce(
      (sum, b) =>
        sum +
        b.compartments.reduce(
          (cSum, c) => cSum + c.prokerSlides.length + c.jobdeskSlides.length,
          0
        ),
      0
    ),
    partnerCount: PARTNER_ITEMS.length,
  };

  const defaultBidangs: BidangSummary[] = BIDANG_LIST.map((b) => ({
    slug: b.slug,
    shortName: b.shortName,
    title: b.title,
    compartmentSummary: b.compartmentSummary,
  }));

  if (!api) {
    return {
      heroSlides: HERO_SLIDES,
      companyVideo: COMPANY_VIDEO,
      pillars: TENTANG_PILLARS.map((p) => ({ ...p })),
      stats: defaultStats,
      bidangs: defaultBidangs,
      announcements: [],
      siteConfig: DEFAULT_SITE_CONFIG,
    };
  }

  const heroSlides: HeroSlide[] = Array.isArray(api.heroSlides)
    ? api.heroSlides.map((s: any, i: number) => ({
        id: s.id,
        indexLabel:
          s.indexLabel ||
          `${String(i + 1).padStart(2, "0")} / ${String(api.heroSlides.length).padStart(2, "0")}`,
        title: s.title,
        subtitle: s.subtitle,
        imageSrc: resolveMediaUrl(s.imageSrc),
        imageAlt: s.imageAlt || s.title,
      }))
    : [];

  const companyVideo: CompanyVideo = api.tentang
    ? {
        eyebrow: api.tentang.eyebrow ?? "",
        title: api.tentang.title ?? "",
        description: api.tentang.description ?? "",
        secondaryDescription: api.tentang.secondaryDescription ?? null,
        posterSrc: resolveMediaUrl(api.tentang.videoPosterSrc),
        posterAlt: COMPANY_VIDEO.posterAlt,
        videoUrl: resolveMediaUrl(api.tentang.videoUrl) ?? null,
      }
    : {
        eyebrow: "",
        title: "",
        description: "",
        secondaryDescription: null,
        posterSrc: null,
        posterAlt: COMPANY_VIDEO.posterAlt,
        videoUrl: null,
      };

  const pillars: TentangPillarItem[] = Array.isArray(api.tentang?.pillars)
    ? api.tentang.pillars.map((p: any) => ({
        id: p.id,
        title: p.title,
        description: p.description,
      }))
    : [];

  return {
    heroSlides,
    companyVideo,
    pillars,
    stats: api.stats || defaultStats,
    bidangs: Array.isArray(api.bidangs) ? api.bidangs : [],
    announcements: Array.isArray(api.announcements) ? api.announcements : [],
    siteConfig: {
      ...DEFAULT_SITE_CONFIG,
      ...(api.siteSettings || {}),
    },
  };
}

export async function getPartners(): Promise<PartnerItem[]> {
  const api = await fetchPublic<any[]>("/partners", ["partners"]);
  if (!api) return PARTNER_ITEMS;

  return api.map((p) => {
    const resolvedSrc = resolveMediaUrl(p.imageSrc);
    return {
      id: p.id,
      name: p.name,
      category: p.category,
      scope: p.scope,
      period: p.period,
      status: p.status,
      imageSrc: resolvedSrc,
      imageAlt: p.imageAlt || p.name,
      slotStatus: resolvedSrc ? p.slotStatus || "ready" : "pending-asset",
    };
  });
}

export async function getKaderBusinesses(): Promise<KaderBusiness[]> {
  const api = await fetchPublic<any[]>("/kader-businesses", ["businesses"]);
  if (!api) return KADER_BUSINESSES;

  return api.map((b) => {
    const resolvedSrc = resolveMediaUrl(b.imageSrc || b.imageUrl);
    return {
      id: b.id,
      businessName: b.businessName,
      sector: b.sector,
      description: b.description,
      ownerLabel: b.ownerLabel ?? b.ownerName ?? "",
      verifiedLabel: b.verifiedLabel ?? "",
      imageSrc: resolvedSrc,
      imageAlt: b.imageAlt || b.businessName,
      pendingLabel: b.pendingLabel,
      slotStatus: resolvedSrc ? b.slotStatus || "ready" : "pending-asset",
    };
  });
}

export async function getAchievements(): Promise<AchievementItem[]> {
  const api = await fetchPublic<any[]>("/achievements", ["achievements"]);
  if (!api) return ACHIEVEMENTS;

  return api.map((a) => {
    const resolvedSrc = resolveMediaUrl(a.imageSrc || a.imageUrl);
    return {
      id: a.id,
      title: a.title,
      category: a.category,
      description: a.description,
      recipientLabel: a.recipientLabel,
      organizerLabel: a.organizerLabel,
      imageSrc: resolvedSrc,
      imageAlt: a.imageAlt || a.title,
      pendingLabel: a.pendingLabel,
      slotStatus: resolvedSrc ? a.slotStatus || "ready" : "pending-asset",
    };
  });
}

function mapBidangProgram(raw: any): BidangProgramPage {
  return {
    slug: raw.slug,
    shortName: raw.shortName,
    title: raw.title,
    eyebrow: raw.eyebrow,
    description: raw.description,
    summaryStats: raw.summaryStats,
    compartmentSummary: raw.compartmentSummary,
    compartments: (raw.compartments || []).map((comp: any) => ({
      id: comp.id,
      code: comp.code,
      name: comp.name,
      operationalPattern: comp.operationalPattern,
      patternLabel: comp.patternLabel,
      prokerSlides: (comp.prokerSlides || []).map((s: any) => ({
        id: s.id,
        kind: "proker" as const,
        title: s.title,
        description: s.description,
        imageSrc: resolveMediaUrl(s.imageSrc),
        imageAlt: s.imageAlt || s.title,
        mediaSourceLabel: s.mediaSourceLabel || "Arsip Resmi HIPMI PT Telkom",
        slotStatus: s.imageSrc ? s.slotStatus || "ready" : "pending-asset",
      })),
      jobdeskSlides: (comp.jobdeskSlides || []).map((s: any) => ({
        id: s.id,
        kind: "jobdesk" as const,
        title: s.title,
        description: s.description,
        imageSrc: resolveMediaUrl(s.imageSrc),
        imageAlt: s.imageAlt || s.title,
        mediaSourceLabel: s.mediaSourceLabel || "Arsip Resmi HIPMI PT Telkom",
        slotStatus: s.imageSrc ? s.slotStatus || "ready" : "pending-asset",
      })),
    })),
  };
}

export async function getAllProgramKerja(): Promise<BidangProgramPage[]> {
  const api = await fetchPublic<any[]>("/program-kerja", ["programs"]);
  if (!api) return BIDANG_LIST;
  return api.map(mapBidangProgram);
}

export async function getProgramKerjaByBidang(
  slug: BidangSlug
): Promise<BidangProgramPage> {
  const api = await fetchPublic<any>(`/program-kerja/${slug}`, [
    "programs",
    `program-${slug}`,
  ]);
  if (!api) return BIDANG_PROGRAMS[slug];
  return mapBidangProgram(api);
}

export async function getTestimonials(): Promise<TestimonialItem[]> {
  const api = await fetchPublic<any[]>("/testimonials", ["testimonials"]);
  if (!api) return TESTIMONIALS.filter((t) => t.verified);

  return api.map((t) => ({
    id: t.id,
    category: t.category,
    quote: t.quote,
    authorLabel: t.authorLabel,
    roleOrOrg: t.roleOrOrg,
    verified: Boolean(t.verified),
  }));
}

export async function getSiteConfig(): Promise<SiteConfig> {
  const api = await fetchPublic<Partial<SiteConfig>>("/site-config", [
    "settings",
  ]);
  if (!api) return DEFAULT_SITE_CONFIG;
  return {
    ...DEFAULT_SITE_CONFIG,
    ...api,
  };
}

function mapNewsArticle(a: any): NewsArticle {
  const resolvedSrc = resolveMediaUrl(a.imageSrc || a.imageUrl);
  return {
    id: String(a.id),
    title: String(a.title ?? ""),
    category: a.category || "Kegiatan",
    summary: String(a.summary ?? ""),
    content: String(a.content ?? ""),
    imageSrc: resolvedSrc,
    imageAlt: String(a.imageAlt || a.title || "Berita HIPMI PT Telkom"),
    slotStatus: resolvedSrc ? "ready" : "pending-asset",
    targetAudience: a.targetAudience || "PUBLIC",
    isFeatured: Boolean(a.isFeatured),
    isPublished: Boolean(a.isPublished ?? true),
    publishedAt: a.publishedAt ?? a.createdAt ?? null,
    createdBy: a.createdBy ?? null,
    authorName: a.authorName ?? null,
    createdAt: a.createdAt ?? null,
    updatedAt: a.updatedAt ?? null,
  };
}

export async function getPublicNews(category?: string): Promise<NewsArticle[]> {
  const query =
    category && category !== "Semua"
      ? `/news?category=${encodeURIComponent(category)}`
      : "/news";
  const api = await fetchPublic<any[]>(query, ["news"]);
  if (!Array.isArray(api)) return [];
  return api.map(mapNewsArticle);
}

export async function getPublicNewsById(id: string): Promise<NewsArticle | null> {
  const api = await fetchPublic<any>(`/news/${encodeURIComponent(id)}`, [
    "news",
    `news-${id}`,
  ]);
  if (!api || !api.id) return null;
  return mapNewsArticle(api);
}
