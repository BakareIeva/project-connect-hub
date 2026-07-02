
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useLanguage } from "@/lib/LanguageContext";

const milestones = [
  {
    year: "2011",
    title: "LLB — Vilnius University",
    detail: "Graduated with a Bachelor of Laws, specialising in civil and administrative law.",
    type: "education",
  },
  {
    year: "2013",
    title: "LLM — International & European Law",
    detail: "Master's thesis on EU free movement of persons and the rights of third-country nationals.",
    type: "education",
  },
  {
    year: "2014",
    title: "Junior Associate, Migration Law",
    detail: "First role handling residence permit applications and family reunification cases. Handled 80+ cases in the first year.",
    type: "career",
  },
  {
    year: "2017",
    title: "ERA Certificate, Trier",
    detail: "Completed specialist training at the European Law Academy in EU immigration and asylum law.",
    type: "education",
  },
  {
    year: "2018",
    title: "Independent Practice — Vilnius",
    detail: "Established independent immigration law practice. Began taking complex appeal and refusal reversal cases.",
    type: "career",
  },
  {
    year: "2020",
    title: "Recognised Migration Law Expert",
    detail: "Designated as an expert in migration law by the Lithuanian Bar Association's specialist committee.",
    type: "award",
  },
  {
    year: "2023",
    title: "EU Blue Card & High-Skilled Cases",
    detail: "Expanded practice to cover EU Blue Card applications and cross-border corporate relocation for international employers.",
    type: "career",
  },
  {
    year: "2025",
    title: "500+ Cases Resolved",
    detail: "Reached milestone of 500 successfully resolved immigration cases across 30+ client nationalities.",
    type: "award",
  },
];

const typeColor: Record<string, string> = {
  education: "#6B9EB8",
  career: "#C9A84C",
  award: "#7AAE82",
};

const typeLabel: Record<string, { en: string; lt: string }> = {
  education: { en: "Education", lt: "Išsilavinimas" },
  career: { en: "Career", lt: "Karjera" },
  award: { en: "Recognition", lt: "Pripažinimas" },
};

export default function CareerTimeline() {
  const { locale } = useLanguage();
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

        {/* Legend */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap gap-5 mb-14"
        >
          {Object.entries(typeLabel).map(([key, labels]) => (
            <div key={key} className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full" style={{ background: typeColor[key] }} />
              <span className="text-xs font-light tracking-widest uppercase" style={{ color: "rgba(242,241,239,0.55)" }}>
                {labels[locale]}
              </span>
            </div>
          ))}
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <motion.div
            initial={{ scaleY: 0 }}
            animate={inView ? { scaleY: 1 } : {}}
            transition={{ duration: 1.2, delay: 0.3 }}
            className="absolute left-[7.5rem] top-0 bottom-0 w-px hidden lg:block"
            style={{ background: "rgba(201,168,76,0.35)", transformOrigin: "top" }}
          />

          <div className="space-y-0">
            {milestones.map((m, i) => (
              <motion.div
                key={m.year}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + i * 0.09 }}
                className="group grid lg:grid-cols-[8rem_2rem_1fr] gap-0 lg:gap-6 items-start py-6 border-b"
                style={{ borderColor: "rgba(255,255,255,0.08)" }}
              >
                {/* Year */}
                <div
                  className="font-serif font-light text-2xl mb-2 lg:mb-0 text-right pr-0 lg:pr-4 pt-1"
                  style={{ color: typeColor[m.type] }}
                >
                  {m.year}
                </div>

                {/* Dot */}
                <div className="hidden lg:flex items-start justify-center pt-2.5">
                  <div
                    className="w-3 h-3 rounded-full border-2 transition-all duration-300 group-hover:scale-125"
                    style={{ borderColor: typeColor[m.type], background: "#111111" }}
                  />
                </div>

                {/* Content */}
                <div className="pb-2">
                  <div className="flex items-center gap-3 mb-1.5 flex-wrap">
                    <h3 className="font-serif font-medium text-lg leading-snug" style={{ color: "#111111" }}>
                      {m.title}
                    </h3>
                    <span
                      className="text-[10px] font-medium tracking-[0.2em] uppercase px-2 py-0.5"
                      style={{ color: typeColor[m.type], background: `${typeColor[m.type]}18` }}
                    >
                      {typeLabel[m.type][locale]}
                    </span>
                  </div>
                  <p className="text-sm font-light leading-relaxed" style={{ color: "rgba(242,241,239,0.55)" }}>{m.detail}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
