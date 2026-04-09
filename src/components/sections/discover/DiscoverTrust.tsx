import { useLanguage } from "@/hooks/useLanguage";
import FadeIn from "@/components/FadeIn";

const DiscoverTrust = () => {
  const { t } = useLanguage();

  return (
    <section className="section-padding bg-secondary">
      <div className="max-w-4xl mx-auto">
        <FadeIn>
          <h2 className="headline-lg mb-12">
            {t(
              "Un'intelligenza artificiale che impara come lavori.",
              "An artificial intelligence that learns how you work."
            )}
          </h2>
        </FadeIn>
        <FadeIn delay={0.2}>
          <p className="body-lg max-w-2xl">
            {t(
              "E agisce in modo preciso e affidabile.",
              "And executes with precision."
            )}
          </p>
        </FadeIn>
      </div>
    </section>
  );
};

export default DiscoverTrust;
