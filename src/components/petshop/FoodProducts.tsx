import { useState } from "react";
import { Star, Dog, Cat, PawPrint, Bird, Fish } from "lucide-react";
import { useInView } from "@/hooks/useInView";

const categories = [
  { label: "Cães", icon: Dog, key: "dogs" },
  { label: "Gatos", icon: Cat, key: "cats" },
  { label: "Filhotes", icon: PawPrint, key: "puppies" },
  { label: "Pássaros", icon: Bird, key: "birds" },
  { label: "Peixes", icon: Fish, key: "fish" },
];

const products: Record<string, Array<{ name: string; rating: number; popular?: boolean }>> = {
  dogs: [
    { name: "Ração Natural Frango & Arroz", rating: 4.8, popular: true },
    { name: "Ração Cordeiro & Vegetais", rating: 4.5 },
    { name: "Petiscos Dental Stick", rating: 4.7 },
    { name: "Ração Salmão & Batata Doce", rating: 4.9, popular: true },
  ],
  cats: [
    { name: "Ração Frango & Salmão Indoor", rating: 4.8, popular: true },
    { name: "Sachê Mix Sabores (12un)", rating: 4.3 },
    { name: "Petiscos Anti Bola de Pelo", rating: 4.6 },
    { name: "Ração Atum & Arroz", rating: 4.4 },
  ],
  puppies: [
    { name: "Ração Filhotes Frango", rating: 4.9, popular: true },
    { name: "Sachê Filhotes Carne (8un)", rating: 4.5 },
    { name: "Ração Raças Pequenas", rating: 4.7 },
    { name: "Suplemento Crescimento", rating: 4.6, popular: true },
  ],
  birds: [
    { name: "Mix Sementes Canário", rating: 4.5 },
    { name: "Ração Calopsita", rating: 4.7, popular: true },
    { name: "Farinhada com Ovo", rating: 4.3 },
    { name: "Petiscos Frutas Secas", rating: 4.4 },
  ],
  fish: [
    { name: "Ração Flocos Tropical", rating: 4.6, popular: true },
    { name: "Ração Betta", rating: 4.8 },
    { name: "Algas Spirulina", rating: 4.5 },
    { name: "Ração Kinguio Gold", rating: 4.3 },
  ],
};

const FoodProducts = () => {
  const [activeTab, setActiveTab] = useState("dogs");
  const [tabChanged, setTabChanged] = useState(false);
  const { ref, visible } = useInView(0.1);

  const handleTabChange = (key: string) => {
    if (key === activeTab) return;
    setTabChanged(true);
    setTimeout(() => {
      setActiveTab(key);
      setTabChanged(false);
    }, 150);
  };

  return (
    <section id="racoes" className="py-16 md:py-20 px-4 bg-white" ref={ref}>
      <div className="max-w-[1100px] mx-auto">
        <div className="flex items-end justify-between mb-10">
          <h2 className="text-2xl md:text-[2rem] font-black" style={{ fontFamily: "'Fraunces', Georgia, serif", color: "#1c1917" }}>
            Rações e petiscos
          </h2>
          <a href="https://wa.me/5569992216764" className="hidden md:block text-sm font-semibold hover:underline" style={{ color: "#16a34a" }}>
            Ver tudo →
          </a>
        </div>

        <div className="flex gap-2 mb-8 overflow-x-auto pb-2 scrollbar-hide">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeTab === cat.key;
            return (
              <button
                key={cat.key}
                onClick={() => handleTabChange(cat.key)}
                className="flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 whitespace-nowrap flex-shrink-0"
                style={{
                  background: isActive ? "#1c1917" : "#f5f5f4",
                  color: isActive ? "#fff" : "#78716c",
                }}
              >
                <Icon className="w-4 h-4" />
                {cat.label}
              </button>
            );
          })}
        </div>

        <div className={`grid grid-cols-2 lg:grid-cols-4 gap-4 transition-all duration-200 ${tabChanged ? "opacity-0 scale-[0.98]" : "opacity-100 scale-100"}`}>
          {products[activeTab].map((p, i) => {
            const isFirst = i === 0;
            return (
            <div
              key={p.name}
              className={`bg-white rounded-xl overflow-hidden transition-all duration-300 relative group cursor-pointer border hover:shadow-md ${
                isFirst ? "col-span-2 row-span-1 border-[#16a34a] border-[1.5px]" : "border-stone-200"
              } ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
              style={{ transitionDelay: `${i * 80}ms` }}
              onMouseEnter={(e) => e.currentTarget.style.transform = "translateY(-2px)"}
              onMouseLeave={(e) => e.currentTarget.style.transform = "none"}
            >
              {p.popular && (
                <span className={`absolute top-2 left-2 text-white font-bold text-[10px] z-10 px-2 py-1 rounded-md ${isFirst ? "bg-[#16a34a]" : "bg-[#1c1917]"}`}>
                  {isFirst ? "⭐ Queridinho" : "Popular"}
                </span>
              )}
              <div className={`bg-stone-100 w-full flex items-center justify-center ${isFirst ? "h-40 sm:h-52" : "h-28 sm:h-36"}`}>
                <span className="text-stone-300 text-xs">Foto do produto</span>
              </div>
              <div className={`${isFirst ? "p-4 sm:p-5" : "p-3 sm:p-4"}`}>
                <div className="flex items-center gap-0.5 mb-1.5">
                  {Array.from({ length: 5 }, (_, j) => (
                    <Star
                      key={j}
                      className={`${isFirst ? "w-4 h-4" : "w-3 h-3"} ${j < Math.floor(p.rating) ? "text-yellow-400 fill-yellow-400" : "text-stone-200"}`}
                    />
                  ))}
                  <span className="text-stone-400 text-[10px] ml-1">{p.rating}</span>
                </div>
                <h3 className={`font-bold text-stone-800 mb-3 leading-tight ${isFirst ? "text-base sm:text-lg" : "text-xs sm:text-sm"}`}>{p.name}</h3>
                <a
                  href="https://wa.me/5569992216764"
                  className={`font-semibold hover:underline ${isFirst ? "text-sm" : "text-xs"}`}
                  style={{ color: "#16a34a" }}
                >
                  Consultar preço →
                </a>
              </div>
            </div>
            );
          })}
        </div>

        <div className="text-center mt-10 md:hidden">
          <a href="https://wa.me/5569992216764" className="text-sm font-bold hover:underline" style={{ color: "#16a34a" }}>
            Ver todas as rações →
          </a>
        </div>
      </div>
    </section>
  );
};

export default FoodProducts;
