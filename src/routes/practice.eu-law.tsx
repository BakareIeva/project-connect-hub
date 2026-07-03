import { createFileRoute, Link } from "@tanstack/react-router";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowLeft, Landmark } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/lib/LanguageContext";

const COLOR = "#7A8BB8";

const sections = [
  {
    heading: "What European Union law actually covers",
    ltHeading: "Ką iš tiesų apima Europos Sąjungos teisė",
    body:
      "EU law governs the rights of citizens and residents across the Union, including free movement, family reunification under the Citizens’ Rights Directive, EU Blue Card conditions, and the primacy of EU legislation over conflicting national rules. In immigration cases it is often the decisive layer: a Lithuanian regulation that contradicts an EU directive can be challenged directly.",
    ltBody:
      "ES teisė reguliuoja piliečių ir gyventojų teises visoje Sąjungoje, įskaitant laisvą judėjimą, šeimos susijungimą pagal Piliečių teisių direktyvą, ES mėlynosios kortelės sąlygas ir ES teisės aktų viršenybę prieš prieštaraujančius nacionalinius teisės aktus. Imigracijos bylose tai dažnai lemiamas sluoksnis: Lietuvos reglamentą, prieštaraujantį ES direktyvai, galima ginčyti tiesiogiai.",
  },
  {
    heading: "In plain terms",
    ltHeading: "Paprasta kalba",
    body:
      "If you are an EU citizen moving to Lithuania, or a non-EU family member of an EU citizen, EU law often gives you stronger rights than Lithuanian national law alone. It can override stricter domestic requirements, shorten waiting periods, and widen the list of family members who qualify for residence. Knowing when EU law applies — and how to argue it before a national court — changes outcomes.",
    ltBody:
      "Jei esate ES pilietis, atvykstantis į Lietuvą, ar ne ES šeimos narys ES piliečio, ES teisė dažnai suteikia daugiau teisių nei vien Lietuvos nacionalinė teisė. Ji gali panaikinti griežtesnius nacionalinius reikalavimus, sutrumpinti laukimo laiką ir praplėsti šeimos narių, turinčių teisę į leidimą gyventi, sąrašą. Žinoti, kada taikoma ES teisė ir kaip ją argumentuoti nacionaliniame teisme, keičia rezultatus.",
  },
  {
    heading: "Why it matters for immigration cases",
    ltHeading: "Kodėl tai svarbu imigracijos bylose",
    body:
      "Many refusal decisions by the Migration Department rely on purely domestic criteria that EU law has superseded. Family reunification for EU citizens, derived rights of residence for non-EU carers, and the right of permanent residence after five years all have direct EU anchors. A case framed under EU law can be referred to the Court of Justice of the European Union for a preliminary ruling when national courts need interpretive guidance.",
    ltBody:
      "Daugelis Migracijos departamento atsisakymų remiasi vien nacionaliniais kriterijais, kuriuos ES teisė pakeitė. ES piliečių šeimos susijungimas, ne ES prižiūrėtojų išvestinės gyvenimo teisės ir teisė į nuolatinę gyvenamąją vietą po penkerių metų turi tiesioginius ES pagrindus. Byla, suformuluota pagal ES teisę, gali būti perduota Europos Sąjungos Teisingumo Teismui prejudiciniam sprendimui priimti, kai nacionaliniams teismams reikia aiškinimo.",
  },
];

function EULawPage() {
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
                  <Landmark size={18} style={{ color: COLOR }} />
                </div>
                <span className="text-xs font-medium tracking-[0.3em] uppercase" style={{ color: COLOR }}>
                  {locale === "lt" ? "Praktikos sritis" : "Practice Area"}
                </span>
              </div>
              <h1
                className="font-serif font-light text-white leading-[1.05] mb-6"
                style={{ fontSize: "clamp(2.4rem, 5vw, 4rem)" }}
              >
                {locale === "lt" ? "Europos Sąjungos teisė" : "European Union Law"}
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

export const Route = createFileRoute("/practice/eu-law")({
  head: () => ({
    meta: [
      { title: "European Union Law — Ieva Bakare" },
      {
        name: "description",
        content:
          "European Union law and the legal principles influencing immigration, residence rights, free movement, and cross-border legal protection.",
      },
      { property: "og:title", content: "European Union Law — Ieva Bakare" },
      {
        property: "og:description",
        content:
          "How EU law governs immigration rights in Lithuania and when it overrides stricter domestic requirements.",
      },
    ],
  }),
  component: EULawPage,
});
