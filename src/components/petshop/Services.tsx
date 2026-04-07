import { Bath, Scissors, Bone, Truck, MessageCircle } from "lucide-react";
import { useInView } from "@/hooks/useInView";

const WA_LINK = "https://wa.me/5569992216764?text=Oi%2C%20quero%20agendar%20um%20banho%20pro%20meu%20pet";

const Services = () => {
  const { ref, visible } = useInView(0.1);

  return (
    <section id="servicos" className="py-14 sm:py-20 px-4 bg-white" ref={ref}>
      <div className={`max-w-[1200px] mx-auto scroll-fade-up ${visible ? "visible" : ""}`}>
        <div className="text-center mb-10 sm:mb-14">
          <span className="inline-block text-[11px] font-bold uppercase tracking-widest mb-3 px-4 py-1.5 rounded-full" style={{ background: "var(--pet-orange-light)", color: "var(--pet-orange)" }}>
            Nossos Serviços
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold" style={{ fontFamily: "'Baloo 2', cursive", color: "var(--pet-blue-dark)" }}>
            Tudo pro seu pet em um só lugar
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          {/* Card principal */}
          <div
            className="md:col-span-7 relative rounded-2xl p-6 sm:p-8 md:p-10 overflow-hidden cursor-pointer transition-all duration-300"
            style={{ background: "var(--pet-orange)", boxShadow: "0 8px 40px rgba(245,133,31,0.25)" }}
            onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "0 20px 50px rgba(245,133,31,0.35)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "0 8px 40px rgba(245,133,31,0.25)"; }}
          >
            <span className="absolute top-3 right-3 text-[10px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full bg-white/20 text-white">
              ⭐ Mais pedido
            </span>
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center mb-5 bg-white/20">
              <Bath className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
            </div>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold mb-2 text-white" style={{ fontFamily: "'Baloo 2', cursive" }}>
              Banho & Tosa
            </h3>
            <p className="text-sm sm:text-base leading-relaxed mb-2 max-w-md text-white/80">
              Seu pet sai cheiroso em menos de 1 hora. Produtos profissionais.
            </p>
            <p className="text-sm font-extrabold mb-5 text-white/90">
              A partir de <span className="text-xl sm:text-2xl text-white">R$ 35</span>
            </p>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl px-6 py-2.5 sm:px-7 sm:py-3 text-sm font-extrabold transition-all duration-200 hover:-translate-y-0.5"
              style={{ background: "#FFA000", color: "#fff", boxShadow: "0 4px 14px rgba(0,0,0,0.2)" }}
            >
              <MessageCircle className="w-4 h-4" />
              Agendar agora
            </a>
            <div className="absolute -right-8 -bottom-8 w-32 h-32 rounded-full bg-white/5" />
          </div>

          <div className="md:col-span-5 flex flex-col gap-3 sm:gap-4">
            {/* Tosa */}
            <div className="rounded-2xl p-5 sm:p-6 bg-white cursor-pointer transition-all duration-300 hover:-translate-y-1" style={{ border: "1px solid var(--pet-gray-border)", boxShadow: "0 2px 12px rgba(0,0,0,0.04)" }}>
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "var(--pet-blue-light)" }}>
                  <Scissors className="w-5 h-5" style={{ color: "var(--pet-blue)" }} />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-extrabold mb-0.5" style={{ fontFamily: "'Baloo 2', cursive", color: "#333" }}>Tosa Higiênica</h3>
                  <p className="text-xs sm:text-sm leading-relaxed mb-1" style={{ color: "var(--pet-gray)" }}>Áreas sensíveis limpas com cuidado.</p>
                  <p className="text-xs font-extrabold mb-1" style={{ color: "var(--pet-blue)" }}>A partir de R$ 20</p>
                  <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="text-xs sm:text-sm font-bold" style={{ color: "var(--pet-orange)" }}>Agendar →</a>
                </div>
              </div>
            </div>

            {/* Rações */}
            <div className="rounded-2xl p-5 sm:p-6 bg-white cursor-pointer transition-all duration-300 hover:-translate-y-1" style={{ border: "1px solid var(--pet-gray-border)", boxShadow: "0 2px 12px rgba(0,0,0,0.04)" }}>
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "var(--pet-yellow-light)" }}>
                  <Bone className="w-5 h-5" style={{ color: "var(--pet-yellow-dark)" }} />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-extrabold mb-0.5" style={{ fontFamily: "'Baloo 2', cursive", color: "#333" }}>Rações & Petiscos</h3>
                  <p className="text-xs sm:text-sm leading-relaxed mb-1" style={{ color: "var(--pet-gray)" }}>Entrega no bairro, sem taxa mínima.</p>
                  <a href="/catalogo" className="text-xs sm:text-sm font-bold" style={{ color: "var(--pet-orange)" }}>Ver catálogo →</a>
                </div>
              </div>
            </div>

            {/* Entrega */}
            <div className="rounded-2xl p-5 sm:p-6 cursor-pointer transition-all duration-300 hover:-translate-y-1 text-white" style={{ background: "var(--pet-blue)", boxShadow: "0 8px 30px rgba(30,136,229,0.25)" }}>
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "var(--pet-orange)" }}>
                  <Truck className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-sm sm:text-base font-extrabold">Entrega no mesmo dia</h3>
                  <p className="text-xs text-white/60">Chega na sua porta no bairro</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 sm:mt-14 text-center">
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl px-7 py-3.5 text-sm font-extrabold transition-all duration-200 hover:-translate-y-0.5 text-white"
            style={{ background: "var(--pet-blue)", boxShadow: "0 8px 30px rgba(30,136,229,0.3)" }}
          >
            <MessageCircle className="w-5 h-5" />
            Agende pelo WhatsApp agora
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
