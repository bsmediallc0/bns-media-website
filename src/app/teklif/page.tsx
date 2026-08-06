import type { Metadata } from "next";
import Image from "next/image";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import QuoteForm from "@/components/QuoteForm";

export const metadata: Metadata = {
  title: "Ücretsiz Teklif Al — B&S Media",
  description: "Sistemin için ücretsiz teklif al. Sistemi seç, birkaç detay ver, WhatsApp'tan konuşalım.",
};

const BENEFITS = [
  "Ücretsiz — hiçbir taahhüt yok",
  "Anında dönüş",
  "Fiyat sürpriz değil, net konuşuruz",
] as const;

export default function Page() {
  return (
    <main className="relative">
      <Nav />

      <section data-nav-tone="dark" className="relative flex min-h-dvh flex-col overflow-hidden bg-ink">
        <Image src="/hero/4.jpg" alt="" fill priority sizes="100vw" className="object-cover" />
        <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-b from-ink/80 via-ink/50 to-ink/85" />

        <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-1 flex-col justify-center px-5 pt-32 pb-20 sm:px-8 sm:pt-40">
          <div className="grid gap-14 lg:grid-cols-2 lg:items-start">
            <div>
              <p className="mono-label text-sm text-sky">Teklif Al</p>
              <h1 className="font-display mt-4 text-[clamp(2.2rem,5.5vw,3.4rem)] leading-[1.1] text-white">
                Ücretsiz teklif al.
              </h1>
              <p className="mt-6 max-w-md text-base leading-relaxed text-white/70">
                Sistemi seç, birkaç detay ver — gerisini WhatsApp&apos;ta
                konuşalım.
              </p>

              <ul className="mt-10 space-y-4">
                {BENEFITS.map((b) => (
                  <li key={b} className="flex items-center gap-3 text-sm text-white/80">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#3E86E8" strokeWidth="2.5" aria-hidden="true">
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                    {b}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-line bg-white p-6 shadow-[0_30px_60px_-40px_rgba(20,33,54,0.2)] sm:p-8">
              <QuoteForm />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
