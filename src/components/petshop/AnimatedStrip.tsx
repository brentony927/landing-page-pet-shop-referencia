import { Bath, Scissors, Bone, Cat, Truck, Pill, Star, Package } from "lucide-react";

const items = [
  { icon: Bath, text: "Banho & Tosa" },
  { icon: Scissors, text: "Tosa Higiênica" },
  { icon: Bone, text: "Rações de Qualidade" },
  { icon: Cat, text: "Gatos e Cães" },
  { icon: Truck, text: "Busca e Entrega" },
  { icon: Pill, text: "Produtos Veterinários" },
  { icon: Star, text: "12 Anos de Bairro" },
  { icon: Package, text: "Entrega no Dia" },
];

const AnimatedStrip = () => {
  return (
    <div className="overflow-hidden py-3" style={{ background: "#1b4332" }}>
      <div className="flex gap-12 w-max animate-scrollX">
        {[...items, ...items].map((item, i) => {
          const Icon = item.icon;
          return (
            <span key={i} className="text-white text-sm font-medium whitespace-nowrap flex items-center gap-2" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              <Icon className="w-4 h-4" style={{ color: "#e07b39" }} />
              {item.text}
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default AnimatedStrip;
