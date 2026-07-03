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
    heading: "What European Union Law Is",
    ltHeading: "Kas yra Europos Sąjungos teisė",
    body:
      "European Union law forms a legal framework that applies across all Member States and influences many areas of national law, including immigration, free movement, residence rights, family reunification, employment, and non-discrimination. Through the EU Treaties, Regulations, Directives, and the case law of the Court of Justice of the European Union (CJEU), it establishes common legal standards that Member States are required to respect and implement.",
    ltBody:
      "Europos Sąjungos teisė sudaro teisinę struktūrą, taikomą visose valstybėse narėse ir darančią įtaką daugeliui nacionalinės teisės sričių, įskaitant imigraciją, laisvą judėjimą, teisę gyventi, šeimos susijungimą, užimtumą ir nediskriminavimą. Per ES sutartis, reglamentus, direktyvas ir Europos Sąjungos Teisingumo Teismo (CJEU) teismų praktiką ji nustato bendras teisines normas, kurių valstybės narės privalo laikytis ir įgyvendinti.",
  },
  {
    heading: "In Plain Terms",
    ltHeading: "Paprasta kalba",
    body:
      "European Union law provides important rights and protections for EU citizens and, in many situations, their family members. It also influences the rights of certain non-EU nationals, particularly in areas such as residence, employment, family reunification, and long-term mobility within the European Union. Where European Union law applies, it plays an important role in shaping how national legislation is interpreted and implemented.",
    ltBody:
      "Europos Sąjungos teisė suteikia svarbias teises ir apsaugą ES piliečiams ir, daugybėje situacijų, jų šeimos nariams. Ji taip pat daro įtaką tam tikrų ne ES piliečių teisėms, ypač tokiose srityse kaip gyvenimas, užimtumas, šeimos susijungimas ir ilgalaikis judumas Europos Sąjungoje. Kur taikoma Europos Sąjungos teisė, ji atlieka svarbų vaidmenį formuojant, kaip nacionalinė teisė aktai aiškinami ir įgyvendinami.",
  },
  {
    heading: "Why It Matters",
    ltHeading: "Kodėl tai svarbu",
    body:
      "European Union law is a significant part of immigration and administrative law in Lithuania. National authorities and courts are required to apply European Union legislation consistently with the principles established by the Court of Justice of the European Union. As a result, European Union law continues to influence the development of national legislation, administrative decision-making, and judicial practice, helping to ensure the consistent protection of rights across the European Union.",
    ltBody:
      "Europos Sąjungos teisė yra svarbi imigracijos ir administracinės teisės dalis Lietuvoje. Nacionalinės institucijos ir teismai privalo taikyti Europos Sąjungos teisės aktus nuosekliai su Europos Sąjungos Teisingumo Teismo nustatytomis taisyklėmis. Todėl Europos Sąjungos teisė ir toliau daro įtaką nacionalinės teisės aktų raidai, administraciniam sprendimų priėmimui ir teismų praktikai, padedant užtikrinti nuoseklią teisių apsaugą visoje Europos Sąjungoje.",
  },
  {
    heading: "Professional Focus",
    ltHeading: "Profesinis fokusas",
    body:
      "My professional interest includes the practical application of European Union law within immigration and administrative matters, with particular attention to the jurisprudence of the Court of Justice of the European Union and its influence on Lithuanian administrative practice and judicial decision-making.",
    ltBody:
      "Mano profesinis susidomėjimas apima Europos Sąjungos teisės taikymą praktikoje imigracijos ir administracinių klausimais, ypač Europos Sąjungos Teisingumo Teismo teismų praktikai ir jos įtakai Lietuvos administracinei praktikai ir teismų sprendimų priėmimui.",
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
          "European Union law and the legal principles influencing immigration, residence rights, free movement, and cross-border legal protection.",
      },
    ],
  }),
  component: EULawPage,
});
