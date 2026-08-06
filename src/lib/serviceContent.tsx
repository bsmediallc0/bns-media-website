import type { SectorConfig } from "@/components/SectorPage";
import DroneComparison, {
  type ComparisonColumn,
  type ComparisonRow,
} from "@/components/DroneComparison";

const SANTIYE_COMPARISON_COLUMNS: ComparisonColumn[] = [
  { key: "wa", label: "Bugünkü yöntem", sub: "WhatsApp'tan fotoğraf" },
  { key: "cam", label: "Sabit kamera", sub: "Şantiyeye kurulum" },
  { key: "bns", label: "Canlı Şantiye", sub: "B&S Media" },
];

const SANTIYE_COMPARISON_ROWS: ComparisonRow[] = [
  {
    label: "Kurulum maliyeti",
    wa: "Yok",
    cam: "Kamera, internet, montaj",
    bns: "Yok",
  },
  {
    label: "Görüntü kalitesi",
    wa: "Telefon karesi",
    cam: "Tek sabit açı",
    bns: "Profesyonel drone + saha",
  },
  {
    label: "Sizin iş yükünüz",
    wa: "Her ay siz uğraşırsınız",
    cam: "Bakım ve arıza sizde",
    bns: "Sıfır — hepsini biz yaparız",
  },
  {
    label: "Geçmişe bakabilme",
    wa: "Sohbette kaybolur",
    cam: "Kayıt genelde tutulmaz",
    bns: "Tarihli, sıralı arşiv",
  },
  {
    label: "Hak sahibi deneyimi",
    wa: "Dağınık, eksik",
    cam: "Tek noktaya bakar",
    bns: "İlk günden bugüne tüm süreç",
  },
  { label: "Arıza / hırsızlık riski", wa: "—", cam: "Var", bns: "Yok" },
  {
    label: "Sonraki projeye faydası",
    wa: "Yok",
    cam: "Yok",
    bns: "Hazır referans arşivi",
  },
];

export const WEB_TASARIM_CONTENT: SectorConfig = {
  kicker: "Sektör Bağımsız",
  name: "Web Tasarım",
  intro:
    "VitrinOS, ŞantiyeOS ve KlinikOS'un kapsamadığı işletmeler için hızlı, SEO uyumlu ve markanıza özel web sitesi tasarımı — 5 günde yayında, olmazsa ücretiniz iade.",
  deliveryLabel: "5 gün",
  heroImage: "/hero/2.jpg",
  pricingMode: "quote",
  guaranteeDays: 5,
  sections: [
    {
      id: "nedir",
      title: "Web Tasarım hizmeti kimin için?",
      paragraphs: [
        "Villa, emlak, inşaat veya klinik dışında bir sektörde çalışıyorsan — restoran, kurumsal firma, danışmanlık, e-ticaret, kişisel marka, ne olursa olsun — sana özel sektörel bir sistem kurmuyoruz ama aynı kalitede bir web sitesini senin için tasarlıyoruz.",
        "Fark, hazır şablon değil: markanıza özel tasarım, teknik SEO altyapısı ve mobil hız optimizasyonuyla teslim edilen bir site kuruyoruz. Amaç sadece 'güzel görünmek' değil, ölçülebilir sonuç almak.",
      ],
    },
    {
      id: "surec",
      title: "Süreç nasıl işliyor?",
      paragraphs: [
        "Kısa bir görüşmeyle işletmenizi, hedef kitlenizi ve mevcut içerik/görsel durumunuzu netleştiriyoruz.",
        "Tasarımı birlikte onaylıyoruz, sonra kurulum ve SEO altyapısını devreye alıyoruz. 5 gün içinde yayında garantisi veriyoruz — bu süreyi aşarsak ücretinizi iade ediyoruz.",
        "Yayına aldıktan sonra içerik güncellemeleri, teknik bakım ve güvenlik güncellemeleri bedele dahildir.",
      ],
    },
  ],
  features: [
    {
      title: "Markanıza özel tasarım",
      text: "Hazır şablon değil, kurumsal kimliğinize göre tasarlanmış, özgün bir site.",
      icon: (
        <>
          <path d="M12 2 2 7l10 5 10-5-10-5Z" />
          <path d="M2 17l10 5 10-5" />
          <path d="M2 12l10 5 10-5" />
        </>
      ),
    },
    {
      title: "Mobil uyumlu, hızlı sayfa",
      text: "Telefonda kusursuz görünüm ve yüksek sayfa hızı — Google bunu sıralamada dikkate alır.",
      icon: (
        <>
          <rect x="7" y="2" width="10" height="20" rx="2" />
          <path d="M11 18h2" />
        </>
      ),
    },
    {
      title: "Temel SEO altyapısı",
      text: "Meta etiketler, yapılandırılmış içerik ve teknik SEO standartlarıyla teslim edilir.",
      icon: (
        <>
          <circle cx="11" cy="11" r="7" />
          <path d="M21 21l-4.35-4.35" />
        </>
      ),
    },
    {
      title: "İletişim ve lead formu",
      text: "Ziyaretçiyi müşteriye çeviren, doğrudan WhatsApp'a veya e-postaya düşen form akışı.",
      icon: (
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5Z" />
      ),
    },
    {
      title: "SSL ve temel güvenlik",
      text: "Hosting, SSL sertifikası ve güvenlik güncellemeleri yıllık bedele dahildir.",
      icon: (
        <>
          <rect x="5" y="11" width="14" height="9" rx="2" />
          <path d="M8 11V8a4 4 0 0 1 8 0v3" />
        </>
      ),
    },
    {
      title: "CMS yönetim paneli",
      text: "İçerik ve fiyat güncellemelerini panelden birkaç tıkla siz yaparsınız, teknik bilgi gerekmez.",
      icon: (
        <>
          <rect x="3" y="4" width="18" height="18" rx="2" />
          <path d="M3 10h18M8 2v4M16 2v4" />
        </>
      ),
    },
  ],
  packages: [
    {
      name: "Landing Page",
      priceTL: 20000,
      desc: "Tek sayfalık, dönüşüm odaklı, lead toplama için ideal.",
      features: [
        "Tek sayfa, tek dönüşüm hedefi",
        "Mobil uyumlu responsive tasarım",
        "Temel SEO altyapısı",
        "SSL ve temel güvenlik",
        "İletişim / lead formu",
        "Sınırsız revize hakkı",
      ],
      standoutFeature: "Sınırsız revize hakkı",
      highlight: false,
    },
    {
      name: "Kurumsal Site",
      priceTL: 36667,
      desc: "Büyüyen işletmeler ve kurumlar için tamamen özel tasarım.",
      features: [
        "10+ sayfa, %100 özgün tasarım",
        "Gelişmiş SEO + Schema markup",
        "CMS yönetim paneli + blog altyapısı",
        "GA4 + Search Console entegrasyonu",
        "Sınırsız revize hakkı",
        "Öncelikli teknik destek",
      ],
      standoutFeature: "CMS yönetim paneli + blog altyapısı",
      highlight: true,
    },
    {
      name: "Özel Proje",
      priceTL: 80000,
      desc: "Çok dilli siteler, özel entegrasyonlar ve büyük ölçekli projeler için.",
      features: [
        "Sınırsız sayfa ve özel fonksiyonlar",
        "Çok dilli altyapı (hreflang)",
        "CRM/ERP/API entegrasyonları",
        "Kurumsal SEO + GA4 & Search Console",
        "Öncelikli proje yöneticisi",
        "Sınırsız revize hakkı",
      ],
      standoutFeature: "CRM/ERP/API entegrasyonları",
      highlight: false,
    },
  ],
  faq: [
    {
      q: "Bizim sektörümüz VitrinOS/ŞantiyeOS/KlinikOS'a girmiyor, ne yapmalıyız?",
      a: "Tam olarak bu hizmet sizin için. Sektörel sistem kurmuyoruz ama aynı kalite standardıyla markanıza özel bir web sitesi tasarlıyoruz.",
    },
    {
      q: "Sitenin ve alan adının sahibi kim oluyor?",
      a: "İşletmeniz. Kira modeliyle çalışmıyoruz; kurduğumuz site ve alan adı size aittir.",
    },
    {
      q: "Hangi paketi seçeceğimi bilmiyorum, nasıl karar vereceğim?",
      a: "Tek bir hedefiniz varsa (ör. kampanya için lead toplamak) Landing Page yeterlidir. Kurumsal kimliğinizi tam yansıtmak istiyorsanız Kurumsal Site, çok dilli veya entegrasyon ihtiyacınız varsa Özel Proje önerilir. Emin değilseniz WhatsApp'tan sorabilirsiniz.",
    },
    {
      q: "Google'da üst sıralara çıkar mıyım?",
      a: "Her paket teknik SEO standartlarıyla teslim edilir: hız, mobil uyum, doğru yapılandırılmış içerik. Bulunurluğunuzu ölçülebilir şekilde artırmayı hedefleriz; kimseye 'birinci sıra' sözü vermeyiz.",
    },
    {
      q: "İçerikleri ve görselleri kim hazırlıyor?",
      a: "Metinleri sektörünüze uygun şekilde biz hazırlarız, onay sizindir. Görsellerinizi siz sağlayabilir veya mevcut materyallerinizden seçki yapabiliriz.",
    },
    {
      q: "Zaten bir web sitem var, yenileyebilir misiniz?",
      a: "Evet. Mevcut sitenizi ve alan adınızı değerlendirip korumaya değer olanları yeni sisteme taşırız; Google geçmişiniz kaybolmaz.",
    },
    {
      q: "5 gün içinde yayına alamazsanız gerçekten para iade mi ediyorsunuz?",
      a: "Evet. Landing Page ve Kurumsal Site paketlerinde 5 iş günü içinde siteniz yayında olmazsa ücretinizin tamamını iade ediyoruz — koşulsuz. Özel Proje kapsamındaki büyük işlerde (çok dilli, özel entegrasyon) takvim ihtiyaç analizinden sonra ayrıca belirlenir, bu garanti standart paketler içindir.",
    },
    {
      q: "Kurulum ne kadar sürüyor?",
      a: "Standart kurulumlar (Landing Page, Kurumsal Site) 5 gün içinde yayına alınır, aksi halde ücret iade garantimiz devreye girer. Özel Proje kapsamındaki büyük işler için takvim, ihtiyaç analizinden sonra birlikte belirlenir.",
    },
    {
      q: "Ücrete neler dahil, sonradan ek ücret çıkar mı?",
      a: "İçerik güncellemeleri, teknik bakım, hosting, SSL ve güvenlik güncellemeleri bedele dahildir. Kapsam dışı büyük bir talep olursa önce ayrı fiyat teklifiyle onayınıza sunulur.",
    },
  ],
};

export const GOOGLE_ISLETME_PROFILI_CONTENT: SectorConfig = {
  kicker: "Yerel SEO",
  name: "Google İşletme Profili Yönetimi",
  intro:
    "İşletmenizi Google Haritalar'da ve 'yakınımda ...' aramalarında öne çıkaran profil kurulumu, optimizasyonu ve düzenli yönetimi — 5 günde yayında, olmazsa ücretiniz iade.",
  deliveryLabel: "5 gün",
  heroImage: "/hero/2.jpg",
  pricingMode: "quote",
  guaranteeDays: 5,
  sections: [
    {
      id: "nedir",
      title: "Google İşletme Profili Yönetimi nedir?",
      paragraphs: [
        "Müşterilerinizin çoğu sizi Google'da arıyor, ama profiliniz eksik, güncel değil veya hiç yönetilmiyorsa rakipleriniz önce çıkıyor. Bu hizmet, profilinizi kurar, doğrular ve düzenli olarak günceller.",
        "Sadece kurulum değil — kategori/bilgi optimizasyonu, fotoğraf yönetimi, yorum yanıtlama ve düzenli gönderi paylaşımıyla profilinizi 'aktif ve güvenilir' tutarız.",
      ],
    },
    {
      id: "surec",
      title: "Süreç nasıl işliyor?",
      paragraphs: [
        "Mevcut profilinizi (varsa) değerlendirir, eksikleri ve doğrulama durumunu netleştiririz.",
        "Kategori, açıklama, çalışma saatleri ve fotoğrafları optimize eder, düzenli yönetim paketindeyseniz aylık gönderi ve yorum takibini üstleniriz.",
        "Kendi tarafımızdaki kurulum ve optimizasyonu 5 iş günü içinde tamamlıyoruz, tamamlamazsak ücretinizi iade ediyoruz. Google'ın kendi doğrulama onayı bizim kontrolümüz dışında olduğu için bu adım bazen birkaç gün ek sürebilir — garanti bizim yaptığımız işi kapsar.",
      ],
    },
  ],
  features: [
    {
      title: "Profil kurulumu ve doğrulama",
      text: "Profiliniz sıfırdan kurulur veya mevcut profil devralınıp doğrulanır.",
      icon: (
        <>
          <circle cx="12" cy="12" r="9" />
          <path d="M12 7v5l3 3" />
        </>
      ),
    },
    {
      title: "Kategori ve bilgi optimizasyonu",
      text: "Doğru kategori, açıklama ve iletişim bilgileriyle arama eşleşmeniz güçlenir.",
      icon: (
        <>
          <circle cx="11" cy="11" r="7" />
          <path d="M21 21l-4.35-4.35" />
        </>
      ),
    },
    {
      title: "Fotoğraf ve görsel yönetimi",
      text: "Profesyonel görünen, güncel fotoğraflarla profiliniz güven verir.",
      icon: (
        <>
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <circle cx="9" cy="11" r="2" />
          <path d="M21 16l-5-4-4 3-3-2-4 3" />
        </>
      ),
    },
    {
      title: "Yorum yönetimi",
      text: "Gelen yorumlar düzenli takip edilir ve profesyonel şekilde yanıtlanır.",
      icon: (
        <path d="M12 17.3 6.2 20l1.1-6.4L2.5 9.1l6.4-.9L12 2.3l3.1 5.9 6.4.9-4.8 4.5L17.8 20Z" />
      ),
    },
    {
      title: "Düzenli gönderi paylaşımı",
      text: "Haber, kampanya ve güncellemeler profilinizde düzenli paylaşılır, profil 'aktif' görünür.",
      icon: (
        <>
          <rect x="3" y="4" width="18" height="18" rx="2" />
          <path d="M3 10h18M8 2v4M16 2v4" />
        </>
      ),
    },
    {
      title: "Performans raporlama",
      text: "Görüntülenme, arama ve yönlendirme verilerini düzenli raporlarız.",
      icon: (
        <>
          <path d="M3 20h18" />
          <rect x="5" y="12" width="4" height="8" />
          <rect x="10.5" y="7" width="4" height="13" />
          <rect x="16" y="4" width="4" height="16" />
        </>
      ),
    },
  ],
  packages: [
    {
      name: "Kurulum",
      priceTL: 16000,
      desc: "Profilini ilk kez oluşturacak veya tek seferlik düzenleme isteyen işletmeler için.",
      features: [
        "Profil kurulumu ve doğrulama",
        "Kategori ve bilgi optimizasyonu",
        "İlk fotoğraf yüklemesi",
        "Çalışma saatleri ve iletişim ayarları",
        "Kurulum sonrası kullanım rehberi",
      ],
      standoutFeature: "Profil kurulumu ve doğrulama",
      highlight: false,
    },
    {
      name: "Yönetim",
      priceTL: 26667,
      desc: "Profilinin sürekli güncel ve aktif kalmasını isteyen işletmeler için.",
      features: [
        "Kurulum paketindeki her şey",
        "Aylık gönderi paylaşımı",
        "Yorum yönetimi ve yanıtlama",
        "Düzenli fotoğraf güncellemesi",
        "Aylık performans raporu",
        "Öncelikli destek",
      ],
      standoutFeature: "Yorum yönetimi ve yanıtlama",
      highlight: true,
    },
    {
      name: "Kapsamlı Yerel SEO",
      priceTL: 42667,
      desc: "Çoklu şube veya rakip analizi gerektiren işletmeler için.",
      features: [
        "Yönetim paketindeki her şey",
        "Çoklu şube profil yönetimi",
        "Rakip analizi ve konumlandırma",
        "Yerel anahtar kelime stratejisi",
        "Haftalık gönderi paylaşımı",
        "Aylık strateji görüşmesi",
      ],
      standoutFeature: "Rakip analizi ve konumlandırma",
      highlight: false,
    },
  ],
  faq: [
    {
      q: "Google İşletme Profili ile web sitesi SEO'su aynı şey mi?",
      a: "Hayır, ikisi tamamlayıcıdır. Web sitesi SEO'su Google'ın organik arama sonuçlarını, İşletme Profili ise Google Haritalar ve 'yakınımda' aramalarını hedefler. İkisi birlikte çalıştığında en güçlü sonucu verir.",
    },
    {
      q: "Zaten bir profilim var ama kimse yönetmiyor, devralabilir misiniz?",
      a: "Evet. Mevcut profilinizin sahiplik/yönetici erişimini alıp devam ederiz; sıfırdan kurmanıza gerek yok.",
    },
    {
      q: "Kaç yorum/şikayet olursa olsun hepsini mi yanıtlıyorsunuz?",
      a: "Yönetim ve üstü paketlerde evet, gelen tüm yorumlar düzenli takip edilip yanıtlanır. Olumsuz yorumlarda sizinle birlikte en uygun yanıtı belirleriz.",
    },
    {
      q: "Sonuçları ne zaman görmeye başlarım?",
      a: "Profil optimizasyonunun etkisi genelde 4-8 hafta içinde arama görünürlüğünde fark yaratmaya başlar; kesin bir süre garantisi vermeyiz, bu Google'ın algoritmasına bağlıdır. Ancak kurulumun kendisi için net bir garantimiz var: 5 gün içinde tamamlamazsak ücretinizi iade ederiz.",
    },
    {
      q: "Birden fazla şubem var, her biri için ayrı mı ödeme yapmam gerekiyor?",
      a: "Kapsamlı Yerel SEO paketi çoklu şube yönetimini kapsar; şube sayısına göre fiyat netleşir, WhatsApp'tan detay alabilirsiniz.",
    },
    {
      q: "Sözleşme süresi ne kadar?",
      a: "Standart sözleşme 1 yıllıktır ve süre sonunda otomatik yenilenmez. Devam etmek isterseniz yeniden onay vermeniz yeterlidir.",
    },
  ],
};

export const REKLAM_YONETIMI_CONTENT: SectorConfig = {
  kicker: "Google & Meta Ads",
  name: "Reklam Yönetimi",
  intro:
    "Google Ads ve Meta (Instagram/Facebook) reklam kampanyalarınızı kuran, optimize eden ve raporlayan yönetim hizmeti — 5 günde yayında, olmazsa yönetim ücretiniz iade.",
  deliveryLabel: "5 gün",
  heroImage: "/hero/2.jpg",
  pricingMode: "quote",
  guaranteeDays: 5,
  sections: [
    {
      id: "nedir",
      title: "Reklam Yönetimi hizmeti ne kapsıyor?",
      paragraphs: [
        "Bu hizmet, reklam yönetim ücretidir — Google veya Meta'ya ödediğiniz reklam bütçesi ayrıdır ve doğrudan sizin hesabınızdan, sizin belirlediğiniz miktarda harcanır. Biz kampanyayı kurar, hedefler, optimize eder ve raporlarız.",
        "SEO sonuç vermesi zaman aldığı için, reklam yönetimi genelde SEO ile birlikte veya SEO sonuçları oluşana kadar köprü olarak kullanılır.",
      ],
    },
    {
      id: "surec",
      title: "Süreç nasıl işliyor?",
      paragraphs: [
        "Hedef kitlenizi, bütçenizi ve hedeflerinizi (arama/marka bilinirliği/dönüşüm) birlikte netleştiririz.",
        "Kampanyayı kurar, reklam metni ve görsellerini hazırlar, dönüşüm takibini bağlarız. 5 gün içinde kampanyanız yayında olmazsa yönetim ücretinizi iade ederiz.",
        "Kampanya yayında kaldıkça düzenli optimizasyon yapar, aylık performans raporu paylaşırız.",
      ],
    },
  ],
  features: [
    {
      title: "Kampanya kurulumu",
      text: "Google Ads ve/veya Meta Ads hesabınız kurulur, hedefleme ve bütçe yapılandırılır.",
      icon: (
        <>
          <rect x="3" y="4" width="18" height="18" rx="2" />
          <path d="M3 10h18M8 2v4M16 2v4" />
        </>
      ),
    },
    {
      title: "Hedef kitle belirleme",
      text: "Doğru kişilere, doğru zamanda ulaşacak hedefleme stratejisi kurulur.",
      icon: (
        <>
          <circle cx="12" cy="12" r="9" />
          <circle cx="12" cy="12" r="4" />
        </>
      ),
    },
    {
      title: "Reklam metni ve görsel",
      text: "Dönüşüm odaklı reklam metinleri ve görselleri hazırlanır.",
      icon: (
        <>
          <path d="M12 2 2 7l10 5 10-5-10-5Z" />
          <path d="M2 17l10 5 10-5" />
          <path d="M2 12l10 5 10-5" />
        </>
      ),
    },
    {
      title: "Bütçe optimizasyonu",
      text: "Kampanya performansına göre bütçe dağılımı düzenli olarak optimize edilir.",
      icon: <path d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z" />,
    },
    {
      title: "Dönüşüm takibi",
      text: "Form doldurma, arama, WhatsApp tıklaması gibi dönüşümler ölçülebilir hale getirilir.",
      icon: (
        <>
          <path d="M21 12a9 9 0 1 1-3-6.7" />
          <path d="M21 3v6h-6" />
        </>
      ),
    },
    {
      title: "Aylık performans raporu",
      text: "Harcama, tıklama, dönüşüm ve maliyet verileri düzenli raporlanır.",
      icon: (
        <>
          <path d="M3 20h18" />
          <rect x="5" y="12" width="4" height="8" />
          <rect x="10.5" y="7" width="4" height="13" />
          <rect x="16" y="4" width="4" height="16" />
        </>
      ),
    },
  ],
  packages: [
    {
      name: "Başlangıç",
      priceTL: 13333,
      desc: "Tek platform (Google veya Meta), tek kampanya ile başlamak isteyenler için.",
      features: [
        "Tek platform kampanya kurulumu",
        "Hedef kitle belirleme",
        "Reklam metni ve görsel hazırlığı",
        "Dönüşüm takibi kurulumu",
        "Aylık performans raporu",
      ],
      standoutFeature: "Dönüşüm takibi kurulumu",
      highlight: false,
    },
    {
      name: "Büyüme",
      priceTL: 24000,
      desc: "Google Ads ve Meta Ads'i birlikte yönetmek isteyen işletmeler için.",
      features: [
        "Başlangıç paketindeki her şey",
        "Google Ads + Meta Ads birlikte yönetim",
        "Haftalık bütçe optimizasyonu",
        "A/B reklam testi",
        "Aylık strateji görüşmesi",
        "Öncelikli destek",
      ],
      standoutFeature: "Google Ads + Meta Ads birlikte yönetim",
      highlight: true,
    },
    {
      name: "Kurumsal",
      priceTL: 40000,
      desc: "Yüksek bütçeli, çok kampanyalı işletmeler ve ajans ortaklıkları için.",
      features: [
        "Büyüme paketindeki her şey",
        "Sınırsız kampanya sayısı",
        "Gelişmiş dönüşüm ve ROAS raporlama",
        "Haftalık strateji görüşmesi",
        "Dedicated reklam yöneticisi",
        "Öncelikli optimizasyon",
      ],
      standoutFeature: "Dedicated reklam yöneticisi",
      highlight: false,
    },
  ],
  faq: [
    {
      q: "Bu fiyata reklam bütçesi dahil mi?",
      a: "Hayır. Bu, kampanyayı kurup yöneten hizmet bedelidir. Google veya Meta'ya ödenen reklam bütçesi ayrıdır ve doğrudan sizin hesabınızdan, sizin belirlediğiniz miktarda harcanır — biz bu parayı hiçbir zaman tahsil etmeyiz.",
    },
    {
      q: "Aylık ne kadar reklam bütçesi ayırmalıyım?",
      a: "Sektörünüze ve hedefinize göre değişir; kurulum görüşmesinde birlikte belirleriz. Küçük bir bütçeyle başlayıp sonuçlara göre artırmanız da mümkündür.",
    },
    {
      q: "Sonuç garantisi veriyor musunuz?",
      a: "Belirli bir tıklama/satış sayısı garanti edemeyiz — bu reklam platformlarının doğasında var. Ama düzenli optimizasyon ve şeffaf raporlamayla bütçenizin verimli kullanılmasını sağlarız. Garanti ettiğimiz şey farklı: kampanyanızı 5 gün içinde yayına almazsak yönetim ücretinizi iade ederiz — bu, reklam bütçenizin sonucuyla değil, bizim teslim hızımızla ilgili bir taahhüttür.",
    },
    {
      q: "5 gün içinde kampanyam yayına girmezse ne oluyor?",
      a: "Yönetim ücretinizin tamamını iade ediyoruz. Bu garanti kampanyanın kurulup yayına alınmasını kapsar; reklam bütçeniz zaten harcanmadığı için ayrıca iade edilecek bir tutar olmuyor.",
    },
    {
      q: "Reklam hesabının sahibi kim oluyor?",
      a: "Siz. Google Ads ve Meta Ads hesapları sizin adınıza açılır veya mevcut hesabınız kullanılır; sözleşme bitse dahi hesap ve geçmiş verileriniz sizde kalır.",
    },
    {
      q: "SEO yaptırıyorum, reklam da gerekli mi?",
      a: "Zorunlu değil ama tamamlayıcıdır. SEO sonuç vermesi haftalar/aylar sürebilirken reklam anında görünürlük sağlar; ikisini birlikte kullanan işletmeler genelde daha hızlı sonuç alır.",
    },
    {
      q: "Sözleşme süresi ne kadar, istediğim zaman durdurabilir miyim?",
      a: "Aylık yönetim mantığıyla çalışır; istediğiniz zaman durdurabilirsiniz. Reklam bütçenizi de istediğiniz an kendi hesabınızdan kapatabilirsiniz.",
    },
  ],
};

export const CANLI_SANTIYE_CONTENT: SectorConfig = {
  kicker: "İnşaat · Kentsel Dönüşüm",
  name: "Canlı Şantiye",
  intro:
    "Şantiyenizi düzenli aralıklarla biz drone ile çekiyor, düzenliyor ve sitenizdeki İnşaat Günlüğü'ne biz yüklüyoruz. Sizin tarafınızda hiçbir iş yok.",
  deliveryLabel: "3-5 gün",
  heroImage: "/hero/2.jpg",
  billing: "monthly",
  priceDisplay: "plain",
  annualPrepayMonths: 10,
  comparison: (
    <DroneComparison
      eyebrow="Nasıl kıyaslıyoruz"
      heading="Şeffaflığın üç yolu var."
      description="Hak sahibine şantiyeyi göstermenin üç yöntemi. Farkı fiyat değil, kimin uğraştığı belirliyor."
      columns={SANTIYE_COMPARISON_COLUMNS}
      rows={SANTIYE_COMPARISON_ROWS}
      closing={
        <>
          Tek fark: bu işi <span className="text-blue">siz değil biz</span>{" "}
          yapıyoruz.
        </>
      }
    />
  ),
  sections: [
    {
      id: "nedir",
      title: "Canlı Şantiye nedir?",
      paragraphs: [
        "Kentsel dönüşümde hak sahibinin aklındaki tek soru şudur: şantiye ilerliyor mu, param nereye gidiyor? Bu soru cevapsız kaldıkça telefonunuz susmaz, her ay aynı açıklamayı baştan yaparsınız ve en ufak gecikmede güven sarsılır.",
        "Canlı Şantiye bu soruyu daha sorulmadan cevaplar. Şantiyenizi düzenli aralıklarla drone ve saha ekibimizle çekeriz; görselleri seçer, düzenler ve sitenizdeki İnşaat Günlüğü bölümüne yükleriz. Hak sahibi tek bir linke tıklar, projenin ilk günden bugüne nasıl yükseldiğini kendi gözüyle görür.",
        "En önemlisi: bu bir yazılım değil, uçtan uca bir hizmettir. Panele girmeniz, fotoğraf yüklemeniz, birine şunu siteye koyar mısın demeniz gerekmez. Çekimden yayına kadar her adımı biz yaparız — sizin işiniz şantiyeyi yönetmek.",
      ],
    },
    {
      id: "surec",
      title: "Nasıl işliyor?",
      paragraphs: [
        "Şantiyenizi bir kez gezip drone uçuş noktalarını ve sabit çekim açılarını belirliyoruz. Her ay aynı açıdan çekim yapılması, ilerlemenin gerçekten görülmesini sağlayan şey.",
        "Belirlenen periyotta ekibimiz sahaya gelir, drone ve fotoğraf çekimini yapar. Sizden tek istediğimiz şantiyeye giriş izni — koordinasyonu, izinleri ve planlamayı biz yürütürüz.",
        "Görselleri seçer, düzenler ve İnşaat Günlüğü'ne yükleriz. Yayına aldığımızda link değişmez; hak sahibine ayrıca haber vermenize bile gerek kalmaz.",
      ],
    },
  ],
  features: [
    {
      title: "Drone çekimi bize ait",
      text: "Profesyonel drone ve saha çekimini ekibimiz yapar. Cihaz almanıza, pilot bulmanıza, izinle uğraşmanıza gerek yok.",
      icon: (
        <>
          <circle cx="12" cy="12" r="2.5" />
          <path d="M10 10 6.5 6.5M14 10l3.5-3.5M10 14l-3.5 3.5M14 14l3.5 3.5" />
          <circle cx="5" cy="5" r="2" />
          <circle cx="19" cy="5" r="2" />
          <circle cx="5" cy="19" r="2" />
          <circle cx="19" cy="19" r="2" />
        </>
      ),
    },
    {
      title: "Sizin iş yükünüz sıfır",
      text: "Panele girmek, fotoğraf yüklemek, içerik yazmak yok. Çekimden yayına kadar tüm süreci biz yürütürüz.",
      icon: (
        <>
          <circle cx="12" cy="12" r="9" />
          <path d="M8 12l3 3 5-6" />
        </>
      ),
    },
    {
      title: "Sabit çekim açıları",
      text: "Her ay aynı noktadan çekim yaptığımız için ilerleme gerçekten kıyaslanabilir olur; aynı yerde sayıyoruz izlenimi oluşmaz.",
      icon: (
        <>
          <circle cx="12" cy="10" r="3" />
          <path d="M12 21s-7-5.5-7-11a7 7 0 0 1 14 0c0 5.5-7 11-7 11Z" />
        </>
      ),
    },
    {
      title: "Tek link, uygulama yok",
      text: "Hak sahibi linke tıklar ve görür. Üyelik, şifre, uygulama indirme yok — teknolojiyle arası olmayan kullanıcılar için de sorunsuz.",
      icon: (
        <path d="M10 13a5 5 0 0 0 7 0l3-3a5 5 0 0 0-7-7l-1 1M14 11a5 5 0 0 0-7 0l-3 3a5 5 0 0 0 7 7l1-1" />
      ),
    },
    {
      title: "Kesintisiz gösterim",
      text: "Bir ay çekim gecikse bile sayfa boş kalmaz; son yayınlanan hâliyle durmaya devam eder. Hak sahibi hiçbir zaman boş ekranla karşılaşmaz.",
      icon: (
        <>
          <rect x="5" y="11" width="14" height="9" rx="2" />
          <path d="M8 11V8a4 4 0 0 1 8 0v3" />
        </>
      ),
    },
    {
      title: "Biten proje satış arşiviniz olur",
      text: "Tamamlanan her günlük, bir sonraki hak sahibine biz böyle çalışıyoruz diye gösterebileceğiniz kalıcı bir kanıta dönüşür.",
      icon: (
        <>
          <path d="M4 19V5a2 2 0 0 1 2-2h11l3 3v13a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2Z" />
          <path d="M8 8h7M8 12h7M8 16h4" />
        </>
      ),
    },
  ],
  packages: [
    {
      name: "Tek Proje",
      priceTL: 7500,
      desc: "Tek aktif şantiyesi olan firmalar için.",
      features: [
        "1 aktif şantiye",
        "Her ay saha + drone çekimi",
        "Çekim, düzenleme ve yükleme bize ait",
        "İnşaat Günlüğü bölümü (zaman çizelgesi)",
        "3 sabit çekim açısı",
        "Tek link ile paylaşım",
        "Mobil uyumlu, hosting ve SSL dahil",
      ],
      standoutFeature: "Her ay saha + drone çekimi",
      highlight: false,
    },
    {
      name: "Aktif Şantiye",
      priceTL: 12000,
      desc: "Birden fazla şantiyesi olan, hak sahibi yoğun projeler için.",
      features: [
        "Tek Proje paketindeki her şey",
        "3 aktif şantiyeye kadar",
        "Sınırsız çekim açısı",
        "Tamamlanma yüzdesi göstergesi",
        "Kısa drone videosu (sosyal medyaya uygun)",
        "Öncelikli çekim planlaması",
      ],
      standoutFeature: "3 aktif şantiyeye kadar",
      highlight: true,
    },
    {
      name: "Kurumsal",
      priceTL: 15000,
      desc: "Çok projeli, kurumsal kimliği önde firmalar için.",
      features: [
        "Aktif Şantiye paketindeki her şey",
        "Sınırsız aktif şantiye",
        "Talep üzerine ek çekim hakkı",
        "Tamamlanan projeler arşivi",
        "B&S Media rozeti kaldırma",
        "Hak sahiplerine toplu bilgilendirme",
        "Dedicated destek hattı",
      ],
      standoutFeature: "Sınırsız aktif şantiye",
      highlight: false,
      quoteOnly: true,
    },
  ],
  faq: [
    {
      q: "Bizim tarafımızda kim ilgilenecek, personel ayırmamız gerekiyor mu?",
      a: "Kimseyi görevlendirmenize gerek yok. Çekim gününü biz planlar, sahaya biz gelir, drone çekimini biz yapar, görselleri biz düzenler ve siteye biz yükleriz. Sizden tek istediğimiz şantiyeye giriş izni. İsterseniz o ayki gelişmeleri bir cümleyle iletirsiniz, yazıya dökmesi de bize ait.",
    },
    {
      q: "Bu yatırımın bana somut faydası ne olacak?",
      a: "En büyük fayda, hak sahibinin sizi aramadan önce güvenmesi — kentsel dönüşümde en çok kaybedilen şey bu güven. Şeffaf görünen firma teklif masasında bir adım öndedir. Pratikte de fark eder: her ay tek tek gelen 'ne durumdayız' sorularına cevap vermek yerine tek bir linke yönlendirirsiniz, zamanınız sahada kalır. Ve biten her proje, bir sonraki hak sahibine gösterebileceğiniz kalıcı bir referansa dönüşür — bu, zamanla en güçlü satış aracınız olur.",
    },
    {
      q: "Bu 7/24 canlı kamera yayını mı?",
      a: "Hayır ve bu ayrımı özellikle net yapıyoruz. Şantiyeye kamera kurmuyoruz, internet hattı çekmiyoruz, arızayla uğraşmıyorsunuz. Canlı derken kastettiğimiz sayfanın her zaman güncel olması: düzenli aralıklarla yeni çekimler ekleniyor ve sayfada son güncelleme tarihi görünüyor. Sabit kamera tek bir noktayı gösterir; biz drone ile şantiyenin tamamını gösteriyoruz — üstelik kurulum maliyeti ve hırsızlık riski olmadan.",
    },
    {
      q: "Zaten hak sahiplerine WhatsApp'tan fotoğraf atıyoruz, bu gereksiz olmaz mı?",
      a: "İkisi aynı şey değil. WhatsApp'a attığınız fotoğraf birkaç gün içinde sohbetin içinde kaybolur, sonradan katılan hak sahibi geçmişi göremez ve kimse o fotoğrafları bir bütün olarak değerlendiremez. İnşaat Günlüğü ilk günden bugüne sıralı, tarihli ve düzenli bir arşiv sunar. Bir de şu var: telefonla çekilmiş kırk fotoğraf ile profesyonel drone çekimi, hak sahibinin gözünde aynı firmayı anlatmıyor.",
    },
    {
      q: "Hak sahiplerimizin çoğu yaşlı, bu sistemi kullanabilirler mi?",
      a: "Bu yüzden bunu bir uygulama değil, tek linkle açılan basit bir web sayfası olarak kuruyoruz. Hak sahibi linke tıklar, fotoğrafları ve tarihleri görür. Üyelik, şifre, indirme yok. Linki bir kez gönderirsiniz, sonrasında hep aynı link çalışır.",
    },
    {
      q: "Drone uçurmak için izin gerekiyor mu, o işi kim hallediyor?",
      a: "Uçuş planlaması, gerekli izinler ve saha güvenliği bizim sorumluluğumuzda. Bu tarafla hiç ilgilenmeniz gerekmiyor; ekibimiz uçuşa uygun olmayan bir durum tespit ederse çekimi yeniden planlar ve size bilgi verir.",
    },
    {
      q: "Rakiplerimizin çoğu böyle bir şey yapmıyor, gerçekten fark yaratır mı?",
      a: "Farkı yaratan da tam olarak bu. Hak sahibi birden fazla müteahhitle görüşürken hepsinden benzer sözler duyar; ama sadece birinin elinde işte geçen projemiz, ay ay nasıl ilerledi, buyurun bakın diyebileceği bir link olur. Şeffaflığı sözle değil kanıtla gösteren firma masada belirgin şekilde öne çıkar.",
    },
    {
      q: "Proje bitince sayfaya ne oluyor?",
      a: "Sayfa proje tamamlandı etiketiyle arşivlenir ve linki çalışmaya devam eder. Yani her biten projeniz, bir sonraki hak sahibine gösterebileceğiniz kalıcı bir referansa dönüşür. Bu arşiv zamanla en güçlü satış aracınız olur.",
    },
    {
      q: "ŞantiyeOS aldıysam bu hizmete ayrıca ihtiyacım var mı?",
      a: "Hayır, ayrıca almanıza gerek yok. ŞantiyeOS'un her paketinde Canlı Şantiye modülünü tek tıkla ekleyebiliyorsunuz — bu hizmeti, kurumsal sitesi başka yerde olan ya da sadece şantiye takibini isteyen firmalar için ayrıca sunuyoruz.",
    },
    {
      q: "Kurulum ne kadar sürüyor?",
      a: "Şantiye ziyareti ve ilk çekimin ardından 3-5 gün içinde İnşaat Günlüğü yayında oluyor.",
    },
  ],
};

const MEKAN_COMPARISON_COLUMNS: ComparisonColumn[] = [
  { key: "phone", label: "Bugünkü ilan fotoğrafı", sub: "Telefonla çekim" },
  { key: "freelance", label: "Bağımsız video ajansı", sub: "Tek seferlik çekim" },
  { key: "bns", label: "B&S Media", sub: "Villa satış çekimi" },
];

const MEKAN_COMPARISON_ROWS: ComparisonRow[] = [
  {
    label: "Görüntü kalitesi",
    phone: "Telefon karesi, filtre yok",
    freelance: "Profesyonel, drone genelde yok",
    bns: "Drone + profesyonel kurgu",
  },
  {
    label: "Altyazı",
    phone: "Yok",
    freelance: "Genelde sadece Türkçe",
    bns: "Türkçe + İngilizce dahil",
  },
  {
    label: "Teslim formatı",
    phone: "Tek format",
    freelance: "Ekstra formatlar ayrı ücretli",
    bns: "3 formatta + sahibinden formatı dahil",
  },
  {
    label: "Bölge içeriği",
    phone: "Yok",
    freelance: "Ayrı ücretli",
    bns: "Profesyonel ve üstü pakette dahil",
  },
  {
    label: "Ham arşiv",
    phone: "Kendi telefonunuzda kalır",
    freelance: "Teslimden sonra silinir",
    bns: "3-12 ay veya süresiz saklanır",
  },
  {
    label: "Teslim süresi",
    phone: "Hemen, düşük kalite",
    freelance: "Belirsiz, değişken",
    bns: "7-10 gün, sözleşmeyle net",
  },
];

export const CANLI_MEKAN_CONTENT: SectorConfig = {
  kicker: "Emlak · Villa Satışı",
  name: "Canlı Mekan",
  intro:
    "Satılık villanızı drone ve profesyonel video ile çekiyor, Türkçe-İngilizce altyazılı olarak sahibinden ve sosyal medyaya hazır teslim ediyoruz. Alıcının çoğu yurt dışından bakıyor — villayı görmeden karar verdiği o birkaç saniyeyi biz kazandırıyoruz.",
  deliveryLabel: "7-10 gün",
  heroImage: "/hero/2.jpg",
  billing: "once",
  comparison: (
    <DroneComparison
      eyebrow="Nasıl kıyaslıyoruz"
      heading="Alıcı villayı görmeden karar veriyor."
      description="Fotoğrafla satılan bir ilan ile drone ve altyazılı videoyla anlatılan bir ilan, alıcının gözünde aynı villayı göstermiyor."
      columns={MEKAN_COMPARISON_COLUMNS}
      rows={MEKAN_COMPARISON_ROWS}
      closing={
        <>
          Fark fiyatta değil,{" "}
          <span className="text-blue">alıcının gördüğü şeyde.</span>
        </>
      }
    />
  ),
  sections: [
    {
      id: "nedir",
      title: "Canlı Mekan nedir?",
      paragraphs: [
        "Satılık villa ilanlarının büyük çoğunluğu hâlâ telefonla çekilmiş birkaç fotoğrafla yayınlanıyor — üstelik alıcı çoğu zaman villayı hiç görmeden, yurt dışından ilana bakarak karar veriyor.",
        "Canlı Mekan, villanızı drone ve saha ekibimizle profesyonelce çekip; tanıtım videosu, sosyal medya klipleri ve drone fotoğrafları olarak Türkçe ve İngilizce altyazılı şekilde teslim eder. Sahibinden'e yükleyeceğiniz formatı da dahil ederiz.",
        "Bu tek seferlik bir proje hizmetidir — çekim, kurgu, altyazı, format dönüşümü tamamen bizde. Sizden istediğimiz tek şey villaya giriş izni ve çekim için uygun bir zaman dilimi.",
      ],
    },
    {
      id: "surec",
      title: "Nasıl işliyor?",
      paragraphs: [
        "Villayı birlikte gezip drone uçuş noktalarını ve öne çıkarılacak alanları (havuz, manzara, iç mekan) belirliyoruz.",
        "Çekim günü ekibimiz sahaya gelir; drone ve saha çekimini yapar. Sizden tek istediğimiz giriş izni.",
        "Görselleri kurgular, Türkçe-İngilizce altyazı ekler ve 7-10 gün içinde sahibinden formatı dahil üç farklı formatta teslim ederiz.",
      ],
    },
  ],
  features: [
    {
      title: "Drone çekimi bize ait",
      text: "Profesyonel drone ve saha çekimini ekibimiz yapar. Cihaz almanıza, pilot bulmanıza, izinle uğraşmanıza gerek yok.",
      icon: (
        <>
          <circle cx="12" cy="12" r="2.5" />
          <path d="M10 10 6.5 6.5M14 10l3.5-3.5M10 14l-3.5 3.5M14 14l3.5 3.5" />
          <circle cx="5" cy="5" r="2" />
          <circle cx="19" cy="5" r="2" />
          <circle cx="5" cy="19" r="2" />
          <circle cx="19" cy="19" r="2" />
        </>
      ),
    },
    {
      title: "Türkçe + İngilizce altyazı",
      text: "Alıcının büyük kısmı yurt dışından bakıyor. Her videoyu iki dilde altyazılı teslim ederiz, ekstra ücret almayız.",
      icon: (
        <>
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="M7 15h2m4 0h4M7 9h10" />
        </>
      ),
    },
    {
      title: "Sizin iş yükünüz sıfır",
      text: "Çekim planlamak, kurgu, altyazı, format dönüşümü yok. Girişten teslime kadar tüm süreç bizde.",
      icon: (
        <>
          <circle cx="12" cy="12" r="9" />
          <path d="M8 12l3 3 5-6" />
        </>
      ),
    },
    {
      title: "Sahibinden formatı dahil",
      text: "Görselleri sahibinden'e doğrudan yükleyebileceğiniz formatta ayrıca hazırlarız — ek işlem yapmanız gerekmez.",
      icon: (
        <>
          <rect x="4" y="4" width="16" height="16" rx="2" />
          <path d="M8 9h8M8 13h5" />
        </>
      ),
    },
    {
      title: "Sosyal medyaya hazır klipler",
      text: "Drone çekiminden kısa, paylaşıma hazır Instagram/Reels klipleri de dahildir — ayrıca kurgu aramanıza gerek yok.",
      icon: (
        <>
          <rect x="3" y="6" width="13" height="12" rx="2" />
          <path d="M16 10.5 21 8v8l-5-2.5" />
        </>
      ),
    },
    {
      title: "Arşiviniz sizde kalır",
      text: "Ham çekimleri pakete göre 3-12 ay veya süresiz saklarız; ihtiyaç halinde yeniden kullanıma hazırdır.",
      icon: (
        <>
          <rect x="5" y="11" width="14" height="9" rx="2" />
          <path d="M8 11V8a4 4 0 0 1 8 0v3" />
        </>
      ),
    },
  ],
  priceDisplay: "startingFrom",
  packages: [
    {
      name: "Başlangıç",
      priceTL: 10000,
      desc: "Tek bir villayı hızlıca öne çıkarmak isteyenler için.",
      features: [
        "1 mülk — iç + dış mekân çekimi",
        "1 tanıtım videosu",
        "3 reels",
        "12 drone fotoğrafı",
        "3 formatta teslim",
        "Sahibinden formatı",
        "10 gün içinde teslim",
        "1 revizyon",
        "Yol ücreti yok",
      ],
      standoutFeature: "Yol ücreti yok",
      highlight: false,
    },
    {
      name: "Profesyonel",
      priceTL: 27000,
      desc: "Aktif olarak villa satan ofisler için — en çok tercih edilen paket.",
      features: [
        "3 mülk — her mülkün içi ve dışı",
        "1 tanıtım videosu",
        "4 reels",
        "15 fotoğraf",
        "Türkçe + İngilizce altyazı",
        "3 formatta teslim",
        "Sahibinden formatı",
        "7 gün içinde teslim",
        "2 revizyon",
        "Yol ücreti yok",
      ],
      standoutFeature: "Türkçe + İngilizce altyazı",
      highlight: true,
    },
    {
      name: "Sezon",
      priceTL: 48000,
      desc: "Portföyünün tamamını sezon boyunca öne çıkarmak isteyen ofisler için.",
      features: [
        "6 mülk — her mülkün içi ve dışı",
        "1 tanıtım videosu",
        "5 reels",
        "20 fotoğraf",
        "Türkçe + İngilizce altyazı",
        "3 formatta teslim",
        "Sahibinden formatı",
        "Bölge tanıtım görüntüleri",
        "7 gün içinde teslim",
        "2 revizyon",
        "Yol ücreti yok",
      ],
      standoutFeature: "Bölge tanıtım görüntüleri",
      highlight: false,
      quoteOnly: true,
    },
  ],
  faq: [
    {
      q: "Teslim süresi ne kadar?",
      a: "Çekimden itibaren Başlangıç paketinde 10 gün, Profesyonel ve Sezon paketlerinde 7 gün içinde teslim ediyoruz.",
    },
    {
      q: "Neden Türkçe + İngilizce altyazı önemli?",
      a: "Villa alıcılarının büyük kısmı yurt dışından, villayı görmeden ilana bakarak karar veriyor. İki dilde altyazı, videonun anlaşılırlığını doğrudan etkiliyor — bu yüzden Profesyonel ve Sezon paketlerine dahil, ekstra ücret almıyoruz.",
    },
    {
      q: "Görselleri hangi formatta teslim alıyorum?",
      a: "Her çekimi 3 farklı formatta (yatay, dikey, sahibinden'e uygun kare) teslim ediyoruz. Sahibinden'e yükleyeceğiniz format zaten hazır geliyor, ayrıca bir işlem yapmanız gerekmiyor.",
    },
    {
      q: "Yol ücreti alıyor musunuz?",
      a: "Hayır, hiçbir pakette yol ücreti almıyoruz. Kaş-Kalkan bölgesinde zaten tur halinde çalıştığımız için bu maliyeti size yansıtmıyoruz.",
    },
    {
      q: "Drone uçurmak için izin gerekiyor mu, o işi kim hallediyor?",
      a: "Uçuş planlaması, gerekli izinler ve saha güvenliği bizim sorumluluğumuzda. Bölgeye özel uçuş kısıtı varsa çekim öncesi sizi bilgilendiririz.",
    },
    {
      q: "Ham çekimleri saklıyor musunuz, sonradan tekrar kullanabilir miyim?",
      a: "Evet — Başlangıç'ta 3 ay, Profesyonel'de 12 ay, Sezon'da süresiz saklıyoruz. İhtiyaç halinde farklı bir kurguyla yeniden teslim edebiliriz.",
    },
    {
      q: "Birden fazla villa için birlikte anlaşırsak indirim oluyor mu?",
      a: "Evet — paket fiyatları zaten mülk sayısı arttıkça mülk başı maliyeti düşürecek şekilde kurgulandı. Portföyünüzün büyüklüğüne göre size özel bir teklif de çıkarabiliriz, formu doldurmanız yeterli.",
    },
    {
      q: "Yerel bir video operatöründen veya genel bir prodüksiyon ajansından farkınız ne?",
      a: "İkisinden de farklı çalışıyoruz. Genel prodüksiyon ajansları villa çekimini birçok hizmetten biri olarak sunar, kurgu genelde ayrı ücretlidir. Yerel operatörler genelde tek video satar; İngilizce altyazı, çoklu format ve bölge içeriği gibi konularda destek vermez. Biz sadece villa satış çekimi yapıyoruz, kurguyu da dahil teslim ediyoruz — çünkü alıcının çoğu zaman yurt dışından baktığı gerçeğine göre kurgulanmış bir hizmet sunuyoruz.",
    },
    {
      q: "Çekim günü benim yapmam gereken bir şey var mı?",
      a: "Villaya giriş izni ve müsait bir zaman dilimi dışında hiçbir şey. Drone uçuşu, çekim, kurgu, altyazı ve format dönüşümü tamamen bizde; siz sadece anahtarı ve saati ayarlarsınız.",
    },
  ],
};
