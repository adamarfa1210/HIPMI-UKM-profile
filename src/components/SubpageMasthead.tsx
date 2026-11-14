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
}: SubpageMastheadProps) {
  return (
    <section className="border-b border-[#124236] bg-gradient-to-br from-[#06231D] to-[#0C342C] py-14 text-[#FFFDEE] md:py-16">
      <div className="mx-auto grid max-w-[1280px] items-center gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:px-10">
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
                className="inline-flex min-h-[48px] items-center rounded-[4px] border border-[#1E593B] bg-[#09352C] px-6 font-display text-sm font-bold text-[#FFFDEE] transition hover:border-[#E3EF26] hover:text-[#E3EF26]"
              >
                {secondaryCtaLabel}
              </Link>
            ) : null}
          </div>
        </div>

        {/* Right Official Emblem Stage */}
        <div className="lg:col-span-5">
          <div className="flex flex-col items-center justify-center rounded-[8px] border border-[#1E593B] bg-[#09352C] p-8 text-center shadow-xl">
            <img
              src="/assets/logo-hipmi-pt-telkom.png"
              alt="Logo Resmi UKM HIPMI PT Universitas Telkom"
              width={180}
              height={180}
              className="h-40 w-40 object-contain"
            />
            <span className="mt-5 inline-flex items-center rounded-full border border-[#E3EF26]/40 bg-[#06231D] px-4 py-1.5 font-display text-[11px] font-bold uppercase tracking-[0.08em] text-[#E3EF26]">
              {showcaseLabel}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
