"use client";

import { useState } from "react";
import Reveal from "@/components/Reveal";
import TiltCard from "@/components/TiltCard";
import { waLink } from "@/lib/site";
import type { SectorPackage } from "@/components/SectorPage";

const DISCOUNT_RATE = 0.25;

function formatTL(n: number): string {
  return Math.round(n).toLocaleString("tr-TR");
}

const WHATSAPP_ICON = (
  <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.28-1.38a9.9 9.9 0 0 0 4.7 1.2h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2Zm0 18.13h-.01a8.2 8.2 0 0 1-4.19-1.15l-.3-.18-3.13.82.84-3.05-.2-.31a8.22 8.22 0 0 1-1.26-4.39c0-4.54 3.7-8.24 8.25-8.24 2.2 0 4.27.86 5.83 2.42a8.19 8.19 0 0 1 2.41 5.83c0 4.55-3.7 8.25-8.24 8.25Zm4.52-6.17c-.25-.12-1.47-.72-1.69-.81-.23-.08-.4-.12-.56.13-.17.25-.65.81-.79.97-.15.17-.29.19-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.12-.15.16-.25.25-.42.08-.17.04-.31-.02-.43-.06-.13-.56-1.35-.77-1.84-.2-.49-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.23.25-.86.84-.86 2.05s.88 2.38 1 2.55c.13.17 1.73 2.64 4.18 3.7.58.25 1.04.4 1.39.51.59.19 1.12.16 1.54.1.47-.07 1.47-.6 1.68-1.18.2-.58.2-1.08.14-1.18-.06-.1-.23-.16-.48-.28Z" />
);

function PackageCard({
  p,
  i,
  name,
  isMonthly,
  isOnce,
  showPrice,
  startingFrom,
  plainPrice,
  annualPrepayMonths,
}: {
  p: SectorPackage;
  i: number;
  name: string;
  isMonthly: boolean;
  isOnce: boolean;
  showPrice: boolean;
  startingFrom: boolean;
  plainPrice: boolean;
  annualPrepayMonths?: number;
}) {
  const [addonOn, setAddonOn] = useState(false);
  const hasAddon = !!p.addon;
  const baseTL = p.priceTL + (addonOn && p.addon ? p.addon.priceTL : 0);
  const discounted = Math.round(baseTL * (1 - DISCOUNT_RATE));
  // Sayfa geneli fiyatlı olsa da tek tek paketler "Bilgi Al"a çevrilebilir
  // (ör. en üst/kurumsal kademe) — quoteOnly bunun için var.
  const cardShowsPrice = showPrice && !p.quoteOnly;
  const waMessage =
    hasAddon && addonOn
      ? `Merhaba, ${name} ${p.name} paketi + ${p.addon!.label} hakkında bilgi almak istiyorum.`
      : `Merhaba, ${name} ${p.name} paketi hakkında bilgi almak istiyorum.`;

  return (
    <Reveal
      delay={i * 90}
      className="h-full w-full shrink-0 snap-center sm:w-[380px] lg:w-auto"
    >
      <TiltCard
        className={`h-full rounded-3xl ${p.highlight ? "z-10 lg:-translate-y-4" : ""}`}
      >
        <div
          className={`relative flex h-full flex-col rounded-3xl p-8 ${
            p.highlight ? "bg-[#F3F7FD]" : "bg-mist"
          }`}
        >
          {p.highlight && (
            <span className="mono-label mb-3 w-fit rounded-full bg-blue px-3.5 py-1 text-xs text-white">
              En çok tercih edilen
            </span>
          )}
          <h3 className="font-display text-2xl">{p.name}</h3>
          <p className="mt-2 text-[15px] text-body">{p.desc}</p>

          {cardShowsPrice ? (
            startingFrom ? (
              <>
                <p className="font-display mt-4 text-3xl leading-tight text-ink transition-all duration-200">
                  {`${formatTL(baseTL)} TL'den başlıyor`}
                </p>
                <p className="mono-label mt-1 text-xs text-blue">+ KDV</p>
              </>
            ) : plainPrice ? (
              <>
                <p className="font-display mt-4 text-3xl leading-tight text-ink transition-all duration-200">
                  {`${formatTL(baseTL)} TL'den başlıyor`}
                </p>
                <p className="mono-label mt-1 text-xs text-blue">
                  + KDV{isOnce ? "" : ` / ${isMonthly ? "ay" : "yıl"}`}
                </p>
                {!isOnce && isMonthly && annualPrepayMonths && (
                  <p className="mt-1.5 text-sm text-body">
                    Yıllık öde:{" "}
                    <span className="font-medium text-ink">
                      {annualPrepayMonths} ay fiyatına 12 ay kullan
                    </span>{" "}
                    — {formatTL(baseTL * annualPrepayMonths)} TL/yıl
                  </p>
                )}
              </>
            ) : (
              <>
                <p className="mono-label mt-4 text-xs text-body line-through decoration-1">
                  {formatTL(baseTL)} TL
                </p>
                <p className="font-display mt-1 text-3xl leading-tight text-ink transition-all duration-200">
                  {`${formatTL(discounted)} TL'den başlıyor`}
                </p>
                <p className="mono-label mt-1 text-xs text-blue">
                  %25 indirimli · + KDV
                  {isOnce ? "" : ` / ${isMonthly ? "ay" : "yıl"}`}
                </p>
                {!isOnce && (
                  <p className="mt-1.5 text-sm text-body">
                    {isMonthly
                      ? `Yıllık yaklaşık ${formatTL(discounted * 12)} TL + KDV`
                      : `Aylık yaklaşık ${formatTL(discounted / 12)} TL + KDV`}
                  </p>
                )}
              </>
            )
          ) : (
            <p className="font-display mt-4 text-2xl text-ink">
              {p.quoteOnly ? "Size özel fiyat" : "Fiyat için teklif alın"}
            </p>
          )}

          {hasAddon && (
            <button
              type="button"
              onClick={() => setAddonOn((v) => !v)}
              aria-pressed={addonOn}
              className={`mt-5 flex w-full cursor-pointer items-center justify-between gap-3 rounded-xl border p-3.5 text-left transition-colors duration-150 ${
                addonOn ? "border-blue/40 bg-blue/5" : "border-ink/10 bg-white"
              }`}
            >
              <span className="flex flex-col">
                <span className="text-[13px] font-semibold text-ink">
                  {p.addon!.label}
                </span>
                {cardShowsPrice && (
                  <span className="mono-label text-[11px] text-body/70">
                    +
                    {formatTL(
                      Math.round(p.addon!.priceTL * (1 - DISCOUNT_RATE)),
                    )}{" "}
                    TL / {isMonthly ? "ay" : "yıl"}
                  </span>
                )}
              </span>
              <span
                role="switch"
                aria-checked={addonOn}
                aria-label={p.addon!.label}
                className={`relative h-6 w-11 shrink-0 rounded-full transition-colors duration-200 ${
                  addonOn ? "bg-blue" : "bg-line-dark"
                }`}
              >
                <span
                  aria-hidden="true"
                  className={`absolute top-0.5 left-0.5 h-5 w-5 rounded-full bg-white shadow transition-transform duration-200 ${
                    addonOn ? "translate-x-5" : "translate-x-0"
                  }`}
                />
              </span>
            </button>
          )}

          <ul className="mt-5 flex-1 space-y-2.5 border-t border-ink/10 pt-5">
            {p.features.map((f) => {
              const isStandout = f === p.standoutFeature;
              if (isStandout) {
                return (
                  <li key={f}>
                    <span className="flex items-center gap-2 rounded-full border border-blue/30 bg-blue/10 px-3.5 py-2 text-[14px] font-semibold text-blue">
                      <svg
                        width="15"
                        height="15"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        aria-hidden="true"
                        className="shrink-0"
                      >
                        <path d="M12 2 2 7l10 5 10-5-10-5Z" />
                        <path d="M2 17l10 5 10-5M2 12l10 5 10-5" />
                      </svg>
                      {f}
                    </span>
                  </li>
                );
              }
              return (
                <li
                  key={f}
                  className="flex items-start gap-2.5 text-[15px] leading-relaxed text-body"
                >
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#1D5BBF"
                    strokeWidth="2.5"
                    aria-hidden="true"
                    className="mt-0.5 shrink-0"
                  >
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                  {f}
                </li>
              );
            })}
            {hasAddon &&
              addonOn &&
              p.addon!.features?.map((f) => (
                <li
                  key={f}
                  className="flex items-start gap-2.5 text-[15px] leading-relaxed font-medium text-blue"
                >
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#1D5BBF"
                    strokeWidth="2.5"
                    aria-hidden="true"
                    className="mt-0.5 shrink-0"
                  >
                    <path d="M12 5v14M5 12h14" />
                  </svg>
                  {f}
                </li>
              ))}
          </ul>

          <a
            href={waLink(waMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className={`chamfer mt-6 inline-flex items-center justify-center gap-2 px-5 py-3 text-center text-sm font-medium transition-colors duration-150 ${
              p.highlight
                ? "bg-blue text-white hover:bg-blue-dark"
                : "bg-ink text-white hover:bg-navy-2"
            }`}
          >
            <svg
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
              className="shrink-0"
            >
              {WHATSAPP_ICON}
            </svg>
            {cardShowsPrice
              ? "İletişime geç"
              : p.quoteOnly
                ? "Bilgi Al"
                : "Teklif al"}
          </a>
        </div>
      </TiltCard>
    </Reveal>
  );
}

export default function PackagesGrid({
  packages,
  name,
  isMonthly,
  isOnce = false,
  showPrice,
  startingFrom = false,
  plainPrice = false,
  annualPrepayMonths,
}: {
  packages: SectorPackage[];
  name: string;
  isMonthly: boolean;
  isOnce?: boolean;
  showPrice: boolean;
  startingFrom?: boolean;
  plainPrice?: boolean;
  annualPrepayMonths?: number;
}) {
  return (
    <div className="mt-14 -mx-5 flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-pl-5 px-5 pb-4 sm:-mx-8 sm:px-8 lg:mx-0 lg:grid lg:grid-cols-3 lg:gap-6 lg:overflow-visible lg:px-0 lg:pb-0">
      {packages.map((p, i) => (
        <PackageCard
          key={p.name}
          p={p}
          i={i}
          name={name}
          isMonthly={isMonthly}
          isOnce={isOnce}
          showPrice={showPrice}
          startingFrom={startingFrom}
          plainPrice={plainPrice}
          annualPrepayMonths={annualPrepayMonths}
        />
      ))}
    </div>
  );
}
