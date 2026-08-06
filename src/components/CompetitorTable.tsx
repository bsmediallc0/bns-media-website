import Reveal from "./Reveal";

const ROWS = [
  {
    label: "Teslim tarihi",
    them: "Belirsiz, sık gecikir",
    us: "Sözleşmede yazılı, net tarih",
    icon: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 3" />
      </>
    ),
  },
  {
    label: "SEO altyapısı",
    them: "Ek ücretli hizmet",
    us: "Her pakette standart",
    icon: (
      <>
        <circle cx="11" cy="11" r="7" />
        <path d="M21 21l-4.35-4.35" />
      </>
    ),
  },
  {
    label: "Revize hakkı",
    them: "Sınırlı, sonrası ücretli",
    us: "Sınırsız",
    icon: (
      <>
        <path d="M21 12a9 9 0 1 1-3-6.7" />
        <path d="M21 3v6h-6" />
      </>
    ),
  },
  {
    label: "Site sahipliği",
    them: "Kira modeli, siz sahip olamazsınız",
    us: "Alan adı ve site size ait",
    icon: (
      <>
        <path d="M4 21V9l8-6 8 6v12" />
        <path d="M9 21v-6h6v6" />
      </>
    ),
  },
  {
    label: "Teslimden sonra",
    them: "Proje biter, destek biter",
    us: "Yıllık bakım ve güncelleme dahil",
    icon: (
      <>
        <rect x="3" y="4" width="18" height="18" rx="2" />
        <path d="M3 10h18M8 2v4M16 2v4" />
      </>
    ),
  },
  {
    label: "İletişim",
    them: "Ticket sistemi, günler sürer",
    us: "WhatsApp'tan doğrudan, aynı gün",
    icon: (
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5Z" />
    ),
  },
  {
    label: "Fiyat",
    them: "Belirsiz, pazarlığa açık",
    us: "Net teklif, gizli süreç yok",
    icon: (
      <>
        <path d="M12 2v20" />
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H7" />
      </>
    ),
  },
] as const;

// Ease/Daylight tarzı editoryal kıyaslama: solda düz/mat "eski yöntem" kartı,
// sağda çizgili dokulu mavi gradyan "bizim yöntem" kartı — satır başına ikon,
// tek bakışta okunur kısa kıyaslama.
export default function CompetitorTable() {
  return (
    <section className="relative overflow-hidden bg-cream">
      <div className="relative mx-auto max-w-4xl px-5 py-24 sm:px-8 sm:py-32">
        <Reveal>
          <span className="mono-label text-xs font-bold tracking-wide text-blue">
            NASIL KIYASLIYORUZ
          </span>
          <h2 className="font-display mt-4 max-w-xl text-3xl leading-[1.1] text-ink sm:text-4xl">
            Her ajans aynı işi yapmıyor.
          </h2>
          <p className="mt-3 text-body">Aynı hizmet, çok farklı bir anlaşma.</p>
        </Reveal>

        <div className="mt-10 grid gap-4 lg:grid-cols-2">
          <Reveal>
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
                        {row.them}
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

          <Reveal delay={100}>
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
                        {row.us}
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
