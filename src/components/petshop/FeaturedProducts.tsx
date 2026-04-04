import { Dog, Cat, Bird, Fish, ShoppingBag, Sparkles } from "lucide-react";
import { useInView } from "@/hooks/useInView";

const featured = [
  { icon: Dog, title: "Kit Banho Completo", desc: "Shampoo + condicionador + perfume para cães de todas as raças" },
  { icon: Cat, title: "Areia Higiênica 10kg", desc: "Areia granulada com controle de odor. Dura até 30 dias." },
  { icon: ShoppingBag, title: "Combo Ração + Petisco", desc: "Ração 15kg + pacote de petiscos grátis. Enquanto durar o estoque." },
  { icon: Bird, title: "Mix Premium Pássaros", desc: "Mistura balanceada de sementes para canários e calopsitas." },
  { icon: Sparkles, title: "Coleira Antipulgas", desc: "Proteção por até 8 meses. Para cães e gatos de todos os portes." },
  { icon: Fish, title: "Aquário Completo 20L", desc: "Aquário com filtro, iluminação LED e termostato incluso." },
];

const FeaturedProducts = () => {
  const { ref, visible } = useInView(0.1);

  return (
    <section className="py-16 md:py-20 px-4 bg-stone-50" ref={ref}>
      <div className="max-w-[1100px] mx-auto">
        <div className="flex items-end justify-between mb-10">
          <h2 className="text-2xl md:text-[2rem] font-black leading-tight" style={{ fontFamily: "'Fraunces', Georgia, serif", color: "#1c1917" }}>
            Destaques da semana
          </h2>
          <a href="https://wa.me/5569992216764" className="hidden md:block text-sm font-semibold hover:underline" style={{ color: "#16a34a" }}>
            Ver todos →
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {featured.map((f, idx) => {
            const Icon = f.icon;
            return (
              <div
                key={f.title}
                className={`rounded-xl p-6 bg-white cursor-pointer transition-all duration-300 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
                style={{ border: "1px solid #e7e5e4", transitionDelay: `${idx * 60}ms` }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = "0 8px 24px rgba(0,0,0,0.06)";
                  e.currentTarget.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = "none";
                  e.currentTarget.style.transform = "none";
                }}
              >
                <Icon className="w-5 h-5 mb-4" style={{ color: "#78716c" }} />
                <h3 className="text-base font-bold mb-2" style={{ fontFamily: "'Fraunces', Georgia, serif", color: "#1c1917" }}>
                  {f.title}
                </h3>
                <p className="text-sm leading-relaxed mb-4" style={{ color: "#78716c" }}>{f.desc}</p>
                <a href="https://wa.me/5569992216764" className="text-sm font-semibold hover:underline" style={{ color: "#16a34a" }}>
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
