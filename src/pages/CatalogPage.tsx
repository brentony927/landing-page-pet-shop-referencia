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
  // Cães
  { name: "Pedigree Raças Grandes 15kg", rating: 4.8, popular: true, cat: "dogs", img: "https://www.pfrfrfr.com.br/on/demandware.static/-/Sites-BR-Library/default/dw6f5c9d08/Pedigree/pedigree-racas-grandes.png" },
  { name: "Pedigree Nutrição Essencial 15kg", rating: 4.6, cat: "dogs", img: "https://m.media-amazon.com/images/I/61NkDGqZGKL._AC_SL1000_.jpg" },
  { name: "Royal Canin Medium Adult 15kg", rating: 4.9, popular: true, cat: "dogs", img: "https://m.media-amazon.com/images/I/71YJpMVeURL._AC_SL1500_.jpg" },
  { name: "Golden Fórmula Frango & Arroz 15kg", rating: 4.7, cat: "dogs", img: "https://m.media-amazon.com/images/I/51kq3cZFYbL._AC_SL1000_.jpg" },
  { name: "Magnus Premium Adulto 15kg", rating: 4.5, cat: "dogs", img: "https://m.media-amazon.com/images/I/61mCjv+BYPL._AC_SL1000_.jpg" },
  { name: "Dog Chow Adulto Carne 15kg", rating: 4.6, cat: "dogs", img: "https://m.media-amazon.com/images/I/71yNBaX-XML._AC_SL1500_.jpg" },
  { name: "Whiskas Sachê Carne 85g (12un)", rating: 4.4, cat: "dogs", img: "https://m.media-amazon.com/images/I/71MbqXqoj3L._AC_SL1500_.jpg" },
  { name: "Pedigree Dentastix", rating: 4.7, cat: "dogs", img: "https://m.media-amazon.com/images/I/71+mz+CXAOL._AC_SL1500_.jpg" },
  // Gatos
  { name: "Whiskas Frango Adulto 10kg", rating: 4.8, popular: true, cat: "cats", img: "https://m.media-amazon.com/images/I/61H5xt5ELPL._AC_SL1000_.jpg" },
  { name: "Royal Canin Indoor 7.5kg", rating: 4.9, popular: true, cat: "cats", img: "https://m.media-amazon.com/images/I/71neSqVmC1L._AC_SL1500_.jpg" },
  { name: "Golden Gatos Castrados 10kg", rating: 4.6, cat: "cats", img: "https://m.media-amazon.com/images/I/51jz0e7W+5L._AC_SL1000_.jpg" },
  { name: "Whiskas Sachê Mix (12un)", rating: 4.5, cat: "cats", img: "https://m.media-amazon.com/images/I/81XHONpCURL._AC_SL1500_.jpg" },
  { name: "Cat Chow Adulto Peixe 10kg", rating: 4.4, cat: "cats", img: "https://m.media-amazon.com/images/I/71qBU-SncQL._AC_SL1500_.jpg" },
  // Filhotes
  { name: "Royal Canin Puppy Medium 15kg", rating: 4.9, popular: true, cat: "puppies", img: "https://m.media-amazon.com/images/I/71kqhBmDK5L._AC_SL1500_.jpg" },
  { name: "Pedigree Filhotes 10kg", rating: 4.7, cat: "puppies", img: "https://m.media-amazon.com/images/I/71MFVVHEL6L._AC_SL1500_.jpg" },
  { name: "Golden Filhotes Frango 15kg", rating: 4.8, popular: true, cat: "puppies", img: "https://m.media-amazon.com/images/I/51ZrFJ+m6CL._AC_SL1000_.jpg" },
  // Pássaros
  { name: "Alcon Club Mix Canário 500g", rating: 4.5, cat: "birds", img: "https://m.media-amazon.com/images/I/71kVGeNe5TL._AC_SL1500_.jpg" },
  { name: "Alcon Calopsita 500g", rating: 4.7, popular: true, cat: "birds", img: "https://m.media-amazon.com/images/I/61AHXE1v8XL._AC_SL1000_.jpg" },
  // Peixes
  { name: "Tetra ColorBits 75g", rating: 4.6, popular: true, cat: "fish", img: "https://m.media-amazon.com/images/I/71hOIQCDRKL._AC_SL1500_.jpg" },
  { name: "Alcon Betta 10g", rating: 4.8, cat: "fish", img: "https://m.media-amazon.com/images/I/61DqYfnhMRL._AC_SL1000_.jpg" },
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
        <section className="py-8 md:py-12 px-4" style={{ background: "var(--pet-bg)" }}>
          <div className="max-w-[1100px] mx-auto">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-sm font-medium mb-6 transition-colors duration-200"
              style={{ color: "var(--pet-gray)" }}
            >
              <ArrowLeft className="w-4 h-4" />
              Voltar ao início
            </Link>
            <h1 className="text-3xl md:text-4xl font-black mb-3" style={{ fontFamily: "'Baloo 2', cursive", color: "#333" }}>
              🐾 Catálogo de Produtos
            </h1>
            <p className="text-base" style={{ color: "var(--pet-gray)" }}>
              Encontre a ração ideal para o seu pet. Consulte preços pelo WhatsApp.
            </p>
          </div>
        </section>

        {/* Filters + Search */}
        <section className="py-6 px-4 border-b" style={{ borderColor: "var(--pet-gray-border)" }}>
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
                      className="flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 whitespace-nowrap flex-shrink-0"
                      style={{
                        background: isActive ? "var(--pet-green)" : "var(--pet-bg)",
                        color: isActive ? "#fff" : "var(--pet-gray)",
                        border: isActive ? "none" : "1px solid var(--pet-gray-border)",
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
                  placeholder="Buscar produto..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 rounded-full border text-sm outline-none transition-all duration-200"
                  style={{ borderColor: "var(--pet-gray-border)", color: "#333" }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Products grid */}
        <section className="py-10 px-4">
          <div className="max-w-[1100px] mx-auto">
            <p className="text-sm mb-6" style={{ color: "var(--pet-gray)" }}>{filtered.length} produtos encontrados</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {filtered.map((p) => (
                <div
                  key={p.name}
                  className="bg-white rounded-2xl overflow-hidden transition-all duration-300 relative group cursor-pointer hover:shadow-lg"
                  style={{ border: "1.5px solid var(--pet-gray-border)" }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = "translateY(-4px)"}
                  onMouseLeave={(e) => e.currentTarget.style.transform = "none"}
                >
                  {p.popular && (
                    <span className="absolute top-2 left-2 text-white font-bold text-[10px] z-10 px-2 py-1 rounded-full" style={{ background: "var(--pet-green)" }}>
                      ⭐ Popular
                    </span>
                  )}
                  <div className="bg-white w-full h-40 flex items-center justify-center p-3">
                    <img
                      src={p.img}
                      alt={p.name}
                      className="max-h-full max-w-full object-contain"
                      loading="lazy"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = "none";
                        (e.target as HTMLImageElement).parentElement!.innerHTML = `<span style="color:#bbb;font-size:12px">Foto indisponível</span>`;
                      }}
                    />
                  </div>
                  <div className="p-4 border-t" style={{ borderColor: "var(--pet-gray-border)" }}>
                    <div className="flex items-center gap-0.5 mb-1.5">
                      {Array.from({ length: 5 }, (_, j) => (
                        <Star key={j} className={`w-3 h-3 ${j < Math.floor(p.rating) ? "fill-yellow-400 text-yellow-400" : "text-stone-200"}`} />
                      ))}
                      <span className="text-[10px] ml-1" style={{ color: "var(--pet-gray)" }}>{p.rating}</span>
                    </div>
                    <h3 className="text-sm font-bold mb-3 leading-tight" style={{ color: "#333" }}>{p.name}</h3>
                    <div className="flex flex-col gap-2">
                      <a
                        href="https://wa.me/5569992216764"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-1.5 rounded-full py-2.5 text-xs font-bold text-white transition-all duration-200 hover:opacity-90"
                        style={{ background: "var(--pet-green)" }}
                      >
                        <MessageCircle className="w-3.5 h-3.5" />
                        Consultar preço
                      </a>
                      <button
                        className="flex items-center justify-center gap-1.5 rounded-full py-2 text-xs font-semibold transition-all duration-200"
                        style={{ border: "1px solid var(--pet-gray-border)", color: "var(--pet-gray)" }}
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
                <p className="text-lg font-semibold mb-2" style={{ color: "#333" }}>Nenhum produto encontrado</p>
                <p className="text-sm" style={{ color: "var(--pet-gray)" }}>Tente buscar outro termo ou fale com a gente pelo WhatsApp.</p>
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
