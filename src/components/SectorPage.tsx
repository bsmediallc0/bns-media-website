import type { ReactNode } from "react";
import Image from "next/image";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import TextReveal from "@/components/TextReveal";
import TiltCard from "@/components/TiltCard";
import Ambient from "@/components/Ambient";
import DotSpotlight from "@/components/DotSpotlight";
import FaqAccordion from "@/components/FaqAccordion";
import CompetitorTable from "@/components/CompetitorTable";
import LeadForm from "@/components/LeadForm";
import PackagesGrid from "@/components/PackagesGrid";
import { waLink } from "@/lib/site";

export type SectorFeature = { title: string; text: string; icon?: ReactNode };
export type SectorSection = { id: string; title: string; paragraphs: string[] };
export type SectorPackage = {
  name: string;
  /** Dönem bedeli. Dönemi SectorConfig.billing belirler (varsayılan: yıllık). Fiyat gösterilmeyen (quote) sayfalarda da dahili hesap için kullanılır, ekranda basılmaz. */
  priceTL: number;
  desc: string;
  features: string[];
  highlight?: boolean;
  standoutFeature?: string;
  /** true ise sayfa "priced" olsa bile bu kart fiyat göstermez, "Bilgi Al" CTA'sına döner. */
  quoteOnly?: boolean;
  /** Bu pakete opsiyonel olarak eklenebilen tek modül — kart üzerinde açma/kapama anahtarı olarak gösterilir. */
  addon?: { label: string; priceTL: number; features?: string[] };
};
export type SectorFaqItem = { q: string; a: string };

export type SectorConfig = {
  kicker: string;
  name: string;
  intro: string;
  /** Güven şeridinde gösterilen gerçek teslim süresi — sayfaya göre değişir. */
  deliveryLabel: string;
  /** Hero arka plan görseli — public/hero altındaki dosyalardan biri. */
  heroImage: string;
  sections: SectorSection[];
  features: SectorFeature[];
  packages: SectorPackage[] | null;
  faq: SectorFaqItem[];
  demoUrl?: string;
  soonNote?: string;
  /** Paket fiyatlarının dönemi. Belirtilmezse yıllık. "once" tek seferlik proje ücreti içindir (dönem etiketi ve yıllık/aylık karşılık satırı basılmaz). */
  billing?: "yearly" | "monthly" | "once";
  /** Verilirse standart rakip kıyaslama tablosunun yerine bu bölüm basılır. */
  comparison?: ReactNode;
  /**
   * "priced" (varsayılan): paket fiyatları sitede açık gösterilir.
   * "quote": fiyatlar gizlenir, kart yalnızca kapsamı gösterir; CTA doğrudan iletişim formuna yönlendirir.
   */
  pricingMode?: "priced" | "quote";
  /** Verilirse güven şeridinde "%25 indirim" yerine teslim garantisi/iade vurgusu gösterilir. */
  guaranteeDays?: number;
  /**
   * "discount" (varsayılan): liste fiyatı üstü çizili, %25 indirimli fiyat gösterilir.
   * "startingFrom": indirim kurgusu yok, priceTL doğrudan "…TL'den başlıyor" olarak basılır.
   * "plain": indirim kurgusu yok, priceTL olduğu gibi (ör. "7.500 TL / ay") basılır.
   */
  priceDisplay?: "discount" | "startingFrom" | "plain";
  /**
   * Verilirse ve billing "monthly" ise, "Yıllık yaklaşık…" satırı yerine
   * "N ay öde 12 ay kullan" tarzı bir yıllık peşin ödeme teşviki gösterilir.
   */
  annualPrepayMonths?: number;
};

const CHECK = <path d="M5 13l4 4L19 7" />;

export default function SectorPage({
  config,
  extra,
}: {
  config: SectorConfig;
  extra?: ReactNode;
}) {
  const {
    kicker,
    name,
    intro,
    deliveryLabel,
    heroImage,
    sections,
    features,
    packages,
    faq,
    demoUrl,
    soonNote,
    billing,
    comparison,
    pricingMode = "priced",
    guaranteeDays,
    priceDisplay = "discount",
    annualPrepayMonths,
  } = config;
  const isMonthly = billing === "monthly";
  const isOnce = billing === "once";
  const showPrice = pricingMode === "priced";
  const startingFrom = priceDisplay === "startingFrom";
  const plainPrice = priceDisplay === "plain";
  const locked = !packages;
  const stats = [
    { value: deliveryLabel, label: "Standart kurulum süresi" },
    showPrice
      ? startingFrom
        ? { value: "Yol ücreti yok", label: "Kaş-Kalkan turlarında" }
        : { value: "%25", label: "Tüm paketlerde indirim" }
      : guaranteeDays
        ? { value: `${guaranteeDays} gün`, label: "Yayına almazsak ücret iade" }
        : { value: "Net teklif", label: "Anında fiyat dönüşü" },
    { value: "Sınırsız", label: "Revize hakkı" },
    { value: "7/24", label: "WhatsApp destek hattı" },
  ];

  return (
    <main className="relative">
      <Nav />

      {/* Hero */}
      <section
        data-nav-tone="dark"
        className="relative flex min-h-dvh flex-col overflow-hidden bg-ink"
      >
        <Image
          src={heroImage}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-b from-ink/80 via-ink/50 to-ink/85"
        />
        <div className="relative z-10 mx-auto flex w-full max-w-3xl flex-1 flex-col items-center justify-center px-5 pt-28 pb-20 text-center sm:px-8">
          <span className="eyebrow-badge bg-white/10 text-white backdrop-blur-md">
            {kicker}
          </span>
          <h1 className="font-display mt-6 text-[clamp(3rem,7.5vw,5rem)] leading-[1.03] text-white">
            <TextReveal text={name} />
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/70 sm:text-xl">
            {intro}
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href={waLink(
                `Merhaba, ${name} hakkında detaylı bilgi almak istiyorum.`,
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="chamfer wa-pulse bg-wa px-8 py-4 text-[15px] font-medium text-wa-ink transition-colors duration-150 hover:bg-[#1fbd5a]"
            >
              WhatsApp&apos;tan bilgi al
            </a>
            {demoUrl ? (
              <a
                href={demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="chamfer bg-white px-8 py-4 text-[15px] font-medium text-ink transition-colors duration-150 hover:bg-white/85"
              >
                Demo&apos;yu gez
              </a>
            ) : (
              <a
                href="#paketler"
                className="chamfer bg-white px-8 py-4 text-[15px] font-medium text-ink transition-colors duration-150 hover:bg-white/85"
              >
                {packages
                  ? showPrice
                    ? "Paketleri incele"
                    : "Kapsamı incele"
                  : "Erken erişim"}
              </a>
            )}
          </div>
        </div>
      </section>

      {/* Güven şeridi */}
      <section className="relative overflow-hidden bg-ink">
        <div className="relative mx-auto grid max-w-5xl grid-cols-2 gap-8 px-5 py-12 sm:px-8 sm:py-14 lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.value} delay={i * 60} className="text-center">
              <p className="font-display text-3xl text-white sm:text-4xl">
                {s.value}
              </p>
              <p className="mt-1.5 text-[13px] text-white/60">{s.label}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Aşağıdaki her şey (Uzun içerik → SSS) locked sayfalarda tek parça bulanıklaştırılır. */}
      <div className="relative">
        <div
          className={locked ? "pointer-events-none select-none blur-[6px]" : ""}
        >
          {/* Uzun içerik */}
          <section className="relative overflow-hidden bg-cream">
            <Ambient variant="light" />
            <DotSpotlight variant="light" />
            <div className="relative mx-auto max-w-3xl px-5 py-24 sm:px-8 sm:py-32">
              <div className="space-y-16">
                {sections.map((s, i) => (
                  <Reveal key={s.id} delay={i * 60}>
                    <div id={s.id} className="scroll-mt-28">
                      <h2 className="font-display text-3xl leading-[1.15] sm:text-4xl">
                        <TextReveal text={s.title} />
                      </h2>
                      {s.id === "surec" ? (
                        <div className="mt-6 grid gap-4 sm:grid-cols-3">
                          {s.paragraphs.map((p, j) => (
                            <div
                              key={j}
                              className="flex h-full flex-col items-start gap-3 rounded-2xl bg-mist p-5"
                            >
                              <span className="chamfer font-display flex h-9 w-9 shrink-0 items-center justify-center bg-ink text-sm text-white">
                                {String(j + 1).padStart(2, "0")}
                              </span>
                              <p className="text-[15px] leading-relaxed text-body">
                                {p}
                              </p>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div className="mt-4 space-y-4">
                          {s.paragraphs.map((p, j) => (
                            <p
                              key={j}
                              className="text-base leading-relaxed text-body sm:text-lg"
                            >
                              {p}
                            </p>
                          ))}
                        </div>
                      )}
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>

          {/* Özellikler */}
          <section
            id="ozellikler"
            className="relative overflow-hidden bg-mist scroll-mt-4"
          >
            <Ambient variant="light" />
            <DotSpotlight variant="light" />
            <div className="relative mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-32">
              <Reveal>
                <h2 className="font-display mx-auto max-w-2xl text-center text-[clamp(2.5rem,5vw,4rem)] leading-[1.15]">
                  <TextReveal text="Sistemde neler var." />
                </h2>
              </Reveal>

              {/* Mobil: kullanıcı etkileşimi gerektirmeyen, yavaş kayan şerit. */}
              <div className="relative mt-10 -mx-5 overflow-hidden sm:hidden">
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-y-0 left-0 z-10 w-8 bg-gradient-to-r from-mist to-transparent"
                />
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-y-0 right-0 z-10 w-8 bg-gradient-to-l from-mist to-transparent"
                />
                <div className="marquee-track flex w-max gap-4 px-5">
                  {[...features, ...features].map((f, i) => (
                    <div
                      key={`${f.title}-${i}`}
                      className="flex w-[220px] shrink-0 flex-col rounded-3xl bg-white p-6"
                    >
                      <div className="chamfer flex h-10 w-10 items-center justify-center bg-tint">
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#1D5BBF"
                          strokeWidth="2"
                          aria-hidden="true"
                        >
                          {f.icon ?? CHECK}
                        </svg>
                      </div>
                      <h3 className="font-display mt-3 text-lg">{f.title}</h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-body">
                        {f.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative mt-14">
                <div className="hidden gap-6 sm:grid sm:grid-cols-2 lg:grid-cols-3">
                  {features[0] && (
                    <Reveal className="h-full sm:col-span-2 lg:col-span-1 lg:row-span-2">
                      <TiltCard className="h-full rounded-3xl">
                        <div className="flex h-full min-h-[220px] flex-col justify-between rounded-3xl bg-tint p-8 lg:min-h-[480px]">
                          <div className="chamfer flex h-12 w-12 items-center justify-center bg-white">
                            <svg
                              width="22"
                              height="22"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="#1D5BBF"
                              strokeWidth="1.8"
                              aria-hidden="true"
                            >
                              {features[0].icon ?? CHECK}
                            </svg>
                          </div>
                          <div>
                            <h3 className="font-display mt-6 text-3xl text-ink">
                              {features[0].title}
                            </h3>
                            <p className="mt-3 text-base leading-relaxed text-body">
                              {features[0].text}
                            </p>
                          </div>
                        </div>
                      </TiltCard>
                    </Reveal>
                  )}
                  {features.slice(1).map((f, i) => (
                    <Reveal
                      key={f.title}
                      delay={(i + 1) * 70}
                      className="h-full"
                    >
                      <TiltCard className="h-full rounded-3xl">
                        <div className="flex h-full min-h-[200px] flex-col rounded-3xl bg-white p-7">
                          <div className="chamfer flex h-11 w-11 items-center justify-center bg-tint">
                            <svg
                              width="20"
                              height="20"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="#1D5BBF"
                              strokeWidth="2"
                              aria-hidden="true"
                            >
                              {f.icon ?? CHECK}
                            </svg>
                          </div>
                          <h3 className="font-display mt-4 text-xl">
                            {f.title}
                          </h3>
                          <p className="mt-2 text-[15px] leading-relaxed text-body">
                            {f.text}
                          </p>
                        </div>
                      </TiltCard>
                    </Reveal>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {extra}

          {comparison ?? <CompetitorTable />}

          {/* Paketler */}
          <section
            id="paketler"
            className="relative overflow-hidden bg-cream scroll-mt-4"
          >
            <Ambient variant="light" />
            <DotSpotlight variant="light" />
            <div className="relative z-10 mx-auto max-w-5xl px-5 py-24 sm:px-8 sm:py-32">
              {packages ? (
                <>
                  <Reveal>
                    <p className="mono-label text-center text-xs font-bold tracking-wide text-blue">
                      {showPrice
                        ? startingFrom
                          ? "Başlayan fiyatlar"
                          : plainPrice
                            ? "Net fiyat, sürpriz yok"
                            : "Tüm paketlerde %25 indirim"
                        : guaranteeDays
                          ? `${guaranteeDays} günde yayında, olmazsa ücret iade`
                          : "Kapsama göre net teklif"}
                    </p>
                    <h2 className="font-display mt-5 text-center text-[clamp(2.5rem,5vw,4rem)] leading-[1.15]">
                      <TextReveal text="Paketler" />
                    </h2>
                    <p className="mx-auto mt-4 max-w-md text-center text-lg text-body">
                      {showPrice
                        ? startingFrom
                          ? "Fiyatlar açık — sürpriz yok, ekstra ücret yok. Tek seferlik proje bedeli, yol ücreti dahil."
                          : plainPrice
                            ? annualPrepayMonths
                              ? `Fiyatlar açık — sürpriz yok, ekstra ücret yok. Yıllık öderseniz ${annualPrepayMonths} ay fiyatına 12 ay kullanırsınız.`
                              : "Fiyatlar açık — sürpriz yok, ekstra ücret yok."
                            : isOnce
                              ? "Fiyatlar açık — sürpriz yok, ekstra ücret yok. Tek seferlik proje bedeli."
                              : "Fiyatlar açık — sürpriz yok, ekstra ücret yok. Tek bir yıllık bedel; dilersen aylık olarak da ödeyebilirsin."
                        : "Kapsamı aşağıda görüyorsun. İşletmene özel fiyatı, formu doldurduğunda anında iletiyoruz."}
                    </p>
                  </Reveal>

                  <PackagesGrid
                    packages={packages}
                    name={name}
                    isMonthly={isMonthly}
                    isOnce={isOnce}
                    showPrice={showPrice}
                    startingFrom={startingFrom}
                    plainPrice={plainPrice}
                    annualPrepayMonths={annualPrepayMonths}
                  />
                </>
              ) : (
                <Reveal>
                  <div className="mx-auto max-w-xl text-center">
                    <h2 className="font-display mt-5 text-3xl leading-[1.15] sm:text-4xl">
                      {name} henüz satışa açık değil.
                    </h2>
                    <p className="mt-4 text-body leading-relaxed">{soonNote}</p>
                  </div>
                </Reveal>
              )}
            </div>
          </section>

          {/* İletişim formu */}
          <section
            id="iletisim"
            className="relative overflow-hidden bg-mist scroll-mt-4"
          >
            <div className="relative mx-auto grid max-w-5xl gap-10 px-5 py-24 sm:px-8 sm:py-32 lg:grid-cols-2 lg:items-center lg:gap-16">
              <Reveal>
                <h2 className="font-display text-3xl leading-[1.15] sm:text-4xl">
                  {name} için ücretsiz teklif al.
                </h2>
                <p className="mt-4 max-w-md text-body leading-relaxed">
                  Formu doldur, ihtiyacına özel fiyat teklifiyle anında sana
                  dönüş yapalım.
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <a
                    href="#paketler"
                    className="chamfer inline-flex items-center gap-2 bg-ink px-6 py-3.5 text-[15px] font-medium text-white transition-colors duration-150 hover:bg-navy-2"
                  >
                    {showPrice ? "Fiyatları gör" : "Kapsamı gör"}
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      aria-hidden="true"
                    >
                      <path d="M5 12h14M13 6l6 6-6 6" />
                    </svg>
                  </a>
                  {sections[1] && (
                    <a
                      href={`#${sections[1].id}`}
                      className="chamfer inline-flex items-center gap-2 bg-white px-6 py-3.5 text-[15px] font-medium text-ink transition-colors duration-150 hover:bg-tint"
                    >
                      Süreci incele
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        aria-hidden="true"
                      >
                        <path d="M5 12h14M13 6l6 6-6 6" />
                      </svg>
                    </a>
                  )}
                </div>
              </Reveal>

              <Reveal delay={100}>
                <LeadForm />
              </Reveal>
            </div>
          </section>

          {/* SSS */}
          <section
            id="sss"
            className="relative overflow-hidden bg-cream scroll-mt-4"
          >
            <Ambient variant="light" />
            <DotSpotlight variant="light" />
            <div className="relative mx-auto max-w-5xl px-5 py-24 sm:px-8 sm:py-32">
              <div className="grid gap-10 lg:grid-cols-[340px_1fr] lg:gap-16">
                <Reveal>
                  <div className="lg:sticky lg:top-32">
                    <h2 className="font-display text-3xl leading-[1.15] sm:text-4xl">
                      <TextReveal text="Aklındakiler" />
                    </h2>
                    <p className="mt-4 text-body leading-relaxed">
                      {name} hakkında en çok merak edilenler burada. Aradığın
                      cevabı bulamazsan WhatsApp&apos;tan sorabilirsin.
                    </p>
                  </div>
                </Reveal>

                <div>
                  <FaqAccordion items={faq} />
                </div>
              </div>
            </div>
          </section>
        </div>

        {locked && (
          <div className="pointer-events-none sticky top-0 z-20 flex h-dvh items-center justify-center px-5">
            <div className="pointer-events-auto flex flex-col items-center gap-3 rounded-2xl border border-line bg-white px-8 py-8 text-center shadow-[0_30px_60px_-24px_rgba(16,30,51,0.35)]">
              <span className="chamfer flex h-11 w-11 items-center justify-center bg-tint">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#1D5BBF"
                  strokeWidth="2"
                  aria-hidden="true"
                >
                  <rect x="5" y="11" width="14" height="9" rx="2" />
                  <path d="M8 11V8a4 4 0 0 1 8 0v3" />
                </svg>
              </span>
              <span className="eyebrow-badge bg-mist text-ink">Yakında</span>
              <p className="font-display max-w-xs text-2xl leading-tight">
                {name} henüz satışa açık değil.
              </p>
              <p className="max-w-xs text-sm leading-relaxed text-body">
                {soonNote}
              </p>
              <a
                href={waLink(
                  `Merhaba, ${name} erken erişim listesine katılmak istiyorum.`,
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="chamfer wa-pulse mt-1 inline-flex items-center gap-2 bg-wa px-6 py-3 text-sm font-medium text-wa-ink transition-colors duration-150 hover:bg-[#1fbd5a]"
              >
                Erken erişim listesine katıl
              </a>
            </div>
          </div>
        )}
      </div>

      <Footer />
    </main>
  );
}
