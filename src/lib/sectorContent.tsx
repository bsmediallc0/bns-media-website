import type { SectorConfig } from "@/components/SectorPage";

export const VITRINOS_CONTENT: SectorConfig = {
  kicker: "Emlak Ofisleri",
  name: "VitrinOS",
  intro:
    "Sahibinden linkinden saniyeler içinde ilan çeken, çok dilli portföy sistemi.",
  deliveryLabel: "10-14 gün",
  heroImage: "/hero/1.jpg",
  sections: [
    {
      id: "nedir",
      title: "VitrinOS nedir?",
      paragraphs: [
        "Yeni bir portföy aldığınızda aynı ilanı Sahibinden'e, Hepsiemlak'a, Emlakjet'e ve kendi sitenize tek tek girmek saatler alıyor. Yabancı alıcıya satarken ise ilan çevirisi ve döviz kuru takibi ayrı bir uğraş.",
        "VitrinOS bu iki sorunu tek sistemde çözer: Sahibinden linkini yapıştırıp ilanı saniyeler içinde kendi sitenize çekersiniz, yabancı alıcıya da AI çeviri ve anlık döviz kuruyla sunum yaparsınız.",
      ],
    },
    {
      id: "surec",
      title: "Kurulum nasıl işliyor?",
      paragraphs: [
        "Mevcut portföyünüzü (fotoğraf, açıklama, fiyat) değerlendirir, hangi ilanların öne çıkarılacağını birlikte belirleriz.",
        "Çok dilli çeviri ve AI video üretimi kurulum kapsamında yapılır; portföy güncellemeleri yayın sonrası da eklenebilir.",
        "Standart kurulumlar 10-14 gün içinde yayına alınır.",
      ],
    },
  ],
  features: [
    {
      title: "Sahibinden linkiyle ilan çekme",
      text: "İlan linkini yapıştırın, fotoğraf/açıklama/fiyat saniyeler içinde sitenize aktarılsın.",
      icon: (
        <>
          <rect x="4" y="4" width="16" height="16" rx="2" />
          <path d="M12 8v6M9 11l3 3 3-3" />
        </>
      ),
    },
    {
      title: "Çok dilli portföy vitrini",
      text: "İlanlar Türkçe, İngilizce, Rusça ve Almanca'da sunulur, yabancı alıcı kendi dilinde güven duyar.",
      icon: (
        <>
          <circle cx="12" cy="12" r="9" />
          <path d="M3 12h18M12 3c2.5 2.5 3.8 5.7 3.8 9s-1.3 6.5-3.8 9c-2.5-2.5-3.8-5.7-3.8-9s1.3-6.5 3.8-9Z" />
        </>
      ),
    },
    {
      title: "Anlık döviz kuru entegrasyonu",
      text: "Fiyatlar TL, USD, EUR ve GBP olarak otomatik güncel gösterilir.",
      icon: (
        <>
          <path d="M7 8h10M7 8l3-3M7 8l3 3" />
          <path d="M17 16H7M17 16l-3-3M17 16l-3 3" />
        </>
      ),
    },
    {
      title: "AI ev turu videoları",
      text: "Fotoğraflardan otomatik oluşturulan tanıtım videoları, alıcının ilana ayırdığı süreyi artırır.",
      icon: (
        <>
          <rect x="3" y="6" width="13" height="12" rx="2" />
          <path d="M16 10.5 21 8v8l-5-2.5" />
        </>
      ),
    },
    {
      title: "Filtreli ilan arama",
      text: "Bölge, oda sayısı ve fiyat aralığına göre filtreleme; alıcı aradığını kendi bulur.",
      icon: (
        <path d="M4 6h16M4 6a2 2 0 1 0 4 0 2 2 0 1 0-4 0M4 12h16M14 12a2 2 0 1 0 4 0 2 2 0 1 0-4 0M4 18h16M8 18a2 2 0 1 0 4 0 2 2 0 1 0-4 0" />
      ),
    },
    {
      title: "WhatsApp müşteri hattı",
      text: "İlan detayında tek tıkla WhatsApp'tan iletişim, form doldurmaya gerek yok.",
      icon: (
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5Z" />
      ),
    },
  ],
  packages: [
    {
      name: "Vitrin",
      priceTL: 53333,
      desc: "Bireysel danışmanlar ve butik yerel emlakçılar için.",
      features: [
        "Tek ofis/danışman, portföy vitrini",
        "Sahibinden linkiyle ilan çekme (aylık 30 ilan)",
        "Taşınmaz Ticareti Yetki Belgesi doğrulama alanı",
        "WhatsApp & telefon hızlı erişim butonları",
        "Temel SEO altyapısı (meta etiketler, hız optimizasyonu)",
        "Sınırsız revize hakkı",
        "Mobil uyumlu, hosting ve SSL dahil",
        "Paket dahilinde sürekli içerik güncelleme",
      ],
      standoutFeature: "Sahibinden linkiyle ilan çekme (aylık 30 ilan)",
      highlight: false,
    },
    {
      name: "Çok Dilli Portföy",
      priceTL: 76667,
      desc: "Yabancıya satış yapan ve lüks segment ofisler için.",
      features: [
        "Vitrin paketindeki her şey",
        "AI destekli otomatik ilan çevirisi (TR/EN/RU/DE)",
        "Anlık döviz kuru entegrasyonu (TL/USD/EUR/GBP)",
        "AI ev turu videoları",
        "Yılda 2 drone çekimli ev turu videosu",
        "Sınırsız Sahibinden linkiyle ilan çekme",
        "Gelişmiş SEO + çok dilli yapısal veri (Schema markup)",
        "Sınırsız revize hakkı",
        "Öncelikli teknik destek",
      ],
      standoutFeature: "AI destekli otomatik ilan çevirisi (TR/EN/RU/DE)",
      highlight: true,
    },
    {
      name: "Bölge Lideri",
      priceTL: 123333,
      desc: "Çoklu danışmanlı büyük ofisler ve broker'lar için.",
      features: [
        "Çok Dilli Portföy paketindeki her şey",
        "Danışman alt sayfaları ve paneli",
        "Aday takip ve otomatik eşleştirme (Light CRM)",
        "Harita üzerinden filtreleme",
        "Portföy performans analiz raporları",
        "Sınırsız Sahibinden entegrasyonu + XML çıktısı",
        "Kurumsal SEO + Google Analytics & Search Console entegrasyonu",
        "Sınırsız revize hakkı",
        "Yılda 10 drone çekimli ev turu videosu",
      ],
      standoutFeature: "Yılda 10 drone çekimli ev turu videosu",
      highlight: false,
    },
  ],
  faq: [
    {
      q: "Sahibinden linkiyle ilan çekme gerçekten çalışıyor mu, eksik/hatalı veri gelir mi?",
      a: "İlan linkini yapıştırdığınızda fotoğraflar, açıklama, fiyat ve temel özellikler otomatik aktarılır; yayına almadan önce gözden geçirip düzenleyebilirsiniz. Otomatik aktarım hiçbir zaman sizin onayınız olmadan yayınlanmaz.",
    },
    {
      q: "Çeviriler gerçekten doğru olacak mı?",
      a: "Çeviriler kurulum aşamasında sizinle birlikte gözden geçirilip öyle yayına alınır; otomatik çeviri tek başına yayınlanmaz.",
    },
    {
      q: "Portalları tamamen bırakmam mı gerekiyor?",
      a: "Hayır. VitrinOS portallara ek çalışır; fark, alıcının doğrudan size ulaşabildiği kendi vitrininizin olmasıdır.",
    },
    {
      q: "Ekibim yeni bir panel öğrenmek zorunda mı kalacak?",
      a: "Panel günlük kullandığınız araçlar kadar basittir; ilan ekleme/güncelleme birkaç dakika sürer. İsterseniz portföy güncellemesini de biz üstleniriz.",
    },
    {
      q: "Bütçem sınırlı, en düşük paketle başlayıp sonra yükseltebilir miyim?",
      a: "Evet. Vitrin paketiyle başlayıp portföyünüz büyüdükçe Çok Dilli Portföy veya Bölge Lideri'ne geçebilirsiniz; önceki yatırımınız yeni pakete dahil olur.",
    },
    {
      q: "Danışman alt sayfaları nasıl çalışıyor?",
      a: "Her danışmanın kendi fotoğrafı, biyografisi ve yalnızca kendi ilanlarının listelendiği bir alt sayfası olur; ana site içinde ayrı bir profil gibi çalışır.",
    },
    {
      q: "Mevcut ilanlarımı yeni siteye taşıyabilir misiniz?",
      a: "Evet. Portalda veya eski sitenizde yayında olan ilanları içerik ve fotoğraflarıyla birlikte VitrinOS'a taşırız.",
    },
    {
      q: "Kurulum ne kadar sürüyor?",
      a: "Standart kurulumlar 10-14 gün içinde yayına alınır. Portföy büyüklüğü ve çeviri hacmi süreyi etkileyebilir.",
    },
  ],
};

export const SANTIYEOS_CONTENT: SectorConfig = {
  kicker: "İnşaat · Kentsel Dönüşüm",
  name: "ŞantiyeOS",
  intro:
    "Hak sahibinin güvendiği, teklif sürecini hızlandıran müteahhitlik sistemi.",
  deliveryLabel: "10-14 gün",
  heroImage: "/hero/1.jpg",
  sections: [
    {
      id: "nedir",
      title: "ŞantiyeOS nedir?",
      paragraphs: [
        "Kentsel dönüşümde çalışmak kolay değil — hak sahiplerini ikna etmek, belediyeyle süreçleri yürütmek, malzeme fiyatlarının bu kadar oynak olduğu bir dönemde bütçeyi tutturmak zaten başlı başına bir mesai. Bunun üstüne bir de dijital vitrin ve teklif hazırlığıyla uğraşmak, çoğu müteahhidin en son sırada bıraktığı iş oluyor. Ama biliyoruz ki hak sahibinin güvenini kazanan, genelde en şeffaf görünen firma oluyor.",
        "ŞantiyeOS, tam olarak bu yükü hafifletmek için kuruldu: kurumsal kimliğinizi yansıtan bir site, şantiyenizin güncel durumunu hak sahibine canlı gösteren bir takip sayfası ve teklif hazırlama sürecinizi hızlandıran araçları tek sistemde topluyor. Amaç, sizin saha ve sözleşme işine odaklanmanız — dijital tarafı biz taşıyoruz.",
        "Cumaoğulları İnşaat ve Sevindir İnşaat gibi referans projelerimizde bu canlı takip sayfası hâlâ yayında — hak sahipleri şantiyeyi telefonlarından takip edebiliyor.",
      ],
    },
    {
      id: "surec",
      title: "Kurulum nasıl işliyor?",
      paragraphs: [
        "Aktif ve tamamlanan projelerinizin listesini, fotoğraf/plan içeriklerini birlikte değerlendiririz.",
        "Canlı şantiye takip yüzdesi güncellemesi kendi panelinizden yapılabilir, teknik destek gerektirmez.",
        "Standart kurulumlar 10-14 gün içinde yayına alınır.",
      ],
    },
  ],
  features: [
    {
      title: "Kurumsal kimlik sitesi",
      text: "Firma hikayesi, tamamlanan projeler ve iletişim tek yerde.",
    },
    {
      title: "Canlı şantiye takip sayfası",
      text: "Aktif şantiyelerin tamamlanma yüzdesi site üzerinden güncel gösterilir.",
    },
    {
      title: "Proje ve daire galerileri",
      text: "Her proje için ayrı fotoğraf ve plan galerisi.",
    },
    {
      title: "Kat planı sunumları",
      text: "Daire tiplerine göre kat planı ve metrekare bilgisi net sunulur.",
    },
    {
      title: "Alıcı bilgilendirme akışı",
      text: "Süreç (ruhsat, yıkım, teslim) hak sahibine adım adım anlatılır.",
    },
    {
      title: "AI destekli teklif hazırlama",
      text: "Daire/proje bilgilerini girip dakikalar içinde profesyonel teklif dokümanı çıkarır.",
    },
  ],
  packages: [
    {
      name: "Kurumsal",
      priceTL: 42000,
      desc: "Kurumsal kimlik için giriş seviyesi.",
      features: [
        "Kurumsal kimlik sitesi",
        "Proje ve daire galerisi",
        "WhatsApp iletişim hattı",
        "Temel SEO altyapısı (meta etiketler, hız optimizasyonu)",
        "Sınırsız revize hakkı",
        "Mobil uyumlu, hızlı sayfa",
        "Hosting ve SSL dahil",
        "Paket dahilinde sürekli içerik güncelleme",
      ],
      standoutFeature: "Proje ve daire galerisi",
      highlight: false,
      addon: {
        label: "Canlı Şantiye modülü ekle",
        priceTL: 10000,
        features: [
          "Canlı şantiye takip sayfası",
          "Şantiye çekimlerinin İnşaat Günlüğü'nde yayını",
        ],
      },
    },
    {
      name: "Canlı Şantiye",
      priceTL: 53333,
      desc: "Şeffaflığı öne çıkaran tam sistem.",
      features: [
        "Kurumsal paketindeki her şey",
        "Kat planı sunumları",
        "Alıcı bilgilendirme akışı",
        "Gelişmiş SEO + yapısal veri (Schema markup)",
        "Sınırsız revize hakkı",
        "Öncelikli teknik destek",
      ],
      standoutFeature: "Kat planı sunumları",
      highlight: true,
      addon: {
        label: "Canlı Şantiye modülü ekle",
        priceTL: 10000,
        features: [
          "Canlı şantiye takip sayfası",
          "Şantiye çekimlerinin İnşaat Günlüğü'nde yayını",
        ],
      },
    },
    {
      name: "Tam Kapsam",
      priceTL: 76667,
      desc: "Teklif sürecini de dijitalleştiren firmalar için.",
      features: [
        "Canlı Şantiye paketindeki her şey",
        "AI destekli teklif hazırlama modülü",
        "Çoklu proje yönetimi",
        "Hak sahiplerine toplu WhatsApp/SMS bilgilendirme",
        "Süreç takip paneli (ruhsat, yıkım, inşaat, teslim)",
        "Kurumsal SEO + Google Analytics & Search Console entegrasyonu",
        "Sınırsız revize hakkı",
        "Proje bazlı raporlama",
      ],
      standoutFeature: "AI destekli teklif hazırlama modülü",
      highlight: false,
      addon: {
        label: "Canlı Şantiye modülü ekle",
        priceTL: 10000,
        features: [
          "Canlı şantiye takip sayfası",
          "Şantiye çekimlerinin İnşaat Günlüğü'nde yayını",
        ],
      },
    },
  ],
  faq: [
    {
      q: "Hak sahiplerimizin çoğu yaşlı, bu sistemi kullanmayı bilmezler diye endişeleniyorum",
      a: "Haklı bir kaygı — bu yüzden takip sayfasını karmaşık bir uygulama değil, tek bir linkle açılan basit bir web sayfası olarak kuruyoruz. Hak sahibi tıklar, şantiyenin fotoğrafını ve yüzdesini görür, başka bir şey yapması gerekmez.",
    },
    {
      q: "Şantiye ilerlemesini yanlış veya eksik girersek güven kaybı yaşar mıyız?",
      a: "Bu riski en aza indirmek için güncelleme akışını olabildiğince basit tutuyoruz; isterseniz yüzde güncellemesini biz üstlenip sizden sadece fotoğraf/bilgi alırız, hata riski size kalmaz.",
    },
    {
      q: "Rakip müteahhitlerden farkım ne olacak, bu yatırım gerçekten fark yaratır mı?",
      a: "Kentsel dönüşümde hak sahibinin en büyük korkusu şeffaflık eksikliği — 'param nereye gidiyor, şantiye ilerliyor mu' sorusu. Canlı takip sayfası tam olarak bu korkuyu gideriyor ve bunu yapan firma sayısı hâlâ az, bu da sizi öne çıkarıyor.",
    },
    {
      q: "Bütçem şu an sınırlı, en düşük paketle başlayıp sonra yükseltebilir miyim?",
      a: "Evet. Kurumsal paketle başlayıp proje büyüdükçe Canlı Şantiye veya Tam Kapsam'a geçebilirsiniz, önceki yatırımınız yeni pakete dahil olur.",
    },
    {
      q: "Canlı şantiye takip yüzdesini kim güncelliyor?",
      a: "Kendi panelinizden siz güncellersiniz — teknik bilgi gerektirmez. İsterseniz bu güncellemeyi de bakım kapsamında biz yaparız.",
    },
    {
      q: "AI teklif modülü ne kadar doğru teklif çıkarıyor?",
      a: "Girdiğiniz metrekare, malzeme ve konum bilgilerine göre taslak bir teklif hazırlar; son onay her zaman sizde kalır, yanlış bir teklifin hak sahibine gitmesi mümkün değil.",
    },
    {
      q: "Mevcut kurumsal sitemiz var, yenileyebilir misiniz?",
      a: "Evet. Mevcut proje ve içerik verilerinizi değerlendirir, ŞantiyeOS'a taşırız.",
    },
    {
      q: "Kurulum ne kadar sürüyor?",
      a: "Standart kurulumlar 10-14 gün içinde yayına alınır.",
    },
  ],
};

export const KLINIKOS_CONTENT: SectorConfig = {
  kicker: "Diş · Estetik · Klinik",
  name: "KlinikOS",
  intro: "Göz kamaştıran vitrin + arka planda hasta takip sistemi.",
  deliveryLabel: "10-14 gün",
  heroImage: "/hero/1.jpg",
  soonNote:
    "Sağlık sektöründe hasta verisi hassas bir konu — KVKK uyumu tamamlanmadan hasta takip sistemi kurmak riskli olur. Bu yüzden KlinikOS'u henüz satışa açmadık; altyapıyı KVKK uyumlu şekilde tamamladıktan sonra yayına alacağız.",
  sections: [
    {
      id: "nedir",
      title: "KlinikOS nedir?",
      paragraphs: [
        "Klinikler için planlanan kapsam: hasta takip sistemi (CRM), online randevu yönetimi, çok dilli klinik vitrini ve tedavi sayfaları.",
        "Sağlık sektöründe hasta verisi hassas bir konu olduğu için KlinikOS, KVKK uyumlu altyapı tamamlanmadan satışa açılmıyor.",
      ],
    },
    {
      id: "surec",
      title: "Erken erişim listesi nasıl işliyor?",
      paragraphs: [
        "Erken erişim listesine katılan klinikler, KlinikOS yayına girdiğinde ilk çağrılan grup olur.",
        "Şu an için sorularınızı WhatsApp'tan yanıtlıyoruz.",
      ],
    },
  ],
  features: [
    {
      title: "Hasta takip sistemi (CRM)",
      text: "Hasta geçmişi ve tedavi süreci tek yerden takip edilir.",
    },
    {
      title: "Online randevu yönetimi",
      text: "Hasta uygun saati kendi seçer, klinik takvimi otomatik güncellenir.",
    },
    {
      title: "Çok dilli klinik vitrini",
      text: "Yabancı hasta ağırlıklı kliniklerde çok dilli tanıtım.",
    },
    {
      title: "Tedavi ve hizmet sayfaları",
      text: "Her tedavi için ayrı, detaylı tanıtım sayfası.",
    },
    {
      title: "Öncesi-sonrası galerisi",
      text: "Hasta izniyle paylaşılan sonuç görselleri.",
    },
    {
      title: "WhatsApp hasta hattı",
      text: "Randevu ve soru trafiği tek hattan yönetilir.",
    },
  ],
  packages: null,
  faq: [
    {
      q: "Hastalarımın verileri güvende olacak mı?",
      a: "Bu konuda acele etmememizin sebebi tam olarak bu — hasta verisiyle uğraşan bir sistemi KVKK uyumu tamamlanmadan kimseye kurmuyoruz. Sizin de hastalarınızın da güvenini riske atmak istemiyoruz.",
    },
    {
      q: "Neden hemen başlayamıyoruz, bu kadar beklemek zorunda mıyım?",
      a: "Anlıyoruz, beklemek can sıkıcı olabilir. Ama sağlık verisiyle ilgili bir sistemi eksik altyapıyla aceleye getirmek, ileride sizin başınızı ağrıtacak bir risk oluşturur. Bu yüzden önce altyapıyı doğru kurup öyle açıyoruz.",
    },
    {
      q: "Bu süreçte rakip klinikler önümüze geçer mi diye endişeleniyorum",
      a: "Bu endişeyle şimdiden bir şeyler yapabilirsiniz: KlinikOS'un hasta takip sistemi olmadan sadece vitrin/tanıtım tarafını şimdiden kurabiliriz, böylece dijital görünürlükte geride kalmazsınız.",
    },
    {
      q: "KlinikOS ne zaman satışa açılıyor?",
      a: "KVKK uyumlu hasta takip altyapısı tamamlandığında yayına alacağız. Erken erişim listesindekiler öncelikli haberdar edilir.",
    },
    {
      q: "Erken erişim listesine katılmak beni bağlar mı?",
      a: "Hayır, herhangi bir taahhüt gerektirmez. Sadece yayına girdiğimizde önce sizinle iletişime geçeriz.",
    },
    {
      q: "Şimdiden bir klinik web sitesi yaptırabilir miyim?",
      a: "Evet, KlinikOS'un vitrin/tanıtım tarafını (hasta takip sistemi olmadan) şimdiden konuşabiliriz — WhatsApp'tan yazın.",
    },
  ],
};
