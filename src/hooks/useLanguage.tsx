import { createContext, useContext, useState, ReactNode } from "react";

type Lang = "it" | "en";

const LanguageContext = createContext<{
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (it: string, en: string) => string;
}>({ lang: "it", setLang: () => {}, t: (it) => it });

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Lang>("it");
  const t = (it: string, en: string) => (lang === "it" ? it : en);
  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
