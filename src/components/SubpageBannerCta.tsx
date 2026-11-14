import Link from "next/link";

interface SubpageBannerCtaProps {
  eyebrow: string;
  heading: string;
  description: string;
  ctaLabel: string;
  ctaHref: string;
}

export function SubpageBannerCta({
  eyebrow,
  heading,
  description,
  ctaLabel,
  ctaHref,
}: SubpageBannerCtaProps) {
  return (
    <section
      id="kontak-kolaborasi"
      className="border-t border-[#124236] bg-[#0C342C] py-14 text-[#FFFDEE]"
    >
      <div className="mx-auto flex max-w-[1280px] flex-col items-start justify-between gap-6 px-4 sm:px-6 md:flex-row md:items-center lg:px-10">
        <div className="max-w-2xl">
          <p className="font-display text-xs font-bold uppercase tracking-[0.08em] text-[#E3EF26]">
            {eyebrow}
          </p>
          <h2 className="mt-2 font-display text-2xl font-extrabold sm:text-[28px]">
            {heading}
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-[#C7DCD2]">
            {description}
          </p>
        </div>

        <Link
          href={ctaHref}
          className="inline-flex min-h-[48px] shrink-0 items-center rounded-[4px] bg-[#E3EF26] px-6 font-display text-sm font-bold text-[#06231D] transition hover:bg-[#E2FBCE]"
        >
          {ctaLabel} &rarr;
        </Link>
      </div>
    </section>
  );
}
