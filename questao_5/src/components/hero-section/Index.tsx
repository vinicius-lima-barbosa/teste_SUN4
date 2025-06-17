import { scrollToSection } from "../../utils/ScrollToSection";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center"
    >
      <div className="text-center">
        <h1 className="text-4xl md:text-7xl font-extrabold text-gray-900 leading-tight mb-6">
          SUN4 Advogados
          <br />
          Automações Jurídicas
        </h1>
        <p className="text-xl md:text-lg text-gray-600 max-w-3xl mx-auto mb-10">
          Aqui, você, advogado, poderá acompanhar seus processos com eficiência
          e segurança. <br />O SUN4 Advogados oferece planos sob medida para o
          volume dos seus processos, trazendo automações inteligentes para o seu
          escritório.
        </p>
        <button
          key="plans"
          type="button"
          onClick={() => scrollToSection("plans")}
          className="inline-block bg-indigo-600 hover:bg-indigo-700 transition-colors duration-200 text-white text-lg font-semibold px-8 py-4 rounded-xl shadow-lg cursor-pointer"
        >
          Conheça os planos
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
