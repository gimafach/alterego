import { useLanguage } from "@/hooks/useLanguage";
import FadeIn from "@/components/FadeIn";
import ZoomScroll from "@/components/ZoomScroll";
import heroDevice from "@/assets/hero-device.png";

const CoreIdeaSection = () => {
  const { t } = useLanguage();

  return (
    <section className="section-padding">
      <div className="max-w-4xl mx-auto">
        <FadeIn>
          <div className="divider-line mb-12" />
        </FadeIn>
        <FadeIn>
          <h2 className="headline-xl mb-8">
            {t(
              "Non devi imparare un nuovo sistema. È il sistema a imparare da te.",
              "You don't learn a new system. The system learns you."
            )}
          </h2>
        </FadeIn>
        <FadeIn delay={0.2}>
          <p className="body-lg max-w-2xl mb-20">
            {t(
              "Continua a lavorare come hai sempre fatto. mimētikós impara e lavora per te.",
              "Keep working as you always have. mimētikós learns and works for you."
            )}
          </p>
        </FadeIn>
        <ZoomScroll>
          <img
            src={heroDevice}
            alt="mimētikós device"
            loading="lazy"
            width={1920}
            height={1080}
            className="w-full max-w-4xl mx-auto rounded-lg"
          />
        </ZoomScroll>
      </div>
    </section>
  );
};

export default CoreIdeaSection;
