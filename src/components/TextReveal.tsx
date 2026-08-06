"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  text: string;
  className?: string;
  delay?: number;
};

// Başlıkları kelime kelime, maskeden yukarı kayarak + bulanıklıktan
// netleşerek ortaya çıkarır. Reveal.tsx'in konteyner fade'ine ek olarak
// kullanılır — asıl "sexy" his buradan gelir.
export default function TextReveal({ text, className = "", delay = 0 }: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          io.unobserve(el);
        }
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const words = text.split(" ");

  return (
    <span ref={ref} className={className} aria-label={text}>
      {words.map((w, i) => (
        <span key={i} className="inline-block overflow-hidden pb-[0.15em]" aria-hidden="true">
          <span
            className="inline-block transition-all duration-[850ms] ease-out will-change-transform"
            style={{
              transitionDelay: `${delay + i * 45}ms`,
              transform: visible ? "translateY(0%)" : "translateY(115%)",
              opacity: visible ? 1 : 0,
              filter: visible ? "blur(0px)" : "blur(6px)",
            }}
          >
            {w}
            {i < words.length - 1 ? " " : ""}
          </span>
        </span>
      ))}
    </span>
  );
}
