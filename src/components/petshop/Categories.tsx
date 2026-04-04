import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { Bath, Bone, Scissors, Truck, Stethoscope, Heart, Dog, Cat, Drumstick, Sparkles, Pill, Gamepad2, Watch, Tag, ChevronDown } from "lucide-react";

const services = [
  { icon: Stethoscope, title: "Veterinário", color: "#e74c3c", bg: "#fde8e8", animal: Dog, animalColor: "#e74c3c" },
  { icon: Bath, title: "Banho & Tosa", color: "#2563eb", bg: "#dbeafe", animal: Dog, animalColor: "#2563eb" },
  { icon: Scissors, title: "Tosa Higiênica", color: "#7c3aed", bg: "#ede9fe", animal: Scissors, animalColor: "#7c3aed" },
  { icon: Heart, title: "Adote um Pet", color: "#16a34a", bg: "#dcfce7", animal: Cat, animalColor: "#16a34a" },
  { icon: Truck, title: "Entrega Rápida", color: "#f97316", bg: "#ffedd5", animal: Truck, animalColor: "#f97316" },
];

const navCategories = [
  {
    label: "Cachorro",
    icon: Dog,
    subs: ["Ração Seca", "Ração Úmida", "Petiscos", "Brinquedos", "Coleiras", "Camas"],
  },
  {
    label: "Gato",
    icon: Cat,
    subs: ["Ração Seca", "Ração Úmida", "Areia Higiênica", "Arranhadores", "Brinquedos"],
  },
  {
    label: "Rações",
    icon: Bone,
    subs: ["Premium", "Super Premium", "Natural", "Filhotes", "Adultos", "Idosos"],
  },
  {
    label: "Petiscos",
    icon: Drumstick,
    subs: ["Bifinhos", "Ossos", "Dental", "Snacks", "Biscoitos"],
  },
  {
    label: "Higiene",
    icon: Bath,
    subs: ["Shampoo", "Condicionador", "Perfume", "Lenços", "Tapete Higiênico"],
  },
  {
    label: "Farmácia",
    icon: Pill,
    subs: ["Antipulgas", "Vermífugos", "Vitaminas", "Suplementos"],
  },
  {
    label: "Brinquedos",
    icon: Gamepad2,
    subs: ["Mordedores", "Bolinhas", "Pelúcia", "Interativos", "Cordas"],
  },
  {
    label: "Acessórios",
    icon: Watch,
    subs: ["Coleiras", "Guias", "Roupas", "Comedouros", "Caixas de Transporte"],
  },
  {
    label: "Promoções",
    icon: Tag,
    subs: ["Até 30% off", "Combos", "Leve 3 Pague 2", "Queima de Estoque"],
  },
  {
    label: "Serviços",
    icon: Sparkles,
    subs: ["Banho & Tosa", "Veterinário", "Táxi Pet", "Hotel Pet"],
  },
];

const Categories = () => {
  const [activeNav, setActiveNav] = useState<string | null>(null);
  const [hoveredService, setHoveredService] = useState<string | null>(null);
  const [activeAnimals, setActiveAnimals] = useState<Array<{ icon: typeof Dog; color: string; x: number; y: number; id: number }>>([]);
  const idRef = useRef(0);
  const closeTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  const triggerAnimal = (e: React.MouseEvent, service: typeof services[0]) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top;
    idRef.current += 1;
    setActiveAnimals(prev => [
      ...prev.slice(-8),
      { icon: service.animal, color: service.animalColor, x, y, id: idRef.current }
    ]);
  };

  const handleNavEnter = (label: string) => {
    if (closeTimeout.current) clearTimeout(closeTimeout.current);
    setActiveNav(label);
  };

  const handleNavLeave = () => {
    closeTimeout.current = setTimeout(() => setActiveNav(null), 200);
  };

  const handleDropdownEnter = () => {
    if (closeTimeout.current) clearTimeout(closeTimeout.current);
  };

  const activeCategory = navCategories.find(c => c.label === activeNav);

  return (
    <>
      {/* Barra de navegação de categorias */}
      <nav className="border-b overflow-x-auto bg-white relative" style={{ borderColor: "#e7e5e4" }}>
        <div className="max-w-[1100px] mx-auto flex items-center gap-0">
          {navCategories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeNav === cat.label;
            return (
              <div
                key={cat.label}
                className="relative"
                onMouseEnter={() => handleNavEnter(cat.label)}
                onMouseLeave={handleNavLeave}
              >
                <button
                  className="relative px-5 py-3.5 text-sm font-medium whitespace-nowrap transition-colors duration-200 flex items-center gap-1.5"
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    color: isActive ? "var(--verde)" : "#78716c",
                    fontWeight: isActive ? 600 : 400,
                  }}
                >
                  <Icon className="w-3.5 h-3.5" />
                  {cat.label}
                  <ChevronDown
                    className="w-3 h-3 transition-transform duration-200"
                    style={{ transform: isActive ? "rotate(180deg)" : "rotate(0)" }}
                  />
                  <span
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[2.5px] rounded-full transition-all duration-300"
                    style={{
                      width: isActive ? "60%" : "0%",
                      background: "var(--verde)",
                    }}
                  />
                </button>
              </div>
            );
          })}
        </div>

        {/* Dropdown */}
        {activeCategory && (
          <div
            className="absolute left-0 right-0 bg-white border-b z-40 animate-fadeDown"
            style={{ borderColor: "#e7e5e4", boxShadow: "0 8px 24px rgba(0,0,0,0.08)" }}
            onMouseEnter={handleDropdownEnter}
            onMouseLeave={handleNavLeave}
          >
            <div className="max-w-[1100px] mx-auto px-5 py-5">
              <div className="flex items-center gap-2 mb-3">
                {activeCategory.icon && <activeCategory.icon className="w-4 h-4" style={{ color: "var(--verde)" }} />}
                <h3 className="text-sm font-bold" style={{ color: "var(--txt)" }}>{activeCategory.label}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {activeCategory.subs.map(sub => (
                  <a
                    key={sub}
                    href={`#${activeCategory.label.toLowerCase()}`}
                    className="px-4 py-2 rounded-lg text-sm transition-all duration-200 hover:-translate-y-0.5"
                    style={{ background: "#f5f5f4", color: "#57534e" }}
                    onMouseEnter={(e) => { e.currentTarget.style.background = "var(--verde-bg)"; e.currentTarget.style.color = "var(--verde)"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.background = "#f5f5f4"; e.currentTarget.style.color = "#57534e"; }}
                  >
                    {sub}
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Cards de serviços */}
      <section className="py-10 px-4 bg-white">
        <div className="max-w-[1100px] mx-auto">
          <div className="flex items-center gap-4 overflow-x-auto pb-2 scrollbar-hide">
            {services.map((s) => {
              const Icon = s.icon;
              const isHovered = hoveredService === s.title;
              return (
                <div
                  key={s.title}
                  className="flex-shrink-0 flex items-center gap-3 rounded-2xl px-6 py-4 cursor-pointer transition-all duration-250 relative"
                  style={{
                    background: isHovered ? s.bg : "#fafaf9",
                    minWidth: 180,
                    transform: isHovered ? "translateY(-2px)" : "none",
                    boxShadow: isHovered ? `0 8px 24px ${s.color}20` : "none",
                  }}
                  onMouseEnter={(e) => {
                    setHoveredService(s.title);
                    triggerAnimal(e, s);
                  }}
                  onMouseLeave={() => setHoveredService(null)}
                  onClick={(e) => triggerAnimal(e, s)}
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors duration-250"
                    style={{ background: isHovered ? s.color : "#f0efed" }}
                  >
                    <Icon size={20} style={{ color: isHovered ? "#fff" : s.color }} />
                  </div>
                  <span
                    className="text-sm font-semibold whitespace-nowrap transition-colors duration-200"
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      color: isHovered ? s.color : "#1c1917",
                    }}
                  >
                    {s.title}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Floating animal icons that STAY */}
      {activeAnimals.map((a) => {
        const AnimalIcon = a.icon;
        return (
          <div
            key={a.id}
            className="fixed pointer-events-none z-[100]"
            style={{
              left: a.x - 14,
              top: a.y - 10,
              animation: "animalBounceStay 0.6s ease-out forwards",
            }}
          >
            <AnimalIcon className="w-7 h-7 drop-shadow-lg" style={{ color: a.color }} />
          </div>
        );
      })}
    </>
  );
};

export default Categories;
