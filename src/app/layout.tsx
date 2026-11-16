import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { getHomeData } from "@/services/api";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "UKM HIPMI PT Universitas Telkom | Profil Resmi & Program Kerja",
  description:
    "Website resmi UKM Himpunan Pengusaha Muda Indonesia Perguruan Tinggi (HIPMI PT) Universitas Telkom Bandung.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const home = await getHomeData();

  return (
    <html lang="id" className={inter.variable}>
      <body className="flex min-h-screen flex-col antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-[4px] focus:bg-[#E3EF26] focus:px-4 focus:py-2 focus:font-display focus:text-xs focus:font-bold focus:text-[#06231D]"
        >
          Lewati ke konten utama
        </a>
        <Navbar bidangs={home.bidangs} announcements={home.announcements} />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer siteConfig={home.siteConfig} />
      </body>
    </html>
  );
}
