import { Link } from "react-router-dom";
import { useLanguage } from "@/hooks/useLanguage";
import FadeIn from "@/components/FadeIn";
import ZoomScroll from "@/components/ZoomScroll";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WaitlistForm from "@/components/WaitlistForm";

import advantageNewImg from "@/assets/discover-advantage-new.jpg";
import advantageImg from "@/assets/discover-advantage.jpg";
import deviceCloseup from "@/assets/device-closeup.jpg";
import bundle01 from "@/assets/bundle_01.png";
import bundle02 from "@/assets/bundle_02.png";
import bundle03 from "@/assets/bundle_03.png";
import bundle04 from "@/assets/bundle_04.png";
import bundle05 from "@/assets/bundle_05.png";
import bundle06 from "@/assets/bundle_06.png";
import bundle07 from "@/assets/bundle_07.png";
import bundle08 from "@/assets/bundle_08.png";
import bundle09 from "@/assets/bundle_09.png";

const questions = [
  {
    q: ["Non sono tecnologico.", "I'm not a technical person."],
    a: [
      "Non devi esserlo. mimētikós non ti chiede di imparare nuovi software o cambiare il tuo modo di lavorare. Continui a usare telefono, email, WhatsApp, Excel, gestionale. mimētikós impara da come lavori già oggi.",
      "You don't need to be. mimētikós does not require you to learn new software or change the way you work. You continue using phone, email, WhatsApp, Excel, ERP. mimētikós learns from the way you already work.",
    ],
    image: advantageNewImg,
    alt: ["Dispositivo mimētikós", "mimētikós device"],
  },
  {
    q: ["Non ho tempo per un'altra piattaforma.", "I don't have time for another platform."],
    a: [
      "È esattamente il motivo per cui esiste mimētikós. Non nasce per aggiungere lavoro. Nasce per togliertelo.",
      "That is exactly why mimētikós exists. It is not designed to add work. It is designed to remove it.",
    ],
    image: bundle02,
    alt: ["Automazione mimētikós", "mimētikós automation"],
  },
  {
    q: ["Nessuno può fare il mio lavoro.", "Nobody can do my work."],
    a: [
      "mimētikós non sostituisce la tua esperienza. La apprende. Il valore della tua azienda è nel modo in cui lavori, decidi e risolvi problemi. mimētikós trasforma quel valore in continuità operativa.",
      "mimētikós does not replace your experience. It learns from it. The value of your company is in the way you work, decide and solve problems. mimētikós transforms that value into operational continuity.",
    ],
    image: bundle01,
    alt: ["Team e mimētikós", "Team and mimētikós"],
  },
  {
    q: ["E se sbaglia?", "What if it makes mistakes?"],
    a: [
      "mimētikós non prende decisioni senza il tuo controllo. All'inizio osserva, suggerisce, automatizza solo attività ripetitive. La supervisione resta sempre tua.",
      "mimētikós does not make decisions without your control. At the beginning it observes, suggests, and automates only repetitive activities. Supervision always remains yours.",
    ],
    image: bundle04,
    alt: ["Controllo mimētikós", "mimētikós control"],
  },
  {
    q: ["I miei dati dove finiscono?", "Where does my data go?"],
    a: [
      "Da nessuna parte. mimētikós lavora all'interno della tua azienda, sulla tua scrivania. Niente cloud esterni, niente condivisione, niente addestramento di sistemi terzi.",
      "Nowhere. mimētikós works inside your company, on your desk. No external clouds, no sharing, no third-party training.",
    ],
    image: bundle03,
    alt: ["Privacy mimētikós", "mimētikós privacy"],
  },
  {
    q: ["Devo cambiare i programmi che uso?", "Do I need to change the software I already use?"],
    a: [
      "No. mimētikós nasce per usarli così come sono, li integra. Non il contrario.",
      "No. mimētikós adapts to your work. Not the other way around.",
    ],
    image: bundle06,
    alt: ["mimētikós si adatta", "mimētikós adapts"],
  },
  {
    q: ["I miei collaboratori non lo useranno mai.", "My employees will never use it."],
    a: [
      "Probabilmente non si accorgeranno nemmeno di usarlo. Perché continuano a lavorare con strumenti che già utilizzano ogni giorno.",
      "They may not even notice it. Because it continues working through the tools they already use every day.",
    ],
    image: bundle07,
    alt: ["Team che lavora", "Team working"],
  },
  {
    q: ["Sembra complicato.", "It sounds complicated."],
    a: [
      "La tecnologia deve essere invisibile. Se ti accorgi della complessità, abbiamo sbagliato qualcosa.",
      "Technology should be invisible. If you notice the complexity, we failed.",
    ],
    image: bundle05,
    alt: ["Semplicità mimētikós", "mimētikós simplicity"],
  },
  {
    q: ["E se tra qualche anno cambia tutto?", "What if everything changes in a few years?"],
    a: [
      "Il valore non è il modello AI. Il valore è ciò che mimētikós ha imparato dalla tua azienda — il tuo modo di lavorare, la tua esperienza operativa. Quello resta tuo.",
      "The value is not the AI model. The value is what mimētikós learns from your company — your way of working, your operational experience. That remains yours.",
    ],
    image: bundle08,
    alt: ["Futuro mimētikós", "mimētikós future"],
  },
  {
    q: ["Perché dovrei iniziare adesso?", "Why should I start now?"],
    a: [
      "Perché chi inizierà prima costruirà conoscenza operativa digitale, automatizzerà prima, accumulerà vantaggio competitivo. Fra qualche anno non farà differenza chi usa l'AI. Farà differenza chi le ha insegnato il proprio lavoro per primo.",
      "Because those who start earlier build operational digital knowledge, automate earlier, and accumulate competitive advantage. In a few years, it won't matter who uses AI. It will matter who taught it their work first.",
    ],
    image: advantageImg,
    alt: ["Vantaggio competitivo", "Competitive advantage"],
  },
];

const LoSappiamo = () => {
  const { t } = useLanguage();

  return (
    <>
      <Header />
      <main>
        {/* Opening */}
        <section className="section-padding pt-40">
          <div className="max-w-4xl mx-auto">
            <FadeIn>
              <p className="text-sm font-medium tracking-widest uppercase text-muted-foreground mb-8">
                {t("Lo sappiamo", "We know")}
              </p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h1 className="headline-xl">
                {t(
                  "La tecnologia deve adattarsi al tuo modo di lavorare. Non il contrario.",
                  "Technology should adapt to the way you work. Not the other way around."
                )}
              </h1>
            </FadeIn>
          </div>
        </section>

        {/* Q&A alternating */}
        {questions.map((item, i) => (
          <section key={i} className="border-t border-border">
            <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-20 md:py-28">
              <FadeIn>
                <div
                  className={`flex flex-col md:flex-row gap-12 lg:gap-20 items-center ${
                    i % 2 === 1 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Text */}
                  <div className="md:w-1/2 lg:w-[40%]">
                    <h2 className="headline-lg mb-6">
                      {t(item.q[0], item.q[1])}
                    </h2>
                    <p className="body-lg">
                      {t(item.a[0], item.a[1])}
                    </p>
                  </div>

                  {/* Image */}
                  <div className="md:w-1/2 lg:w-[60%]">
                    <div className="rounded-sm" style={{ boxShadow: '0 0 70px 24px rgba(55, 60, 70, 0.55)', background: 'rgb(55, 60, 70)' }}>
                      <ZoomScroll>
                        <div className="overflow-hidden rounded-sm">
                          <img
                            src={item.image}
                            alt={t(item.alt[0], item.alt[1])}
                            width={960}
                            height={640}
                            loading="lazy"
                            className="w-full h-auto object-cover"
                          />
                        </div>
                      </ZoomScroll>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>
          </section>
        ))}

        {/* Closing */}
        <section className="section-padding bg-secondary">
          <div className="max-w-2xl mx-auto">
            <FadeIn>
              <div className="divider-line mb-12" />
            </FadeIn>
            <FadeIn>
              <p className="headline-lg mb-12">
                {t(
                  "mimētikós non cambia il tuo lavoro. Ti aiuta a proteggerlo, alleggerirlo e farlo crescere.",
                  "mimētikós does not change your work. It helps you protect it, simplify it and grow it."
                )}
              </p>
            </FadeIn>
            <FadeIn delay={0.2}>
              <WaitlistForm />
            </FadeIn>
            <FadeIn delay={0.3}>
              <div className="mt-8">
                <Link
                  to="/come-funziona"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {t("Come funziona? →", "How does it work? →")}
                </Link>
              </div>
            </FadeIn>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default LoSappiamo;
