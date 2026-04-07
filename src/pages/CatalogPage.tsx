import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Star, Dog, Cat, PawPrint, Bird, Fish, MessageCircle, Search, ShoppingBag, X, ChevronLeft, ChevronRight, Package, Heart, Eye } from "lucide-react";
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

type Product = {
  name: string;
  brand: string;
  rating: number;
  popular?: boolean;
  cat: string;
  images: string[];
  weight: string;
  desc: string;
  benefits: string[];
};

const allProducts: Product[] = [
  // ─── CÃES ───
  {
    name: "Ração Pedigree Adultos Carne e Vegetais",
    brand: "Pedigree",
    rating: 4.7,
    popular: true,
    cat: "dogs",
    weight: "15kg",
    images: [
      "https://cobasi.vteximg.com.br/arquivos/ids/1058781/Racao-Pedigree-Caes-Adultos-Racas-Medias-e-Grandes-Carne-e-Vegetais-20kg.png?v=638887169798770000",
      "https://cobasi.vteximg.com.br/arquivos/ids/1095417/Racao%20Pedigree%20Nutri%20Essencial%20Caes%20Adultos%20Carne.webp?v=639033272559000000",
    ],
    desc: "Ração completa para cães adultos de raças médias e grandes. Sabor carne e vegetais com nutrientes essenciais para uma vida saudável.",
    benefits: ["Pelo brilhante e saudável", "Dentes e ossos fortes", "Boa digestão", "Sistema imunológico reforçado"],
  },
  {
    name: "Ração Pedigree Raças Pequenas Carne e Vegetais",
    brand: "Pedigree",
    rating: 4.8,
    cat: "dogs",
    weight: "15kg",
    images: [
      "https://cobasi.vteximg.com.br/arquivos/ids/1058793/Racao-Pedigree-Caes-Adultos-Racas-Pequenas-e-Minis-Carne-e-Vegetais-900g.png?v=638844604117430000",
    ],
    desc: "Croquetes menores ideais para raças pequenas e mini. Sabor carne e vegetais com nutrição completa.",
    benefits: ["Croquetes pequenos", "Para raças mini", "Nutrição completa", "Alta palatabilidade"],
  },
  {
    name: "Petisco Pedigree Dentastix Raças Médias",
    brand: "Pedigree",
    rating: 4.9,
    popular: true,
    cat: "dogs",
    weight: "7 unidades",
    images: [
      "https://cobasi.vteximg.com.br/arquivos/ids/776729/7896029052341_1_Pedigree_759180.jpg?v=638753911544800000",
    ],
    desc: "Petisco funcional que ajuda a reduzir o acúmulo de tártaro em até 80%. Formato exclusivo em X para limpeza eficiente dos dentes.",
    benefits: ["Reduz tártaro em 80%", "Hálito mais fresco", "Formato exclusivo X", "Sem açúcar"],
  },
  {
    name: "Biscoito Pedigree Biscrok Multi",
    brand: "Pedigree",
    rating: 4.9,
    cat: "dogs",
    weight: "1kg",
    images: [
      "https://cobasi.vteximg.com.br/arquivos/ids/1088748/00-copiar.webp?v=638966573422300000",
    ],
    desc: "Biscoitos crocantes em formatos divertidos. Perfeito para recompensas e petiscos entre refeições.",
    benefits: ["Formatos divertidos", "Crocante e saboroso", "Ideal para treinos", "Enriquecido com vitaminas"],
  },
  {
    name: "Biscoito Pedigree Marrobone Carne",
    brand: "Pedigree",
    rating: 4.8,
    cat: "dogs",
    weight: "500g",
    images: [
      "https://cobasi.vteximg.com.br/arquivos/ids/1088806/00-copiar.webp?v=638966600050600000",
    ],
    desc: "Biscoito recheado com medula para cães adultos. Formato de osso com recheio irresistível.",
    benefits: ["Recheio de medula", "Formato de osso", "Rico em cálcio", "Sem corantes"],
  },
  {
    name: "Ração Golden Formula Carne e Arroz Mini Bits",
    brand: "Golden",
    rating: 4.9,
    popular: true,
    cat: "dogs",
    weight: "15kg",
    images: [
      "https://cobasi.vteximg.com.br/arquivos/ids/819537/racao-golden-formula-caes-adultos-racas-pequenas-carne-arroz-mini-bits-1kg.jpg?v=637667907205070000",
    ],
    desc: "Ração super premium para cães adultos de raças pequenas. Croquetes menores com frango e arroz integral.",
    benefits: ["Super premium", "Croquetes mini", "Frango real", "Ômega 3 e 6"],
  },
  {
    name: "Ração Golden Special Frango e Carne",
    brand: "Golden",
    rating: 4.8,
    cat: "dogs",
    weight: "15kg",
    images: [
      "https://cobasi.vteximg.com.br/arquivos/ids/939251/racao-golden-special-para-caes-adultos-frango-e-carne-3310549-15kg-Lado.jpg?v=638757374687300000",
    ],
    desc: "Linha especial da Golden para cães adultos. Combinação de frango e carne com nutrição balanceada.",
    benefits: ["Frango + carne", "Nutrição balanceada", "Ótimo custo-benefício", "Pelo saudável"],
  },

  // ─── GATOS ───
  {
    name: "Ração Whiskas Adultos Carne",
    brand: "Whiskas",
    rating: 4.8,
    popular: true,
    cat: "cats",
    weight: "10.1kg",
    images: [
      "https://cobasi.vteximg.com.br/arquivos/ids/1064748/0-WHISKAS-ADULTO-CARNE-500g.png?v=638838887958270000",
    ],
    desc: "Ração completa para gatos adultos com sabor carne. Nutrientes balanceados para felinos saudáveis e felizes.",
    benefits: ["Taurina para visão", "Ômega para pelagem", "Cálcio para ossos", "Fibras para digestão"],
  },
  {
    name: "Ração Whiskas Castrados Carne",
    brand: "Whiskas",
    rating: 4.8,
    cat: "cats",
    weight: "10.1kg",
    images: [
      "https://cobasi.vteximg.com.br/arquivos/ids/1064676/0-WHISKAS-ADULTO-CASTRADOS-CARNE-500g.png?v=638844603408830000",
    ],
    desc: "Formulação especial para gatos castrados. Controle de peso com sabor que os gatos adoram.",
    benefits: ["Para castrados", "Controle de peso", "Saúde urinária", "Sabor irresistível"],
  },
  {
    name: "Ração Golden Gatos Castrados Salmão",
    brand: "Golden",
    rating: 4.9,
    popular: true,
    cat: "cats",
    weight: "10.1kg",
    images: [
      "https://cobasi.vteximg.com.br/arquivos/ids/278723/GOLDEN-GATOS-CASTR-SALMAO-101-KG.jpg?v=638799905443270000",
    ],
    desc: "Ração super premium para gatos castrados. Sabor salmão com fórmula que ajuda no controle do peso.",
    benefits: ["Super premium", "Salmão como proteína", "Saúde do trato urinário", "Pelo sedoso"],
  },
  {
    name: "Ração Golden Gatos Castrados Frango",
    brand: "Golden",
    rating: 4.9,
    cat: "cats",
    weight: "10.1kg",
    images: [
      "https://cobasi.vteximg.com.br/arquivos/ids/818016/racao-golden-gatos-castrados-frango-1kg.jpg?v=638757375047200000",
    ],
    desc: "Linha super premium da Golden para gatos castrados. Sabor frango com nutrientes essenciais.",
    benefits: ["Frango real", "Controle de peso", "Vitaminas A, D, E", "Anti bola de pelo"],
  },
  {
    name: "Ração Golden Special Gatos Castrados",
    brand: "Golden",
    rating: 4.9,
    cat: "cats",
    weight: "10.1kg",
    images: [
      "https://cobasi.vteximg.com.br/arquivos/ids/1051457/Golden-Special-Castrados-Frango-Carne-3kg.png?v=638336799858500000",
    ],
    desc: "Linha Golden Special para gatos castrados. Frango e carne com fórmula exclusiva.",
    benefits: ["Frango + carne", "Para castrados", "Ótimo custo-benefício", "Nutrição completa"],
  },
  {
    name: "Petisco Whiskas Temptations Anti Bola de Pelo",
    brand: "Whiskas",
    rating: 4.9,
    cat: "cats",
    weight: "80g",
    images: [
      "https://cobasi.vteximg.com.br/arquivos/ids/1042487/Petiscos-Anti-bola-de-pelo-Whiskas-40g.jpg?v=638753893779770000",
    ],
    desc: "Petisco funcional que ajuda no controle de bolas de pelo. Crocante por fora e macio por dentro.",
    benefits: ["Anti bola de pelo", "Crocante e macio", "Irresistível", "Vitaminas adicionadas"],
  },

  // ─── FILHOTES ───
  {
    name: "Ração Pedigree Filhotes Carne ao Molho",
    brand: "Pedigree",
    rating: 4.8,
    popular: true,
    cat: "puppies",
    weight: "10.1kg",
    images: [
      "https://cobasi.vteximg.com.br/arquivos/ids/1095404/Racao%20Umida%20Pedigree%20Sache%20Caes%20Filhotes%20Carne%20ao%20Molho.webp?v=639033225153600000",
    ],
    desc: "Ração completa para filhotes com carne ao molho. DHA para desenvolvimento cerebral e crescimento saudável.",
    benefits: ["DHA para o cérebro", "Ossos e dentes fortes", "Pelo macio", "Alta energia"],
  },
  {
    name: "Ração Golden Seleção Natural Gatos Castrados",
    brand: "Golden",
    rating: 4.8,
    popular: true,
    cat: "puppies",
    weight: "3kg",
    images: [
      "https://cobasi.vteximg.com.br/arquivos/ids/939193/racao-golden-selecao-natural-gatos-castrados-frango-com-abobora-e-alecrim-3924008-lado-3kg.jpg?v=638848190534870000",
    ],
    desc: "Linha natural da Golden com ingredientes selecionados. Frango com abóbora e alecrim para nutrição completa.",
    benefits: ["Ingredientes naturais", "Frango + abóbora", "Sem corantes", "Super premium"],
  },

  // ─── PÁSSAROS ───
  {
    name: "Ração Golden Special Gatos Frango e Carne",
    brand: "Golden",
    rating: 4.9,
    cat: "birds",
    weight: "10.1kg",
    images: [
      "https://cobasi.vteximg.com.br/arquivos/ids/1051462/Golden-Special-Frango-Carne-3kg.png?v=639058023656200000",
    ],
    desc: "Linha Golden Special para gatos adultos. Combinação de frango e carne com fórmula equilibrada.",
    benefits: ["Frango + carne", "Nutrição completa", "Custo-benefício", "Marca confiável"],
  },

  // ─── PEIXES ───
  {
    name: "Ração Whiskas Castrados Peixe",
    brand: "Whiskas",
    rating: 4.9,
    popular: true,
    cat: "fish",
    weight: "10.1kg",
    images: [
      "https://cobasi.vteximg.com.br/arquivos/ids/1064723/0-WHISKAS-ADULTO-CASTRADOS-PEIXE-10KG.png?v=638689397325170000",
    ],
    desc: "Ração para gatos adultos castrados com sabor peixe. Fórmula balanceada que controla o peso.",
    benefits: ["Sabor peixe", "Para castrados", "Controle de peso", "Nutrição completa"],
  },
];

const WA = "https://wa.me/5569992216764";

/* ─── Product Detail Modal ─── */
const ProductModal = ({ product, onClose }: { product: Product; onClose: () => void }) => {
  const [imgIdx, setImgIdx] = useState(0);
  const [imgError, setImgError] = useState(false);
  const imgs = product.images;

  return (
    <div className="fixed inset-0 z-[200] flex items-end sm:items-center justify-center" onClick={onClose}>
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" style={{ animation: "fadeIn 0.2s ease" }} />

      {/* Modal — full height scroll */}
      <div
        className="relative w-full sm:w-[520px] max-h-[92vh] bg-white sm:rounded-3xl rounded-t-3xl flex flex-col"
        style={{ animation: "slideUp 0.3s cubic-bezier(0.16,1,0.3,1)", boxShadow: "0 -10px 60px rgba(0,0,0,0.2)" }}
        onClick={e => e.stopPropagation()}
      >
        <button onClick={onClose} className="absolute top-3 right-3 z-10 w-9 h-9 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center shadow-md hover:bg-white transition-all">
          <X className="w-4 h-4" style={{ color: "#555" }} />
        </button>

        {/* Scrollable content */}
        <div className="overflow-y-auto flex-1 overscroll-contain" style={{ WebkitOverflowScrolling: "touch" }}>
          {/* Image */}
          <div className="relative bg-gray-50 w-full" style={{ minHeight: 280 }}>
            {!imgError ? (
              <img
                src={imgs[imgIdx]}
                alt={product.name}
                className="w-full object-contain p-8"
                style={{ height: 300 }}
                onError={() => setImgError(true)}
              />
            ) : (
              <div className="w-full flex items-center justify-center" style={{ height: 300 }}>
                <div className="text-center">
                  <Package className="w-12 h-12 mx-auto mb-2" style={{ color: "#ccc" }} />
                  <p className="text-xs" style={{ color: "#999" }}>{product.name}</p>
                </div>
              </div>
            )}
            {imgs.length > 1 && (
              <>
                <button onClick={() => { setImgIdx(i => (i - 1 + imgs.length) % imgs.length); setImgError(false); }} className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/80 backdrop-blur flex items-center justify-center shadow-md"><ChevronLeft className="w-4 h-4" /></button>
                <button onClick={() => { setImgIdx(i => (i + 1) % imgs.length); setImgError(false); }} className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/80 backdrop-blur flex items-center justify-center shadow-md"><ChevronRight className="w-4 h-4" /></button>
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
                  {imgs.map((_, i) => (
                    <button key={i} onClick={() => { setImgIdx(i); setImgError(false); }} className="w-2 h-2 rounded-full transition-all" style={{ background: i === imgIdx ? "#F5851F" : "rgba(0,0,0,0.15)", transform: i === imgIdx ? "scale(1.3)" : "scale(1)" }} />
                  ))}
                </div>
              </>
            )}
          </div>

          {/* Info */}
          <div className="p-5 sm:p-6">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full" style={{ background: "#E3F2FD", color: "#1565C0" }}>{product.brand}</span>
              <span className="text-[10px] font-medium flex items-center gap-1" style={{ color: "#888" }}>
                <Package className="w-3 h-3" /> {product.weight}
              </span>
            </div>
            <h2 className="text-lg font-extrabold mb-2 leading-tight" style={{ color: "#1a3a5c", fontFamily: "'Baloo 2', cursive" }}>{product.name}</h2>

            <div className="flex items-center gap-1 mb-3">
              {Array.from({ length: 5 }, (_, j) => (
                <Star key={j} className="w-3.5 h-3.5" style={{ color: j < Math.floor(product.rating) ? "#FFB300" : "#e0e0e0", fill: j < Math.floor(product.rating) ? "#FFB300" : "#e0e0e0" }} />
              ))}
              <span className="text-xs font-bold ml-1" style={{ color: "#FFB300" }}>{product.rating}</span>
            </div>

            <p className="text-sm leading-relaxed mb-4" style={{ color: "#666" }}>{product.desc}</p>

            <div className="grid grid-cols-2 gap-2 mb-5">
              {product.benefits.map((b, i) => (
                <div key={i} className="flex items-center gap-2 text-xs font-medium px-3 py-2 rounded-xl" style={{ background: "#F1F8E9", color: "#2E7D32" }}>
                  <Heart className="w-3 h-3 flex-shrink-0" style={{ color: "#4CAF50", fill: "#4CAF50" }} />
                  {b}
                </div>
              ))}
            </div>

            <a
              href={`${WA}?text=${encodeURIComponent(`Oi! Quero saber o preço: ${product.name} ${product.weight}`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3.5 rounded-2xl text-sm font-extrabold text-white transition-all hover:-translate-y-0.5 active:scale-[0.97]"
              style={{ background: "#F5851F", boxShadow: "0 6px 20px rgba(245,133,31,0.35)" }}
            >
              <MessageCircle className="w-4 h-4" />
              Consultar preço no WhatsApp
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn { from { opacity:0 } to { opacity:1 } }
        @keyframes slideUp { from { opacity:0; transform: translateY(40px) } to { opacity:1; transform: translateY(0) } }
      `}</style>
    </div>
  );
};

/* ─── Main Page ─── */
const CatalogPage = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [search, setSearch] = useState("");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const filtered = allProducts
    .filter(p => activeTab === "all" || p.cat === activeTab)
    .filter(p => p.name.toLowerCase().includes(search.toLowerCase()) || p.brand.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="min-h-screen bg-white">
      <Header />

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
              <input type="text" placeholder="Buscar produto ou marca..." value={search} onChange={e => setSearch(e.target.value)} className="w-full pl-9 pr-4 py-2 rounded-xl text-sm outline-none bg-gray-50 transition-all focus:ring-2 focus:ring-blue-100" style={{ border: "1.5px solid #eee", color: "#333" }} />
            </div>
          </div>
        </section>

        <section className="py-8 sm:py-10 px-4">
          <div className="max-w-[1100px] mx-auto">
            <p className="text-xs font-medium mb-5" style={{ color: "#999" }}>{filtered.length} produtos encontrados</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
              {filtered.map(p => (
                <ProductCard key={p.name} product={p} onSelect={() => setSelectedProduct(p)} />
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

      {selectedProduct && <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />}
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

/* ─── Product Card ─── */
const ProductCard = ({ product: p, onSelect }: { product: Product; onSelect: () => void }) => {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="bg-white rounded-[18px] overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg group relative" style={{ border: "1.5px solid #f0f0f0", boxShadow: "0 2px 8px rgba(0,0,0,0.03)" }}>
      {p.popular && (
        <span className="absolute top-2 left-2 text-white font-bold text-[9px] z-10 px-2 py-0.5 rounded-full" style={{ background: "#F5851F" }}>⭐ Popular</span>
      )}
      <div className="relative bg-gray-50 w-full h-36 sm:h-44 flex items-center justify-center p-4 cursor-pointer" onClick={onSelect}>
        {!imgError ? (
          <img
            src={p.images[0]}
            alt={p.name}
            className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
            loading="lazy"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="text-center">
            <Package className="w-8 h-8 mx-auto mb-1" style={{ color: "#ccc" }} />
            <span className="text-[10px]" style={{ color: "#bbb" }}>Imagem indisponível</span>
          </div>
        )}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
          <span className="bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full text-[11px] font-bold flex items-center gap-1.5 shadow-lg" style={{ color: "#1565C0" }}>
            <Eye className="w-3.5 h-3.5" /> Ver detalhes
          </span>
        </div>
      </div>
      <div className="p-3 sm:p-4">
        <span className="text-[9px] font-bold px-2 py-0.5 rounded-full mb-1.5 inline-block" style={{ background: "#E3F2FD", color: "#1565C0" }}>{p.brand}</span>
        <div className="flex items-center gap-0.5 mb-1">
          {Array.from({ length: 5 }, (_, j) => (
            <Star key={j} className="w-2.5 h-2.5" style={{ color: j < Math.floor(p.rating) ? "#FFB300" : "#e0e0e0", fill: j < Math.floor(p.rating) ? "#FFB300" : "#e0e0e0" }} />
          ))}
          <span className="text-[9px] ml-1" style={{ color: "#999" }}>{p.rating}</span>
        </div>
        <h3 className="text-[12px] sm:text-[13px] font-bold mb-1 leading-tight" style={{ color: "#1a3a5c" }}>{p.name}</h3>
        <p className="text-[10px] mb-3" style={{ color: "#aaa" }}>{p.weight}</p>
        <div className="flex gap-2">
          <button
            onClick={onSelect}
            className="flex-1 flex items-center justify-center gap-1 rounded-xl py-2 text-[11px] font-bold transition-all hover:-translate-y-0.5 active:scale-95"
            style={{ background: "#E3F2FD", color: "#1565C0" }}
          >
            <Eye className="w-3 h-3" /> Detalhes
          </button>
          <a
            href={`${WA}?text=${encodeURIComponent(`Oi, quero saber o preço: ${p.name} ${p.weight}`)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-1 rounded-xl py-2 text-[11px] font-bold text-white transition-all hover:-translate-y-0.5 active:scale-95"
            style={{ background: "#F5851F" }}
          >
            <MessageCircle className="w-3 h-3" /> Preço
          </a>
        </div>
      </div>
    </div>
  );
};

export default CatalogPage;
