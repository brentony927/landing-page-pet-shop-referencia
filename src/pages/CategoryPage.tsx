import { useParams, Link } from "react-router-dom";
import Header from "@/components/petshop/Header";
import Footer from "@/components/petshop/Footer";
import WhatsAppButton from "@/components/petshop/WhatsAppButton";
import { Dog, Cat, Bone, Drumstick, Bath, Pill, Gamepad2, Watch, Tag, Sparkles, ArrowLeft } from "lucide-react";

const categoryData: Record<string, { title: string; icon: typeof Dog; description: string; items: string[] }> = {
  cachorro: {
    title: "Cachorro",
    icon: Dog,
    description: "Tudo que seu cão precisa: rações, petiscos, brinquedos, acessórios e muito mais.",
    items: ["Ração Seca", "Ração Úmida", "Petiscos", "Brinquedos", "Coleiras", "Camas", "Comedouros", "Roupas"],
  },
  gato: {
    title: "Gato",
    icon: Cat,
    description: "Produtos especiais para felinos: areia, rações, arranhadores e acessórios.",
    items: ["Ração Seca", "Ração Úmida", "Areia Higiênica", "Arranhadores", "Brinquedos", "Camas", "Comedouros"],
  },
  racoes: {
    title: "Rações",
    icon: Bone,
    description: "Linha completa de rações para todas as raças, idades e portes.",
    items: ["Premium", "Super Premium", "Natural", "Filhotes", "Adultos", "Idosos", "Raças Pequenas", "Raças Grandes"],
  },
  petiscos: {
    title: "Petiscos",
    icon: Drumstick,
    description: "Snacks e petiscos que seu pet vai amar.",
    items: ["Bifinhos", "Ossos", "Dental", "Snacks", "Biscoitos", "Palitos"],
  },
  higiene: {
    title: "Higiene",
    icon: Bath,
    description: "Produtos de higiene e cuidado para manter seu pet sempre limpo e saudável.",
    items: ["Shampoo", "Condicionador", "Perfume", "Lenços", "Tapete Higiênico", "Escova"],
  },
  farmacia: {
    title: "Farmácia",
    icon: Pill,
    description: "Medicamentos e suplementos para a saúde do seu pet.",
    items: ["Antipulgas", "Vermífugos", "Vitaminas", "Suplementos", "Pomadas"],
  },
  brinquedos: {
    title: "Brinquedos",
    icon: Gamepad2,
    description: "Diversão garantida para cães, gatos e outros pets.",
    items: ["Mordedores", "Bolinhas", "Pelúcia", "Interativos", "Cordas", "Frisbees"],
  },
  acessorios: {
    title: "Acessórios",
    icon: Watch,
    description: "Coleiras, guias, roupas, caixas de transporte e muito mais.",
    items: ["Coleiras", "Guias", "Roupas", "Comedouros", "Caixas de Transporte", "Caminha"],
  },
  promocoes: {
    title: "Promoções",
    icon: Tag,
    description: "Ofertas especiais e combos com preços imperdíveis.",
    items: ["Até 30% off", "Combos", "Leve 3 Pague 2", "Queima de Estoque"],
  },
  servicos: {
    title: "Serviços",
    icon: Sparkles,
    description: "Nossos serviços de cuidado e bem-estar para o seu pet.",
    items: ["Banho & Tosa", "Veterinário", "Táxi Pet", "Hotel Pet", "Tosa Higiênica"],
  },
};

const CategoryPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const data = categoryData[slug || ""];

  if (!data) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <div className="pt-32 text-center px-4">
          <h1 className="text-2xl font-bold mb-4" style={{ color: "var(--txt)" }}>Categoria não encontrada</h1>
          <Link to="/" className="text-sm font-bold" style={{ color: "var(--verde)" }}>← Voltar ao início</Link>
        </div>
        <Footer />
      </div>
    );
  }

  const Icon = data.icon;

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div style={{ paddingTop: "calc(64px + 32px)" }}>
        {/* Hero da categoria */}
        <section className="py-12 md:py-16 px-4" style={{ background: "var(--verde-bg)" }}>
          <div className="max-w-[1100px] mx-auto">
            <Link to="/" className="inline-flex items-center gap-2 text-sm font-medium mb-6 transition-colors duration-200"
              style={{ color: "var(--txt2)" }}
              onMouseEnter={(e) => e.currentTarget.style.color = "var(--verde)"}
              onMouseLeave={(e) => e.currentTarget.style.color = "var(--txt2)"}
            >
              <ArrowLeft className="w-4 h-4" />
              Voltar ao início
            </Link>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center" style={{ background: "var(--verde)", color: "#fff" }}>
                <Icon className="w-7 h-7" />
              </div>
              <h1 className="text-3xl md:text-4xl font-black" style={{ fontFamily: "'Fraunces', Georgia, serif", color: "var(--txt)" }}>
                {data.title}
              </h1>
            </div>
            <p className="text-base max-w-lg" style={{ color: "var(--txt2)" }}>{data.description}</p>
          </div>
        </section>

        {/* Grid de subcategorias */}
        <section className="py-12 px-4">
          <div className="max-w-[1100px] mx-auto">
            <h2 className="text-xl font-bold mb-8" style={{ fontFamily: "'Fraunces', Georgia, serif", color: "var(--txt)" }}>
              Navegue por subcategoria
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {data.items.map((item) => (
                <a
                  key={item}
                  href="https://wa.me/5569992216764"
                  className="rounded-xl p-5 text-center transition-all duration-200 hover:-translate-y-1 group"
                  style={{ border: "1px solid var(--borda)" }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "var(--verde)";
                    e.currentTarget.style.boxShadow = "0 8px 20px rgba(22,163,74,0.1)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "var(--borda)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  <span className="text-sm font-semibold block mb-1" style={{ color: "var(--txt)" }}>{item}</span>
                  <span className="text-xs" style={{ color: "var(--verde)" }}>Consultar →</span>
                </a>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-12 text-center">
              <p className="text-base mb-4" style={{ color: "var(--txt2)" }}>
                Não encontrou o que procura? Fale direto com a gente.
              </p>
              <a
                href="https://wa.me/5569992216764"
                className="inline-block rounded-md px-8 py-3.5 text-sm font-bold text-white transition-all duration-200 hover:-translate-y-0.5"
                style={{ background: "var(--laranja)" }}
                onMouseEnter={(e) => e.currentTarget.style.background = "var(--laranja-escuro)"}
                onMouseLeave={(e) => e.currentTarget.style.background = "var(--laranja)"}
              >
                FALAR NO WHATSAPP
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
