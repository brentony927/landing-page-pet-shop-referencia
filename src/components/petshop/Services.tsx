import { Bath, Scissors, Bone, Truck, MessageCircle, ArrowRight } from "lucide-react";
import { useInView } from "@/hooks/useInView";

const WA = "https://wa.me/5569992216764?text=Oi%2C%20quero%20agendar%20um%20banho%20pro%20meu%20pet";

const Services = () => {
  const { ref, visible } = useInView(0.08);

  return (
    <section id="servicos" className="py-12 sm:py-16 lg:py-20 px-4 bg-white" ref={ref}>
      <div className={`max-w-[1100px] mx-auto scroll-fade-up ${visible ? "visible" : ""}`}>
        <div className="text-center mb-8 sm:mb-12">
          <span className="inline-block text-[10px] font-extrabold uppercase tracking-[0.15em] mb-2 px-4 py-1.5 rounded-full" style={{ background: "#FFF3E8", color: "#F5851F" }}>Nossos Serviços</span>
          <h2 className="text-[22px] sm:text-3xl lg:text-4xl font-extrabold" style={{ fontFamily: "'Baloo 2', cursive", color: "#1a3a5c" }}>
            Tudo pro seu pet em um só lugar
          </h2>
        </div>

        {/* Main card */}
        <div className="rounded-[20px] p-6 sm:p-8 lg:p-10 mb-4 relative overflow-hidden transition-all duration-300 hover:-translate-y-1 group" style={{ background: "linear-gradient(135deg, #F5851F 0%, #E06B0A 100%)", boxShadow: "0 16px 48px rgba(245,133,31,0.25)" }}>
          <span className="absolute top-3 right-3 text-[9px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full bg-white/20 text-white">⭐ Mais pedido</span>
          <div className="flex flex-col sm:flex-row sm:items-center gap-5">
            <div className="flex-1">
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4 bg-white/15">
                <Bath className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-1.5" style={{ fontFamily: "'Baloo 2', cursive" }}>Banho & Tosa</h3>
              <p className="text-sm text-white/80 mb-1.5 max-w-sm">Seu pet sai cheiroso em menos de 1 hora. Produtos profissionais e muito carinho.</p>
              <p className="text-sm font-extrabold text-white/90 mb-5">A partir de <span className="text-xl text-white">R$ 35</span></p>
              <a href={WA} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-extrabold bg-white transition-all hover:-translate-y-0.5 active:scale-95" style={{ color: "#E06B0A", boxShadow: "0 4px 16px rgba(0,0,0,0.15)" }}>
                <MessageCircle className="w-4 h-4" /> Agendar agora
              </a>
            </div>
          </div>
          <div className="absolute -right-10 -bottom-10 w-36 h-36 rounded-full bg-white/5" />
        </div>

        {/* Secondary cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {[
            { icon: Scissors, title: "Tosa Higiênica", desc: "Áreas sensíveis com cuidado", price: "R$ 20", bg: "#E3F2FD", iconColor: "#1E88E5" },
            { icon: Bone, title: "Rações & Petiscos", desc: "Entrega grátis no bairro", price: null, bg: "#FFF8E1", iconColor: "#FFA000", link: "/catalogo", linkText: "Ver catálogo" },
            { icon: Truck, title: "Entrega Rápida", desc: "No mesmo dia, sem taxa", price: null, bg: "#E8F5E9", iconColor: "#4CAF50" },
          ].map(c => (
            <div key={c.title} className="rounded-[18px] p-5 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg group/card" style={{ border: "1.5px solid #f0f0f0", boxShadow: "0 2px 12px rgba(0,0,0,0.04)" }}>
              <div className="flex items-start gap-3.5">
                <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: c.bg }}>
                  <c.icon className="w-5 h-5" style={{ color: c.iconColor }} />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-[15px] font-extrabold mb-0.5" style={{ fontFamily: "'Baloo 2', cursive", color: "#1a3a5c" }}>{c.title}</h3>
                  <p className="text-xs text-gray-500 mb-1.5">{c.desc}</p>
                  {c.price && <p className="text-xs font-bold mb-1" style={{ color: c.iconColor }}>A partir de {c.price}</p>}
                  <a href={c.link || WA} target={c.link ? undefined : "_blank"} rel="noopener noreferrer" className="text-xs font-bold inline-flex items-center gap-1 group-hover/card:gap-2 transition-all" style={{ color: "#F5851F" }}>
                    {c.linkText || "Agendar"} <ArrowRight className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 sm:mt-10 text-center">
          <a href={WA} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-xl px-7 py-3.5 text-sm font-extrabold text-white transition-all hover:-translate-y-0.5 active:scale-95" style={{ background: "#1565C0", boxShadow: "0 8px 28px rgba(21,101,192,0.3)" }}>
            <MessageCircle className="w-5 h-5" /> Agende pelo WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
