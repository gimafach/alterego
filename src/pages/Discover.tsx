import { LanguageProvider } from "@/hooks/useLanguage";
import LanguageSwitch from "@/components/LanguageSwitch";
import DiscoverHero from "@/components/sections/discover/DiscoverHero";
import DiscoverTeammate from "@/components/sections/discover/DiscoverTeammate";
import DiscoverLearns from "@/components/sections/discover/DiscoverLearns";
import DiscoverTrust from "@/components/sections/discover/DiscoverTrust";
import DiscoverAutomation from "@/components/sections/discover/DiscoverAutomation";
import DiscoverContinuity from "@/components/sections/discover/DiscoverContinuity";
import DiscoverImprovement from "@/components/sections/discover/DiscoverImprovement";
import DiscoverAdvantage from "@/components/sections/discover/DiscoverAdvantage";
import DiscoverScale from "@/components/sections/discover/DiscoverScale";
import DiscoverSeo from "@/components/sections/discover/DiscoverSeo";
import DiscoverCta from "@/components/sections/discover/DiscoverCta";

const Discover = () => (
  <LanguageProvider>
    <LanguageSwitch />
    <main>
      <DiscoverHero />
      <DiscoverTeammate />
      <DiscoverLearns />
      <DiscoverTrust />
      <DiscoverAutomation />
      <DiscoverContinuity />
      <DiscoverImprovement />
      <DiscoverAdvantage />
      <DiscoverScale />
      <DiscoverSeo />
      <DiscoverCta />
    </main>
  </LanguageProvider>
);

export default Discover;
