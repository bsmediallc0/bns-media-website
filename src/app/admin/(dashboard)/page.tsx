import Link from "next/link";
import { getSupabaseServerClient } from "@/lib/supabase/server";

export default async function AdminHomePage() {
  const supabase = await getSupabaseServerClient();

  const [{ count: leadCount }, { count: newLeadCount }, { count: seoPendingCount }] = supabase
    ? await Promise.all([
        supabase.from("leads").select("*", { count: "exact", head: true }),
        supabase.from("leads").select("*", { count: "exact", head: true }).eq("status", "yeni"),
        supabase.from("seo_requests").select("*", { count: "exact", head: true }).eq("status", "bekliyor"),
      ])
    : [{ count: 0 }, { count: 0 }, { count: 0 }];

  const stats = [
    { label: "Toplam talep", value: leadCount ?? 0, href: "/admin/leads" },
    { label: "Yeni talep", value: newLeadCount ?? 0, href: "/admin/leads" },
    { label: "Bekleyen SEO talebi", value: seoPendingCount ?? 0, href: "/admin/seo" },
  ];

  return (
    <div>
      <h1 className="font-display text-2xl text-ink">Genel bakış</h1>

      <div className="mt-6 grid gap-4 sm:grid-cols-3">
        {stats.map((s) => (
          <Link
            key={s.label}
            href={s.href}
            className="rounded-2xl border border-line bg-white p-6 transition-colors duration-150 hover:border-blue/40"
          >
            <p className="font-display text-3xl text-ink">{s.value}</p>
            <p className="mt-1 text-sm text-body">{s.label}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
