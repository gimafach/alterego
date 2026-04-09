import { LanguageProvider } from "@/hooks/useLanguage";
import LanguageSwitch from "@/components/LanguageSwitch";
import HeroSection from "@/components/sections/HeroSection";
import PainSection from "@/components/sections/PainSection";
import SolutionSection from "@/components/sections/SolutionSection";
import NoSoftwareSection from "@/components/sections/NoSoftwareSection";
import PrivacySection from "@/components/sections/PrivacySection";
import ProductSection from "@/components/sections/ProductSection";
import ScaleSection from "@/components/sections/ScaleSection";
import FinalSection from "@/components/sections/FinalSection";

const Index = () => {
  return (
    <LanguageProvider>
      <LanguageSwitch />
      <main>
        <HeroSection />
        <PainSection />
        <SolutionSection />
        <NoSoftwareSection />
        <PrivacySection />
        <ProductSection />
        <ScaleSection />
        <FinalSection />
      </main>
    </LanguageProvider>
  );
};

export default Index;
