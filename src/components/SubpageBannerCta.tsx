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
      className="border-t border-[#ECEEEF] bg-[#F7F7F8] py-14 text-[#313238]"
    >
      <div className="mx-auto flex max-w-[1200px] flex-col items-start justify-between gap-6 px-4 sm:px-6 md:flex-row md:items-center lg:px-10">
        <div className="max-w-2xl">
          <p className="font-display text-[11px] font-bold uppercase tracking-[0.14em] text-[#076653]">
            {eyebrow}
          </p>
          <h2 className="mt-2 font-display text-2xl font-extrabold tracking-[-0.02em] text-[#313238] sm:text-[28px]">
            {heading}
          </h2>
          <p className="mt-2 text-sm leading-[1.7] text-[#5E636B]">
            {description}
          </p>
        </div>

        <Link
          href={ctaHref}
          className="inline-flex min-h-[46px] shrink-0 items-center rounded-[2px] bg-[#06231D] px-6 font-display text-xs font-bold uppercase tracking-[0.06em] text-[#E3EF26] transition hover:bg-[#076653]"
        >
          {ctaLabel} &rarr;
        </Link>
      </div>
    </section>
  );
}
