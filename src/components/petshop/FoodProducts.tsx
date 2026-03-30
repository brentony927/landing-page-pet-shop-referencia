import { useState, useEffect, useRef } from "react";
import { Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import racaoPetImg from "@/assets/racao-pet.png";

const categories = [
  { label: "Cães", emoji: "🐕", key: "dogs" },
  { label: "Gatos", emoji: "🐈", key: "cats" },
  { label: "Filhotes", emoji: "🐾", key: "puppies" },
  { label: "Pássaros", emoji: "🐦", key: "birds" },
  { label: "Peixes", emoji: "🐟", key: "fish" },
];

const products: Record<string, Array<{ name: string; price: string; rating: number; popular?: boolean; bg: string }>> = {
  dogs: [
    { name: "Ração Natural Frango & Arroz", price: "R$ 189,90", rating: 4.8, popular: true, bg: "bg-petshop-coral" },
    { name: "Ração Cordeiro & Vegetais", price: "R$ 159,90", rating: 4.5, bg: "bg-secondary" },
    { name: "Petiscos Dental Stick", price: "R$ 34,90", rating: 4.7, bg: "bg-petshop-purple" },
    { name: "Ração Salmão & Batata Doce", price: "R$ 179,90", rating: 4.9, popular: true, bg: "bg-primary" },
  ],
  cats: [
    { name: "Ração Frango & Salmão Indoor", price: "R$ 169,90", rating: 4.8, popular: true, bg: "bg-petshop-coral" },
    { name: "Sachê Mix Sabores (12un)", price: "R$ 49,90", rating: 4.3, bg: "bg-secondary" },
    { name: "Petiscos Anti Bola de Pelo", price: "R$ 29,90", rating: 4.6, bg: "bg-petshop-purple" },
    { name: "Ração Atum & Arroz", price: "R$ 139,90", rating: 4.4, bg: "bg-primary" },
  ],
  puppies: [
    { name: "Ração Filhotes Frango", price: "R$ 149,90", rating: 4.9, popular: true, bg: "bg-petshop-coral" },
    { name: "Sachê Filhotes Carne (8un)", price: "R$ 39,90", rating: 4.5, bg: "bg-secondary" },
    { name: "Ração Raças Pequenas", price: "R$ 119,90", rating: 4.7, bg: "bg-petshop-purple" },
    { name: "Suplemento Crescimento", price: "R$ 59,90", rating: 4.6, popular: true, bg: "bg-primary" },
  ],
  birds: [
    { name: "Mix Sementes Canário", price: "R$ 24,90", rating: 4.5, bg: "bg-accent" },
    { name: "Ração Calopsita", price: "R$ 32,90", rating: 4.7, popular: true, bg: "bg-petshop-coral" },
    { name: "Farinhada com Ovo", price: "R$ 19,90", rating: 4.3, bg: "bg-secondary" },
    { name: "Petiscos Frutas Secas", price: "R$ 15,90", rating: 4.4, bg: "bg-petshop-purple" },
  ],
  fish: [
    { name: "Ração Flocos Tropical", price: "R$ 18,90", rating: 4.6, popular: true, bg: "bg-secondary" },
    { name: "Ração Betta Premium", price: "R$ 14,90", rating: 4.8, bg: "bg-petshop-coral" },
    { name: "Algas Spirulina", price: "R$ 22,90", rating: 4.5, bg: "bg-primary" },
    { name: "Ração Kinguio Gold", price: "R$ 16,90", rating: 4.3, bg: "bg-petshop-purple" },
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

  return (
    <section id="racoes" className="py-20 bg-card" ref={ref}>
      <div className="container mx-auto px-4">
        {/* Header with image */}
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
          <div className={`w-48 h-48 md:w-56 md:h-56 flex-shrink-0 transition-all duration-700 ${visible ? "opacity-100 scale-100" : "opacity-0 scale-75"}`}>
            <img src={racaoPetImg} alt="Ração pet" className="w-full h-full object-contain drop-shadow-xl" />
          </div>
        </div>

        {/* Category tabs */}
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
              <span className="text-lg">{cat.emoji}</span>
              {cat.label}
            </button>
          ))}
        </div>

        {/* Products grid */}
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
                  🔥 Destaque
                </Badge>
              )}
              <div className={`${p.bg} w-full h-40 flex items-center justify-center`}>
                <span className="text-6xl group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                  {categories.find(c => c.key === activeTab)?.emoji}
                </span>
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
