import { createFileRoute, Link } from "@tanstack/react-router";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowLeft, ArrowRight, Globe, Scale, Gavel } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/lib/LanguageContext";

const areas = [
  {
    to: "/practice/immigration-law",
    icon: Globe,
    color: "#6B9EB8",
    tag: "Practice Area",
    title: "Immigration Law",
    ltTitle: "Imigracijos teisė",
    summary:
      "How non-citizens enter, reside, work, and settle in Lithuania — D-visas, residence permits, EU Blue Cards, family reunification, and citizenship.",
    ltSummary:
      "Kaip ne ES piliečiai atvyksta, gyvena, dirba ir apsigyvena Lietuvoje — D vizos, leidimai gyventi, ES mėlynoji kortelė, šeimos susijungimas ir pilietybė.",
  },
  {
    to: "/practice/administrative-law",
    icon: Scale,
    color: "#9A8BB5",
    tag: "Practice Area",
    title: "Administrative Law",
    ltTitle: "Administracinė teisė",
    summary:
      "The framework governing how public institutions decide, and how those decisions can be challenged — the backbone of every Migration Department ruling.",
    ltSummary:
      "Sistema, reguliuojanti valstybės institucijų sprendimus ir jų ginčijimą — kiekvieno Migracijos departamento sprendimo pagrindas.",
  },
  {
    to: "/practice/how-court-thinks",
    icon: Gavel,
    color: "#C9A84C",
    tag: "Perspective",
    title: "How the Court Thinks",
    ltTitle: "Kaip mąsto teismas",
    summary:
      "What actually persuades Lithuanian administrative judges — from procedural leverage to proportionality and the deadlines that decide cases.",
    ltSummary:
      "Kas iš tiesų įtikina Lietuvos administracinius teisėjus — procedūros, proporcingumas ir terminai, lemiantys bylų baigtis.",
  },
];

function PracticeIndex() {
  const { locale } = useLanguage();
  const heroRef = useRef(null);
  const gridRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true });
  const gridInView = useInView(gridRef, { once: true, margin: "-80px" });

  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="pt-40 pb-24" style={{ background: "#111111" }}>
          <div ref={heroRef} className="max-w-7xl mx-auto px-6 lg:px-12">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7 }}
            >
              <Link
                to="/"
                className="inline-flex items-center gap-2 text-xs font-medium tracking-widest uppercase text-white/50 hover:text-white/80 transition-colors mb-10"
              >
                <ArrowLeft size={12} />
                {locale === "lt" ? "Grįžti" : "Back"}
              </Link>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-px" style={{ background: "#C9A84C" }} />
                <span className="text-xs font-medium tracking-[0.3em] uppercase" style={{ color: "#C9A84C" }}>
                  {locale === "lt" ? "Praktika" : "Practice"}
                </span>
              </div>
              <h1
                className="font-serif font-light text-white leading-[1.05] mb-6"
                style={{ fontSize: "clamp(2.8rem, 6vw, 4.5rem)" }}
              >
                {locale === "lt" ? "Trys sritys.\nViena perspektyva." : "Three Areas.\nOne Court-Side View."}
              </h1>
              <p className="text-white/55 font-light leading-relaxed max-w-xl">
                {locale === "lt"
                  ? "Mano darbas sutelktas į dvi glaudžiai susijusias sritis — imigracijos ir administracinę teisę — ir pagrįstas dešimtmečio patirtimi Lietuvos vyriausiajame administraciniame teisme."
                  : "My work sits across two closely connected fields — immigration and administrative law — grounded in a decade inside the Highest Administrative Court of Lithuania."}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Subpages grid */}
        <section className="py-28 lg:py-36" style={{ background: "#F2F1EF" }}>
          <div ref={gridRef} className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="grid md:grid-cols-3 gap-6">
              {areas.map((a, i) => {
                const Icon = a.icon;
                return (
                  <motion.div
                    key={a.to}
                    initial={{ opacity: 0, y: 20 }}
                    animate={gridInView ? { opacity: 1, y: 0 } : {}}
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
                      <div className="h-0.5 w-0 group-hover:w-full transition-all duration-500 -mt-8 -mx-8 mb-8" style={{ background: a.color }} />
                      <div className="w-11 h-11 flex items-center justify-center mb-6" style={{ background: `${a.color}15` }}>
                        <Icon size={18} style={{ color: a.color }} />
                      </div>
                      <span className="text-[10px] font-medium tracking-[0.2em] uppercase mb-3 block" style={{ color: a.color }}>
                        {a.tag}
                      </span>
                      <h2 className="font-serif font-medium text-[#111111] text-xl mb-4">
                        {locale === "lt" ? a.ltTitle : a.title}
                      </h2>
                      <p className="text-[#6B6B6B] font-light text-sm leading-relaxed mb-6">
                        {locale === "lt" ? a.ltSummary : a.summary}
                      </p>
                      <span className="inline-flex items-center gap-2 text-xs font-medium tracking-widest uppercase text-[#111111] pb-0.5" style={{ borderBottom: `1px solid ${a.color}` }}>
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
      </main>
      <Footer />
    </>
  );
}

export const Route = createFileRoute("/practice/")({ component: PracticeIndex });
