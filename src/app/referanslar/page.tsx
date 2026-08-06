import type { Metadata } from "next";
import Image from "next/image";
import Nav from "@/components/Nav";
import Ambient from "@/components/Ambient";
import DotSpotlight from "@/components/DotSpotlight";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import TiltCard from "@/components/TiltCard";
import DeviceShowcase from "@/components/DeviceShowcase";
import { REFERENCES } from "@/lib/site";

export const metadata: Metadata = {
  title: "Referanslar — B&S Media",
  description: "Kurduğumuz sistemlerin çalıştığı gerçek işletmeler: mimarlık, inşaat ve transfer sektöründen örnekler.",
};

export default function Page() {
  return (
    <main className="relative">
      <Nav />

      <section data-nav-tone="dark" className="relative flex flex-col overflow-hidden bg-ink">
        <Image src="/hero/3.jpg" alt="" fill priority sizes="100vw" className="object-cover" />
        <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-b from-ink/80 via-ink/50 to-ink/85" />
        <div className="relative z-10 mx-auto flex w-full max-w-4xl flex-col items-center px-5 pt-32 pb-16 text-center sm:px-8">
          <h1 className="font-display text-balance text-[clamp(2.2rem,5.5vw,3.6rem)] leading-[1.1] text-white">
            Kurduğumuz sistemler, gerçek işletmelerde çalışıyor.
          </h1>
          <div className="mt-8 h-px w-16 bg-gradient-to-r from-transparent via-sky to-transparent" />
        </div>
      </section>

      <section
        data-nav-tone="light"
        className="relative overflow-hidden bg-mist"
      >
        <Ambient variant="light" />
        <DotSpotlight variant="light" />
        <div className="relative mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
          <div className="space-y-20 sm:space-y-28">
            {REFERENCES.map((ref, i) => {
              const domain = ref.url.replace(/^https?:\/\//, "");
              return (
                <Reveal key={ref.id} delay={i * 70}>
                  <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
                    <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                      <span className="font-display block text-[clamp(2.5rem,5vw,3.5rem)] leading-none text-line">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-2">
                        <span className="mono-label text-sm text-blue">{ref.sector}</span>
                        <span className="mono-label rounded-full bg-white px-3 py-1 text-xs text-body">
                          {ref.system}
                        </span>
                      </div>
                      <h2 className="font-display mt-3 text-3xl text-ink sm:text-4xl">{ref.name}</h2>
                      <p className="mt-4 max-w-lg text-base leading-relaxed text-body">{ref.desc}</p>
                      <a
                        href={ref.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="chamfer group mt-7 inline-flex items-center gap-2 bg-navy px-5 py-3 text-xs font-medium text-white transition-colors duration-150 hover:bg-blue"
                      >
                        Canlı siteyi gör
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true" className="transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                          <path d="M7 17L17 7M9 7h8v8" />
                        </svg>
                      </a>
                    </div>

                    <TiltCard className={i % 2 === 1 ? "lg:order-1" : ""}>
                      <DeviceShowcase id={ref.id} domain={domain} />
                    </TiltCard>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
