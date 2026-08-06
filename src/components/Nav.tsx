"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { NAV_ITEMS, SERVICES, SYSTEMS, waLink } from "@/lib/site";

// Canlı Şantiye bir drone hizmeti — Hizmetler'de listeleniyor, Sistemler
// dropdown'ında tekrar etmesin (ana sayfadaki Sistemler ızgarasında kalmaya devam eder).
const NAV_SYSTEMS = SYSTEMS.filter((s) => s.id !== "canli-santiye");

const DROPDOWNS: Record<
  string,
  readonly { id: string; name: string; sector: string }[]
> = {
  Sistemler: NAV_SYSTEMS,
  Hizmetler: SERVICES,
};

// Açılma animasyonunun süresi — overflow'u tam bu süre sonunda serbest
// bırakıyoruz (aşağıdaki nota bak).
const EXPAND_MS = 750;

// Yüzen hap navbar. Boştayken sadece logo görünür; fareyle üzerine gelince
// (ya da klavyeyle odaklanınca) hap yanlara doğru açılıp menüyü ortaya çıkarır.
// Koyu bir bölüm (data-nav-tone="dark") ekranın üstündeyken cam/koyu tona geçer.
export default function Nav() {
  const [open, setOpen] = useState(false);
  const [mobileOpenLabel, setMobileOpenLabel] = useState<string | null>(null);
  const [dark, setDark] = useState(false);

  const [expanded, setExpanded] = useState(false);
  // Menü genişliğini "grid 0fr → 1fr" numarasıyla animasyonluyoruz; bu da
  // overflow-hidden gerektiriyor. Ama Sistemler/Hizmetler açılır panelleri
  // hapın altına taştığı için sürekli hidden kalırsa kırpılıyorlar. Çözüm:
  // açılma animasyonu bitince overflow'u serbest bırakmak.
  const [allowOverflow, setAllowOverflow] = useState(false);
  const overflowTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const els = document.querySelectorAll('[data-nav-tone="dark"]');
    if (!els.length) return;
    const intersecting = new Set<Element>();
    // Sadece navbar'ın gerçekten oturduğu üst şerit (~ilk 90px) kontrol
    // edilmeli — eskiden yalnızca üstten kırpılıp alttan kırpılmadığı için
    // ekranın neredeyse tamamı "kesişiyor" sayılıyordu: bir koyu bölüm
    // (ör. footer) ekranın alt yarısında görünür olur olmaz navbar, üstünde
    // hâlâ açık renkli bir bölüm varken bile koyu tona geçiyordu.
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) intersecting.add(entry.target);
          else intersecting.delete(entry.target);
        });
        setDark(intersecting.size > 0);
      },
      { rootMargin: "0px 0px -90% 0px", threshold: 0 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    return () => {
      if (overflowTimer.current) clearTimeout(overflowTimer.current);
    };
  }, []);

  // Tam ekran mobil menü açıkken arkadaki sayfa kaymasın.
  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [open]);

  const expand = () => {
    if (overflowTimer.current) clearTimeout(overflowTimer.current);
    setExpanded(true);
    overflowTimer.current = setTimeout(() => setAllowOverflow(true), EXPAND_MS);
  };

  const collapse = () => {
    if (overflowTimer.current) clearTimeout(overflowTimer.current);
    setAllowOverflow(false);
    setExpanded(false);
  };

  return (
    <>
      <header
        onMouseEnter={expand}
        onMouseLeave={collapse}
        onFocus={expand}
        onBlur={(e) => {
          if (!e.currentTarget.contains(e.relatedTarget as Node | null))
            collapse();
        }}
        className={`fixed top-3 left-1/2 z-[100] w-fit -translate-x-1/2 rounded-full border backdrop-blur-md transition-colors duration-300 sm:top-5 ${
          dark ? "border-white/10 bg-white/10" : "border-line/70 bg-cream/90"
        }`}
      >
        <div className="flex items-center px-4 py-2.5 sm:px-6">
          <Link href="/" className="flex shrink-0 items-center gap-2.5">
            {/* Açılış perdesindeki yıldızın aynısı — fare gelince dönüp hafifçe büyür.
              Gradient id'si PageIntro'nunkinden farklı: ikisi aynı anda DOM'da
              olabiliyor ve aynı id çakışırdı. */}
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
              className={`shrink-0 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                expanded ? "rotate-180 scale-115" : ""
              }`}
            >
              <path
                d="M12 2 L14.5 9.5 L22 12 L14.5 14.5 L12 22 L9.5 14.5 L2 12 L9.5 9.5 Z"
                fill="url(#nav-star-grad)"
              />
              <defs>
                <linearGradient id="nav-star-grad" x1="0" y1="1" x2="1" y2="0">
                  <stop stopColor="#1D5BBF" />
                  <stop offset="1" stopColor="#3E86E8" />
                </linearGradient>
              </defs>
            </svg>
            <Image
              src="/navbarlogo.png"
              alt="B&amp;S Media"
              width={480}
              height={66}
              priority
              className={`h-[18px] w-auto max-w-none shrink-0 transition-[filter] duration-300 ${dark ? "brightness-0 invert" : ""}`}
            />
          </Link>

          {/* Masaüstü: boştayken 0 genişlikte, hover/odakta içeriğine kadar açılır. */}
          <div
            className={`hidden transition-[grid-template-columns] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] md:grid ${
              expanded ? "grid-cols-[1fr]" : "grid-cols-[0fr]"
            }`}
          >
            <div
              className={allowOverflow ? "overflow-visible" : "overflow-hidden"}
            >
              <div
                className={`flex items-center gap-6 pl-8 whitespace-nowrap transition-opacity duration-500 ${
                  expanded ? "opacity-100 delay-200" : "opacity-0"
                }`}
              >
                <nav className="flex items-center gap-6" aria-label="Ana menü">
                  {NAV_ITEMS.map((item) => {
                    const dropdownItems = DROPDOWNS[item.label];
                    return dropdownItems ? (
                      <div key={item.href} className="group relative">
                        <button
                          type="button"
                          tabIndex={expanded ? 0 : -1}
                          className={`flex items-center gap-1 text-[15px] transition-colors duration-200 ${
                            dark
                              ? "text-white/70 group-hover:text-white"
                              : "text-body group-hover:text-ink"
                          }`}
                        >
                          {item.label}
                          <svg
                            width="10"
                            height="10"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.5"
                            aria-hidden="true"
                            className="transition-transform duration-200 group-hover:rotate-180"
                          >
                            <path d="M6 9l6 6 6-6" />
                          </svg>
                        </button>

                        <div className="pointer-events-none absolute top-full left-1/2 w-64 -translate-x-1/2 pt-3 opacity-0 transition-opacity duration-200 group-focus-within:pointer-events-auto group-focus-within:opacity-100 group-hover:pointer-events-auto group-hover:opacity-100">
                          <div className="rounded-2xl border border-line bg-white p-2 shadow-[0_20px_45px_-20px_rgba(20,33,54,0.25)]">
                            {dropdownItems.map((s) => (
                              <Link
                                key={s.id}
                                href={`/${s.id}`}
                                tabIndex={expanded ? 0 : -1}
                                className="flex flex-col gap-0.5 rounded-xl px-3 py-2.5 transition-colors duration-150 hover:bg-mist"
                              >
                                <span className="font-display text-base text-ink">
                                  {s.name}
                                </span>
                                <span className="text-[13px] text-body/70">
                                  {s.sector}
                                </span>
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                    ) : (
                      <Link
                        key={item.href}
                        href={item.href}
                        tabIndex={expanded ? 0 : -1}
                        className={`text-[15px] transition-colors duration-200 ${
                          dark
                            ? "text-white/70 hover:text-white"
                            : "text-body hover:text-ink"
                        }`}
                      >
                        {item.label}
                      </Link>
                    );
                  })}
                </nav>

                <a
                  href={waLink(
                    "Merhaba, sistemleriniz hakkında bilgi almak istiyorum.",
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  tabIndex={expanded ? 0 : -1}
                  className={`chamfer px-4 py-2 text-sm font-medium transition-colors duration-150 ${
                    dark
                      ? "bg-white text-ink hover:bg-white/85"
                      : "bg-ink text-white hover:bg-navy-2"
                  }`}
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </div>

          {/* Mobil: hover yok, hamburger her zaman görünür. */}
          <button
            type="button"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-label={open ? "Menüyü kapat" : "Menüyü aç"}
            className={`ml-4 flex h-9 w-9 shrink-0 items-center justify-center transition-colors duration-300 md:hidden ${
              dark ? "text-white" : "text-ink"
            }`}
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden="true"
            >
              {open ? (
                <path d="M6 6l12 12M18 6L6 18" />
              ) : (
                <path d="M3 7h18M3 12h18M3 17h18" />
              )}
            </svg>
          </button>
        </div>
      </header>

      {/* Mobil menü — tam ekran. Hap (z-100) üstte kalır, hamburger X'e döner. */}
      <div
        aria-hidden={!open}
        className={`fixed inset-0 z-[99] transition-opacity duration-300 md:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <div className="h-full w-full overflow-y-auto bg-cream/98 px-6 pt-28 pb-12 backdrop-blur-xl">
          <nav aria-label="Mobil menü" className="flex flex-col">
            {NAV_ITEMS.map((item, i) => {
              const dropdownItems = DROPDOWNS[item.label];
              const isMobileOpen = mobileOpenLabel === item.label;
              const stagger = {
                transitionDelay: open ? `${80 + i * 45}ms` : "0ms",
              };
              return (
                <div
                  key={item.href}
                  style={stagger}
                  className={`border-b border-line/70 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                    open
                      ? "translate-y-0 opacity-100"
                      : "translate-y-3 opacity-0"
                  }`}
                >
                  {dropdownItems ? (
                    <>
                      <button
                        type="button"
                        onClick={() =>
                          setMobileOpenLabel(isMobileOpen ? null : item.label)
                        }
                        aria-expanded={isMobileOpen}
                        tabIndex={open ? 0 : -1}
                        className="flex w-full items-center justify-between py-5 text-left"
                      >
                        <span className="font-display text-3xl text-ink">
                          {item.label}
                        </span>
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          aria-hidden="true"
                          className={`text-body transition-transform duration-300 ${isMobileOpen ? "rotate-180" : ""}`}
                        >
                          <path d="M6 9l6 6 6-6" />
                        </svg>
                      </button>

                      {/* Akordiyon: içerik yüksekliğine kadar yumuşak açılır. */}
                      <div
                        className={`grid transition-[grid-template-rows] duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                          isMobileOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                        }`}
                      >
                        <div className="overflow-hidden">
                          <div className="flex flex-col gap-1 pb-4">
                            {dropdownItems.map((s) => (
                              <Link
                                key={s.id}
                                href={`/${s.id}`}
                                onClick={() => setOpen(false)}
                                tabIndex={open && isMobileOpen ? 0 : -1}
                                className="flex flex-col gap-0.5 rounded-2xl bg-mist/60 px-4 py-3 transition-colors duration-150 active:bg-tint"
                              >
                                <span className="font-display text-lg text-ink">
                                  {s.name}
                                </span>
                                <span className="text-[13px] text-body/70">
                                  {s.sector}
                                </span>
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      tabIndex={open ? 0 : -1}
                      className="block py-5 font-display text-3xl text-ink"
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              );
            })}

            <a
              href={waLink(
                "Merhaba, sistemleriniz hakkında bilgi almak istiyorum.",
              )}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              tabIndex={open ? 0 : -1}
              style={{
                transitionDelay: open
                  ? `${80 + NAV_ITEMS.length * 45}ms`
                  : "0ms",
              }}
              className={`chamfer mt-8 flex items-center justify-center bg-ink px-5 py-4 text-[15px] font-medium text-white transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                open ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
              }`}
            >
              WhatsApp&apos;tan yaz
            </a>
          </nav>
        </div>
      </div>
    </>
  );
}
