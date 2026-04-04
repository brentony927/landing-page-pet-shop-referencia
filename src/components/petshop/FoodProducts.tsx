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
    setTabChanged(true);
    setTimeout(() => {
      setActiveTab(key);
      setTabChanged(false);
    }, 150);
  };

  return (
    <section id="racoes" className="py-14 bg-background" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-black text-foreground">
            Ração que seu pet come até o fundo
          </h2>
        </div>

        <div className="flex gap-2 sm:gap-3 mb-10 overflow-x-auto pb-2 -mx-4 px-4 scrollbar-hide">
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <button
                key={cat.key}
                onClick={() => handleTabChange(cat.key)}
                className={`flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-md font-bold text-sm transition-all duration-200 whitespace-nowrap flex-shrink-0 ${
                  activeTab === cat.key
                    ? "bg-secondary text-secondary-foreground shadow-green"
                    : "bg-muted text-muted-foreground border border-border hover:border-secondary/40"
                }`}
              >
                <Icon className="w-4 h-4" />
                {cat.label}
              </button>
            );
          })}
        </div>

        <div className={`grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5 transition-all duration-150 ${tabChanged ? "opacity-0 translate-y-3" : "opacity-100 translate-y-0"}`}>
          {products[activeTab].map((p, i) => (
            <div
              key={p.name}
              className={`bg-background rounded-lg overflow-hidden transition-all duration-200 relative group cursor-pointer hover:-translate-y-1 hover:shadow-[0_8px_24px_hsl(142_72%_37%/0.12)] border border-border hover:border-secondary ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              {p.popular && (
                <span className="absolute top-2 left-2 sm:top-3 sm:left-3 bg-primary text-primary-foreground font-bold text-[10px] sm:text-xs z-10 px-2 py-0.5 sm:py-1 rounded-md">
                  Queridinho
                </span>
              )}
              <div className="bg-muted w-full h-24 sm:h-32 flex items-center justify-center">
                <span className="text-muted-foreground/40 text-xs sm:text-sm">A SUA IMAGEM AQUI</span>
              </div>
              <div className="p-3 sm:p-4">
                <div className="flex items-center gap-0.5 mb-1 sm:mb-2">
                  {Array.from({ length: 5 }, (_, j) => (
                    <Star
                      key={j}
                      className={`w-3 h-3 sm:w-3.5 sm:h-3.5 ${j < Math.floor(p.rating) ? "text-accent fill-accent" : "text-border"}`}
                    />
                  ))}
                  <span className="text-muted-foreground text-[10px] sm:text-xs ml-1">{p.rating}</span>
                </div>
                <h3 className="font-bold text-foreground text-xs sm:text-sm mb-2 leading-tight">{p.name}</h3>
                <div className="flex items-center justify-between">
                  <p className="text-sm sm:text-base font-bold" style={{ color: "var(--verde)" }}>Consulte</p>
                  <a href="https://wa.me/5569992216764" className="w-7 h-7 sm:w-8 sm:h-8 rounded-md bg-secondary flex items-center justify-center text-secondary-foreground text-sm font-bold hover:bg-secondary/90 transition-all duration-200">
                    +
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a href="https://wa.me/5569992216764" className="bg-secondary text-secondary-foreground font-bold px-8 py-3 rounded-md text-sm uppercase tracking-wider hover:-translate-y-0.5 hover:shadow-[0_6px_20px_hsl(142_72%_37%/0.3)] transition-all duration-200 inline-block">
            Ver tudo →
          </a>
        </div>
      </div>
    </section>
  );
};

export default FoodProducts;
