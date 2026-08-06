import Reveal from "./Reveal";
import TiltCard from "./TiltCard";
import Ambient from "./Ambient";

const REASONS = [
  {
    title: "5 günden itibaren yayında",
    text: "Web sitesi 5 günde, sektörel sistemler 10-14 günde yayında. Bu bir hedef değil, sözleşmeyle verdiğimiz garantidir.",
    icon: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 3" />
      </>
    ),
  },
  {
    title: "Site ve domain sizin",
    text: "Kira modeliyle çalışmıyoruz. Kurduğumuz her şeyin sahibi işletmenizdir.",
    icon: (
      <>
        <circle cx="8" cy="15" r="4" />
        <path d="M10.5 12.5 20 3M17 6l3 3M14 9l2 2" />
      </>
    ),
  },
  {
    title: "Tek muhatap",
    text: "Çağrı merkezi, ticket, bekleme yok. Sistemi kuran ekibe doğrudan ulaşırsınız.",
    icon: (
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5Z" />
    ),
  },
  {
    title: "Teslim edip kaybolmayız",
    text: "Yayına girdikten sonra güncellemeler ve bakımla yanınızda kalırız.",
    icon: (
      <>
        <path d="M21 12a9 9 0 1 1-3-6.7" />
        <path d="M21 3v6h-6" />
      </>
    ),
  },
] as const;

export default function WhyBNS() {
  return (
    <section id="neden" className="relative overflow-hidden bg-mist">
      <Ambient variant="light" />
      <div className="relative mx-auto max-w-5xl px-5 py-24 sm:px-8 sm:py-32">
        <Reveal>
          <span className="mono-label text-xs font-bold tracking-wide text-blue">
            Neden B&amp;S Media
          </span>
          <h2 className="font-display mt-6 max-w-xl text-[clamp(2.5rem,5vw,4rem)] leading-[1.12] text-ink">
            Güvenmen için dört sebep.
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-3 sm:grid-cols-2">
          {REASONS.map((r, i) => (
            <Reveal key={r.title} delay={i * 90} className="h-full">
              <TiltCard className="h-full rounded-3xl">
                <div className="h-full rounded-3xl bg-white p-8">
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#142136"
                    strokeWidth="1.6"
                    aria-hidden="true"
                  >
                    {r.icon}
                  </svg>
                  <h3 className="font-display mt-6 text-2xl text-ink">
                    {r.title}
                  </h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-body">
                    {r.text}
                  </p>
                </div>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
