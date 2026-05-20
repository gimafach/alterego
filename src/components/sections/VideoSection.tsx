import { useLanguage } from "@/hooks/useLanguage";
import FadeIn from "@/components/FadeIn";

const VideoSection = () => {
  const { lang } = useLanguage();

  return (
    <section className="py-10 md:py-14 px-6 md:px-12 lg:px-24">
      <div className="max-w-5xl mx-auto">
        <FadeIn y={40}>
          <div className="relative max-w-4xl mx-auto mb-12 md:mb-16">
            <div
              className="absolute inset-0 rounded-lg"
              style={{ background: "linear-gradient(to right, #000000, #6e727d 28%, #6e727d 72%, #000000)" }}
            />
            <div
              className="relative rounded-lg overflow-hidden"
              style={{
                maskImage: "linear-gradient(to right, transparent 0%, black 18%, black 82%, transparent 100%)",
                WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 18%, black 82%, transparent 100%)",
              }}
            >
              <video
                src="/mimetikos.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="w-full block"
              />
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="flex flex-col md:flex-row items-start gap-10 md:gap-20">
            <div className="flex-1">
              <p className="text-2xl md:text-3xl font-bold leading-snug">
                {lang === "it"
                  ? "Il tuo lavoro continua. Anche senza di te."
                  : "Work at the speed of absence."}
              </p>
            </div>
            <div className="flex-1">
              <p className="body-lg">
                {lang === "it" ? (
                  <>
                    <strong className="font-bold text-foreground">mimētikós</strong>
                    {" è il primo dispositivo AI lavoratore, plasmato dai tuoi pensieri."}
                  </>
                ) : (
                  <>
                    {"Introducing "}
                    <strong className="font-bold text-foreground">mimētikós</strong>
                    {", the first AI worker device, shaped by your thoughts."}
                  </>
                )}
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default VideoSection;
