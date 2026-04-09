import { useLanguage } from "@/hooks/useLanguage";
import FadeIn from "@/components/FadeIn";

const PainSection = () => {
  const { t } = useLanguage();

  const items = ["Email", "WhatsApp", "Report", "CRM"];

  return (
    <section className="section-padding">
      <div className="max-w-4xl mx-auto">
        <FadeIn>
          <h2 className="headline-lg mb-16">
            {t(
              "Ogni giorno perdi tempo in attività ripetitive.",
              "Every day you lose time on repetitive tasks."
            )}
          </h2>
        </FadeIn>

        <FadeIn delay={0.15}>
          <div className="flex flex-wrap gap-4 mb-16">
            {items.map((item) => (
              <span
                key={item}
                className="px-6 py-3 border border-border rounded-full body-md"
              >
                {item}
              </span>
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={0.3}>
          <p className="body-lg">
            {t(
              "Lo fai ogni giorno. Sempre le stesse cose.",
              "You do it every day. The same tasks again and again."
            )}
          </p>
        </FadeIn>
      </div>
    </section>
  );
};

export default PainSection;
