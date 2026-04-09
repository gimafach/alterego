import { useLanguage } from "@/hooks/useLanguage";
import FadeIn from "@/components/FadeIn";
import automationImg from "@/assets/discover-automation.jpg";

const DiscoverAutomation = () => {
  const { t } = useLanguage();

  return (
    <section className="section-padding">
      <div className="max-w-4xl mx-auto">
        <FadeIn>
          <h2 className="headline-xl mb-12">
            {t(
              "Trasforma le tue azioni in automazioni.",
              "Turns your actions into automation."
            )}
          </h2>
        </FadeIn>
        <FadeIn delay={0.2}>
          <p className="body-lg max-w-2xl mb-16">
            {t(
              "Quello che fai oggi manualmente, domani viene fatto automaticamente.",
              "What you do manually today is done automatically tomorrow."
            )}
          </p>
        </FadeIn>
        <FadeIn delay={0.3}>
          <div className="w-full overflow-hidden rounded-sm">
            <img
              src={automationImg}
              alt={t("Automazione", "Automation")}
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

export default DiscoverAutomation;
