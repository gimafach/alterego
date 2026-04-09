import { useLanguage } from "@/hooks/useLanguage";
import FadeIn from "@/components/FadeIn";
import advantageImg from "@/assets/discover-advantage.jpg";

const DiscoverScale = () => {
  const { t } = useLanguage();

  return (
    <section className="section-padding">
      <div className="max-w-4xl mx-auto">
        <FadeIn>
          <h2 className="headline-lg mb-12">
            {t("Il tuo tempo diventa scalabile.", "Your time becomes scalable.")}
          </h2>
        </FadeIn>
        <FadeIn delay={0.2}>
          <p className="body-lg max-w-2xl mb-16">
            {t(
              "Quello che funziona per te si estende a tutto il team.",
              "What works for you extends across your team."
            )}
          </p>
        </FadeIn>
        <FadeIn delay={0.3}>
          <div className="w-full overflow-hidden rounded-sm">
            <img
              src={advantageImg}
              alt={t("Scalabilità", "Scalability")}
              width={1920}
              height={1080}
              loading="lazy"
              className="w-full h-auto object-cover"
            />
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default DiscoverScale;
