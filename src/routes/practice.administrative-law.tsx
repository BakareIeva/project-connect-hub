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
    heading: "What Administrative Law Is",
    ltHeading: "Kas yra administracinė teisė",
    body:
      "Administrative law regulates the relationship between individuals and public authorities. It establishes the legal principles governing how administrative decisions are made, how public powers are exercised, and how those decisions may be reviewed by the courts. In Lithuania, it plays a central role in ensuring that public authorities act lawfully, fairly, and within the limits of their legal powers.",
    ltBody:
      "Administracinė teisė reguliuoja asmenų ir valstybės institucijų santykius. Ji nustato teisinius principus, reglamentuojančius administracinių sprendimų priėmimą, valstybės galių vykdymą ir šių sprendimų teisinę peržiūrą teismuose. Lietuvoje ji atlieka svarbų vaidmenį užtikrinant, kad valstybės institucijos veiktų teisėtai, sąžiningai ir savo įstatymų suteiktų galių ribose.",
  },
  {
    heading: "In Plain Terms",
    ltHeading: "Paprasta kalba",
    body:
      "Whenever a public authority makes a decision that affects an individual, whether involving immigration, taxation, social benefits, licensing, or other administrative matters, administrative law provides the legal framework for assessing whether that decision was made in accordance with the law, proper procedure, and the principles of good public administration.",
    ltBody:
      "Kai viešoji valdžia priima sprendimą, turintį įtakos asmeniui — nesvarbu, ar tai imigracija, apmokestinimas, socialinės išmokos, licencijavimas ar kiti administraciniai klausimai, — administracinė teisė suteikia teisinį pagrindą vertinti, ar tas sprendimas buvo priimtas laikantis įstatymo, tinkamos tvarkos ir gerųjų viešojo administravimo principų.",
  },
  {
    heading: "Why It Matters",
    ltHeading: "Kodėl tai svarbu",
    body:
      "Administrative law is fundamental to judicial review in Lithuania. It ensures that public authorities exercise their powers lawfully, respect procedural safeguards, and properly justify their decisions. Through administrative court proceedings, individuals may challenge decisions that are alleged to be unlawful, disproportionate, or procedurally defective. Understanding these legal principles is essential to appreciating how administrative courts review the actions of public authorities in practice.",
    ltBody:
      "Administracinė teisė yra esminė teisinei peržiūrai Lietuvoje. Ji užtikrina, kad viešoji valdžia naudotų savo galias teisėtai, gerbtų procedūrinias garantijas ir tinkamai pagrįstų savo sprendimus. Per administracinio teismo procesą asmenys gali ginčyti sprendimus, kurie tariamai yra neteisėti, neproporcingi ar procedūriškai trūkūstami. Šių teisinių principų supratimas yra būtinas norint įvertinti, kaip administraciniai teismai praktikoje peržiūri valstybės institucijų veiksmus.",
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
          "Administrative law regulates the relationship between individuals and public authorities. It establishes the legal principles governing how administrative decisions are made, how public powers are exercised, and how those decisions may be reviewed by the courts. In Lithuania, it plays a central role in ensuring that public authorities act lawfully, fairly, and within the limits of their legal powers.",
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
