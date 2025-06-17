import { Toaster } from "react-hot-toast";
import ContactSection from "../components/contact-section/Index";
import Footer from "../components/footer/Index";
import HeroSection from "../components/hero-section/Index";
import Navigation from "../components/navigation/Index";
import Plans from "../components/plans-section/Index";
import ServicesSection from "../components/services-section/Index";

const Index = () => {
  return (
    <>
      <Navigation />
      <HeroSection />
      <Plans />
      <ServicesSection />
      <ContactSection />
      <Footer />
      <Toaster position="top-right" />
    </>
  );
};

export default Index;
