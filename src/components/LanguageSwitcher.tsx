
import { useLanguage } from "@/lib/LanguageContext";
import { motion } from "framer-motion";

export default function LanguageSwitcher({ dark = false }: { dark?: boolean }) {
  const { locale, setLocale } = useLanguage();

  return (
    <div
      className="flex items-center gap-0.5 rounded-sm overflow-hidden border"
      style={{ borderColor: dark ? "rgba(255,255,255,0.15)" : "rgba(26,43,74,0.2)" }}
    >
      {(["en", "lt"] as const).map((lang) => {
        const active = locale === lang;
        return (
          <motion.button
            key={lang}
            onClick={() => setLocale(lang)}
            whileTap={{ scale: 0.95 }}
            className="relative px-2.5 py-1.5 text-[10px] font-medium tracking-widest uppercase transition-colors duration-200"
            style={{
              background: active ? "#C9A84C" : "transparent",
              color: active ? "#111111" : dark ? "rgba(255,255,255,0.5)" : "rgba(26,43,74,0.5)",
            }}
          >
            {lang}
          </motion.button>
        );
      })}
    </div>
  );
}
