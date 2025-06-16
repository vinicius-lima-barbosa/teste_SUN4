import HeroSection from "../components/hero-section/Index";
import Navigation from "../components/navigation/Index";

const Index = () => {
  return (
    <>
      <Navigation />
      <HeroSection />
      <section id="plans" className="min-h-screen">
        <div>
          <h1>PLANOS</h1>
        </div>
      </section>
    </>
  );
};

export default Index;
