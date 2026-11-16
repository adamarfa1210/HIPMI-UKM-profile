"use client";

import { useEffect } from "react";
import { COMPANY_VIDEO } from "@/services/content";

interface VideoModalProps {
  open: boolean;
  onClose: () => void;
  posterSrc?: string;
  posterAlt?: string;
  videoUrl?: string | null;
}

export function VideoModal({
  open,
  onClose,
  posterSrc = COMPANY_VIDEO.posterSrc,
  posterAlt = COMPANY_VIDEO.posterAlt,
  videoUrl = COMPANY_VIDEO.videoUrl,
}: VideoModalProps) {
  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-xs"
      role="dialog"
      aria-modal="true"
      aria-labelledby="company-video-modal-title"
      onClick={onClose}
    >
      <div
        className="w-full max-w-4xl overflow-hidden rounded-[8px] border border-[#1E593B] bg-[#06231D] shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between border-b border-[#124236] px-6 py-4">
          <h2
            id="company-video-modal-title"
            className="font-display text-base font-bold text-[#FFFDEE] sm:text-lg"
          >
            Video Company Profile UKM HIPMI PT Universitas Telkom
          </h2>
          <button
            type="button"
            onClick={onClose}
            aria-label="Tutup modal video"
            className="inline-flex min-h-[44px] min-w-[44px] cursor-pointer items-center justify-center rounded-[4px] border border-[#124236] bg-[#0C342C] text-sm font-bold text-[#FFFDEE] transition hover:border-[#E3EF26] hover:text-[#E3EF26]"
          >
            ✕
          </button>
        </div>

        <div className="aspect-video w-full bg-[#041612]">
          {videoUrl ? (
            <video
              controls
              preload="none"
              poster={posterSrc}
              className="h-full w-full object-cover"
            >
              <source src={videoUrl} type="video/mp4" />
              Browser Anda tidak mendukung pemutar video HTML5.
            </video>
          ) : (
            <div className="relative flex h-full w-full items-center justify-center">
              <img
                src={posterSrc}
                alt={posterAlt}
                width={1280}
                height={720}
                className="h-full w-full object-cover opacity-55"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#06231D]/70 p-6 text-center">
                <span className="mb-3 rounded-full border border-[#E3EF26]/60 bg-[#06231D] px-4 py-1.5 font-display text-xs font-bold uppercase tracking-[0.08em] text-[#E3EF26]">
                  Siap Integrasi Storage Fase 2 (preload=&quot;none&quot;)
                </span>
                <p className="max-w-lg text-sm leading-relaxed text-[#FFFDEE] sm:text-base">
                  Poster resmi video company profile sudah terpasang. File video
                  MP4 akan terhubung langsung ke Object Storage backend tanpa
                  membebani bandwidth initial load halaman.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
