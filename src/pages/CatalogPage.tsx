import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Star, Dog, Cat, PawPrint, Bird, Fish, Eye, MessageCircle, Search } from "lucide-react";
import Header from "@/components/petshop/Header";
import Footer from "@/components/petshop/Footer";
import WhatsAppButton from "@/components/petshop/WhatsAppButton";

const categories = [
  { label: "Todos", icon: Star, key: "all" },
  { label: "Cães", icon: Dog, key: "dogs" },
  { label: "Gatos", icon: Cat, key: "cats" },
  { label: "Filhotes", icon: PawPrint, key: "puppies" },
  { label: "Pássaros", icon: Bird, key: "birds" },
  { label: "Peixes", icon: Fish, key: "fish" },
];

const allProducts = [
  { name: "Ração Natural Frango & Arroz", rating: 4.8, popular: true, cat: "dogs" },
  { name: "Ração Cordeiro & Vegetais", rating: 4.5, cat: "dogs" },
  { name: "Petiscos Dental Stick", rating: 4.7, cat: "dogs" },
  { name: "Ração Salmão & Batata Doce", rating: 4.9, popular: true, cat: "dogs" },
  { name: "Ração Premium Adulto", rating: 4.6, cat: "dogs" },
  { name: "Biscoito Funcional", rating: 4.4, cat: "dogs" },
  { name: "Ração Frango & Salmão Indoor", rating: 4.8, popular: true, cat: "cats" },
  { name: "Sachê Mix Sabores (12un)", rating: 4.3, cat: "cats" },
  { name: "Petiscos Anti Bola de Pelo", rating: 4.6, cat: "cats" },
  { name: "Ração Atum & Arroz", rating: 4.4, cat: "cats" },
  { name: "Areia Higiênica Premium", rating: 4.7, cat: "cats" },
  { name: "Ração Filhotes Frango", rating: 4.9, popular: true, cat: "puppies" },
  { name: "Sachê Filhotes Carne (8un)", rating: 4.5, cat: "puppies" },
  { name: "Ração Raças Pequenas", rating: 4.7, cat: "puppies" },
  { name: "Suplemento Crescimento", rating: 4.6, popular: true, cat: "puppies" },
  { name: "Mix Sementes Canário", rating: 4.5, cat: "birds" },
  { name: "Ração Calopsita", rating: 4.7, popular: true, cat: "birds" },
  { name: "Farinhada com Ovo", rating: 4.3, cat: "birds" },
  { name: "Ração Flocos Tropical", rating: 4.6, popular: true, cat: "fish" },
  { name: "Ração Betta", rating: 4.8, cat: "fish" },
  { name: "Algas Spirulina", rating: 4.5, cat: "fish" },
];

const CatalogPage = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [search, setSearch] = useState("");

  const filtered = allProducts
    .filter((p) => activeTab === "all" || p.cat === activeTab)
    .filter((p) => p.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div style={{ paddingTop: "calc(64px + 32px)" }}>
        {/* Top bar */}
        <section className="py-8 md:py-12 px-4" style={{ background: "#fafaf9" }}>
          <div className="max-w-[1100px] mx-auto">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-sm font-medium mb-6 transition-colors duration-200"
              style={{ color: "#57534e" }}
              onMouseEnter={(e) => e.currentTarget.style.color = "#16a34a"}
              onMouseLeave={(e) => e.currentTarget.style.color = "#57534e"}
            >
              <ArrowLeft className="w-4 h-4" />
              Voltar ao início
            </Link>
            <h1 className="text-3xl md:text-4xl font-black mb-3" style={{ fontFamily: "'Fraunces', Georgia, serif", color: "#1c1917" }}>
              Catálogo de Rações
            </h1>
            <p className="text-base" style={{ color: "#78716c" }}>
              Encontre a ração ideal para o seu pet. Consulte preços pelo WhatsApp.
            </p>
          </div>
        </section>

        {/* Filters + Search */}
        <section className="py-6 px-4 border-b" style={{ borderColor: "#e7e5e4" }}>
          <div className="max-w-[1100px] mx-auto">
            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
              <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
                {categories.map((cat) => {
                  const Icon = cat.icon;
                  const isActive = activeTab === cat.key;
                  return (
                    <button
                      key={cat.key}
                      onClick={() => setActiveTab(cat.key)}
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
              <div className="relative w-full sm:w-64">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4" style={{ color: "#a8a29e" }} />
                <input
                  type="text"
                  placeholder="Buscar ração..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 rounded-lg border text-sm outline-none transition-all duration-200 focus:border-[#16a34a] focus:ring-2 focus:ring-[#16a34a]/10"
                  style={{ borderColor: "#e7e5e4", color: "#1c1917" }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Products grid */}
        <section className="py-10 px-4">
          <div className="max-w-[1100px] mx-auto">
            <p className="text-sm mb-6" style={{ color: "#a8a29e" }}>{filtered.length} produtos encontrados</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {filtered.map((p) => (
                <div
                  key={p.name}
                  className="bg-white rounded-xl overflow-hidden transition-all duration-300 relative group cursor-pointer border border-stone-200 hover:shadow-md"
                  onMouseEnter={(e) => e.currentTarget.style.transform = "translateY(-2px)"}
                  onMouseLeave={(e) => e.currentTarget.style.transform = "none"}
                >
                  {p.popular && (
                    <span className="absolute top-2 left-2 bg-[#16a34a] text-white font-bold text-[10px] z-10 px-2 py-1 rounded-md">
                      Popular
                    </span>
                  )}
                  <div className="bg-stone-100 w-full h-36 flex items-center justify-center">
                    <span className="text-stone-300 text-xs">Foto do produto</span>
                  </div>
                  <div className="p-4">
                    <div className="flex items-center gap-0.5 mb-1.5">
                      {Array.from({ length: 5 }, (_, j) => (
                        <Star key={j} className={`w-3 h-3 ${j < Math.floor(p.rating) ? "text-yellow-400 fill-yellow-400" : "text-stone-200"}`} />
                      ))}
                      <span className="text-stone-400 text-[10px] ml-1">{p.rating}</span>
                    </div>
                    <h3 className="text-sm font-bold text-stone-800 mb-3 leading-tight">{p.name}</h3>
                    <div className="flex flex-col gap-2">
                      <a
                        href="https://wa.me/5569992216764"
                        className="flex items-center justify-center gap-1.5 rounded-lg py-2 text-xs font-bold text-white transition-all duration-200"
                        style={{ background: "#16a34a" }}
                      >
                        <MessageCircle className="w-3.5 h-3.5" />
                        Consultar preço
                      </a>
                      <button
                        className="flex items-center justify-center gap-1.5 rounded-lg py-2 text-xs font-semibold transition-all duration-200"
                        style={{ border: "1px solid #e7e5e4", color: "#57534e" }}
                        onMouseEnter={(e) => { e.currentTarget.style.borderColor = "#16a34a"; e.currentTarget.style.color = "#16a34a"; }}
                        onMouseLeave={(e) => { e.currentTarget.style.borderColor = "#e7e5e4"; e.currentTarget.style.color = "#57534e"; }}
                      >
                        <Eye className="w-3.5 h-3.5" />
                        Ver detalhes
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {filtered.length === 0 && (
              <div className="text-center py-16">
                <p className="text-lg font-semibold mb-2" style={{ color: "#57534e" }}>Nenhum produto encontrado</p>
                <p className="text-sm" style={{ color: "#a8a29e" }}>Tente buscar outro termo ou fale com a gente pelo WhatsApp.</p>
              </div>
            )}
          </div>
        </section>
      </div>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default CatalogPage;
