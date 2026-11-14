import Link from "next/link";

interface CarouselHeaderProps {
  eyebrow: string;
  title: string;
  onPrev: () => void;
  onNext: () => void;
  prevLabel: string;
  nextLabel: string;
  moreHref: string;
  moreLabel?: string;
}

/** Shared Kideco-inspired editorial carousel header with prev/next buttons and view-all link. */
export function CarouselHeader({
  eyebrow,
  title,
  onPrev,
  onNext,
  prevLabel,
  nextLabel,
  moreHref,
  moreLabel = "Tampilkan lebih banyak",
}: CarouselHeaderProps) {
  return (
    <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
      <div className="max-w-lg">
        <p className="font-display text-[11px] font-bold uppercase tracking-[0.14em] text-[#076653]">
          {eyebrow}
        </p>
        <h2 className="mt-2 font-display text-[28px] font-extrabold leading-[1.18] tracking-[-0.02em] text-[#313238] sm:text-[36px]">
          {title}
        </h2>
      </div>

      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={onPrev}
            aria-label={prevLabel}
            className="inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-[#D1D5DB] bg-white text-[#5E636B] transition hover:border-[#06231D] hover:text-[#06231D]"
          >
            &larr;
          </button>
          <button
            type="button"
            onClick={onNext}
            aria-label={nextLabel}
            className="inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-[4px] bg-[#06231D] text-[#E3EF26] transition hover:bg-[#076653]"
          >
            &rarr;
          </button>
        </div>
        <Link
          href={moreHref}
          className="text-xs font-semibold text-[#5E636B] transition hover:text-[#076653] hover:underline"
        >
          {moreLabel}
        </Link>
      </div>
    </div>
  );
}
