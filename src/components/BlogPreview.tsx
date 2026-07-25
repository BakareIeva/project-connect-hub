
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Clock, Play } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { blogPosts } from "@/lib/content";
import { useLanguage } from "@/lib/LanguageContext";

const categoryColors: Record<string, string> = {
  Residence: "#6B9EB8", Appeals: "#C47A6A", Family: "#7AAE82", Work: "#C9A84C", Citizenship: "#9A8BB5",
};

function getYouTubeId(content: string | undefined): string | null {
  if (!content) return null;
  const m = content.match(/@\[video\]\((?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/embed\/|youtu\.be\/|youtube\.com\/watch\?v=)([A-Za-z0-9_-]{11})/);
  return m ? m[1] : null;
}

export default function BlogPreview() {
  const { t } = useLanguage();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const latest = blogPosts.slice(0, 3);

  const formatDate = (d: string) =>
    new Date(d).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });

  return (
    <section id="blog" className="py-28 lg:py-40" style={{ background: "#F2F1EF" }}>
      <div ref={ref} className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 gap-6"
        >
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-px" style={{ background: "#C9A84C" }} />
              <span className="text-xs font-medium tracking-[0.3em] uppercase" style={{ color: "#C9A84C" }}>
                {t.blog.eyebrow}
              </span>
            </div>
            <h2 className="font-serif font-light text-[#111111]" style={{ fontSize: "clamp(2.2rem, 5vw, 3.2rem)" }}>
              {t.blog.heading1}
              <br />
              {t.blog.heading2}
            </h2>
          </div>
          <Link
            to="/blog"
            className="group inline-flex items-center gap-3 text-xs font-medium tracking-widest uppercase transition-colors duration-200 shrink-0 pb-1"
            style={{ color: "#111111", borderBottom: "1px solid #C9A84C" }}
          >
            {t.blog.allArticles}
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {latest.map((post, i) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.12 }}
            >
              <Link to="/blog/$slug" params={{ slug: post.slug }} className="group block h-full">
                <article
                  className="h-full flex flex-col bg-white transition-all duration-300 border"
                  style={{ borderColor: "#E4E4E2" }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = "0 12px 40px rgba(26,43,74,0.1)"; (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = "none"; (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; }}
                >
                  <div className="h-1 w-full" style={{ background: categoryColors[post.category] ?? "#C9A84C" }} />
                  {(() => {
                    const ytId = getYouTubeId((post as { content?: string }).content);
                    if (!ytId) return null;
                    return (
                      <div className="relative w-full aspect-video overflow-hidden bg-black">
                        <img src={`https://img.youtube.com/vi/${ytId}/maxresdefault.jpg`} onError={(e) => { (e.currentTarget as HTMLImageElement).src = `https://img.youtube.com/vi/${ytId}/hqdefault.jpg`; }} alt="" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                        <div className="absolute inset-0 flex items-center justify-center" aria-hidden>
                          <div className="w-14 h-14 flex items-center justify-center transition-transform duration-300 group-hover:scale-110" style={{ background: "#C9A84C" }}>
                            <Play size={20} style={{ color: "#111111" }} fill="#111111" />
                          </div>
                        </div>
                        <span className="absolute top-2 left-2 px-2 py-0.5 text-[10px] font-medium tracking-widest uppercase bg-black/70 text-white">Video</span>
                      </div>
                    );
                  })()}
                  <div className="p-7 flex flex-col flex-1">
                    <div className="flex items-center gap-3 mb-5">
                      <span className="text-[10px] font-medium tracking-[0.2em] uppercase px-2.5 py-1" style={{ color: categoryColors[post.category] ?? "#C9A84C", background: `${categoryColors[post.category] ?? "#C9A84C"}18` }}>
                        {post.category}
                      </span>
                      <div className="flex items-center gap-1 text-[#6B6B6B]/60 text-xs">
                        <Clock size={11} />
                        {post.readTime}
                      </div>
                    </div>
                    <h3 className="font-serif font-medium text-[#111111] text-xl leading-snug mb-3 group-hover:text-[#C9A84C] transition-colors duration-200">
                      {post.title}
                    </h3>
                    <p className="text-[#6B6B6B] text-sm leading-relaxed font-light flex-1 mb-6">{post.excerpt}</p>
                    <div className="flex items-center justify-between pt-4 border-t" style={{ borderColor: "#E4E4E2" }}>
                      <time className="text-xs text-[#6B6B6B]/50 font-light">{formatDate(post.date)}</time>
                      <span className="flex items-center gap-1.5 text-xs font-medium tracking-wide group-hover:gap-2.5 transition-all duration-200" style={{ color: "#C9A84C" }}>
                        {t.blog.read} <ArrowRight size={12} />
                      </span>
                    </div>
                  </div>
                </article>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
