import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-[#124236] bg-[#06231D] text-[#FFFDEE]">
      <div className="mx-auto grid max-w-[1280px] gap-10 px-4 py-14 sm:px-6 md:grid-cols-12 lg:px-10">
        {/* Brand & Sekretariat */}
        <div className="md:col-span-5">
          <div className="flex items-center gap-3">
            <img
              src="/assets/logo-bintang.png"
              alt="Logo Bintang HIPMI"
              width={32}
              height={32}
              className="h-8 w-8 object-contain"
            />
            <img
              src="/assets/logo-hipmi-pt-telkom.png"
              alt="Logo Resmi HIPMI PT Universitas Telkom"
              width={36}
              height={36}
              className="h-9 w-9 object-contain"
            />
            <div>
              <p className="font-display text-sm font-extrabold">
                HIPMI PT UNIVERSITAS TELKOM
              </p>
              <p className="text-xs text-[#C7DCD2]">
                Unit Kegiatan Mahasiswa Kewirausahaan
              </p>
            </div>
          </div>
          <p className="mt-5 max-w-md text-sm leading-relaxed text-[#C7DCD2]">
            Sekretariat Student Center Universitas Telkom, Jl. Telekomunikasi
            No. 1, Terusan Buahbatu, Kabupaten Bandung 40257.
          </p>
        </div>

        {/* Navigasi Halaman */}
        <div className="md:col-span-3">
          <h2 className="font-display text-xs font-bold uppercase tracking-[0.08em] text-[#E3EF26]">
            NAVIGASI HALAMAN
          </h2>
          <ul className="mt-4 flex flex-col gap-1.5 text-sm text-[#C7DCD2]">
            <li>
              <Link
                href="/#tentang"
                className="inline-flex min-h-[36px] items-center hover:text-[#E3EF26]"
              >
                Tentang
              </Link>
            </li>
            <li>
              <Link
                href="/partnership"
                className="inline-flex min-h-[36px] items-center hover:text-[#E3EF26]"
              >
                Partnership
              </Link>
            </li>
            <li>
              <Link
                href="/bisnis-kader"
                className="inline-flex min-h-[36px] items-center hover:text-[#E3EF26]"
              >
                Bisnis Kader
              </Link>
            </li>
            <li>
              <Link
                href="/prestasi"
                className="inline-flex min-h-[36px] items-center hover:text-[#E3EF26]"
              >
                Prestasi
              </Link>
            </li>
            <li>
              <Link
                href="/program-kerja/okk"
                className="inline-flex min-h-[36px] items-center hover:text-[#E3EF26]"
              >
                Program Kerja (OKK, Medkominfo, Eksternal, Ekraf)
              </Link>
            </li>
            <li>
              <Link
                href="/testimoni"
                className="inline-flex min-h-[36px] items-center hover:text-[#E3EF26]"
              >
                Testimoni
              </Link>
            </li>
          </ul>
        </div>

        {/* Kontak Resmi */}
        <div className="md:col-span-4">
          <h2 className="font-display text-xs font-bold uppercase tracking-[0.08em] text-[#E3EF26]">
            KONTAK RESMI SEKRETARIAT
          </h2>
          <ul className="mt-4 flex flex-col gap-2 text-sm text-[#C7DCD2]">
            <li>Email: [sekretariat@hipmipt-telkom.org]</li>
            <li>Instagram: @hipmipt.telkom</li>
            <li>WhatsApp Humas: [Nomor Resmi Pengurus]</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-[#124236] py-5">
        <div className="mx-auto flex max-w-[1280px] flex-col items-start justify-between gap-2 px-4 text-xs text-[#C7DCD2] sm:flex-row sm:items-center sm:px-6 lg:px-10">
          <p>
            &copy; 2026 UKM HIPMI PT Universitas Telkom. Seluruh hak cipta
            dilindungi.
          </p>
          <p>Didesain selaras Design System v1.2 &amp; Antislop Standard.</p>
        </div>
      </div>
    </footer>
  );
}
