"use client";

import { useEffect, useState } from "react";

// Site ilk açıldığında kısa bir "perde açılışı": marka işareti kendini
// çiziyor, sonra perde kalkıp Hero'yu (o sırada zaten yerleşmiş halde)
// ortaya çıkarıyor. Kök layout'ta bir kez mount olur — sekme içi
// gezinmelerde (Link tıklamalarında) tekrar oynamaz, sadece ilk yüklemede.
export default function PageIntro() {
  const [visible, setVisible] = useState(true);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      const skipTimer = setTimeout(() => setVisible(false), 0);
      return () => clearTimeout(skipTimer);
    }
    const fadeTimer = setTimeout(() => setFading(true), 650);
    const removeTimer = setTimeout(() => setVisible(false), 1200);
    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      aria-hidden="true"
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-ink transition-opacity duration-500 ${
        fading ? "opacity-0" : "opacity-100"
      }`}
      style={{ pointerEvents: fading ? "none" : "auto" }}
    >
      <div className="intro-star-in">
        <svg width="64" height="64" viewBox="0 0 24 24" fill="none" className="intro-star-spin">
          <path
            d="M12 2 L14.5 9.5 L22 12 L14.5 14.5 L12 22 L9.5 14.5 L2 12 L9.5 9.5 Z"
            fill="url(#intro-star-grad)"
          />
          <defs>
            <linearGradient id="intro-star-grad" x1="0" y1="1" x2="1" y2="0">
              <stop stopColor="#1D5BBF" />
              <stop offset="1" stopColor="#3E86E8" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}
