import { useLanguage } from "@/hooks/useLanguage";
import FadeIn from "@/components/FadeIn";

const DiscoverCta = () => {
  const { t } = useLanguage();

  return (
    <section className="section-padding">
      <div className="max-w-5xl mx-auto text-center">
        <FadeIn>
          <h2 className="headline-xl mb-20">
            {t(
              "Scopri cosa può fare AlterEgo nel tuo lavoro.",
              "See what AlterEgo can do in your work."
            )}
          </h2>
        </FadeIn>
        <FadeIn delay={0.2}>
          <div className="divider-line mx-auto mb-12" />
        </FadeIn>
        <FadeIn delay={0.3}>
          <a href="#demo" className="cta-button text-lg" id="demo">
            {t("Richiedi una demo", "Request a demo")}
          </a>
        </FadeIn>
        <FadeIn delay={0.4}>
          <p className="mt-20 text-sm text-muted-foreground">
            © {new Date().getFullYear()} AlterEgo. {t("Tutti i diritti riservati.", "All rights reserved.")}
          </p>
        </FadeIn>
      </div>
    </section>
  );
};

export default DiscoverCta;
