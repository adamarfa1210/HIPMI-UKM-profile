import type { SlotStatus } from "@/types/content";

interface MediaSlotProps {
  imageSrc: string | null;
  imageAlt: string;
  slotStatus: SlotStatus;
  slotLabel?: string;
  fit?: "cover" | "contain" | "poster";
  className?: string;
  width?: number;
  height?: number;
}

/**
 * Renders either a real verified image asset or an honest labeled stage placeholder
 * when the image generator slot is still pending quota reset (`R-17`/`R-36`).
 */
export function MediaSlot({
  imageSrc,
  imageAlt,
  slotStatus,
  slotLabel,
  fit = "cover",
  className = "",
  width = 800,
  height = 800,
}: MediaSlotProps) {
  if (slotStatus === "ready" && imageSrc) {
    if (fit === "poster") {
      return (
        <div
          className={`relative flex h-full w-full items-center justify-center overflow-hidden bg-gradient-to-br from-[#09352C] to-[#06231D] p-4 ${className}`}
        >
          <img
            src={imageSrc}
            alt={imageAlt}
            width={width}
            height={height}
            className="h-full max-h-full w-full rounded-[6px] object-contain shadow-2xl"
            loading="lazy"
          />
        </div>
      );
    }

    return (
      <img
        src={imageSrc}
        alt={imageAlt}
        width={width}
        height={height}
        className={`h-full w-full ${
          fit === "contain" ? "object-contain p-4 bg-[#F6FAF9]" : "object-cover"
        } ${className}`}
        loading="lazy"
      />
    );
  }

  return (
    <div
      className={`relative flex h-full w-full flex-col items-center justify-center overflow-hidden border border-dashed border-[#1E593B] bg-gradient-to-br from-[#09352C] via-[#0C342C] to-[#076653]/40 p-6 text-center ${className}`}
      role="img"
      aria-label={imageAlt}
    >
      <div
        className="pointer-events-none absolute -right-10 -top-10 h-44 w-44 rounded-full bg-[#E3EF26]/10 blur-2xl"
        aria-hidden="true"
      />
      <span className="mb-3 inline-flex items-center rounded-full border border-[#E3EF26]/40 bg-[#06231D] px-3 py-1 font-display text-[11px] font-bold uppercase tracking-[0.08em] text-[#E3EF26]">
        Slot Visual Resmi
      </span>
      <p className="max-w-xs font-display text-sm font-bold text-[#FFFDEE]">
        {imageAlt}
      </p>
      {slotLabel ? (
        <p className="mt-2 font-mono text-[11px] text-[#C7DCD2]">{slotLabel}</p>
      ) : null}
    </div>
  );
}
