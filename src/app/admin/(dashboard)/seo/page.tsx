import { getSupabaseServerClient } from "@/lib/supabase/server";
import { addSeoRequest } from "./actions";
import SeoRequestRow, {
  type SeoRequest,
} from "@/components/admin/SeoRequestRow";

export default async function AdminSeoPage() {
  const supabase = await getSupabaseServerClient();
  const { data: requests } = supabase
    ? await supabase
        .from("seo_requests")
        .select("*")
        .order("created_at", { ascending: false })
    : { data: [] as SeoRequest[] };

  return (
    <div>
      <h1 className="font-display text-2xl text-ink">SEO takibi</h1>
      <p className="mt-1 text-sm text-body">
        Hangi sayfa için ne istendiğini not et, yapılınca işaretle.
      </p>

      <form
        action={addSeoRequest}
        className="mt-6 flex flex-col gap-3 rounded-2xl border border-line bg-white p-4 sm:flex-row"
      >
        <input
          name="site"
          required
          placeholder="Sayfa / sistem (örn. ŞantiyeOS)"
          className="w-full rounded-xl border border-line bg-cream px-4 py-2.5 text-sm text-ink placeholder:text-body/50 focus:border-blue focus:outline-none sm:w-56"
        />
        <input
          name="request"
          required
          placeholder="Ne talep edildi?"
          className="w-full flex-1 rounded-xl border border-line bg-cream px-4 py-2.5 text-sm text-ink placeholder:text-body/50 focus:border-blue focus:outline-none"
        />
        <button
          type="submit"
          className="chamfer shrink-0 bg-ink px-5 py-2.5 text-sm font-medium text-white transition-colors duration-150 hover:bg-navy-2"
        >
          Ekle
        </button>
      </form>

      <div className="mt-6 rounded-2xl border border-line bg-white">
        {(requests ?? []).map((item) => (
          <SeoRequestRow key={item.id} item={item} />
        ))}
        {(!requests || requests.length === 0) && (
          <p className="px-4 py-8 text-center text-sm text-body/60">
            Henüz SEO talebi yok.
          </p>
        )}
      </div>
    </div>
  );
}
