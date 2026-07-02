import Link from "next/link";
import { supabase } from "@/lib/supabase";

async function getCounts() {
  const [posts, vlogs] = await Promise.all([
    supabase.from("blog_posts").select("id, published"),
    supabase.from("vlog_entries").select("id, published"),
  ]);
  return {
    posts: posts.data ?? [],
    vlogs: vlogs.data ?? [],
  };
}

export default async function AdminDashboard() {
  const { posts, vlogs } = await getCounts();
  const publishedPosts = posts.filter((p) => p.published).length;
  const publishedVlogs = vlogs.filter((v) => v.published).length;

  return (
    <div className="min-h-screen bg-[#111111] text-white">
      <header className="border-b border-white/10 px-8 py-5 flex items-center justify-between">
        <div>
          <p className="text-[#C9A84C] text-xs tracking-[0.2em] uppercase">Ieva Bakare</p>
          <h1 className="text-white font-serif text-xl mt-0.5">Admin Dashboard</h1>
        </div>
        <div className="flex items-center gap-6">
          <Link href="/" className="text-white/40 hover:text-white text-sm transition-colors">
            ← View site
          </Link>
          <form action="/api/admin/logout" method="POST">
            <button className="text-white/40 hover:text-white text-sm transition-colors">
              Sign out
            </button>
          </form>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-8 py-12">
        <div className="grid grid-cols-2 gap-6 mb-12">
          <div className="border border-white/10 rounded-lg p-6">
            <p className="text-white/40 text-xs tracking-widest uppercase mb-1">Blog Posts</p>
            <p className="text-4xl font-serif text-white">{posts.length}</p>
            <p className="text-white/30 text-sm mt-1">{publishedPosts} published</p>
          </div>
          <div className="border border-white/10 rounded-lg p-6">
            <p className="text-white/40 text-xs tracking-widest uppercase mb-1">Vlog Entries</p>
            <p className="text-4xl font-serif text-white">{vlogs.length}</p>
            <p className="text-white/30 text-sm mt-1">{publishedVlogs} published</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div className="border border-white/10 rounded-lg p-6 space-y-3">
            <h2 className="text-[#C9A84C] text-xs tracking-widest uppercase">Blog</h2>
            <Link
              href="/admin/posts"
              className="block text-white hover:text-[#C9A84C] transition-colors"
            >
              Manage posts →
            </Link>
            <Link
              href="/admin/posts/new"
              className="block text-white hover:text-[#C9A84C] transition-colors"
            >
              Write new post →
            </Link>
          </div>
          <div className="border border-white/10 rounded-lg p-6 space-y-3">
            <h2 className="text-[#C9A84C] text-xs tracking-widest uppercase">Vlog</h2>
            <Link
              href="/admin/vlogs"
              className="block text-white hover:text-[#C9A84C] transition-colors"
            >
              Manage vlogs →
            </Link>
            <Link
              href="/admin/vlogs/new"
              className="block text-white hover:text-[#C9A84C] transition-colors"
            >
              Add new vlog →
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
