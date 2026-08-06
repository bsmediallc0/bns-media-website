import Reveal from "./Reveal";
import Ambient from "./Ambient";

const STEPS = [
  {
    n: "01",
    title: "Tanışma görüşmesi",
    text: "İşletmenizi ve hedeflerinizi dinliyoruz. İhtiyaç analizi bizden — görüşme ücretsiz.",
  },
  {
    n: "02",
    title: "Tasarım ve kurulum",
    text: "Tasarımı birlikte netleştiriyoruz, sistemi kuruyoruz. Web sitesi 5 günde, sektörel sistemler 10-14 günde yayında.",
  },
  {
    n: "03",
    title: "Yayın ve sürekli destek",
    text: "Sistem çalışmaya başlar; güncelleme, bakım ve geliştirmeler bizim sorumluluğumuzda.",
  },
] as const;

export default function Steps() {
  return (
    <section id="surec" className="relative overflow-hidden bg-cream">
      <Ambient variant="light" />
      <div className="relative mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-32">
        <Reveal>
          <span className="mono-label mx-auto block w-fit text-center text-xs font-bold tracking-wide text-blue">
            Süreç
          </span>
          <h2 className="font-display mt-6 text-center text-[clamp(2.5rem,5vw,4rem)] leading-[1.15]">
            Üç adımda yayında.
          </h2>
        </Reveal>

        <div className="relative mt-16 grid gap-10 md:grid-cols-3 md:gap-6">
          <div
            aria-hidden="true"
            className="absolute top-7 right-[16%] left-[16%] hidden border-t border-line md:block"
          />
          {STEPS.map((s, i) => (
            <Reveal key={s.n} delay={i * 100}>
              <div className="flex flex-col items-center text-center">
                <div className="chamfer relative z-10 flex h-14 w-14 items-center justify-center bg-ink">
                  <span className="font-display text-lg text-white">{s.n}</span>
                </div>
                <h3 className="font-display mt-6 text-2xl">{s.title}</h3>
                <p className="mt-3 max-w-xs text-base leading-relaxed text-body">
                  {s.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={150}>
          <div className="card-hover mx-auto mt-16 max-w-xl rounded-3xl bg-tint px-6 py-5 text-center">
            <p className="text-base text-body">
              <span className="font-display text-blue">
                5 günden itibaren yayında garantisi
              </span>{" "}
              — teslim tarihi hizmete göre değişir, sözleşmeyle netleşir.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
