import type { Metadata } from "next";
import SectorPage from "@/components/SectorPage";
import { VITRINOS_CONTENT } from "@/lib/sectorContent";

export const metadata: Metadata = {
  title: "VitrinOS — B&S Media",
  description: "Sahibinden linkinden saniyeler içinde ilan çeken, çok dilli portföy sistemi. Emlak ofisleri için.",
};

export default function Page() {
  return <SectorPage config={VITRINOS_CONTENT} />;
}
