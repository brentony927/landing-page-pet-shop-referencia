import { useState, useEffect, useRef } from "react";
import { Star, Dog, Cat, PawPrint, Bird, Fish } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Icon3D from "./Icon3D";
import ImagePlaceholder from "./ImagePlaceholder";

const categories = [
  { label: "Cães", icon: Dog, key: "dogs", color: "orange" as const },
  { label: "Gatos", icon: Cat, key: "cats", color: "green" as const },
  { label: "Filhotes", icon: PawPrint, key: "puppies", color: "yellow" as const },
  { label: "Pássaros", icon: Bird, key: "birds", color: "teal" as const },
  { label: "Peixes", icon: Fish, key: "fish", color: "green" as const },
];

const products: Record<string, Array<{ name: string; price: string; rating: number; popular?: boolean; bg: string }>> = {
  dogs: [
    { name: "Ração Natural Frango & Arroz", price: "R$ 189,90", rating: 4.8, popular: true, bg: "bg-primary/10" },
    { name: "Ração Cordeiro & Vegetais", price: "R$ 159,90", rating: 4.5, bg: "bg-secondary/10" },
    { name: "Petiscos Dental Stick", price: "R$ 34,90", rating: 4.7, bg: "bg-accent/20" },
    { name: "Ração Salmão & Batata Doce", price: "R$ 179,90", rating: 4.9, popular: true, bg: "bg-primary/10" },
  ],
  cats: [
    { name: "Ração Frango & Salmão Indoor", price: "R$ 169,90", rating: 4.8, popular: true, bg: "bg-primary/10" },
    { name: "Sachê Mix Sabores (12un)", price: "R$ 49,90", rating: 4.3, bg: "bg-secondary/10" },
    { name: "Petiscos Anti Bola de Pelo", price: "R$ 29,90", rating: 4.6, bg: "bg-accent/20" },
    { name: "Ração Atum & Arroz", price: "R$ 139,90", rating: 4.4, bg: "bg-primary/10" },
  ],
  puppies: [
    { name: "Ração Filhotes Frango", price: "R$ 149,90", rating: 4.9, popular: true, bg: "bg-primary/10" },
    { name: "Sachê Filhotes Carne (8un)", price: "R$ 39,90", rating: 4.5, bg: "bg-secondary/10" },
    { name: "Ração Raças Pequenas", price: "R$ 119,90", rating: 4.7, bg: "bg-accent/20" },
    { name: "Suplemento Crescimento", price: "R$ 59,90", rating: 4.6, popular: true, bg: "bg-primary/10" },
  ],
  birds: [
    { name: "Mix Sementes Canário", price: "R$ 24,90", rating: 4.5, bg: "bg-accent/20" },
    { name: "Ração Calopsita", price: "R$ 32,90", rating: 4.7, popular: true, bg: "bg-primary/10" },
    { name: "Farinhada com Ovo", price: "R$ 19,90", rating: 4.3, bg: "bg-secondary/10" },
    { name: "Petiscos Frutas Secas", price: "R$ 15,90", rating: 4.4, bg: "bg-accent/20" },
  ],
  fish: [
    { name: "Ração Flocos Tropical", price: "R$ 18,90", rating: 4.6, popular: true, bg: "bg-secondary/10" },
    { name: "Ração Betta Premium", price: "R$ 14,90", rating: 4.8, bg: "bg-primary/10" },
    { name: "Algas Spirulina", price: "R$ 22,90", rating: 4.5, bg: "bg-primary/10" },
    { name: "Ração Kinguio Gold", price: "R$ 16,90", rating: 4.3, bg: "bg-accent/20" },
  ],
};

const FoodProducts = () => {
  const [activeTab, setActiveTab] = useState("dogs");
  const [visible, setVisible] = useState(false);
  const [tabChanged, setTabChanged] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const handleTabChange = (key: string) => {
    setTabChanged(true);
    setTimeout(() => {
      setActiveTab(key);
      setTabChanged(false);
    }, 200);
  };

  const activeCat = categories.find(c => c.key === activeTab);

  return (
    <section id="racoes" className="py-20 bg-card" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-8 mb-12">
          <div className="flex-1 text-center lg:text-left">
            <p className="text-primary font-bold text-sm uppercase tracking-wider mb-2">Categorias</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground uppercase">
              RAÇÕES & PRODUTOS
            </h2>
            <p className="text-muted-foreground mt-3 max-w-md">
              Selecionamos as melhores marcas do mercado para cada fase da vida do seu pet.
            </p>
          </div>
          <div className={`flex-shrink-0 transition-all duration-700 ${visible ? "opacity-100 scale-100" : "opacity-0 scale-75"}`}>
            <ImagePlaceholder className="w-48 h-48 md:w-56 md:h-56" />
          </div>
        </div>

        <div className="flex justify-center gap-3 mb-12 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => handleTabChange(cat.key)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-bold text-sm transition-all duration-300 hover:-translate-y-0.5 ${
                activeTab === cat.key
                  ? "bg-petshop-teal text-primary-foreground shadow-md scale-105"
                  : "bg-muted text-muted-foreground hover:bg-border"
              }`}
            >
              <Icon3D icon={cat.icon} size="sm" color={cat.color} animate="none" className="!w-6 !h-6 !rounded-lg" />
              {cat.label}
            </button>
          ))}
        </div>

        <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 transition-all duration-300 ${tabChanged ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"}`}>
          {products[activeTab].map((p, i) => (
            <div
              key={p.name}
              className={`bg-background rounded-2xl overflow-hidden shadow-sm border border-border transition-all duration-500 relative group cursor-pointer hover:-translate-y-2 hover:shadow-lg ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {p.popular && (
                <Badge className="absolute top-3 left-3 bg-accent text-accent-foreground border-0 font-bold text-xs z-10">
                  Destaque
                </Badge>
              )}
              <div className={`${p.bg} w-full h-40 flex items-center justify-center`}>
                {activeCat && (
                  <Icon3D icon={activeCat.icon} size="lg" color={activeCat.color} animate="float" />
                )}
              </div>
              <div className="p-4">
                <div className="flex items-center gap-1 mb-2">
                  {Array.from({ length: 5 }, (_, i) => (
                    <Star
                      key={i}
                      className={`w-3.5 h-3.5 ${i < Math.floor(p.rating) ? "text-accent fill-accent" : "text-border"}`}
                    />
                  ))}
                  <span className="text-muted-foreground text-xs ml-1">{p.rating}</span>
                </div>
                <h3 className="font-heading font-bold text-foreground text-sm mb-2 leading-tight">{p.name}</h3>
                <div className="flex items-center justify-between">
                  <p className="font-heading text-xl font-bold text-primary">{p.price}</p>
                  <button className="w-8 h-8 rounded-full bg-petshop-teal flex items-center justify-center text-primary-foreground text-sm font-bold hover:bg-petshop-teal-light hover:scale-110 transition-all">
                    +
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <button className="bg-petshop-teal text-primary-foreground font-bold px-8 py-3 rounded-full text-sm uppercase tracking-wider shadow-md hover:-translate-y-1 transition-transform duration-300">
            VER TODOS OS PRODUTOS →
          </button>
        </div>
      </div>
    </section>
  );
};

export default FoodProducts;
