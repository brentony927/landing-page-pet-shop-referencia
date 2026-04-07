import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Star, Dog, Cat, PawPrint, Bird, Fish, MessageCircle, Search, ShoppingBag, X, ChevronLeft, ChevronRight, Package, Heart, Eye, Info, Calendar, Ruler, ShieldCheck } from "lucide-react";
import alconCanarioImg from "@/assets/catalog/alcon-canario.png";
import megazooPapagaioImg from "@/assets/catalog/megazoo-papagaio.png";
import tetraColorbitsImg from "@/assets/catalog/tetra-colorbits.jpg";
import tetraColorFlakesImg from "@/assets/catalog/tetra-color-flakes.jpg";
import alconMiniBettaImg from "@/assets/catalog/alcon-mini-betta.jpg";
import alconBettamixImg from "@/assets/catalog/alcon-bettamix.jpg";
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
  price: string;
  age: string;
  size: string;
  recommendation: string;
  ingredients?: string;
};

const allProducts: Product[] = [
  // ─── CÃES ADULTOS ───
  {
    name: "Ração Pedigree Adultos Carne e Vegetais",
    brand: "Pedigree",
    rating: 4.7,
    popular: true,
    cat: "dogs",
    weight: "15kg",
    price: "R$ 149,90",
    age: "Adulto (1 a 7 anos)",
    size: "Raças médias e grandes",
    recommendation: "Ideal para cães adultos ativos. Servir 2x ao dia com água fresca.",
    ingredients: "Cereais, farinha de carne e ossos, gordura animal, polpa de beterraba, óleos vegetais",
    images: [
      "https://cobasi.vteximg.com.br/arquivos/ids/1058781/Racao-Pedigree-Caes-Adultos-Racas-Medias-e-Grandes-Carne-e-Vegetais-20kg.png?v=638887169798770000",
      "https://cobasi.vteximg.com.br/arquivos/ids/1095417/Racao%20Pedigree%20Nutri%20Essencial%20Caes%20Adultos%20Carne.webp?v=639033272559000000",
    ],
    desc: "Ração completa para cães adultos de raças médias e grandes. Sabor carne e vegetais com nutrientes essenciais para uma vida saudável e ativa.",
    benefits: ["Pelo brilhante", "Ossos fortes", "Boa digestão", "Imunidade reforçada"],
  },
  {
    name: "Ração Pedigree Raças Pequenas",
    brand: "Pedigree",
    rating: 4.8,
    cat: "dogs",
    weight: "15kg",
    price: "R$ 159,90",
    age: "Adulto (1 a 7 anos)",
    size: "Raças pequenas e mini",
    recommendation: "Croquetes menores para facilitar a mastigação. Ideal para Yorkshire, Shih Tzu, Maltês.",
    ingredients: "Cereais, farinha de carne, gordura animal, óleos vegetais, vitaminas e minerais",
    images: [
      "https://cobasi.vteximg.com.br/arquivos/ids/1058793/Racao-Pedigree-Caes-Adultos-Racas-Pequenas-e-Minis-Carne-e-Vegetais-900g.png?v=638844604117430000",
    ],
    desc: "Croquetes menores ideais para raças pequenas e mini. Sabor carne e vegetais com nutrição completa.",
    benefits: ["Croquetes mini", "Para raças pequenas", "Nutrição completa", "Alta palatabilidade"],
  },
  {
    name: "Petisco Pedigree Dentastix",
    brand: "Pedigree",
    rating: 4.9,
    popular: true,
    cat: "dogs",
    weight: "7 unidades",
    price: "R$ 13,90",
    age: "Adulto (1+ anos)",
    size: "Raças médias (10-25kg)",
    recommendation: "Ofereça 1 stick por dia após a refeição. Não substitui a alimentação principal.",
    images: [
      "https://cobasi.vteximg.com.br/arquivos/ids/776729/7896029052341_1_Pedigree_759180.jpg?v=638753911544800000",
    ],
    desc: "Petisco funcional que reduz o acúmulo de tártaro em até 80%. Formato exclusivo em X para limpeza eficiente.",
    benefits: ["Reduz tártaro 80%", "Hálito fresco", "Formato em X", "Sem açúcar"],
  },
  {
    name: "Biscoito Pedigree Biscrok Multi",
    brand: "Pedigree",
    rating: 4.9,
    cat: "dogs",
    weight: "1kg",
    price: "R$ 27,90",
    age: "Adulto (1+ anos)",
    size: "Todos os portes",
    recommendation: "Ideal como recompensa durante treinos. Ofereça até 10% da dieta diária.",
    images: [
      "https://cobasi.vteximg.com.br/arquivos/ids/1088748/00-copiar.webp?v=638966573422300000",
    ],
    desc: "Biscoitos crocantes em formatos divertidos. Perfeito para recompensas e petiscos entre refeições.",
    benefits: ["Formatos divertidos", "Crocante e saboroso", "Ideal para treinos", "Com vitaminas"],
  },
  {
    name: "Biscoito Pedigree Marrobone",
    brand: "Pedigree",
    rating: 4.8,
    cat: "dogs",
    weight: "500g",
    price: "R$ 19,90",
    age: "Adulto (1+ anos)",
    size: "Todos os portes",
    recommendation: "Biscoito recheado com medula. Ofereça como petisco entre refeições.",
    images: [
      "https://cobasi.vteximg.com.br/arquivos/ids/1088806/00-copiar.webp?v=638966600050600000",
    ],
    desc: "Biscoito recheado com medula para cães adultos. Formato de osso com recheio irresistível.",
    benefits: ["Recheio de medula", "Formato de osso", "Rico em cálcio", "Sem corantes"],
  },
  {
    name: "Ração Golden Formula Mini Bits",
    brand: "Golden",
    rating: 4.9,
    popular: true,
    cat: "dogs",
    weight: "15kg",
    price: "R$ 219,90",
    age: "Adulto (1 a 7 anos)",
    size: "Raças pequenas",
    recommendation: "Super premium. Indicada por veterinários para raças pequenas exigentes.",
    ingredients: "Frango, arroz integral, óleos de peixe, polpa de beterraba, vitaminas",
    images: [
      "https://cobasi.vteximg.com.br/arquivos/ids/819537/racao-golden-formula-caes-adultos-racas-pequenas-carne-arroz-mini-bits-1kg.jpg?v=637667907205070000",
    ],
    desc: "Ração super premium para cães adultos de raças pequenas. Croquetes menores com frango e arroz integral para máxima nutrição.",
    benefits: ["Super premium", "Croquetes mini", "Frango real", "Ômega 3 e 6"],
  },
  {
    name: "Ração Golden Special Frango e Carne",
    brand: "Golden",
    rating: 4.8,
    cat: "dogs",
    weight: "15kg",
    price: "R$ 159,90",
    age: "Adulto (1 a 7 anos)",
    size: "Todos os portes",
    recommendation: "Ótimo custo-benefício. Nutrição balanceada para o dia a dia.",
    ingredients: "Frango, carne bovina, arroz, milho, gordura animal, vitaminas",
    images: [
      "https://cobasi.vteximg.com.br/arquivos/ids/939251/racao-golden-special-para-caes-adultos-frango-e-carne-3310549-15kg-Lado.jpg?v=638757374687300000",
    ],
    desc: "Linha especial da Golden para cães adultos. Combinação de frango e carne com nutrição balanceada.",
    benefits: ["Frango + carne", "Nutrição balanceada", "Custo-benefício", "Pelo saudável"],
  },

  // ─── GATOS ───
  {
    name: "Ração Whiskas Adultos Carne",
    brand: "Whiskas",
    rating: 4.8,
    popular: true,
    cat: "cats",
    weight: "10.1kg",
    price: "R$ 129,90",
    age: "Adulto (1 a 7 anos)",
    size: "Todas as raças",
    recommendation: "Ração completa para gatos adultos. Servir com água fresca sempre disponível.",
    ingredients: "Cereais, farinha de carne, farinha de peixe, gordura animal, taurina",
    images: [
      "https://cobasi.vteximg.com.br/arquivos/ids/1064748/0-WHISKAS-ADULTO-CARNE-500g.png?v=638838887958270000",
    ],
    desc: "Ração completa para gatos adultos com sabor carne. Nutrientes balanceados para felinos saudáveis.",
    benefits: ["Taurina para visão", "Ômega para pelo", "Cálcio para ossos", "Fibras digestivas"],
  },
  {
    name: "Ração Whiskas Castrados Carne",
    brand: "Whiskas",
    rating: 4.8,
    cat: "cats",
    weight: "10.1kg",
    price: "R$ 135,90",
    age: "Adulto castrado (1+ anos)",
    size: "Todas as raças",
    recommendation: "Formulação com menos calorias para gatos castrados. Ajuda a manter o peso ideal.",
    images: [
      "https://cobasi.vteximg.com.br/arquivos/ids/1064676/0-WHISKAS-ADULTO-CASTRADOS-CARNE-500g.png?v=638844603408830000",
    ],
    desc: "Formulação especial para gatos castrados. Controle de peso com sabor irresistível.",
    benefits: ["Para castrados", "Controle de peso", "Saúde urinária", "Sabor irresistível"],
  },
  {
    name: "Ração Whiskas Castrados Peixe",
    brand: "Whiskas",
    rating: 4.9,
    cat: "cats",
    weight: "10.1kg",
    price: "R$ 135,90",
    age: "Adulto castrado (1+ anos)",
    size: "Todas as raças",
    recommendation: "Sabor peixe que gatos adoram. Controla peso e saúde urinária pós-castração.",
    images: [
      "https://cobasi.vteximg.com.br/arquivos/ids/1064723/0-WHISKAS-ADULTO-CASTRADOS-PEIXE-10KG.png?v=638689397325170000",
    ],
    desc: "Ração para gatos castrados com sabor peixe. Fórmula balanceada para controle de peso.",
    benefits: ["Sabor peixe", "Para castrados", "Controle de peso", "Nutrição completa"],
  },
  {
    name: "Ração Golden Gatos Castrados Salmão",
    brand: "Golden",
    rating: 4.9,
    popular: true,
    cat: "cats",
    weight: "10.1kg",
    price: "R$ 189,90",
    age: "Adulto castrado (1+ anos)",
    size: "Todas as raças",
    recommendation: "Super premium. Recomendada por veterinários para gatos castrados. Controla pH urinário.",
    ingredients: "Salmão, arroz, gordura de frango, polpa de beterraba, taurina, ômega 3",
    images: [
      "https://cobasi.vteximg.com.br/arquivos/ids/278723/GOLDEN-GATOS-CASTR-SALMAO-101-KG.jpg?v=638799905443270000",
    ],
    desc: "Ração super premium para gatos castrados. Sabor salmão com fórmula que ajuda no controle do peso e saúde urinária.",
    benefits: ["Super premium", "Salmão real", "Saúde urinária", "Pelo sedoso"],
  },
  {
    name: "Ração Golden Gatos Castrados Frango",
    brand: "Golden",
    rating: 4.9,
    cat: "cats",
    weight: "10.1kg",
    price: "R$ 179,90",
    age: "Adulto castrado (1+ anos)",
    size: "Todas as raças",
    recommendation: "Linha super premium. Ideal para gatos castrados que precisam controlar o peso.",
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
    price: "R$ 159,90",
    age: "Adulto castrado (1+ anos)",
    size: "Todas as raças",
    recommendation: "Ótimo custo-benefício na linha premium. Ideal para quem busca qualidade sem pesar no bolso.",
    images: [
      "https://cobasi.vteximg.com.br/arquivos/ids/1051457/Golden-Special-Castrados-Frango-Carne-3kg.png?v=638336799858500000",
    ],
    desc: "Linha Golden Special para gatos castrados. Frango e carne com fórmula exclusiva.",
    benefits: ["Frango + carne", "Para castrados", "Custo-benefício", "Nutrição completa"],
  },
  {
    name: "Ração Golden Special Gatos Frango e Carne",
    brand: "Golden",
    rating: 4.9,
    cat: "cats",
    weight: "10.1kg",
    price: "R$ 149,90",
    age: "Adulto (1 a 7 anos)",
    size: "Todas as raças",
    recommendation: "Para gatos adultos não castrados. Sabor irresistível com nutrição equilibrada.",
    images: [
      "https://cobasi.vteximg.com.br/arquivos/ids/1051462/Golden-Special-Frango-Carne-3kg.png?v=639058023656200000",
    ],
    desc: "Linha Golden Special para gatos adultos. Combinação de frango e carne com fórmula equilibrada.",
    benefits: ["Frango + carne", "Nutrição completa", "Custo-benefício", "Marca confiável"],
  },
  {
    name: "Petisco Whiskas Temptations Anti Bola de Pelo",
    brand: "Whiskas",
    rating: 4.9,
    cat: "cats",
    weight: "80g",
    price: "R$ 12,90",
    age: "Adulto (1+ anos)",
    size: "Todas as raças",
    recommendation: "Ofereça até 15 unidades por dia. Ajuda a eliminar bolas de pelo naturalmente.",
    images: [
      "https://cobasi.vteximg.com.br/arquivos/ids/1042487/Petiscos-Anti-bola-de-pelo-Whiskas-40g.jpg?v=638753893779770000",
    ],
    desc: "Petisco funcional que ajuda no controle de bolas de pelo. Crocante por fora e macio por dentro.",
    benefits: ["Anti bola de pelo", "Crocante e macio", "Irresistível", "Com vitaminas"],
  },

  // ─── FILHOTES ───
  {
    name: "Ração Pedigree Filhotes Carne",
    brand: "Pedigree",
    rating: 4.8,
    popular: true,
    cat: "puppies",
    weight: "10.1kg",
    price: "R$ 119,90",
    age: "Filhote (2 a 12 meses)",
    size: "Todos os portes",
    recommendation: "Servir 3-4x ao dia até 6 meses, depois 2x ao dia. Manter água fresca disponível.",
    ingredients: "Cereais, farinha de carne, DHA, cálcio, fósforo, vitaminas A, D, E",
    images: [
      "https://cobasi.vteximg.com.br/arquivos/ids/1095404/Racao%20Umida%20Pedigree%20Sache%20Caes%20Filhotes%20Carne%20ao%20Molho.webp?v=639033225153600000",
    ],
    desc: "Ração completa para filhotes com DHA para desenvolvimento cerebral e crescimento saudável dos ossos e dentes.",
    benefits: ["DHA para cérebro", "Ossos fortes", "Pelo macio", "Alta energia"],
  },
  {
    name: "Ração Golden Seleção Natural Frango",
    brand: "Golden",
    rating: 4.8,
    popular: true,
    cat: "puppies",
    weight: "3kg",
    price: "R$ 81,90",
    age: "Filhote (2 a 12 meses)",
    size: "Todos os portes",
    recommendation: "Super premium natural. Sem corantes nem conservantes artificiais. Ideal para filhotes sensíveis.",
    ingredients: "Frango, abóbora, alecrim, arroz integral, óleos naturais",
    images: [
      "https://cobasi.vteximg.com.br/arquivos/ids/939193/racao-golden-selecao-natural-gatos-castrados-frango-com-abobora-e-alecrim-3924008-lado-3kg.jpg?v=638848190534870000",
    ],
    desc: "Linha natural da Golden com ingredientes selecionados. Frango com abóbora e alecrim para nutrição completa.",
    benefits: ["Ingredientes naturais", "Frango + abóbora", "Sem corantes", "Super premium"],
  },

  // ─── PÁSSAROS ───
  // ─── PÁSSAROS ───
  {
    name: "Alcon Club Canário",
    brand: "Alcon",
    rating: 4.5,
    cat: "birds",
    weight: "500g",
    price: "R$ 18,90",
    age: "Adulto",
    size: "Canários",
    recommendation: "Mistura balanceada de sementes. Troque diariamente e mantenha água limpa.",
    images: [
      "https://m.media-amazon.com/images/I/61eBYaN2URL._AC_SL1000_.jpg",
    ],
    desc: "Mistura premium de sementes selecionadas para canários. Estimula o canto e mantém a saúde.",
    benefits: ["Sementes selecionadas", "Estimula o canto", "Rico em nutrientes", "Sem sujeira"],
  },
  {
    name: "Alcon Club Calopsita",
    brand: "Alcon",
    rating: 4.7,
    popular: true,
    cat: "birds",
    weight: "500g",
    price: "R$ 22,90",
    age: "Adulto",
    size: "Calopsitas e Agapornis",
    recommendation: "Mix especial para calopsitas. Ofereça junto com frutas e verduras frescas.",
    images: [
      "https://m.media-amazon.com/images/I/61v+OqEr2NL._AC_SL1000_.jpg",
    ],
    desc: "Alimento premium para calopsitas e agapornis. Mix de sementes com vitaminas e minerais essenciais.",
    benefits: ["Penas brilhantes", "Vitaminas e minerais", "Mistura equilibrada", "Alto valor nutricional"],
  },
  {
    name: "Megazoo Mix Papagaio",
    brand: "Megazoo",
    rating: 4.8,
    cat: "birds",
    weight: "700g",
    price: "R$ 32,90",
    age: "Adulto",
    size: "Papagaios e Araras",
    recommendation: "Alimento extrusado completo. Pode complementar com frutas frescas.",
    images: [
      "https://m.media-amazon.com/images/I/51Ci8d+LHZL._AC_SL1000_.jpg",
    ],
    desc: "Ração extrusada para papagaios com frutas desidratadas. Nutrição completa e balanceada.",
    benefits: ["Extrusado premium", "Com frutas", "Sem desperdício", "Nutrição completa"],
  },
  {
    name: "Alcon Club Periquito",
    brand: "Alcon",
    rating: 4.4,
    cat: "birds",
    weight: "500g",
    price: "R$ 16,90",
    age: "Adulto",
    size: "Periquitos",
    recommendation: "Mix de sementes ideal para periquitos australianos. Troque a água diariamente.",
    images: [
      "https://m.media-amazon.com/images/I/61QjH6sTpjL._AC_SL1000_.jpg",
    ],
    desc: "Mistura de sementes selecionadas para periquitos. Enriquecida com vitaminas para penas saudáveis.",
    benefits: ["Sementes premium", "Penas saudáveis", "Rico em vitaminas", "Alta palatabilidade"],
  },

  // ─── PEIXES ───
  {
    name: "Tetra ColorBits Tropical",
    brand: "Tetra",
    rating: 4.6,
    popular: true,
    cat: "fish",
    weight: "75g",
    price: "R$ 34,90",
    age: "Adulto",
    size: "Peixes tropicais",
    recommendation: "Ofereça 2-3x ao dia a quantidade consumida em 2 minutos. Não turva a água.",
    images: [
      "https://m.media-amazon.com/images/I/71tq7VsjuEL._AC_SL1500_.jpg",
    ],
    desc: "Alimento em grânulos para peixes tropicais. Realça as cores naturais dos peixes ornamentais.",
    benefits: ["Realça cores", "Não turva água", "Alta digestão", "Rico em proteínas"],
  },
  {
    name: "Alcon Betta Granulado",
    brand: "Alcon",
    rating: 4.8,
    cat: "fish",
    weight: "10g",
    price: "R$ 9,90",
    age: "Adulto",
    size: "Peixes Betta",
    recommendation: "Ofereça 3-4 grânulos por vez, 2x ao dia. Remova sobras para não turvar a água.",
    images: [
      "https://m.media-amazon.com/images/I/61PkXJHmURL._AC_SL1000_.jpg",
    ],
    desc: "Micro grânulos flutuantes para peixes Betta. Formulação exclusiva que não turva a água.",
    benefits: ["Micro grânulos", "Não turva água", "Rico em proteínas", "Cores vibrantes"],
  },
  {
    name: "Tetra Min Flakes",
    brand: "Tetra",
    rating: 4.7,
    cat: "fish",
    weight: "52g",
    price: "R$ 29,90",
    age: "Adulto",
    size: "Todos os peixes tropicais",
    recommendation: "Alimento básico em flocos. Ofereça 2x ao dia a quantidade consumida em 3 minutos.",
    images: [
      "https://m.media-amazon.com/images/I/71Jh1Y1FEEL._AC_SL1500_.jpg",
    ],
    desc: "Flocos de alta qualidade para peixes tropicais. Fórmula com prebióticos para saúde digestiva.",
    benefits: ["Flocos premium", "Com prebióticos", "Água limpa", "Nutrição completa"],
  },
  {
    name: "Alcon Bottom Fish",
    brand: "Alcon",
    rating: 4.5,
    cat: "fish",
    weight: "50g",
    price: "R$ 19,90",
    age: "Adulto",
    size: "Peixes de fundo",
    recommendation: "Tabletes que afundam rapidamente. Ideal para cascudos, coridoras e botias.",
    images: [
      "https://m.media-amazon.com/images/I/61LQ2TQ3g3L._AC_SL1000_.jpg",
    ],
    desc: "Tabletes nutritivos para peixes de fundo. Afundam rapidamente e não turvam a água.",
    benefits: ["Afunda rápido", "Para peixes de fundo", "Não turva água", "Rico em fibras"],
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

      <div
        className="relative w-full sm:w-[540px] max-h-[94vh] bg-white sm:rounded-3xl rounded-t-3xl flex flex-col"
        style={{ animation: "slideUp 0.3s cubic-bezier(0.16,1,0.3,1)", boxShadow: "0 -10px 60px rgba(0,0,0,0.2)" }}
        onClick={e => e.stopPropagation()}
      >
        <button onClick={onClose} className="absolute top-3 right-3 z-10 w-9 h-9 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center shadow-md hover:bg-white transition-all">
          <X className="w-4 h-4" style={{ color: "#555" }} />
        </button>

        <div className="overflow-y-auto flex-1 overscroll-contain" style={{ WebkitOverflowScrolling: "touch" }}>
          {/* Image */}
          <div className="relative bg-gray-50 w-full" style={{ minHeight: 260 }}>
            {!imgError ? (
              <img src={imgs[imgIdx]} alt={product.name} className="w-full object-contain p-8" style={{ height: 280 }} onError={() => setImgError(true)} />
            ) : (
              <div className="w-full flex items-center justify-center" style={{ height: 280 }}>
                <Package className="w-12 h-12" style={{ color: "#ccc" }} />
              </div>
            )}
            {imgs.length > 1 && (
              <>
                <button onClick={() => { setImgIdx(i => (i - 1 + imgs.length) % imgs.length); setImgError(false); }} className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/80 backdrop-blur flex items-center justify-center shadow-md"><ChevronLeft className="w-4 h-4" /></button>
                <button onClick={() => { setImgIdx(i => (i + 1) % imgs.length); setImgError(false); }} className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/80 backdrop-blur flex items-center justify-center shadow-md"><ChevronRight className="w-4 h-4" /></button>
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
                  {imgs.map((_, i) => (
                    <button key={i} onClick={() => { setImgIdx(i); setImgError(false); }} className="w-2 h-2 rounded-full transition-all" style={{ background: i === imgIdx ? "#F5851F" : "rgba(0,0,0,0.15)" }} />
                  ))}
                </div>
              </>
            )}
          </div>

          {/* Product Info */}
          <div className="p-5 sm:p-6">
            {/* Brand + weight */}
            <div className="flex items-center gap-2 mb-2">
              <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full" style={{ background: "#E3F2FD", color: "#1565C0" }}>{product.brand}</span>
              <span className="text-[10px] font-medium flex items-center gap-1" style={{ color: "#888" }}>
                <Package className="w-3 h-3" /> {product.weight}
              </span>
            </div>

            <h2 className="text-lg font-extrabold mb-1 leading-tight" style={{ color: "#1a3a5c", fontFamily: "'Baloo 2', cursive" }}>{product.name}</h2>

            {/* Rating */}
            <div className="flex items-center gap-1 mb-3">
              {Array.from({ length: 5 }, (_, j) => (
                <Star key={j} className="w-3.5 h-3.5" style={{ color: j < Math.floor(product.rating) ? "#FFB300" : "#e0e0e0", fill: j < Math.floor(product.rating) ? "#FFB300" : "#e0e0e0" }} />
              ))}
              <span className="text-xs font-bold ml-1" style={{ color: "#FFB300" }}>{product.rating}</span>
            </div>

            {/* PRICE */}
            <div className="rounded-2xl p-4 mb-4" style={{ background: "linear-gradient(135deg, #FFF3E0 0%, #FFF8E1 100%)", border: "1.5px solid #FFE0B2" }}>
              <p className="text-[10px] font-bold uppercase mb-1" style={{ color: "#E65100", letterSpacing: 1 }}>Preço a partir de</p>
              <p className="text-2xl font-extrabold" style={{ color: "#E65100", fontFamily: "'Baloo 2', cursive" }}>{product.price}</p>
              <p className="text-[10px] mt-1" style={{ color: "#BF360C" }}>Consulte disponibilidade e promoções pelo WhatsApp</p>
            </div>

            {/* Info cards */}
            <div className="grid grid-cols-2 gap-2 mb-4">
              <div className="flex items-start gap-2 p-3 rounded-xl" style={{ background: "#F3E5F5" }}>
                <Calendar className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: "#7B1FA2" }} />
                <div>
                  <p className="text-[10px] font-bold" style={{ color: "#7B1FA2" }}>Idade</p>
                  <p className="text-[11px] font-medium" style={{ color: "#4A148C" }}>{product.age}</p>
                </div>
              </div>
              <div className="flex items-start gap-2 p-3 rounded-xl" style={{ background: "#E3F2FD" }}>
                <Ruler className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: "#1565C0" }} />
                <div>
                  <p className="text-[10px] font-bold" style={{ color: "#1565C0" }}>Porte</p>
                  <p className="text-[11px] font-medium" style={{ color: "#0D47A1" }}>{product.size}</p>
                </div>
              </div>
            </div>

            {/* Description */}
            <p className="text-sm leading-relaxed mb-4" style={{ color: "#666" }}>{product.desc}</p>

            {/* Recommendation */}
            <div className="flex items-start gap-2 p-3 rounded-xl mb-4" style={{ background: "#E8F5E9", border: "1px solid #C8E6C9" }}>
              <ShieldCheck className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: "#2E7D32" }} />
              <div>
                <p className="text-[10px] font-bold mb-0.5" style={{ color: "#2E7D32" }}>Recomendação</p>
                <p className="text-[11px] leading-relaxed" style={{ color: "#1B5E20" }}>{product.recommendation}</p>
              </div>
            </div>

            {/* Ingredients */}
            {product.ingredients && (
              <div className="flex items-start gap-2 p-3 rounded-xl mb-4" style={{ background: "#FFF3E0", border: "1px solid #FFE0B2" }}>
                <Info className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: "#E65100" }} />
                <div>
                  <p className="text-[10px] font-bold mb-0.5" style={{ color: "#E65100" }}>Ingredientes principais</p>
                  <p className="text-[11px] leading-relaxed" style={{ color: "#BF360C" }}>{product.ingredients}</p>
                </div>
              </div>
            )}

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
              href={`${WA}?text=${encodeURIComponent(`Oi! Quero saber sobre: ${product.name} ${product.weight} — ${product.price}`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3.5 rounded-2xl text-sm font-extrabold text-white transition-all hover:-translate-y-0.5 active:scale-[0.97]"
              style={{ background: "#F5851F", boxShadow: "0 6px 20px rgba(245,133,31,0.35)" }}
            >
              <MessageCircle className="w-4 h-4" />
              Comprar pelo WhatsApp
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

/* ─── Product Card ─── */
const ProductCard = ({ product: p, onSelect }: { product: Product; onSelect: () => void }) => {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="bg-white rounded-[18px] overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg group relative" style={{ border: "1.5px solid #f0f0f0", boxShadow: "0 2px 8px rgba(0,0,0,0.03)" }}>
      {p.popular && (
        <span className="absolute top-2 left-2 text-white font-bold text-[9px] z-10 px-2 py-0.5 rounded-full flex items-center gap-0.5" style={{ background: "#F5851F" }}><Star className="w-2.5 h-2.5" style={{ fill: "#fff" }} /> Popular</span>
      )}
      <div className="relative bg-gray-50 w-full h-36 sm:h-44 flex items-center justify-center p-4 cursor-pointer" onClick={onSelect}>
        {!imgError ? (
          <img src={p.images[0]} alt={p.name} className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300" loading="lazy" onError={() => setImgError(true)} />
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
        <h3 className="text-[12px] sm:text-[13px] font-bold mb-0.5 leading-tight" style={{ color: "#1a3a5c" }}>{p.name}</h3>
        <p className="text-[10px] mb-1" style={{ color: "#aaa" }}>{p.weight}</p>
        <p className="text-sm font-extrabold mb-3" style={{ color: "#E65100" }}>{p.price}</p>
        <div className="flex gap-2">
          <button onClick={onSelect} className="flex-1 flex items-center justify-center gap-1 rounded-xl py-2 text-[11px] font-bold transition-all hover:-translate-y-0.5 active:scale-95" style={{ background: "#E3F2FD", color: "#1565C0" }}>
            <Eye className="w-3 h-3" /> Detalhes
          </button>
          <a href={`${WA}?text=${encodeURIComponent(`Oi, quero comprar: ${p.name} ${p.weight}`)}`} target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-1 rounded-xl py-2 text-[11px] font-bold text-white transition-all hover:-translate-y-0.5 active:scale-95" style={{ background: "#F5851F" }}>
            <MessageCircle className="w-3 h-3" /> Comprar
          </a>
        </div>
      </div>
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
            <p className="text-sm text-white/65">Encontre a ração ideal para o seu pet. Preços e promoções pelo WhatsApp.</p>
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

export default CatalogPage;
