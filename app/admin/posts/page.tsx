import Link from "next/link";
import { supabase } from "@/lib/supabase";
import { DeleteButton, TogglePublishButton } from "./PostActions";

export default async function AdminPostsPage() {
  const { data: posts, error } = await supabase
    .from("blog_posts")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    return (
      <div className="min-h-screen bg-[#111111] flex items-center justify-center">
        <p className="text-red-400">Error loading posts: {error.message}</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#111111] text-white">
      <header className="border-b border-white/10 px-8 py-5 flex items-center justify-between">
        <div>
          <p className="text-[#C9A84C] text-xs tracking-[0.2em] uppercase">Admin</p>
          <h1 className="text-white font-serif text-xl mt-0.5">Blog Posts</h1>
        </div>
        <div className="flex items-center gap-6">
          <Link href="/admin" className="text-white/40 hover:text-white text-sm transition-colors">
            ← Dashboard
          </Link>
          <Link
            href="/admin/posts/new"
            className="bg-[#C9A84C] text-[#111111] text-sm font-semibold px-4 py-2 rounded hover:bg-[#A8872E] transition-colors"
          >
            New post
          </Link>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-8 py-10">
        {posts && posts.length === 0 ? (
          <p className="text-white/40 text-center py-20">No posts yet.</p>
        ) : (
          <div className="space-y-3">
            {posts?.map((post) => (
              <div
                key={post.id}
                className="border border-white/10 rounded-lg px-6 py-4 flex items-center justify-between gap-4"
              >
                <div className="min-w-0">
                  <p className="text-white font-medium truncate">{post.title}</p>
                  <p className="text-white/30 text-sm mt-0.5">
                    {post.category} · {new Date(post.created_at).toLocaleDateString("en-GB")}
                    {" · "}
                    <span className={post.published ? "text-green-400" : "text-white/30"}>
                      {post.published ? "Published" : "Draft"}
                    </span>
                  </p>
                </div>
                <div className="flex items-center gap-3 shrink-0">
                  <TogglePublishButton id={post.id} published={post.published} />
                  <Link
                    href={`/admin/posts/${post.id}`}
                    className="text-white/50 hover:text-white text-sm transition-colors"
                  >
                    Edit
                  </Link>
                  <DeleteButton id={post.id} />
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
