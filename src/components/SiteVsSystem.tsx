import Reveal from "./Reveal";
import Ambient from "./Ambient";

const ROWS = [
  {
    label: "Teslim süresi",
    other: "Haftalar, bazen aylar",
    bns: "5 günden itibaren yayında",
    icon: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 3" />
      </>
    ),
  },
  {
    label: "Teslimattan sonra",
    other: "Proje biter, iletişim biter",
    bns: "Biz işletir, güncel tutarız",
    icon: (
      <>
        <path d="M21 12a9 9 0 1 1-3-6.7" />
        <path d="M21 3v6h-6" />
      </>
    ),
  },
  {
    label: "Sahiplik",
    other: "Yıllık kira modeli",
    bns: "Site ve domain sizin",
    icon: (
      <>
        <circle cx="8" cy="15" r="4" />
        <path d="M10.5 12.5 20 3M17 6l3 3M14 9l2 2" />
      </>
    ),
  },
  {
    label: "Tasarım",
    other: "Hazır şablon, herkesle aynı",
    bns: "Markanıza özel",
    icon: (
      <>
        <path d="M12 2 2 7l10 5 10-5-10-5Z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </>
    ),
  },
  {
    label: "Amaç",
    other: "Site teslim etmek",
    bns: "Müşteri kazandırmak",
    icon: (
      <>
        <circle cx="12" cy="12" r="9" />
        <circle cx="12" cy="12" r="4" />
      </>
    ),
  },
  {
    label: "Güncellemeler",
    other: "Her talep ayrı fatura",
    bns: "Destek kapsamında, aynı gün",
    icon: <path d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z" />,
  },
  {
    label: "Mobil ve hız",
    other: "Sonradan akla gelir",
    bns: "Telefonda kusursuz",
    icon: (
      <>
        <rect x="7" y="2" width="10" height="20" rx="2" />
        <path d="M11 18h2" />
      </>
    ),
  },
  {
    label: "İletişim",
    other: "E-posta, bekleme, ticket",
    bns: "WhatsApp — aynı gün dönüş",
    icon: (
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5Z" />
    ),
  },
] as const;

export default function SiteVsSystem() {
  return (
    <section className="relative overflow-hidden bg-cream">
      <Ambient variant="light" />
      <div className="relative mx-auto max-w-4xl px-5 py-24 sm:px-8 sm:py-32">
        <Reveal>
          <span className="mono-label text-xs font-bold tracking-wide text-blue">
            FARK
          </span>
          <h2 className="font-display mt-4 max-w-xl text-3xl leading-[1.1] text-ink sm:text-4xl">
            Sıradan ajans değil, sistem ortağı.
          </h2>
          <p className="mt-3 text-body">Aynı işi yapmıyoruz, aynı sonucu vermiyoruz.</p>
        </Reveal>

        <div className="mt-10 grid gap-4 lg:grid-cols-2">
          <Reveal delay={80}>
            <div className="h-full rounded-3xl bg-mist p-7 sm:p-8">
              <span className="mono-label text-[11px] tracking-wide text-body/50">
                ESKİ YÖNTEM
              </span>
              <h3 className="font-display mt-2 text-2xl text-body/70 sm:text-3xl">
                Klasik Ajanslar
              </h3>
              <ul className="mt-7 space-y-4 border-t border-ink/10 pt-6">
                {ROWS.map((row) => (
                  <li
                    key={row.label}
                    className="flex items-start gap-3 border-b border-ink/10 pb-4 last:border-none last:pb-0"
                  >
                    <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/70">
                      <svg
                        width="15"
                        height="15"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        aria-hidden="true"
                        className="text-body/40"
                      >
                        {row.icon}
                      </svg>
                    </span>
                    <div>
                      <p className="text-[15px] text-body/70 sm:text-base">
                        {row.other}
                      </p>
                      <p className="mono-label mt-1 text-[11px] tracking-wide text-body/40">
                        {row.label}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={160}>
            <div
              className="relative h-full overflow-hidden rounded-3xl p-7 sm:p-8"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(115deg, rgba(255,255,255,0.07) 0px, rgba(255,255,255,0.07) 2px, transparent 2px, transparent 34px), linear-gradient(135deg, #1D5BBF, #142136)",
              }}
            >
              <span className="mono-label rounded-full bg-white/15 px-3 py-1 text-[11px] tracking-wide text-white">
                B&amp;S MEDIA YÖNTEMİ
              </span>
              <h3 className="font-display mt-4 text-2xl text-white sm:text-3xl">
                Sistem Ortağın
              </h3>
              <ul className="mt-7 space-y-4 border-t border-white/20 pt-6">
                {ROWS.map((row) => (
                  <li
                    key={row.label}
                    className="flex items-start gap-3 border-b border-white/15 pb-4 last:border-none last:pb-0"
                  >
                    <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/10">
                      <svg
                        width="15"
                        height="15"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        aria-hidden="true"
                        className="text-sky"
                      >
                        {row.icon}
                      </svg>
                    </span>
                    <div>
                      <p className="text-[15px] font-semibold text-white sm:text-base">
                        {row.bns}
                      </p>
                      <p className="mono-label mt-1 text-[11px] tracking-wide text-white/50">
                        {row.label}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
