import type { Metadata } from "next";
import SectorPage from "@/components/SectorPage";
import DroneJourneySection from "@/components/DroneJourneySection";
import { CANLI_SANTIYE_CONTENT } from "@/lib/serviceContent";

export const metadata: Metadata = {
  title: "Canlı Şantiye — B&S Media",
  description:
    "Şantiyenizin aylık ilerleyişini, hak sahibinin tek bir linkle açıp görebildiği her zaman güncel bir takip sayfasına dönüştürüyoruz.",
};

const POINTS = [
  {
    title: "Çekimi biz yapıyoruz",
    text: "Drone, saha, düzenleme, yükleme — hepsi bize ait.",
  },
  {
    title: "Aynı açı, her ay",
    text: "Sabit noktalardan çekim, ilerlemeyi kıyaslanabilir kılar.",
  },
  {
    title: "Tek link, uygulama yok",
    text: "Hak sahibi tıklar ve görür; üyelik veya şifre gerekmez.",
  },
];

export default function Page() {
  return (
    <SectorPage
      config={CANLI_SANTIYE_CONTENT}
      extra={
        <DroneJourneySection
          heading="Hak sahibinin göreceği ekran."
          description="Aşağıdaki İnşaat Günlüğü, müşterilerimiz için kurduğumuz bölümün aynısı. Kaydırın — hak sahibi de kendi projesini yıkımdan teslime tam olarak böyle takip ediyor."
          points={POINTS}
          primaryFolder="canli"
          fallbackFolder="santiye"
          titlePrefix="İnşaat"
          titleAccent="Günlüğü"
          subtitle="Başlangıçtan bugüne, adım adım tüm süreç."
          badgeLabel="Şantiyeden"
          emptyHint="Henüz görsel yok — public/canli klasörüne dosya ekleyin."
        />
      }
    />
  );
}
