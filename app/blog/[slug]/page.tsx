import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Clock, Calendar, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { supabase } from "@/lib/supabase";
import { blogPosts as staticPosts, getPostBySlug } from "@/lib/content";
import type { BlogPost } from "@/lib/supabase";

export const revalidate = 60;

const supabaseReady =
  !!process.env.NEXT_PUBLIC_SUPABASE_URL &&
  !process.env.NEXT_PUBLIC_SUPABASE_URL.includes("your-project");

function staticToPost(p: ReturnType<typeof getPostBySlug>): BlogPost | null {
  if (!p) return null;
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

export async function generateStaticParams() {
  if (supabaseReady) {
    const { data } = await supabase
      .from("blog_posts")
      .select("slug")
      .eq("published", true);
    if (data && data.length > 0) return data.map((p) => ({ slug: p.slug }));
  }
  return staticPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  let title = "";
  let description = "";

  if (supabaseReady) {
    const { data } = await supabase
      .from("blog_posts")
      .select("title, excerpt")
      .eq("slug", slug)
      .eq("published", true)
      .single();
    if (data) { title = data.title; description = data.excerpt; }
  }

  if (!title) {
    const p = getPostBySlug(slug);
    if (p) { title = p.title; description = p.excerpt; }
  }

  if (!title) return {};
  return {
    title: `${title} — Ieva Bakare`,
    description,
  };
}

const categoryColors: Record<string, string> = {
  "Immigration Law": "#6B9EB8",
  "EU Residency": "#6B9EB8",
  Residence: "#6B9EB8",
  Appeals: "#C47A6A",
  Refusals: "#C47A6A",
  Family: "#7AAE82",
  "Family Reunification": "#7AAE82",
  Work: "#C9A84C",
  "Work Permits": "#C9A84C",
  Citizenship: "#9A8BB5",
  "Lithuanian Citizenship": "#9A8BB5",
};
function colorFor(cat: string) { return categoryColors[cat] ?? "#C9A84C"; }

function renderContent(content: string) {
  const lines = content.trim().split("\n");
  const html: string[] = [];
  for (const line of lines) {
    const t = line.trim();
    if (!t) { html.push("<br/>"); continue; }
    if (t.startsWith("## ")) {
      html.push(`<h2 class="font-serif font-medium text-[#111111] text-2xl mt-10 mb-4">${t.slice(3)}</h2>`);
    } else if (t.startsWith("### ")) {
      html.push(`<h3 class="font-serif font-medium text-[#111111] text-xl mt-8 mb-3">${t.slice(4)}</h3>`);
    } else if (t.startsWith("- **")) {
      const m = t.match(/^- \*\*(.+?)\*\*(.*)$/);
      if (m) html.push(`<li class="mb-2"><strong class="text-[#111111] font-medium">${m[1]}</strong><span class="text-[#6B6B6B] font-light">${m[2]}</span></li>`);
      else html.push(`<li class="text-[#6B6B6B] font-light mb-2">${t.slice(2)}</li>`);
    } else if (t.startsWith("- ")) {
      html.push(`<li class="text-[#6B6B6B] font-light mb-2">${t.slice(2)}</li>`);
    } else if (/^\d+\./.test(t)) {
      const body = t.replace(/^\d+\.\s*/, "").replace(/\*\*(.+?)\*\*/g, '<strong class="text-[#111111] font-medium">$1</strong>');
      html.push(`<li class="text-[#6B6B6B] font-light mb-3">${body}</li>`);
    } else if (t.startsWith("---")) {
      html.push(`<hr class="my-8" style="border-color:#E4E4E2"/>`);
    } else {
      const bold = t.replace(/\*\*(.+?)\*\*/g, '<strong class="text-[#111111] font-medium">$1</strong>');
      html.push(`<p class="text-[#6B6B6B] font-light leading-relaxed mb-0">${bold}</p>`);
    }
  }
  return html.join("\n");
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  let post: BlogPost | null = null;

  if (supabaseReady) {
    const { data } = await supabase
      .from("blog_posts")
      .select("*")
      .eq("slug", slug)
      .eq("published", true)
      .single();
    post = data ?? null;
  }

  if (!post) {
    post = staticToPost(getPostBySlug(slug));
  }

  if (!post) notFound();

  // Related posts
  type RelatedPost = { id: string; slug: string; title: string; category: string };
  let allPosts: RelatedPost[] = [];

  if (supabaseReady) {
    const { data } = await supabase
      .from("blog_posts")
      .select("id, slug, title, category")
      .eq("published", true)
      .neq("slug", slug);
    allPosts = data ?? [];
  }

  if (allPosts.length === 0) {
    allPosts = staticPosts
      .filter((p) => p.slug !== slug)
      .map((p) => ({ id: p.slug, slug: p.slug, title: p.title, category: p.category }));
  }

  const related: RelatedPost[] = [];
  const sameCat = allPosts.filter((p) => p.category === post!.category);
  related.push(...sameCat.slice(0, 2));
  if (related.length < 2) {
    const others = allPosts.filter((p) => !related.find((r) => r.id === p.id));
    related.push(...others.slice(0, 2 - related.length));
  }

  const formatDate = (d: string) =>
    new Date(d).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });

  return (
    <>
      <Navbar />
      <main>
        <section className="pt-36 pb-16" style={{ background: "#111111" }}>
          <div className="max-w-4xl mx-auto px-6 lg:px-12">
            <Link href="/blog" className="inline-flex items-center gap-2 text-xs tracking-widest uppercase text-white/40 hover:text-white/70 transition-colors mb-8">
              <ArrowLeft size={12} /> Back to Blog
            </Link>
            <div className="flex items-center gap-3 mb-6">
              <span
                className="text-[10px] font-medium tracking-[0.2em] uppercase px-3 py-1.5"
                style={{ color: colorFor(post.category), background: `${colorFor(post.category)}25` }}
              >
                {post.category}
              </span>
            </div>
            <h1 className="font-serif font-light text-white mb-6 leading-tight" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}>
              {post.title}
            </h1>
            <div className="flex items-center gap-6 text-white/40 text-xs font-light">
              <span className="flex items-center gap-2"><Calendar size={12} />{formatDate(post.created_at)}</span>
              <span className="flex items-center gap-2"><Clock size={12} />{post.read_time}</span>
              <span>Ieva Bakare</span>
            </div>
          </div>
        </section>

        <div className="h-1 w-full" style={{ background: `linear-gradient(90deg, ${colorFor(post.category)}, transparent)` }} />

        <section className="py-16 lg:py-24" style={{ background: "#F2F1EF" }}>
          <div className="max-w-4xl mx-auto px-6 lg:px-12 grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="prose-content space-y-4" dangerouslySetInnerHTML={{ __html: renderContent(post.content) }} />
            </div>
            <aside className="space-y-8">
              <div className="p-6" style={{ background: "#111111" }}>
                <p className="font-serif font-light text-white text-xl mb-3 leading-snug">Have a question?</p>
                <p className="text-white/55 text-sm font-light leading-relaxed mb-5">
                  Get in touch to ask about immigration law in Lithuania or a specific situation.
                </p>
                <Link href="/#contact" className="block text-center py-3 text-xs font-medium tracking-widest uppercase transition-opacity hover:opacity-80" style={{ background: "#C9A84C", color: "#111111" }}>
                  Get in Touch
                </Link>
              </div>
              {related.length > 0 && (
                <div>
                  <h3 className="text-xs tracking-widest uppercase font-medium text-[#6B6B6B]/60 mb-4">Related Articles</h3>
                  <div className="space-y-4">
                    {related.map((r) => (
                      <Link key={r.slug} href={`/blog/${r.slug}`} className="group block">
                        <div className="flex items-start gap-3">
                          <div className="w-1 h-12 shrink-0 mt-1" style={{ background: colorFor(r.category) }} />
                          <div>
                            <span className="text-[10px] font-medium tracking-widest uppercase" style={{ color: colorFor(r.category) }}>{r.category}</span>
                            <p className="font-serif font-medium text-[#111111] text-sm leading-snug group-hover:text-[#C9A84C] transition-colors duration-200">{r.title}</p>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </aside>
          </div>
        </section>

        <div className="border-t" style={{ background: "#F2F1EF", borderColor: "#E4E4E2" }}>
          <div className="max-w-4xl mx-auto px-6 lg:px-12 py-8 flex justify-between items-center">
            <Link href="/blog" className="inline-flex items-center gap-2 text-xs tracking-widest uppercase text-[#6B6B6B]/60 hover:text-[#111111] transition-colors">
              <ArrowLeft size={12} /> All Articles
            </Link>
            <Link href="/#contact" className="inline-flex items-center gap-2 text-xs tracking-widest uppercase transition-colors duration-200" style={{ color: "#C9A84C" }}>
              Get in Touch <ArrowRight size={12} />
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
