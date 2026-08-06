"use client";

import { useTransition } from "react";
import { deleteLead, updateLeadStatus } from "@/app/admin/(dashboard)/leads/actions";

const STATUSES = ["yeni", "iletisime_gecildi", "kazanildi", "kaybedildi"] as const;
const STATUS_LABELS: Record<string, string> = {
  yeni: "Yeni",
  iletisime_gecildi: "İletişime geçildi",
  kazanildi: "Kazanıldı",
  kaybedildi: "Kaybedildi",
};

const SOURCE_LABELS: Record<string, string> = {
  lead_form: "Sistem sayfası formu",
  contact_form: "İletişim formu",
  quote_form: "Teklif formu",
};

export type Lead = {
  id: string;
  created_at: string;
  source: string;
  name: string | null;
  phone: string | null;
  email: string | null;
  message: string | null;
  status: string;
};

export default function LeadRow({ lead }: { lead: Lead }) {
  const [isPending, startTransition] = useTransition();

  return (
    <tr className="border-b border-line last:border-0">
      <td className="px-4 py-3 align-top text-xs whitespace-nowrap text-body/70">
        {new Date(lead.created_at).toLocaleString("tr-TR", { dateStyle: "short", timeStyle: "short" })}
      </td>
      <td className="px-4 py-3 align-top text-xs whitespace-nowrap text-body">
        {SOURCE_LABELS[lead.source] ?? lead.source}
      </td>
      <td className="px-4 py-3 align-top text-sm text-ink">
        <p className="font-medium">{lead.name || "—"}</p>
        <p className="text-xs text-body/70">{lead.phone || lead.email || "—"}</p>
      </td>
      <td className="max-w-xs px-4 py-3 align-top text-sm text-body">{lead.message || "—"}</td>
      <td className="px-4 py-3 align-top">
        <select
          value={lead.status}
          disabled={isPending}
          onChange={(e) => startTransition(() => updateLeadStatus(lead.id, e.target.value))}
          className="rounded-lg border border-line bg-cream px-2.5 py-1.5 text-xs text-ink focus:border-blue focus:outline-none"
        >
          {STATUSES.map((s) => (
            <option key={s} value={s}>
              {STATUS_LABELS[s]}
            </option>
          ))}
        </select>
      </td>
      <td className="px-4 py-3 align-top">
        <button
          type="button"
          disabled={isPending}
          onClick={() => startTransition(() => deleteLead(lead.id))}
          className="text-xs text-body/50 transition-colors duration-150 hover:text-[#B4423B]"
        >
          Sil
        </button>
      </td>
    </tr>
  );
}
