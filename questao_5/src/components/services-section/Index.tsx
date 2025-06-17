import { MdInsights, MdOutlineSecurity, MdSupportAgent } from "react-icons/md";

const ServicesSection = () => {
  return (
    <section id="services" className="pt-20 max-w-5xl mx-auto text-center">
      <div>
        <h2 className="text-4xl text-gray-900 font-extrabold mb-4">
          Nossos Serviços
        </h2>
        <p className="text-lg text-gray-700 mb-10">
          Oferecemos uma variedade de serviços para atender às suas
          necessidades, incluindo:
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-gray-600">
        <div className="flex flex-col items-center">
          <MdSupportAgent className="text-3xl text-indigo-600 mb-6" />
          <h3 className="text-xl font-semibold mb-3">Suporte Especializado</h3>
          <p>
            Possuímos toda uma equipe jurídica e técnica pronta para apoiar seu
            escritório.
          </p>
        </div>
        <div className="flex flex-col items-center">
          <MdOutlineSecurity className="text-3xl text-indigo-600 mb-6" />
          <h3 className="text-xl font-semibold mb-3">Segurança de Ponta</h3>
          <p>
            Garantimos a segurança dos dados do seu escritório com tecnologia de
            ponta.
          </p>
        </div>
        <div className="flex flex-col items-center">
          <MdInsights className="text-3xl text-indigo-600 mb-6" />
          <h3 className="text-xl font-semibold mb-3">Insights Inteligentes</h3>
          <p>
            Relatórios e análises detalhadas para ajudar na tomada de decisões
            estratégicas.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
