import { useLanguage } from "@/hooks/useLanguage";
import FadeIn from "@/components/FadeIn";

const DiscoverSeo = () => {
  const { t } = useLanguage();

  return (
    <section className="section-padding bg-secondary">
      <div className="max-w-4xl mx-auto">
        <FadeIn>
          <h2 className="headline-lg mb-12">
            {t(
              "Intelligenza artificiale, applicata davvero al lavoro.",
              "Artificial intelligence, applied to real work."
            )}
          </h2>
        </FadeIn>
        <FadeIn delay={0.15}>
          <p className="body-lg mb-6 max-w-2xl">
            {t(
              "Non una chat. Non uno strumento generico.",
              "Not a chatbot. Not a generic tool."
            )}
          </p>
        </FadeIn>
        <FadeIn delay={0.3}>
          <p className="body-lg max-w-2xl">
            {t(
              "Un'intelligenza artificiale che impara dal tuo lavoro quotidiano e lo esegue in modo affidabile.",
              "An artificial intelligence that learns from your daily work and executes it reliably."
            )}
          </p>
        </FadeIn>
      </div>
    </section>
  );
};

export default DiscoverSeo;
