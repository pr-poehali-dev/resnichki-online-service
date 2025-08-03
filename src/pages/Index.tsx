import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import MastersSection from "@/components/MastersSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-open-sans">
      <Navigation />
      <HeroSection />
      <ServicesSection />
      <MastersSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;