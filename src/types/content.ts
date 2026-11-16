export type SlotStatus = "ready" | "pending-asset";

export interface HeroSlide {
  id: string;
  indexLabel: string;
  title: string;
  subtitle: string;
  imageSrc: string;
  imageAlt: string;
}

export interface CompanyVideo {
  eyebrow: string;
  title: string;
  description: string;
  secondaryDescription?: string | null;
  posterSrc: string;
  posterAlt: string;
  videoUrl: string | null;
}

export interface TentangPillarItem {
  id: string;
  title: string;
  description: string;
}

export interface HomeStats {
  bidangCount: number;
  compartmentCount: number;
  prokerJobdeskCount: number;
  partnerCount: number;
}

export interface BidangSummary {
  id?: string;
  slug: BidangSlug;
  shortName: string;
  title: string;
  compartmentSummary: string;
}

export interface AnnouncementItem {
  id: string;
  title: string;
  content: string;
  startDate?: string;
  endDate?: string;
}

export interface SiteConfig {
  secretariatAddress: string;
  officialEmail: string;
  officialInstagram: string;
  whatsappContactLabel: string;
  whatsappContactUrl?: string;
  copyrightText: string;
  ctaCollaborationHref: string;
  ctaBusinessHref: string;
  ctaAchievementHref: string;
  googleDocsTemplateUrl?: string | null;
}

export interface PartnerItem {
  id: string;
  name: string;
  category:
    | "Korporasi & BUMN"
    | "Asosiasi & HIPMI"
    | "Dinas & Inkubator"
    | "Komunitas & Media"
    | "Mitra Strategis";
  scope: string;
  period: string;
  status: string;
  imageSrc: string;
  imageAlt: string;
  slotStatus: SlotStatus;
}

export interface KaderBusiness {
  id: string;
  businessName: string;
  sector:
    | "Teknologi & Jasa"
    | "Kuliner / F&B"
    | "Kreatif & Media"
    | "Fesyen & Ritel";
  description: string;
  ownerLabel: string;
  verifiedLabel: string;
  imageSrc: string | null;
  imageAlt: string;
  pendingLabel?: string;
  slotStatus: SlotStatus;
}

export interface AchievementItem {
  id: string;
  title: string;
  category:
    | "Kompetisi Bisnis"
    | "Pendanaan & Hibah"
    | "Tingkat Nasional"
    | "Rekognisi";
  description: string;
  recipientLabel: string;
  organizerLabel: string;
  imageSrc: string | null;
  imageAlt: string;
  pendingLabel?: string;
  slotStatus: SlotStatus;
}

export interface ProgramSlide {
  id: string;
  kind: "proker" | "jobdesk";
  title: string;
  description: string;
  imageSrc: string | null;
  imageAlt: string;
  mediaSourceLabel: string;
  slotStatus: SlotStatus;
}

export interface CompartmentStage {
  id: string;
  code: string;
  name: string;
  operationalPattern: "proker-only" | "jobdesk-only" | "proker-jobdesk";
  patternLabel: string;
  prokerSlides: ProgramSlide[];
  jobdeskSlides: ProgramSlide[];
}

export type BidangSlug = "okk" | "medkominfo" | "eksternal" | "ekraf";

export interface BidangProgramPage {
  slug: BidangSlug;
  shortName: string;
  title: string;
  eyebrow: string;
  description: string;
  summaryStats: string;
  compartmentSummary: string;
  compartments: CompartmentStage[];
}

export interface TestimonialItem {
  id: string;
  category: "Kader & Alumni" | "Mitra Kolaborasi";
  quote: string;
  authorLabel: string;
  roleOrOrg: string;
  verified: boolean;
}
