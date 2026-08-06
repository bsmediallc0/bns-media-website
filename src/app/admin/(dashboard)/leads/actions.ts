"use server";

import { revalidatePath } from "next/cache";
import { getSupabaseServerClient } from "@/lib/supabase/server";

export async function updateLeadStatus(id: string, status: string) {
  const supabase = await getSupabaseServerClient();
  if (!supabase) return;
  await supabase.from("leads").update({ status }).eq("id", id);
  revalidatePath("/admin/leads");
}

export async function deleteLead(id: string) {
  const supabase = await getSupabaseServerClient();
  if (!supabase) return;
  await supabase.from("leads").delete().eq("id", id);
  revalidatePath("/admin/leads");
}
