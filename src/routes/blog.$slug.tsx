import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, Clock, Calendar, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { blogPosts as staticPosts, getPostBySlug } from "@/lib/content";

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

function BlogPostPage() {
  const { slug } = Route.useParams();
  const post = getPostBySlug(slug);
  if (!post) throw notFound();

  const related = staticPosts
    .filter((p) => p.slug !== slug)
    .filter((p) => p.category === post.category)
    .slice(0, 2);
  if (related.length < 2) {
    const others = staticPosts.filter((p) => p.slug !== slug && !related.find((r) => r.slug === p.slug));
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
            <Link to="/blog" className="inline-flex items-center gap-2 text-xs tracking-widest uppercase text-white/40 hover:text-white/70 transition-colors mb-8">
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
              <span className="flex items-center gap-2"><Calendar size={12} />{formatDate(post.date)}</span>
              <span className="flex items-center gap-2"><Clock size={12} />{post.readTime}</span>
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
                <a href="/#contact" className="block text-center py-3 text-xs font-medium tracking-widest uppercase transition-opacity hover:opacity-80" style={{ background: "#C9A84C", color: "#111111" }}>
                  Get in Touch
                </a>
              </div>
              {related.length > 0 && (
                <div>
                  <h3 className="text-xs tracking-widest uppercase font-medium text-[#6B6B6B]/60 mb-4">Related Articles</h3>
                  <div className="space-y-4">
                    {related.map((r) => (
                      <Link key={r.slug} to="/blog/$slug" params={{ slug: r.slug }} className="group block">
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
            <Link to="/blog" className="inline-flex items-center gap-2 text-xs tracking-widest uppercase text-[#6B6B6B]/60 hover:text-[#111111] transition-colors">
              <ArrowLeft size={12} /> All Articles
            </Link>
            <a href="/#contact" className="inline-flex items-center gap-2 text-xs tracking-widest uppercase transition-colors duration-200" style={{ color: "#C9A84C" }}>
              Get in Touch <ArrowRight size={12} />
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

function NotFoundPost() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen flex items-center justify-center" style={{ background: "#F2F1EF" }}>
        <div className="text-center px-6">
          <p className="text-xs tracking-widest uppercase mb-4" style={{ color: "#C9A84C" }}>Not Found</p>
          <h1 className="font-serif text-3xl font-light text-[#111111] mb-6">Article not found</h1>
          <Link to="/blog" className="inline-flex items-center gap-2 text-xs tracking-widest uppercase text-[#111111] border-b border-[#111111] pb-1">
            <ArrowLeft size={12} /> Back to Blog
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}

function ErrorBoundary() {
  return <NotFoundPost />;
}

export const Route = createFileRoute("/blog/$slug")({
  head: ({ params }) => {
    const p = params ? getPostBySlug((params as { slug: string }).slug) : undefined;
    const title = p ? `${p.title} — Ieva Bakare` : "Article — Ieva Bakare";
    const desc = p?.excerpt ?? "Immigration law insights from Ieva Bakare.";
    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
        { property: "og:type", content: "article" },
      ],
    };
  },
  component: BlogPostPage,
  notFoundComponent: NotFoundPost,
  errorComponent: ErrorBoundary,
});
