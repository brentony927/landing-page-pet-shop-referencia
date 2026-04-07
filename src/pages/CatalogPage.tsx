import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Star, Dog, Cat, PawPrint, Bird, Fish, MessageCircle, Search, ShoppingBag, X, ChevronLeft, ChevronRight, Weight, Package, Heart, Eye } from "lucide-react";
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
  {
    name: "Pedigree Nutrição Essencial Adultos",
    brand: "Pedigree",
    rating: 4.8,
    popular: true,
    cat: "dogs",
    weight: "15kg",
    images: [
      "https://m.media-amazon.com/images/I/71A8iBuHqlL._AC_SL1000_.jpg",
      "https://m.media-amazon.com/images/I/81Qnfo0rMBL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/71aQN6rfb3L._AC_SL1000_.jpg",
    ],
    desc: "Ração completa para cães adultos com sabor carne e vegetais. Fornece todos os nutrientes essenciais para uma vida saudável e ativa.",
    benefits: ["Pelo brilhante e saudável", "Dentes e ossos fortes", "Boa digestão", "Sistema imunológico reforçado"],
  },
  {
    name: "Royal Canin Medium Adult",
    brand: "Royal Canin",
    rating: 4.9,
    popular: true,
    cat: "dogs",
    weight: "15kg",
    images: [
      "https://m.media-amazon.com/images/I/71YJpMVeURL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/71xtGNnB03L._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/81LOJR0AHOL._AC_SL1500_.jpg",
    ],
    desc: "Nutrição precisa para cães adultos de porte médio (11 a 25kg). Fórmula exclusiva que mantém o peso ideal e a saúde articular.",
    benefits: ["Controle de peso ideal", "Saúde das articulações", "Alta palatabilidade", "Proteínas de alta qualidade"],
  },
  {
    name: "Golden Fórmula Frango & Arroz",
    brand: "Golden",
    rating: 4.7,
    cat: "dogs",
    weight: "15kg",
    images: [
      "https://m.media-amazon.com/images/I/51kq3cZFYbL._AC_SL1000_.jpg",
      "https://m.media-amazon.com/images/I/61yWgFhJURL._AC_SL1000_.jpg",
    ],
    desc: "Ração super premium para cães adultos. Ingredientes selecionados com frango e arroz integral para máxima nutrição.",
    benefits: ["Proteínas de frango real", "Arroz integral para digestão", "Sem corantes artificiais", "Ômega 3 e 6 para pelo"],
  },
  {
    name: "Magnus Premium Adulto Carne",
    brand: "Magnus",
    rating: 4.5,
    cat: "dogs",
    weight: "15kg",
    images: [
      "https://m.media-amazon.com/images/I/61mCjv+BYPL._AC_SL1000_.jpg",
      "https://m.media-amazon.com/images/I/71FNL6oaMnL._AC_SL1000_.jpg",
    ],
    desc: "Alimento completo para cães adultos com sabor carne. Excelente custo-benefício sem abrir mão da qualidade nutricional.",
    benefits: ["Ótimo custo-benefício", "Vitaminas A, D e E", "Minerais essenciais", "Sabor irresistível"],
  },
  {
    name: "Dog Chow Adulto Carne & Frango",
    brand: "Purina",
    rating: 4.6,
    cat: "dogs",
    weight: "15kg",
    images: [
      "https://m.media-amazon.com/images/I/71yNBaX-XML._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/81iS3GmspRL._AC_SL1500_.jpg",
    ],
    desc: "Nutrição balanceada para cães adultos de todos os tamanhos. Combinação de proteínas de carne e frango.",
    benefits: ["Músculos fortes", "Pelagem saudável", "Energia para brincar", "Digestão facilitada"],
  },
  {
    name: "Pedigree Dentastix",
    brand: "Pedigree",
    rating: 4.7,
    popular: true,
    cat: "dogs",
    weight: "270g (7un)",
    images: [
      "https://m.media-amazon.com/images/I/71+mz+CXAOL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/71Gz2PZFVQL._AC_SL1500_.jpg",
    ],
    desc: "Petisco funcional que ajuda a reduzir o acúmulo de tártaro em até 80%. Formato exclusivo em X para limpeza eficiente.",
    benefits: ["Reduz tártaro em 80%", "Hálito mais fresco", "Formato exclusivo X", "Sem açúcar adicionado"],
  },
  {
    name: "Whiskas Frango Adulto",
    brand: "Whiskas",
    rating: 4.8,
    popular: true,
    cat: "cats",
    weight: "10.1kg",
    images: [
      "https://m.media-amazon.com/images/I/61H5xt5ELPL._AC_SL1000_.jpg",
      "https://m.media-amazon.com/images/I/71w3cpIKgrL._AC_SL1000_.jpg",
    ],
    desc: "Ração completa para gatos adultos com sabor frango. Nutrientes balanceados para felinos saudáveis e felizes.",
    benefits: ["Taurina para visão", "Ômega para pelagem", "Cálcio para ossos", "Fibras para digestão"],
  },
  {
    name: "Royal Canin Indoor 27",
    brand: "Royal Canin",
    rating: 4.9,
    popular: true,
    cat: "cats",
    weight: "7.5kg",
    images: [
      "https://m.media-amazon.com/images/I/71neSqVmC1L._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/81yD1w2+TIL._AC_SL1500_.jpg",
    ],
    desc: "Especialmente formulada para gatos que vivem dentro de casa. Controla o peso e reduz o odor das fezes.",
    benefits: ["Para gatos indoor", "Controle de peso", "Reduz odor das fezes", "Bolas de pelo sob controle"],
  },
  {
    name: "Golden Gatos Castrados Salmão",
    brand: "Golden",
    rating: 4.6,
    cat: "cats",
    weight: "10.1kg",
    images: [
      "https://m.media-amazon.com/images/I/51jz0e7W+5L._AC_SL1000_.jpg",
      "https://m.media-amazon.com/images/I/61eG+QP5cqL._AC_SL1000_.jpg",
    ],
    desc: "Ração super premium para gatos castrados. Sabor salmão com fórmula que ajuda no controle do peso.",
    benefits: ["Controle de peso pós-castração", "Salmão como proteína", "Saúde do trato urinário", "Pelo sedoso"],
  },
  {
    name: "Cat Chow Adulto Peixe",
    brand: "Purina",
    rating: 4.4,
    cat: "cats",
    weight: "10.1kg",
    images: [
      "https://m.media-amazon.com/images/I/71qBU-SncQL._AC_SL1500_.jpg",
    ],
    desc: "Nutrição completa para gatos adultos com sabor de peixe. Feita com ingredientes de qualidade pela Purina.",
    benefits: ["Sabor peixe irresistível", "Nutrição completa", "Preço acessível", "Marca confiável"],
  },
  {
    name: "Royal Canin Puppy Medium",
    brand: "Royal Canin",
    rating: 4.9,
    popular: true,
    cat: "puppies",
    weight: "15kg",
    images: [
      "https://m.media-amazon.com/images/I/71kqhBmDK5L._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/81T9IFV8PaL._AC_SL1500_.jpg",
    ],
    desc: "Nutrição exclusiva para filhotes de porte médio (até 12 meses). Suporte imunológico e crescimento saudável.",
    benefits: ["Imunidade reforçada", "Crescimento saudável", "Digestão ótima", "Croquetes fáceis de mastigar"],
  },
  {
    name: "Pedigree Filhotes Carne e Frango",
    brand: "Pedigree",
    rating: 4.7,
    cat: "puppies",
    weight: "10.1kg",
    images: [
      "https://m.media-amazon.com/images/I/71MFVVHEL6L._AC_SL1500_.jpg",
    ],
    desc: "Ração completa para filhotes com sabores de carne e frango. DHA para desenvolvimento cerebral.",
    benefits: ["DHA para o cérebro", "Ossos e dentes fortes", "Pelo macio", "Alta energia"],
  },
  {
    name: "Golden Filhotes Frango & Arroz",
    brand: "Golden",
    rating: 4.8,
    popular: true,
    cat: "puppies",
    weight: "15kg",
    images: [
      "https://m.media-amazon.com/images/I/51ZrFJ+m6CL._AC_SL1000_.jpg",
    ],
    desc: "Super premium para filhotes com frango e arroz. Nutrientes para crescimento forte e saudável.",
    benefits: ["Super premium", "Frango como proteína #1", "Crescimento forte", "Digestibilidade alta"],
  },
  {
    name: "Alcon Club Mix Canário",
    brand: "Alcon",
    rating: 4.5,
    cat: "birds",
    weight: "500g",
    images: [
      "https://m.media-amazon.com/images/I/71kVGeNe5TL._AC_SL1500_.jpg",
    ],
    desc: "Mistura premium de sementes para canários. Sementes selecionadas para saúde e canto.",
    benefits: ["Sementes selecionadas", "Estimula o canto", "Rico em nutrientes", "Sem sujeira"],
  },
  {
    name: "Alcon Club Calopsita",
    brand: "Alcon",
    rating: 4.7,
    popular: true,
    cat: "birds",
    weight: "500g",
    images: [
      "https://m.media-amazon.com/images/I/61AHXE1v8XL._AC_SL1000_.jpg",
    ],
    desc: "Alimento premium para calopsitas e agapornis. Mix de sementes com vitaminas e minerais.",
    benefits: ["Penas brilhantes", "Vitaminas e minerais", "Mistura equilibrada", "Alto valor nutricional"],
  },
  {
    name: "Tetra ColorBits Tropical",
    brand: "Tetra",
    rating: 4.6,
    popular: true,
    cat: "fish",
    weight: "75g",
    images: [
      "https://m.media-amazon.com/images/I/71hOIQCDRKL._AC_SL1500_.jpg",
    ],
    desc: "Alimento em grânulos para peixes tropicais. Realça as cores naturais dos peixes ornamentais.",
    benefits: ["Realça cores naturais", "Não turva a água", "Alta digestibilidade", "Rico em proteínas"],
  },
  {
    name: "Alcon Betta Granulado",
    brand: "Alcon",
    rating: 4.8,
    cat: "fish",
    weight: "10g",
    images: [
      "https://m.media-amazon.com/images/I/61DqYfnhMRL._AC_SL1000_.jpg",
    ],
    desc: "Alimento em micro grânulos para peixes Betta. Formulação exclusiva que não turva a água.",
    benefits: ["Micro grânulos flutuantes", "Não turva a água", "Rico em proteínas", "Cores vibrantes"],
  },
];

const WA = "https://wa.me/5569992216764";

/* ─── Product Detail Modal ─── */
const ProductModal = ({ product, onClose }: { product: Product; onClose: () => void }) => {
  const [imgIdx, setImgIdx] = useState(0);
  const imgs = product.images;

  return (
    <div className="fixed inset-0 z-[200] flex items-end sm:items-center justify-center" onClick={onClose}>
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" style={{ animation: "fadeIn 0.2s ease" }} />

      {/* Modal */}
      <div
        className="relative w-full sm:w-[520px] max-h-[92vh] bg-white sm:rounded-3xl rounded-t-3xl overflow-hidden"
        style={{ animation: "slideUp 0.3s cubic-bezier(0.16,1,0.3,1)", boxShadow: "0 -10px 60px rgba(0,0,0,0.2)" }}
        onClick={e => e.stopPropagation()}
      >
        {/* Close */}
        <button onClick={onClose} className="absolute top-3 right-3 z-10 w-9 h-9 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center shadow-md hover:bg-white transition-all">
          <X className="w-4 h-4" style={{ color: "#555" }} />
        </button>

        {/* Image carousel */}
        <div className="relative bg-gray-50 w-full" style={{ aspectRatio: "1/1" }}>
          <img
            src={imgs[imgIdx]}
            alt={product.name}
            className="w-full h-full object-contain p-6 transition-opacity duration-300"
          />
          {imgs.length > 1 && (
            <>
              <button onClick={() => setImgIdx(i => (i - 1 + imgs.length) % imgs.length)} className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/80 backdrop-blur flex items-center justify-center shadow-md"><ChevronLeft className="w-4 h-4" /></button>
              <button onClick={() => setImgIdx(i => (i + 1) % imgs.length)} className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/80 backdrop-blur flex items-center justify-center shadow-md"><ChevronRight className="w-4 h-4" /></button>
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
                {imgs.map((_, i) => (
                  <button key={i} onClick={() => setImgIdx(i)} className="w-2 h-2 rounded-full transition-all" style={{ background: i === imgIdx ? "#F5851F" : "rgba(0,0,0,0.15)", transform: i === imgIdx ? "scale(1.3)" : "scale(1)" }} />
                ))}
              </div>
            </>
          )}
          {/* Thumbnails */}
          {imgs.length > 1 && (
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-2">
              {imgs.map((img, i) => (
                <button key={i} onClick={() => setImgIdx(i)} className="w-12 h-12 rounded-xl overflow-hidden border-2 transition-all bg-white" style={{ borderColor: i === imgIdx ? "#F5851F" : "transparent", opacity: i === imgIdx ? 1 : 0.6 }}>
                  <img src={img} alt="" className="w-full h-full object-contain p-1" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Info */}
        <div className="p-5 sm:p-6 overflow-y-auto" style={{ maxHeight: "45vh" }}>
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

          {/* Benefits */}
          <div className="grid grid-cols-2 gap-2 mb-5">
            {product.benefits.map((b, i) => (
              <div key={i} className="flex items-center gap-2 text-xs font-medium px-3 py-2 rounded-xl" style={{ background: "#F1F8E9", color: "#2E7D32" }}>
                <Heart className="w-3 h-3 flex-shrink-0" style={{ color: "#4CAF50", fill: "#4CAF50" }} />
                {b}
              </div>
            ))}
          </div>

          {/* CTA */}
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
              <input type="text" placeholder="Buscar produto ou marca..." value={search} onChange={e => setSearch(e.target.value)} className="w-full pl-9 pr-4 py-2 rounded-xl text-sm outline-none bg-gray-50 transition-all focus:ring-2 focus:ring-blue-100" style={{ border: "1.5px solid #eee", color: "#333" }} />
            </div>
          </div>
        </section>

        {/* Products */}
        <section className="py-8 sm:py-10 px-4">
          <div className="max-w-[1100px] mx-auto">
            <p className="text-xs font-medium mb-5" style={{ color: "#999" }}>{filtered.length} produtos encontrados</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
              {filtered.map(p => (
                <div key={p.name} className="bg-white rounded-[18px] overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg group relative" style={{ border: "1.5px solid #f0f0f0", boxShadow: "0 2px 8px rgba(0,0,0,0.03)" }}>
                  {p.popular && (
                    <span className="absolute top-2 left-2 text-white font-bold text-[9px] z-10 px-2 py-0.5 rounded-full" style={{ background: "#F5851F" }}>⭐ Popular</span>
                  )}
                  <div className="relative bg-gray-50 w-full h-36 sm:h-44 flex items-center justify-center p-4 cursor-pointer" onClick={() => setSelectedProduct(p)}>
                    <img src={p.images[0]} alt={p.name} className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300" loading="lazy" onError={e => { (e.target as HTMLImageElement).style.display = "none"; }} />
                    {/* Hover overlay */}
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
                        onClick={() => setSelectedProduct(p)}
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

      {/* Product Modal */}
      {selectedProduct && <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />}

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default CatalogPage;
