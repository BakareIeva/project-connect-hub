import { createFileRoute, Link } from "@tanstack/react-router";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowLeft, Shield } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/lib/LanguageContext";

const COLOR = "#B87A6B";

const sections = [
  {
    heading: "What human rights law actually covers",
    ltHeading: "Ką iš tiesų apima žmogaus teisių teisė",
    body:
      "Human rights law in immigration work centres on the European Convention on Human Rights (ECHR) and the Charter of Fundamental Rights of the European Union. It protects against arbitrary detention, guarantees fair procedure, and — most frequently in my cases — safeguards the right to family life and private life against disproportionate state interference.",
    ltBody:
      "Žmogaus teisių teisė imigracijos srityje sutelkta į Europos žmogaus teisių konvenciją (EŽTK) ir Europos Sąjungos pagrindinių teisių chartiją. Ji saugo nuo savavališko sulaikymo, garantuoja teisingą procesą ir — dažniausiai mano bylose — saugo teisę į šeimos ir privataus gyvenimą nuo neproporcingo valstybės kišimosi.",
  },
  {
    heading: "In plain terms",
    ltHeading: "Paprasta kalba",
    body:
      "When the state wants to deport someone, refuse family reunification, or revoke residence, human rights law asks whether the interference is proportionate. Do the reasons given outweigh the harm to family life? Is there a less restrictive alternative? These questions are not optional extras — they are binding legal tests that Lithuanian courts and the European Court of Human Rights apply in every relevant case.",
    ltBody:
      "Kai valstybė nori ką nors išsiųsti, atsisakyti šeimos susijungimo ar panaikinti leidimą gyventi, žmogaus teisių teisė klausia, ar kišimasis proporcingas. Ar pateiktos priežastys nusveria žalą šeimos gyvenimui? Ar yra mažiau ribojanti alternatyva? Šie klausimai nėra papildomi — tai privalomi teisiniai testai, kuriuos Lietuvos teismai ir Europos žmogaus teisių teismas taiko kiekvienoje aktualioje byloje.",
  },
  {
    heading: "The core human-rights arguments I develop",
    ltHeading: "Pagrindiniai žmogaus teisių argumentai, kuriuos vystau",
    body:
      "Article 8 ECHR claims protecting family and private life, non-refoulement arguments against removal to unsafe countries, procedural fairness challenges under Article 6, and proportionality assessments that weigh state interests against individual rights. Each argument is anchored in the specific facts of the client’s situation and supported by documentary and expert evidence.",
    ltBody:
      "EŽTK 8 straipsnio reikalavimai, saugantys šeimos ir privataus gyvenimo teisę, negrąžinimo argumentai prieš išsiuntimą į nesaugią šalį, procedūrinio teisingumo pažeidimai pagal 6 straipsnį ir proporcingumo vertinimai, sveriantys valstybės interesus prieš asmens teises. Kiekvienas argumentas yra paremtas konkrečiomis kliento situacijos aplinkybėmis ir dokumentiniais ar ekspertiniais įrodymais.",
  },
];

function HumanRightsLawPage() {
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
                  <Shield size={18} style={{ color: COLOR }} />
                </div>
                <span className="text-xs font-medium tracking-[0.3em] uppercase" style={{ color: COLOR }}>
                  {locale === "lt" ? "Praktikos sritis" : "Practice Area"}
                </span>
              </div>
              <h1
                className="font-serif font-light text-white leading-[1.05] mb-6"
                style={{ fontSize: "clamp(2.4rem, 5vw, 4rem)" }}
              >
                {locale === "lt" ? "Žmogaus teisių teisė" : "Human Rights Law"}
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

export const Route = createFileRoute("/practice/human-rights-law")({
  head: () => ({
    meta: [
      { title: "Human Rights Law — Ieva Bakare" },
      {
        name: "description",
        content:
          "Human rights law in Lithuanian immigration cases: ECHR Article 8 family life, non-refoulement, procedural fairness, and proportionality assessments before national courts.",
      },
      { property: "og:title", content: "Human Rights Law — Ieva Bakare" },
      {
        property: "og:description",
        content:
          "Protecting family life and private life against disproportionate state interference in immigration and deportation cases.",
      },
    ],
  }),
  component: HumanRightsLawPage,
});
