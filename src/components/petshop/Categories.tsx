import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { Bath, Bone, Scissors, Truck, Stethoscope, Heart, Dog, Cat, Drumstick, Sparkles, Pill, Gamepad2, Watch, Tag } from "lucide-react";

const topRow = [
  { label: "Cachorro", icon: Dog, color: "var(--pet-orange)", bg: "var(--pet-orange-light)", subs: ["Ração Seca", "Ração Úmida", "Petiscos", "Brinquedos", "Coleiras", "Camas"] },
  { label: "Gato", icon: Cat, color: "var(--pet-blue)", bg: "var(--pet-blue-light)", subs: ["Ração Seca", "Ração Úmida", "Areia Higiênica", "Arranhadores", "Brinquedos"] },
  { label: "Rações", icon: Bone, color: "var(--pet-green)", bg: "var(--pet-green-light)", subs: ["Premium", "Super Premium", "Natural", "Filhotes", "Adultos", "Idosos"] },
  { label: "Petiscos", icon: Drumstick, color: "var(--pet-yellow-dark)", bg: "var(--pet-yellow-light)", subs: ["Bifinhos", "Ossos", "Dental", "Snacks", "Biscoitos"] },
  { label: "Higiene", icon: Bath, color: "var(--pet-blue)", bg: "var(--pet-blue-light)", subs: ["Shampoo", "Condicionador", "Perfume", "Lenços", "Tapete Higiênico"] },
];

const bottomRow = [
  { label: "Farmácia", icon: Pill, color: "#E53935", bg: "#FFEBEE", subs: ["Antipulgas", "Vermífugos", "Vitaminas", "Suplementos"] },
  { label: "Brinquedos", icon: Gamepad2, color: "var(--pet-blue)", bg: "var(--pet-blue-light)", subs: ["Mordedores", "Bolinhas", "Pelúcia", "Interativos"] },
  { label: "Acessórios", icon: Watch, color: "var(--pet-orange)", bg: "var(--pet-orange-light)", subs: ["Coleiras", "Guias", "Roupas", "Comedouros"] },
  { label: "Promoções", icon: Tag, color: "#E53935", bg: "#FFEBEE", subs: ["Até 30% off", "Combos", "Leve 3 Pague 2"] },
  { label: "Serviços", icon: Sparkles, color: "var(--pet-green)", bg: "var(--pet-green-light)", subs: ["Banho & Tosa", "Veterinário", "Táxi Pet"] },
];

const quickServices = [
  { icon: Stethoscope, title: "Veterinário", color: "#E53935", bg: "#FFEBEE" },
  { icon: Bath, title: "Banho & Tosa", color: "var(--pet-blue)", bg: "var(--pet-blue-light)" },
  { icon: Scissors, title: "Tosa Higiênica", color: "var(--pet-green)", bg: "var(--pet-green-light)" },
  { icon: Heart, title: "Adote um Pet", color: "var(--pet-orange)", bg: "var(--pet-orange-light)" },
  { icon: Truck, title: "Entrega Rápida", color: "var(--pet-yellow-dark)", bg: "var(--pet-yellow-light)" },
];

const CategoryItem = ({ cat, isActive, onEnter, onLeave }: { cat: typeof topRow[0]; isActive: boolean; onEnter: () => void; onLeave: () => void }) => {
  const Icon = cat.icon;
  return (
    <div className="relative" onMouseEnter={onEnter} onMouseLeave={onLeave}>
      <button
        className="w-full flex flex-col items-center gap-2 py-4 px-2 rounded-2xl transition-all duration-200"
        style={{ background: isActive ? cat.bg : "white" }}
      >
        <div
          className="w-14 h-14 rounded-full flex items-center justify-center transition-all duration-200"
          style={{ background: isActive ? cat.bg : "#F5F5F5", border: isActive ? `2px solid ${cat.color}` : "2px solid transparent" }}
        >
          <Icon className="w-6 h-6" style={{ color: cat.color }} />
        </div>
        <span className="text-xs font-bold" style={{ color: isActive ? cat.color : "var(--pet-gray)" }}>{cat.label}</span>
      </button>
    </div>
  );
};

const Categories = () => {
  const [activeNav, setActiveNav] = useState<string | null>(null);
  const [hoveredService, setHoveredService] = useState<string | null>(null);
  const closeTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

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

  const allCats = [...topRow, ...bottomRow];
  const activeCategory = allCats.find(c => c.label === activeNav);

  return (
    <>
      <section className="py-8 px-4 bg-white">
        <div className="max-w-[1000px] mx-auto">
          <div className="grid grid-cols-5 gap-2 mb-2">
            {topRow.map((cat) => (
              <CategoryItem key={cat.label} cat={cat} isActive={activeNav === cat.label} onEnter={() => handleNavEnter(cat.label)} onLeave={handleNavLeave} />
            ))}
          </div>
          <div className="grid grid-cols-5 gap-2">
            {bottomRow.map((cat) => (
              <CategoryItem key={cat.label} cat={cat} isActive={activeNav === cat.label} onEnter={() => handleNavEnter(cat.label)} onLeave={handleNavLeave} />
            ))}
          </div>
        </div>

        {activeCategory && (
          <div
            className="max-w-[1000px] mx-auto mt-3 rounded-xl bg-white border animate-fadeDown"
            style={{ borderColor: "var(--pet-gray-border)", boxShadow: "0 8px 24px rgba(0,0,0,0.08)" }}
            onMouseEnter={handleDropdownEnter}
            onMouseLeave={handleNavLeave}
          >
            <div className="px-5 py-4">
              <div className="flex items-center gap-2 mb-3">
                <activeCategory.icon className="w-4 h-4" style={{ color: activeCategory.color }} />
                <h3 className="text-sm font-extrabold" style={{ fontFamily: "'Baloo 2', cursive", color: "var(--pet-gray)" }}>{activeCategory.label}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {activeCategory.subs.map(sub => (
                  <Link
                    key={sub}
                    to={`/categoria/${activeCategory.label.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")}`}
                    className="px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200"
                    style={{ background: "#F5F5F5", color: "var(--pet-gray)" }}
                    onMouseEnter={(e) => { e.currentTarget.style.background = activeCategory.bg; e.currentTarget.style.color = activeCategory.color; }}
                    onMouseLeave={(e) => { e.currentTarget.style.background = "#F5F5F5"; e.currentTarget.style.color = "var(--pet-gray)"; }}
                  >
                    {sub}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}
      </section>

      <section className="pb-6 px-4 bg-white">
        <div className="max-w-[1000px] mx-auto">
          <div className="flex items-center gap-3 overflow-x-auto pb-2 scrollbar-hide">
            {quickServices.map((s) => {
              const Icon = s.icon;
              const isHovered = hoveredService === s.title;
              return (
                <div
                  key={s.title}
                  className="flex-shrink-0 flex items-center gap-2.5 rounded-full px-5 py-2.5 cursor-pointer transition-all duration-200"
                  style={{
                    background: isHovered ? s.bg : "#F5F5F5",
                    border: isHovered ? `2px solid ${s.color}` : "2px solid transparent",
                  }}
                  onMouseEnter={() => setHoveredService(s.title)}
                  onMouseLeave={() => setHoveredService(null)}
                >
                  <Icon size={16} style={{ color: s.color }} />
                  <span className="text-sm font-bold" style={{ color: isHovered ? s.color : "var(--pet-gray)" }}>{s.title}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Categories;
