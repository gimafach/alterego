import { useLanguage } from "@/hooks/useLanguage";

const LanguageSwitch = () => {
  const { lang, setLang } = useLanguage();

  return (
    <div className="fixed top-6 right-6 z-50 flex items-center gap-1 text-sm font-medium">
      <button
        onClick={() => setLang("it")}
        className={`px-3 py-1.5 rounded-full transition-all duration-300 ${
          lang === "it"
            ? "bg-primary text-primary-foreground"
            : "text-muted-foreground hover:text-foreground"
        }`}
      >
        IT
      </button>
      <button
        onClick={() => setLang("en")}
        className={`px-3 py-1.5 rounded-full transition-all duration-300 ${
          lang === "en"
            ? "bg-primary text-primary-foreground"
            : "text-muted-foreground hover:text-foreground"
        }`}
      >
        EN
      </button>
    </div>
  );
};

export default LanguageSwitch;
