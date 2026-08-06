import type { Metadata } from "next";
import SectorPage from "@/components/SectorPage";
import { REKLAM_YONETIMI_CONTENT } from "@/lib/serviceContent";

export const metadata: Metadata = {
  title: "Reklam Yönetimi — B&S Media",
  description: "Google Ads ve Meta reklam kampanyalarınızı kuran, optimize eden ve raporlayan yönetim hizmeti.",
};

export default function Page() {
  return <SectorPage config={REKLAM_YONETIMI_CONTENT} />;
}
