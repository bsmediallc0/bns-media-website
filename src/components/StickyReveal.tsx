"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type Props = {
  children: ReactNode;
  z: number;
  first?: boolean;
  tone?: "cream" | "mist";
};

// İçerik tamamen ortaya çıktıktan sonra, bir sonraki bölüm üzerine gelmeden
// önce ekranda donmuş kalacağı ekstra süre — bu olmazsa geçiş fark edilmeden
// oluyor, "efekt yokmuş" gibi hissettiriyor.
const DWELL_PX = 280;

// Her bölümü kendi "raf" katmanında sabitler (position: sticky, saf CSS —
// scroll event'ine bağımlı değil, bu yüzden her tarayıcıda güvenilir
// çalışır). Bölümün doğal yüksekliği + dwell payı kadar ekranda donuk
// kalır, sonra bir sonraki bölüm üzerine kayarak gelir.
export default function StickyReveal({ children, z, first = false, tone = "cream" }: Props) {
  const innerRef = useRef<HTMLDivElement>(null);
  const [pinHeight, setPinHeight] = useState(0);

  useEffect(() => {
    function measure() {
      const inner = innerRef.current;
      if (!inner) return;
      setPinHeight(Math.max(inner.offsetHeight, window.innerHeight) + DWELL_PX);
    }
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  return (
    <div className="relative" style={{ height: pinHeight || undefined }}>
      <div
        className={`sticky top-0 overflow-hidden shadow-[0_-40px_70px_-24px_rgba(20,33,54,0.4)] ${
          tone === "mist" ? "bg-mist" : "bg-cream"
        } ${first ? "" : "rounded-t-[40px]"}`}
        style={{ zIndex: z }}
      >
        <div ref={innerRef}>{children}</div>
      </div>
    </div>
  );
}
