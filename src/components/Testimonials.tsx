
import { useRef, useState, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Quote } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

const testimonials = [
  { quote: "Ieva turned what felt like an impossible situation into a successful permanent residency. She was reachable, honest, and genuinely cared about our outcome.", name: "Ahmed R.", origin: "Egypt → Lithuania", year: "2024" },
  { quote: "Professional, fast, and incredibly knowledgeable. My work visa was approved on the first submission. Ieva kept me informed every step of the way.", name: "Priya S.", origin: "India → Vilnius", year: "2023" },
  { quote: "After two refusals with another lawyer, Ieva took my case and won the appeal. I am now a Lithuanian resident.", name: "Oleg M.", origin: "Ukraine → EU", year: "2024" },
  { quote: "Our family reunification was handled flawlessly. We are finally together in Lithuania thanks to Ieva's dedication and expertise.", name: "Maria & Carlos T.", origin: "Brazil → Lithuania", year: "2025" },
];

export default function Testimonials() {
  const { t } = useLanguage();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setActive((prev) => (prev + 1) % testimonials.length), 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="testimonials" ref={ref} className="py-28 lg:py-40 overflow-hidden" style={{ background: "#111111" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="flex items-center gap-3 mb-16"
        >
          <div className="w-8 h-px" style={{ background: "#C9A84C" }} />
          <span className="text-xs font-medium tracking-[0.3em] uppercase" style={{ color: "#C9A84C" }}>
            {t.testimonials.eyebrow}
          </span>
        </motion.div>

        <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center">
          <div className="lg:col-span-7 mb-12 lg:mb-0">
            <motion.div initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 0.6, delay: 0.2 }}>
              <Quote size={48} strokeWidth={1} style={{ color: "#C9A84C", opacity: 0.4, marginBottom: "2rem" }} />
            </motion.div>
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <p className="font-serif font-light text-white leading-relaxed mb-8" style={{ fontSize: "clamp(1.3rem, 2.5vw, 1.75rem)" }}>
                  &ldquo;{testimonials[active].quote}&rdquo;
                </p>
                <div>
                  <div className="font-medium text-white text-sm">{testimonials[active].name}</div>
                  <div className="text-xs tracking-widest uppercase mt-1" style={{ color: "#C9A84C" }}>
                    {testimonials[active].origin} · {testimonials[active].year}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="lg:col-span-5 space-y-2">
            {testimonials.map((t, i) => (
              <motion.button
                key={i}
                initial={{ opacity: 0, x: 30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.1 }}
                onClick={() => setActive(i)}
                className="w-full text-left p-5 transition-all duration-300 border-l-2"
                style={{
                  borderLeftColor: i === active ? "#C9A84C" : "transparent",
                  background: i === active ? "rgba(201,168,76,0.08)" : "rgba(255,255,255,0.03)",
                }}
              >
                <div className="text-sm font-medium mb-1" style={{ color: i === active ? "white" : "rgba(255,255,255,0.5)" }}>
                  {t.name}
                </div>
                <div className="text-xs tracking-widest uppercase" style={{ color: i === active ? "#C9A84C" : "rgba(255,255,255,0.3)" }}>
                  {t.origin}
                </div>
              </motion.button>
            ))}
          </div>
        </div>

        <div className="flex gap-2 mt-12">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className="transition-all duration-300 rounded-full"
              style={{ width: i === active ? "2rem" : "0.5rem", height: "0.5rem", background: i === active ? "#C9A84C" : "rgba(255,255,255,0.2)" }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
