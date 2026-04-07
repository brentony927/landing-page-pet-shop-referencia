import { useParams, Link } from "react-router-dom";
import Header from "@/components/petshop/Header";
import Footer from "@/components/petshop/Footer";
import WhatsAppButton from "@/components/petshop/WhatsAppButton";
import { Dog, Cat, Bone, Drumstick, Bath, Pill, Gamepad2, Watch, Tag, Sparkles, ArrowLeft, MessageCircle } from "lucide-react";

const categoryData: Record<string, { title: string; icon: typeof Dog; description: string; items: string[] }> = {
  cachorro: { title: "Cachorro", icon: Dog, description: "Tudo que seu cão precisa: rações, petiscos, brinquedos e mais.", items: ["Ração Seca", "Ração Úmida", "Petiscos", "Brinquedos", "Coleiras", "Camas", "Comedouros", "Roupas"] },
  gato: { title: "Gato", icon: Cat, description: "Produtos especiais para felinos: areia, rações e acessórios.", items: ["Ração Seca", "Ração Úmida", "Areia Higiênica", "Arranhadores", "Brinquedos", "Camas", "Comedouros"] },
  racoes: { title: "Rações", icon: Bone, description: "Linha completa para todas as raças, idades e portes.", items: ["Premium", "Super Premium", "Natural", "Filhotes", "Adultos", "Idosos", "Raças Pequenas", "Raças Grandes"] },
  petiscos: { title: "Petiscos", icon: Drumstick, description: "Snacks e petiscos que seu pet vai amar.", items: ["Bifinhos", "Ossos", "Dental", "Snacks", "Biscoitos", "Palitos"] },
  higiene: { title: "Higiene", icon: Bath, description: "Produtos para manter seu pet limpo e saudável.", items: ["Shampoo", "Condicionador", "Perfume", "Lenços", "Tapete Higiênico", "Escova"] },
  farmacia: { title: "Farmácia", icon: Pill, description: "Medicamentos e suplementos para a saúde do pet.", items: ["Antipulgas", "Vermífugos", "Vitaminas", "Suplementos", "Pomadas"] },
  brinquedos: { title: "Brinquedos", icon: Gamepad2, description: "Diversão para cães, gatos e outros pets.", items: ["Mordedores", "Bolinhas", "Pelúcia", "Interativos", "Cordas", "Frisbees"] },
  acessorios: { title: "Acessórios", icon: Watch, description: "Coleiras, guias, roupas e caixas de transporte.", items: ["Coleiras", "Guias", "Roupas", "Comedouros", "Caixas de Transporte", "Caminha"] },
  promocoes: { title: "Promoções", icon: Tag, description: "Ofertas especiais e combos imperdíveis.", items: ["Até 30% off", "Combos", "Leve 3 Pague 2", "Queima de Estoque"] },
  servicos: { title: "Serviços", icon: Sparkles, description: "Cuidado e bem-estar para o seu pet.", items: ["Banho & Tosa", "Veterinário", "Táxi Pet", "Hotel Pet", "Tosa Higiênica"] },
};

const WA = "https://wa.me/5569992216764";

const CategoryPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const data = categoryData[slug || ""];

  if (!data) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <div className="pt-32 text-center px-4">
          <h1 className="text-2xl font-extrabold mb-4" style={{ fontFamily: "'Baloo 2', cursive", color: "#1a3a5c" }}>Categoria não encontrada</h1>
          <Link to="/" className="text-sm font-bold" style={{ color: "#F5851F" }}>← Voltar ao início</Link>
        </div>
        <Footer />
      </div>
    );
  }

  const Icon = data.icon;

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="pt-14 md:pt-[92px]">
        {/* Hero */}
        <section className="py-10 sm:py-14 px-4" style={{ background: "linear-gradient(135deg, #0D47A1 0%, #1565C0 100%)" }}>
          <div className="max-w-[1100px] mx-auto">
            <Link to="/" className="inline-flex items-center gap-2 text-sm font-medium mb-5 text-white/70 hover:text-white transition-colors">
              <ArrowLeft className="w-4 h-4" /> Voltar ao início
            </Link>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center" style={{ background: "rgba(255,179,0,0.2)" }}>
                <Icon className="w-7 h-7" style={{ color: "#FFB300" }} />
              </div>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-white" style={{ fontFamily: "'Baloo 2', cursive" }}>{data.title}</h1>
            </div>
            <p className="text-sm text-white/65 max-w-md">{data.description}</p>
          </div>
        </section>

        {/* Grid */}
        <section className="py-10 sm:py-14 px-4">
          <div className="max-w-[1100px] mx-auto">
            <h2 className="text-xl font-extrabold mb-6" style={{ fontFamily: "'Baloo 2', cursive", color: "#1a3a5c" }}>Navegue por subcategoria</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
              {data.items.map(item => (
                <a key={item} href={`${WA}?text=${encodeURIComponent(`Oi, quero saber sobre: ${item} - ${data.title}`)}`} target="_blank" rel="noopener noreferrer" className="rounded-[16px] p-5 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg group" style={{ border: "1.5px solid #f0f0f0", boxShadow: "0 2px 8px rgba(0,0,0,0.03)" }}>
                  <span className="text-sm font-bold block mb-1" style={{ color: "#1a3a5c" }}>{item}</span>
                  <span className="text-xs font-bold group-hover:gap-2 transition-all inline-flex items-center gap-1" style={{ color: "#F5851F" }}>Consultar →</span>
                </a>
              ))}
            </div>

            <div className="mt-10 text-center">
              <p className="text-sm mb-4" style={{ color: "#888" }}>Não encontrou? Fale direto com a gente.</p>
              <a href={WA} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-xl px-7 py-3.5 text-sm font-extrabold text-white transition-all hover:-translate-y-0.5 active:scale-95" style={{ background: "#F5851F", boxShadow: "0 8px 24px rgba(245,133,31,0.3)" }}>
                <MessageCircle className="w-4 h-4" /> FALAR NO WHATSAPP
              </a>
            </div>
          </div>
        </section>
      </div>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default CategoryPage;
