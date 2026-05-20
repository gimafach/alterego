import { useLanguage } from "@/hooks/useLanguage";
import FadeIn from "@/components/FadeIn";

const benefits = [
  {
    icon: "→",
    title: ["Trasforma le tue azioni in automazione.", "Turns your actions into automation."],
    body: [
      "Quello che oggi fai manualmente, domani verrà eseguito automaticamente.",
      "What you do manually today is done automatically tomorrow.",
    ],
  },
  {
    icon: "↑",
    title: ["Non si limita a eseguire. Migliora.", "It doesn't just execute. It improves."],
    body: [
      "Impara, si adatta e ti aiuta a lavorare meglio nel tempo.",
      "It learns, adapts, and helps you work better over time.",
    ],
  },
  {
    icon: "◎",
    title: [
      "Intelligenza artificiale applicata al lavoro reale.",
      "Artificial intelligence, applied to real work.",
    ],
    body: [
      "Non un chatbot. Non uno strumento generico. Un'AI che impara dal tuo lavoro quotidiano e lo esegue in modo affidabile.",
      "Not a chatbot. Not a generic tool. An AI that learns from your daily work and executes it reliably.",
    ],
  },
  {
    icon: "◻",
    title: ["I tuoi dati restano tuoi.", "Your data stays yours."],
    body: [
      "Dati, processi e comportamenti restano nella tua azienda. Nessuna condivisione. Nessun rischio.",
      "Data, processes and behavior remain inside your company. No sharing. No risk.",
    ],
  },
];

const BenefitsSection = () => {
  const { t } = useLanguage();

  return (
    <section className="section-padding bg-secondary">
      <div className="max-w-5xl mx-auto">
        <FadeIn>
          <div className="divider-line mb-12" />
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border">
          {benefits.map((b, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className="bg-secondary p-10 md:p-12 flex flex-col gap-4">
                <span className="text-2xl text-muted-foreground">{b.icon}</span>
                <h3 className="text-xl md:text-2xl font-bold leading-tight">
                  {t(b.title[0], b.title[1])}
                </h3>
                <p className="body-md">
                  {t(b.body[0], b.body[1])}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
