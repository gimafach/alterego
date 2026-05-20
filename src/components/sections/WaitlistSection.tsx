import { useLanguage } from "@/hooks/useLanguage";
import FadeIn from "@/components/FadeIn";
import WaitlistForm from "@/components/WaitlistForm";

const WaitlistSection = () => {
  const { t } = useLanguage();

  return (
    <section className="section-padding bg-secondary">
      <div className="max-w-5xl mx-auto text-center">
        <FadeIn>
          <p className="body-md max-w-xl mx-auto mb-10">
            {t(
              "Stiamo costruendo il futuro della collaborazione uomo–AI. Iscriviti per seguire i nostri progressi.",
              "We're building the next chapter of human–AI coworking. Sign up to follow our progress."
            )}
          </p>
        </FadeIn>
        <FadeIn delay={0.15}>
          <div className="max-w-lg mx-auto">
            <WaitlistForm />
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default WaitlistSection;
