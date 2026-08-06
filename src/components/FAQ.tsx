"use client";

import { useState } from "react";
import Reveal from "./Reveal";
import Ambient from "./Ambient";

const QA = [
  {
    q: "Kurulum süreci ne kadar sürüyor?",
    a: "Web sitesi 5 gün içinde yayında — bu süreyi aşarsak ücretiniz iade edilir. VitrinOS, ŞantiyeOS gibi sektörel sistemlerde standart kurulum 10-14 gün sürer. Teslim tarihi proje başında netleşir ve sözleşmeyle bağlanır.",
  },
  {
    q: "Sitenin ve alan adının sahibi kim oluyor?",
    a: "İşletmeniz. Sektörde yaygın olan yıllık kira modelinin aksine, kurduğumuz sistem ve alan adı size aittir. İş birliğimiz sona erse dahi siteniz sizinle kalır.",
  },
  {
    q: "Yıllık ücrete neler dahil, sonradan ek ücret çıkar mı?",
    a: "İçerik ve fiyat güncellemeleri, teknik bakım, hosting ve güvenlik güncellemeleri yıllık bedele dahildir. Kapsam dışı büyük bir talep olursa (yeni bir modül gibi) önce ayrı fiyat teklifiyle onayınıza sunulur — sürpriz fatura çıkmaz.",
  },
  {
    q: "Mevcut Booking, Airbnb veya portal hesaplarım etkilenir mi?",
    a: "Hayır. Kurduğumuz sistemler mevcut kanallarınızla birlikte çalışır; takvim senkronizasyonu sayesinde çifte rezervasyon riski oluşmaz. Amaç, mevcut kanallarınıza ek olarak size doğrudan ulaşan müşteri kazandırmaktır.",
  },
  {
    q: "Zaten bir web sitem var, yenileyebilir misiniz?",
    a: "Evet. Mevcut sitenizi ve içeriklerinizi değerlendirip korumaya değer olanları yeni sisteme taşırız. Alan adınız ve Google geçmişiniz kaybolmaz; geçiş kesintisiz planlanır.",
  },
  {
    q: "Google'da üst sıralara çıkar mıyım?",
    a: "Kurduğumuz her sistem teknik SEO standartlarıyla teslim edilir: hız, mobil uyum, doğru yapılandırılmış içerik ve Google Business entegrasyonu. Bulunurluğunuzu ölçülebilir şekilde artırmayı hedefleriz; kimseye 'birinci sıra' sözü vermeyiz — veren varsa sorgulayın.",
  },
  {
    q: "İçerikleri ve görselleri kim hazırlıyor?",
    a: "Metinleri sektörünüze uygun şekilde biz hazırlarız, onay sizindir. Görsellerinizi siz sağlayabilir veya mevcut materyallerinizden seçki yapabiliriz; gerekirse profesyonel çekim için yönlendirme yaparız.",
  },
  {
    q: "Sistemi kim yönetecek, teknik bilgi gerekiyor mu?",
    a: "Hayır. Günlük içerik ve fiyat güncellemeleri panel üzerinden birkaç tıkla yapılır. Teknik bakım ve altyapı güncellemeleri bize aittir.",
  },
  {
    q: "Süreç nasıl başlıyor?",
    a: "WhatsApp üzerinden veya telefonla ulaşmanız yeterli. Ücretsiz bir tanışma görüşmesinde ihtiyacınızı dinler, size özel çözümü ve takvimi netleştiririz. Mesajlara anında dönüş yaparız.",
  },
] as const;

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      id="sss"
      className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-mist"
    >
      <Ambient variant="light" />
      <div className="relative mx-auto max-w-3xl px-5 py-14 sm:px-8 sm:py-16">
        <Reveal>
          <h2 className="font-display text-center text-[clamp(2.5rem,5vw,4rem)] leading-[1.15]">
            Sıkça sorulan sorular
          </h2>
        </Reveal>

        <div className="mt-8 space-y-3">
          {QA.map((item, i) => {
            const open = openIndex === i;
            return (
              <Reveal key={item.q} delay={i * 40}>
                <div
                  className={`rounded-3xl transition-colors duration-200 ${
                    open ? "bg-tint" : "bg-white"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpenIndex(open ? null : i)}
                    aria-expanded={open}
                    className="flex w-full items-center gap-4 px-5 py-5 text-left"
                  >
                    <span className="flex-1 text-[15px] font-medium text-ink">
                      {item.q}
                    </span>
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#1D5BBF"
                      strokeWidth="2"
                      aria-hidden="true"
                      className={`shrink-0 transition-transform duration-200 ${open ? "rotate-45" : ""}`}
                    >
                      <path d="M12 5v14M5 12h14" />
                    </svg>
                  </button>
                  <div
                    className={`grid transition-all duration-300 ease-out ${
                      open
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-5 pb-4 text-[14px] leading-relaxed text-body">
                        {item.a}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
