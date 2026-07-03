
import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { MapPin, Phone, Clock, Send } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

export default function Contact() {
  const { t } = useLanguage();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", nationality: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => { e.preventDefault(); setSent(true); };

  const info = [
    { icon: MapPin, label: t.contact.location, value: "Vilnius, Lithuania" },
    { icon: Phone, label: "Phone", value: "+370 _ ___ ____" },
    { icon: Clock, label: t.contact.hours, value: t.contact.hoursValue },
  ];

  return (
    <section id="contact" ref={ref} className="py-28 lg:py-40" style={{ background: "#F2F1EF" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-start">

          {/* Left — info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 mb-12 lg:mb-0"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-px" style={{ background: "#C9A84C" }} />
              <span className="text-xs font-medium tracking-[0.3em] uppercase" style={{ color: "#C9A84C" }}>
                {t.contact.eyebrow}
              </span>
            </div>
            <h2 className="font-serif font-light mb-4" style={{ fontSize: "clamp(2rem, 4.5vw, 3rem)", color: "#111111" }}>
              {t.contact.heading1}
              <br />
              {t.contact.heading2}
            </h2>
            <p className="text-base leading-relaxed font-light mb-10" style={{ color: "#6B6B6B" }}>
              {t.contact.subtext}
            </p>

            <div className="space-y-5">
              {info.map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-center gap-4">
                  <div className="w-10 h-10 flex items-center justify-center shrink-0" style={{ background: "rgba(201,168,76,0.15)" }}>
                    <Icon size={16} style={{ color: "#C9A84C" }} strokeWidth={1.5} />
                  </div>
                  <div>
                    <div className="text-xs tracking-widest uppercase mb-0.5" style={{ color: "#6B6B6B" }}>{label}</div>
                    <div className="text-sm font-light" style={{ color: "#111111" }}>{value}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-7"
          >
            {sent ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center text-center py-16 border"
                style={{ borderColor: "rgba(201,168,76,0.3)" }}
              >
                <div className="w-16 h-16 flex items-center justify-center mb-6" style={{ background: "#C9A84C" }}>
                  <Send size={24} style={{ color: "#111111" }} />
                </div>
                <h3 className="font-serif font-light text-2xl mb-3" style={{ color: "#111111" }}>{t.contact.successTitle}</h3>
                <p className="text-sm font-light max-w-xs" style={{ color: "#6B6B6B" }}>{t.contact.successText}</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {[
                  { name: "name", label: t.contact.fields.name, type: "text", placeholder: t.contact.fields.namePlaceholder },
                  { name: "email", label: t.contact.fields.email, type: "email", placeholder: t.contact.fields.emailPlaceholder },
                  { name: "nationality", label: t.contact.fields.nationality, type: "text", placeholder: t.contact.fields.nationalityPlaceholder },
                ].map((field) => (
                  <div key={field.name}>
                    <label htmlFor={field.name} className="block text-xs tracking-widest uppercase mb-2" style={{ color: "#6B6B6B" }}>
                      {field.label}
                    </label>
                    <input
                      id={field.name}
                      name={field.name}
                      type={field.type}
                      required
                      placeholder={field.placeholder}
                      value={form[field.name as keyof typeof form]}
                      onChange={handleChange}
                      className="w-full px-4 py-3 text-sm font-light outline-none focus:border-[#C9A84C] transition-colors duration-300"
                      style={{ background: "white", borderColor: "#E4E4E2", border: "1px solid #E4E4E2", color: "#111111" }}
                    />
                  </div>
                ))}
                <div>
                  <label htmlFor="message" className="block text-xs tracking-widest uppercase mb-2" style={{ color: "#6B6B6B" }}>
                    {t.contact.fields.message}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    placeholder={t.contact.fields.messagePlaceholder}
                    value={form.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 text-sm font-light outline-none focus:border-[#C9A84C] transition-colors duration-300 resize-none"
                    style={{ background: "white", border: "1px solid #E4E4E2", color: "#111111" }}
                  />
                </div>
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-4 text-sm font-medium tracking-widest uppercase flex items-center justify-center gap-3 transition-colors duration-300"
                  style={{ background: "#C9A84C", color: "#111111" }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLButtonElement).style.background = "#A8872E")}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLButtonElement).style.background = "#C9A84C")}
                >
                  {t.contact.send}
                  <Send size={16} />
                </motion.button>
                <p className="text-xs font-light text-center pt-2" style={{ color: "#6B6B6B" }}>{t.contact.privacy}</p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
