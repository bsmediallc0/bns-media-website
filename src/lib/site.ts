// Tek yerden yönetilen site sabitleri.
export const WHATSAPP_NUMBER = "905452098307";

export function waLink(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const NAV_ITEMS = [
  { label: "Sistemler", href: "/#sistemler" },
  { label: "Hizmetler", href: "#hizmetler" },
  { label: "Referanslar", href: "/referanslar" },
  { label: "Blog", href: "/blog" },
  { label: "İletişim", href: "/iletisim" },
] as const;

export const SERVICES = [
  {
    id: "web-tasarim",
    name: "Web Tasarım",
    sector: "Sektör Bağımsız",
  },
  {
    id: "google-isletme-profili",
    name: "Google İşletme Profili",
    sector: "Yerel SEO",
  },
  {
    id: "reklam-yonetimi",
    name: "Reklam Yönetimi",
    sector: "Google & Meta Ads",
  },
  {
    id: "canli-santiye",
    name: "Canlı Şantiye",
    sector: "İnşaat · Kentsel Dönüşüm",
  },
  {
    id: "canli-mekan",
    name: "Canlı Mekan",
    sector: "Emlak · Villa Satışı",
  },
] as const;

// Gerçek referans projeler — bilgiler kendi canlı sitelerinden alındı.
export const REFERENCES = [
  {
    id: "otlubey",
    name: "Otlubey Architect",
    sector: "Mimarlık & İç Mimari",
    url: "https://otlubeyarchitect.com",
    system: "Kurumsal Vitrin Sitesi",
    desc: "İstanbul merkezli, Dubai ve Barcelona'da da proje yürüten bir mimarlık ofisi. Sitesini uçtan uca kurduk — konsept anlatımından proje galerisine kadar.",
  },
  {
    id: "cumaogullari",
    name: "Cumaoğulları İnşaat",
    sector: "İnşaat · Kentsel Dönüşüm",
    url: "https://cumaogullarinşaat.com",
    system: "ŞantiyeOS",
    desc: "İstanbul Bahçelievler'de kentsel dönüşüm yürütüyor. Aktif şantiyelerini canlı tamamlanma yüzdesiyle site üzerinden takip ettiriyor.",
  },
  {
    id: "mbsshuttle",
    name: "MBS Shuttle",
    sector: "VIP Transfer",
    url: "https://mbsshuttle.com",
    system: "Rezervasyon Sistemi",
    desc: "İstanbul'un iki havalimanından şehir içine sabit fiyatlı VIP transfer. Rezervasyon akışı ve müşteri yorumları site üzerinde canlı çalışıyor.",
  },
  {
    id: "sevindir",
    name: "Sevindir İnşaat",
    sector: "İnşaat · Kentsel Dönüşüm",
    url: "https://sevindirinşaat.com",
    system: "ŞantiyeOS",
    desc: "Avcılar bölgesinde depreme dayanıklı kentsel dönüşüm projeleri yürütüyor. Aktif şantiyelerini tamamlanma yüzdesiyle canlı gösteriyor.",
  },
] as const;

export const SYSTEMS = [
  {
    id: "vitrinos",
    name: "VitrinOS",
    sector: "Emlak Ofisleri",
    tagline:
      "Yabancı alıcıya çok dilli portföy vitrini + AI ev turu videoları.",
    bullet: [
      "Çok dilli portföy vitrini",
      "AI ev turu videoları",
      "Filtreli ilan arama",
      "Bölge ve proje sayfaları",
      "WhatsApp müşteri hattı",
      "Portal bağımsızlığı",
    ],
    status: "live",
  },
  {
    id: "santiyeos",
    name: "ŞantiyeOS",
    sector: "İnşaat · Kentsel Dönüşüm",
    tagline:
      "Dakikalar içinde teklif hazırlayan AI + canlı şantiye takip sayfası.",
    bullet: [
      "AI teklif hazırlama modülü",
      "Canlı şantiye takip sayfası",
      "Proje ve daire galerileri",
      "Kat planı sunumları",
      "Alıcı bilgilendirme akışı",
      "Kurumsal kimlik sitesi",
    ],
    status: "live",
  },
  {
    id: "klinikos",
    name: "KlinikOS",
    sector: "Diş · Estetik · Klinik",
    tagline: "Göz kamaştıran vitrin + arka planda hasta takip sistemi.",
    bullet: [
      "Hasta takip sistemi (CRM)",
      "Online randevu yönetimi",
      "Çok dilli klinik vitrini",
      "Tedavi ve hizmet sayfaları",
      "Öncesi-sonrası galerisi",
      "WhatsApp hasta hattı",
    ],
    status: "soon",
  },
  {
    id: "canli-santiye",
    name: "Canlı Şantiye",
    sector: "İnşaat · Kentsel Dönüşüm",
    tagline:
      "Drone çekimiyle şantiyenizi hak sahibine her zaman güncel gösteren takip sayfası.",
    bullet: [
      "Drone + saha çekimi bize ait",
      "İnşaat Günlüğü — zaman çizelgesi",
      "Sabit çekim açıları",
      "Sizin iş yükünüz sıfır",
      "Kesintisiz gösterim",
      "Tek link, uygulama yok",
    ],
    status: "live",
  },
] as const;
