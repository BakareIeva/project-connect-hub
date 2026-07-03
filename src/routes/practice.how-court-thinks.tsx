import { createFileRoute, Link } from "@tanstack/react-router";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowLeft, Gavel } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/lib/LanguageContext";

const COLOR = "#C9A84C";

const principles = [
  {
    heading: "The burden of proof rests with the applicant",
    ltHeading: "Įrodinėjimo pareiga tenka pareiškėjui",
    body:
      "Lithuanian administrative courts do not investigate on your behalf. A missing, ambiguous, or poorly translated document is your problem, not the court's. The strongest appeals arrive as a complete, well-organised file.",
    ltBody:
      "Lietuvos administraciniai teismai netiria už jus. Trūkstamas, dviprasmiškas ar prastai išverstas dokumentas — jūsų, ne teismo problema. Stipriausi skundai pateikiami kaip pilna, tvarkinga byla.",
  },
  {
    heading: "Procedural flaws open the widest door",
    ltHeading: "Procedūriniai pažeidimai atveria plačiausias duris",
    body:
      "Courts are most receptive to arguments that the Migration Department made a procedural error — failed to notify, used the wrong timeline, applied the wrong regulation. \"They used the wrong income threshold\" is an easier win than \"my income is enough.\"",
    ltBody:
      "Teismai palankiausiai vertina argumentus, kad Migracijos departamentas padarė procedūrinę klaidą — nepranešė, taikė netinkamą terminą ar netinkamą teisės aktą. „Jie taikė netinkamą pajamų ribą“ laimima lengviau nei „mano pajamos pakankamos“.",
  },
  {
    heading: "Courts read the statute, not the spirit",
    ltHeading: "Teismai remiasi norma, ne dvasia",
    body:
      "Lithuanian courts are statutory. Arguments must be tied to a specific article, paragraph, and sub-paragraph. \"It was unfair\" is not a legal argument. \"Article 40(3) of the Law on the Legal Status of Aliens was incorrectly applied\" is.",
    ltBody:
      "Lietuvos teismai remiasi įstatymu. Argumentai turi būti susieti su konkrečia straipsnio, dalies ir punkto nuoroda. „Buvo neteisinga“ nėra teisinis argumentas. „Užsieniečių teisinės padėties įstatymo 40 str. 3 d. taikyta netinkamai“ — yra.",
  },
  {
    heading: "Proportionality carries weight in family cases",
    ltHeading: "Proporcingumas svarbus šeimos bylose",
    body:
      "When deportation or family separation is at stake, EU law and the ECHR require a proportionality assessment. A technical deficiency should not outweigh the right to family life. This is often the strongest argument for long-term residents and families with minor children.",
    ltBody:
      "Kai svarstoma išsiuntimas ar šeimos išskyrimas, pagal ES teisę ir EŽTK privalomas proporcingumo vertinimas. Techninis trūkumas negali nusverti teisės į šeimos gyvenimą. Tai dažnai stipriausias argumentas ilgalaikiams gyventojams ir šeimoms su nepilnamečiais vaikais.",
  },
  {
    heading: "Speed is a legal requirement",
    ltHeading: "Greitis yra teisinis reikalavimas",
    body:
      "Administrative appeals must be filed within 14 calendar days of the refusal. Miss it and the administrative route closes; the administrative court then applies a 30-day window. Acting immediately is not optional — it is the entire game.",
    ltBody:
      "Administracinis skundas turi būti paduotas per 14 kalendorinių dienų nuo atsisakymo. Praleidus, administracinis kelias uždaromas; administracinis teismas taiko 30 dienų terminą. Nedelsiant veikti — ne pasirinkimas, o esmė.",
  },
];

function HowCourtThinksPage() {
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
                  <Gavel size={18} style={{ color: COLOR }} />
                </div>
                <span className="text-xs font-medium tracking-[0.3em] uppercase" style={{ color: COLOR }}>
                  {locale === "lt" ? "Perspektyva" : "Perspective"}
                </span>
              </div>
              <h1
                className="font-serif font-light text-white leading-[1.05] mb-6"
                style={{ fontSize: "clamp(2.4rem, 5vw, 4rem)" }}
              >
                {locale === "lt" ? "Kaip mąsto teismas" : "Inside the Courtroom"}
              </h1>
              <p className="text-white/55 font-light leading-relaxed max-w-xl">
                {locale === "lt"
                  ? "Ką dešimtmetis Lietuvos vyriausiajame administraciniame teisme išmokė apie tai, kaip teisėjai iš tiesų sprendžia imigracijos ir administracines bylas."
                  : "What a decade inside the Highest Administrative Court of Lithuania has taught me about how judges actually decide immigration and administrative disputes."}
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-20 lg:py-28" style={{ background: "#F2F1EF" }}>
          <div className="max-w-3xl mx-auto px-6 lg:px-12 space-y-10">
            {principles.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6 }}
                className="flex gap-6"
              >
                <div
                  className="text-sm font-serif font-medium flex-shrink-0 w-8 h-8 flex items-center justify-center"
                  style={{ color: COLOR, border: `1px solid ${COLOR}` }}
                >
                  {i + 1}
                </div>
                <div>
                  <h2 className="font-serif font-medium text-[#111111] text-xl mb-3 leading-snug">
                    {locale === "lt" ? p.ltHeading : p.heading}
                  </h2>
                  <p className="text-[#3E3E3E] font-light leading-relaxed">
                    {locale === "lt" ? p.ltBody : p.body}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export const Route = createFileRoute("/practice/how-court-thinks")({
  head: () => ({
    meta: [
      { title: "Inside the Courtroom — Ieva Bakare" },
      {
        name: "description",
        content:
          "What actually persuades Lithuanian administrative judges — procedural leverage, statutory reading, proportionality, and the deadlines that decide cases.",
      },
      { property: "og:title", content: "Inside the Courtroom — Ieva Bakare" },
      {
        property: "og:description",
        content:
          "Inside the mind of a Lithuanian administrative court: how judges weigh immigration and administrative disputes.",
      },
    ],
  }),
  component: HowCourtThinksPage,
});
