import { useLanguage } from "@/hooks/useLanguage";
import FadeIn from "@/components/FadeIn";
import ZoomScroll from "@/components/ZoomScroll";
import deviceCloseup from "@/assets/mimetikos_device.png";

const ProductSection = () => {
  const { t } = useLanguage();

  return (
    <section className="section-padding">
      <div className="max-w-5xl mx-auto">
        <FadeIn>
          <h2 className="headline-lg text-center mb-20">
            {t(
              "Un dispositivo. Un nuovo modo di lavorare. Il tuo mimētikós.",
              "One device. A new way to work. Your mimētikós."
            )}
          </h2>
        </FadeIn>

        <ZoomScroll>
          <img
            src={deviceCloseup}
            alt={t("mimētikós device", "mimētikós device")}
            loading="lazy"
            width={1920}
            height={1080}
            className="w-full rounded-lg"
          />
        </ZoomScroll>
      </div>
    </section>
  );
};

export default ProductSection;
