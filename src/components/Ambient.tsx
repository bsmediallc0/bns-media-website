"use client";

import { useInViewport } from "@/lib/useInViewport";

type Props = {
  variant?: "dark" | "light";
};

// Kendi kendine yaşayan arka plan: iki ışık kütlesi yavaşça süzülür ve nefes alır.
// Ekran dışındayken duraklar — sayfada 8+ section aynı anda animasyonda olmasın diye.
export default function Ambient({ variant = "dark" }: Props) {
  const { ref, inView } = useInViewport<HTMLDivElement>();
  // Krem zemin üzerinde çok hafif pastel mavi/nane ışık kütleleri (Ease tarzı).
  const c1 = variant === "dark" ? "rgba(29,91,191,0.08)" : "rgba(29,91,191,0.06)";
  const c2 = variant === "dark" ? "rgba(94,169,120,0.07)" : "rgba(94,169,120,0.06)";

  return (
    <div
      ref={ref}
      aria-hidden="true"
      data-active={inView}
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      <div
        className="amb amb-1"
        style={{ background: `radial-gradient(circle, ${c1} 0%, transparent 62%)` }}
      />
      <div
        className="amb amb-2"
        style={{ background: `radial-gradient(circle, ${c2} 0%, transparent 62%)` }}
      />
    </div>
  );
}
