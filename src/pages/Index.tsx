import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/sections/HeroSection";
import VideoSection from "@/components/sections/VideoSection";
import CoreIdeaSection from "@/components/sections/CoreIdeaSection";
import ProductSection from "@/components/sections/ProductSection";
import WaitlistSection from "@/components/sections/WaitlistSection";

const Index = () => (
  <>
    <Header />
    <main>
      <HeroSection />
      <VideoSection />
      <CoreIdeaSection />
      <ProductSection />
      <WaitlistSection />
    </main>
    <Footer />
  </>
);

export default Index;
