import Link from "next/link";

interface SubpageMastheadProps {
  eyebrow: string;
  title: string;
  description: string;
  primaryCtaLabel: string;
  primaryCtaHref: string;
  secondaryCtaLabel?: string;
  secondaryCtaHref?: string;
  showcaseLabel: string;
  bannerImageSrc?: string | null;
  bannerImageAlt?: string;
  bannerFit?: "full" | "right";
}

export function SubpageMasthead({
  eyebrow,
  title,
  description,
  primaryCtaLabel,
  primaryCtaHref,
  secondaryCtaLabel,
  secondaryCtaHref,
  showcaseLabel,
  bannerImageSrc = null,
  bannerImageAlt = "Visual Hero HIPMI PT Universitas Telkom",
  bannerFit = "full",
}: SubpageMastheadProps) {
  return (
    <section className="relative flex min-h-[520px] w-full items-center overflow-hidden bg-[#06231D] py-14 text-[#FFFDEE] lg:min-h-[560px]">
      {/* Full-Bleed Visual Backdrop Stage (like Program Kerja & Hero Desktop 1) */}
      <div
        aria-hidden={!bannerImageSrc}
        className="pointer-events-none absolute inset-0 overflow-hidden bg-[#06231D]"
      >
        {bannerImageSrc ? (
          <div
            className={
              bannerFit === "right"
                ? "h-full w-full lg:ml-auto lg:w-[48%]"
                : "h-full w-full"
            }
          >
            <img
              src={bannerImageSrc}
              alt={bannerImageAlt}
              width={1440}
              height={560}
              className={`h-full w-full object-cover opacity-20 ${
                bannerFit === "right" ? "object-top" : "object-center"
              }`}
            />
          </div>
        ) : (
          <div className="pointer-events-none absolute right-[-6%] top-[-18%] h-80 w-80 rounded-full bg-[#E3EF26]/10 blur-3xl" />
        )}
      </div>

      {/* Asymmetric Left-to-Right Gradient Scrim Overlay (WCAG AA R-25) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-[1] bg-[linear-gradient(180deg,rgba(6,35,29,0.65)_0%,rgba(6,35,29,0.35)_55%,rgba(6,35,29,0.72)_100%)] lg:bg-[linear-gradient(90deg,#06231D_0%,#06231D_48%,rgba(6,35,29,0.9)_56%,rgba(6,35,29,0.35)_72%,transparent_100%)]"
      />

      <div className="relative z-10 mx-auto grid w-full max-w-[1280px] items-center gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:px-10">
        <div className="lg:col-span-7">
          <div className="mb-4 flex items-center gap-3">
            <span className="h-[2px] w-8 bg-[#E3EF26]" aria-hidden="true" />
            <p className="font-display text-xs font-bold uppercase tracking-[0.08em] text-[#E3EF26]">
              {eyebrow}
            </p>
          </div>
          <h1 className="font-display text-[36px] font-extrabold leading-[1.08] tracking-[-0.02em] sm:text-[48px] lg:text-[54px]">
            {title}
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-[1.65] text-[#C7DCD2]">
            {description}
          </p>
          <div className="mt-7 flex flex-wrap items-center gap-3">
            <Link
              href={primaryCtaHref}
              className="inline-flex min-h-[48px] items-center rounded-[4px] bg-[#E3EF26] px-6 font-display text-sm font-bold text-[#06231D] transition hover:bg-[#E2FBCE]"
            >
              {primaryCtaLabel}
            </Link>
            {secondaryCtaLabel && secondaryCtaHref ? (
              <Link
                href={secondaryCtaHref}
                className="inline-flex min-h-[48px] items-center rounded-[4px] border border-[#1E593B] bg-[#06231D]/85 px-6 font-display text-sm font-bold text-[#FFFDEE] backdrop-blur-xs transition hover:border-[#E3EF26] hover:text-[#E3EF26]"
              >
                {secondaryCtaLabel}
              </Link>
            ) : null}
          </div>
        </div>

        {/* Right Floating Official Emblem Over Backdrop (No Box, Strong Drop Shadow) */}
        <div className="flex flex-col items-center justify-center text-center lg:col-span-5">
          <img
            src="/assets/logo-hipmi-pt-telkom.png"
            alt="Logo Resmi UKM HIPMI PT Universitas Telkom"
            width={180}
            height={180}
            className="h-36 w-36 rounded-full object-contain drop-shadow-[0_16px_32px_rgba(0,0,0,0.85)] drop-shadow-[0_4px_12px_rgba(6,35,29,0.95)] sm:h-44 sm:w-44"
          />
          <span className="mt-4 inline-flex items-center rounded-full border border-[#E3EF26]/55 bg-[#06231D]/80 px-4 py-1.5 font-display text-[11px] font-bold uppercase tracking-[0.08em] text-[#E3EF26] shadow-[0_8px_24px_rgba(0,0,0,0.65)] backdrop-blur-xs">
            {showcaseLabel}
          </span>
        </div>
      </div>
    </section>
  );
}
