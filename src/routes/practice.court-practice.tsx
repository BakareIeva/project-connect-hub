import { createFileRoute, Link } from "@tanstack/react-router";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowLeft, BookOpen } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/lib/LanguageContext";

const COLOR = "#5B8A72";

const sections = [
  {
    heading: "What court practice actually involves",
    ltHeading: "Ką iš tiesų apima teismo praktika",
    body:
      "Court practice is the disciplined craft of turning facts and law into persuasive written and oral argument. It spans pre-trial strategy, procedural motion work, evidence preparation, hearing presentation, and appellate brief writing. Every case that reaches a Lithuanian administrative court has already passed through an institution; the court phase is where the record is tested against statute, precedent, and proportionality.",
    ltBody:
      "Teismo praktika — tai įgūdžių visuma, kai faktai ir teisė paverčiami įtikinančiais rašytiniais ir žodiniais argumentais. Ji apima priešteisminę strategiją, procesinius prašymus, įrodymų rengimą, posėdžių vedimą ir apeliacinių skundų rengimą. Kiekviena byla, pasiekusi Lietuvos administracinį teismą, jau buvo nagrinėta institucijoje; teismo etape įrašas tikrinamas pagal įstatymą, precedentą ir proporcingumą.",
  },
  {
    heading: "In plain terms",
    ltHeading: "Paprasta kalba",
    body:
      "If a public institution refuses your residence permit or issues a deportation order, court practice is what happens after the administrative appeal. It means building a complete file: selecting evidence, framing legal arguments around specific articles, anticipating the court’s questions, and presenting the case clearly at hearing. A well-prepared case often settles before judgment; a poorly prepared one rarely survives appeal.",
    ltBody:
      "Jei valstybės institucija atsisako suteikti leidimą gyventi ar priima išsiuntimo sprendimą, teismo praktika prasideda po administracinio skundo. Tai reiškia bylos sudarymą: įrodymų atranką, teisinių argumentų formuluotę pagal konkrečius straipsnius, teismo klausimų numatymą ir aiškų bylos pateikimą posėdyje. Gerai parengta byla dažnai baigiasi taikos sutartimi; prastai parengta retai išgyvena apeliaciją.",
  },
  {
    heading: "The core litigation work I handle",
    ltHeading: "Pagrindinė teisminė veikla, kuria užsiimu",
    body:
      "Administrative court representation at first instance and on appeal, procedural defence against state-action deadlines, evidence strategy and witness preparation, written submissions and appellate briefs, and settlement negotiation where proportionality supports a mutually acceptable outcome. Each case begins with a candid assessment of legal merit and evidentiary strength before any court filing.",
    ltBody:
      "Atstovavimas administraciniame teisme pirmojoje ir apeliacinėje instancijoje, procesinė gynyba nuo valstybės veiksmų terminų, įrodymų strategija ir liudininkų rengimas, rašytiniai pateikimai ir apeliaciniai skundai, taipikos derybos, kai proporcingumas leidžia abiem pusėms priimtiną rezultatą. Kiekviena byla prasideda nuo sąžiningo teisinio pagrindo ir įrodymų stiprumo įvertinimo prieš pateikiant teismui.",
  },
];

function CourtPracticePage() {
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
                  <BookOpen size={18} style={{ color: COLOR }} />
                </div>
                <span className="text-xs font-medium tracking-[0.3em] uppercase" style={{ color: COLOR }}>
                  {locale === "lt" ? "Praktikos sritis" : "Practice Area"}
                </span>
              </div>
              <h1
                className="font-serif font-light text-white leading-[1.05] mb-6"
                style={{ fontSize: "clamp(2.4rem, 5vw, 4rem)" }}
              >
                {locale === "lt" ? "Teismo praktika ir teisiniai įžvalgos" : "Court Practice & Legal Insights"}
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

export const Route = createFileRoute("/practice/court-practice")({
  head: () => ({
    meta: [
      { title: "Court Practice & Legal Insights — Ieva Bakare" },
      {
        name: "description",
        content:
          "Court practice in Lithuanian administrative courts: litigation strategy, evidence preparation, appellate briefs, and settlement negotiation in immigration and administrative disputes.",
      },
      { property: "og:title", content: "Court Practice & Legal Insights — Ieva Bakare" },
      {
        property: "og:description",
        content:
          "Administrative court representation and appellate work grounded in a decade of experience inside the Highest Administrative Court of Lithuania.",
      },
    ],
  }),
  component: CourtPracticePage,
});
