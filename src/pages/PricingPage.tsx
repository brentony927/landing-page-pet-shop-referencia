import { Bath, Scissors, Droplets, Sparkles, Star, MessageCircle, ArrowLeft, Home } from "lucide-react";
import { useInView } from "@/hooks/useInView";
import { Link } from "react-router-dom";
import Header from "@/components/petshop/Header";
import Footer from "@/components/petshop/Footer";

const WA = "https://wa.me/5569992216764?text=Oi%2C%20quero%20agendar%20um%20banho%20pro%20meu%20pet";

const services = [
  { icon: Bath, name: "Banho Simples", size: "Pequeno", price: "R$ 35", popular: false },
  { icon: Bath, name: "Banho Simples", size: "Médio", price: "R$ 45", popular: false },
  { icon: Bath, name: "Banho Simples", size: "Grande", price: "R$ 60", popular: false },
  { icon: Scissors, name: "Banho + Tosa", size: "Pequeno", price: "R$ 55", popular: true },
  { icon: Scissors, name: "Banho + Tosa", size: "Médio", price: "R$ 70", popular: true },
  { icon: Scissors, name: "Banho + Tosa", size: "Grande", price: "R$ 90", popular: false },
  { icon: Scissors, name: "Tosa Higiênica", size: "Todos", price: "R$ 20", popular: false },
  { icon: Droplets, name: "Hidratação", size: "Todos", price: "R$ 25", popular: false },
  { icon: Sparkles, name: "Pacote Completo", size: "Banho+Tosa+Hidratação", price: "R$ 85", popular: true },
];

const PricingPage = () => {
  const { ref, visible } = useInView(0.08);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div style={{ paddingTop: 92 }}>
        <section className="py-10 sm:py-18 lg:py-24 px-4" style={{ background: "var(--pet-bg-alt)" }} ref={ref}>
          <div className={`max-w-[900px] mx-auto scroll-fade-up ${visible ? "visible" : ""}`}>
            {/* Back button */}
            <Link to="/" className="inline-flex items-center gap-2 text-sm font-bold mb-8 transition-all hover:-translate-x-1" style={{ color: "var(--pet-action)" }}>
              <ArrowLeft className="w-4 h-4" /> Voltar ao início
            </Link>

            <div className="text-center mb-10">
              <span className="inline-block text-[10px] font-extrabold uppercase tracking-[0.18em] mb-2.5 px-4 py-1.5 rounded-full" style={{ background: "var(--pet-orange-light)", color: "var(--pet-action)" }}>
                Tabela de Preços
              </span>
              <h1 className="text-[28px] sm:text-4xl lg:text-[48px] font-extrabold" style={{ fontFamily: "'Baloo 2', cursive", color: "var(--pet-navy)" }}>
                Preços transparentes
              </h1>
              <p className="text-sm text-gray-400 mt-2 max-w-md mx-auto">Sem surpresas. Qualidade garantida em todos os serviços.</p>
            </div>

            <div className="rounded-[22px] overflow-hidden bg-white" style={{ border: "1.5px solid #f0f0f0", boxShadow: "0 4px 24px rgba(0,0,0,0.04)" }}>
              {/* Header */}
              <div className="grid grid-cols-12 px-4 sm:px-6 py-3.5 text-[10px] sm:text-xs font-extrabold uppercase tracking-wider" style={{ background: "var(--pet-navy)", color: "rgba(255,255,255,0.7)" }}>
                <div className="col-span-5">Serviço</div>
                <div className="col-span-4">Porte / Tipo</div>
                <div className="col-span-3 text-right">Preço</div>
              </div>

              {services.map((s, i) => (
                <div
                  key={i}
                  className="grid grid-cols-12 items-center px-4 sm:px-6 py-4 transition-colors duration-200 hover:bg-orange-50/50 group"
                  style={{ borderBottom: i < services.length - 1 ? "1px solid #f5f5f5" : "none" }}
                >
                  <div className="col-span-5 flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-200 group-hover:scale-110" style={{ background: "var(--pet-orange-light)" }}>
                      <s.icon className="w-4 h-4" style={{ color: "var(--pet-action)" }} />
                    </div>
                    <p className="text-[13px] sm:text-sm font-bold truncate" style={{ color: "var(--pet-navy)" }}>{s.name}</p>
                  </div>
                  <div className="col-span-4 text-xs sm:text-sm text-gray-400">{s.size}</div>
                  <div className="col-span-3 text-right flex items-center justify-end gap-2">
                    {s.popular && (
                      <span className="hidden sm:inline-flex items-center gap-0.5 px-2 py-0.5 rounded-full text-[9px] font-extrabold uppercase" style={{ background: "var(--pet-orange-light)", color: "var(--pet-action)" }}>
                        <Star className="w-2.5 h-2.5" /> Top
                      </span>
                    )}
                    <span className="text-sm sm:text-base font-extrabold" style={{ color: "var(--pet-action)" }}>{s.price}</span>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-[11px] text-gray-400 text-center mt-4">* Valores sujeitos a alteração conforme raça e porte. Consulte pelo WhatsApp.</p>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a href={WA} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-2xl px-7 py-3.5 text-sm font-extrabold text-white transition-all hover:-translate-y-0.5 active:scale-95" style={{ background: "var(--pet-action)", boxShadow: "0 8px 28px var(--pet-action-glow)" }}>
                <MessageCircle className="w-5 h-5" /> Agendar pelo WhatsApp
              </a>
              <Link to="/" className="inline-flex items-center gap-2 rounded-2xl px-7 py-3.5 text-sm font-bold transition-all hover:-translate-y-0.5 active:scale-95" style={{ border: "1.5px solid #e0e0e0", color: "var(--pet-navy)" }}>
                <Home className="w-4 h-4" /> Página inicial
              </Link>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default PricingPage;
