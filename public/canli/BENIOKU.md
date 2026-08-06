# Canlı Şantiye görselleri

Bu klasöre dosya attığınız anda /canli-santiye sayfasındaki
İnşaat Günlüğü bölümü otomatik olarak bunları gösterir.
(Klasör boşken public/santiye'deki örnek karelere düşer.)

## Dosya adlandırma

    01-hafriyat.mp4        ->  "01" + "Hafriyat"
    02-temel-ve-kolonlar.mp4 -> "02" + "Temel ve kolonlar"
    03.jpg                 ->  "03" (etiketsiz)

- Baştaki numara sırayı belirler.
- Numaradan sonrası kartın altındaki yazı olur; tireler boşluğa çevrilir.
- Türkçe karakter kullanabilirsiniz (test edildi, sorunsuz).

## Video eklemek

Videoyla **aynı isimli** bir görsel koyarsanız o görsel posteri olur:

    03-kaba-yapı.mp4   (video)
    03-kaba-yapı.webp  (poster — kartta bu görünür)

Video sayfa açılışında inmez, sadece tıklanınca oynar.

## Önemli: format ve boyut

- Videolar **H.264** olmalı. Telefon/drone çoğunlukla **HEVC (H.265)**
  çekiyor ve Chrome/Firefox bunu OYNATMAZ.
- Ham 4K dosyalar 50-100 MB; web için 900x1200 / CRF 27'ye düşürülmeli
  (yaklaşık 3-7 MB).
- Ham dosyaları `media-kaynak/` klasöründe tutuyoruz, oradan dönüştürüp
  buraya koyuyoruz. `media-kaynak/` deploy'a gitmiyor.

Dönüştürme komutu:

    ffmpeg -i ham.mp4 -vf scale=900:1200 -c:v libx264 -profile:v high       -preset medium -crf 27 -c:a aac -b:a 64k -ac 1       -movflags +faststart cikti.mp4
