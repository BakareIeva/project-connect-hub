import { createFileRoute } from "@tanstack/react-router";

import { useState } from "react";
// next/link removed
import { motion, AnimatePresence } from "framer-motion";
import { Play, X, Clock, Calendar } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/lib/LanguageContext";
import { videos } from "@/lib/content";

function MediaPage() {
  const { t } = useLanguage();
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  const formatDate = (d: string) =>
    new Date(d).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });

  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="pt-40 pb-20" style={{ background: "#111111" }}>
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="flex items-center gap-3 mb-6">
              <a href="/" className="text-xs tracking-widest uppercase text-white/40 hover:text-white/70 transition-colors">
                {t.mediaPage.breadcrumbHome}
              </a>
              <span className="text-white/20">/</span>
              <span className="text-xs tracking-widest uppercase" style={{ color: "#C9A84C" }}>
                {t.nav.videos}
              </span>
            </div>
            <h1 className="font-serif font-light text-white mb-4" style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)" }}>
              {t.mediaPage.heading1}{" "}
              <span style={{ color: "#C9A84C" }}>{t.mediaPage.heading2}</span>
            </h1>
            <p className="text-white/60 text-lg font-light max-w-xl">{t.mediaPage.subtext}</p>
          </div>
        </section>

        {/* Videos grid */}
        <section className="py-20 lg:py-28" style={{ background: "#F2F1EF" }}>
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {videos.map((video, i) => (
                <motion.div
                  key={video.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <button
                    onClick={() => setActiveVideo(video.embedUrl)}
                    className="group w-full text-left bg-white border transition-all duration-300"
                    style={{ borderColor: "#E4E4E2" }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.boxShadow = "0 12px 40px rgba(26,43,74,0.1)";
                      (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.boxShadow = "none";
                      (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                    }}
                  >
                    {/* Thumbnail */}
                    <div
                      className="relative w-full aspect-video flex items-center justify-center overflow-hidden"
                      style={{ background: "#111111" }}
                    >
                      {/* Grid pattern */}
                      <div
                        className="absolute inset-0 opacity-10"
                        style={{
                          backgroundImage: "repeating-linear-gradient(90deg, #C9A84C 0, #C9A84C 1px, transparent 0, transparent 40px), repeating-linear-gradient(#C9A84C 0, #C9A84C 1px, transparent 0, transparent 40px)",
                        }}
                      />

                      {/* Play button */}
                      <div
                        className="relative z-10 w-16 h-16 flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                        style={{ background: "#C9A84C" }}
                      >
                        <Play size={22} style={{ color: "#111111" }} fill="#111111" />
                      </div>

                      {/* Duration badge */}
                      <div
                        className="absolute bottom-3 right-3 px-2 py-1 text-xs font-medium flex items-center gap-1.5"
                        style={{ background: "rgba(0,0,0,0.65)", color: "white" }}
                      >
                        <Clock size={10} />
                        {video.duration}
                      </div>
                    </div>

                    {/* Info */}
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-3 text-xs text-[#6B6B6B]/50 font-light">
                        <Calendar size={11} />
                        {formatDate(video.date)}
                      </div>
                      <h2 className="font-serif font-medium text-[#111111] text-xl leading-snug mb-2 group-hover:text-[#C9A84C] transition-colors duration-200 text-left">
                        {video.title}
                      </h2>
                      <p className="text-[#6B6B6B] text-sm leading-relaxed font-light text-left">
                        {video.description}
                      </p>
                    </div>
                  </button>
                </motion.div>
              ))}
            </div>

            {/* Upload CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-12 p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
              style={{ background: "#111111" }}
            >
              <div>
                <p className="font-serif font-light text-white text-xl mb-1">
                  {t.mediaPage.askHeading}
                </p>
                <p className="text-white/50 text-sm font-light">
                  {t.mediaPage.askSubtext}
                </p>
              </div>
              <Link
                href="/#contact"
                className="shrink-0 px-6 py-3 text-xs font-medium tracking-widest uppercase transition-colors duration-300"
                style={{ background: "#C9A84C", color: "#111111" }}
              >
                {t.mediaPage.askCta}
              </a>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />

      {/* Lightbox */}
      <AnimatePresence>
        {activeVideo && (
          <motion.div
            key="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 lg:p-16"
            style={{ background: "rgba(0,0,0,0.93)" }}
            onClick={() => setActiveVideo(null)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="w-full max-w-4xl relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setActiveVideo(null)}
                className="absolute -top-12 right-0 w-10 h-10 flex items-center justify-center text-white/50 hover:text-white transition-colors"
              >
                <X size={22} />
              </button>
              <div className="relative w-full aspect-video">
                <iframe
                  src={`${activeVideo}?autoplay=1`}
                  className="w-full h-full"
                  allow="autoplay; fullscreen"
                  allowFullScreen
                  title="Video player"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export const Route = createFileRoute("/media")({ component: MediaPage });
