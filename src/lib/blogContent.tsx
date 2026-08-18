export type BlogSection = { heading: string; paragraphs: string[] };

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string; // YYYY-MM-DD
  readMinutes: number;
  coverImage: string;
  intro: string;
  sections: BlogSection[];
  closing: string;
};

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "villa-satisinda-drone-cekiminin-gucu",
    title: "Villa alıcısı fotoğrafla değil, videoyla ikna olur",
    excerpt:
      "Kaş-Kalkan gibi bölgelerde satılık villaların büyük çoğunluğu hâlâ telefonla çekilmiş birkaç fotoğrafla satılıyor. Alıcının çoğu villayı hiç görmeden karar veriyor — o kararı ne belirliyor?",
    category: "Emlak & Drone",
    date: "2026-08-10",
    readMinutes: 5,
    coverImage: "/hero/2.jpg",
    intro:
      "10 milyon TL'nin üzerindeki bir villayı satarken hâlâ telefonla çekilmiş, ışığı kötü, açısı rastgele birkaç fotoğrafla ilan veren emlak ofisleri var. Bu, sadece görsel bir eksiklik değil — doğrudan satış kaybı demek. Çünkü alıcının önemli bir kısmı villayı hiç görmeden, sadece ekrandaki görüntüye bakarak ilk elemeyi yapıyor.",
    sections: [
      {
        heading: "Alıcı neden fotoğrafa güvenmiyor",
        paragraphs: [
          "Bir villa ilanına bakan alıcı, gördüğü fotoğrafın gerçeği ne kadar yansıttığından emin olamaz. Dar açı, iyi seçilmiş kareler, düzenlenmiş ışık — hepsi gerçek mekânı olduğundan farklı gösterebilir. Bu belirsizlik, özellikle yüksek bütçeli satışlarda alıcıyı temkinli yapar ve karar sürecini uzatır.",
          "Drone ile çekilmiş bir video ise farklı bir şey söyler: mülkün konumunu, çevresini, bahçesini, havuzunu ve komşu yapılarla ilişkisini tek seferde, bütün olarak gösterir. Alıcı orada değilmiş gibi değil, oradaymış gibi hisseder — ve bu his, güvenin başladığı yerdir.",
        ],
      },
      {
        heading: "Yurt dışından bakan alıcı için fark daha da büyük",
        paragraphs: [
          "Kaş, Kalkan, Bodrum gibi bölgelerde villa alıcısının önemli bir kısmı yurt dışında yaşıyor ve mülkü ilk kez uçakla gelip görmeden önce internetten seçiyor. Bu alıcı için birkaç durgun fotoğraf yeterli bilgi vermiyor; üstelik dil bariyeri de işin içine giriyor.",
          "Türkçe ve İngilizce altyazılı bir tanıtım videosu, bu alıcının kafasındaki soru işaretlerinin büyük kısmını daha ilk izlemede kapatır. Sonuç: daha az soru, daha hızlı karar, daha az boşa harcanan zaman.",
        ],
      },
      {
        heading: "Maliyet göründüğü kadar yüksek değil",
        paragraphs: [
          "Profesyonel drone çekimi lüks bir gider gibi görünebilir, ama rakamlarla bakınca öyle değil. 30 milyon TL'lik bir villada %2 komisyon bile 600.000 TL eder — birkaç bin liralık bir çekim yatırımı bu rakamın yanında yuvarlama hatası kalır.",
          "Asıl soru 'bu maliyete değer mi' değil, 'videosuz kaç potansiyel alıcıyı daha ilk bakışta kaybediyorum' olmalı.",
        ],
      },
    ],
    closing:
      "Canlı Mekan hizmetimizle villanızı drone ile çekiyor, Türkçe-İngilizce altyazılı olarak sahibinden ve sosyal medyaya hazır teslim ediyoruz. Portföyünüzdeki mülkleri nasıl öne çıkarabileceğinizi konuşmak isterseniz, bize yazın.",
  },
  {
    slug: "kentsel-donusumde-hak-sahibi-guveni",
    title: "Kentsel dönüşümde hak sahibinin güvenini kazanmanın yolu: şeffaflık",
    excerpt:
      "Hak sahibinin aklındaki tek soru şu: şantiye ilerliyor mu, param nereye gidiyor? Bu soru cevapsız kaldıkça telefon susmuyor, güven de her ay biraz daha aşınıyor.",
    category: "İnşaat & Kentsel Dönüşüm",
    date: "2026-08-05",
    readMinutes: 6,
    coverImage: "/hero/1.jpg",
    intro:
      "Kentsel dönüşüm projelerinde en çok kaybedilen şey parayla ölçülmez — güvenle ölçülür. Hak sahibi arsasını, evini teslim ettiği müteahhitten tek bir şey bekler: sürecin nerede olduğunu bilmek. Bu bilgi düzenli ve şeffaf gelmediğinde, en iyi niyetli firma bile 'bir şeyler saklıyor' izlenimi verir.",
    sections: [
      {
        heading: "'Ne durumdayız' sorusu neden bu kadar çok soruluyor",
        paragraphs: [
          "Bir kentsel dönüşüm projesinde hak sahibi sayısı arttıkça, aynı soru onlarca kez, farklı kişilerden, farklı zamanlarda gelir: 'Şantiye ne durumda, ne zaman bitecek?' Bu soruları tek tek cevaplamak hem zaman kaybettirir hem de her seferinde biraz farklı anlatılan bir hikâye, tutarsızlık algısı yaratır.",
          "Sorunun kökeni basit: hak sahibinin elinde, kendi başına bakıp güncel durumu görebileceği bir kaynak yok. Bilgiyi almak için hep birinin telefonunu açması gerekiyor — bu da bağımlılık ve belirsizlik demek.",
        ],
      },
      {
        heading: "Şeffaflık bir söylem değil, gösterilebilir bir şey olmalı",
        paragraphs: [
          "'Şeffaf çalışıyoruz' demek kolay, ama hak sahibi için hiçbir şey ifade etmez. Onun ihtiyacı olan, sözle değil görüntüyle kanıtlanmış bir ilerleme: şantiyenin bugün nasıl göründüğü, geçen aya göre ne değiştiği, hangi aşamada olunduğu.",
          "Düzenli aralıklarla çekilen drone görüntüleri ve saha fotoğrafları, tarihli bir zaman çizelgesi hâlinde bir araya geldiğinde, hak sahibi kendi gözüyle görür ve artık sormasına gerek kalmaz. Bu, hem onun hem sizin zamanınızı korur.",
        ],
      },
      {
        heading: "Rakiplerin çoğu bunu hâlâ yapmıyor",
        paragraphs: [
          "Bugün birçok müteahhit hâlâ WhatsApp'tan tek tek fotoğraf gönderiyor — ki bu da birkaç gün içinde sohbetin içinde kaybolur, sonradan katılan hak sahibi geçmişi göremez. Düzenli, arşivlenmiş bir takip sayfası sunan firma sayısı hâlâ az; bu da onu benzerlerinden ayıran somut bir fark yaratıyor.",
          "Ve bu yatırımın etkisi projeyle sınırlı kalmıyor: tamamlanan her proje, bir sonraki hak sahibine gösterebileceğiniz kalıcı bir referansa dönüşüyor.",
        ],
      },
    ],
    closing:
      "ŞantiyeOS ve Canlı Şantiye hizmetlerimizle, şantiyenizi düzenli aralıklarla drone ile çekip hak sahibine her zaman güncel gösteren bir takip sayfası kuruyoruz — çekimden yayına kadar hiçbir şey sizin işiniz olmuyor. Detayları konuşmak isterseniz bize ulaşın.",
  },
  {
    slug: "web-siteniz-neden-musteri-getirmiyor",
    title: "Web siteniz neden müşteri getirmiyor?",
    excerpt:
      "Sitesi olan ama telefonu çalmayan işletme sayısı hiç az değil. Sorun genelde sitenin güzel ya da çirkin olması değil — amacının ne olduğunun hiç netleşmemiş olması.",
    category: "Web Tasarım",
    date: "2026-07-28",
    readMinutes: 5,
    coverImage: "/hero/3.jpg",
    intro:
      "'Bir web sitem var ama kimse aramıyor' cümlesini çok duyarız. Genelde sorunu tasarımda ararlar — oysa asıl mesele çoğu zaman farklı bir yerde: site ziyaretçiye ne yapması gerektiğini hiç söylemiyor.",
    sections: [
      {
        heading: "Güzel site ile satan site aynı şey değil",
        paragraphs: [
          "Bir sitenin şık görünmesi, onu etkili yapmaz. Ziyaretçi sayfaya girdiğinde üç saniye içinde şunu anlamalı: burası ne satıyor, bana ne faydası var, şimdi ne yapmalıyım? Bu üç soruya net cevap vermeyen bir site, ne kadar iyi tasarlanmış olursa olsun ziyaretçiyi kaybeder.",
          "Çoğu hazır şablon sitede bu netlik yok — çünkü şablon herkese göre yazılmış, kimseye özel değil. Sonuç: ziyaretçi geliyor, bakıyor, çıkıyor.",
        ],
      },
      {
        heading: "İletişim tek bir tıkla olmalı",
        paragraphs: [
          "Bir müşteri adayının işletmenize ulaşmak için form doldurup e-posta beklemesi, günümüzde çoğu sektörde kayıp demek. WhatsApp'a tek tıkla yazabildiği, telefon numarasını göndermek zorunda kalmadığı bir site, dönüşüm oranını doğrudan etkiler.",
          "Bu küçük bir detay gibi görünür ama pratikte fark yaratır: iletişim ne kadar kolaysa, o kadar çok kişi gerçekten iletişime geçer.",
        ],
      },
      {
        heading: "Site bitince iş bitmiyor",
        paragraphs: [
          "Bir başka yaygın hata: siteyi teslim alıp unutmak. Fiyatlar güncellenmiyor, yeni hizmetler eklenmiyor, aylar sonra bakınca site hâlâ altı ay önceki hâliyle duruyor. Ziyaretçi güncel olmayan bir siteyi fark eder ve bu, güven kaybettirir.",
          "Sitenin canlı, düzenli güncellenen bir kanal olarak kalması, tek seferlik bir teslimattan çok daha değerli.",
        ],
      },
    ],
    closing:
      "Web Tasarım hizmetimizde 5 günde yayında garantisi veriyoruz — olmazsa ücret iade. Kira modeliyle çalışmıyoruz, kurduğumuz site ve alan adı size ait kalıyor. Mevcut sitenizi değerlendirmemizi ister misiniz?",
  },
  {
    slug: "google-isletme-profili-7-hata",
    title: "Google İşletme Profili'nde sık yapılan 7 hata",
    excerpt:
      "'Yakınımda emlakçı' ya da 'yakınımda diş kliniği' aratıldığında çıkan o harita listesi, birçok işletme için web sitesinden bile daha çok trafik getiriyor. Ama çoğu profil bu potansiyeli boşa harcıyor.",
    category: "Yerel SEO",
    date: "2026-07-20",
    readMinutes: 6,
    coverImage: "/hero/4.jpg",
    intro:
      "Google Haritalar'da işletmenizin çıkması, ücretsiz ve güçlü bir reklam kanalıdır — ama sadece doğru kurulduğunda işe yarar. Sahada sık gördüğümüz yedi hatayı, nasıl düzeltileceğiyle birlikte topladık.",
    sections: [
      {
        heading: "1-3: Eksik ve tutarsız bilgi",
        paragraphs: [
          "Kategori yanlış ya da eksik seçilmiş, çalışma saatleri güncel değil, adres farklı platformlarda farklı yazılmış — bu üç hata birlikte geldiğinde Google, işletmenizi arama sonuçlarında geriye atar. Google'ın önceliği kullanıcıya doğru bilgi vermek; tutarsız bilgi veren profiller cezalandırılır, gösterilmez.",
          "Çözüm basit ama göz ardı ediliyor: kategori, saat, adres, telefon — hepsi her platformda birebir aynı olmalı.",
        ],
      },
      {
        heading: "4-5: Görsel ve yorum eksikliği",
        paragraphs: [
          "Fotoğrafsız ya da eski fotoğraflarla dolu bir profil, kullanıcıya 'burası aktif değil' mesajı verir. Düzenli eklenen güncel fotoğraflar hem güven verir hem de Google'ın algoritmasında olumlu sinyal olarak değerlendirilir.",
          "Yorumlara gelen cevapsızlık da benzer bir sinyal: hem potansiyel müşteriye hem Google'a 'bu işletme ilgilenmiyor' der. Her yoruma — olumlu ya da olumsuz — kısa bir cevap vermek, aktif ve güvenilir görünmenin en ucuz yolu.",
        ],
      },
      {
        heading: "6-7: Kurup unutmak, rakiplerden habersiz olmak",
        paragraphs: [
          "Profili kurup bir daha dönmemek en yaygın hatalardan biri. Google, düzenli güncellenen (gönderi paylaşan, soru cevaplayan, fotoğraf ekleyen) profilleri daha aktif kabul eder ve öne çıkarır.",
          "Son olarak: rakiplerinizin profilini hiç incelememek. Onların hangi kategoriyi kullandığını, kaç yorumu olduğunu, ne sıklıkla güncellendiğini bilmeden kendi profilinizin nerede durduğunu ölçemezsiniz.",
        ],
      },
    ],
    closing:
      "Google İşletme Profili hizmetimizde kurulumu 5 günde tamamlıyoruz — bu bizim tarafımızdaki iş için garanti, Google'ın kendi doğrulama süreci ayrı işliyor. Profilinizi birlikte gözden geçirmek isterseniz yazın.",
  },
  {
    slug: "emlak-ofisleri-icin-cok-dilli-vitrin-sitesi",
    title: "Yabancı alıcıya satış yapan emlak ofisleri için çok dilli vitrin sitesi neden şart?",
    excerpt:
      "Portalda yayınlanan bir ilan, o portalın kurallarıyla sınırlıdır — markanız değil, portalın markası öne çıkar. Kendi vitrininiz olmadan, aslında kimseye ait olmayan bir müşteri kitlesine hizmet ediyorsunuz demektir.",
    category: "Emlak",
    date: "2026-07-12",
    readMinutes: 5,
    coverImage: "/hero/5.jpg",
    intro:
      "Sahibinden, Zingat gibi portallar ilan görünürlüğü için değerli — ama bir emlak ofisinin bütün dijital varlığını bu portallara bağlamak, uzun vadede riskli bir strateji. Özellikle yabancı alıcıya satış yapan ofisler için kendi vitrin sitesi, portföyünüzün ve markanızın kontrolünü elinizde tutmanın tek yolu.",
    sections: [
      {
        heading: "Portal bağımlılığının maliyeti görünmez ama gerçek",
        paragraphs: [
          "Portalda yayınlanan bir ilan, aynı sayfada onlarca rakip ilanla yan yana durur. Alıcının dikkati sizin değil, portalın; bir sonraki tık rakip ofisin ilanına gidebilir. Kendi vitrin siteniz olduğunda alıcı sadece sizin portföyünüzü görür, dikkati dağılmaz.",
          "Ayrıca portal politikaları değişebilir, ücretler artabilir, sıralama algoritması güncellenebilir — hiçbiri sizin kontrolünüzde değil. Kendi siteniz, bu değişkenlerden bağımsız, size ait kalıcı bir varlıktır.",
        ],
      },
      {
        heading: "Yabancı alıcı için dil, güvenin bir parçası",
        paragraphs: [
          "Türkçe bilmeyen bir alıcı, sadece Türkçe ilan gören bir siteye girdiğinde bilgiyi tam anlayamaz ve bu belirsizlik güven eksikliğine dönüşür. Çok dilli bir vitrin sitesi — özellikle İngilizce, Rusça, Almanca gibi hedef kitlenize uygun dillerde — alıcıya 'bu ofis benim için düşünülmüş' hissi verir.",
          "Bu sadece çeviri meselesi değil: döviz kuru gösterimi, bölgesel içerik, kültüre uygun sunum da aynı güven hissini pekiştirir.",
        ],
      },
      {
        heading: "Vitrin sitesi, portalları değil onları besleyen bir yapı olmalı",
        paragraphs: [
          "Kendi siteniz olması, portalları bırakmanız gerektiği anlamına gelmez — ikisi birlikte çalışabilir. Portallar size trafik getirirken, vitrin siteniz o trafiği markanıza, doğrudan iletişim kanalınıza yönlendirir. Zamanla portallara olan bağımlılığınız azalır, doğrudan gelen müşteri oranınız artar.",
        ],
      },
    ],
    closing:
      "VitrinOS ile emlak ofisiniz için çok dilli portföy vitrini, AI destekli ev turu videoları ve portal bağımsız bir yapı kuruyoruz. Portföyünüzü nasıl öne çıkarabileceğimizi konuşalım.",
  },
  {
    slug: "reklam-butcesi-cope-atmayin",
    title: "Reklam bütçenizi çöpe atmayın: Google & Meta Ads'te sık yapılan 5 hata",
    excerpt:
      "Reklam vermek kolay, doğru vermek zor. Bütçesi olan hemen hemen her işletme bir noktada reklam dener — ama çoğu, aynı beş hatadan birine düşüp 'reklam işe yaramıyor' sonucuna varır.",
    category: "Reklam Yönetimi",
    date: "2026-07-05",
    readMinutes: 6,
    coverImage: "/hero/2.jpg",
    intro:
      "Google ve Meta reklamları doğru kurulduğunda ölçülebilir, tahmin edilebilir bir müşteri kaynağı olur. Yanlış kurulduğunda ise bütçe hızla eriyip geriye hiçbir şey kalmaz. En sık gördüğümüz beş hatayı ve neden pahalıya patladığını anlatalım.",
    sections: [
      {
        heading: "1. Hedefleme olmadan geniş kitleye yayınlamak",
        paragraphs: [
          "'Herkese gösterelim, kim ilgilenirse dönsün' mantığı, bütçeyi en hızlı eritme yöntemidir. Reklam, ilgisiz bir kitleye gösterildiğinde tıklama alsa bile satışa dönüşmez — sadece bütçeyi tüketir.",
          "Doğru yaklaşım: yaş, konum, ilgi alanı gibi kriterlerle daraltılmış, gerçekten o ürünü/hizmeti arayan kitleye ulaşmak.",
        ],
      },
      {
        heading: "2. Açılış sayfası olmadan reklam vermek",
        paragraphs: [
          "Reklamı gören kişi tıklıyor ve genel bir ana sayfaya, ya da daha kötüsü, ilgisiz bir sayfaya düşüyor. Bu durumda tıklama parası ödenmiş ama dönüşüm şansı en baştan kaybedilmiş olur.",
          "Reklamın vaat ettiği şeyle, tıklanınca çıkan sayfanın içeriği birebir örtüşmeli — aksi hâlde ziyaretçi kafası karışık şekilde siteden ayrılır.",
        ],
      },
      {
        heading: "3-4: Ölçmemek ve erken vazgeçmek",
        paragraphs: [
          "Reklam yayına alınıp bir daha bakılmaması, en pahalı hatalardan biri. Hangi reklamın dönüş getirdiği, hangisinin bütçe yediği ölçülmeden karar vermek, kör uçmak demek.",
          "Diğer yaygın hata ise tam tersi: birkaç gün içinde sonuç gelmeyince kampanyayı durdurmak. Reklam algoritmaları öğrenmesi için zamana ihtiyaç duyar; çok erken müdahale, potansiyel olarak iyi giden bir kampanyayı daha veri toplayamadan bitirir.",
        ],
      },
      {
        heading: "5. Sonucu sadece satışla ölçmek",
        paragraphs: [
          "Bazı sektörlerde (özellikle yüksek bütçeli satışlarda) tek bir reklam tıklamasıyla anında satış beklemek gerçekçi değildir. Reklamın işlevi bazen doğrudan satış, bazen de WhatsApp'a yazma, form doldurma gibi bir sonraki adımı tetiklemektir. Bu ara adımları görmezden gelmek, aslında işe yarayan bir kampanyayı 'başarısız' diye kapatmaya sebep olabilir.",
        ],
      },
    ],
    closing:
      "Reklam Yönetimi hizmetimizde kampanyanızı kurup canlıya almayı garanti ediyoruz — reklam harcamasının doğrudan satışa dönüşeceğine dair söz vermiyoruz, çünkü bu kimsenin kontrolünde değil. Şeffaf ve ölçülebilir bir kampanya için bize yazın.",
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}
