"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Clock, Search } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";
import type { BlogPost } from "@/lib/supabase";

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

function colorFor(cat: string) {
  return categoryColors[cat] ?? "#C9A84C";
}

export function BlogClient({ posts }: { posts: BlogPost[] }) {
  const { t } = useLanguage();
  const allLabel = t.blogPage.all;
  const categoryKeys = Array.from(new Set(posts.map((p) => p.category)));
  const allCategories = [allLabel, ...categoryKeys];

  const [activeCategory, setActiveCategory] = useState<string>(allLabel);
  const [query, setQuery] = useState("");

  const filtered = posts.filter((p) => {
    const matchCat = activeCategory === allLabel || p.category === activeCategory;
    const matchQ =
      query.trim() === "" ||
      p.title.toLowerCase().includes(query.toLowerCase()) ||
      p.excerpt.toLowerCase().includes(query.toLowerCase());
    return matchCat && matchQ;
  });

  const formatDate = (d: string) =>
    new Date(d).toLocaleDateString("en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });

  return (
    <>
      {/* Filters */}
      <div
        className="sticky top-0 z-30 border-b"
        style={{ background: "#F2F1EF", borderColor: "#E4E4E2" }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-4 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
          <div className="flex flex-wrap gap-2">
            {allCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className="px-4 py-1.5 text-xs font-medium tracking-widest uppercase transition-all duration-200"
                style={{
                  background: activeCategory === cat ? "#111111" : "transparent",
                  color: activeCategory === cat ? "white" : "#6B6B6B",
                  border: "1px solid",
                  borderColor: activeCategory === cat ? "#111111" : "#E4E4E2",
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="relative">
            <Search
              size={14}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-[#6B6B6B]/50"
            />
            <input
              type="text"
              placeholder={t.blogPage.searchPlaceholder}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="pl-9 pr-4 py-2 text-sm font-light border outline-none transition-colors duration-200 w-56"
              style={{ background: "white", borderColor: "#E4E4E2", color: "#111111" }}
              onFocus={(e) => ((e.target as HTMLInputElement).style.borderColor = "#C9A84C")}
              onBlur={(e) => ((e.target as HTMLInputElement).style.borderColor = "#E4E4E2")}
            />
          </div>
        </div>
      </div>

      {/* Posts grid */}
      <div className="py-16 lg:py-24" style={{ background: "#F2F1EF" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {filtered.length === 0 ? (
            <div className="text-center py-20 text-[#6B6B6B]/50 font-light">
              {t.blogPage.noResults}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((post, i) => (
                <motion.div
                  key={post.slug}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.07 }}
                >
                  <Link href={`/blog/${post.slug}`} className="group block h-full">
                    <article
                      className="h-full flex flex-col bg-white transition-all duration-300 border"
                      style={{ borderColor: "#E4E4E2" }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLElement).style.boxShadow =
                          "0 12px 40px rgba(26,43,74,0.1)";
                        (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLElement).style.boxShadow = "none";
                        (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                      }}
                    >
                      <div
                        className="h-1 w-full"
                        style={{ background: colorFor(post.category) }}
                      />
                      <div className="p-7 flex flex-col flex-1">
                        <div className="flex items-center gap-3 mb-5">
                          <span
                            className="text-[10px] font-medium tracking-[0.2em] uppercase px-2.5 py-1"
                            style={{
                              color: colorFor(post.category),
                              background: `${colorFor(post.category)}18`,
                            }}
                          >
                            {post.category}
                          </span>
                          <div className="flex items-center gap-1 text-[#6B6B6B]/60 text-xs">
                            <Clock size={11} />
                            {post.read_time}
                          </div>
                        </div>

                        <h2 className="font-serif font-medium text-[#111111] text-xl leading-snug mb-3 group-hover:text-[#C9A84C] transition-colors duration-200">
                          {post.title}
                        </h2>
                        <p className="text-[#6B6B6B] text-sm leading-relaxed font-light flex-1 mb-6">
                          {post.excerpt}
                        </p>

                        <div
                          className="flex items-center justify-between pt-4 border-t"
                          style={{ borderColor: "#E4E4E2" }}
                        >
                          <time className="text-xs text-[#6B6B6B]/50 font-light">
                            {formatDate(post.created_at)}
                          </time>
                          <span
                            className="flex items-center gap-1.5 text-xs font-medium tracking-wide group-hover:gap-2.5 transition-all duration-200"
                            style={{ color: "#C9A84C" }}
                          >
                            {t.blogPage.readMore} <ArrowRight size={12} />
                          </span>
                        </div>
                      </div>
                    </article>
                  </Link>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
