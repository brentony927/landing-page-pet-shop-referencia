import { useState } from "react";
import { Bath, Bone, Scissors, Truck, Stethoscope, Heart, Dog, Cat } from "lucide-react";

const services = [
  { icon: Stethoscope, title: "Veterinário", color: "#e74c3c", bg: "#fde8e8" },
  { icon: Bath, title: "Banho & Tosa", color: "#2563eb", bg: "#dbeafe" },
  { icon: Scissors, title: "Tosa Higiênica", color: "#7c3aed", bg: "#ede9fe" },
  { icon: Heart, title: "Adote um Pet", color: "#16a34a", bg: "#dcfce7" },
  { icon: Truck, title: "Entrega Rápida", color: "#f97316", bg: "#ffedd5" },
];

const navCategories = [
  "Cachorro", "Gato", "Rações", "Petiscos", "Higiene",
  "Farmácia", "Brinquedos", "Acessórios", "Promoções", "Serviços",
];

const Categories = () => {
  const [activeNav, setActiveNav] = useState("Cachorro");
  const [hoveredService, setHoveredService] = useState<string | null>(null);

  return (
    <>
      {/* Barra de navegação de categorias — estilo Petz */}
      <nav className="border-b overflow-x-auto" style={{ borderColor: "var(--borda)" }}>
        <div className="max-w-[1100px] mx-auto flex items-center gap-0">
          {navCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveNav(cat)}
              className="relative px-5 py-3.5 text-sm font-medium whitespace-nowrap transition-colors duration-200"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                color: activeNav === cat ? "var(--verde)" : "var(--txt2)",
                fontWeight: activeNav === cat ? 600 : 400,
              }}
            >
              {cat}
              {/* Underline animado */}
              <span
                className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[2.5px] rounded-full transition-all duration-300"
                style={{
                  width: activeNav === cat ? "60%" : "0%",
                  background: "var(--verde)",
                }}
              />
            </button>
          ))}
        </div>
      </nav>

      {/* Cards de serviços — estilo Petz clean */}
      <section className="py-10 px-4 bg-white">
        <div className="max-w-[1100px] mx-auto">
          <div className="flex items-center gap-4 overflow-x-auto pb-2 scrollbar-hide">
            {services.map((s) => {
              const Icon = s.icon;
              const isHovered = hoveredService === s.title;
              return (
                <div
                  key={s.title}
                  className="flex-shrink-0 flex items-center gap-3 rounded-2xl px-6 py-4 cursor-pointer transition-all duration-250"
                  style={{
                    background: isHovered ? s.bg : "#f5f5f4",
                    minWidth: 180,
                    transform: isHovered ? "translateY(-2px)" : "none",
                    boxShadow: isHovered ? `0 8px 24px ${s.color}20` : "none",
                  }}
                  onMouseEnter={() => setHoveredService(s.title)}
                  onMouseLeave={() => setHoveredService(null)}
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors duration-250"
                    style={{ background: isHovered ? s.color : "#e7e5e4" }}
                  >
                    <Icon size={20} style={{ color: isHovered ? "#fff" : s.color }} />
                  </div>
                  <span
                    className="text-sm font-semibold whitespace-nowrap transition-colors duration-200"
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      color: isHovered ? s.color : "var(--txt)",
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
    </>
  );
};

export default Categories;
