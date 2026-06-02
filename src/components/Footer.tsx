import { Link } from "react-router-dom";
import { useLanguage } from "@/hooks/useLanguage";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-border px-6 md:px-12 lg:px-24 py-12">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-start gap-8">
        <span className="text-sm font-bold tracking-tight">mimētikós</span>

        <nav className="flex flex-wrap gap-6 text-sm text-muted-foreground">
          <Link to="/" className="hover:text-foreground transition-colors">
            {t("Home", "Home")}
          </Link>
          <Link
            to="/come-funziona"
            className="hover:text-foreground transition-colors"
          >
            {t("Come funziona", "How it works")}
          </Link>
          <Link
            to="/lo-sappiamo"
            className="hover:text-foreground transition-colors"
          >
            {t("Lo sappiamo", "We know")}
          </Link>
        </nav>

        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
          <Link to="/privacy" className="hover:text-foreground transition-colors">
            {t("Privacy Policy", "Privacy Policy")}
          </Link>
          <Link to="/cookie" className="hover:text-foreground transition-colors">
            {t("Cookie Policy", "Cookie Policy")}
          </Link>
          <span>© 2026 mimētikós</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
