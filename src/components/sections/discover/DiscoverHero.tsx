import { useLanguage } from "@/hooks/useLanguage";
import FadeIn from "@/components/FadeIn";
import { Link } from "react-router-dom";

const DiscoverHero = () => {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center section-padding">
      <div className="fixed top-6 left-6 z-50">
        <Link to="/" className="text-sm font-semibold tracking-widest uppercase text-foreground bg-background/80 backdrop-blur-sm px-3 py-2 rounded-lg md:bg-transparent md:p-0">
          AlterEgo
        </Link>
      </div>

      <div className="max-w-5xl mx-auto text-center">
        <FadeIn>
          <h1 className="headline-xl mb-8">
            {t(
              "Non è un software. È qualcuno che lavora con te.",
              "This isn't software. It's something that works with you."
            )}
          </h1>
        </FadeIn>
        <FadeIn delay={0.2}>
          <p className="body-lg max-w-2xl mx-auto">
            {t(
              "AlterEgo utilizza l'intelligenza artificiale per imparare come lavori e trasformare il tuo tempo in valore.",
              "AlterEgo uses artificial intelligence to learn how you work and turn your time into value."
            )}
          </p>
        </FadeIn>
      </div>
    </section>
  );
};

export default DiscoverHero;
