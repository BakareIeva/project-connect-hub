
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

export default function About() {
  const { t, locale } = useLanguage();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const bgRef = useRef(null);
  const bgInView = useInView(bgRef, { once: true, margin: "-80px" });

  return (
    <section id="about" className="py-28 lg:py-40" style={{ background: "#F2F1EF" }}>
      <div ref={ref} className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-16"
        >
          <div className="w-8 h-px" style={{ background: "#C9A84C" }} />
          <span className="text-xs font-medium tracking-[0.3em] uppercase" style={{ color: "#C9A84C" }}>
            {t.about.eyebrow}
          </span>
        </motion.div>

        {/* Two-column: text + photos */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* Left — intro text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2
              className="font-serif font-light mb-2"
              style={{ fontSize: "clamp(2.8rem, 5vw, 4rem)", color: "#111111" }}
            >
              {t.about.name}
            </h2>
            <p className="font-serif italic font-light text-xl mb-8" style={{ color: "#C9A84C" }}>
              {t.about.role}
            </p>
            <div className="w-12 h-px mb-8" style={{ background: "rgba(201,168,76,0.4)" }} />

            <div className="space-y-5 mb-10">
              <p className="text-base font-light leading-relaxed" style={{ color: "#6B6B6B" }}>
                {t.about.bio1}
              </p>
              <p className="text-base font-light leading-relaxed" style={{ color: "#6B6B6B" }}>
                {t.about.bio2}
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link
                to="/about"
                className="group inline-flex items-center gap-2 px-7 py-3.5 text-xs font-medium tracking-widest uppercase border transition-colors duration-300"
                style={{ borderColor: "#E4E4E2", color: "#111111" }}
              >
                {locale === "lt" ? "Daugiau apie mane" : "Read More"}
                <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
            </div>
          </motion.div>

          {/* Right — photo grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="grid grid-cols-2 gap-3"
          >
            {/* Large photo — col 1, spans both rows */}
            <div className="relative row-span-2 aspect-[3/4] overflow-hidden">
              <img
                src="/photos/ieva-1.jpeg"
                alt="Ieva Bakare"
                className="absolute inset-0 w-full h-full object-cover object-top"
              />
              <div className="absolute bottom-0 right-0 w-10 h-10 border-b-2 border-r-2" style={{ borderColor: "#C9A84C" }} />
            </div>

            {/* Top right photo */}
            <div className="relative aspect-[3/4] overflow-hidden">
              <img
                src="/photos/ieva-3.jpeg"
                alt="Ieva Bakare"
                className="absolute inset-0 w-full h-full object-cover object-top"
              />
            </div>

            {/* Bottom right — quote card */}
            <div className="flex flex-col justify-center p-6" style={{ background: "#111111" }}>
              <p className="font-serif italic font-light text-white/80 text-sm leading-relaxed mb-4">
                &ldquo;Immigration is not only about legislation and procedures. Behind every decision, there are individuals and families.&rdquo;
              </p>
              <div className="w-6 h-px" style={{ background: "#C9A84C" }} />
            </div>
          </motion.div>
        </div>

        {/* Professional background — full width below */}
        <div ref={bgRef} className="mt-24 pt-16 border-t" style={{ borderColor: "#E4E4E2" }}>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={bgInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="mb-10"
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-px" style={{ background: "#C9A84C" }} />
              <span className="text-xs font-medium tracking-[0.3em] uppercase" style={{ color: "#C9A84C" }}>
                {t.about.backgroundHeading}
              </span>
            </div>
          </motion.div>

          {/* Content intentionally left empty */}
        </div>
      </div>
    </section>
  );
}
