import type { Metadata } from "next";
import Image from "next/image";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { waLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Blog — B&S Media",
  description: "Villa, emlak, inşaat ve klinik işletmeleri için sistem ve dijital büyüme yazıları.",
};

export default function Page() {
  return (
    <main className="relative">
      <Nav />

      <section data-nav-tone="dark" className="relative flex min-h-dvh flex-col overflow-hidden bg-ink">
        <Image src="/hero/3.jpg" alt="" fill priority sizes="100vw" className="object-cover" />
        <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-b from-ink/80 via-ink/50 to-ink/85" />

        <div className="relative z-10 mx-auto flex w-full max-w-2xl flex-1 flex-col items-center justify-center px-5 pt-28 pb-28 text-center sm:px-8">
          <p className="mono-label text-sm text-sky">Blog</p>
          <h1 className="font-display mt-6 text-[clamp(2.4rem,6vw,3.4rem)] leading-[1.08] text-white">
            İçerikler hazırlanıyor.
          </h1>
          <p className="mt-6 max-w-md text-base leading-relaxed text-white/70">
            Villa/otel rezervasyonu, emlak vitrin sitesi, inşaat teklif süreçleri
            ve klinik dijitalleşmesi üzerine yazılar burada yayınlanacak.
          </p>

          <a
            href={waLink("Merhaba, blog yayınlandığında haberdar olmak istiyorum.")}
            target="_blank"
            rel="noopener noreferrer"
            className="chamfer mt-9 inline-flex items-center gap-2 bg-wa px-6 py-3.5 text-sm font-medium text-wa-ink transition-colors duration-150 hover:bg-[#1fbd5a]"
          >
            Yayınlanınca haberdar et
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
