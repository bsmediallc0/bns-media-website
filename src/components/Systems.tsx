import Reveal from "./Reveal";
import TiltCard from "./TiltCard";
import Ambient from "./Ambient";
import DotSpotlight from "./DotSpotlight";
import { SYSTEMS } from "@/lib/site";

export default function Systems() {
  return (
    <section id="sistemler" className="relative overflow-hidden bg-mist">
      <Ambient variant="light" />
      <DotSpotlight variant="light" />
      <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
        <Reveal>
          <span className="mono-label mx-auto block w-fit text-center text-xs font-bold tracking-wide text-blue">
            Sistemler
          </span>
          <h2 className="font-display mx-auto mt-4 max-w-2xl text-center text-[clamp(2.5rem,5vw,4rem)] leading-[1.15]">
            Sektörüne göre hazır sistemler.
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-center text-lg text-body">
            Her sistem işletmenize özel uyarlanır.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {SYSTEMS.map((s, i) => (
            <Reveal key={s.id} delay={i * 80} className="h-full">
              <TiltCard className="h-full rounded-3xl">
                <div
                  className={`flex h-full min-h-[400px] flex-col rounded-3xl p-6 ${
                    ["bg-white", "bg-mint", "bg-tint", "bg-white"][i % 4]
                  }`}
                >
                  <span className="mono-label text-sm text-body/70">{s.sector}</span>
                  <div className="mt-3 flex items-center gap-3">
                    <h3 className="font-display text-2xl">{s.name}</h3>
                    {s.status === "soon" && (
                      <span className="mono-label rounded-full bg-white/70 px-3 py-1 text-xs text-body">
                        Yakında
                      </span>
                    )}
                  </div>
                  <p className="mt-2 text-[15px] leading-relaxed text-body">{s.tagline}</p>

                  <ul className="mt-4 flex-1 space-y-2 border-t border-ink/10 pt-4">
                    {s.bullet.map((b) => (
                      <li key={b} className="flex items-start gap-2.5 text-[14px] text-body">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#1D5BBF" strokeWidth="2.5" aria-hidden="true" className="mt-0.5 shrink-0">
                          <path d="M5 13l4 4L19 7" />
                        </svg>
                        {b}
                      </li>
                    ))}
                  </ul>

                  <a
                    href={`/${s.id}`}
                    className="chamfer mt-5 inline-block bg-ink px-5 py-2.5 text-center text-sm font-medium text-white transition-colors duration-150 hover:bg-navy-2"
                  >
                    Daha fazla
                  </a>
                </div>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
