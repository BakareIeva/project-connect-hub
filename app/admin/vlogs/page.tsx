import Link from "next/link";
import { supabase } from "@/lib/supabase";
import { DeleteVlogButton, ToggleVlogPublishButton } from "./VlogActions";

export default async function AdminVlogsPage() {
  const { data: vlogs, error } = await supabase
    .from("vlog_entries")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    return (
      <div className="min-h-screen bg-[#111111] flex items-center justify-center">
        <p className="text-red-400">Error loading vlogs: {error.message}</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#111111] text-white">
      <header className="border-b border-white/10 px-8 py-5 flex items-center justify-between">
        <div>
          <p className="text-[#C9A84C] text-xs tracking-[0.2em] uppercase">Admin</p>
          <h1 className="text-white font-serif text-xl mt-0.5">Vlog Entries</h1>
        </div>
        <div className="flex items-center gap-6">
          <Link href="/admin" className="text-white/40 hover:text-white text-sm transition-colors">
            ← Dashboard
          </Link>
          <Link
            href="/admin/vlogs/new"
            className="bg-[#C9A84C] text-[#111111] text-sm font-semibold px-4 py-2 rounded hover:bg-[#A8872E] transition-colors"
          >
            Add vlog
          </Link>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-8 py-10">
        {vlogs && vlogs.length === 0 ? (
          <p className="text-white/40 text-center py-20">No vlog entries yet.</p>
        ) : (
          <div className="space-y-3">
            {vlogs?.map((vlog) => (
              <div
                key={vlog.id}
                className="border border-white/10 rounded-lg px-6 py-4 flex items-center justify-between gap-4"
              >
                <div className="min-w-0">
                  <p className="text-white font-medium truncate">{vlog.title}</p>
                  <p className="text-white/30 text-sm mt-0.5">
                    {vlog.duration} · {new Date(vlog.created_at).toLocaleDateString("en-GB")}
                    {" · "}
                    <span className={vlog.published ? "text-green-400" : "text-white/30"}>
                      {vlog.published ? "Published" : "Draft"}
                    </span>
                  </p>
                </div>
                <div className="flex items-center gap-3 shrink-0">
                  <ToggleVlogPublishButton id={vlog.id} published={vlog.published} />
                  <Link
                    href={`/admin/vlogs/${vlog.id}`}
                    className="text-white/50 hover:text-white text-sm transition-colors"
                  >
                    Edit
                  </Link>
                  <DeleteVlogButton id={vlog.id} />
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
