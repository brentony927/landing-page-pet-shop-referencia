import { Bath, Scissors, Bone, Truck, ArrowRight, MessageCircle } from "lucide-react";

const WA_LINK = "https://wa.me/5569992216764?text=Oi%2C%20quero%20agendar%20um%20banho%20pro%20meu%20pet";

const Services = () => {
  return (
    <section id="servicos" className="py-16 md:py-20 px-4" style={{ background: "var(--pet-bg)" }}>
      <div className="max-w-[1100px] mx-auto">
        <h2 className="text-2xl md:text-[2rem] font-extrabold leading-tight mb-10" style={{ fontFamily: "'Baloo 2', cursive", color: "#333" }}>
          🐾 Nossos serviços
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          <div
            className="md:col-span-7 relative rounded-3xl p-8 md:p-10 overflow-hidden cursor-pointer transition-all duration-300"
            style={{ background: "var(--pet-green-light)", border: "2px solid var(--pet-green)", boxShadow: "0 8px 32px rgba(0,0,0,0.06)" }}
            onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "0 16px 40px rgba(76,175,80,0.15)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "0 8px 32px rgba(0,0,0,0.06)"; }}
          >
            <span className="absolute top-0 right-6 text-white text-[10px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-b-md" style={{ background: "var(--pet-green)" }}>
              Mais pedido
            </span>
            <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5" style={{ background: "var(--pet-green)" }}>
              <Bath className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-2xl md:text-3xl font-extrabold mb-3" style={{ fontFamily: "'Baloo 2', cursive", color: "#333" }}>
              Banho & Tosa
            </h3>
            <p className="text-base leading-relaxed mb-2 max-w-md" style={{ color: "var(--pet-gray)" }}>
              Seu pet sai cheiroso em menos de 1 hora. Produtos profissionais, secagem cuidadosa.
            </p>
            <p className="text-sm font-extrabold mb-6" style={{ color: "var(--pet-green-dark)" }}>
              A partir de <span className="text-xl">R$ 35</span>
            </p>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full px-7 py-3 text-sm font-extrabold transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
              style={{ background: "var(--pet-yellow)", color: "#333", boxShadow: "0 4px 14px rgba(255,193,7,0.3)" }}
            >
              <MessageCircle className="w-4 h-4" />
              Agendar agora
            </a>
          </div>

          <div className="md:col-span-5 flex flex-col gap-4">
            <div
              className="rounded-3xl p-6 bg-white cursor-pointer transition-all duration-300"
              style={{ border: "1.5px solid var(--pet-gray-border)", boxShadow: "0 8px 32px rgba(0,0,0,0.06)" }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-3px)"; e.currentTarget.style.boxShadow = "0 12px 30px rgba(0,0,0,0.08)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "0 8px 32px rgba(0,0,0,0.06)"; }}
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "var(--pet-blue-light)" }}>
                  <Scissors className="w-5 h-5" style={{ color: "var(--pet-blue)" }} />
                </div>
                <div>
                  <h3 className="text-lg font-extrabold mb-1" style={{ fontFamily: "'Baloo 2', cursive", color: "#333" }}>Tosa Higiênica</h3>
                  <p className="text-sm leading-relaxed mb-1" style={{ color: "var(--pet-gray)" }}>Áreas sensíveis limpas com cuidado e segurança.</p>
                  <p className="text-xs font-extrabold mb-2" style={{ color: "var(--pet-blue)" }}>A partir de R$ 20</p>
                  <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="text-sm font-bold hover:underline" style={{ color: "var(--pet-green)" }}>Agendar →</a>
                </div>
              </div>
            </div>

            <div
              className="rounded-3xl p-6 bg-white cursor-pointer transition-all duration-300"
              style={{ border: "1.5px solid var(--pet-gray-border)", boxShadow: "0 8px 32px rgba(0,0,0,0.06)" }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-3px)"; e.currentTarget.style.boxShadow = "0 12px 30px rgba(0,0,0,0.08)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "0 8px 32px rgba(0,0,0,0.06)"; }}
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "var(--pet-yellow-light)" }}>
                  <Bone className="w-5 h-5" style={{ color: "var(--pet-yellow-dark)" }} />
                </div>
                <div>
                  <h3 className="text-lg font-extrabold mb-1" style={{ fontFamily: "'Baloo 2', cursive", color: "#333" }}>Rações & Petiscos</h3>
                  <p className="text-sm leading-relaxed mb-1" style={{ color: "var(--pet-gray)" }}>Entrega no bairro no mesmo dia, sem taxa mínima.</p>
                  <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="text-sm font-bold hover:underline" style={{ color: "var(--pet-green)" }}>Pedir pelo WhatsApp →</a>
                </div>
              </div>
            </div>

            <div
              className="rounded-3xl p-6 cursor-pointer transition-all duration-300 text-white"
              style={{ background: "var(--pet-green)", boxShadow: "0 8px 32px rgba(76,175,80,0.15)" }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-3px)"; e.currentTarget.style.boxShadow = "0 16px 40px rgba(76,175,80,0.30)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "0 8px 32px rgba(76,175,80,0.15)"; }}
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "var(--pet-yellow)" }}>
                  <Truck className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-base font-extrabold">Entrega no mesmo dia</h3>
                  <p className="text-xs text-white/70">Chega na sua porta no bairro</p>
                </div>
                <ArrowRight className="w-5 h-5 ml-auto text-white/60" />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full px-8 py-4 text-sm font-extrabold transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
            style={{ background: "var(--pet-yellow)", color: "#333", boxShadow: "0 4px 14px rgba(255,193,7,0.3)" }}
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
