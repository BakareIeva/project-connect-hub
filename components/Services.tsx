"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FileText, Briefcase, Users, Star, Shield, ClipboardList } from "lucide-react";
import type { Variants } from "framer-motion";
import { useLanguage } from "@/lib/LanguageContext";

const icons = [FileText, Briefcase, Users, Star, Shield, ClipboardList];

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

export default function Services() {
  const { t } = useLanguage();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="py-28 lg:py-40" style={{ background: "#F2F1EF" }}>
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
              {t.services.eyebrow}
            </span>
          </div>
          <h2 className="font-serif font-light text-[#111111] mb-6" style={{ fontSize: "clamp(2.2rem, 5vw, 3.2rem)" }}>
            {t.services.heading}
          </h2>
          <p className="text-[#6B6B6B] text-lg leading-relaxed font-light">{t.services.subtext}</p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {t.services.items.map((svc, i) => {
            const Icon = icons[i];
            return (
              <motion.div
                key={svc.title}
                variants={item}
                whileHover={{ y: -4 }}
                className="group bg-white p-8 transition-all duration-300 cursor-default border-l-2"
                style={{ borderColor: "#E4E4E2", borderStyle: "solid", borderWidth: "1px", borderLeftWidth: "2px", borderLeftColor: "transparent" }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.borderLeftColor = "#C9A84C";
                  (e.currentTarget as HTMLDivElement).style.boxShadow = "0 10px 40px rgba(26,43,74,0.08)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.borderLeftColor = "transparent";
                  (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
                }}
              >
                <div className="inline-flex items-center justify-center w-12 h-12 mb-6" style={{ background: "rgba(201,168,76,0.1)" }}>
                  <Icon size={20} style={{ color: "#C9A84C" }} strokeWidth={1.5} />
                </div>
                <h3 className="font-serif font-medium text-[#111111] text-xl mb-3">{svc.title}</h3>
                <p className="text-[#6B6B6B] text-sm leading-relaxed font-light">{svc.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
