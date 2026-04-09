import { useLanguage } from "@/hooks/useLanguage";
import FadeIn from "@/components/FadeIn";

const PrivacySection = () => {
  const { t } = useLanguage();

  return (
    <section className="section-padding bg-secondary">
      <div className="max-w-4xl mx-auto">
        <FadeIn>
          <h2 className="headline-xl mb-16">
            {t("I tuoi dati restano tuoi.", "Your data stays yours.")}
          </h2>
        </FadeIn>

        <div className="space-y-8">
          <FadeIn delay={0.1}>
            <p className="body-lg">
              {t(
                "AlterEgo non è connesso a Internet.",
                "AlterEgo is not connected to the Internet."
              )}
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="body-lg">
              {t(
                "Dati, procedure e modo di lavorare restano all'interno della tua azienda.",
                "Data, processes and behavior remain inside your company."
              )}
            </p>
          </FadeIn>
          <FadeIn delay={0.3}>
            <p className="body-lg">
              {t(
                "Nessuna condivisione, nessun training esterno, nessun rischio.",
                "No sharing. No external training. No risk."
              )}
            </p>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default PrivacySection;
