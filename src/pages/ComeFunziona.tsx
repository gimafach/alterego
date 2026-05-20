import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProblemSection from "@/components/sections/comefunziona/ProblemSection";
import HowSection from "@/components/sections/comefunziona/HowSection";
import BenefitsSection from "@/components/sections/comefunziona/BenefitsSection";
import ScalabilitySection from "@/components/sections/comefunziona/ScalabilitySection";
import ComeFunzionaCta from "@/components/sections/comefunziona/ComeFunzionaCta";

const ComeFunziona = () => (
  <>
    <Header />
    <main>
      <ProblemSection />
      <HowSection />
      <BenefitsSection />
      <ScalabilitySection />
      <ComeFunzionaCta />
    </main>
    <Footer />
  </>
);

export default ComeFunziona;
