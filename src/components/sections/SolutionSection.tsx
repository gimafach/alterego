import { useLanguage } from "@/hooks/useLanguage";
import FadeIn from "@/components/FadeIn";

const SolutionSection = () => {
  const { t } = useLanguage();

  return (
    <section className="section-padding">
      <div className="max-w-4xl mx-auto">
        <FadeIn>
          <div className="divider-line mb-12" />
        </FadeIn>
        <FadeIn>
          <h2 className="headline-xl mb-12">
            {t("Fai una volta. Poi lo fa lui.", "Do it once. It does it forever.")}
          </h2>
        </FadeIn>
        <FadeIn delay={0.2}>
          <p className="body-lg max-w-2xl">
            {t(
              "AlterEgo osserva come lavori, impara dalle tue azioni quotidiane e le automatizza.",
              "AlterEgo watches how you work, learns from your daily actions, and automates them."
            )}
          </p>
        </FadeIn>
      </div>
    </section>
  );
};

export default SolutionSection;
