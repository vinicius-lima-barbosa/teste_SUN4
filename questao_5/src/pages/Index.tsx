import ContactSection from "../components/contact-section/Index";
import Footer from "../components/footer/Index";
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
      <Footer />
    </>
  );
};

export default Index;
