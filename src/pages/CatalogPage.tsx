import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Star, Dog, Cat, PawPrint, Bird, Fish, MessageCircle, Search, ShoppingBag } from "lucide-react";
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
  { name: "Pedigree Raças Grandes 15kg", rating: 4.8, popular: true, cat: "dogs", img: "https://m.media-amazon.com/images/I/61NkDGqZGKL._AC_SL1000_.jpg" },
  { name: "Pedigree Nutrição Essencial 15kg", rating: 4.6, cat: "dogs", img: "https://m.media-amazon.com/images/I/61NkDGqZGKL._AC_SL1000_.jpg" },
  { name: "Royal Canin Medium Adult 15kg", rating: 4.9, popular: true, cat: "dogs", img: "https://m.media-amazon.com/images/I/71YJpMVeURL._AC_SL1500_.jpg" },
  { name: "Golden Fórmula Frango & Arroz 15kg", rating: 4.7, cat: "dogs", img: "https://m.media-amazon.com/images/I/51kq3cZFYbL._AC_SL1000_.jpg" },
  { name: "Magnus Premium Adulto 15kg", rating: 4.5, cat: "dogs", img: "https://m.media-amazon.com/images/I/61mCjv+BYPL._AC_SL1000_.jpg" },
  { name: "Dog Chow Adulto Carne 15kg", rating: 4.6, cat: "dogs", img: "https://m.media-amazon.com/images/I/71yNBaX-XML._AC_SL1500_.jpg" },
  { name: "Pedigree Dentastix", rating: 4.7, cat: "dogs", img: "https://m.media-amazon.com/images/I/71+mz+CXAOL._AC_SL1500_.jpg" },
  { name: "Whiskas Frango Adulto 10kg", rating: 4.8, popular: true, cat: "cats", img: "https://m.media-amazon.com/images/I/61H5xt5ELPL._AC_SL1000_.jpg" },
  { name: "Royal Canin Indoor 7.5kg", rating: 4.9, popular: true, cat: "cats", img: "https://m.media-amazon.com/images/I/71neSqVmC1L._AC_SL1500_.jpg" },
  { name: "Golden Gatos Castrados 10kg", rating: 4.6, cat: "cats", img: "https://m.media-amazon.com/images/I/51jz0e7W+5L._AC_SL1000_.jpg" },
  { name: "Cat Chow Adulto Peixe 10kg", rating: 4.4, cat: "cats", img: "https://m.media-amazon.com/images/I/71qBU-SncQL._AC_SL1500_.jpg" },
  { name: "Royal Canin Puppy Medium 15kg", rating: 4.9, popular: true, cat: "puppies", img: "https://m.media-amazon.com/images/I/71kqhBmDK5L._AC_SL1500_.jpg" },
  { name: "Pedigree Filhotes 10kg", rating: 4.7, cat: "puppies", img: "https://m.media-amazon.com/images/I/71MFVVHEL6L._AC_SL1500_.jpg" },
  { name: "Golden Filhotes Frango 15kg", rating: 4.8, popular: true, cat: "puppies", img: "https://m.media-amazon.com/images/I/51ZrFJ+m6CL._AC_SL1000_.jpg" },
  { name: "Alcon Club Mix Canário 500g", rating: 4.5, cat: "birds", img: "https://m.media-amazon.com/images/I/71kVGeNe5TL._AC_SL1500_.jpg" },
  { name: "Alcon Calopsita 500g", rating: 4.7, popular: true, cat: "birds", img: "https://m.media-amazon.com/images/I/61AHXE1v8XL._AC_SL1000_.jpg" },
  { name: "Tetra ColorBits 75g", rating: 4.6, popular: true, cat: "fish", img: "https://m.media-amazon.com/images/I/71hOIQCDRKL._AC_SL1500_.jpg" },
  { name: "Alcon Betta 10g", rating: 4.8, cat: "fish", img: "https://m.media-amazon.com/images/I/61DqYfnhMRL._AC_SL1000_.jpg" },
];

const WA = "https://wa.me/5569992216764";

const CatalogPage = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [search, setSearch] = useState("");

  const filtered = allProducts
    .filter(p => activeTab === "all" || p.cat === activeTab)
    .filter(p => p.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero */}
      <div className="pt-14 md:pt-[92px]">
        <section className="py-8 sm:py-12 px-4" style={{ background: "linear-gradient(135deg, #0D47A1 0%, #1565C0 100%)" }}>
          <div className="max-w-[1100px] mx-auto">
            <Link to="/" className="inline-flex items-center gap-2 text-sm font-medium mb-5 text-white/70 hover:text-white transition-colors">
              <ArrowLeft className="w-4 h-4" /> Voltar ao início
            </Link>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center" style={{ background: "rgba(255,179,0,0.2)" }}>
                <ShoppingBag className="w-6 h-6" style={{ color: "#FFB300" }} />
              </div>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white" style={{ fontFamily: "'Baloo 2', cursive" }}>
                Catálogo de Produtos
              </h1>
            </div>
            <p className="text-sm text-white/65">Encontre a ração ideal. Consulte preços pelo WhatsApp.</p>
          </div>
        </section>

        {/* Filters */}
        <section className="py-4 px-4 sticky top-14 md:top-16 z-30 bg-white" style={{ borderBottom: "1.5px solid #f0f0f0", boxShadow: "0 2px 8px rgba(0,0,0,0.04)" }}>
          <div className="max-w-[1100px] mx-auto flex flex-col sm:flex-row gap-3 items-start sm:items-center justify-between">
            <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide w-full sm:w-auto">
              {categories.map(cat => {
                const active = activeTab === cat.key;
                return (
                  <button key={cat.key} onClick={() => setActiveTab(cat.key)} className="flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold transition-all whitespace-nowrap flex-shrink-0" style={{ background: active ? "#F5851F" : "#f5f5f5", color: active ? "#fff" : "#666", boxShadow: active ? "0 4px 12px rgba(245,133,31,0.25)" : "none" }}>
                    <cat.icon className="w-3.5 h-3.5" />
                    {cat.label}
                  </button>
                );
              })}
            </div>
            <div className="relative w-full sm:w-56">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4" style={{ color: "#bbb" }} />
              <input type="text" placeholder="Buscar..." value={search} onChange={e => setSearch(e.target.value)} className="w-full pl-9 pr-4 py-2 rounded-xl text-sm outline-none bg-gray-50 transition-all focus:ring-2 focus:ring-blue-100" style={{ border: "1.5px solid #eee", color: "#333" }} />
            </div>
          </div>
        </section>

        {/* Products */}
        <section className="py-8 sm:py-10 px-4">
          <div className="max-w-[1100px] mx-auto">
            <p className="text-xs font-medium mb-5" style={{ color: "#999" }}>{filtered.length} produtos encontrados</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
              {filtered.map(p => (
                <div key={p.name} className="bg-white rounded-[18px] overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg group" style={{ border: "1.5px solid #f0f0f0", boxShadow: "0 2px 8px rgba(0,0,0,0.03)" }}>
                  {p.popular && (
                    <span className="absolute top-2 left-2 text-white font-bold text-[9px] z-10 px-2 py-0.5 rounded-full" style={{ background: "#F5851F" }}>⭐ Popular</span>
                  )}
                  <div className="relative bg-gray-50 w-full h-36 sm:h-40 flex items-center justify-center p-4">
                    <img src={p.img} alt={p.name} className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300" loading="lazy" onError={e => { (e.target as HTMLImageElement).style.display = "none"; }} />
                  </div>
                  <div className="p-3.5 sm:p-4">
                    <div className="flex items-center gap-0.5 mb-1.5">
                      {Array.from({ length: 5 }, (_, j) => (
                        <Star key={j} className={`w-3 h-3 ${j < Math.floor(p.rating) ? "fill-current" : ""}`} style={{ color: j < Math.floor(p.rating) ? "#FFB300" : "#e0e0e0" }} />
                      ))}
                      <span className="text-[10px] ml-1" style={{ color: "#999" }}>{p.rating}</span>
                    </div>
                    <h3 className="text-[13px] font-bold mb-3 leading-tight" style={{ color: "#1a3a5c" }}>{p.name}</h3>
                    <a href={`${WA}?text=${encodeURIComponent(`Oi, quero saber o preço: ${p.name}`)}`} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-1.5 rounded-xl py-2.5 text-xs font-bold text-white transition-all hover:-translate-y-0.5 active:scale-95" style={{ background: "#F5851F", boxShadow: "0 4px 12px rgba(245,133,31,0.25)" }}>
                      <MessageCircle className="w-3.5 h-3.5" /> Consultar preço
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {filtered.length === 0 && (
              <div className="text-center py-16">
                <p className="text-lg font-bold mb-2" style={{ color: "#1a3a5c" }}>Nenhum produto encontrado</p>
                <p className="text-sm" style={{ color: "#999" }}>Tente outro termo ou fale pelo WhatsApp.</p>
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
