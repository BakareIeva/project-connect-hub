"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Play, X, Clock, ArrowRight } from "lucide-react";
import Link from "next/link";
import { videos } from "@/lib/content";
import { useLanguage } from "@/lib/LanguageContext";

export default function Videos() {
  const { t } = useLanguage();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  const formatDate = (d: string) =>
    new Date(d).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" });

  const featured = videos[0];
  const rest = videos.slice(1);

  return (
    <section id="media" className="py-28 lg:py-40" style={{ background: "#111111" }}>
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
                {t.videos.eyebrow}
              </span>
            </div>
            <h2 className="font-serif font-light text-white" style={{ fontSize: "clamp(2.2rem, 5vw, 3.2rem)" }}>
              {t.videos.heading}
            </h2>
          </div>
          <Link
            href="/media"
            className="group inline-flex items-center gap-3 text-xs font-medium tracking-widest uppercase transition-colors duration-200 shrink-0 pb-1 text-white/60 hover:text-white"
            style={{ borderBottom: "1px solid rgba(201,168,76,0.4)" }}
          >
            {t.videos.allVideos}
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-3"
          >
            <button onClick={() => setActiveVideo(featured.embedUrl)} className="group w-full text-left">
              <div className="relative w-full aspect-video mb-5 overflow-hidden flex items-center justify-center" style={{ background: "#111111" }}>
                <div className="relative z-10 flex items-center justify-center w-20 h-20 transition-all duration-300 group-hover:scale-110" style={{ background: "#C9A84C" }}>
                  <Play size={28} style={{ color: "#111111" }} fill="#111111" />
                </div>
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "repeating-linear-gradient(90deg, #C9A84C 0, #C9A84C 1px, transparent 0, transparent 40px), repeating-linear-gradient(#C9A84C 0, #C9A84C 1px, transparent 0, transparent 40px)" }} />
                <div className="absolute bottom-3 right-3 px-2 py-1 text-xs font-medium" style={{ background: "rgba(0,0,0,0.6)", color: "white" }}>{featured.duration}</div>
              </div>
              <div className="flex items-center gap-2 mb-3">
                <Clock size={12} style={{ color: "#C9A84C" }} />
                <span className="text-xs font-light" style={{ color: "#C9A84C" }}>{featured.duration}</span>
                <span className="text-white/30 text-xs">·</span>
                <span className="text-white/40 text-xs font-light">{formatDate(featured.date)}</span>
              </div>
              <h3 className="font-serif font-medium text-white text-xl leading-snug mb-2 group-hover:text-[#C9A84C] transition-colors duration-200">{featured.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed font-light">{featured.description}</p>
            </button>
          </motion.div>

          <div className="lg:col-span-2 space-y-0">
            {rest.map((video, i) => (
              <motion.button
                key={video.id}
                onClick={() => setActiveVideo(video.embedUrl)}
                initial={{ opacity: 0, x: 20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
                className="group w-full text-left flex gap-4 py-5 border-b transition-colors duration-200 hover:bg-white/5 px-3 -mx-3"
                style={{ borderColor: "rgba(255,255,255,0.08)" }}
              >
                <div className="shrink-0 w-20 aspect-video flex items-center justify-center" style={{ background: "#111111" }}>
                  <div className="w-7 h-7 flex items-center justify-center transition-transform duration-200 group-hover:scale-110" style={{ background: "#C9A84C" }}>
                    <Play size={12} style={{ color: "#111111" }} fill="#111111" />
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1.5">
                    <Clock size={10} style={{ color: "#C9A84C" }} />
                    <span className="text-[10px] font-light" style={{ color: "#C9A84C" }}>{video.duration}</span>
                  </div>
                  <h4 className="font-serif font-medium text-white/80 text-sm leading-snug group-hover:text-white transition-colors duration-200 line-clamp-2">{video.title}</h4>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </div>

      <AnimatePresence>
        {activeVideo && (
          <motion.div
            key="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 lg:p-12"
            style={{ background: "rgba(0,0,0,0.92)" }}
            onClick={() => setActiveVideo(null)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="w-full max-w-4xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button onClick={() => setActiveVideo(null)} className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 transition-colors">
                <X size={20} />
              </button>
              <div className="relative w-full aspect-video">
                <iframe src={`${activeVideo}?autoplay=1`} className="w-full h-full" allow="autoplay; fullscreen" allowFullScreen title="Video player" />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
