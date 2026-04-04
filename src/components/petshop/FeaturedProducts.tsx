import { Dog, Cat, Bird, Fish, ShoppingBag, Sparkles } from "lucide-react";

const featured = [
  {
    icon: Dog,
    title: "Kit Banho Completo",
    desc: "Shampoo + condicionador + perfume para cães de todas as raças",
    tag: "Mais Vendido",
  },
  {
    icon: Cat,
    title: "Areia Higiênica 10kg",
    desc: "Areia granulada com controle de odor. Dura até 30 dias.",
    tag: "Gatos",
  },
  {
    icon: ShoppingBag,
    title: "Combo Ração + Petisco",
    desc: "Ração 15kg + pacote de petiscos grátis. Enquanto durar o estoque.",
    tag: "Promoção",
  },
  {
    icon: Bird,
    title: "Mix Premium Pássaros",
    desc: "Mistura balanceada de sementes para canários e calopsitas.",
    tag: "Pássaros",
  },
  {
    icon: Sparkles,
    title: "Coleira Antipulgas",
    desc: "Proteção por até 8 meses. Para cães e gatos de todos os portes.",
    tag: "Saúde",
  },
  {
    icon: Fish,
    title: "Aquário Completo 20L",
    desc: "Aquário com filtro, iluminação LED e termostato incluso.",
    tag: "Peixes",
  },
];

const FeaturedProducts = () => {
  return (
    <section className="py-16 md:py-20 px-4" style={{ background: "#fafaf9" }}>
      <div className="max-w-[1100px] mx-auto">
        <p className="text-xs uppercase tracking-widest font-medium mb-3" style={{ color: "var(--verde)" }}>
          Destaques da Semana
        </p>
        <h2 className="text-2xl md:text-[2.4rem] font-black mb-2 leading-tight" style={{ fontFamily: "'Fraunces', Georgia, serif", color: "var(--txt)" }}>
          Produtos que estão saindo rápido
        </h2>
        <p className="text-base mb-12" style={{ color: "var(--txt2)" }}>
          Confira o que os tutores do bairro estão levando.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {featured.map((f) => {
            const Icon = f.icon;
            return (
              <div
                key={f.title}
                className="group rounded-xl p-6 bg-white cursor-pointer transition-all duration-200 hover:-translate-y-1"
                style={{ border: "1px solid var(--borda)" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "var(--verde)";
                  e.currentTarget.style.boxShadow = "0 8px 24px rgba(22,163,74,0.1)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "var(--borda)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center" style={{ background: "var(--verde-bg)" }}>
                    <Icon className="w-5 h-5" style={{ color: "var(--verde)" }} />
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full"
                    style={{ background: "var(--amarelo)", color: "var(--amarelo-texto)" }}
                  >
                    {f.tag}
                  </span>
                </div>
                <h3 className="text-lg font-bold mb-2" style={{ fontFamily: "'Fraunces', Georgia, serif", color: "var(--txt)" }}>
                  {f.title}
                </h3>
                <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--txt2)" }}>{f.desc}</p>
                <a
                  href="https://wa.me/5569992216764"
                  className="text-sm font-bold transition-colors duration-200"
                  style={{ color: "var(--verde)" }}
                >
                  Consultar preço →
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
