import { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";

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

  return (
    <section id="racoes" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <p className="text-primary font-bold text-sm uppercase tracking-wider mb-2">Categorias</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground uppercase">
            RAÇÕES & PRODUTOS
          </h2>
        </div>

        {/* Category tabs */}
        <div className="flex justify-center gap-3 mb-12 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveTab(cat.key)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-bold text-sm transition-all duration-300 ${
                activeTab === cat.key
                  ? "bg-petshop-teal text-primary-foreground shadow-md"
                  : "bg-muted text-muted-foreground hover:bg-border"
              }`}
            >
              <span className="text-lg">{cat.emoji}</span>
              {cat.label}
            </button>
          ))}
        </div>

        {/* Products grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {products[activeTab].map((p) => (
            <div
              key={p.name}
              className="bg-background rounded-2xl overflow-hidden shadow-sm border border-border hover-scale transition-all relative group"
            >
              {p.popular && (
                <Badge className="absolute top-3 left-3 bg-accent text-accent-foreground border-0 font-bold text-xs z-10">
                  🔥 Destaque
                </Badge>
              )}
              <div className={`${p.bg} w-full h-40 flex items-center justify-center`}>
                <span className="text-6xl group-hover:scale-110 transition-transform duration-300">
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
                  <button className="w-8 h-8 rounded-full bg-petshop-teal flex items-center justify-center text-primary-foreground text-sm font-bold hover:bg-petshop-teal-light transition-colors">
                    +
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <button className="bg-petshop-teal text-primary-foreground font-bold px-8 py-3 rounded-full text-sm uppercase tracking-wider hover-scale shadow-md">
            VER TODOS OS PRODUTOS →
          </button>
        </div>
      </div>
    </section>
  );
};

export default FoodProducts;
