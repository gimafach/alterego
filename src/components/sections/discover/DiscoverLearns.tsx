import { useLanguage } from "@/hooks/useLanguage";
import FadeIn from "@/components/FadeIn";

const DiscoverLearns = () => {
  const { t } = useLanguage();

  return (
    <section className="section-padding">
      <div className="max-w-4xl mx-auto">
        <FadeIn>
          <h2 className="headline-lg mb-12">
            {t("Impara come lavori davvero.", "It learns how you actually work.")}
          </h2>
        </FadeIn>
        <FadeIn delay={0.2}>
          <p className="body-lg max-w-2xl">
            {t(
              "Il tuo modo di lavorare diventa il suo.",
              "Your way of working becomes its own."
            )}
          </p>
        </FadeIn>
      </div>
    </section>
  );
};

export default DiscoverLearns;
