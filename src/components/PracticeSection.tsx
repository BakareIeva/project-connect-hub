import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Globe, Scale, Gavel, Landmark, Shield } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

const areas = [
  {
    to: "/practice/immigration-law" as const,
    icon: Globe,
    color: "#6B9EB8",
    tag: "Practice Area",
    ltTag: "Praktikos sritis",
    title: "Immigration Law",
    ltTitle: "Imigracijos teisė",
    blurb:
      "D-visas, residence permits, EU Blue Cards, family reunification and citizenship — the pathways for non-citizens moving to Lithuania.",
    ltBlurb:
      "D vizos, leidimai gyventi, ES mėlynoji kortelė, šeimos susijungimas ir pilietybė — ne ES piliečių keliai į Lietuvą.",
  },
  {
    to: "/practice/administrative-law" as const,
    icon: Scale,
    color: "#9A8BB5",
    tag: "Practice Area",
    ltTag: "Praktikos sritis",
    title: "Administrative Law",
    ltTitle: "Administracinė teisė",
    blurb:
      "How public institutions decide, and how those decisions are challenged — the framework behind every Migration Department ruling.",
    ltBlurb:
      "Kaip valstybės institucijos priima sprendimus ir kaip juos ginčyti — kiekvieno Migracijos departamento sprendimo pagrindas.",
  },
  {
    to: "/practice/eu-law" as const,
    icon: Landmark,
    color: "#7A8BB8",
    tag: "Practice Area",
    ltTag: "Praktikos sritis",
    title: "European Union Law",
    ltTitle: "Europos Sąjungos teisė",
    blurb:
      "European Union law and the legal principles influencing immigration, residence rights, free movement, and cross-border legal protection.",
    ltBlurb:
      "Europos Sąjungos teisė ir teisiniai principai, darantys įtaką imigracijai, gyvenimo teisėms, laisvam judėjimui ir tarptautinei teisinei apsaugai.",
  },
  {
    to: "/practice/human-rights-law" as const,
    icon: Shield,
    color: "#B87A6B",
    tag: "Practice Area",
    ltTag: "Praktikos sritis",
    title: "Human Rights Law",
    ltTitle: "Žmogaus teisių teisė",
    blurb:
      "Human rights law and the fundamental rights that protect individuals in immigration, administrative, and public law matters.",
    ltBlurb:
      "Žmogaus teisių teisė ir pagrindinės teisės, saugančios asmenis imigracijos, administracinės ir viešosios teisės srityse.",
  },
  {
    to: "/practice/how-court-thinks" as const,
    icon: Gavel,
    color: "#C9A84C",
    tag: "Perspective",
    ltTag: "Perspektyva",
    title: "Inside the Courtroom",
    ltTitle: "Kaip mąsto teismas",
    blurb:
      "A closer look at how Lithuanian administrative courts interpret the law, assess evidence, and apply the legal principles behind judicial decisions.",
    ltBlurb:
      "Kas iš tiesų įtikina Lietuvos administracinius teisėjus — procedūra, proporcingumas ir terminai, lemiantys bylas.",
  },
];

export default function PracticeSection() {
  const { locale } = useLanguage();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="practice" className="py-28 lg:py-36" style={{ background: "#F2F1EF" }}>
      <div ref={ref} className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="grid lg:grid-cols-2 gap-10 mb-16 items-end"
        >
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-px" style={{ background: "#C9A84C" }} />
              <span className="text-xs font-medium tracking-[0.3em] uppercase" style={{ color: "#C9A84C" }}>
                {locale === "lt" ? "Teismo praktika ir teisiniai įžvalgos" : "Court Practice & Legal Insights"}
              </span>
            </div>
            <h2 className="font-serif font-light text-[#111111]" style={{ fontSize: "clamp(2.2rem, 5vw, 3.2rem)" }}>
              {locale === "lt"
                ? "Penkios teisės sritys —\nviena perspektyva"
                : "Five Areas of Law —\nOne Court-Side View"}
            </h2>
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-[#6B6B6B] font-light leading-relaxed">
              {locale === "lt"
                ? "Penki atskiri puslapiai. Kiekvienas — savarankiška apžvalga: imigracijos teisė, administracinė teisė, Europos Sąjungos teisė, žmogaus teisių teisė ir kaip mąsto teismas."
                : "Five dedicated pages. Each a standalone read: immigration law, administrative law, European Union law, human rights law, and how the court thinks."}
            </p>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {areas.map((a, i) => {
            const Icon = a.icon;
            return (
              <motion.div
                key={a.to}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <Link
                  to={a.to}
                  className="group block bg-white border p-8 h-full transition-all duration-300"
                  style={{ borderColor: "#E4E4E2" }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 8px 32px rgba(26,43,74,0.08)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.boxShadow = "none";
                  }}
                >
                  <div
                    className="h-0.5 w-0 group-hover:w-full transition-all duration-500 -mt-8 -mx-8 mb-8"
                    style={{ background: a.color }}
                  />
                  <div
                    className="w-11 h-11 flex items-center justify-center mb-6"
                    style={{ background: `${a.color}15` }}
                  >
                    <Icon size={18} style={{ color: a.color }} />
                  </div>
                  <span
                    className="text-[10px] font-medium tracking-[0.2em] uppercase mb-3 block"
                    style={{ color: a.color }}
                  >
                    {locale === "lt" ? a.ltTag : a.tag}
                  </span>
                  <h3 className="font-serif font-medium text-[#111111] text-xl mb-4">
                    {locale === "lt" ? a.ltTitle : a.title}
                  </h3>
                  <p className="text-[#6B6B6B] font-light text-sm leading-relaxed mb-6">
                    {locale === "lt" ? a.ltBlurb : a.blurb}
                  </p>
                  <span
                    className="inline-flex items-center gap-2 text-xs font-medium tracking-widest uppercase text-[#111111] pb-0.5"
                    style={{ borderBottom: `1px solid ${a.color}` }}
                  >
                    {locale === "lt" ? "Skaityti" : "Read more"}
                    <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
