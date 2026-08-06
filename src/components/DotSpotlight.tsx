"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  variant?: "dark" | "light";
};

// Arka plandaki nokta dokusunun ta kendisini imlecin altında parlatır —
// ayrı bir ışık topu değil, mevcut grid'in üstüne hizalı, daha parlak bir
// kopyası; sadece imlecin 240px yakınında bir maskeyle görünür kılınıyor.
export default function DotSpotlight({ variant = "dark" }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = ref.current;
    const parent = el?.parentElement;
    if (!el || !parent) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const onMove = (e: MouseEvent) => {
      const r = parent.getBoundingClientRect();
      el.style.setProperty("--sx", `${e.clientX - r.left}px`);
      el.style.setProperty("--sy", `${e.clientY - r.top}px`);
    };
    const onEnter = () => setActive(true);
    const onLeave = () => setActive(false);

    parent.addEventListener("mousemove", onMove);
    parent.addEventListener("mouseenter", onEnter);
    parent.addEventListener("mouseleave", onLeave);
    return () => {
      parent.removeEventListener("mousemove", onMove);
      parent.removeEventListener("mouseenter", onEnter);
      parent.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  // Nokta dokusu kaldırıldı (Ease tarzı sakin zemin) — imlecin altında
  // sadece çok hafif, yumuşak bir ışık lekesi bırakıyoruz.
  const glow = variant === "dark" ? "rgba(255,255,255,0.05)" : "rgba(29,91,191,0.05)";

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 transition-opacity duration-300 ease-out ${
        active ? "opacity-100" : "opacity-0"
      }`}
      style={{
        background: `radial-gradient(280px circle at var(--sx, 50%) var(--sy, 50%), ${glow}, transparent 72%)`,
      }}
    />
  );
}
