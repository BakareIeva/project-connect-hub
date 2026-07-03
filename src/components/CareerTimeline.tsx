import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useLanguage } from "@/lib/LanguageContext";

const yearColor = "#C9A84C";

export default function CareerTimeline() {
  const { t, locale } = useLanguage();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="career" className="py-28 lg:py-40" style={{ background: "#111111" }}>
      <div ref={ref} className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="grid lg:grid-cols-2 gap-12 mb-20 items-end"
        >
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-px" style={{ background: "#C9A84C" }} />
              <span className="text-xs font-medium tracking-[0.3em] uppercase" style={{ color: "#C9A84C" }}>
                {locale === "lt" ? "Karjeros kelias" : "Career Path"}
              </span>
            </div>
            <h2 className="font-serif font-light" style={{ fontSize: "clamp(2.2rem, 5vw, 3.5rem)", color: "white" }}>
              {locale === "lt" ? "Nuo studijų iki praktikos" : "From Studies\nto Practice"}
            </h2>
          </div>
          <p className="font-light leading-relaxed" style={{ maxWidth: 420, color: "rgba(242,241,239,0.55)" }}>
            {locale === "lt"
              ? "Dešimtmetis formalaus mokymo, specializuotos praktikos ir nuolatinio augimo imigracijos teisės srityje."
              : "A decade of formal training, specialist practice, and continuous growth in immigration law — built case by case."}
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <motion.div
            initial={{ scaleY: 0 }}
            animate={inView ? { scaleY: 1 } : {}}
            transition={{ duration: 1.2, delay: 0.3 }}
            className="absolute left-[6.5rem] top-0 bottom-0 w-px hidden lg:block"
            style={{ background: "rgba(201,168,76,0.35)", transformOrigin: "top" }}
          />

          <div className="space-y-0">
            {t.about.background.map((m, i) => (
              <motion.div
                key={m.period}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + i * 0.12 }}
                className="group grid lg:grid-cols-[7rem_2rem_1fr] gap-0 lg:gap-6 items-start py-6 border-b"
                style={{ borderColor: "rgba(255,255,255,0.08)" }}
              >
                {/* Year */}
                <div
                  className="font-serif font-light text-2xl mb-2 lg:mb-0 text-right pr-0 lg:pr-4 pt-1"
                  style={{ color: yearColor }}
                >
                  {m.period}
                </div>

                {/* Dot */}
                <div className="hidden lg:flex items-start justify-center pt-2.5">
                  <div
                    className="w-3 h-3 rounded-full border-2 transition-all duration-300 group-hover:scale-125"
                    style={{ borderColor: yearColor, background: "#111111" }}
                  />
                </div>

                {/* Content */}
                <div className="pt-0.5">
                  <h3 className="font-serif font-light text-xl mb-1" style={{ color: "white" }}>
                    {m.title}
                  </h3>
                  <p className="font-light text-sm leading-relaxed" style={{ color: "rgba(242,241,239,0.55)" }}>
                    {m.subtitle}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
