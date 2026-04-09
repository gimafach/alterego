import { useLanguage } from "@/hooks/useLanguage";
import FadeIn from "@/components/FadeIn";

const FinalSection = () => {
  const { t } = useLanguage();

  return (
    <section className="section-padding">
      <div className="max-w-5xl mx-auto text-center">
        <FadeIn>
          <h2 className="headline-xl mb-20">
            {t(
              "Non è un software. È qualcuno che lavora con te.",
              "This isn't software. It's something that works with you."
            )}
          </h2>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="divider-line mx-auto mb-12" />
        </FadeIn>

        <FadeIn delay={0.3}>
          <a href="#demo" className="cta-button text-lg" id="demo">
            {t("Scopri AlterEgo", "Discover AlterEgo")}
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

export default FinalSection;
