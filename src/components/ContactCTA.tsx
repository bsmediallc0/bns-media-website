import Reveal from "./Reveal";
import Ambient from "./Ambient";
import LeadForm from "./LeadForm";
import { waLink } from "@/lib/site";

export default function ContactCTA() {
  return (
    <section className="relative overflow-hidden bg-cream">
      <Ambient variant="light" />
      <div className="relative mx-auto grid max-w-5xl gap-10 px-5 py-24 sm:px-8 sm:py-32 lg:grid-cols-2 lg:items-center lg:gap-16">
        <Reveal>
          <span className="mono-label text-xs font-bold tracking-wide text-blue">
            İletişim
          </span>
          <h2 className="font-display mt-4 text-3xl leading-[1.15] sm:text-4xl">
            Sistemini konuşalım.
          </h2>
          <p className="mt-4 max-w-md text-body leading-relaxed">
            Formu doldur, anında sana dönüş yapalım. Görüşme ücretsiz, lafı
            dolandırmıyoruz.
          </p>
          <a
            href={waLink(
              "Merhaba, işletmem için sistem kurmayı konuşmak istiyorum.",
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="chamfer wa-pulse mt-8 inline-flex items-center gap-2 bg-wa px-6 py-3.5 text-[15px] font-medium text-wa-ink transition-colors duration-150 hover:bg-[#1fbd5a]"
          >
            WhatsApp&apos;tan yaz
          </a>
        </Reveal>

        <Reveal delay={100}>
          <LeadForm />
        </Reveal>
      </div>
    </section>
  );
}
