import Link from "next/link";

// TODO(Berk): /public/videos/hero.mp4 dosyası henüz yok — kendi videonu
// buraya koy (veya bana ne tür bir video istediğini söyle, üretim için
// yönlendireyim). Video yokken arka plan düz lacivert (bg-ink) olarak kalır,
// site bozuk görünmez.
export default function Hero() {
  return (
    <section
      data-nav-tone="dark"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-ink"
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="absolute inset-0 z-0 h-full w-full object-cover"
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>

      {/* Video üzerinde metnin her zaman okunaklı kalması için koyu lacivert scrim. */}
      <div
        aria-hidden="true"
        className="absolute inset-0 z-[1] bg-gradient-to-b from-ink/75 via-ink/55 to-ink/80"
      />

      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center px-5 py-32 text-center sm:px-8">
        <h1
          className="hero-fade-rise font-display text-[clamp(2.8rem,7vw,6rem)] leading-[0.98] tracking-[-0.02em] text-white"
          style={{ animationDelay: "0ms" }}
        >
          İşini büyüten{" "}
          <span className="text-white/55">dijital sistemler.</span>
        </h1>

        <p
          className="hero-fade-rise mt-8 max-w-xl text-base leading-relaxed text-white/60 sm:text-lg"
          style={{ animationDelay: "180ms" }}
        >
          Rezervasyon alan, teklif hazırlayan, müşteri kazandıran sistemler
          kuruyoruz.
        </p>

        <div
          className="hero-fade-rise mt-10 flex flex-wrap items-center justify-center gap-4"
          style={{ animationDelay: "360ms" }}
        >
          <a
            href="#sistemler"
            className="liquid-glass chamfer inline-flex items-center gap-2 px-7 py-3.5 text-[15px] font-medium text-white backdrop-blur-md transition-transform duration-200 hover:scale-[1.03]"
          >
            Sistemler
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </a>
          <Link
            href="/teklif"
            className="text-[15px] font-medium text-white/70 underline decoration-white/30 underline-offset-4 transition-colors hover:text-white hover:decoration-white/70"
          >
            Ücretsiz teklif al
          </Link>
        </div>
      </div>
    </section>
  );
}
