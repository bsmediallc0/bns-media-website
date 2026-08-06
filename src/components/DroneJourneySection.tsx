import Reveal from "@/components/Reveal";
import TextReveal from "@/components/TextReveal";
import MediaCarousel from "@/components/MediaCarousel";
import { getMediaEntries } from "@/lib/mediaEntries";

export type DronePoint = { title: string; text: string };

// Tüm "Canlı X" drone içerik aboneliği ürünlerinin ortak vitrin bölümü:
// tam genişlik koyu blok + büyük kaydırılabilir kart günlüğü. Sayfa başına
// tek fark metinler ve hangi public/ klasöründen görsel okunacağı.
// data-nav-tone="dark" navbarın cam/koyu tona geçmesini sağlıyor.
export default function DroneJourneySection({
  heading,
  description,
  points,
  primaryFolder,
  fallbackFolder,
  titlePrefix,
  titleAccent,
  subtitle,
  badgeLabel,
  emptyHint,
}: {
  heading: string;
  description: string;
  points: DronePoint[];
  primaryFolder: string;
  fallbackFolder?: string;
  titlePrefix: string;
  titleAccent: string;
  subtitle: string;
  badgeLabel: string;
  emptyHint: string;
}) {
  const entries = getMediaEntries(primaryFolder, fallbackFolder);

  return (
    <section
      id="demo"
      data-nav-tone="dark"
      className="relative scroll-mt-4 overflow-hidden bg-ink"
    >
      {/* Yumuşak ışık lekeleri */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 -left-32 h-[420px] w-[420px] rounded-full bg-blue/20 blur-[120px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 -bottom-40 h-[420px] w-[420px] rounded-full bg-sky/15 blur-[120px]"
      />

      <div className="relative mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-32">
        <Reveal>
          <h2 className="font-display mx-auto max-w-3xl text-center text-[clamp(2.5rem,5.5vw,4rem)] leading-[1.1] text-white">
            <TextReveal text={heading} />
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-center text-lg leading-relaxed text-white/60">
            {description}
          </p>
        </Reveal>

        <Reveal delay={120} className="mt-14">
          <MediaCarousel
            entries={entries}
            titlePrefix={titlePrefix}
            titleAccent={titleAccent}
            subtitle={subtitle}
            badgeLabel={badgeLabel}
            emptyHint={emptyHint}
          />
        </Reveal>

        <Reveal delay={200}>
          <div className="mt-14 grid gap-6 border-t border-white/10 pt-10 sm:grid-cols-3">
            {points.map((p) => (
              <div key={p.title}>
                <div className="flex items-center gap-2">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#3E86E8"
                    strokeWidth="2.5"
                    aria-hidden="true"
                    className="shrink-0"
                  >
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="font-display text-lg text-white">{p.title}</p>
                </div>
                <p className="mt-1.5 text-[15px] leading-relaxed text-white/55">
                  {p.text}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
