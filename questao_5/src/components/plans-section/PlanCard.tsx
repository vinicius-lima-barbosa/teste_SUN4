import { FaCheck } from "react-icons/fa";
import { scrollToSection } from "../../utils/ScrollToSection";

interface PlanCardProps {
  name: string;
  processes: number;
  price: number;
  description: string;
  tasks: string[];
}

const PlanCard = (plan: PlanCardProps) => {
  return (
    <div className="flex flex-col justify-between border border-gray-200 rounded-2xl p-6 bg-white shadow-md hover:shadow-xl transition-shadow duration-300">
      <div>
        <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
        <p className="text-gray-600 mb-6">
          Até {plan.processes.toLocaleString()} processos automatizados
        </p>
        <p className="text-4xl font-extrabold text-gray-900 mb-4">
          R$ {plan.price}{" "}
          <span className="text-lg font-normal text-gray-900">mês</span>
        </p>
        <p className="text-gray-700 mb-4">{plan.description}</p>
      </div>
      <div className="mb-6">
        {plan.tasks.map((task) => (
          <div className="flex items-center mb-3 gap-2" key={task}>
            <div className="bg-indigo-600 rounded-full p-1">
              <FaCheck className="text-white h-3 w-3" />
            </div>
            <p className="text-gray-700">{task}</p>
          </div>
        ))}
      </div>
      <button
        key="contact"
        type="button"
        onClick={() => scrollToSection("contact")}
        className="md:inline-block bg-indigo-600 text-white font-semibold px-5 py-3 rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 transition cursor-pointer"
      >
        Contratar {plan.name}
      </button>
    </div>
  );
};

export default PlanCard;
