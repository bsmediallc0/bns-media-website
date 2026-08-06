import type { Metadata } from "next";
import SectorPage from "@/components/SectorPage";
import { GOOGLE_ISLETME_PROFILI_CONTENT } from "@/lib/serviceContent";

export const metadata: Metadata = {
  title: "Google İşletme Profili Yönetimi — B&S Media",
  description: "İşletmenizi Google Haritalar'da ve yerel aramalarda öne çıkaran profil kurulumu ve düzenli yönetimi.",
};

export default function Page() {
  return <SectorPage config={GOOGLE_ISLETME_PROFILI_CONTENT} />;
}
