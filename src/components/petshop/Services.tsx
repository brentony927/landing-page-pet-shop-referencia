import { Bath, Scissors, Bone, Truck, MessageCircle } from "lucide-react";
import { useInView } from "@/hooks/useInView";

const WA_LINK = "https://wa.me/5569992216764?text=Oi%2C%20quero%20agendar%20um%20banho%20pro%20meu%20pet";

const Services = () => {
  const { ref, visible } = useInView(0.1);

  return (
    <section id="servicos" className="py-12 sm:py-16 lg:py-20 px-4 bg-white" ref={ref}>
      <div className={`max-w-[1200px] mx-auto scroll-fade-up ${visible ? "visible" : ""}`}>
        <div className="text-center mb-8 sm:mb-12">
          <span className="inline-block text-[10px] sm:text-[11px] font-bold uppercase tracking-widest mb-2 px-4 py-1.5 rounded-full" style={{ background: "#FFF3E8", color: "#F5851F" }}>
            Nossos Serviços
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold" style={{ fontFamily: "'Baloo 2', cursive", color: "#1565C0" }}>
            Tudo pro seu pet em um só lugar
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
          {/* Card principal */}
          <div
            className="lg:col-span-7 relative rounded-3xl p-6 sm:p-8 lg:p-10 overflow-hidden transition-all duration-300 hover:-translate-y-1"
            style={{ background: "#F5851F", boxShadow: "0 12px 40px rgba(245,133,31,0.3)" }}
          >
            <span className="absolute top-3 right-3 text-[10px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full bg-white/20 text-white">
              ⭐ Mais pedido
            </span>
            <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4 bg-white/20">
              <Bath className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold mb-2 text-white" style={{ fontFamily: "'Baloo 2', cursive" }}>
              Banho & Tosa
            </h3>
            <p className="text-sm sm:text-base leading-relaxed mb-2 max-w-md text-white/85">
              Seu pet sai cheiroso em menos de 1 hora. Produtos profissionais.
            </p>
            <p className="text-sm font-extrabold mb-5 text-white/90">
              A partir de <span className="text-2xl text-white">R$ 35</span>
            </p>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl px-6 py-3 text-sm font-extrabold transition-all duration-200 hover:-translate-y-0.5 active:scale-95"
              style={{ background: "#FFA000", color: "#fff", boxShadow: "0 6px 20px rgba(0,0,0,0.2)" }}
            >
              <MessageCircle className="w-4 h-4" />
              Agendar agora
            </a>
            <div className="absolute -right-8 -bottom-8 w-32 h-32 rounded-full bg-white/5" />
          </div>

          <div className="lg:col-span-5 flex flex-col gap-3">
            {/* Tosa */}
            <div className="rounded-3xl p-5 sm:p-6 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg" style={{ border: "1px solid #E8E8E8", boxShadow: "0 4px 16px rgba(0,0,0,0.04)" }}>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0" style={{ background: "#E3F2FD" }}>
                  <Scissors className="w-5 h-5" style={{ color: "#1E88E5" }} />
                </div>
                <div>
                  <h3 className="text-lg font-extrabold mb-0.5" style={{ fontFamily: "'Baloo 2', cursive", color: "#333" }}>Tosa Higiênica</h3>
                  <p className="text-sm leading-relaxed mb-1.5" style={{ color: "#666" }}>Áreas sensíveis limpas com cuidado.</p>
                  <p className="text-xs font-extrabold mb-1" style={{ color: "#1E88E5" }}>A partir de R$ 20</p>
                  <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="text-sm font-bold" style={{ color: "#F5851F" }}>Agendar →</a>
                </div>
              </div>
            </div>

            {/* Rações */}
            <div className="rounded-3xl p-5 sm:p-6 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg" style={{ border: "1px solid #E8E8E8", boxShadow: "0 4px 16px rgba(0,0,0,0.04)" }}>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0" style={{ background: "#FFF8E1" }}>
                  <Bone className="w-5 h-5" style={{ color: "#FFA000" }} />
                </div>
                <div>
                  <h3 className="text-lg font-extrabold mb-0.5" style={{ fontFamily: "'Baloo 2', cursive", color: "#333" }}>Rações & Petiscos</h3>
                  <p className="text-sm leading-relaxed mb-1.5" style={{ color: "#666" }}>Entrega no bairro, sem taxa mínima.</p>
                  <a href="/catalogo" className="text-sm font-bold" style={{ color: "#F5851F" }}>Ver catálogo →</a>
                </div>
              </div>
            </div>

            {/* Entrega */}
            <div className="rounded-3xl p-5 sm:p-6 text-white transition-all duration-300 hover:-translate-y-1" style={{ background: "#1E88E5", boxShadow: "0 8px 30px rgba(30,136,229,0.3)" }}>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0" style={{ background: "#F5851F" }}>
                  <Truck className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-base font-extrabold">Entrega no mesmo dia</h3>
                  <p className="text-xs text-white/65">Chega na sua porta no bairro</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 sm:mt-12 text-center">
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-2xl px-7 py-3.5 text-sm font-extrabold transition-all duration-200 hover:-translate-y-0.5 active:scale-95 text-white"
            style={{ background: "#1E88E5", boxShadow: "0 8px 30px rgba(30,136,229,0.3)" }}
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
