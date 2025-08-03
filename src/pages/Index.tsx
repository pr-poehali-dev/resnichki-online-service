import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ServicesCarousel from "@/components/ServicesCarousel";
import MastersSection from "@/components/MastersSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <ServicesCarousel />
      <MastersSection />
      <ContactSection />
    </div>
  );
};

export default Index;