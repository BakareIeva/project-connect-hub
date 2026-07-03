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
    heading: "What Human Rights Law Is",
    ltHeading: "Kas yra žmogaus teisių teisė",
    body:
      "Human rights law protects the fundamental rights and freedoms of every individual. In Europe, these rights are principally safeguarded by the European Convention on Human Rights (ECHR), interpreted by the European Court of Human Rights (ECtHR), and by the Charter of Fundamental Rights of the European Union, where European Union law applies. Together, they provide an important legal framework for protecting dignity, equality, private and family life, fair procedures, and effective legal protection.",
    ltBody:
      "Žmogaus teisių teisė saugo kiekvieno asmens pagrindines teises ir laisves. Europoje šios teisių yra saugomos Europos žmogaus teisių konvencijos (EŽTK), kurią aiškina Europos žmogaus teisių teismas (EŽTT), bei Europos Sąjungos pagrindinių teisių chartijos, kai taikytina Europos Sąjungos teisė. Kartu jos sudaro svarbų teisinį pagrindą, saugantį orumą, lygybę, privataus ir šeimos gyvenimo teisę, teisingą procesą ir veiksmingą teisinę gynybą.",
  },
  {
    heading: "In Plain Terms",
    ltHeading: "Paprasta kalba",
    body:
      "Human rights law ensures that public authorities respect fundamental rights whenever they make decisions affecting individuals. Whether a case concerns immigration, family life, detention, discrimination, or another area of public law, authorities must act lawfully, fairly, and proportionately, while balancing the interests of the individual with the legitimate interests of the State.",
    ltBody:
      "Žmogaus teisių teisė užtikrina, kad viešosios institucijos gerbtų pagrindines teises, priimdamos sprendimus, kurie veikia asmenis. Nesvarbu, ar byla susijusi su imigracija, šeimos gyvenimu, sulaikymu, diskriminacija, ar kita viešosios teisės sritimi, institucijos privalo veikti teisėtai, teisingai ir proporcingai, sverdamos asmens interesus su valstybės teisėtais interesais.",
  },
  {
    heading: "Why It Matters",
    ltHeading: "Kodėl tai svarbu",
    body:
      "Human rights law plays a significant role in immigration and administrative law. Lithuanian courts, together with the European Court of Human Rights and the Court of Justice of the European Union where relevant, regularly assess whether public authorities have respected fundamental rights when making administrative decisions. As a result, human rights principles continue to influence judicial practice, administrative decision-making, and the development of national legislation.",
    ltBody:
      "Žmogaus teisių teisė atlieka svarbų vaidmenį imigracijos ir administracinėje teisėje. Lietuvos teismai, kartu su Europos žmogaus teisių teismu ir Europos Sąjungos Teisingumo Teismu, kai aktualu, reguliariai vertina, ar viešosios institucijos, priimdamos administracinius sprendimus, gerbė pagrindines teises. Dėl to žmogaus teisių principai ir toliau daro įtaką teismų praktikai, administraciniam sprendimų priėimui ir nacionalinės teisės raidai.",
  },
  {
    heading: "Professional Focus",
    ltHeading: "Profesinis dėmesys",
    body:
      "My professional interest focuses on the practical application of human rights principles within immigration and administrative law, with particular attention to the jurisprudence of the European Court of Human Rights (ECtHR) and its interaction with Lithuanian and European Union law. Through this website, I share recent court practice and legal insights that explain how these principles are interpreted and applied in practice.",
    ltBody:
      "Mano profesinis dėmesys sutelktas į žmogaus teisių principų taikymą praktikoje imigracijos ir administracinėje teisėje, ypač į Europos žmogaus teisių teismo (EŽTT) jurisprudenciją ir jos sąveiką su Lietuvos ir Europos Sąjungos teise. Per šią svetainę dalinuosi naujausia teismų praktika ir teisinėmis įžvalgomis, paaiškinančiomis, kaip šie principai aiškinami ir taikomi praktikoje.",
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
