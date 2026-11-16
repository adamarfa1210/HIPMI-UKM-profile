import type { Metadata } from "next";
import { TestimonialFilterGrid } from "@/components/TestimonialFilterGrid";
import { getTestimonials } from "@/services/api";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Testimoni | UKM HIPMI PT Universitas Telkom",
  description:
    "Kutipan dan tanggapan resmi kader aktif, alumni pengusaha, serta mitra kolaborasi UKM HIPMI PT Universitas Telkom.",
};

export default async function TestimoniPage() {
  const testimonials = await getTestimonials();

  return (
    <>
      <section className="border-b border-[#124236] bg-gradient-to-br from-[#06231D] to-[#0C342C] py-14 text-[#FFFDEE]">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-10">
          <div className="mb-3 flex items-center gap-3">
            <span className="h-[2px] w-8 bg-[#E3EF26]" aria-hidden="true" />
            <p className="font-display text-xs font-bold uppercase tracking-[0.08em] text-[#E3EF26]">
              SUARA KADER &amp; MITRA &bull; UKM HIPMI PT UNIVERSITAS TELKOM
            </p>
          </div>
          <h1 className="font-display text-[38px] font-extrabold leading-[1.08] tracking-[-0.02em] sm:text-[52px]">
            TESTIMONI
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-[1.6] text-[#C7DCD2]">
            Kutipan dan tanggapan resmi yang telah terverifikasi dari kader
            aktif, alumni pengusaha, serta mitra kolaborasi UKM HIPMI PT
            Universitas Telkom.
          </p>
        </div>
      </section>

      <TestimonialFilterGrid items={testimonials} />
    </>
  );
}
