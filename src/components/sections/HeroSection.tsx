import { useLanguage } from "@/hooks/useLanguage";
import FadeIn from "@/components/FadeIn";

const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <section className="pt-28 pb-8 px-6 md:px-12 lg:px-24 overflow-hidden">
      <div className="max-w-5xl mx-auto text-center">
        <FadeIn>
          <h1 className="headline-xl">
            {t(
              "Osserva. Impara. Lavora. Sempre.",
              "Listen. Learn. Work. Always."
            )}
          </h1>
        </FadeIn>
      </div>
    </section>
  );
};

export default HeroSection;
