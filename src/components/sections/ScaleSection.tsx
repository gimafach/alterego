import { useLanguage } from "@/hooks/useLanguage";
import FadeIn from "@/components/FadeIn";

const ScaleSection = () => {
  const { t } = useLanguage();

  return (
    <section className="section-padding">
      <div className="max-w-4xl mx-auto">
        <FadeIn>
          <h2 className="headline-lg mb-12">
            {t(
              "Inizia da te. Poi estendilo a tutto il team.",
              "Start with yourself. Then scale it across your team."
            )}
          </h2>
        </FadeIn>
        <FadeIn delay={0.2}>
          <p className="body-lg max-w-2xl">
            {t(
              "Risparmia un'ora al giorno. Poi moltiplicala per tutta l'azienda.",
              "Save one hour a day. Then multiply it across your company."
            )}
          </p>
        </FadeIn>
      </div>
    </section>
  );
};

export default ScaleSection;
