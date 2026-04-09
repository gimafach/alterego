import { useLanguage } from "@/hooks/useLanguage";
import FadeIn from "@/components/FadeIn";
import heroDevice from "@/assets/hero-device.jpg";

const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center section-padding overflow-hidden">
      <div className="fixed top-6 left-6 z-50">
        <a href="/" className="text-sm font-semibold tracking-widest uppercase text-foreground bg-background px-3 py-2 rounded-lg md:bg-transparent md:p-0">
          AlterEgo
        </a>
      </div>

      <div className="max-w-5xl mx-auto text-center">
        <FadeIn>
          <h1 className="headline-xl mb-8">
            {t(
              "Non impari un nuovo sistema. È il sistema che impara te.",
              "You don't learn a new system. The system learns you."
            )}
          </h1>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p className="body-lg max-w-2xl mx-auto mb-12">
            {t(
              "Continua a lavorare come sempre. AlterEgo osserva, impara e lavora al posto tuo.",
              "Keep working as you always have. AlterEgo learns and works for you."
            )}
          </p>
        </FadeIn>

        <FadeIn delay={0.4}>
          <a href="#demo" className="cta-button">
            {t("Richiedi una demo", "Request a demo")}
          </a>
        </FadeIn>

        <FadeIn delay={0.6} y={60}>
          <div className="mt-20 md:mt-28">
            <img
              src={heroDevice}
              alt="AlterEgo Device"
              width={1920}
              height={1080}
              className="w-full max-w-4xl mx-auto rounded-lg"
            />
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default HeroSection;
