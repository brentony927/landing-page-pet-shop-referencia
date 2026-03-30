import { useState } from "react";
import { Badge } from "@/components/ui/badge";

const tabs = ["Cães", "Gatos", "Filhotes"] as const;

const products: Record<string, Array<{ name: string; weight: string; price: string; popular?: boolean }>> = {
  "Cães": [
    { name: "Ração Natural Frango & Arroz", weight: "15kg", price: "R$ 189,90", popular: true },
    { name: "Ração Cordeiro & Vegetais", weight: "12kg", price: "R$ 159,90" },
    { name: "Petiscos Funcionais Dental", weight: "500g", price: "R$ 34,90" },
    { name: "Ração Salmão & Batata Doce", weight: "10kg", price: "R$ 179,90", popular: true },
  ],
  "Gatos": [
    { name: "Ração Frango & Salmão Indoor", weight: "10kg", price: "R$ 169,90", popular: true },
    { name: "Sachê Mix Sabores (12un)", weight: "1kg", price: "R$ 49,90" },
    { name: "Petiscos Anti Bola de Pelo", weight: "300g", price: "R$ 29,90" },
    { name: "Ração Atum & Arroz", weight: "8kg", price: "R$ 139,90" },
  ],
  "Filhotes": [
    { name: "Ração Filhotes Frango", weight: "10kg", price: "R$ 149,90", popular: true },
    { name: "Sachê Filhotes Carne (8un)", weight: "800g", price: "R$ 39,90" },
    { name: "Ração Filhotes Raças Pequenas", weight: "6kg", price: "R$ 119,90" },
    { name: "Suplemento Crescimento", weight: "200g", price: "R$ 59,90", popular: true },
  ],
};

const emojis: Record<string, string> = { "Cães": "🐕", "Gatos": "🐈", "Filhotes": "🐾" };

const FoodProducts = () => {
  const [activeTab, setActiveTab] = useState<string>("Cães");

  return (
    <section id="racoes" className="py-20 bg-petshop-mint-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-4xl mb-3 block">🥣</span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-3">
            Rações & Petiscos
          </h2>
          <p className="text-muted-foreground text-lg max-w-md mx-auto">
            Alimentação de qualidade pra cada fase e cada paladar
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center gap-2 mb-10">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2.5 rounded-full font-bold text-sm transition-all duration-300 ${
                activeTab === tab
                  ? "bg-secondary text-secondary-foreground shadow-md"
                  : "bg-card text-muted-foreground hover:bg-border"
              }`}
            >
              {emojis[tab]} {tab}
            </button>
          ))}
        </div>

        {/* Products grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {products[activeTab].map((p) => (
            <div
              key={p.name}
              className="bg-card rounded-2xl p-5 shadow-sm border border-border hover-scale transition-all relative"
            >
              {p.popular && (
                <Badge className="absolute -top-2 -right-2 bg-accent text-accent-foreground border-0 font-bold text-xs">
                  🔥 Mais vendido
                </Badge>
              )}
              <div className="w-full h-32 bg-muted rounded-xl flex items-center justify-center mb-4 text-5xl">
                {emojis[activeTab]}
              </div>
              <h3 className="font-heading font-bold text-foreground text-sm mb-1 leading-tight">{p.name}</h3>
              <p className="text-muted-foreground text-xs mb-3">{p.weight}</p>
              <p className="font-heading text-xl font-bold text-primary">{p.price}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <button className="bg-secondary text-secondary-foreground font-bold px-8 py-3 rounded-full hover-scale shadow-md">
            Ver todos os produtos →
          </button>
        </div>
      </div>
    </section>
  );
};

export default FoodProducts;
