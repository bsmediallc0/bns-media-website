import type { ReactNode } from "react";
import { redirect } from "next/navigation";
import { headers } from "next/headers";
import { getSupabaseServerClient } from "@/lib/supabase/server";
import AdminSidebar from "@/components/admin/AdminSidebar";

export default async function AdminDashboardLayout({ children }: { children: ReactNode }) {
  const host = (await headers()).get("host") ?? "";
  const loginPath = host.startsWith("app.") ? "/login" : "/admin/login";

  const supabase = await getSupabaseServerClient();
  if (!supabase) redirect(loginPath);

  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) redirect(loginPath);

  return (
    <div className="flex min-h-dvh bg-cream">
      <AdminSidebar email={user.email ?? ""} />
      <main className="flex-1 overflow-x-hidden px-8 py-8">{children}</main>
    </div>
  );
}
