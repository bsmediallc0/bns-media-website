"use client";

import { useEffect, useRef, useState } from "react";

/** Ekran dışındaki ağır animasyonları duraklatmak için basit görünürlük takibi. */
export function useInViewport<T extends Element>(rootMargin = "200px") {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(true);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), {
      rootMargin,
      threshold: 0,
    });
    io.observe(el);
    return () => io.disconnect();
  }, [rootMargin]);

  return { ref, inView } as const;
}
