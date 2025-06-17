import ContactSection from "../components/contact-section/Index";
import HeroSection from "../components/hero-section/Index";
import Navigation from "../components/navigation/Index";
import Plans from "../components/plans-section/Index";

const Index = () => {
  return (
    <>
      <Navigation />
      <HeroSection />
      <Plans />
      <ContactSection />
    </>
  );
};

export default Index;
