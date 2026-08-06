import type { Metadata } from "next";
import SectorPage from "@/components/SectorPage";
import { CANLI_MEKAN_CONTENT } from "@/lib/serviceContent";

export const metadata: Metadata = {
  title: "Canlı Mekan — B&S Media",
  description:
    "Satılık villanızı drone ile çekiyor, Türkçe-İngilizce altyazılı olarak sahibinden ve sosyal medyaya hazır teslim ediyoruz.",
};

export default function Page() {
  return <SectorPage config={CANLI_MEKAN_CONTENT} />;
}
