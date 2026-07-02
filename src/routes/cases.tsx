import { createFileRoute } from "@tanstack/react-router";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
// next/link removed
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/lib/LanguageContext";

const cases = [
  {
    type: "Residence & Settlement",
    color: "#6B9EB8",
    summary:
      "Navigating the full temporary and permanent residence permit process in Lithuania — from the initial National D-Visa through to the residence card.",
    detail:
      "Residence cases often involve coordinating documentation across multiple Lithuanian institutions: the Migration Department, the employer, and sometimes municipal authorities. Common grounds include employment, family ties, studies, and business activity. Each ground has its own documentary requirements and processing timelines.",
    example:
      "A software engineer from India relocating to Vilnius: coordinated employer documentation, filed the work permit, secured the national visa, and obtained the residence permit card within 10 weeks.",
    tags: ["Temporary Residence", "Permanent Residence", "National Visa", "D-Visa"],
  },
  {
    type: "Refusals & Appeals",
    color: "#C47A6A",
    summary:
      "When a permit or visa is refused, the statutory deadline for appeal begins immediately. Understanding the legal grounds for the refusal is the first step.",
    detail:
      "Every refusal decision contains stated grounds that can be legally challenged. Appeals can be filed administratively to the Migration Department, or escalated to the Administrative Court. The 14-calendar-day deadline from the date of refusal is strict — there is no discretion to extend it. Acting immediately is essential.",
    example:
      "A Ukrainian family's reunification application refused on financial grounds — successfully overturned on administrative appeal by demonstrating aggregate household income and sponsor guarantees.",
    tags: ["Administrative Appeal", "Court Challenge", "Refusal Review", "Deportation"],
  },
  {
    type: "Family Reunification",
    color: "#7AAE82",
    summary:
      "Bringing spouses, children, and dependent family members to Lithuania under EU family reunification law. Cases range from straightforward spousal permits to complex cross-jurisdiction situations.",
    detail:
      "Family reunification requires demonstrating the relationship, meeting financial thresholds, and providing adequate accommodation proof. Marriage certificates, birth certificates, and dependency documents from non-EU countries often require apostillation and certified Lithuanian translation before they are accepted.",
    example:
      "Brazilian-Lithuanian couple: navigated apostillation of the Brazilian marriage certificate, income threshold demonstration, and D-visa coordination — full case resolved in 14 weeks.",
    tags: ["Spouse Visa", "Child Residence", "Dependent Parents", "Family Permit"],
  },
  {
    type: "Work & Business Migration",
    color: "#C9A84C",
    summary:
      "EU Blue Cards for high-skilled professionals, work permits for employees, and residence permits for entrepreneurs and company founders relocating to Lithuania.",
    detail:
      "Lithuania offers several pathways for work-based migration: the standard work permit for non-EU nationals employed by Lithuanian companies, the EU Blue Card for highly qualified workers, and the entrepreneur/startup pathway for those establishing businesses. Each has different eligibility criteria regarding salary thresholds, qualifications, and employer obligations.",
    example:
      "A tech company relocating 6 engineers from non-EU countries: bulk work permit applications, employer compliance setup, and coordinated D-visa scheduling — all approved on first submission.",
    tags: ["EU Blue Card", "Work Permit", "Startup Visa", "Entrepreneur Residence"],
  },
  {
    type: "Citizenship & Naturalisation",
    color: "#9A8BB5",
    summary:
      "Long-term residents pursuing Lithuanian citizenship through naturalisation — eligibility assessment, language and constitution exam guidance, and full case management.",
    detail:
      "Lithuanian citizenship by naturalisation is available to those who have held permanent residence for at least 10 years, meet language requirements, pass a constitution knowledge exam, and renounce other citizenship (with certain exceptions). Dual citizenship exceptions exist for EU citizens and in specific circumstances. Eligibility assessment is the critical first step.",
    example:
      "Nigerian national after 11 years of legal residence — managed dual citizenship exemption assessment, coordinated document apostillation from three countries, successful naturalisation.",
    tags: ["Naturalisation", "Dual Citizenship", "Long-Term Residence", "Citizenship Exam"],
  },
];

function CaseCard({ c, i }: { c: typeof cases[0]; i: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: i * 0.08 }}
      className="bg-white border overflow-hidden"
      style={{ borderColor: "#E4E4E2" }}
    >
      <div className="h-1 w-full" style={{ background: c.color }} />

      <div className="p-8 lg:p-10">
        {/* Header */}
        <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
          <h2 className="font-serif font-medium text-[#111111] text-2xl">{c.type}</h2>
          <div className="flex flex-wrap gap-2">
            {c.tags.map((tag) => (
              <span
                key={tag}
                className="text-[10px] font-medium tracking-[0.15em] uppercase px-2.5 py-1"
                style={{ background: `${c.color}15`, color: c.color }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Summary + detail */}
          <div className="space-y-4">
            <p className="text-[#111111] font-light leading-relaxed">{c.summary}</p>
            <p className="text-[#6B6B6B] text-sm font-light leading-relaxed">{c.detail}</p>
          </div>

          {/* Example */}
          <div className="p-5 border-l-2" style={{ borderColor: c.color, background: `${c.color}08` }}>
            <div
              className="text-[10px] font-medium tracking-[0.2em] uppercase mb-3"
              style={{ color: c.color }}
            >
              Anonymised example
            </div>
            <p className="text-[#6B6B6B] text-sm font-light leading-relaxed italic">{c.example}</p>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

function CasesPage() {
  const { locale } = useLanguage();
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true });

  return (
    <>
      <Navbar />
      <main>

        {/* Header */}
        <section className="pt-40 pb-20" style={{ background: "#111111" }}>
          <div ref={headerRef} className="max-w-7xl mx-auto px-6 lg:px-12">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={headerInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7 }}
            >
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-xs font-medium tracking-widest uppercase text-white/40 hover:text-white/70 transition-colors mb-10"
              >
                <ArrowLeft size={12} />
                {locale === "lt" ? "Grįžti" : "Home"}
              </a>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-px" style={{ background: "#C9A84C" }} />
                <span className="text-xs font-medium tracking-[0.3em] uppercase" style={{ color: "#C9A84C" }}>
                  {locale === "lt" ? "Bylos" : "Case Areas"}
                </span>
              </div>
              <h1
                className="font-serif font-light text-white mb-5"
                style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)" }}
              >
                {locale === "lt" ? "Bylos kurias\ntvarkau" : "Areas of\nImmigration Law"}
              </h1>
              <p className="text-white/55 font-light max-w-xl leading-relaxed text-lg">
                {locale === "lt"
                  ? "Konkretūs bylos tipai — ne abstrakčios kategorijos, o realios situacijos, su kuriomis susiduria žmonės."
                  : "Specific case types drawn from real immigration situations — not abstract categories, but the actual scenarios people face navigating Lithuanian immigration law."}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Cases */}
        <section className="py-16 lg:py-24" style={{ background: "#F2F1EF" }}>
          <div className="max-w-7xl mx-auto px-6 lg:px-12 space-y-6">
            {cases.map((c, i) => (
              <CaseCard key={c.type} c={c} i={i} />
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 text-center" style={{ background: "#111111" }}>
          <div className="max-w-xl mx-auto px-6">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-8 h-px" style={{ background: "#C9A84C" }} />
              <span className="text-xs font-medium tracking-[0.3em] uppercase" style={{ color: "#C9A84C" }}>
                {locale === "lt" ? "Susisiekite" : "Get in Touch"}
              </span>
              <div className="w-8 h-px" style={{ background: "#C9A84C" }} />
            </div>
            <p className="text-white/55 font-light mb-8 text-base leading-relaxed">
              {locale === "lt"
                ? "Turite klausimų apie savo situaciją? Parašykite."
                : "Have a question about your specific situation? Send a message."}
            </p>
            <Link
              href="/#contact"
              className="inline-block px-8 py-4 text-xs font-medium tracking-widest uppercase transition-opacity hover:opacity-80"
              style={{ background: "#C9A84C", color: "#111111" }}
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

export const Route = createFileRoute("/cases")({ component: CasesPage });
