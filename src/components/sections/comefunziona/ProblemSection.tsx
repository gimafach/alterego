import { useLanguage } from "@/hooks/useLanguage";
import FadeIn from "@/components/FadeIn";

const ProblemSection = () => {
  const { t } = useLanguage();

  return (
    <section className="section-padding pt-40">
      <div className="max-w-4xl mx-auto">
        <FadeIn>
          <h1 className="headline-xl mb-8">
            {t(
              "Ogni giorno perdi tempo in attività ripetitive.",
              "Every day you lose time on repetitive tasks."
            )}
          </h1>
        </FadeIn>
        <FadeIn delay={0.15}>
          <p className="body-lg mb-6">
            {t(
              "Email. WhatsApp. Report. CRM. Le stesse attività, ogni giorno.",
              "Email. WhatsApp. Reports. CRM. You do the same work again and again."
            )}
          </p>
        </FadeIn>
        <FadeIn delay={0.3}>
          <p className="body-lg max-w-2xl">
            {t(
              "mimētikós usa l'intelligenza artificiale per imparare come lavori e trasformare il tuo tempo in valore.",
              "mimētikós uses artificial intelligence to learn how you work and turn your time into value."
            )}
          </p>
        </FadeIn>
      </div>
    </section>
  );
};

export default ProblemSection;
