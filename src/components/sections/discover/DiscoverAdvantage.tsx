import { useLanguage } from "@/hooks/useLanguage";
import FadeIn from "@/components/FadeIn";
import advantageNewImg from "@/assets/discover-advantage-new.jpg";

const DiscoverAdvantage = () => {
  const { t } = useLanguage();

  return (
    <section className="section-padding">
      <div className="max-w-4xl mx-auto">
        <FadeIn>
          <h2 className="headline-xl mb-12">
            {t(
              "Trasforma il modo in cui lavori in vantaggio competitivo.",
              "Turn the way you work into a competitive advantage."
            )}
          </h2>
        </FadeIn>
        <FadeIn delay={0.2}>
          <p className="body-lg max-w-2xl mb-16">
            {t(
              "Non solo risparmi tempo. Lavori meglio degli altri.",
              "You don't just save time. You work better than others."
            )}
          </p>
        </FadeIn>
        <FadeIn delay={0.3}>
          <div className="w-full overflow-hidden rounded-sm">
            <img
              src={advantageNewImg}
              alt={t("AlterEgo - il tuo alter ego al lavoro", "AlterEgo - your alter ego at work")}
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

export default DiscoverAdvantage;
