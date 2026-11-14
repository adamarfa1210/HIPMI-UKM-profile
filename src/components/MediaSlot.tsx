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
          className={`relative h-full w-full overflow-hidden bg-[#06231D] ${className}`}
        >
          {/* Edge-to-edge full-height right-focused poster backdrop like Desktop 1 Hero */}
          <div className="h-full w-full lg:ml-auto lg:w-[40%]">
            <img
              src={imageSrc}
              alt={imageAlt}
              width={width}
              height={height}
              className="h-full w-full object-cover object-top"
              loading="lazy"
            />
          </div>
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

  if (fit === "poster") {
    return (
      <div
        className={`relative flex h-full w-full items-center justify-center overflow-hidden bg-gradient-to-br from-[#06231D] via-[#09352C] to-[#076653]/45 ${className}`}
        role="img"
        aria-label={imageAlt}
      >
        <div
          className="pointer-events-none absolute right-[-6%] top-[-18%] h-80 w-80 rounded-full bg-[#E3EF26]/10 blur-3xl"
          aria-hidden="true"
        />
        <div className="hidden flex-col items-center px-10 text-center lg:flex lg:w-full lg:pl-[48%]">
          <span className="mb-3 inline-flex items-center rounded-full border border-[#E3EF26]/40 bg-[#06231D]/85 px-3 py-1 font-display text-[11px] font-bold uppercase tracking-[0.08em] text-[#E3EF26]">
            Slot Visual Resmi
          </span>
          <p className="max-w-sm font-display text-base font-bold text-[#FFFDEE]">
            {imageAlt}
          </p>
          {slotLabel ? (
            <p className="mt-2 font-mono text-xs text-[#C7DCD2]">{slotLabel}</p>
          ) : null}
        </div>
      </div>
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
