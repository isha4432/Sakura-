import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SushiSection from "@/components/SushiSection";
import RamenSection from "@/components/RamenSection";
import TempuraSection from "@/components/TempuraSection";
import DessertSection from "@/components/DessertSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import Petals from "@/components/Petals";

const Index = () => {
  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-x-hidden">
      <Petals />
      <Navbar />
      <main>
        <HeroSection />
        <SushiSection />
        <RamenSection />
        <TempuraSection />
        <DessertSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
