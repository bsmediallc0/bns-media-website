import type { Metadata } from "next";
import SectorPage from "@/components/SectorPage";
import { SANTIYEOS_CONTENT } from "@/lib/sectorContent";

export const metadata: Metadata = {
  title: "ŞantiyeOS — B&S Media",
  description: "Hak sahibinin güvendiği, teklif sürecini hızlandıran müteahhitlik sistemi. İnşaat ve kentsel dönüşüm firmaları için.",
};

export default function Page() {
  return <SectorPage config={SANTIYEOS_CONTENT} />;
}
