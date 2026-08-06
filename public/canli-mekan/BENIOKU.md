# Canlı Mekan görselleri

Bu klasöre dosya attığınız anda /canli-mekan sayfasındaki
Mekan Günlüğü bölümü otomatik olarak bunları gösterir.

## Dosya adlandırma

    01-havuz.mp4            ->  "01" + "Havuz"
    02-genel-gorunum.jpg    ->  "02" + "Genel görünüm"
    03.jpg                  ->  "03" (etiketsiz)

- Baştaki numara sırayı belirler.
- Numaradan sonrası kartın altındaki yazı olur; tireler boşluğa çevrilir.

## Video eklemek

Videoyla **aynı isimli** bir görsel koyarsanız o görsel posteri olur:

    01-havuz.mp4   (video)
    01-havuz.webp  (poster — kartta bu görünür)

Video sayfa açılışında sessiz ve otomatik oynar.

## Önemli: format ve boyut

- Videolar **H.264** olmalı. Telefon/drone çoğunlukla **HEVC (H.265)**
  çekiyor ve Chrome/Firefox bunu OYNATMAZ.
- Ham 4K dosyalar 50-100 MB; web için 720x960 / CRF 30, sessiz (ses
  gerekmiyor, otomatik oynatma zaten sessiz) olacak şekilde düşürülmeli
  (yaklaşık 1-3 MB).

Dönüştürme komutu (ses kaldırılmış, web'e uygun):

    ffmpeg -i ham.mp4 -vf scale=720:960 -c:v libx264 -profile:v high \
      -preset slow -crf 30 -an -movflags +faststart cikti.mp4
