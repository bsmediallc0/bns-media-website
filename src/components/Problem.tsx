"use client";

import { useEffect, useState } from "react";
import Reveal from "./Reveal";
import TiltCard from "./TiltCard";

const PAINS = [
  {
    title: "Siten var, müşterin yok",
    text: "Ziyaretçi geliyor, bakıyor, çıkıyor. Site güzel ama telefonu çaldırmıyor, kasaya yansımıyor.",
    icon: (
      <>
        <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7Z" />
        <circle cx="12" cy="12" r="3" />
      </>
    ),
  },
  {
    title: "Rakibin hep bir adım önde",
    text: "Google'da o çıkıyor, sosyal medyada o görünüyor. Müşteri seni aramadan ona ulaşıyor.",
    icon: (
      <>
        <path d="M3 20h18" />
        <rect x="5" y="12" width="4" height="8" />
        <rect x="10.5" y="7" width="4" height="13" />
        <rect x="16" y="4" width="4" height="16" />
      </>
    ),
  },
  {
    title: "Operasyon sana bağımlı",
    text: "Rezervasyon, teklif, müşteri takibi... Her şey senin telefonundan, senin aklından yürüyor.",
    icon: (
      <>
        <rect x="7" y="2" width="10" height="20" rx="2" />
        <path d="M11 18h2" />
      </>
    ),
  },
] as const;

const INTERVAL_MS = 3000;

export default function Problem() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setActive((a) => (a + 1) % PAINS.length);
    }, INTERVAL_MS);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative overflow-hidden bg-cream">
      <div className="relative mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-32">
        <Reveal>
          <span className="mono-label text-xs font-bold tracking-wide text-blue">
            Sorun
          </span>
          <h2 className="font-display mt-6 max-w-2xl text-[clamp(2.5rem,5vw,4rem)] leading-[1.15] text-ink">
            Güzel site yetmiyor. Sorun başka yerde.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-3 md:grid-cols-3">
          {PAINS.map((p, i) => {
            const isActive = active === i;
            return (
              <Reveal key={p.title} delay={i * 90} className="h-full">
                <TiltCard className="h-full rounded-3xl">
                  <div
                    className={`h-full rounded-3xl p-8 transition-colors duration-700 ${
                      isActive ? "bg-white" : "bg-mist"
                    }`}
                  >
                    <svg
                      width="28"
                      height="28"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      aria-hidden="true"
                      className={`transition-colors duration-700 ${isActive ? "text-blue" : "text-ink"}`}
                    >
                      {p.icon}
                    </svg>
                    <h3 className="font-display mt-6 text-2xl text-ink">{p.title}</h3>
                    <p className="mt-3 text-[15px] leading-relaxed text-body">{p.text}</p>
                  </div>
                </TiltCard>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
