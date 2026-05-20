import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useLanguage } from "@/hooks/useLanguage";

const Header = () => {
  const { lang, setLang, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur-sm border-b border-border"
          : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 h-16 flex items-center justify-between">
        <Link to="/" className="text-base font-bold tracking-tight">
          mimētikós
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm">
          <Link
            to="/come-funziona"
            className={`transition-colors ${
              location.pathname === "/come-funziona"
                ? "text-foreground"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {t("Come funziona", "How it works")}
          </Link>
          <Link
            to="/lo-sappiamo"
            className={`transition-colors ${
              location.pathname === "/lo-sappiamo"
                ? "text-foreground"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {t("Lo sappiamo", "We know")}
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1 text-sm font-medium">
            <button
              onClick={() => setLang("it")}
              className={`px-2 py-1 transition-colors ${
                lang === "it"
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              IT
            </button>
            <span className="text-muted-foreground/30">|</span>
            <button
              onClick={() => setLang("en")}
              className={`px-2 py-1 transition-colors ${
                lang === "en"
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              EN
            </button>
          </div>

          <button
            className="md:hidden flex flex-col gap-1.5 p-1"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            <span
              className={`block w-5 h-px bg-foreground transition-all duration-300 origin-center ${
                menuOpen ? "rotate-45 translate-y-[7px]" : ""
              }`}
            />
            <span
              className={`block w-5 h-px bg-foreground transition-all duration-300 ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-5 h-px bg-foreground transition-all duration-300 origin-center ${
                menuOpen ? "-rotate-45 -translate-y-[7px]" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-background border-t border-border px-6 py-6 flex flex-col gap-5 text-sm">
          <Link
            to="/come-funziona"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            {t("Come funziona", "How it works")}
          </Link>
          <Link
            to="/lo-sappiamo"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            {t("Lo sappiamo", "We know")}
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
