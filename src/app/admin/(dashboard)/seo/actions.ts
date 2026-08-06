"use server";

import { revalidatePath } from "next/cache";
import { getSupabaseServerClient } from "@/lib/supabase/server";

export async function addSeoRequest(formData: FormData) {
  const supabase = await getSupabaseServerClient();
  if (!supabase) return;

  const site = String(formData.get("site") ?? "").trim();
  const request = String(formData.get("request") ?? "").trim();
  if (!site || !request) return;

  await supabase.from("seo_requests").insert({ site, request });
  revalidatePath("/admin/seo");
}

export async function toggleSeoStatus(id: string, currentStatus: string) {
  const supabase = await getSupabaseServerClient();
  if (!supabase) return;
  const next = currentStatus === "yapildi" ? "bekliyor" : "yapildi";
  await supabase.from("seo_requests").update({ status: next }).eq("id", id);
  revalidatePath("/admin/seo");
}

export async function deleteSeoRequest(id: string) {
  const supabase = await getSupabaseServerClient();
  if (!supabase) return;
  await supabase.from("seo_requests").delete().eq("id", id);
  revalidatePath("/admin/seo");
}
