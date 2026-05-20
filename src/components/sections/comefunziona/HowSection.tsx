import { useLanguage } from "@/hooks/useLanguage";
import FadeIn from "@/components/FadeIn";
import ZoomScroll from "@/components/ZoomScroll";
import automationImg from "@/assets/discover-automation.jpg";

const HowSection = () => {
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
              "Fallo una volta. Lui lo farà per sempre.",
              "Do it once. It does it forever."
            )}
          </h2>
        </FadeIn>
        <FadeIn delay={0.15}>
          <p className="body-lg max-w-2xl mb-6">
            {t(
              "mimētikós osserva come lavori, impara dalle tue azioni quotidiane e le automatizza.",
              "mimētikós watches how you work, learns from your daily actions, and automates them."
            )}
          </p>
        </FadeIn>
        <FadeIn delay={0.25}>
          <p className="body-lg max-w-2xl mb-6">
            {t(
              "Continui a usare email, WhatsApp, Excel, CRM e gli strumenti che già utilizzi.",
              "You keep using email, WhatsApp, Excel, CRM and the tools you already use."
            )}
          </p>
        </FadeIn>
        <ZoomScroll className="mb-10">
          <div className="w-full overflow-hidden rounded-sm">
            <img
              src={automationImg}
              alt={t("mimētikós in azione", "mimētikós in action")}
              width={1920}
              height={1080}
              loading="lazy"
              className="w-full h-auto object-cover"
            />
          </div>
        </ZoomScroll>
        <FadeIn delay={0.45}>
          <p className="body-lg max-w-2xl font-bold text-foreground">
            {t(
              "mimētikós lavora \"dietro le quinte\", senza cambiare il tuo modo di lavorare.",
              "mimētikós works in the background, without changing how you work."
            )}
          </p>
        </FadeIn>
      </div>
    </section>
  );
};

export default HowSection;
