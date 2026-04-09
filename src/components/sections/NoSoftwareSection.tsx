import { useLanguage } from "@/hooks/useLanguage";
import FadeIn from "@/components/FadeIn";

const NoSoftwareSection = () => {
  const { t } = useLanguage();

  return (
    <section className="section-padding">
      <div className="max-w-4xl mx-auto">
        <FadeIn>
          <h2 className="headline-lg mb-12">
            {t("Nessun nuovo software da imparare.", "No new software to learn.")}
          </h2>
        </FadeIn>
        <FadeIn delay={0.15}>
          <p className="body-lg mb-6 max-w-2xl">
            {t(
              "Continui a usare email, WhatsApp, Excel, CRM e gli strumenti che già conosci.",
              "You keep using email, WhatsApp, Excel, CRM and the tools you already use."
            )}
          </p>
        </FadeIn>
        <FadeIn delay={0.3}>
          <p className="body-lg max-w-2xl">
            {t(
              "AlterEgo lavora in background, senza cambiare il tuo modo di lavorare.",
              "AlterEgo works in the background, without changing how you work."
            )}
          </p>
        </FadeIn>
      </div>
    </section>
  );
};

export default NoSoftwareSection;
