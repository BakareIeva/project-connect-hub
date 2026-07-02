import { createFileRoute } from "@tanstack/react-router";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
// next/link removed
import { ArrowLeft, Scale, BookOpen, Gavel, AlertTriangle, Users, Globe } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/lib/LanguageContext";

const practiceAreas = [
  {
    icon: Globe,
    color: "#6B9EB8",
    title: "Residence & Settlement",
    lt: "Gyvenamoji vieta ir apsigyvenimas",
    desc: "Temporary and permanent residence permits for individuals and families relocating to Lithuania — from initial D-visa through to permanent status.",
    stages: ["D-visa coordination", "Migration Department filing", "Biometric registration", "Permit card collection"],
  },
  {
    icon: AlertTriangle,
    color: "#C47A6A",
    title: "Refusals & Appeals",
    lt: "Atsisakymai ir apeliacijia",
    desc: "Administrative and court appeals against refused permits, visas, and deportation orders. Fast action — Lithuanian law imposes 14-day appeal windows.",
    stages: ["Refusal notice analysis", "Grounds assessment", "Appeal brief drafting", "Administrative court representation"],
  },
  {
    icon: Users,
    color: "#7AAE82",
    title: "Family Reunification",
    lt: "Šeimos susijungimas",
    desc: "Bringing spouses, children, and dependent relatives to Lithuania under EU family reunification law. Cross-jurisdiction documentation handled in full.",
    stages: ["Sponsor eligibility check", "Income threshold assessment", "Document apostillation", "Residence permit filing"],
  },
  {
    icon: BookOpen,
    color: "#C9A84C",
    title: "Work & Business Migration",
    lt: "Darbo ir verslo migracija",
    desc: "EU Blue Cards, work permits, entrepreneur visas. Corporate relocation packages for employers moving teams to Lithuania.",
    stages: ["Role qualification review", "LDB employer notification", "Blue Card application", "Family member permits"],
  },
  {
    icon: Scale,
    color: "#9A8BB5",
    title: "Citizenship & Naturalisation",
    lt: "Pilietybė ir natūralizacija",
    desc: "Long-term residents on the path to Lithuanian citizenship — eligibility assessment, dual citizenship exceptions, language exam guidance.",
    stages: ["Residence period verification", "Dual citizenship assessment", "Language exam prep guidance", "Naturalisation filing"],
  },
];

const courtPrinciples = [
  {
    heading: "The burden of proof rests with the applicant",
    body: "Lithuanian administrative courts do not investigate on your behalf. If a document is missing, ambiguous, or poorly translated, it is your problem — not the court's. The strongest appeals come with a complete, well-organised file.",
  },
  {
    heading: "Procedural flaws open the widest door",
    body: "Courts are most receptive to arguments that the Migration Department made a procedural error — failed to notify, used wrong timelines, or applied the wrong regulation. A substantive disagreement (\"my income is enough\") is harder to win than a procedural one (\"they used the wrong income threshold\").",
  },
  {
    heading: "Courts read the specific statute, not the spirit",
    body: "Lithuanian courts are statutory. They look at what the law says, not what it was intended to say. This means an argument must be tied to a specific article, paragraph, and sub-paragraph. \"It was unfair\" is not a legal argument. \"Article 40(3) of the Law on the Legal Status of Aliens was incorrectly applied\" is.",
  },
  {
    heading: "New evidence is allowed but comes with costs",
    body: "Unlike some jurisdictions, Lithuanian administrative courts generally permit new evidence to be introduced on appeal. This is useful when a refusal cited missing documents that you now have. However, courts view it negatively when the applicant clearly had the document and chose not to submit it initially.",
  },
  {
    heading: "Proportionality matters in family and humanitarian cases",
    body: "When deportation or separation of families is at stake, courts are required under EU law and the ECHR to apply a proportionality assessment. A technical deficiency in a permit application should not outweigh the right to family life. This is often the strongest argument in refusal cases involving long-term residents or families with minor children.",
  },
  {
    heading: "Speed is a legal requirement — the 14-day window",
    body: "Administrative appeals must be filed within 14 calendar days of the refusal notification. Missing this window closes the administrative route entirely and forces you to the administrative court (30-day window). Acting immediately on receiving a refusal is not optional — it is the entire game.",
  },
];

function PracticePage() {
  const { locale } = useLanguage();
  const heroRef = useRef(null);
  const areasRef = useRef(null);
  const courtRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true });
  const areasInView = useInView(areasRef, { once: true, margin: "-80px" });
  const courtInView = useInView(courtRef, { once: true, margin: "-80px" });

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
                href="/"
                className="inline-flex items-center gap-2 text-xs font-medium tracking-widest uppercase text-white/50 hover:text-white/80 transition-colors mb-10"
              >
                <ArrowLeft size={12} />
                {locale === "lt" ? "Grįžti" : "Back"}
              </a>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-px" style={{ background: "#C9A84C" }} />
                <span className="text-xs font-medium tracking-[0.3em] uppercase" style={{ color: "#C9A84C" }}>
                  {locale === "lt" ? "Mano praktika" : "My Practice"}
                </span>
              </div>
              <h1
                className="font-serif font-light text-white leading-[1.05] mb-6"
                style={{ fontSize: "clamp(2.8rem, 6vw, 4.5rem)" }}
              >
                {locale === "lt" ? "Imigracinės teisės\nSritys" : "Immigration Law\nPractice Areas"}
              </h1>
              <p className="text-white/55 font-light leading-relaxed max-w-xl">
                {locale === "lt"
                  ? "Vilniuje dirbanti advokatė, specializuojanti imigracinės teisės srityje. Čia rasite išsamią informaciją apie bylas, kurias priimu, ir kaip dirbu su klientais."
                  : "Based in Vilnius, I specialise exclusively in immigration law. This page covers the case types I handle, how I approach each, and what to expect from Lithuanian courts and the Migration Department."}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Practice Areas */}
        <section className="py-28 lg:py-36" style={{ background: "#F2F1EF" }}>
          <div ref={areasRef} className="max-w-7xl mx-auto px-6 lg:px-12">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={areasInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7 }}
              className="mb-14"
            >
              <h2 className="font-serif font-light text-[#111111] mb-4" style={{ fontSize: "clamp(2rem, 4vw, 2.8rem)" }}>
                {locale === "lt" ? "Praktikos sritys" : "Areas of Practice"}
              </h2>
              <p className="text-[#6B6B6B] font-light max-w-lg">
                {locale === "lt"
                  ? "Dirbu išimtinai su imigracinės teisės bylomis. Žemiau — pagrindinės bylos, kurias priimu."
                  : "I work exclusively on immigration matters. Below are the core case types I handle, with details on the process and what I actually do at each stage."}
              </p>
            </motion.div>

            <div className="space-y-6">
              {practiceAreas.map((area, i) => {
                const Icon = area.icon;
                return (
                  <motion.div
                    key={area.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={areasInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: i * 0.1 }}
                    className="bg-white border p-8 grid lg:grid-cols-[2fr_1fr] gap-8"
                    style={{ borderColor: "#E4E4E2" }}
                  >
                    <div>
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-10 h-10 flex items-center justify-center" style={{ background: `${area.color}15` }}>
                          <Icon size={18} style={{ color: area.color }} />
                        </div>
                        <div>
                          <h3 className="font-serif font-medium text-[#111111] text-xl">{area.title}</h3>
                          {locale === "lt" && (
                            <p className="text-xs text-[#6B6B6B]/60 font-light mt-0.5">{area.lt}</p>
                          )}
                        </div>
                      </div>
                      <p className="text-[#6B6B6B] font-light leading-relaxed text-sm">{area.desc}</p>
                    </div>
                    <div>
                      <p className="text-[10px] font-medium tracking-[0.2em] uppercase mb-3" style={{ color: area.color }}>
                        {locale === "lt" ? "Proceso etapai" : "Process stages"}
                      </p>
                      <ul className="space-y-2">
                        {area.stages.map((s, j) => (
                          <li key={j} className="flex items-center gap-2.5 text-sm text-[#6B6B6B] font-light">
                            <span
                              className="w-4 h-4 flex items-center justify-center text-[9px] font-bold flex-shrink-0"
                              style={{ background: area.color, color: "white" }}
                            >
                              {j + 1}
                            </span>
                            {s}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* How Courts Think */}
        <section id="how-courts-think" className="py-28 lg:py-40" style={{ background: "#111111" }}>
          <div ref={courtRef} className="max-w-7xl mx-auto px-6 lg:px-12">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={courtInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7 }}
              className="grid lg:grid-cols-2 gap-12 mb-16 items-end"
            >
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-px" style={{ background: "#C9A84C" }} />
                  <span className="text-xs font-medium tracking-[0.3em] uppercase" style={{ color: "#C9A84C" }}>
                    {locale === "lt" ? "Kaip galvoja teismai" : "How Courts Think"}
                  </span>
                </div>
                <h2 className="font-serif font-light text-white" style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
                  {locale === "lt"
                    ? "Teismo mąstymas imigracijos bylose"
                    : "Inside the Mind of a\nLithuanian Immigration Court"}
                </h2>
              </div>
              <p className="text-white/50 font-light leading-relaxed" style={{ maxWidth: 420 }}>
                {locale === "lt"
                  ? "Dešimties metų praktika teismuose išmokė mane, ko jie tikisi — ir ko nedaro. Žemiau pateikiu svarbiausius principus, lemiančius imigracijos bylų baigtis."
                  : "Ten years of litigation has taught me exactly how Lithuanian administrative courts approach immigration cases — what they look for, what moves them, and what wastes everyone's time. These are the principles that actually drive outcomes."}
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-6">
              {courtPrinciples.map((p, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={courtInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: i * 0.09 }}
                  className="p-7 border"
                  style={{ borderColor: "rgba(201,168,76,0.15)", background: "rgba(255,255,255,0.03)" }}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className="text-sm font-serif font-medium flex-shrink-0 w-7 h-7 flex items-center justify-center"
                      style={{ color: "#C9A84C", border: "1px solid rgba(201,168,76,0.3)" }}
                    >
                      {i + 1}
                    </div>
                    <div>
                      <h3 className="font-serif font-medium text-white text-base mb-3 leading-snug">{p.heading}</h3>
                      <p className="text-white/45 text-sm font-light leading-relaxed">{p.body}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24" style={{ background: "#F2F1EF" }}>
          <div className="max-w-2xl mx-auto px-6 text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-8 h-px" style={{ background: "#C9A84C" }} />
              <span className="text-xs font-medium tracking-[0.3em] uppercase" style={{ color: "#C9A84C" }}>
                {locale === "lt" ? "Dirbkime kartu" : "Work with me"}
              </span>
              <div className="w-8 h-px" style={{ background: "#C9A84C" }} />
            </div>
            <h2 className="font-serif font-light text-[#111111] mb-5" style={{ fontSize: "clamp(1.8rem, 4vw, 2.6rem)" }}>
              {locale === "lt" ? "Susisiekite" : "Get in Touch"}
            </h2>
            <p className="text-[#6B6B6B] font-light mb-10">
              {locale === "lt"
                ? "Turite klausimų apie imigraciją ar administracinę teisę? Parašykite."
                : "Have a question about immigration or administrative law in Lithuania? Send a message."}
            </p>
            <Link
              href="/#contact"
              className="inline-block px-8 py-4 text-xs font-medium tracking-widest uppercase transition-colors duration-300"
              style={{ background: "#111111", color: "white" }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.background = "#333333")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.background = "#111111")}
            >
              {locale === "lt" ? "Susisiekite" : "Get in Touch"}
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export const Route = createFileRoute("/practice")({ component: PracticePage });
