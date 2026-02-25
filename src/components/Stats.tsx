"use client"; // Animasyon ve Intersection Observer kullanacağımız için bu şart!

import { useEffect, useState, useRef } from "react";

// --- Sayma Animasyonu Motoru (Custom Counter) ---
const Counter = ({ end, suffix = "", prefix = "" }: { end: number, suffix?: string, prefix?: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Ekranda görünüp görünmediğini takip ediyoruz
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsVisible(true);
    });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    let start = 0;
    const duration = 2000; // 2 saniyede saymayı bitir
    const increment = end / (duration / 16);
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.ceil(start));
      }
    }, 16);
    
    return () => clearInterval(timer);
  }, [isVisible, end]);

  return <span ref={ref}>{prefix}{count}{suffix}</span>;
};

// --- Ana İstatistik Bölümü Tasarımı ---
export default function Stats() {
  const stats = [
    { id: 1, end: 15, suffix: "+", label: "Active AI Workflows" },
    { id: 2, end: 42, suffix: "+", label: "Projects Delivered" },
    { id: 3, end: 98, suffix: "%", label: "Client Retention" },
    { id: 4, end: 120, suffix: "+", label: "Hours Saved Monthly" },
  ];

  return (
    <section className="relative z-10 w-full max-w-6xl mx-auto py-20 px-6">
      {/* Cam efektli arka plan kutusu */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 p-10 rounded-[2.5rem] bg-white/5 border border-white/10 backdrop-blur-md shadow-2xl">
        
        {stats.map((stat) => (
          <div key={stat.id} className="flex flex-col items-center text-center">
            {/* Sayı kısmı (Mavi-Beyaz Gradient) */}
            <h4 className="text-4xl md:text-6xl font-extrabold tracking-tighter mb-2 text-transparent bg-clip-text bg-gradient-to-br from-white to-blue-500">
              <Counter end={stat.end} suffix={stat.suffix} />
            </h4>
            {/* Etiket kısmı */}
            <p className="text-sm md:text-base font-medium text-slate-400">
              {stat.label}
            </p>
          </div>
        ))}

      </div>
    </section>
  );
}