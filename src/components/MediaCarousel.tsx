"use client";

import { useEffect, useRef, useState } from "react";
import type { MediaEntry } from "@/lib/mediaEntries";

// Sektör bağımsız "Günlük" karuseli — Canlı Şantiye ve Canlı Mekan gibi tüm
// drone içerik aboneliği ürünleri bunu kullanır. Kareler ilgili public/
// klasöründen geliyor — bkz. lib/mediaEntries.ts.
export default function MediaCarousel({
  entries,
  titlePrefix = "İnşaat",
  titleAccent = "Günlüğü",
  subtitle = "Başlangıçtan bugüne, adım adım tüm süreç.",
  badgeLabel = "Şantiyeden",
  emptyHint = "Henüz görsel yok.",
}: {
  entries: MediaEntry[];
  titlePrefix?: string;
  titleAccent?: string;
  subtitle?: string;
  badgeLabel?: string;
  emptyHint?: string;
}) {
  const scroller = useRef<HTMLDivElement>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  // Konumu ayrı state'te tutmuyoruz — gerçek kaydırmadan türetiyoruz ki
  // ok tuşu ile parmakla kaydırma birbirinden kopmasın.
  const [scrollState, setScrollState] = useState({
    atStart: true,
    atEnd: false,
    index: 0,
    progress: 0,
  });

  // Oynatmanın ASIL mekanizması işaretlemedeki `autoplay muted` — sessiz
  // autoplay'i her tarayıcı kabul eder ve JS'e hiç ihtiyaç duymaz.
  // Aşağıdaki gözlemci sadece bir iyileştirme: ekran dışındaki videoyu
  // duraklatıp CPU yükünü düşürür. Çalışmasa bile videolar oynamaya devam eder.
  useEffect(() => {
    const videos = videoRefs.current.filter(Boolean) as HTMLVideoElement[];
    if (!videos.length || typeof IntersectionObserver === "undefined") return;

    const io = new IntersectionObserver(
      (records) => {
        records.forEach((record) => {
          const video = record.target as HTMLVideoElement;
          if (record.isIntersecting) {
            video.muted = true; // autoplay izni için şart
            void video.play().catch(() => {});
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.2 },
    );

    videos.forEach((v) => io.observe(v));
    return () => io.disconnect();
  }, [entries]);

  const stepOf = (el: HTMLDivElement) => {
    const card = el.querySelector("[data-card]") as HTMLElement | null;
    return card ? card.offsetWidth + 20 : 340;
  };

  const readScroll = () => {
    const el = scroller.current;
    if (!el) return;
    const step = stepOf(el);
    const max = el.scrollWidth - el.clientWidth;
    setScrollState({
      atStart: el.scrollLeft <= 2,
      atEnd: el.scrollLeft >= max - 2,
      index: Math.min(entries.length - 1, Math.round(el.scrollLeft / step)),
      progress: max > 0 ? (el.scrollLeft / max) * 100 : 100,
    });
  };

  const scrollBy = (dir: -1 | 1) => {
    const el = scroller.current;
    if (!el) return;
    el.scrollBy({ left: dir * stepOf(el), behavior: "smooth" });
  };

  const scrollToIndex = (i: number) => {
    const el = scroller.current;
    if (!el) return;
    el.scrollTo({ left: i * stepOf(el), behavior: "smooth" });
  };

  if (!entries.length) {
    return (
      <p className="rounded-2xl border border-white/10 bg-white/[0.04] p-8 text-center text-sm text-white/50">
        {emptyHint}
      </p>
    );
  }

  const arrow = (dir: -1 | 1) => (
    <button
      type="button"
      onClick={() => scrollBy(dir)}
      aria-label={dir === -1 ? "Önceki" : "Sonraki"}
      disabled={dir === -1 ? scrollState.atStart : scrollState.atEnd}
      className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white/65 transition-colors duration-150 enabled:hover:border-sky enabled:hover:text-sky disabled:opacity-25"
    >
      <svg
        width="17"
        height="17"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        aria-hidden="true"
      >
        <path d={dir === -1 ? "M15 18l-6-6 6-6" : "M9 18l6-6-6-6"} />
      </svg>
    </button>
  );

  return (
    <div>
      {/* Başlık şeridi */}
      <div className="flex items-end justify-between gap-4">
        <div className="flex items-start gap-3.5">
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.06]">
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#3E86E8"
              strokeWidth="1.8"
              aria-hidden="true"
            >
              <path d="M2 18h20" />
              <path d="M4 18a8 8 0 0 1 16 0" />
              <path d="M12 4v6" />
            </svg>
          </span>
          <div>
            <p className="font-display text-2xl leading-tight text-white sm:text-3xl">
              {titlePrefix}{" "}
              <span className="bg-gradient-to-r from-sky to-tint bg-clip-text text-transparent">
                {titleAccent}
              </span>
            </p>
            <p className="mt-1 text-sm text-white/50">{subtitle}</p>
          </div>
        </div>

        <div className="hidden shrink-0 gap-2 sm:flex">
          {arrow(-1)}
          {arrow(1)}
        </div>
      </div>

      {/* Kart şeridi — kenarlara taşarak "devamı var" hissi veriyor */}
      <div
        ref={scroller}
        onScroll={readScroll}
        className="-mx-5 mt-8 flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 pb-3 sm:-mx-8 sm:px-8 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {entries.map((e, i) => (
          <article
            key={e.videoSrc ?? e.src}
            data-card
            style={{ animationDelay: `${i * 110}ms` }}
            className="hero-fade-rise group relative aspect-[3/4] w-[260px] shrink-0 snap-start overflow-hidden rounded-2xl border border-white/[0.09] transition-[transform,border-color,box-shadow] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-2 hover:border-sky/40 hover:shadow-[0_28px_60px_-24px_rgba(62,134,232,0.55)] sm:w-[300px] lg:w-[330px]"
          >
            {e.videoSrc ? (
              <video
                ref={(el) => {
                  videoRefs.current[i] = el;
                }}
                src={e.videoSrc}
                poster={e.src || undefined}
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                aria-label={e.phase || `${badgeLabel} görüntü ${e.no}`}
                className="absolute inset-0 h-full w-full scale-[1.02] bg-navy object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
              />
            ) : (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={e.src}
                alt={e.phase || `${badgeLabel} görüntü ${e.no}`}
                className="absolute inset-0 h-full w-full scale-[1.02] object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
              />
            )}

            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy via-navy/25 to-transparent transition-opacity duration-500 group-hover:from-navy/95"
            />

            {/* İmleç gelince yüzeyde gezinen ince ışık */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-transparent via-sky/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
            />

            <span className="pointer-events-none absolute top-4 left-4 flex items-center gap-1.5 rounded border border-white/15 bg-navy/50 px-2.5 py-1.5 backdrop-blur-md">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-sky" />
              <span className="text-[10px] font-bold tracking-wider text-white/90 uppercase">
                {badgeLabel}
              </span>
            </span>

            <span className="font-display pointer-events-none absolute top-2 right-4 text-5xl leading-none text-white/20 transition-colors duration-500 group-hover:text-sky/60">
              {e.no}
            </span>

            {e.phase && (
              <div className="pointer-events-none absolute inset-x-5 bottom-5 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-1">
                <span className="mb-2 block h-px w-8 bg-sky/70 transition-all duration-500 group-hover:w-14" />
                <p className="font-display text-lg leading-tight text-white sm:text-xl">
                  {e.phase}
                </p>
              </div>
            )}
          </article>
        ))}
      </div>

      {/* Zaman çizelgesi rayı: kaydırdıkça dolan çizgi + tıklanabilir duraklar */}
      <div className="mt-7 flex items-center gap-5">
        <div className="relative h-px flex-1 bg-white/12">
          <div
            className="absolute inset-y-0 left-0 bg-gradient-to-r from-blue to-sky transition-[width] duration-300 ease-out"
            style={{ width: `${scrollState.progress}%` }}
          />
          <div className="absolute inset-0 flex items-center justify-between">
            {entries.map((e, i) => {
              const reached = i <= scrollState.index;
              return (
                <button
                  key={e.no}
                  type="button"
                  onClick={() => scrollToIndex(i)}
                  aria-label={`${e.phase || e.no} karesine git`}
                  aria-current={i === scrollState.index}
                  className="group/dot relative -m-3 p-3"
                >
                  <span
                    className={`block h-2 w-2 rounded-full transition-all duration-300 ${
                      i === scrollState.index
                        ? "scale-150 bg-sky shadow-[0_0_12px_rgba(62,134,232,0.9)]"
                        : reached
                          ? "bg-sky/70"
                          : "bg-white/25 group-hover/dot:bg-white/60"
                    }`}
                  />
                </button>
              );
            })}
          </div>
        </div>

        <div className="flex shrink-0 gap-2 sm:hidden">
          {arrow(-1)}
          {arrow(1)}
        </div>
      </div>
    </div>
  );
}
