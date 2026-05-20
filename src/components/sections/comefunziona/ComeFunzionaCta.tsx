import { Link } from "react-router-dom";
import { useLanguage } from "@/hooks/useLanguage";
import FadeIn from "@/components/FadeIn";
import WaitlistForm from "@/components/WaitlistForm";

const ComeFunzionaCta = () => {
  const { t } = useLanguage();

  return (
    <section className="section-padding bg-secondary">
      <div className="max-w-2xl mx-auto">
        <FadeIn>
          <div className="divider-line mb-12" />
        </FadeIn>
        <FadeIn>
          <WaitlistForm />
        </FadeIn>
        <FadeIn delay={0.2}>
          <div className="mt-8">
            <Link
              to="/lo-sappiamo"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {t("Hai domande? →", "Have questions? →")}
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default ComeFunzionaCta;
