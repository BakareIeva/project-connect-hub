import { createFileRoute, Link } from "@tanstack/react-router";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowLeft, Globe } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/lib/LanguageContext";

const COLOR = "#6B9EB8";

const sections = [
  {
    heading: "Understanding Immigration Law",
    ltHeading: "Suprasti imigracijos teisę",
    body:
      "Immigration law regulates the legal status of foreign nationals in Lithuania and the European Union. It governs matters such as national visas, temporary and permanent residence permits, EU Blue Cards, family reunification, asylum, long-term residence, and citizenship. It also establishes the legal framework within which public authorities assess immigration applications and make administrative decisions.",
    ltBody:
      "Imigracijos teisė reguliuoja užsieniečių teisinę padėtį Lietuvoje ir Europos Sąjungoje. Ji apima klausimus, susijusius su nacionalinėmis vizomis, laikinaisiais ir nuolatiniais leidimais gyventi, ES mėlynąja kortele, šeimos susijungimu, prieglobsčiu, ilgalaikiu gyvenimu ir pilietybe. Taip pat ji nustato teisinį pagrindą, kuriuo valdžios institucijos vertina imigracijos prašymus ir priima administracinius sprendimus.",
  },
  {
    heading: "Why It Matters",
    ltHeading: "Kodėl tai svarbu",
    body:
      "Immigration law affects every stage of a foreign national's journey, from entering Lithuania to obtaining long-term residence or citizenship. Understanding the legal requirements, administrative procedures, and judicial practice is essential for individuals, families, employers, and professionals navigating the immigration system.",
    ltBody:
      "Imigracijos teisė veikia kiekvieną užsieniečio kelionės etapą, nuo atvykimo į Lietuvą iki ilgalaikio gyvenimo ar pilietybės įgijimo. Teisinių reikalavimų, administracinių procedūrų ir teismo praktikos supratimas yra būtinas asmenims, šeimoms, darbdaviams ir specialistams, naršantiems imigracijos sistemą.",
  },
  {
    heading: "Professional Focus",
    ltHeading: "Profesinis dėmesys",
    body:
      "My professional interest focuses on the practical application of immigration legislation, judicial review of administrative decisions, and the development of Lithuanian, European Union, and European human rights law in immigration matters. Through this website, I share recent court practice and legal insights to help readers better understand how immigration law is interpreted and applied in practice.",
    ltBody:
      "Mano profesinis susidomėjimas koncentruojasi į imigracijos teisės aktų praktinį taikymą, administracinių sprendimų teisinę priežiūrą ir Lietuvos, Europos Sąjungos bei Europos žmogaus teisių teisės plėtrą imigracijos klausimais. Per šią svetainę dalijuosi naujausia teismo praktika ir teisinėmis įžvalgomis, kad padėčiau skaitytojams geriau suprasti, kaip imigracijos teisė aiškinama ir taikoma praktikoje.",
  },
];

function ImmigrationLawPage() {
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
                  <Globe size={18} style={{ color: COLOR }} />
                </div>
                <span className="text-xs font-medium tracking-[0.3em] uppercase" style={{ color: COLOR }}>
                  {locale === "lt" ? "Praktikos sritis" : "Practice Area"}
                </span>
              </div>
              <h1
                className="font-serif font-light text-white leading-[1.05] mb-6"
                style={{ fontSize: "clamp(2.4rem, 5vw, 4rem)" }}
              >
                {locale === "lt" ? "Imigracijos teisė" : "Immigration Law"}
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

export const Route = createFileRoute("/practice/immigration-law")({
  head: () => ({
    meta: [
      { title: "Immigration Law — Ieva Bakare" },
      {
        name: "description",
        content:
          "Immigration law in Lithuania: D-visas, residence permits, EU Blue Cards, family reunification, and citizenship — explained in plain terms.",
      },
      { property: "og:title", content: "Immigration Law — Ieva Bakare" },
      {
        property: "og:description",
        content:
          "How non-citizens enter, reside, work, and settle in Lithuania — the pathways, eligibility, and deadlines that matter.",
      },
    ],
  }),
  component: ImmigrationLawPage,
});
