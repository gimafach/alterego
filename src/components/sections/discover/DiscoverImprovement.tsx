import { useLanguage } from "@/hooks/useLanguage";
import FadeIn from "@/components/FadeIn";

const DiscoverImprovement = () => {
  const { t } = useLanguage();

  return (
    <section className="section-padding bg-secondary">
      <div className="max-w-4xl mx-auto">
        <FadeIn>
          <h2 className="headline-lg mb-12">
            {t(
              "Non si limita a eseguire. Migliora.",
              "It doesn't just execute. It improves."
            )}
          </h2>
        </FadeIn>
        <FadeIn delay={0.2}>
          <p className="body-lg max-w-2xl">
            {t(
              "Impara, si adatta e ti aiuta a lavorare meglio nel tempo.",
              "It learns, adapts, and helps you work better over time."
            )}
          </p>
        </FadeIn>
      </div>
    </section>
  );
};

export default DiscoverImprovement;
