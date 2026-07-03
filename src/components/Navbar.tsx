
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { useNavigate } from "@tanstack/react-router";
import { useLanguage } from "@/lib/LanguageContext";
import LanguageSwitcher from "./LanguageSwitcher";


export default function Navbar() {
  const { locale } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href: string) => {
    setMenuOpen(false);
    setPracticeOpen(false);
    if (href.startsWith("#")) {
      const el = document.querySelector(href);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
        return;
      }
      navigate({ to: "/" });
      setTimeout(() => document.querySelector(href)?.scrollIntoView({ behavior: "smooth" }), 100);
      return;
    }
    const hashIdx = href.indexOf("#");
    if (hashIdx > 0) {
      const path = href.slice(0, hashIdx);
      const hash = href.slice(hashIdx);
      navigate({ to: path });
      setTimeout(() => document.querySelector(hash)?.scrollIntoView({ behavior: "smooth" }), 150);
      return;
    }
    navigate({ to: href });
  };


  const navLinks = [
    { label: locale === "lt" ? "Apie mane" : "About Me", href: "/about" },
    { label: locale === "lt" ? "Praktika" : "Practice", href: "/practice" },
    { label: locale === "lt" ? "Tinklaraštis" : "Blog", href: "/blog" },
  ];

  const practiceItems = [
    {
      label: locale === "lt" ? "Imigracijos teisė" : "Immigration Law",
      href: "/practice#immigration-law",
    },
    {
      label: locale === "lt" ? "Administracinė teisė" : "Administrative Law",
      href: "/practice#administrative-law",
    },
    {
      label: locale === "lt" ? "Kaip mąsto teismas" : "How the Court Thinks",
      href: "/practice#how-courts-think",
    },
  ];


  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "shadow-lg backdrop-blur-md" : "bg-transparent"
        }`}
        style={scrolled ? { background: "rgba(10, 12, 18, 0.93)" } : {}}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex flex-col leading-none">
            <span
              className="font-serif text-xl font-light tracking-widest text-white uppercase"
              style={{ letterSpacing: "0.15em" }}
            >
              Ieva Bakare
            </span>
            <span
              className="text-[10px] font-sans font-medium tracking-[0.25em] uppercase"
              style={{ color: "#C9A84C" }}
            >
              Immigration Law
            </span>
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNav(link.href)}
                className="text-xs font-medium tracking-widest uppercase text-white/80 hover:text-white transition-colors duration-200 relative group"
              >
                {link.label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-[#C9A84C] group-hover:w-full transition-all duration-300" />
              </button>
            ))}

            <LanguageSwitcher dark />

            <button
              onClick={() => handleNav("#contact")}
              className="ml-1 px-5 py-2.5 text-xs font-medium tracking-widest uppercase transition-all duration-300"
              style={{ background: "#C9A84C", color: "#111111" }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLButtonElement).style.background = "#A8872E")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLButtonElement).style.background = "#C9A84C")}
            >
              {locale === "lt" ? "Susisiekite" : "Get in Touch"}
            </button>
          </div>

          {/* Mobile: language + burger */}
          <div className="md:hidden flex items-center gap-3">
            <LanguageSwitcher dark />
            <button
              className="text-white"
              onClick={() => setMenuOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="fixed inset-0 z-40 flex flex-col pt-24 px-8 overflow-y-auto backdrop-blur-md"
            style={{ background: "rgba(10, 12, 18, 0.97)" }}
          >
            <p className="text-[10px] tracking-[0.3em] uppercase mb-3" style={{ color: "rgba(201,168,76,0.5)" }}>
              Navigate
            </p>
            {navLinks.map((link, i) => (
              <motion.button
                key={link.href}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.07 + 0.1 }}
                onClick={() => handleNav(link.href)}
                className="w-full py-4 border-b border-white/10 text-left font-serif text-2xl font-light text-white/90 hover:text-white transition-colors"
              >
                {link.label}
              </motion.button>
            ))}

            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45 }}
              onClick={() => handleNav("#contact")}
              className="mt-8 py-4 text-sm font-medium tracking-widest uppercase text-[#111111]"
              style={{ background: "#C9A84C" }}
            >
              {locale === "lt" ? "Susisiekite" : "Get in Touch"}
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
