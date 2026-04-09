import { Dog, Cat, Bird, Fish, ShoppingBag, Sparkles } from "lucide-react";
import { useInView } from "@/hooks/useInView";

const featured = [
  { icon: Dog, title: "Kit Banho Completo", desc: "Shampoo + condicionador + perfume para cães de todas as raças", emoji: "🧴" },
  { icon: Cat, title: "Areia Higiênica 10kg", desc: "Areia granulada com controle de odor. Dura até 30 dias.", emoji: "🐱" },
  { icon: ShoppingBag, title: "Combo Ração + Petisco", desc: "Ração 15kg + pacote de petiscos grátis. Enquanto durar o estoque.", emoji: "🎁" },
  { icon: Bird, title: "Mix Premium Pássaros", desc: "Mistura balanceada de sementes para canários e calopsitas.", emoji: "🐦" },
  { icon: Sparkles, title: "Coleira Antipulgas", desc: "Proteção por até 8 meses. Para cães e gatos de todos os portes.", emoji: "✨" },
  { icon: Fish, title: "Aquário Completo 20L", desc: "Aquário com filtro, iluminação LED e termostato incluso.", emoji: "🐠" },
];

const FeaturedProducts = () => {
  const { ref, visible } = useInView(0.1);

  return (
    <section className="py-16 md:py-20 px-4" style={{ background: "var(--pet-blue-light)" }} ref={ref}>
      <div className="max-w-[1100px] mx-auto">
        <div className="flex items-end justify-between mb-10">
          <h2 className="text-2xl md:text-[2rem] font-extrabold leading-tight" style={{ fontFamily: "'Baloo 2', cursive", color: "var(--pet-navy)" }}>
            Destaques da semana
          </h2>
          <a href={"https://wa.me/5569992216764?text=" + encodeURIComponent("Olá! Gostaria de ver todos os produtos em destaque. Podem me enviar o catálogo?")} target="_blank" rel="noopener noreferrer" className="hidden md:block text-sm font-bold hover:underline" style={{ color: "var(--pet-green)" }}>
            Ver todos →
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {featured.map((f, idx) => (
            <div
              key={f.title}
              className={`rounded-2xl p-6 bg-white cursor-pointer transition-all duration-300 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
              style={{ border: "1.5px solid var(--pet-gray-border)", transitionDelay: `${idx * 60}ms` }}
              onMouseEnter={(e) => { e.currentTarget.style.boxShadow = "0 12px 30px rgba(66,165,245,0.12)"; e.currentTarget.style.transform = "translateY(-4px)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.boxShadow = "none"; e.currentTarget.style.transform = "none"; }}
            >
              <span className="text-3xl mb-3 block">{f.emoji}</span>
              <h3 className="text-base font-extrabold mb-2" style={{ fontFamily: "'Baloo 2', cursive", color: "#333" }}>
                {f.title}
              </h3>
              <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--pet-gray)" }}>{f.desc}</p>
              <a href={`https://wa.me/5569992216764?text=${encodeURIComponent(`Olá! Gostaria de saber o preço e disponibilidade do produto: *${f.title}*`)}`} target="_blank" rel="noopener noreferrer" className="text-sm font-bold hover:underline" style={{ color: "var(--pet-green)" }}>
                Pergunte no WhatsApp →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
