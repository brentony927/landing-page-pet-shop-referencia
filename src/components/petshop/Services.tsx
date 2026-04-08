import { Bath, Scissors, Bone, Truck, MessageCircle, ArrowRight, Users, Zap } from "lucide-react";
import { useInView } from "@/hooks/useInView";

const WA = "https://wa.me/5569992216764?text=Oi%2C%20quero%20agendar%20um%20banho%20pro%20meu%20pet";

const Services = () => {
  const { ref, visible } = useInView(0.08);

  return (
    <section id="servicos" className="py-10 sm:py-18 lg:py-24 px-4 bg-white" ref={ref}>
      <div className={`max-w-[1100px] mx-auto scroll-fade-up ${visible ? "visible" : ""}`}>
        <div className="text-center mb-10 sm:mb-14">
          <span className="inline-block text-[10px] font-extrabold uppercase tracking-[0.18em] mb-2.5 px-4 py-1.5 rounded-full" style={{ background: "var(--pet-orange-light)", color: "var(--pet-action)" }}>Nossos Serviços</span>
          <h2 className="text-[24px] sm:text-3xl lg:text-[40px] font-extrabold leading-tight" style={{ fontFamily: "'Baloo 2', cursive", color: "var(--pet-navy)" }}>
            Tudo pro seu pet em um só lugar
          </h2>
          <p className="text-sm text-gray-400 mt-2 max-w-md mx-auto">Serviço completo com qualidade e carinho. Mais de 5.000 pets atendidos por ano.</p>
        </div>

        {/* Main card — gatilho de prova social */}
        <div className="rounded-[22px] p-6 sm:p-8 lg:p-10 mb-4 relative overflow-hidden transition-all duration-300 hover:-translate-y-1 group" style={{ background: "var(--pet-action)", boxShadow: "0 20px 50px var(--pet-action-glow)" }}>
          <div className="absolute top-3 right-3 flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 text-white text-[9px] font-extrabold uppercase tracking-wider">
            <Zap className="w-3 h-3" /> Mais pedido
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center gap-5">
            <div className="flex-1">
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4 bg-white/15 backdrop-blur-sm">
                <Bath className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-1.5" style={{ fontFamily: "'Baloo 2', cursive" }}>Banho & Tosa</h3>
              <p className="text-sm text-white/80 mb-1 max-w-sm leading-relaxed">Seu pet sai cheiroso em menos de 1 hora. Produtos profissionais e muito carinho.</p>
              <div className="flex items-center gap-3 mb-5">
                <p className="text-sm font-extrabold text-white/90">A partir de <span className="text-xl text-white">R$ 35</span></p>
                <span className="flex items-center gap-1 text-[10px] font-bold text-white/60"><Users className="w-3 h-3" /> 127 esta semana</span>
              </div>
              <a href={WA} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-2xl px-6 py-3 text-sm font-extrabold bg-white transition-all hover:-translate-y-0.5 active:scale-95" style={{ color: "var(--pet-action-dark)", boxShadow: "0 4px 16px rgba(0,0,0,0.15)" }}>
                <MessageCircle className="w-4 h-4" /> Agendar agora
              </a>
            </div>
          </div>
          <div className="absolute -right-10 -bottom-10 w-40 h-40 rounded-full bg-white/5" />
          <div className="absolute right-20 top-16 w-20 h-20 rounded-full bg-white/[0.03]" />
        </div>

        {/* Secondary cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {[
            { icon: Scissors, title: "Tosa Higiênica", desc: "Áreas sensíveis com cuidado total", price: "R$ 20", bg: "var(--pet-orange-light)", iconColor: "var(--pet-action)" },
            { icon: Bone, title: "Rações & Petiscos", desc: "Marcas líderes com entrega grátis", price: null, bg: "var(--pet-yellow-light)", iconColor: "var(--pet-yellow)", link: "/catalogo", linkText: "Ver catálogo" },
            { icon: Truck, title: "Entrega Rápida", desc: "No mesmo dia, sem taxa mínima", price: null, bg: "var(--pet-green-light)", iconColor: "var(--pet-green)" },
          ].map(c => (
            <div key={c.title} className="rounded-[18px] p-5 bg-white transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg group/card" style={{ border: "1.5px solid #f0f0f0", boxShadow: "0 2px 12px rgba(0,0,0,0.03)" }}>
              <div className="flex items-start gap-3.5">
                <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover/card:scale-110" style={{ background: c.bg }}>
                  <c.icon className="w-5 h-5" style={{ color: c.iconColor }} />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-[15px] font-extrabold mb-0.5" style={{ fontFamily: "'Baloo 2', cursive", color: "var(--pet-navy)" }}>{c.title}</h3>
                  <p className="text-xs text-gray-400 mb-1.5">{c.desc}</p>
                  {c.price && <p className="text-xs font-bold mb-1" style={{ color: c.iconColor }}>A partir de {c.price}</p>}
                  <a href={c.link || WA} target={c.link ? undefined : "_blank"} rel="noopener noreferrer" className="text-xs font-bold inline-flex items-center gap-1 group-hover/card:gap-2 transition-all" style={{ color: "var(--pet-action)" }}>
                    {c.linkText || "Agendar"} <ArrowRight className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 sm:mt-12 text-center">
          <a href={WA} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-2xl px-7 py-3.5 text-sm font-extrabold text-white transition-all hover:-translate-y-0.5 active:scale-95" style={{ background: "var(--pet-action)", boxShadow: "0 8px 28px var(--pet-action-glow)" }}>
            <MessageCircle className="w-5 h-5" /> Agende pelo WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
