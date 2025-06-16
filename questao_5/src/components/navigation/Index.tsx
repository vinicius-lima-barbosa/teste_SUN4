import { useEffect, useState } from "react";

const NAV_ITEMS = [
  { id: "home", label: "Início" },
  { id: "plans", label: "Planos" },
  { id: "contact", label: "Contato" },
];

const Navigation = () => {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    let scrollTimeout: number;

    const handleScroll = () => {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        const sections = NAV_ITEMS.map((item) =>
          document.getElementById(item.id)
        );
        const scrollPosition = window.scrollY + 100;

        for (let i = 0; i < sections.length; i++) {
          const section = sections[i];
          if (section) {
            const top = section.offsetTop;
            const bottom = top + section.offsetHeight;

            if (
              scrollPosition >= top &&
              scrollPosition < bottom &&
              activeSection !== NAV_ITEMS[i].id
            ) {
              setActiveSection(NAV_ITEMS[i].id);
            }
          }
        }
      }, 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeSection]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 z-30 w-full border-b border-gray-200 shadow-sm">
      <div className="px-6 py-4 flex items-center justify-between max-w-7xl mx-auto h-16">
        <h1 className="text-3xl font-extrabold text-indigo-600">
          SUN4 Advogados
        </h1>
        <div className="hidden md:flex gap-4">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => scrollToSection(item.id)}
              className="relative hover:text-indigo-600 cursor-pointer transition-colors duration-200"
            >
              {item.label}
              <span
                className={`absolute bottom-0 left-0 h-0.5 bg-indigo-500 transition-all duration-300 ${
                  activeSection === item.id ? "w-full" : "w-0"
                }`}
              />
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
