# B&S Media v3 — Proje Durumu

> Bu dosya, projeye yeniden dönüldüğünde (yeni bir sohbette veya başka biri
> devam ettiğinde) hızlıca bağlam kazanmak için yazıldı. Son güncelleme:
> 20 Temmuz 2026.

## 1) Proje ne, kime satıyoruz

**B&S Media** — Antalya merkezli, "web sitesi değil, sistem kuruyoruz"
konumlandırmasıyla çalışan bir dijital stüdyo. Hedef kitle: villa/otel
sahipleri, emlak ofisleri, inşaat/kentsel dönüşüm firmaları, klinikler —
genelde teknolojiyle arası iyi olmayan, 35-60 yaş Türk işletmecileri.

Model: her sistem **kurulum (tek seferlik) + aylık işletme ücreti**.
Şu anki öncelik sırası: **RezerveOS (villa/otel) ilk** — çünkü en hızlı
nakit + en somut acı noktası (Booking/Airbnb komisyonu). VitrinOS ve
ŞantiyeOS ikinci sırada. **KlinikOS henüz satışa açık değil** (KVKK/sağlık
verisi riski + altyapı hazır değil) — sitede "yakında" olarak duruyor.

## 2) Tasarım sistemi (sıkı sıkıya uyulmalı)

> **Temmuz 2026 yeniden giydirme:** Tasarım felsefesi easehealth.com'dan
> uyarlandı — sakin, editoryal, "sessiz lüks". Koyu tema, kesik köşe ve
> nokta dokusu tamamen bırakıldı.

### Fontlar
- **Başlıklar:** Fraunces (zarif serif, 400, sıkı letter-spacing) — `.font-display` class'ı
- **Gövde metni ve etiketler:** DM Sans — `.mono-label` artık normal harfli sakin sans (uppercase/mono değil)
- Google Fonts, `latin-ext` subset (ı, ğ, ş, ö, ü, ç destekli). Space Mono kaldırıldı; `font-mono` da DM Sans'a maplenir.

### Renkler (`src/app/globals.css` içindeki `@theme`)
```
--color-cream: #fffdf8      (body + hero/footer zemini — sıcak krem)
--color-ink: #142136        (ana "mürekkep": metin + dolgu butonlar)
--color-navy / navy-2       (artık mürekkep tonları — koyu blok/buton; section zemini DEĞİL)
--color-blue: #1d5bbf       (vurgu mavisi, linkler; --color-cyan da buna eşitlendi)
--color-tint: #e3edf9       (pastel mavi kart/panel)
--color-mint: #e2f0e4       (pastel nane kart/panel)
--color-mist: #f7f4ec       (sıcak kağıt — alternatif açık section zemini)
--color-body: #46536a       (gövde metni)
--color-wa: #25d366         (WhatsApp CTA — değişmedi)
--color-line: #e7e1d4       (sıcak border)
```

### İmza görsel dil
- **Yumuşak yuvarlak köşe:** `.chamfer` = 14px, `.chamfer-bar` = 18px border-radius (kesik köşe clip-path'leri kaldırıldı, sınıf adları korundu)
- **Tamamen aydınlık site:** koyu section yok; ritim krem → sıcak kağıt → beyaz → pastel (tint/mint) şeklinde akar, section'lar bitişik/kenarsız
- **Kartlar:** beyaz veya pastel zemin, ince sıcak border, yumuşak gölge — degrade/neon/doku yok
- **Butonlar:** dolgu mürekkep (`bg-ink text-white`) veya beyaz/çizgili ikincil; **WhatsApp her yerde birincil CTA** (yeşil + `wa-pulse`)
- **Koyu vurgu blokları serbest:** DeviceShowcase cihaz çerçeveleri gibi küçük mürekkep-koyu bloklar aydınlık zeminde kontrast öğesi olarak kalabilir

### Animasyon kuralları
- Scroll-reveal: `Reveal.tsx` bileşeni (IntersectionObserver + `.reveal`/`.reveal.in` fade+translateY)
- `Ambient.tsx`: çok hafif pastel ışık kütleleri; `DotSpotlight.tsx`: imleç altında yumuşak ışık lekesi (nokta ızgarası değil)
- `prefers-reduced-motion` her yerde destekleniyor (globals.css sonunda global override)
- **DİKKAT:** rAF ve CSS transition'lar geliştirme/test ortamında (Claude Browser preview) bazen donuk kalabiliyor — bu ortam kısıtı, gerçek tarayıcıda sorun değil. Doğrulama yaparken state değişikliğini (aria-hidden, aria-current gibi) kontrol et, sadece computed opacity'ye güvenme.

### Navbar (`Nav.tsx`)
- Tam oval (pill) şekilde, kenarlardan boşluklu yüzen beyaz bar
- `data-nav-tone` mekanizması duruyor ama tüm section'lar "light" — bar hep açık stilde
- "Sistemler" → hover/focus dropdown (4 sistemi listeler); mobilde tıklanınca alt liste

### Bilinen "yapmayın" kuralları (kullanıcı geri bildirimi)
- **Emoji ikon yasak** — her yerde SVG kullan (stroke-based, tutarlı stroke width)
- **Uydurma/sahte veri yasak** — gerçek olmayan müşteri, proje, istatistik asla üretme (Referanslar sayfası bu yüzden boş duruyor, bkz. aşağı)
- **İngilizce/Türkçe karışık dil olmasın** — hedef kitle Türk, her yerde tutarlı Türkçe
- Fiyatlar her zaman açık gösterilsin, "teklif alın" diye gizlenmesin
- "Kapora" gibi itici kelimeler kullanılmasın, "sözleşme/garanti" dili tercih edilsin

## 3) Site haritası (`src/app/*/page.tsx`)

| Route | İçerik |
|---|---|
| `/` | Ana sayfa: Hero → Problem (otomatik geçişli 3 kart) → Systems (4 sistem kartı) → SiteVsSystem (düello karşılaştırma) → WhyBNS (4 sebep) → Steps (3 adım) → FAQ → Footer |
| `/rezerveos` | **En dolu sayfa** — Hero + Özellikler (6 madde) + Kayıp Hesaplayıcı (interaktif) + Paketler (3 tier) + SSS (4 soru) + Kapanış CTA + Footer |
| `/vitrinos`, `/santiyeos`, `/klinikos` | Genel `SystemPage.tsx` şablonu kullanıyor (basit hero + bullet + CTA) — **henüz RezerveOS gibi derinleştirilmedi** |
| `/hizmetler` | 4 sistemi kart olarak listeleyen genel hizmetler sayfası |
| `/referanslar` | **Dürüst placeholder** — "Projeler hazırlanıyor" + WhatsApp CTA. Gerçek proje bilgisi (2 inşaat, 1 mimarlık, 1 mbsshuttle projesi olduğu söylendi ama detaylar henüz verilmedi) gelince doldurulacak |
| `/blog` | Dürüst "İçerikler hazırlanıyor" placeholder |
| `/iletisim` | İletişim formu — WhatsApp'a önceden doldurulmuş mesajla yönlendirir (backend yok, gerçek çalışan tek yol) |
| `/teklif` | Ücretsiz teklif formu — sistem seçici (4 kart) + ad + mesaj → WhatsApp'a yönlendirir |

## 4) Bileşen envanteri (`src/components/`)

- **Ambient.tsx** — koyu/açık zeminlerde yavaş hareket eden ışık kütleleri (görünürlük bazlı duraklamalı)
- **DotSpotlight.tsx** — imleç yakınında nokta dokusunu parlatan spot ışığı efekti
- **Waves.tsx** — sol üstten sağ alta akan likit şerit (hero'larda), tam section'ı kaplar
- **PageIntro.tsx** — site ilk açılışında marka işaretinin çizilip perde kalkması (sadece ilk yüklemede, sekme içi navigasyonda tekrar oynamaz)
- **ScrollProgress.tsx** — sayfa tepesinde scroll ilerleme çubuğu
- **Reveal.tsx** — scroll-triggered fade+slide animasyon sarmalayıcısı
- **TiltCard.tsx** — imleçle 3B eğilen kart (Systems bölümünde kullanılıyor)
- **Nav.tsx / Footer.tsx** — site geneli, her sayfada var
- **FaqAccordion.tsx** — tekrar kullanılabilir SSS akordeonu (RezerveOS'ta kullanılıyor)
- **LossCalculator.tsx** — Booking komisyon kaybı hesaplayıcısı (RezerveOS'ta)
- **ContactForm.tsx / QuoteForm.tsx** — iletişim ve teklif formları, ikisi de WhatsApp'a yönlendirir
- **SystemPage.tsx** — vitrinos/santiyeos/klinikos'un kullandığı genel şablon
- **Hero.tsx, Problem.tsx, Systems.tsx, SiteVsSystem.tsx, WhyBNS.tsx, Steps.tsx, FAQ.tsx** — ana sayfaya özel section'lar

## 5) `src/lib/site.ts` — tek merkez veri

- `WHATSAPP_NUMBER` — **hâlâ placeholder** (`905000000000`), Berk'in gerçek numarasını yazması gerekiyor
- `REZERVEOS_DEMO_URL` — `http://localhost:3300` olarak ayarlandı, **demo projesinin kendi repo'suna işaret ediyor**. Deploy edilince gerçek public link buraya yazılmalı
- `NAV_ITEMS` — navbar/footer linkleri
- `SYSTEMS` — 4 sistemin (RezerveOS, VitrinOS, ŞantiyeOS, KlinikOS) adı/sektör/tagline/özellik listesi

## 6) RezerveOS paketleri (şu an `/rezerveos` sayfasında canlı)

| Paket | Kurulum | Aylık | İçerik |
|---|---|---|---|
| Vitrin | 20.000–25.000 TL | 1.500 TL | Tek villa, tek sayfa, WhatsApp rezervasyon |
| **Direkt Rezervasyon ⭐** | 40.000–55.000 TL | 2.500 TL | 4 dil, takvim senkronu, sezonluk fiyat, misafir yorumları |
| Portföy | 90.000–150.000 TL | 5.000 TL | Çoklu villa, filtreleme, tam rezervasyon akışı |

## 7) RezerveOS Demo Projesi (AYRI REPO)

**Konum:** `C:\Users\B E R K\.gemini\antigravity\scratch\rezerveos-demo\`
(bnsmedia-v3'ten tamamen ayrı bir Next.js projesi, kendi git repo'su var)

**Ne yapıyor:** "Elara Villa Collection" adında kurgusal bir villa sitesi —
müşteri tarafı (arama, takvim, rezervasyon akışı, PNR onay/fiş ekranı) +
yönetim paneli (dashboard, rezervasyon tablosu, manuel rezervasyon ekleme).
TR/EN/DE/RU çok dilli. `localhost:3300`'de çalışıyor.

**Bu oturumda yapılan düzeltmeler:**
- Admin panel toggle'ı geri plana alındı (misafir görünümü baskın, panel küçük ikincil link — kazara tıklanıp müşteriyi korkutmasın diye)
- Tüm emoji ikonlar → SVG ile değiştirildi
- İngilizce/Türkçe karışık admin panel → tamamen Türkçe
- **"Son Rezervasyonlar" widget'ı sahte isim + gerçek yabancıların Unsplash fotoğraflarını kullanıyordu** → gerçek `reservations` verisine bağlandı, baş harf avatarlarına geçildi
- Kırık bir SVG path (Deniz Manzaralı Balkon ikonu) düzeltildi
- Rezervasyon onay ekranı (Step 3) çok az bilgi içeriyordu → tam fiş haline getirildi (villa özeti, fiyat dökümü, misafir bilgileri, sıradaki adımlar)
- `Lorkan Villa` gibi anlamsız veri isimleri düzeltildi

**Henüz yapılmadı / dikkat edilmesi gerekenler:**
- Demo henüz **deploy edilmedi** — sadece localhost'ta çalışıyor
- Property/villa verisi tek villa üzerinden kurgulanmış (`INITIAL_PROPERTIES` içinde tek kayıt)

## 8) Sıradaki adımlar (öncelik sırasıyla)

1. **RezerveOS demo'yu deploy et** (Vercel önerilir) → `REZERVEOS_DEMO_URL`'i gerçek linkle güncelle
2. **Gerçek WhatsApp numarasını** `site.ts`'e yaz
3. **Referanslar sayfasını gerçek projelerle doldur** — 2 inşaat + 1 mimarlık + 1 mbsshuttle projesinin isim/link/açıklama detayları Berk'ten bekleniyor
4. VitrinOS ve ŞantiyeOS sayfalarını RezerveOS kalitesine çıkar (hesaplayıcı + paketler + kendi SSS'leri) — henüz genel `SystemPage` şablonunda kalıyorlar
5. KlinikOS — KVKK altyapısı kurulmadan satışa açma
6. Blog içerik üretimi (şu an dürüst "hazırlanıyor" placeholder)

## 9) Genel iş stratejisi notları (konuşmalardan)

- Satış sırası: villa/otel → emlak → inşaat → klinik (nakit hızına göre)
- Sezon ortasında (yaz) satış pitch'i "hemen geç" değil, **"şimdi konuş, kurulumu sezon sonunda/kışın yap"** şeklinde olmalı — villa sahibi şu an en meşgul dönemde, operasyonel risk almak istemez ama komisyon acısını en taze hissettiği an da şu an
- Saha satışında: aynı anda 4 vertical'a birden pitch yapma, RezerveOS'ta derinleş, diğerleri sitede "vitrin" olarak dursun
