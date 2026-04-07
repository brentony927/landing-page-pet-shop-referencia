import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { Bath, Bone, Scissors, Truck, Stethoscope, Heart, Dog, Cat, Drumstick, Sparkles, Pill, Gamepad2, Watch, Tag } from "lucide-react";

const topRow = [
  { label: "Cachorro", icon: Dog, color: "#e07b39", bg: "#fff7ed", subs: ["Ração Seca", "Ração Úmida", "Petiscos", "Brinquedos", "Coleiras", "Camas"] },
  { label: "Gato", icon: Cat, color: "#7c3aed", bg: "#f5f3ff", subs: ["Ração Seca", "Ração Úmida", "Areia Higiênica", "Arranhadores", "Brinquedos"] },
  { label: "Rações", icon: Bone, color: "#1b4332", bg: "#d8f3dc", subs: ["Premium", "Super Premium", "Natural", "Filhotes", "Adultos", "Idosos"] },
  { label: "Petiscos", icon: Drumstick, color: "#e07b39", bg: "#fff7ed", subs: ["Bifinhos", "Ossos", "Dental", "Snacks", "Biscoitos"] },
  { label: "Higiene", icon: Bath, color: "#0891b2", bg: "#ecfeff", subs: ["Shampoo", "Condicionador", "Perfume", "Lenços", "Tapete Higiênico"] },
];

const bottomRow = [
  { label: "Farmácia", icon: Pill, color: "#dc2626", bg: "#fef2f2", subs: ["Antipulgas", "Vermífugos", "Vitaminas", "Suplementos"] },
  { label: "Brinquedos", icon: Gamepad2, color: "#2563eb", bg: "#eff6ff", subs: ["Mordedores", "Bolinhas", "Pelúcia", "Interativos"] },
  { label: "Acessórios", icon: Watch, color: "#ca8a04", bg: "#fefce8", subs: ["Coleiras", "Guias", "Roupas", "Comedouros"] },
  { label: "Promoções", icon: Tag, color: "#e11d48", bg: "#fff1f2", subs: ["Até 30% off", "Combos", "Leve 3 Pague 2"] },
  { label: "Serviços", icon: Sparkles, color: "#1b4332", bg: "#d8f3dc", subs: ["Banho & Tosa", "Veterinário", "Táxi Pet"] },
];

const quickServices = [
  { icon: Stethoscope, title: "Veterinário", color: "#e74c3c", bg: "#fde8e8" },
  { icon: Bath, title: "Banho & Tosa", color: "#2563eb", bg: "#dbeafe" },
  { icon: Scissors, title: "Tosa Higiênica", color: "#7c3aed", bg: "#ede9fe" },
  { icon: Heart, title: "Adote um Pet", color: "#1b4332", bg: "#d8f3dc" },
  { icon: Truck, title: "Entrega Rápida", color: "#e07b39", bg: "#ffedd5" },
];

const CategoryItem = ({ cat, isActive, onEnter, onLeave }: { cat: typeof topRow[0]; isActive: boolean; onEnter: () => void; onLeave: () => void }) => {
  const Icon = cat.icon;
  return (
    <div className="relative" onMouseEnter={onEnter} onMouseLeave={onLeave}>
      <button
        className="w-full flex flex-col items-center gap-2 py-4 px-2 rounded-2xl transition-all duration-200"
        style={{ background: isActive ? cat.bg : "#f9f6f1" }}
      >
        <div
          className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-200"
          style={{ background: isActive ? `${cat.color}18` : "#f0efed" }}
        >
          <Icon className="w-5 h-5" style={{ color: cat.color }} />
        </div>
        <span className="text-xs font-semibold" style={{ color: isActive ? cat.color : "#44403c" }}>{cat.label}</span>
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
              <CategoryItem
                key={cat.label}
                cat={cat}
                isActive={activeNav === cat.label}
                onEnter={() => handleNavEnter(cat.label)}
                onLeave={handleNavLeave}
              />
            ))}
          </div>

          <div className="grid grid-cols-5 gap-2">
            {bottomRow.map((cat) => (
              <CategoryItem
                key={cat.label}
                cat={cat}
                isActive={activeNav === cat.label}
                onEnter={() => handleNavEnter(cat.label)}
                onLeave={handleNavLeave}
              />
            ))}
          </div>
        </div>

        {activeCategory && (
          <div
            className="max-w-[1000px] mx-auto mt-3 rounded-xl bg-white border animate-fadeDown"
            style={{ borderColor: "#e2ddd6", boxShadow: "0 8px 24px rgba(0,0,0,0.08)" }}
            onMouseEnter={handleDropdownEnter}
            onMouseLeave={handleNavLeave}
          >
            <div className="px-5 py-4">
              <div className="flex items-center gap-2 mb-3">
                <activeCategory.icon className="w-4 h-4" style={{ color: activeCategory.color }} />
                <h3 className="text-sm font-bold" style={{ color: "#1a1a1a" }}>{activeCategory.label}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {activeCategory.subs.map(sub => (
                  <Link
                    key={sub}
                    to={`/categoria/${activeCategory.label.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")}`}
                    className="px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200"
                    style={{ background: "#f9f6f1", color: "#6b6b6b" }}
                    onMouseEnter={(e) => { e.currentTarget.style.background = activeCategory.bg; e.currentTarget.style.color = activeCategory.color; }}
                    onMouseLeave={(e) => { e.currentTarget.style.background = "#f9f6f1"; e.currentTarget.style.color = "#6b6b6b"; }}
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
                    background: isHovered ? s.bg : "#f9f6f1",
                    border: isHovered ? `1.5px solid ${s.color}40` : "1.5px solid transparent",
                  }}
                  onMouseEnter={() => setHoveredService(s.title)}
                  onMouseLeave={() => setHoveredService(null)}
                >
                  <Icon size={16} style={{ color: s.color }} />
                  <span className="text-sm font-semibold" style={{ color: isHovered ? s.color : "#6b6b6b" }}>{s.title}</span>
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
