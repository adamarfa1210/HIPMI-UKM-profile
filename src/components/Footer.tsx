import Link from "next/link";
import { DEFAULT_SITE_CONFIG } from "@/services/api";
import type { SiteConfig } from "@/types/content";

const FOOTER_NAV = [
  { href: "/#tentang", label: "Tentang" },
  { href: "/partnership", label: "Partnership" },
  { href: "/bisnis-kader", label: "Bisnis Kader" },
  { href: "/prestasi", label: "Prestasi" },
  { href: "/program-kerja/okk", label: "Program Kerja" },
  { href: "/testimoni", label: "Testimoni" },
] as const;

export function Footer({
  siteConfig = DEFAULT_SITE_CONFIG,
}: {
  siteConfig?: SiteConfig;
}) {
  return (
    <footer className="border-t border-[#E5E7EB] bg-[#F8F8F8] text-[#313238]">
      <div className="mx-auto max-w-[1200px] px-4 py-14 sm:px-6 lg:px-10">
        {/* Top Row: Brand Mark + Horizontal Navigation */}
        <div className="flex flex-col justify-between gap-6 border-b border-[#E5E7EB] pb-10 lg:flex-row lg:items-center">
          <div className="flex items-center gap-3">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-[4px] bg-[#06231D] p-1.5">
              <img
                src="/assets/logo-bintang.png"
                alt="Logo Bintang HIPMI"
                width={28}
                height={28}
                className="h-full w-full object-contain"
              />
            </span>
            <img
              src="/assets/logo-hipmi-pt-telkom.png"
              alt="Logo Resmi HIPMI PT Universitas Telkom"
              width={36}
              height={36}
              className="h-9 w-9 object-contain"
            />
            <div>
              <p className="font-display text-sm font-extrabold text-[#06231D]">
                HIPMI PT TELKOM
              </p>
              <p className="text-[11px] font-medium text-[#5E636B]">
                Universitas Telkom Bandung
              </p>
            </div>
          </div>

          <nav aria-label="Navigasi footer" className="flex flex-wrap gap-x-6 gap-y-2">
            {FOOTER_NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-xs font-bold text-[#313238] transition hover:text-[#076653]"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Bottom Details Grid (3 Columns Matching Kideco) */}
        <div className="mt-10 grid gap-8 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="max-w-sm text-xs leading-[1.8] text-[#5E636B]">
              UKM Himpunan Pengusaha Muda Indonesia Perguruan Tinggi (HIPMI PT)
              Universitas Telkom berfokus pada inkubasi bisnis kader, kolaborasi
              strategis dunia industri, dan kepemimpinan wirausaha mahasiswa.
            </p>
          </div>

          <div className="md:col-span-4">
            <h2 className="font-display text-xs font-bold text-[#313238]">
              Sekretariat Kampus
            </h2>
            <p className="mt-3 text-xs leading-[1.8] text-[#5E636B]">
              {siteConfig.secretariatAddress}
            </p>
          </div>

          <div className="md:col-span-3">
            <h2 className="font-display text-xs font-bold text-[#313238]">
              Kontak Resmi
            </h2>
            <ul className="mt-3 space-y-2 text-xs text-[#5E636B]">
              <li>{siteConfig.officialEmail}</li>
              <li>Instagram: {siteConfig.officialInstagram}</li>
              <li>
                {siteConfig.whatsappContactUrl ? (
                  <a
                    href={siteConfig.whatsappContactUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="transition hover:text-[#076653] hover:underline"
                  >
                    {siteConfig.whatsappContactLabel}
                  </a>
                ) : (
                  siteConfig.whatsappContactLabel
                )}
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Strip with HIPMI Accent Marker (Inspired by Kideco) */}
      <div className="relative bg-[#06231D] text-[#C7DCD2]">
        <span
          aria-hidden="true"
          className="absolute inset-y-0 left-0 w-2 bg-[#E3EF26]"
        />
        <div className="mx-auto flex max-w-[1200px] flex-col items-start justify-between gap-2 px-6 py-4 text-[11px] sm:flex-row sm:items-center lg:px-10">
          <p>{siteConfig.copyrightText}</p>
          <p className="text-[#C7DCD2]/80">
            Ekosistem Wirausaha Mahasiswa Universitas Telkom
          </p>
        </div>
      </div>
    </footer>
  );
}
