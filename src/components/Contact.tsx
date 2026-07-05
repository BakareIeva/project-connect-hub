import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MapPin, Phone, Mail, Instagram } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

export default function Contact() {
  const { t } = useLanguage();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const info = [
    { icon: MapPin, label: t.contact.location, value: "Vilnius, Lithuania" },
    { icon: Phone, label: "Phone", value: "+370 _ ___ ____" },
    { icon: Mail, label: t.contact.email, value: "bakareieva@gmail.com" },
    { icon: Instagram, label: t.contact.instagram, value: "@Lawyer.ievabakare", href: "https://instagram.com/Lawyer.ievabakare" },
  ];

  return (
    <section id="contact" ref={ref} className="py-28 lg:py-40" style={{ background: "#F2F1EF" }}>
      <div className="max-w-3xl mx-auto px-6 lg:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-8 h-px" style={{ background: "#C9A84C" }} />
            <span className="text-xs font-medium tracking-[0.3em] uppercase" style={{ color: "#C9A84C" }}>
              {t.contact.eyebrow}
            </span>
            <div className="w-8 h-px" style={{ background: "#C9A84C" }} />
          </div>
          <h2 className="font-serif font-light mb-4" style={{ fontSize: "clamp(2rem, 4.5vw, 3rem)", color: "#111111" }}>
            {t.contact.heading1}
            <br />
            {t.contact.heading2}
          </h2>
          <p className="text-base leading-relaxed font-light mb-10 max-w-xl mx-auto" style={{ color: "#6B6B6B" }}>
            {t.contact.subtext}
          </p>

          <div className="space-y-5 inline-block text-left">
            {info.map(({ icon: Icon, label, value, href }) => (
              <div key={label} className="flex items-center gap-4">
                <div className="w-10 h-10 flex items-center justify-center shrink-0" style={{ background: "rgba(201,168,76,0.15)" }}>
                  <Icon size={16} style={{ color: "#C9A84C" }} strokeWidth={1.5} />
                </div>
                <div>
                  <div className="text-xs tracking-widest uppercase mb-0.5" style={{ color: "#6B6B6B" }}>{label}</div>
                  {href ? (
                    <a href={href} target="_blank" rel="noopener noreferrer" className="text-sm font-light hover:underline" style={{ color: "#111111" }}>
                      {value}
                    </a>
                  ) : (
                    <div className="text-sm font-light" style={{ color: "#111111" }}>{value}</div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
