import { useState } from "react";
import { useInView } from "@/hooks/useInView";
import { Star, Dog, Cat, PawPrint, Bird, Fish, ArrowRight, MessageCircle, ShoppingBag, Eye } from "lucide-react";
import { Link } from "react-router-dom";

const categories = [
  { label: "Destaques", icon: Star, key: "popular" },
  { label: "Cães", icon: Dog, key: "dogs" },
  { label: "Gatos", icon: Cat, key: "cats" },
  { label: "Filhotes", icon: PawPrint, key: "puppies" },
  { label: "Pássaros", icon: Bird, key: "birds" },
  { label: "Peixes", icon: Fish, key: "fish" },
];

const products = [
  { name: "Ração Pedigree Adultos", brand: "Pedigree", rating: 4.7, price: "R$ 149,90", weight: "15kg", cat: "dogs", popular: true, img: "https://cobasi.vteximg.com.br/arquivos/ids/1058781/Racao-Pedigree-Caes-Adultos-Racas-Medias-e-Grandes-Carne-e-Vegetais-20kg.png?v=638887169798770000", tag: "Mais vendido" },
  { name: "Golden Formula Mini Bits", brand: "Golden", rating: 4.9, price: "R$ 219,90", weight: "15kg", cat: "dogs", popular: true, img: "https://cobasi.vteximg.com.br/arquivos/ids/819537/racao-golden-formula-caes-adultos-racas-pequenas-carne-arroz-mini-bits-1kg.jpg?v=637667907205070000", tag: "Super Premium" },
  { name: "Petisco Dentastix", brand: "Pedigree", rating: 4.9, price: "R$ 13,90", weight: "7un", cat: "dogs", popular: true, img: "https://cobasi.vteximg.com.br/arquivos/ids/776729/7896029052341_1_Pedigree_759180.jpg?v=638753911544800000", tag: "Anti tártaro" },
  { name: "Ração Whiskas Adultos", brand: "Whiskas", rating: 4.8, price: "R$ 129,90", weight: "10.1kg", cat: "cats", popular: true, img: "https://cobasi.vteximg.com.br/arquivos/ids/1064748/0-WHISKAS-ADULTO-CARNE-500g.png?v=638838887958270000", tag: "Mais vendido" },
  { name: "Golden Gatos Castrados", brand: "Golden", rating: 4.9, price: "R$ 189,90", weight: "10.1kg", cat: "cats", popular: true, img: "https://cobasi.vteximg.com.br/arquivos/ids/278723/GOLDEN-GATOS-CASTR-SALMAO-101-KG.jpg?v=638799905443270000", tag: "Super Premium" },
  { name: "Temptations Anti Bola", brand: "Whiskas", rating: 4.9, price: "R$ 12,90", weight: "80g", cat: "cats", popular: false, img: "https://cobasi.vteximg.com.br/arquivos/ids/1042487/Petiscos-Anti-bola-de-pelo-Whiskas-40g.jpg?v=638753893779770000" },
  { name: "Ração Pedigree Filhotes", brand: "Pedigree", rating: 4.8, price: "R$ 119,90", weight: "10.1kg", cat: "puppies", popular: true, img: "https://cobasi.vteximg.com.br/arquivos/ids/1058781/Racao-Pedigree-Caes-Adultos-Racas-Medias-e-Grandes-Carne-e-Vegetais-20kg.png?v=638887169798770000", tag: "DHA incluso" },
  { name: "Golden Seleção Natural", brand: "Golden", rating: 4.8, price: "R$ 81,90", weight: "3kg", cat: "puppies", popular: true, img: "https://cobasi.vteximg.com.br/arquivos/ids/819537/racao-golden-formula-caes-adultos-racas-pequenas-carne-arroz-mini-bits-1kg.jpg?v=637667907205070000", tag: "Natural" },
  { name: "Ração Canários Alcon", brand: "Alcon", rating: 4.8, price: "R$ 39,90", weight: "325g", cat: "birds", popular: false, img: "https://images.unsplash.com/photo-1522926193341-e9ffd686c60f?w=300&q=80" },
  { name: "Ração Curió Alcon", brand: "Alcon", rating: 4.9, price: "R$ 39,90", weight: "325g", cat: "birds", popular: true, img: "https://images.unsplash.com/photo-1444464666168-49d633b86797?w=300&q=80", tag: "Para canto" },
  { name: "Colorbits Tetra", brand: "Tetra", rating: 4.8, price: "R$ 12,90", weight: "15g", cat: "fish", popular: true, img: "https://images.unsplash.com/photo-1520302519878-3cbfba1b1678?w=300&q=80", tag: "Realça cores" },
  { name: "Bettamix Alcon", brand: "Alcon", rating: 5.0, price: "R$ 19,90", weight: "10g", cat: "fish", popular: false, img: "https://images.unsplash.com/photo-1504472478235-9bc48ba4d60f?w=300&q=80" },
];

const WA = "https://wa.me/5569992216764?text=";

const ProductsShowcase = () => {
  const [activeCat, setActiveCat] = useState("popular");
  const { ref, visible } = useInView(0.05);
  const [imgErrors, setImgErrors] = useState<Record<number, boolean>>({});

  const filtered = activeCat === "popular"
    ? products.filter(p => p.popular)
    : products.filter(p => p.cat === activeCat);

  return (
    <section id="produtos" className="py-14 sm:py-20 lg:py-28 px-4" style={{ background: "var(--pet-bg-alt)" }} ref={ref}>
      <div className={`max-w-[1100px] mx-auto scroll-fade-up ${visible ? "visible" : ""}`}>
        {/* Header */}
        <div className="text-center mb-10 sm:mb-14">
          <span className="inline-flex items-center gap-1.5 text-[10px] font-extrabold uppercase tracking-[0.18em] mb-3 px-4 py-1.5 rounded-full" style={{ background: "var(--pet-orange-light)", color: "var(--pet-action)" }}>
            <ShoppingBag className="w-3 h-3" /> Nossos Produtos
          </span>
          <h2 className="text-[26px] sm:text-3xl lg:text-[44px] font-extrabold leading-tight" style={{ fontFamily: "'Baloo 2', cursive", color: "var(--pet-navy)" }}>
            Tudo que seu pet precisa
          </h2>
          <p className="text-sm sm:text-base text-gray-400 mt-2.5 max-w-lg mx-auto">
            Rações, petiscos e acessórios das melhores marcas. Consulte preços pelo WhatsApp.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex justify-center mb-8 sm:mb-12">
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide snap-x px-2">
            {categories.map(c => {
              const isActive = activeCat === c.key;
              return (
                <button
                  key={c.key}
                  onClick={() => setActiveCat(c.key)}
                  className="flex items-center gap-1.5 px-4 py-2.5 rounded-full text-xs sm:text-sm font-bold whitespace-nowrap transition-all duration-300 snap-start flex-shrink-0"
                  style={{
                    background: isActive ? "var(--pet-action)" : "white",
                    color: isActive ? "#fff" : "#888",
                    border: isActive ? "1.5px solid var(--pet-action)" : "1.5px solid #f0f0f0",
                    boxShadow: isActive ? "0 4px 16px var(--pet-action-glow)" : "0 2px 8px rgba(0,0,0,0.03)",
                  }}
                >
                  <c.icon className="w-3.5 h-3.5" />
                  {c.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
          {filtered.map((p, i) => (
            <a
              key={`${p.name}-${i}`}
              href={`${WA}${encodeURIComponent(`Olá! Gostaria de saber sobre o produto: *${p.name}* (${p.weight}). Está disponível?`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-[18px] bg-white overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl"
              style={{ border: "1.5px solid #f0f0f0", boxShadow: "0 2px 12px rgba(0,0,0,0.03)", animationDelay: `${i * 60}ms` }}
            >
              {/* Image */}
              <div className="relative aspect-square overflow-hidden" style={{ background: "#f8f8f8" }}>
                {!imgErrors[i] ? (
                  <img
                    src={p.img}
                    alt={p.name}
                    className="w-full h-full object-contain p-3 sm:p-4 transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                    onError={() => setImgErrors(prev => ({ ...prev, [i]: true }))}
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center gap-2">
                    <ShoppingBag className="w-8 h-8 opacity-20" style={{ color: "var(--pet-action)" }} />
                    <span className="text-[10px] text-gray-300 font-bold">Imagem indisponível</span>
                  </div>
                )}
                {p.tag && (
                  <span className="absolute top-2 left-2 px-2.5 py-1 rounded-full text-[9px] font-extrabold uppercase tracking-wider text-white" style={{ background: "var(--pet-action)", boxShadow: "0 2px 8px var(--pet-action-glow)" }}>
                    {p.tag}
                  </span>
                )}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <span className="bg-white/90 backdrop-blur-sm rounded-full px-3 py-1.5 text-[11px] font-bold flex items-center gap-1" style={{ color: "var(--pet-action)" }}>
                    <Eye className="w-3 h-3" /> Consultar
                  </span>
                </div>
              </div>

              {/* Info */}
              <div className="p-3 sm:p-4">
                <p className="text-[10px] font-bold uppercase tracking-wider mb-1" style={{ color: "var(--pet-action)" }}>{p.brand}</p>
                <h3 className="text-xs sm:text-sm font-extrabold leading-tight mb-1.5 line-clamp-2" style={{ color: "var(--pet-navy)" }}>{p.name}</h3>
                <div className="flex items-center gap-1 mb-2">
                  {Array.from({ length: 5 }, (_, j) => (
                    <Star key={j} className="w-3 h-3" style={{ color: j < Math.floor(p.rating) ? "var(--pet-yellow)" : "#e0e0e0", fill: j < Math.floor(p.rating) ? "var(--pet-yellow)" : "#e0e0e0" }} />
                  ))}
                  <span className="text-[10px] text-gray-400 ml-0.5">{p.rating}</span>
                </div>
                <div className="flex items-end justify-between">
                  <div>
                    <p className="text-sm sm:text-base font-extrabold" style={{ color: "var(--pet-navy)" }}>{p.price}</p>
                    <p className="text-[10px] text-gray-400">{p.weight}</p>
                  </div>
                  <div className="w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110" style={{ background: "var(--pet-green-light)" }}>
                    <MessageCircle className="w-3.5 h-3.5" style={{ color: "var(--pet-green)" }} />
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-10 sm:mt-14">
          <p className="text-sm text-gray-400 mb-4">Estes são apenas alguns dos nossos produtos</p>
          <Link
            to="/catalogo"
            className="inline-flex items-center gap-2.5 rounded-2xl px-8 py-4 text-sm sm:text-base font-extrabold text-white transition-all hover:-translate-y-0.5 active:scale-95"
            style={{ background: "var(--pet-action)", boxShadow: "0 8px 32px var(--pet-action-glow)" }}
          >
            <ShoppingBag className="w-5 h-5" /> Ver catálogo completo <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProductsShowcase;
