import { createFileRoute } from "@tanstack/react-router";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
// next/link removed
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/lib/LanguageContext";

function AboutPage() {
  const { t, locale } = useLanguage();
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true });
  const bioRef = useRef(null);
  const bioInView = useInView(bioRef, { once: true, margin: "-80px" });
  const bgRef = useRef(null);
  const bgInView = useInView(bgRef, { once: true, margin: "-80px" });

  return (
    <>
      <Navbar />
      <main>

        {/* Dark header */}
        <section className="pt-40 pb-20" style={{ background: "#111111" }}>
          <div ref={headerRef} className="max-w-7xl mx-auto px-6 lg:px-12">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={headerInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7 }}
            >
              <a
                href="/"
                className="inline-flex items-center gap-2 text-xs font-medium tracking-widest uppercase text-white/40 hover:text-white/70 transition-colors mb-10"
              >
                <ArrowLeft size={12} />
                {locale === "lt" ? "Grįžti" : "Home"}
              </a>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-px" style={{ background: "#C9A84C" }} />
                <span className="text-xs font-medium tracking-[0.3em] uppercase" style={{ color: "#C9A84C" }}>
                  {locale === "lt" ? "Apie mane" : "About Me"}
                </span>
              </div>
              <h1
                className="font-serif font-light text-white leading-tight mb-4"
                style={{ fontSize: "clamp(2.8rem, 6vw, 5rem)" }}
              >
                Ieva Bakare
              </h1>
              <p className="font-serif italic font-light text-white/50 text-xl">
                {locale === "lt"
                  ? "Imigracijos ir administracinė teisė · Vilnius, Lietuva"
                  : "Immigration & Administrative Law · Vilnius, Lithuania"}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Video */}
        <section className="py-16 lg:py-24" style={{ background: "#F2F1EF" }}>
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-px" style={{ background: "#C9A84C" }} />
              <span className="text-xs font-medium tracking-[0.3em] uppercase" style={{ color: "#C9A84C" }}>
                {locale === "lt" ? "Video" : "In Her Own Words"}
              </span>
            </div>
            <div className="relative w-full overflow-hidden" style={{ background: "#111111", paddingBottom: "56.25%", height: 0 }}>
              <iframe
                src="https://www.youtube.com/embed/i-N-PBBlwMI"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
                style={{ border: 0 }}
              />
            </div>
          </div>
        </section>

        {/* Bio — two column */}
        <section ref={bioRef} className="py-24 lg:py-36" style={{ background: "#F2F1EF" }}>
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">

              {/* Left — text */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={bioInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8 }}
              >
                <div className="w-12 h-px mb-8" style={{ background: "rgba(201,168,76,0.4)" }} />
                <div className="space-y-6 mb-10">
                  <p className="text-base font-light leading-relaxed" style={{ color: "#6B6B6B" }}>
                    {t.about.bio1}
                  </p>
                  <p className="text-base font-light leading-relaxed" style={{ color: "#6B6B6B" }}>
                    {t.about.bio2}
                  </p>
                </div>

                {/* Credentials */}
                <div className="flex flex-wrap gap-3">
                  {t.about.credentials.map((cred) => (
                    <span
                      key={cred}
                      className="text-xs font-medium tracking-wide px-4 py-2 border"
                      style={{ color: "#111111", borderColor: "#E4E4E2", background: "white" }}
                    >
                      {cred}
                    </span>
                  ))}
                </div>
              </motion.div>

              {/* Right — photos */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={bioInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.15 }}
                className="grid grid-cols-2 gap-3"
              >
                <div className="relative row-span-2 aspect-[3/4] overflow-hidden">
                  <img src="/photos/ieva-1.jpeg" alt="Ieva Bakare" className="absolute inset-0 w-full h-full object-cover object-top" />
                  <div className="absolute bottom-0 right-0 w-10 h-10 border-b-2 border-r-2" style={{ borderColor: "#C9A84C" }} />
                </div>
                <div className="relative aspect-[3/4] overflow-hidden">
                  <img src="/photos/ieva-3.jpeg" alt="Ieva Bakare" className="absolute inset-0 w-full h-full object-cover object-top" />
                </div>
                <div className="flex flex-col justify-center p-6" style={{ background: "#111111" }}>
                  <p className="font-serif italic font-light text-white/80 text-sm leading-relaxed mb-4">
                    &ldquo;Immigration is not only about legislation and procedures. Behind every decision, there are individuals and families.&rdquo;
                  </p>
                  <div className="w-6 h-px" style={{ background: "#C9A84C" }} />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Professional background — dark */}
        <section ref={bgRef} className="py-24 lg:py-32" style={{ background: "#111111" }}>
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={bgInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7 }}
              className="mb-12"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-px" style={{ background: "#C9A84C" }} />
                <span className="text-xs font-medium tracking-[0.3em] uppercase" style={{ color: "#C9A84C" }}>
                  {t.about.backgroundHeading}
                </span>
              </div>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-x-16 gap-y-8">
              {t.about.background.map((para, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  animate={bgInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="text-base font-light leading-relaxed"
                  style={{ color: "rgba(255,255,255,0.55)" }}
                >
                  {para}
                </motion.p>
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-20 text-center" style={{ background: "#F2F1EF" }}>
          <div className="max-w-xl mx-auto px-6">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-8 h-px" style={{ background: "#C9A84C" }} />
              <span className="text-xs font-medium tracking-[0.3em] uppercase" style={{ color: "#C9A84C" }}>
                {locale === "lt" ? "Susisiekite" : "Get in Touch"}
              </span>
              <div className="w-8 h-px" style={{ background: "#C9A84C" }} />
            </div>
            <p className="text-[#6B6B6B] font-light mb-8 text-base leading-relaxed">
              {locale === "lt"
                ? "Turite klausimų apie imigraciją ar administracinę teisę Lietuvoje?"
                : "Have a question about immigration or administrative law in Lithuania?"}
            </p>
            <a
              href="/#contact"
              className="inline-block px-8 py-4 text-xs font-medium tracking-widest uppercase transition-opacity hover:opacity-80"
              style={{ background: "#111111", color: "white" }}
            >
              {locale === "lt" ? "Parašykite man" : "Send a Message"}
            </a>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}

export const Route = createFileRoute("/about")({ component: AboutPage });
