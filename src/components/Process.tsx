
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Phone, Search, Map, Send } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

const icons = [Phone, Search, Map, Send];
const numbers = ["01", "02", "03", "04"];

export default function Process() {
  const { t } = useLanguage();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="process" className="py-28 lg:py-40" style={{ background: "#F2F1EF" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="max-w-2xl mb-20"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-px" style={{ background: "#C9A84C" }} />
            <span className="text-xs font-medium tracking-[0.3em] uppercase" style={{ color: "#C9A84C" }}>
              {t.process.eyebrow}
            </span>
          </div>
          <h2 className="font-serif font-light text-[#111111] mb-6" style={{ fontSize: "clamp(2.2rem, 5vw, 3.2rem)" }}>
            {t.process.heading1}
            <br />
            {t.process.heading2}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0">
          {t.process.steps.map((step, i) => {
            const Icon = icons[i];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 + i * 0.12 }}
                className="relative group"
              >
                {i < t.process.steps.length - 1 && (
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={inView ? { scaleX: 1 } : {}}
                    transition={{ duration: 0.8, delay: 0.3 + i * 0.15 }}
                    className="absolute top-10 left-1/2 right-0 h-px hidden lg:block"
                    style={{ background: "linear-gradient(90deg, #C9A84C, rgba(201,168,76,0.2))", transformOrigin: "left", zIndex: 0 }}
                  />
                )}
                <div className="relative z-10 p-8 lg:pr-12">
                  <div className="font-serif font-light mb-6" style={{ fontSize: "4rem", color: "rgba(26,43,74,0.08)", lineHeight: 1 }}>
                    {numbers[i]}
                  </div>
                  <div className="inline-flex items-center justify-center w-14 h-14 mb-6 transition-all duration-300 group-hover:scale-110" style={{ background: "#111111" }}>
                    <Icon size={22} style={{ color: "#C9A84C" }} strokeWidth={1.5} />
                  </div>
                  <h3 className="font-serif font-medium text-[#111111] text-xl mb-3">{step.title}</h3>
                  <p className="text-[#6B6B6B] text-sm leading-relaxed font-light">{step.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
