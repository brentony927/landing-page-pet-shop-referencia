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

const products: Record<string, Array<{ name: string; price: string; rating: number; popular?: boolean }>> = {
  dogs: [
    { name: "Ração Natural Frango & Arroz", price: "R$ 189,90", rating: 4.8, popular: true },
    { name: "Ração Cordeiro & Vegetais", price: "R$ 159,90", rating: 4.5 },
    { name: "Petiscos Dental Stick", price: "R$ 34,90", rating: 4.7 },
    { name: "Ração Salmão & Batata Doce", price: "R$ 179,90", rating: 4.9, popular: true },
  ],
  cats: [
    { name: "Ração Frango & Salmão Indoor", price: "R$ 169,90", rating: 4.8, popular: true },
    { name: "Sachê Mix Sabores (12un)", price: "R$ 49,90", rating: 4.3 },
    { name: "Petiscos Anti Bola de Pelo", price: "R$ 29,90", rating: 4.6 },
    { name: "Ração Atum & Arroz", price: "R$ 139,90", rating: 4.4 },
  ],
  puppies: [
    { name: "Ração Filhotes Frango", price: "R$ 149,90", rating: 4.9, popular: true },
    { name: "Sachê Filhotes Carne (8un)", price: "R$ 39,90", rating: 4.5 },
    { name: "Ração Raças Pequenas", price: "R$ 119,90", rating: 4.7 },
    { name: "Suplemento Crescimento", price: "R$ 59,90", rating: 4.6, popular: true },
  ],
  birds: [
    { name: "Mix Sementes Canário", price: "R$ 24,90", rating: 4.5 },
    { name: "Ração Calopsita", price: "R$ 32,90", rating: 4.7, popular: true },
    { name: "Farinhada com Ovo", price: "R$ 19,90", rating: 4.3 },
    { name: "Petiscos Frutas Secas", price: "R$ 15,90", rating: 4.4 },
  ],
  fish: [
    { name: "Ração Flocos Tropical", price: "R$ 18,90", rating: 4.6, popular: true },
    { name: "Ração Betta", price: "R$ 14,90", rating: 4.8 },
    { name: "Algas Spirulina", price: "R$ 22,90", rating: 4.5 },
    { name: "Ração Kinguio Gold", price: "R$ 16,90", rating: 4.3 },
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
    <section id="racoes" className="py-14 bg-muted/30" ref={ref}>
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
                    ? "bg-primary text-primary-foreground shadow-orange"
                    : "bg-background text-muted-foreground border border-border hover:border-primary/40"
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
              className={`bg-background rounded-lg overflow-hidden transition-all duration-200 relative group cursor-pointer hover:-translate-y-1 hover:shadow-md border border-border hover:border-primary/40 ${
                i === 0 && p.popular ? "border-primary bg-primary/3" : ""
              } ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              {p.popular && (
                <span className="absolute top-2 left-2 sm:top-3 sm:left-3 bg-accent text-accent-foreground font-bold text-[10px] sm:text-xs z-10 px-2 py-0.5 sm:py-1 rounded-md">
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
                  <p className="text-lg sm:text-xl font-black text-primary">{p.price}</p>
                  <a href="https://wa.me/5569992216764" className="w-7 h-7 sm:w-8 sm:h-8 rounded-md bg-primary flex items-center justify-center text-primary-foreground text-sm font-bold hover:bg-primary/90 transition-all duration-200">
                    +
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a href="https://wa.me/5569992216764" className="bg-primary text-primary-foreground font-bold px-8 py-3 rounded-md text-sm uppercase tracking-wider hover:-translate-y-0.5 hover:shadow-[0_6px_20px_hsl(18_100%_59%/0.35)] transition-all duration-200 inline-block">
            Ver tudo →
          </a>
        </div>
      </div>
    </section>
  );
};

export default FoodProducts;
