import type { Metadata } from "next";
import SectorPage from "@/components/SectorPage";
import { KLINIKOS_CONTENT } from "@/lib/sectorContent";

export const metadata: Metadata = {
  title: "KlinikOS — B&S Media",
  description: "Göz kamaştıran vitrin + arka planda hasta takip sistemi. Diş, estetik ve klinikler için.",
};

export default function Page() {
  return <SectorPage config={KLINIKOS_CONTENT} />;
}
