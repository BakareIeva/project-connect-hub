
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Award, GraduationCap, BookOpen, Star } from "lucide-react";
import { certifications } from "@/lib/content";
import type { Certification } from "@/lib/content";
import { useLanguage } from "@/lib/LanguageContext";

const iconMap: Record<Certification["type"], React.ElementType> = {
  bar: Award,
  degree: GraduationCap,
  certificate: BookOpen,
  award: Star,
};

const labelMap: Record<Certification["type"], { en: string; lt: string }> = {
  bar: { en: "Bar Membership", lt: "Advokatūros narystė" },
  degree: { en: "Academic Degree", lt: "Akademinis laipsnis" },
  certificate: { en: "Certification", lt: "Sertifikatas" },
  award: { en: "Recognition", lt: "Pripažinimas" },
};

export default function Certifications() {
  const { t, locale } = useLanguage();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="certifications" className="py-28 lg:py-40" style={{ background: "#111111" }}>
      <div ref={ref} className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="max-w-2xl mb-20"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-px" style={{ background: "#C9A84C" }} />
            <span className="text-xs font-medium tracking-[0.3em] uppercase" style={{ color: "#C9A84C" }}>
              {t.certifications.eyebrow}
            </span>
          </div>
          <h2 className="font-serif font-light text-white mb-5" style={{ fontSize: "clamp(2.2rem, 5vw, 3.2rem)" }}>
            {t.certifications.heading1}
            <br />
            {t.certifications.heading2}
          </h2>
          <p className="text-white/60 text-base leading-relaxed font-light">{t.certifications.subtext}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px" style={{ background: "rgba(255,255,255,0.06)" }}>
          {certifications.map((cert, i) => {
            const Icon = iconMap[cert.type];
            const label = labelMap[cert.type][locale];
            return (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group p-8 transition-all duration-300 relative"
                style={{ background: "#111111" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.background = "#111f35"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.background = "#111111"; }}
              >
                <div className="absolute top-6 right-6 text-xs font-medium tracking-widest" style={{ color: "#C9A84C" }}>
                  {cert.year}
                </div>
                <div className="flex items-center gap-2 mb-5">
                  <Icon size={14} style={{ color: "#C9A84C" }} strokeWidth={1.5} />
                  <span className="text-[10px] tracking-[0.2em] uppercase font-medium" style={{ color: "rgba(201,168,76,0.7)" }}>
                    {label}
                  </span>
                </div>
                <h3 className="font-serif font-medium text-white text-lg leading-snug mb-3">{cert.title}</h3>
                <p className="text-xs font-medium tracking-wide mb-3" style={{ color: "#C9A84C" }}>{cert.issuer}</p>
                <p className="text-white/45 text-sm leading-relaxed font-light">{cert.description}</p>
                <div className="absolute bottom-0 left-0 h-px w-0 group-hover:w-full transition-all duration-500" style={{ background: "#C9A84C" }} />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
