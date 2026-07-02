
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

const cases = [
  {
    type: "Residence & Settlement",
    color: "#6B9EB8",
    summary:
      "Clients relocating to Lithuania for work, family, or lifestyle — navigating the full permit process from initial D-visa through to permanent residence.",
    example:
      "A software engineer from India moving to Vilnius: coordinated employer documentation, filed the work permit, secured the national visa, and obtained the residence permit card within 10 weeks.",
    tags: ["Temporary Residence", "Permanent Residence", "National Visa"],
  },
  {
    type: "Refusals & Appeals",
    color: "#C47A6A",
    summary:
      "When a permit or visa is refused, the clock starts immediately. I review the legal grounds, build the strongest argument, and file appeals within the statutory deadline.",
    example:
      "A Ukrainian family's reunification application refused on financial grounds — successfully overturned on appeal by demonstrating aggregate household income and sponsor guarantees.",
    tags: ["Administrative Appeal", "Court Challenge", "Refusal Review"],
  },
  {
    type: "Family Reunification",
    color: "#7AAE82",
    summary:
      "Bringing spouses, children, and dependent family members to Lithuania. Cases span straightforward spousal reunifications to complex cross-jurisdiction scenarios.",
    example:
      "Brazilian-Lithuanian couple: navigated apostillation of Brazilian marriage certificate, income threshold demonstration, and D-visa coordination — full case resolved in 14 weeks.",
    tags: ["Spouse Visa", "Child Residence", "Dependent Parents"],
  },
  {
    type: "Work & Business Migration",
    color: "#C9A84C",
    summary:
      "EU Blue Cards for high-skilled professionals, entrepreneur visas, and corporate relocation packages for employers bringing teams to Lithuania.",
    example:
      "Tech company relocating 6 engineers from non-EU countries: bulk work permit applications, employer compliance setup, and coordinated D-visa scheduling — all approved first submission.",
    tags: ["EU Blue Card", "Work Permit", "Startup Visa"],
  },
  {
    type: "Citizenship & Naturalisation",
    color: "#9A8BB5",
    summary:
      "Long-term residents pursuing Lithuanian citizenship: eligibility assessment, language exam preparation guidance, and full naturalisation case management.",
    example:
      "Nigerian national after 11 years of legal residence — managed dual citizenship exemption assessment, coordinated document apostillation from three countries, successful naturalisation.",
    tags: ["Naturalisation", "Dual Citizenship", "Long-Term Residence"],
  },
];

export default function CasesSection() {
  const { locale } = useLanguage();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="cases" className="py-28 lg:py-40" style={{ background: "#F2F1EF" }}>
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
                {locale === "lt" ? "Bylos kurias tvarkau" : "Cases I Work On"}
              </span>
            </div>
            <h2 className="font-serif font-light text-[#111111]" style={{ fontSize: "clamp(2.2rem, 5vw, 3.2rem)" }}>
              {locale === "lt" ? "Kiekviena byla —\nunikali istorija" : "Every Case Is\na Real Person's Story"}
            </h2>
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-[#6B6B6B] font-light leading-relaxed">
              {locale === "lt"
                ? "Žemiau rasite konkrečius bylos tipus, su kuriais dirbu — ne abstrakčias kategorijas, o realias situacijas, su kuriomis susiduria mano klientai."
                : "Below are the specific case types I handle — not abstract categories, but real situations my clients actually face. Each includes an anonymised example from my practice."}
            </p>
            <Link
              href="/cases"
              className="group self-start inline-flex items-center gap-2 text-xs font-medium tracking-widest uppercase pb-0.5"
              style={{ color: "#111111", borderBottom: "1px solid #C9A84C" }}
            >
              {locale === "lt" ? "Visos bylos" : "See All Cases"}
              <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </motion.div>

        {/* Cases */}
        <div className="space-y-4">
          {cases.map((c, i) => (
            <motion.div
              key={c.type}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group bg-white border overflow-hidden transition-all duration-300"
              style={{ borderColor: "#E4E4E2" }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.boxShadow = "0 8px 32px rgba(26,43,74,0.08)"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.boxShadow = "none"; }}
            >
              {/* Color top bar */}
              <div className="h-0.5 w-0 group-hover:w-full transition-all duration-500" style={{ background: c.color }} />

              <div className="p-6 lg:p-8 grid lg:grid-cols-[1fr_2fr] gap-6 lg:gap-10 items-start">

                {/* Left */}
                <div>
                  <h3 className="font-serif font-medium text-[#111111] text-xl mb-3">{c.type}</h3>
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

                {/* Right */}
                <div className="space-y-4">
                  <p className="text-[#6B6B6B] text-sm font-light leading-relaxed">{c.summary}</p>

                  {/* Example */}
                  <div className="p-4 border-l-2" style={{ borderColor: c.color, background: `${c.color}08` }}>
                    <div
                      className="text-[10px] font-medium tracking-[0.2em] uppercase mb-2"
                      style={{ color: c.color }}
                    >
                      {locale === "lt" ? "Bylos pavyzdys" : "Case example"}
                    </div>
                    <p className="text-[#6B6B6B] text-sm font-light leading-relaxed italic">{c.example}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
