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
    heading: "1. The Burden of Proof Matters",
    ltHeading: "Įrodinėjimo pareiga tenka pareiškėjui",
    body:
      "In administrative proceedings, the burden of establishing the relevant facts generally rests with the applicant. Courts assess cases based on the evidence presented, making clear, complete, and properly documented submissions an important part of administrative and judicial proceedings.",
    ltBody:
      "Lietuvos administraciniai teismai netiria už jus. Trūkstamas, dviprasmiškas ar prastai išverstas dokumentas — jūsų, ne teismo problema. Stipriausi skundai pateikiami kaip pilna, tvarkinga byla.",
  },
  {
    heading: "2. Procedural Fairness Is Fundamental",
    ltHeading: "Procedūriniai pažeidimai atveria plačiausias duris",
    body:
      "Administrative courts carefully examine whether public authorities have complied with procedural requirements established by law. Questions relating to procedural fairness, proper notification, applicable legal provisions, and compliance with statutory procedures frequently form an important part of judicial review.",
    ltBody:
      "Teismai palankiausiai vertina argumentus, kad Migracijos departamentas padarė procedūrinę klaidą — nepranešė, taikė netinkamą terminą ar netinkamą teisės aktą. „Jie taikė netinkamą pajamų ribą“ laimima lengviau nei „mano pajamos pakankamos“.",
  },
  {
    heading: "3. Judicial Review Begins with the Law",
    ltHeading: "Teismai remiasi norma, ne dvasia",
    body:
      "Administrative courts determine disputes by applying legislation to the facts of each case. Judicial reasoning is grounded in statutory provisions, legal principles, and established case law, ensuring that administrative decisions are assessed within the framework provided by law.",
    ltBody:
      "Lietuvos teismai remiasi įstatymu. Argumentai turi būti susieti su konkrečia straipsnio, dalies ir punkto nuoroda. „Buvo neteisinga“ nėra teisinis argumentas. „Užsieniečių teisinės padėties įstatymo 40 str. 3 d. taikyta netinkamai“ — yra.",
  },
  {
    heading: "4. Proportionality Plays an Important Role",
    ltHeading: "Proporcingumas svarbus šeimos bylose",
    body:
      "In matters involving immigration, family life, or other fundamental rights, courts frequently assess whether administrative decisions strike a fair balance between the legitimate interests of the State and the rights of the individual. The principle of proportionality is an important feature of both Lithuanian administrative law and European human rights jurisprudence.",
    ltBody:
      "Kai svarstoma išsiuntimas ar šeimos išskyrimas, pagal ES teisę ir EŽTK privalomas proporcingumo vertinimas. Techninis trūkumas negali nusverti teisės į šeimos gyvenimą. Tai dažnai stipriausias argumentas ilgalaikiems gyventojams ir šeimoms su nepilnamečiais vaikais.",
  },
  {
    heading: "5. Procedural Time Limits Matter",
    ltHeading: "Greitis yra teisinis reikalavimas",
    body:
      "Administrative law establishes specific procedural deadlines for challenging decisions. Observing these statutory time limits is an important part of ensuring access to judicial review and the effective exercise of legal rights.",
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
                  : "Drawing on professional experience at the Supreme Administrative Court of Lithuania to explore the legal principles, procedural safeguards, and judicial reasoning that shape immigration and administrative law."}
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
          "A closer look at how Lithuanian administrative courts interpret the law, assess evidence, and apply the legal principles behind judicial decisions.",
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
