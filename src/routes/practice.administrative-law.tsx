import { createFileRoute, Link } from "@tanstack/react-router";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowLeft, Scale } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/lib/LanguageContext";

const COLOR = "#9A8BB5";

const sections = [
  {
    heading: "What administrative law actually is",
    ltHeading: "Kas iš tiesų yra administracinė teisė",
    body:
      "Administrative law governs the relationship between the individual and the state — how public institutions make decisions, and how those decisions can be challenged. In immigration matters it is the framework behind every Migration Department ruling, every refusal, and every appeal that follows.",
    ltBody:
      "Administracinė teisė reguliuoja asmens ir valstybės santykius — kaip institucijos priima sprendimus ir kaip juos galima ginčyti. Imigracijos bylose tai yra kiekvieno Migracijos departamento sprendimo, atsisakymo ir skundo pagrindas.",
  },
  {
    heading: "In plain terms",
    ltHeading: "Paprasta kalba",
    body:
      "When a state institution — the Migration Department, a ministry, a municipality — issues a decision that affects you (a refusal, a fine, a deportation order), administrative law is what you use to challenge it. It defines the deadlines, the correct court, the standard of review, and what evidence the court will actually weigh.",
    ltBody:
      "Kai valstybės institucija — Migracijos departamentas, ministerija, savivaldybė — priima jums nepalankų sprendimą (atsisakymą, baudą, sprendimą išsiųsti), administracinė teisė nurodo, kaip jį ginčyti. Ji nustato terminus, kompetentingą teismą, peržiūros standartą ir svarbius įrodymus.",
  },
  {
    heading: "Why it matters for immigration cases",
    ltHeading: "Kodėl tai svarbu imigracijos bylose",
    body:
      "Almost every immigration dispute in Lithuania is, technically, an administrative dispute. Winning turns on administrative-law fundamentals: filing the right complaint in the right forum within the statutory window, framing the argument around a specific legal provision, and knowing which procedural errors by the authority are actually reviewable.",
    ltBody:
      "Beveik kiekvienas imigracijos ginčas Lietuvoje techniškai yra administracinis. Laimėjimas priklauso nuo administracinės teisės pagrindų: tinkamas skundas tinkamai institucijai per įstatyminį terminą, argumentas, pagrįstas konkrečia norma, ir žinojimas, kurios institucijos procedūrinės klaidos iš tiesų yra peržiūrimos.",
  },
];

function AdministrativeLawPage() {
  const { locale } = useLanguage();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <>
      <Navbar />
      <main>
        <section className="pt-40 pb-20" style={{ background: "#111111" }}>
          <div ref={ref} className="max-w-4xl mx-auto px-6 lg:px-12">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7 }}
            >
              <Link
                to="/practice"
                className="inline-flex items-center gap-2 text-xs font-medium tracking-widest uppercase text-white/50 hover:text-white/80 transition-colors mb-10"
              >
                <ArrowLeft size={12} />
                {locale === "lt" ? "Praktika" : "Practice"}
              </Link>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-11 h-11 flex items-center justify-center" style={{ background: `${COLOR}20` }}>
                  <Scale size={18} style={{ color: COLOR }} />
                </div>
                <span className="text-xs font-medium tracking-[0.3em] uppercase" style={{ color: COLOR }}>
                  {locale === "lt" ? "Praktikos sritis" : "Practice Area"}
                </span>
              </div>
              <h1
                className="font-serif font-light text-white leading-[1.05] mb-6"
                style={{ fontSize: "clamp(2.4rem, 5vw, 4rem)" }}
              >
                {locale === "lt" ? "Administracinė teisė" : "Administrative Law"}
              </h1>
            </motion.div>
          </div>
        </section>

        <section className="py-20 lg:py-28" style={{ background: "#F2F1EF" }}>
          <div className="max-w-3xl mx-auto px-6 lg:px-12 space-y-14">
            {sections.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="font-serif font-medium text-[#111111] text-2xl mb-4">
                  {locale === "lt" ? s.ltHeading : s.heading}
                </h2>
                <p className="text-[#3E3E3E] font-light leading-relaxed">
                  {locale === "lt" ? s.ltBody : s.body}
                </p>
              </motion.div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export const Route = createFileRoute("/practice/administrative-law")({
  head: () => ({
    meta: [
      { title: "Administrative Law — Ieva Bakare" },
      {
        name: "description",
        content:
          "Administrative law in Lithuania: how public-institution decisions are made, and how they can be challenged — the framework behind every immigration appeal.",
      },
      { property: "og:title", content: "Administrative Law — Ieva Bakare" },
      {
        property: "og:description",
        content:
          "The legal principles that shape administrative decision-making and judicial review of public authorities in Lithuania.",
      },
    ],
  }),
  component: AdministrativeLawPage,
});
