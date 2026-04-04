import { Dog, Cat, Bird, Fish, ShoppingBag, Sparkles } from "lucide-react";

const featured = [
  {
    icon: Dog,
    title: "Kit Banho Completo",
    desc: "Shampoo + condicionador + perfume para cães de todas as raças",
  },
  {
    icon: Cat,
    title: "Areia Higiênica 10kg",
    desc: "Areia granulada com controle de odor. Dura até 30 dias.",
  },
  {
    icon: ShoppingBag,
    title: "Combo Ração + Petisco",
    desc: "Ração 15kg + pacote de petiscos grátis. Enquanto durar o estoque.",
  },
  {
    icon: Bird,
    title: "Mix Premium Pássaros",
    desc: "Mistura balanceada de sementes para canários e calopsitas.",
  },
  {
    icon: Sparkles,
    title: "Coleira Antipulgas",
    desc: "Proteção por até 8 meses. Para cães e gatos de todos os portes.",
  },
  {
    icon: Fish,
    title: "Aquário Completo 20L",
    desc: "Aquário com filtro, iluminação LED e termostato incluso.",
  },
];

const FeaturedProducts = () => {
  return (
    <section className="py-16 md:py-20 px-4" style={{ background: "#fafaf9" }}>
      <div className="max-w-[1100px] mx-auto">
        <h2 className="text-2xl md:text-[2.4rem] font-black mb-10 leading-tight" style={{ fontFamily: "'Fraunces', Georgia, serif", color: "#1c1917" }}>
          Destaques da semana
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {featured.map((f, idx) => {
            const Icon = f.icon;
            return (
              <div
                key={f.title}
                className="rounded-xl p-6 bg-white cursor-pointer transition-all duration-200"
                style={{ border: "1px solid #e7e5e4" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = "0 6px 20px rgba(0,0,0,0.06)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <Icon className="w-5 h-5 mb-4" style={{ color: idx % 2 === 0 ? "#16a34a" : "#78716c" }} />
                <h3 className="text-lg font-bold mb-2" style={{ fontFamily: "'Fraunces', Georgia, serif", color: "#1c1917" }}>
                  {f.title}
                </h3>
                <p className="text-sm leading-relaxed mb-4" style={{ color: "#78716c" }}>{f.desc}</p>
                <a
                  href="https://wa.me/5569992216764"
                  className="text-sm font-semibold transition-colors duration-200"
                  style={{ color: "#16a34a" }}
                >
                  Pergunte no WhatsApp →
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
