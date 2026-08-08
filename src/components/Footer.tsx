import Reveal from "./Reveal";
import BSLogo from "./BSLogo";
import { NAV_ITEMS, SERVICES, SYSTEM_PICKS, waLink } from "@/lib/site";

const COMPANY_LINKS = NAV_ITEMS.filter((item) => item.label !== "Sistemler" && item.label !== "Hizmetler");

export default function Footer() {
  return (
    <footer data-nav-tone="dark" className="relative overflow-hidden bg-ink">
      <div className="relative mx-auto max-w-6xl px-5 pt-10 pb-6 sm:px-8 sm:pt-12">
        <Reveal>
          <div className="grid gap-6 pb-7 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <p className="mono-label text-xs text-white/40">Sistemler</p>
              <ul className="mt-3 space-y-2">
                {SYSTEM_PICKS.map((s) => (
                  <li key={s.id}>
                    <a href={`/${s.id}`} className="text-sm text-white/65 transition-colors duration-150 hover:text-white">
                      {s.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="mono-label text-xs text-white/40">Hizmetler</p>
              <ul className="mt-3 space-y-2">
                {SERVICES.map((s) => (
                  <li key={s.id}>
                    <a href={`/${s.id}`} className="text-sm text-white/65 transition-colors duration-150 hover:text-white">
                      {s.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="mono-label text-xs text-white/40">Şirket</p>
              <ul className="mt-3 space-y-2">
                {COMPANY_LINKS.map((item) => (
                  <li key={item.href}>
                    <a href={item.href} className="text-sm text-white/65 transition-colors duration-150 hover:text-white">
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="mono-label text-xs text-white/40">İletişim</p>
              <ul className="mt-3 space-y-2">
                <li>
                  <a
                    href={waLink("Merhaba, sistemleriniz hakkında bilgi almak istiyorum.")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-white/65 transition-colors duration-150 hover:text-white"
                  >
                    WhatsApp&apos;tan yaz
                  </a>
                </li>
                <li className="text-sm text-white/65">7/24 mesaj, anında dönüş</li>
              </ul>
            </div>
          </div>
        </Reveal>

        <Reveal delay={80}>
          <div className="border-t border-white/10 pt-6">
            <p className="font-display text-center text-2xl leading-snug text-white sm:text-3xl lg:text-4xl">
              Bir sonraki projenizi birlikte hayata geçirelim.
            </p>

            <div className="mt-6 flex flex-col items-center justify-between gap-5 sm:flex-row sm:items-end">
              <span className="mono-label text-xs text-white/35">
                {`© ${new Date().getFullYear()} B&S Media`}
              </span>
              <BSLogo />
            </div>
          </div>
        </Reveal>
      </div>
    </footer>
  );
}
