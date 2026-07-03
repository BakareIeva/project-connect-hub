
import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { useLanguage } from "@/lib/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();

  const scroll = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col overflow-hidden"
      style={{ background: "#111111" }}
    >
      {/* Full-bleed photo — entire section */}
      <div className="absolute inset-0">
        <img
          src="/photos/ieva-2.jpeg"
          alt="Ieva Bakare"
          className="absolute inset-0 w-full h-full object-cover object-center"
          style={{ filter: "brightness(0.42)" }}
        />
        {/* Primary overlay — dark at bottom where text lives */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(17,17,17,0.97) 0%, rgba(17,17,17,0.65) 35%, rgba(17,17,17,0.25) 65%, rgba(17,17,17,0.1) 100%)",
          }}
        />
        {/* Left-side reinforcement for text legibility */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, rgba(17,17,17,0.55) 0%, rgba(17,17,17,0.15) 55%, transparent 100%)",
          }}
        />
      </div>

      {/* Flex spacer — pushes content to bottom */}
      <div className="flex-1 min-h-[120px]" />

      {/* Content — bottom of section */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 pb-16 lg:pb-24">

        {/* Intro chip */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-3 mb-8 px-4 py-2"
          style={{
            border: "1px solid rgba(201,168,76,0.3)",
            background: "rgba(201,168,76,0.07)",
          }}
        >
          <div
            className="w-1.5 h-1.5 rounded-full"
            style={{ background: "#C9A84C" }}
          />
          <span
            className="text-[10px] font-medium tracking-[0.3em] uppercase"
            style={{ color: "rgba(201,168,76,0.9)" }}
          >
            {t.hero.eyebrow}
          </span>
        </motion.div>

        {/* Heading + description grid */}
        <div className="grid lg:grid-cols-[1fr_360px] gap-10 lg:gap-20 items-end">

          {/* Large name — left */}
          <motion.h1
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="font-serif font-light leading-[0.92]"
            style={{ fontSize: "clamp(4.2rem, 9.5vw, 8rem)", color: "white" }}
          >
            Ieva
            <br />
            <span style={{ color: "#C9A84C" }}>Bakare</span>
          </motion.h1>

          {/* Description + CTAs — right */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="pb-2"
          >
            <p
              className="font-serif italic font-light text-lg mb-2"
              style={{ color: "rgba(255,255,255,0.55)" }}
            >
              Immigration Lawyer · Vilnius
            </p>
            <p
              className="text-[10px] font-medium tracking-[0.25em] uppercase mb-5"
              style={{ color: "rgba(201,168,76,0.75)" }}
            >
              Individual Activity — XXXXX
            </p>
            <p
              className="text-sm font-light leading-relaxed mb-8"
              style={{ color: "rgba(255,255,255,0.45)" }}
            >
              {t.hero.subtext}
            </p>
            <div className="flex flex-wrap gap-3">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => scroll("#about")}
                className="px-6 py-3 text-xs font-medium tracking-widest uppercase transition-colors duration-300"
                style={{ background: "white", color: "#111111" }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLButtonElement).style.background = "#E8E8E8")
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLButtonElement).style.background = "white")
                }
              >
                {t.hero.ctaSecondary}
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => scroll("#contact")}
                className="px-6 py-3 text-xs font-medium tracking-widest uppercase border transition-colors duration-300"
                style={{ borderColor: "#C9A84C", color: "#C9A84C" }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.background = "#C9A84C";
                  (e.currentTarget as HTMLButtonElement).style.color = "#111111";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.background = "transparent";
                  (e.currentTarget as HTMLButtonElement).style.color = "#C9A84C";
                }}
              >
                {t.hero.ctaPrimary}
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Gold separator line — clear break from the section below */}
      <div
        className="relative z-10 w-full"
        style={{ height: 1, background: "rgba(201,168,76,0.25)" }}
      />
    </section>
  );
}
