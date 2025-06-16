import PlanCard from "./PlanCard";

const PLANS = [
  {
    name: "Plano I",
    processes: 5000,
    price: 499,
    description: "Soluções básicas para escritórios em crescimento.",
    tasks: [
      "Automação de processos simples",
      "Integração com ferramentas básicas",
      "Suporte ao cliente via e-mail",
      "Relatórios mensais de desempenho",
    ],
  },
  {
    name: "Plano II",
    processes: 10000,
    price: 999,
    description: "Recursos avançados para empresas em expansão.",
    tasks: [
      "Automação de processos complexos",
      "Integração com ferramentas avançadas",
      "Suporte ao cliente via chat e e-mail",
      "Relatórios semanais de desempenho",
    ],
  },
  {
    name: "Plano III",
    processes: 20000,
    price: 1999,
    description: "Soluções completas para grandes corporações.",
    tasks: [
      "Automação de processos críticos",
      "Integração com sistemas corporativos",
      "Suporte ao cliente 24/7",
      "Relatórios diários de desempenho",
    ],
  },
  {
    name: "Plano IV",
    processes: 50000,
    price: 4999,
    description: "Recursos ilimitados para empresas líderes de mercado.",
    tasks: [
      "Automação de processos ilimitados",
      "Integração com todas as ferramentas do mercado",
      "Suporte ao cliente dedicado",
      "Relatórios personalizados e em tempo real",
    ],
  },
];

const Plans = () => {
  return (
    <section id="plans" className="px-20 py-6">
      <h2 className="text-4xl font-extrabold text-gray-900 mb-10 text-center">
        Conheça os preços e volumes de cada Plano.
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {PLANS.map((plan, index) => (
          <PlanCard key={index} {...plan} />
        ))}
      </div>
    </section>
  );
};

export default Plans;
