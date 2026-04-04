import { useState, useRef } from "react";
import { Bath, Bone, Scissors, Truck, Stethoscope, Heart } from "lucide-react";

const services = [
  { icon: Stethoscope, title: "Veterinário", color: "#e74c3c", bg: "#fde8e8", emoji: "🐕‍⚕️" },
  { icon: Bath, title: "Banho & Tosa", color: "#2563eb", bg: "#dbeafe", emoji: "🐩" },
  { icon: Scissors, title: "Tosa Higiênica", color: "#7c3aed", bg: "#ede9fe", emoji: "✂️🐶" },
  { icon: Heart, title: "Adote um Pet", color: "#16a34a", bg: "#dcfce7", emoji: "🐱" },
  { icon: Truck, title: "Entrega Rápida", color: "#f97316", bg: "#ffedd5", emoji: "🐾" },
];

const navCategories = [
  "Cachorro", "Gato", "Rações", "Petiscos", "Higiene",
  "Farmácia", "Brinquedos", "Acessórios", "Promoções", "Serviços",
];

const Categories = () => {
  const [activeNav, setActiveNav] = useState("Cachorro");
  const [hoveredService, setHoveredService] = useState<string | null>(null);
  const [floatingEmoji, setFloatingEmoji] = useState<{ emoji: string; x: number; y: number; id: number } | null>(null);
  const idRef = useRef(0);

  const triggerEmoji = (e: React.MouseEvent, emoji: string) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top;
    idRef.current += 1;
    setFloatingEmoji({ emoji, x, y, id: idRef.current });
    setTimeout(() => setFloatingEmoji(null), 900);
  };

  return (
    <>
      {/* Barra de navegação de categorias */}
      <nav className="border-b overflow-x-auto bg-white" style={{ borderColor: "#e7e5e4" }}>
        <div className="max-w-[1100px] mx-auto flex items-center gap-0">
          {navCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveNav(cat)}
              className="relative px-5 py-3.5 text-sm font-medium whitespace-nowrap transition-colors duration-200"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                color: activeNav === cat ? "var(--verde)" : "#78716c",
                fontWeight: activeNav === cat ? 600 : 400,
              }}
            >
              {cat}
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
                    triggerEmoji(e, s.emoji);
                  }}
                  onMouseLeave={() => setHoveredService(null)}
                  onClick={(e) => triggerEmoji(e, s.emoji)}
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

      {/* Floating emoji animation */}
      {floatingEmoji && (
        <div
          key={floatingEmoji.id}
          className="fixed pointer-events-none z-[100]"
          style={{
            left: floatingEmoji.x - 16,
            top: floatingEmoji.y,
            animation: "navAnimalBounce 0.8s ease-out forwards",
          }}
        >
          <span className="text-3xl drop-shadow-lg">{floatingEmoji.emoji}</span>
        </div>
      )}
    </>
  );
};

export default Categories;
