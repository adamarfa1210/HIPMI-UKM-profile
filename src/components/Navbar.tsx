"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { BIDANG_LIST } from "@/services/content";
import type { AnnouncementItem, BidangSummary } from "@/types/content";

const NAV_LINKS = [
  { href: "/#tentang", label: "Tentang" },
  { href: "/partnership", label: "Partnership" },
  { href: "/bisnis-kader", label: "Bisnis Kader" },
  { href: "/prestasi", label: "Prestasi" },
] as const;

interface NavbarProps {
  bidangs?: BidangSummary[];
  announcements?: AnnouncementItem[];
}

export function Navbar({ bidangs, announcements = [] }: NavbarProps) {
  const bidangItems: BidangSummary[] =
    bidangs !== undefined
      ? bidangs
      : BIDANG_LIST.map((b) => ({
          slug: b.slug,
          shortName: b.shortName,
          title: b.title,
          compartmentSummary: b.compartmentSummary,
        }));
  const pathname = usePathname();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileProkerOpen, setMobileProkerOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setDropdownOpen(false);
    setMobileOpen(false);
    setMobileProkerOpen(pathname.startsWith("/program-kerja"));
  }, [pathname]);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setDropdownOpen(false);
        setMobileOpen(false);
      }
    };
    const onClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setDropdownOpen(false);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("mousedown", onClickOutside);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("mousedown", onClickOutside);
    };
  }, []);

  const isProkerActive = pathname.startsWith("/program-kerja");

  return (
    <header className="sticky top-0 z-40 border-b border-[#124236] bg-[#06231D]/95 backdrop-blur-md">
      {announcements.length > 0 ? (
        <div className="border-b border-[#124236] bg-[#041612] px-4 py-2 text-xs text-[#FFFDEE]">
          <div className="mx-auto flex max-w-[1280px] items-center justify-between gap-3 sm:px-2 lg:px-6">
            <div className="flex min-w-0 items-center gap-2.5">
              <span className="shrink-0 rounded-[4px] bg-[#E3EF26] px-2 py-0.5 font-display text-[10px] font-bold uppercase tracking-[0.06em] text-[#06231D]">
                INFO TERKINI
              </span>
              <p className="truncate font-medium text-[#FFFDEE]">
                {announcements.map((ann, idx) => (
                  <span key={ann.id}>
                    {idx > 0 ? "  |  " : null}
                    <strong className="font-bold text-[#E3EF26]">{ann.title}</strong>
                    {ann.content ? ` — ${ann.content}` : ""}
                  </span>
                ))}
              </p>
            </div>
          </div>
        </div>
      ) : null}
      <div className="mx-auto flex h-[84px] max-w-[1280px] items-center justify-between px-4 sm:px-6 lg:px-10">
        {/* Dual Brand Logos */}
        <Link
          href="/"
          className="inline-flex min-h-[44px] items-center gap-3 rounded-[4px] py-1 pr-2"
          aria-label="Beranda UKM HIPMI PT Universitas Telkom"
        >
          <div className="flex items-center gap-2">
            <img
              src="/assets/logo-bintang.png"
              alt="Logo Bintang HIPMI"
              width={36}
              height={36}
              className="h-9 w-9 object-contain"
            />
            <img
              src="/assets/logo-hipmi-pt-telkom.png"
              alt="Logo Resmi HIPMI PT Universitas Telkom"
              width={40}
              height={40}
              className="h-10 w-10 object-contain"
            />
          </div>
          <div className="leading-tight">
            <span className="block font-display text-sm font-extrabold tracking-tight text-[#FFFDEE]">
              HIPMI PT TELKOM
            </span>
            <span className="block text-[10px] font-medium tracking-[0.08em] text-[#C7DCD2]">
              UNIVERSITAS TELKOM
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav aria-label="Navigasi utama" className="hidden items-center gap-2 lg:flex">
          {NAV_LINKS.map((item) => {
            const active = item.href !== "/#tentang" && pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`inline-flex min-h-[44px] items-center rounded-[4px] px-3 text-sm font-medium transition ${
                  active
                    ? "text-[#E3EF26]"
                    : "text-[#FFFDEE] hover:text-[#E3EF26]"
                }`}
              >
                {item.label}
              </Link>
            );
          })}

          {/* Program Kerja Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              type="button"
              onClick={() => setDropdownOpen((v) => !v)}
              aria-expanded={dropdownOpen}
              aria-haspopup="true"
              className={`inline-flex min-h-[44px] cursor-pointer items-center gap-1.5 rounded-[4px] px-3 text-sm font-medium transition ${
                isProkerActive || dropdownOpen
                  ? "text-[#E3EF26]"
                  : "text-[#FFFDEE] hover:text-[#E3EF26]"
              }`}
            >
              <span>Program Kerja</span>
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                aria-hidden="true"
                className={`transition-transform ${
                  dropdownOpen ? "rotate-180" : ""
                }`}
              >
                <path
                  d="M2.5 4.5L6 8L9.5 4.5"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            {dropdownOpen ? (
              <div
                className="absolute right-0 top-[calc(100%+10px)] z-50 w-[316px] rounded-[8px] border border-[#124236] bg-[#09352C] p-3 shadow-2xl"
                role="menu"
                aria-label="Pilihan Bidang Program Kerja"
              >
                <p className="px-3 pb-2 font-display text-[10px] font-bold uppercase tracking-[0.08em] text-[#E3EF26]">
                  PILIH BIDANG PROGRAM KERJA
                </p>
                <div className="flex flex-col gap-1">
                  {bidangItems.length === 0 ? (
                    <p className="px-3 py-2 text-xs text-[#C7DCD2]">
                      Belum ada bidang yang dipublikasikan.
                    </p>
                  ) : (
                    bidangItems.map((bidang) => {
                      const current = pathname === `/program-kerja/${bidang.slug}`;
                      return (
                        <Link
                          key={bidang.slug}
                          href={`/program-kerja/${bidang.slug}`}
                          role="menuitem"
                          className={`flex min-h-[48px] flex-col justify-center rounded-[6px] px-3 py-2 transition ${
                            current
                              ? "border border-[#E3EF26]/50 bg-[#06231D]"
                              : "hover:bg-[#06231D]/70"
                          }`}
                        >
                          <span className="font-display text-[13px] font-bold text-[#FFFDEE]">
                            Bidang {bidang.shortName}
                            {current ? "  →" : ""}
                          </span>
                          <span className="text-[11px] text-[#C7DCD2]">
                            {bidang.compartmentSummary}
                          </span>
                        </Link>
                      );
                    })
                  )}
                </div>
              </div>
            ) : null}
          </div>

          <Link
            href="/testimoni"
            className={`inline-flex min-h-[44px] items-center rounded-[4px] px-3 text-sm font-medium transition ${
              pathname === "/testimoni"
                ? "text-[#E3EF26]"
                : "text-[#FFFDEE] hover:text-[#E3EF26]"
            }`}
          >
            Testimoni
          </Link>
        </nav>

        {/* Mobile Hamburger */}
        <button
          type="button"
          onClick={() => setMobileOpen((v) => !v)}
          aria-expanded={mobileOpen}
          aria-controls="mobile-nav-drawer"
          aria-label={mobileOpen ? "Tutup menu navigasi" : "Buka menu navigasi"}
          className="inline-flex min-h-[44px] min-w-[44px] cursor-pointer items-center justify-center rounded-[4px] border border-[#124236] bg-[#0C342C] text-[#FFFDEE] lg:hidden"
        >
          {mobileOpen ? (
            <span className="text-base font-bold">✕</span>
          ) : (
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <path
                d="M3 5H17M3 10H17M3 15H17"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen ? (
        <div
          id="mobile-nav-drawer"
          className="border-t border-[#124236] bg-[#06231D] px-4 pb-6 pt-3 lg:hidden"
        >
          <nav aria-label="Navigasi seluler" className="flex flex-col gap-1">
            {NAV_LINKS.map((item) => {
              const active = item.href !== "/#tentang" && pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  aria-current={active ? "page" : undefined}
                  className={`flex min-h-[44px] items-center rounded-[4px] px-3 text-sm font-medium transition hover:bg-[#0C342C] hover:text-[#E3EF26] ${
                    active ? "bg-[#0C342C] text-[#E3EF26]" : "text-[#FFFDEE]"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}

            <div>
              <button
                type="button"
                onClick={() => setMobileProkerOpen((v) => !v)}
                aria-expanded={mobileProkerOpen}
                className={`flex min-h-[44px] w-full cursor-pointer items-center justify-between rounded-[4px] px-3 text-sm font-medium transition hover:bg-[#0C342C] hover:text-[#E3EF26] ${
                  isProkerActive ? "bg-[#0C342C] text-[#E3EF26]" : "text-[#FFFDEE]"
                }`}
              >
                <span>Program Kerja</span>
                <span>{mobileProkerOpen ? "▴" : "▾"}</span>
              </button>
              {mobileProkerOpen ? (
                <div className="ml-3 mt-1 flex flex-col gap-1 border-l border-[#124236] pl-3">
                  {bidangItems.length === 0 ? (
                    <p className="px-3 py-2 text-xs text-[#C7DCD2]">
                      Belum ada bidang yang dipublikasikan.
                    </p>
                  ) : (
                    bidangItems.map((bidang) => {
                      const current = pathname === `/program-kerja/${bidang.slug}`;
                      return (
                        <Link
                          key={bidang.slug}
                          href={`/program-kerja/${bidang.slug}`}
                          onClick={() => setMobileOpen(false)}
                          aria-current={current ? "page" : undefined}
                          className={`flex min-h-[44px] flex-col justify-center rounded-[4px] px-3 py-1.5 transition ${
                            current
                              ? "border border-[#E3EF26]/50 bg-[#09352C]"
                              : "hover:bg-[#09352C]"
                          }`}
                        >
                          <span
                            className={`font-display text-xs font-bold ${
                              current ? "text-[#E3EF26]" : "text-[#FFFDEE]"
                            }`}
                          >
                            Bidang {bidang.shortName}
                            {current ? "  →" : ""}
                          </span>
                          <span className="text-[11px] text-[#C7DCD2]">
                            {bidang.compartmentSummary}
                          </span>
                        </Link>
                      );
                    })
                  )}
                </div>
              ) : null}
            </div>

            <Link
              href="/testimoni"
              onClick={() => setMobileOpen(false)}
              aria-current={pathname === "/testimoni" ? "page" : undefined}
              className={`flex min-h-[44px] items-center rounded-[4px] px-3 text-sm font-medium transition hover:bg-[#0C342C] hover:text-[#E3EF26] ${
                pathname === "/testimoni"
                  ? "bg-[#0C342C] text-[#E3EF26]"
                  : "text-[#FFFDEE]"
              }`}
            >
              Testimoni
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
