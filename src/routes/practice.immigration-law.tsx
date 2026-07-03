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
    heading: "What immigration law actually covers",
    ltHeading: "Ką iš tiesų apima imigracijos teisė",
    body:
      "Immigration law governs how non-citizens enter, reside, work, and settle in Lithuania and the European Union. It sets the conditions for national D-visas, temporary and permanent residence permits, EU Blue Cards, family reunification, and the path to citizenship. Each pathway carries its own eligibility rules, documentary requirements, and statutory deadlines.",
    ltBody:
      "Imigracijos teisė reguliuoja ne ES piliečių atvykimą, gyvenimą, darbą ir apsigyvenimą Lietuvoje bei ES. Ji nustato nacionalinių D vizų, laikinųjų ir nuolatinių leidimų gyventi, ES mėlynosios kortelės, šeimos susijungimo ir pilietybės sąlygas. Kiekvienas kelias turi savo tinkamumo taisykles, dokumentų reikalavimus ir įstatyminius terminus.",
  },
  {
    heading: "In plain terms",
    ltHeading: "Paprasta kalba",
    body:
      "If you — or a family member — are moving to Lithuania from outside the EU, immigration law decides whether you can come, on what basis, for how long, and what you are allowed to do here: work, study, run a business, join family, or eventually become a citizen. Getting the right pathway wrong at the start almost always costs time and money to fix later.",
    ltBody:
      "Jei jūs ar šeimos narys atvykstate į Lietuvą iš ne ES šalies, imigracijos teisė nustato, ar galite atvykti, kokiu pagrindu, kiek laiko ir ką čia galite daryti: dirbti, mokytis, verstis verslu, susijungti su šeima ar tapti piliečiu. Klaidingai pasirinktas kelias beveik visada brangiai kainuoja vėliau.",
  },
  {
    heading: "The core case types I handle",
    ltHeading: "Pagrindinės bylos, kurias priimu",
    body:
      "Residence and settlement (D-visa through to permanent status), refusals and appeals, family reunification under EU law, work and business migration including EU Blue Cards, and citizenship and naturalisation. Each engagement starts with a clear eligibility assessment before any paperwork is filed.",
    ltBody:
      "Gyvenimas ir apsigyvenimas (nuo D vizos iki nuolatinio statuso), atsisakymai ir apeliacijos, šeimos susijungimas pagal ES teisę, darbo ir verslo migracija, įskaitant ES mėlynąją kortelę, bei pilietybė ir natūralizacija. Kiekvienas darbas prasideda aiškiu tinkamumo įvertinimu prieš teikiant dokumentus.",
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
