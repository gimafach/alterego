import { useLanguage } from "@/hooks/useLanguage";
import FadeIn from "@/components/FadeIn";
import teammateImg from "@/assets/discover-teammate.jpg";

const DiscoverTeammate = () => {
  const { t } = useLanguage();

  return (
    <section className="section-padding">
      <div className="max-w-4xl mx-auto">
        <FadeIn>
          <div className="divider-line mb-12" />
        </FadeIn>
        <FadeIn>
          <h2 className="headline-xl mb-12">
            {t("Da strumento a collaboratore.", "From tool to teammate.")}
          </h2>
        </FadeIn>
        <FadeIn delay={0.2}>
          <p className="body-lg max-w-2xl mb-16">
            {t(
              "Non è qualcosa che usi. È qualcuno che lavora con te, ogni giorno.",
              "Not something you use. Something that works with you, every day."
            )}
          </p>
        </FadeIn>
        <FadeIn delay={0.3}>
          <div className="w-full overflow-hidden rounded-sm">
            <img
              src={teammateImg}
              alt={t("Dispositivo AlterEgo", "AlterEgo device")}
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

export default DiscoverTeammate;
