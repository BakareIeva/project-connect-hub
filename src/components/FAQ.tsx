
import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

export default function FAQ() {
  const { t } = useLanguage();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="py-28 lg:py-40" style={{ background: "#F2F1EF" }}>
      <div ref={ref} className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="lg:grid lg:grid-cols-12 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="lg:col-span-4 mb-12 lg:mb-0"
          >
            <div className="lg:sticky lg:top-32">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-px" style={{ background: "#C9A84C" }} />
                <span className="text-xs font-medium tracking-[0.3em] uppercase" style={{ color: "#C9A84C" }}>
                  {t.faq.eyebrow}
                </span>
              </div>
              <h2 className="font-serif font-light text-[#111111] mb-6" style={{ fontSize: "clamp(2rem, 4vw, 2.8rem)" }}>
                {t.faq.heading1}
                <br />
                {t.faq.heading2}
                <br />
                {t.faq.heading3}
              </h2>
              <p className="text-[#6B6B6B] text-sm leading-relaxed font-light">{t.faq.subtext}</p>
              <button
                onClick={() => { const el = document.querySelector("#contact"); if (el) el.scrollIntoView({ behavior: "smooth" }); }}
                className="mt-8 inline-flex items-center gap-2 text-xs font-medium tracking-widest uppercase transition-colors duration-300"
                style={{ color: "#C9A84C" }}
              >
                {t.faq.bookCall}
                <span className="w-6 h-px inline-block" style={{ background: "#C9A84C" }} />
              </button>
            </div>
          </motion.div>

          <div className="lg:col-span-8">
            {t.faq.items.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1 + i * 0.08 }}
                className="border-b"
                style={{ borderColor: "#E4E4E2" }}
              >
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-start justify-between gap-4 py-6 text-left group"
                >
                  <span className="font-serif font-medium text-[#111111] text-lg leading-snug">{faq.q}</span>
                  <span
                    className="shrink-0 w-8 h-8 flex items-center justify-center transition-colors duration-300 mt-0.5"
                    style={{ background: open === i ? "#111111" : "rgba(26,43,74,0.08)" }}
                  >
                    {open === i ? <Minus size={14} style={{ color: "#C9A84C" }} /> : <Plus size={14} style={{ color: "#111111" }} />}
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {open === i && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: "easeInOut" }}
                      style={{ overflow: "hidden" }}
                    >
                      <p className="text-[#6B6B6B] text-sm leading-relaxed font-light pb-6">{faq.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
