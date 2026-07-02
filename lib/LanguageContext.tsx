"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { translations, type Locale } from "./translations";

// Use the English shape as the structural type
type Translations = typeof translations.en;

type LanguageContextType = {
  locale: Locale;
  t: Translations;
  setLocale: (l: Locale) => void;
};

const LanguageContext = createContext<LanguageContextType | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>("en");
  return (
    <LanguageContext.Provider
      value={{ locale, t: translations[locale] as Translations, setLocale }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
