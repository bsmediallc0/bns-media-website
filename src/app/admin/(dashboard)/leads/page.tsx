import { getSupabaseServerClient } from "@/lib/supabase/server";
import LeadRow, { type Lead } from "@/components/admin/LeadRow";

export default async function AdminLeadsPage() {
  const supabase = await getSupabaseServerClient();
  const { data: leads } = supabase
    ? await supabase.from("leads").select("*").order("created_at", { ascending: false })
    : { data: [] as Lead[] };

  return (
    <div>
      <h1 className="font-display text-2xl text-ink">Talepler</h1>
      <p className="mt-1 text-sm text-body">
        Sistem sayfalarındaki, iletişim ve teklif formlarındaki tüm başvurular.
      </p>

      <div className="mt-6 overflow-x-auto rounded-2xl border border-line bg-white">
        <table className="w-full min-w-[720px] text-left">
          <thead>
            <tr className="border-b border-line text-xs text-body/60">
              <th className="px-4 py-3 font-medium">Tarih</th>
              <th className="px-4 py-3 font-medium">Kaynak</th>
              <th className="px-4 py-3 font-medium">Kişi</th>
              <th className="px-4 py-3 font-medium">Mesaj</th>
              <th className="px-4 py-3 font-medium">Durum</th>
              <th className="px-4 py-3 font-medium"></th>
            </tr>
          </thead>
          <tbody className="px-4">
            {(leads ?? []).map((lead) => (
              <LeadRow key={lead.id} lead={lead} />
            ))}
          </tbody>
        </table>

        {(!leads || leads.length === 0) && (
          <p className="px-4 py-8 text-center text-sm text-body/60">Henüz talep yok.</p>
        )}
      </div>
    </div>
  );
}
