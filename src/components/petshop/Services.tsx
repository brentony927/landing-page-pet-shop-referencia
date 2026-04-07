import { Bath, Scissors, Bone, Truck, ArrowRight } from "lucide-react";

const Services = () => {
  return (
    <section id="servicos" className="py-16 md:py-20 px-4" style={{ background: "var(--pet-bg)" }}>
      <div className="max-w-[1100px] mx-auto">
        <div className="flex items-end justify-between mb-10">
          <h2 className="text-2xl md:text-[2rem] font-extrabold leading-tight" style={{ fontFamily: "'Baloo 2', cursive", color: "#333" }}>
            🐾 Banho, tosa e ração
          </h2>
          <a href="https://wa.me/5569992216764" className="hidden md:block text-sm font-bold hover:underline" style={{ color: "var(--pet-green)" }}>
            Agendar pelo WhatsApp →
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          <div
            className="md:col-span-7 relative rounded-2xl p-8 md:p-10 overflow-hidden cursor-pointer transition-all duration-300 group"
            style={{ background: "var(--pet-green-light)", border: "2px solid var(--pet-green)" }}
            onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "0 16px 40px rgba(76,175,80,0.15)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "none"; }}
          >
            <span className="absolute top-0 right-6 text-white text-[10px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-b-md" style={{ background: "var(--pet-green)" }}>
              ⭐ Mais pedido
            </span>
            <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5" style={{ background: "var(--pet-green)" }}>
              <Bath className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-2xl md:text-3xl font-extrabold mb-3" style={{ fontFamily: "'Baloo 2', cursive", color: "#333" }}>
              Banho & Tosa 🛁
            </h3>
            <p className="text-base leading-relaxed mb-3 max-w-md" style={{ color: "var(--pet-gray)" }}>
              Banho completo com produtos profissionais, secagem e acabamento pra todas as raças. Seu pet sai cheiroso e bonito.
            </p>
            <p className="text-sm font-extrabold mb-6" style={{ color: "var(--pet-green-dark)" }}>
              A partir de <span className="text-xl">R$ 35</span>
            </p>
            <a
              href="https://wa.me/5569992216764"
              className="inline-flex items-center gap-2 rounded-full px-7 py-3 text-sm font-extrabold text-white transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
              style={{ background: "var(--pet-orange)", boxShadow: "0 4px 14px rgba(255,138,101,0.4)" }}
              onMouseEnter={(e) => e.currentTarget.style.background = "var(--pet-orange-dark)"}
              onMouseLeave={(e) => e.currentTarget.style.background = "var(--pet-orange)"}
            >
              Agendar agora <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <div className="md:col-span-5 flex flex-col gap-4">
            <div
              className="rounded-2xl p-6 bg-white cursor-pointer transition-all duration-300"
              style={{ border: "1.5px solid var(--pet-gray-border)" }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-3px)"; e.currentTarget.style.boxShadow = "0 12px 30px rgba(0,0,0,0.08)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "none"; }}
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "var(--pet-blue-light)" }}>
                  <Scissors className="w-5 h-5" style={{ color: "var(--pet-blue)" }} />
                </div>
                <div>
                  <h3 className="text-lg font-extrabold mb-1" style={{ fontFamily: "'Baloo 2', cursive", color: "#333" }}>✂️ Tosa Higiênica</h3>
                  <p className="text-sm leading-relaxed mb-1" style={{ color: "var(--pet-gray)" }}>Higienização das áreas sensíveis com cuidado e segurança.</p>
                  <p className="text-xs font-extrabold mb-2" style={{ color: "var(--pet-blue)" }}>A partir de R$ 20</p>
                  <a href="https://wa.me/5569992216764" className="text-sm font-bold hover:underline" style={{ color: "var(--pet-green)" }}>Agendar →</a>
                </div>
              </div>
            </div>

            <div
              className="rounded-2xl p-6 bg-white cursor-pointer transition-all duration-300"
              style={{ border: "1.5px solid var(--pet-gray-border)" }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-3px)"; e.currentTarget.style.boxShadow = "0 12px 30px rgba(0,0,0,0.08)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "none"; }}
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "var(--pet-yellow-light)" }}>
                  <Bone className="w-5 h-5" style={{ color: "var(--pet-yellow-dark)" }} />
                </div>
                <div>
                  <h3 className="text-lg font-extrabold mb-1" style={{ fontFamily: "'Baloo 2', cursive", color: "#333" }}>🦴 Rações & Petiscos</h3>
                  <p className="text-sm leading-relaxed mb-1" style={{ color: "var(--pet-gray)" }}>Linha completa de rações. Entrega no bairro no mesmo dia.</p>
                  <p className="text-xs font-extrabold mb-2" style={{ color: "var(--pet-yellow-dark)" }}>Consultar pelo WhatsApp</p>
                  <a href="https://wa.me/5569992216764" className="text-sm font-bold hover:underline" style={{ color: "var(--pet-green)" }}>Ver rações →</a>
                </div>
              </div>
            </div>

            <div
              className="rounded-2xl p-6 cursor-pointer transition-all duration-300 text-white"
              style={{ background: "var(--pet-green)" }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-3px)"; e.currentTarget.style.boxShadow = "0 16px 40px rgba(76,175,80,0.30)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "none"; }}
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "var(--pet-yellow)" }}>
                  <Truck className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-base font-extrabold">🚚 Entrega no mesmo dia</h3>
                  <p className="text-xs text-white/70">No bairro, sem taxa mínima</p>
                </div>
                <ArrowRight className="w-5 h-5 ml-auto text-white/60" />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 rounded-2xl p-8 md:p-10 text-center" style={{ background: "var(--pet-yellow-light)", border: "2px dashed var(--pet-yellow)" }}>
          <p className="text-lg md:text-xl font-extrabold mb-4" style={{ fontFamily: "'Baloo 2', cursive", color: "#333" }}>
            🐶 "Seu pet merece o melhor cuidado de Ji-Paraná."
          </p>
          <a
            href="https://wa.me/5569992216764"
            className="inline-block rounded-full px-8 py-3 text-sm font-extrabold text-white transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
            style={{ background: "var(--pet-orange)", boxShadow: "0 4px 14px rgba(255,138,101,0.4)" }}
            onMouseEnter={(e) => e.currentTarget.style.background = "var(--pet-orange-dark)"}
            onMouseLeave={(e) => e.currentTarget.style.background = "var(--pet-orange)"}
          >
            Agendar agora →
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
