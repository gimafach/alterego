import { useState } from "react";
import { useLanguage } from "@/hooks/useLanguage";

const WaitlistForm = () => {
  const { t } = useLanguage();
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;

    // TODO: POST /api/waitlist { email, lang, timestamp }
    const existing = JSON.parse(
      localStorage.getItem("mimetikos_waitlist") || "[]"
    );
    localStorage.setItem(
      "mimetikos_waitlist",
      JSON.stringify([...existing, { email: email.trim(), ts: Date.now() }])
    );
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <p className="body-md">
        {t(
          "Grazie, ti terremo aggiornato.",
          "Thank you, we'll keep you posted."
        )}
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder={t("La tua email", "Your email")}
        required
        className="flex-1 px-5 py-3 bg-secondary border border-border rounded-full text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:border-primary transition-colors"
      />
      <button type="submit" className="cta-button whitespace-nowrap">
        {t("Rimani aggiornato", "Stay Updated")}
      </button>
    </form>
  );
};

export default WaitlistForm;
