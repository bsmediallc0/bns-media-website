import type { Metadata } from "next";
import Image from "next/image";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { waLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "İletişim — B&S Media",
  description: "Sistemin hakkında konuşalım. WhatsApp'tan yaz ya da formu doldur.",
};

export default function Page() {
  return (
    <main className="relative">
      <Nav />

      <section data-nav-tone="dark" className="relative flex min-h-dvh flex-col overflow-hidden bg-ink">
        <Image src="/hero/5.jpg" alt="" fill priority sizes="100vw" className="object-cover" />
        <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-b from-ink/80 via-ink/50 to-ink/85" />

        <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-1 flex-col justify-center px-5 pt-32 pb-20 sm:px-8 sm:pt-40">
          <div className="grid gap-14 lg:grid-cols-2 lg:items-start">
            <div>
              <h1 className="font-display text-[clamp(2.4rem,6vw,3.6rem)] leading-[1.05] text-white">
                Sistemini konuşalım.
              </h1>
              <p className="mt-6 max-w-md text-base leading-relaxed text-white/70">
                Mesajına anında dönüyoruz. Görüşme ücretsiz, lafı
                dolandırmıyoruz.
              </p>

              <div className="mt-10 space-y-6">
                <a
                  href={waLink("Merhaba, işletmem için sistem kurmayı konuşmak istiyorum.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="chamfer wa-pulse inline-flex items-center gap-2 bg-wa px-6 py-3.5 text-sm font-medium text-wa-ink transition-colors duration-150 hover:bg-[#1fbd5a]"
                >
                  WhatsApp&apos;tan yaz
                </a>

                <div className="space-y-5 border-t border-white/15 pt-6">
                  <div>
                    <p className="mono-label text-xs text-white/50">Merkez Ofis</p>
                    <p className="mt-1 max-w-[240px] text-sm leading-relaxed text-white/70">
                      Sakızağacı Mh. İstanbul Cd. 52/15
                      <br />
                      Bakırköy / İstanbul / Türkiye
                    </p>
                  </div>

                  <div>
                    <p className="mono-label text-xs text-white/50">Antalya Ofisi</p>
                    <p className="mt-1 max-w-[240px] text-sm leading-relaxed text-white/70">
                      Güzeloba, 2382. Sk. No:6 D:1
                      <br />
                      07230 Muratpaşa / Antalya / Türkiye
                    </p>
                  </div>

                  <div>
                    <p className="mono-label text-xs text-white/50">E-posta</p>
                    <a
                      href="mailto:info@bnsmedia.co"
                      className="mt-1 block text-sm text-white/70 transition-colors duration-150 hover:text-white"
                    >
                      info@bnsmedia.co
                    </a>
                  </div>

                  <div>
                    <p className="mono-label text-xs text-white/50">Yanıt süresi</p>
                    <p className="mt-1 text-sm text-white/70">7/24 mesaj, anında dönüş</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-line bg-white p-6 shadow-[0_30px_60px_-40px_rgba(20,33,54,0.2)] sm:p-8">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
