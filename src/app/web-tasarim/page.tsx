import type { Metadata } from "next";
import SectorPage from "@/components/SectorPage";
import { WEB_TASARIM_CONTENT } from "@/lib/serviceContent";

export const metadata: Metadata = {
  title: "Web Tasarım — B&S Media",
  description: "Sektörel sistemlerin dışında kalan işletmeler için hızlı, SEO uyumlu ve markanıza özel web sitesi tasarımı.",
};

export default function Page() {
  return <SectorPage config={WEB_TASARIM_CONTENT} />;
}
