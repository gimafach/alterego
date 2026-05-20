import { useLanguage } from "@/hooks/useLanguage";
import FadeIn from "@/components/FadeIn";
import ZoomScroll from "@/components/ZoomScroll";
import scaleImg from "@/assets/mimetikos_team.png";

const ScalabilitySection = () => {
  const { t } = useLanguage();

  return (
    <section className="section-padding">
      <div className="max-w-4xl mx-auto">
        <FadeIn>
          <h2 className="headline-lg mb-8">
            {t(
              "Inizia da te. Poi estendilo al tuo team.",
              "Start with yourself. Then scale it across your team."
            )}
          </h2>
        </FadeIn>
        <FadeIn delay={0.15}>
          <p className="body-lg max-w-2xl mb-4">
            {t(
              "Risparmia un'ora al giorno. Poi moltiplicala per tutta l'azienda.",
              "Save one hour a day. Then multiply it across your company."
            )}
          </p>
        </FadeIn>
        <FadeIn delay={0.25}>
          <p className="body-lg max-w-2xl mb-16">
            {t(
              "Trasforma il tuo modo di lavorare in vantaggio competitivo.",
              "Turn the way you work into a competitive advantage."
            )}
          </p>
        </FadeIn>
        <ZoomScroll>
          <div className="w-full overflow-hidden rounded-sm">
            <img
              src={scaleImg}
              alt={t("Scalabilità mimētikós", "mimētikós scalability")}
              width={1920}
              height={1080}
              loading="lazy"
              className="w-full h-auto object-cover"
            />
          </div>
        </ZoomScroll>
      </div>
    </section>
  );
};

export default ScalabilitySection;
