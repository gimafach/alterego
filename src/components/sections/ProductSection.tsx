import { useLanguage } from "@/hooks/useLanguage";
import FadeIn from "@/components/FadeIn";
import deviceCloseup from "@/assets/device-closeup.jpg";

const ProductSection = () => {
  const { t } = useLanguage();

  return (
    <section className="section-padding">
      <div className="max-w-5xl mx-auto">
        <FadeIn>
          <h2 className="headline-lg text-center mb-20">
            {t(
              "Un dispositivo. Un nuovo modo di lavorare.",
              "One device. A new way to work."
            )}
          </h2>
        </FadeIn>

        <FadeIn delay={0.2} y={60}>
          <img
            src={deviceCloseup}
            alt="AlterEgo device close-up"
            loading="lazy"
            width={1920}
            height={1080}
            className="w-full rounded-lg"
          />
        </FadeIn>
      </div>
    </section>
  );
};

export default ProductSection;
