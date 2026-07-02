import { createFileRoute, Link } from "@tanstack/react-router";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { BlogClient } from "@/components/BlogClient";
import { blogPosts as staticPosts } from "@/lib/content";
import type { BlogPost } from "@/lib/types";

function toPost(p: (typeof staticPosts)[0]): BlogPost {
  return {
    id: p.slug,
    slug: p.slug,
    title: p.title,
    excerpt: p.excerpt,
    content: p.content,
    category: p.category,
    read_time: p.readTime,
    published: true,
    created_at: p.date,
  };
}

function BlogPage() {
  const posts: BlogPost[] = staticPosts.map(toPost);
  return (
    <>
      <Navbar />
      <main>
        <section className="pt-40 pb-20" style={{ background: "#111111" }}>
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="flex items-center gap-3 mb-6">
              <Link to="/" className="text-xs tracking-widest uppercase text-white/40 hover:text-white/70 transition-colors">
                Home
              </Link>
              <span className="text-white/20">/</span>
              <span className="text-xs tracking-widest uppercase" style={{ color: "#C9A84C" }}>
                Blog
              </span>
            </div>
            <h1 className="font-serif font-light text-white mb-4" style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)" }}>
              Immigration Law
              <br />
              <span style={{ color: "#C9A84C" }}>Insights</span>
            </h1>
            <p className="text-white/60 text-lg font-light max-w-xl">
              Practical guidance on Lithuanian immigration law, residency, and citizenship.
            </p>
          </div>
        </section>
        <BlogClient posts={posts} />
      </main>
      <Footer />
    </>
  );
}

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title: "Blog — Ieva Bakare · Immigration Law Insights" },
      { name: "description", content: "Practical guidance on Lithuanian immigration law, residency, permits, appeals, and citizenship." },
      { property: "og:title", content: "Blog — Ieva Bakare · Immigration Law Insights" },
      { property: "og:description", content: "Practical guidance on Lithuanian immigration law, residency, and citizenship." },
    ],
  }),
  component: BlogPage,
});
