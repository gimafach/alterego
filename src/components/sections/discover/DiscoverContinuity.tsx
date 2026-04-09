import { useLanguage } from "@/hooks/useLanguage";
import FadeIn from "@/components/FadeIn";

const DiscoverContinuity = () => {
  const { t } = useLanguage();

  return (
    <section className="section-padding">
      <div className="max-w-4xl mx-auto">
        <FadeIn>
          <h2 className="headline-lg mb-12">
            {t(
              "Il tuo lavoro non si ferma senza di te.",
              "Your business doesn't stop without you."
            )}
          </h2>
        </FadeIn>
        <FadeIn delay={0.2}>
          <p className="body-lg max-w-2xl">
            {t(
              "Conoscenza, decisioni e abitudini continuano a funzionare.",
              "Knowledge, decisions and habits keep running."
            )}
          </p>
        </FadeIn>
      </div>
    </section>
  );
};

export default DiscoverContinuity;
