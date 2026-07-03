import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Globe, Scale, Gavel } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

const areas = [
  {
    id: "immigration-law",
    icon: Globe,
    color: "#6B9EB8",

    tag: "Practice Area",
    title: "Immigration Law",
    ltTitle: "Imigracijos teisė",
    overview:
      "Immigration law governs how non-citizens enter, reside, work, and settle in Lithuania and the EU. It covers national D-visas, temporary and permanent residence permits, EU Blue Cards, family reunification, and the path to citizenship.",
    plain:
      "In plain terms: if you (or a family member) are moving to Lithuania from outside the EU, immigration law decides whether you can come, on what basis, for how long, and what you can do here — work, study, join family, or eventually become a citizen. Each pathway has its own conditions, documents, and deadlines.",
    ltOverview:
      "Imigracijos teisė reguliuoja ne ES piliečių atvykimą, gyvenimą, darbą ir apsigyvenimą Lietuvoje bei ES. Ji apima nacionalines D vizas, laikinus ir nuolatinius leidimus gyventi, ES mėlynąją kortelę, šeimos susijungimą ir pilietybės kelią.",
    ltPlain:
      "Paprastai: jei jūs (ar šeimos narys) atvykstate į Lietuvą iš ne ES šalies, imigracijos teisė nustato ar galite atvykti, kokiu pagrindu, kiek laiko ir ką galite čia daryti.",
  },
  {
    id: "administrative-law",
    icon: Scale,
    color: "#9A8BB5",

    tag: "Practice Area",
    title: "Administrative Law",
    ltTitle: "Administracinė teisė",
    overview:
      "Administrative law governs the relationship between the individual and the state — how public institutions make decisions, and how those decisions can be challenged. In immigration matters, it is the framework behind every Migration Department ruling and every appeal.",
    plain:
      "In plain terms: when a state institution (Migration Department, ministry, municipality) issues a decision that affects you — a refusal, a fine, a deportation order — administrative law is what you use to challenge it. It defines the deadlines, the correct court, the standard of review, and what evidence matters.",
    ltOverview:
      "Administracinė teisė reguliuoja asmens ir valstybės santykius — kaip institucijos priima sprendimus ir kaip juos galima ginčyti. Imigracijos bylose tai yra kiekvieno Migracijos departamento sprendimo ir kiekvieno skundo pagrindas.",
    ltPlain:
      "Paprastai: kai valstybės institucija priima jums nepalankų sprendimą, administracinė teisė nustato terminus, kompetentingą teismą ir įrodymus, kurie svarbūs ginčijant sprendimą.",
  },
  {
    icon: Gavel,
    color: "#C9A84C",
    tag: "Perspective",
    title: "How the Court Thinks",
    ltTitle: "Kaip mąsto teismas",
    overview:
      "Working inside the Highest Administrative Court of Lithuania has shown me exactly how judges approach immigration and administrative disputes — what persuades them, what they dismiss, and where cases are actually won.",
    plain:
      "Courts here are statutory: arguments must be tied to a specific article of law, not a general sense of unfairness. Procedural errors by the authority (wrong deadline, wrong regulation, missing notice) open the widest door. Proportionality — especially in family and humanitarian cases — carries real weight. Deadlines are strict: 14 days for administrative appeals, 30 for the court. Speed is a legal requirement, not a preference.",
    ltOverview:
      "Darbas Lietuvos vyriausiajame administraciniame teisme parodė, kaip teisėjai mąsto imigracijos ir administracinėse bylose — kas juos įtikina ir kur bylos iš tiesų laimimos.",
    ltPlain:
      "Teismai remiasi konkrečia norma, ne bendru teisingumo jausmu. Procedūriniai institucijos pažeidimai atveria plačiausias duris. Proporcingumas svarbus šeimos ir humanitarinėse bylose. Terminai griežti: 14 dienų administraciniam skundui, 30 — teismui.",
  },
];

export default function PracticeSection() {
  const { locale } = useLanguage();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="practice" className="py-28 lg:py-40" style={{ background: "#F2F1EF" }}>
      <div ref={ref} className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
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
                {locale === "lt" ? "Praktika" : "Practice"}
              </span>
            </div>
            <h2 className="font-serif font-light text-[#111111]" style={{ fontSize: "clamp(2.2rem, 5vw, 3.2rem)" }}>
              {locale === "lt"
                ? "Dvi teisės sritys —\nviena perspektyva"
                : "Two Areas of Law —\nOne Court-Side View"}
            </h2>
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-[#6B6B6B] font-light leading-relaxed">
              {locale === "lt"
                ? "Dirbu dviejose glaudžiai susijusiose srityse: imigracijos ir administracinėje teisėje. Žemiau — kiekvienos apžvalga paprasta kalba, plius įžvalga, kaip mąsto teismas."
                : "My work sits at the intersection of two closely connected fields: immigration and administrative law. Below is a plain-language overview of each — plus what a decade inside the administrative court has taught me about how judges actually decide these cases."}
            </p>
            <Link
              to="/practice"
              className="group self-start inline-flex items-center gap-2 text-xs font-medium tracking-widest uppercase pb-0.5"
              style={{ color: "#111111", borderBottom: "1px solid #C9A84C" }}
            >
              {locale === "lt" ? "Visa praktika" : "Full Practice Detail"}
              <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </motion.div>

        {/* Subsections */}
        <div className="space-y-4">
          {areas.map((a, i) => {
            const Icon = a.icon;
            return (
              <motion.div
                key={a.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group bg-white border overflow-hidden transition-all duration-300"
                style={{ borderColor: "#E4E4E2" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.boxShadow = "0 8px 32px rgba(26,43,74,0.08)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.boxShadow = "none"; }}
              >
                <div className="h-0.5 w-0 group-hover:w-full transition-all duration-500" style={{ background: a.color }} />

                <div className="p-6 lg:p-8 grid lg:grid-cols-[1fr_2fr] gap-6 lg:gap-10 items-start">
                  {/* Left */}
                  <div>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-11 h-11 flex items-center justify-center" style={{ background: `${a.color}15` }}>
                        <Icon size={18} style={{ color: a.color }} />
                      </div>
                      <span
                        className="text-[10px] font-medium tracking-[0.2em] uppercase"
                        style={{ color: a.color }}
                      >
                        {a.tag}
                      </span>
                    </div>
                    <h3 className="font-serif font-medium text-[#111111] text-xl">
                      {locale === "lt" ? a.ltTitle : a.title}
                    </h3>
                  </div>

                  {/* Right */}
                  <div className="space-y-4">
                    <p className="text-[#111111] text-sm font-light leading-relaxed">
                      {locale === "lt" ? a.ltOverview : a.overview}
                    </p>
                    <div className="p-4 border-l-2" style={{ borderColor: a.color, background: `${a.color}08` }}>
                      <div
                        className="text-[10px] font-medium tracking-[0.2em] uppercase mb-2"
                        style={{ color: a.color }}
                      >
                        {locale === "lt" ? "Paprasta kalba" : "In plain terms"}
                      </div>
                      <p className="text-[#6B6B6B] text-sm font-light leading-relaxed">
                        {locale === "lt" ? a.ltPlain : a.plain}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
