import { createFileRoute } from "@tanstack/react-router";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
// next/link removed
import { ArrowLeft, Mail, MapPin, Phone, CheckCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/lib/LanguageContext";

const caseTypes = [
  "Temporary Residence Permit",
  "Permanent Residence Permit",
  "Family Reunification",
  "Work Permit / EU Blue Card",
  "Visa Refusal / Appeal",
  "Citizenship & Naturalisation",
  "Digital Nomad / Remote Work",
  "Other / Not Sure",
];

function BookPage() {
  const { locale } = useLanguage();
  const headerRef = useRef(null);
  const formRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true });
  const formInView = useInView(formRef, { once: true, margin: "-60px" });

  const [form, setForm] = useState({
    name: "",
    email: "",
    nationality: "",
    caseType: "",
    currentStatus: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.caseType) {
      setError(locale === "lt" ? "Užpildykite privalomus laukus." : "Please fill in all required fields.");
      return;
    }
    setError("");
    setSubmitted(true);
  };

  const inputClass =
    "w-full px-4 py-3.5 text-sm font-light border outline-none transition-all duration-200 bg-white text-[#111111] placeholder-[#6B6B6B]/40 focus:border-[#C9A84C]";
  const labelClass = "block text-[10px] font-medium tracking-[0.2em] uppercase mb-2 text-[#6B6B6B]";

  return (
    <>
      <Navbar />
      <main>
        {/* Header */}
        <section className="pt-40 pb-20" style={{ background: "#111111" }}>
          <div ref={headerRef} className="max-w-7xl mx-auto px-6 lg:px-12">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={headerInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7 }}
            >
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-xs font-medium tracking-widest uppercase text-white/50 hover:text-white/80 transition-colors mb-10"
              >
                <ArrowLeft size={12} />
                {locale === "lt" ? "Grįžti" : "Back"}
              </a>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-px" style={{ background: "#C9A84C" }} />
                <span className="text-xs font-medium tracking-[0.3em] uppercase" style={{ color: "#C9A84C" }}>
                  {locale === "lt" ? "Susisiekite" : "Get in Touch"}
                </span>
              </div>
              <h1
                className="font-serif font-light text-white leading-[1.05] mb-6"
                style={{ fontSize: "clamp(2.4rem, 5vw, 3.8rem)" }}
              >
                {locale === "lt" ? "Susisiekite\nsu manimi" : "Make an\nInquiry"}
              </h1>
              <p className="text-white/55 font-light max-w-lg leading-relaxed">
                {locale === "lt"
                  ? "Turite klausimų apie imigraciją ar administracinę teisę Lietuvoje? Parašykite — atsakysiu per 48 val."
                  : "Have a question about immigration or administrative law in Lithuania? Send a message and I'll get back to you within 48 hours."}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Form + Sidebar */}
        <section className="py-20 lg:py-28" style={{ background: "#F2F1EF" }}>
          <div ref={formRef} className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-[1fr_360px] gap-16 items-start">

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={formInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7 }}
            >
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                  className="py-16 text-center"
                >
                  <CheckCircle size={48} className="mx-auto mb-6" style={{ color: "#7AAE82" }} />
                  <h2 className="font-serif font-light text-[#111111] text-3xl mb-4">
                    {locale === "lt" ? "Gavome jūsų užklausą" : "Inquiry Received"}
                  </h2>
                  <p className="text-[#6B6B6B] font-light max-w-md mx-auto mb-8">
                    {locale === "lt"
                      ? "Susisieksiu su jumis per 48 valandas, kad suderintume pokalbio laiką."
                      : "I'll reach out within 48 hours to schedule a time that works for you."}
                  </p>
                  <Link
                    href="/"
                    className="text-xs font-medium tracking-widest uppercase pb-0.5 transition-colors"
                    style={{ color: "#C9A84C", borderBottom: "1px solid #C9A84C" }}
                  >
                    {locale === "lt" ? "Grįžti į pagrindinį puslapį" : "Return Home"}
                  </a>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className={labelClass}>
                        {locale === "lt" ? "Vardas" : "Full Name"} <span style={{ color: "#C9A84C" }}>*</span>
                      </label>
                      <input
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder={locale === "lt" ? "Jūsų vardas" : "Your full name"}
                        className={inputClass}
                        style={{ borderColor: "#E4E4E2" }}
                      />
                    </div>
                    <div>
                      <label className={labelClass}>
                        {locale === "lt" ? "El. paštas" : "Email Address"} <span style={{ color: "#C9A84C" }}>*</span>
                      </label>
                      <input
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder={locale === "lt" ? "jusu@epastas.lt" : "you@email.com"}
                        className={inputClass}
                        style={{ borderColor: "#E4E4E2" }}
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className={labelClass}>{locale === "lt" ? "Pilietybė" : "Nationality"}</label>
                      <input
                        name="nationality"
                        value={form.nationality}
                        onChange={handleChange}
                        placeholder={locale === "lt" ? "Pvz. Indija, Ukraina..." : "E.g. India, Brazil..."}
                        className={inputClass}
                        style={{ borderColor: "#E4E4E2" }}
                      />
                    </div>
                    <div>
                      <label className={labelClass}>
                        {locale === "lt" ? "Bylos tipas" : "Case Type"} <span style={{ color: "#C9A84C" }}>*</span>
                      </label>
                      <select
                        name="caseType"
                        value={form.caseType}
                        onChange={handleChange}
                        className={inputClass}
                        style={{ borderColor: "#E4E4E2" }}
                      >
                        <option value="">{locale === "lt" ? "Pasirinkite..." : "Select..."}</option>
                        {caseTypes.map((ct) => (
                          <option key={ct} value={ct}>{ct}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className={labelClass}>
                      {locale === "lt" ? "Dabartinis statusas Lietuvoje" : "Current Status in Lithuania"}
                    </label>
                    <input
                      name="currentStatus"
                      value={form.currentStatus}
                      onChange={handleChange}
                      placeholder={
                        locale === "lt"
                          ? "Pvz. D viza, turisto viza, nesu Lietuvoje..."
                          : "E.g. D-visa, tourist, currently abroad..."
                      }
                      className={inputClass}
                      style={{ borderColor: "#E4E4E2" }}
                    />
                  </div>

                  <div>
                    <label className={labelClass}>{locale === "lt" ? "Žinutė" : "Tell me about your situation"}</label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={5}
                      placeholder={
                        locale === "lt"
                          ? "Aprašykite savo situaciją, klausimus ar rūpesčius..."
                          : "Describe your situation, what you're trying to achieve, or any specific questions..."
                      }
                      className={inputClass + " resize-none"}
                      style={{ borderColor: "#E4E4E2" }}
                    />
                  </div>

                  {error && (
                    <p className="text-sm" style={{ color: "#C47A6A" }}>{error}</p>
                  )}

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full sm:w-auto px-10 py-4 text-xs font-medium tracking-widest uppercase transition-colors duration-300"
                    style={{ background: "#111111", color: "white" }}
                    onMouseEnter={(e) => ((e.currentTarget as HTMLButtonElement).style.background = "#111111")}
                    onMouseLeave={(e) => ((e.currentTarget as HTMLButtonElement).style.background = "#111111")}
                  >
                    {locale === "lt" ? "Siųsti užklausą" : "Send Inquiry"}
                  </motion.button>

                  <p className="text-[11px] text-[#6B6B6B]/50 font-light">
                    {locale === "lt"
                      ? "Susisieksiu per 48 val. Pirma konsultacija — nemokama."
                      : "I'll respond within 48 hours. The first 30-minute consultation is complimentary."}
                  </p>
                </form>
              )}
            </motion.div>

            {/* Sidebar */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={formInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="space-y-6"
            >
              {/* Contact card */}
              <div className="p-8" style={{ background: "#111111" }}>
                <h3 className="font-serif font-light text-white text-xl mb-6">
                  {locale === "lt" ? "Kontaktai" : "Contact"}
                </h3>
                <div className="space-y-5">
                  <div className="flex items-start gap-3">
                    <Mail size={14} style={{ color: "#C9A84C" }} className="mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="text-[10px] tracking-widest uppercase text-white/40 mb-0.5">
                        {locale === "lt" ? "El. paštas" : "Email"}
                      </div>
                      <a
                        href="mailto:ieva@bakare.law"
                        className="text-white/70 text-sm font-light hover:text-white transition-colors"
                      >
                        ieva@bakare.law
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone size={14} style={{ color: "#C9A84C" }} className="mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="text-[10px] tracking-widest uppercase text-white/40 mb-0.5">
                        {locale === "lt" ? "Telefonas" : "Phone"}
                      </div>
                      <a
                        href="tel:+37061234567"
                        className="text-white/70 text-sm font-light hover:text-white transition-colors"
                      >
                        +370 6 123 4567
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin size={14} style={{ color: "#C9A84C" }} className="mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="text-[10px] tracking-widest uppercase text-white/40 mb-0.5">
                        {locale === "lt" ? "Adresas" : "Location"}
                      </div>
                      <span className="text-white/70 text-sm font-light">
                        Vilnius, Lithuania
                        <br />
                        <span className="text-white/40 text-xs">Meetings by appointment</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* What to expect */}
              <div className="p-8 border" style={{ borderColor: "#E4E4E2", background: "white" }}>
                <h3 className="font-serif font-light text-[#111111] text-lg mb-5">
                  {locale === "lt" ? "Ko tikėtis" : "What to Expect"}
                </h3>
                <ul className="space-y-4">
                  {[
                    {
                      en: "Response within 48 hours",
                      lt: "Atsakas per 48 val.",
                    },
                    {
                      en: "Free 30-minute first consultation",
                      lt: "Nemokama 30 min. pirmoji konsultacija",
                    },
                    {
                      en: "Honest case assessment",
                      lt: "Objektyvus bylos įvertinimas",
                    },
                    {
                      en: "Clear next steps and timeline",
                      lt: "Aiškūs tolesni žingsniai ir laiko grafikas",
                    },
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ background: "#C9A84C" }} />
                      <span className="text-sm text-[#6B6B6B] font-light">{locale === "lt" ? item.lt : item.en}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Languages */}
              <div className="p-6 border" style={{ borderColor: "#E4E4E2", background: "white" }}>
                <div className="text-[10px] tracking-[0.25em] uppercase mb-3" style={{ color: "#C9A84C" }}>
                  {locale === "lt" ? "Konsultacijų kalbos" : "Consultation Languages"}
                </div>
                <div className="flex gap-3">
                  {["English", "Lietuvių"].map((lang) => (
                    <span
                      key={lang}
                      className="text-xs font-medium tracking-wide px-3 py-1.5"
                      style={{ background: "#F2F1EF", color: "#111111" }}
                    >
                      {lang}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export const Route = createFileRoute("/book")({ component: BookPage });
