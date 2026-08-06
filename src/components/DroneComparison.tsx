import Reveal from "@/components/Reveal";
import TextReveal from "@/components/TextReveal";
import Ambient from "@/components/Ambient";
import DotSpotlight from "@/components/DotSpotlight";

export type ComparisonColumn = { key: string; label: string; sub: string };
export type ComparisonRow = { label: string } & Record<string, string>;

function Cell({ text, strong }: { text: string; strong?: boolean }) {
  if (strong) {
    return (
      <div className="flex items-start gap-2">
        <svg
          width="15"
          height="15"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#1D5BBF"
          strokeWidth="2.5"
          aria-hidden="true"
          className="mt-1 shrink-0"
        >
          <path d="M5 13l4 4L19 7" />
        </svg>
        <span className="text-[15px] leading-snug font-medium text-ink">
          {text}
        </span>
      </div>
    );
  }
  return <span className="text-[15px] leading-snug text-body/70">{text}</span>;
}

// Tüm "Canlı X" ürünlerinin ortak 3 sütunlu kıyaslama bölümü. Hangi
// alternatiflerle karşılaştırdığımız (WhatsApp fotoğrafı, sabit kamera,
// profesyonel fotoğrafçı vb.) her ürüne göre değişir — bkz. çağıran sayfa.
export default function DroneComparison({
  eyebrow,
  heading,
  description,
  columns,
  rows,
  closing,
}: {
  eyebrow: string;
  heading: string;
  description: string;
  columns: readonly ComparisonColumn[];
  rows: readonly ComparisonRow[];
  closing: React.ReactNode;
}) {
  const lastKey = columns[columns.length - 1]!.key;

  return (
    <section className="relative overflow-hidden bg-mist">
      <Ambient variant="light" />
      <DotSpotlight variant="light" />
      <div className="relative mx-auto max-w-5xl px-5 py-24 sm:px-8 sm:py-32">
        <Reveal>
          <span className="mono-label mx-auto block w-fit text-xs tracking-wider text-body/60 uppercase">
            {eyebrow}
          </span>
          <h2 className="font-display mx-auto mt-4 max-w-2xl text-center text-[clamp(2.25rem,4.5vw,3.25rem)] leading-[1.15]">
            <TextReveal text={heading} />
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-center text-body">
            {description}
          </p>
        </Reveal>

        {/* Masaüstü: tek tablo */}
        <Reveal delay={120}>
          <div
            className="mt-12 hidden overflow-hidden rounded-3xl border border-line bg-white md:grid"
            style={{
              gridTemplateColumns: `1.1fr repeat(${columns.length}, 1fr)`,
            }}
          >
            <div className="border-b border-line p-5" />
            {columns.map((c) => (
              <div
                key={c.key}
                className={`border-b border-line p-5 text-center ${c.key === lastKey ? "bg-tint/50" : ""}`}
              >
                <p
                  className={`font-display text-lg ${c.key === lastKey ? "text-ink" : "text-body"}`}
                >
                  {c.label}
                </p>
                <p className="mono-label mt-0.5 text-xs text-body/60">
                  {c.sub}
                </p>
              </div>
            ))}

            {rows.map((r) => (
              <div key={r.label} className="contents">
                <div className="border-b border-line p-5 last:border-0">
                  <span className="mono-label text-[13px] text-body/70">
                    {r.label}
                  </span>
                </div>
                {columns.map((c) => (
                  <div
                    key={c.key}
                    className={`border-b border-line p-5 ${c.key === lastKey ? "bg-tint/50" : ""}`}
                  >
                    <Cell text={r[c.key] ?? ""} strong={c.key === lastKey} />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </Reveal>

        {/* Mobil: sütun başına kart */}
        <div className="mt-10 space-y-4 md:hidden">
          {columns.map((c, i) => (
            <Reveal key={c.key} delay={i * 80}>
              <div
                className={`rounded-3xl border p-5 ${
                  c.key === lastKey
                    ? "border-blue/30 bg-tint/50"
                    : "border-line bg-white"
                }`}
              >
                <p className="font-display text-xl text-ink">{c.label}</p>
                <p className="mono-label mt-0.5 text-xs text-body/60">
                  {c.sub}
                </p>
                <dl className="mt-4 space-y-3 border-t border-ink/10 pt-4">
                  {rows.map((r) => (
                    <div key={r.label}>
                      <dt className="mono-label text-[12px] text-body/60">
                        {r.label}
                      </dt>
                      <dd className="mt-0.5">
                        <Cell
                          text={r[c.key] ?? ""}
                          strong={c.key === lastKey}
                        />
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200}>
          <p className="font-display mt-10 text-center text-2xl text-ink sm:text-3xl">
            {closing}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
