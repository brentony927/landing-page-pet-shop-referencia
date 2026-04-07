import { Bath, Scissors, Bone, Truck, ArrowRight } from "lucide-react";

const Services = () => {
  return (
    <section id="servicos" className="py-16 md:py-20 px-4 bg-white">
      <div className="max-w-[1100px] mx-auto">
        <div className="flex items-end justify-between mb-10">
          <h2 className="text-2xl md:text-[2rem] font-black leading-tight" style={{ fontFamily: "'Playfair Display', Georgia, serif", color: "#1a1a1a" }}>
            Banho, tosa e ração
          </h2>
          <a href="https://wa.me/5569992216764" className="hidden md:block text-sm font-semibold hover:underline" style={{ color: "#1b4332" }}>
            Agendar pelo WhatsApp →
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          <div
            className="md:col-span-7 relative rounded-2xl p-8 md:p-10 overflow-hidden cursor-pointer transition-all duration-300 group"
            style={{ background: "#f0f7f4", border: "1.5px solid #1b4332" }}
            onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-3px)"; e.currentTarget.style.boxShadow = "0 16px 40px rgba(27,67,50,0.12)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "none"; }}
          >
            <span className="absolute top-0 right-6 bg-[#1b4332] text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-b-md">
              Mais pedido
            </span>
            <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5" style={{ background: "#1b4332" }}>
              <Bath className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-2xl md:text-3xl font-black mb-3" style={{ fontFamily: "'Playfair Display', Georgia, serif", color: "#1a1a1a", fontWeight: 700 }}>
              Banho & Tosa
            </h3>
            <p className="text-base leading-relaxed mb-3 max-w-md" style={{ color: "#6b6b6b" }}>
              Banho completo com produtos profissionais, secagem e acabamento pra todas as raças. Seu pet sai cheiroso e bonito.
            </p>
            <p className="text-sm font-bold mb-6" style={{ color: "#1b4332" }}>
              A partir de <span style={{ fontSize: "1.1rem" }}>R$ 35</span>
            </p>
            <a
              href="https://wa.me/5569992216764"
              className="inline-flex items-center gap-2 rounded-lg px-6 py-3 text-sm font-bold text-white transition-all duration-200 hover:-translate-y-0.5"
              style={{ background: "#e07b39" }}
              onMouseEnter={(e) => e.currentTarget.style.background = "#b85c20"}
              onMouseLeave={(e) => e.currentTarget.style.background = "#e07b39"}
            >
              Agendar agora <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <div className="md:col-span-5 flex flex-col gap-4">
            <div
              className="rounded-2xl p-6 bg-white cursor-pointer transition-all duration-300"
              style={{ border: "1.5px solid #e2ddd6" }}
              onMouseEnter={(e) => { e.currentTarget.style.boxShadow = "0 8px 24px rgba(0,0,0,0.06)"; e.currentTarget.style.transform = "translateY(-2px)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.boxShadow = "none"; e.currentTarget.style.transform = "none"; }}
            >
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 bg-stone-100">
                  <Scissors className="w-5 h-5" style={{ color: "#7c3aed" }} />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-1" style={{ fontFamily: "'Playfair Display', Georgia, serif", color: "#1a1a1a", fontWeight: 700 }}>Tosa Higiênica</h3>
                  <p className="text-sm leading-relaxed mb-1" style={{ color: "#6b6b6b" }}>Higienização das áreas sensíveis com cuidado e segurança.</p>
                  <p className="text-xs font-semibold mb-2" style={{ color: "#7c3aed" }}>A partir de R$ 20</p>
                  <a href="https://wa.me/5569992216764" className="text-sm font-semibold hover:underline" style={{ color: "#1b4332" }}>Agendar →</a>
                </div>
              </div>
            </div>

            <div
              className="rounded-2xl p-6 bg-white cursor-pointer transition-all duration-300"
              style={{ border: "1.5px solid #e2ddd6" }}
              onMouseEnter={(e) => { e.currentTarget.style.boxShadow = "0 8px 24px rgba(0,0,0,0.06)"; e.currentTarget.style.transform = "translateY(-2px)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.boxShadow = "none"; e.currentTarget.style.transform = "none"; }}
            >
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 bg-stone-100">
                  <Bone className="w-5 h-5" style={{ color: "#e07b39" }} />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-1" style={{ fontFamily: "'Playfair Display', Georgia, serif", color: "#1a1a1a", fontWeight: 700 }}>Rações & Petiscos</h3>
                  <p className="text-sm leading-relaxed mb-1" style={{ color: "#6b6b6b" }}>Linha completa de rações. Entrega no bairro no mesmo dia.</p>
                  <p className="text-xs font-semibold mb-2" style={{ color: "#e07b39" }}>Consultar pelo WhatsApp</p>
                  <a href="https://wa.me/5569992216764" className="text-sm font-semibold hover:underline" style={{ color: "#1b4332" }}>Ver rações →</a>
                </div>
              </div>
            </div>

            <div
              className="rounded-2xl p-6 cursor-pointer transition-all duration-300"
              style={{ background: "#1b4332" }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 8px 24px rgba(0,0,0,0.15)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "none"; }}
            >
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "#e07b39" }}>
                  <Truck className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">Entrega no mesmo dia</h3>
                  <p className="text-xs text-stone-400">No bairro, sem taxa mínima</p>
                </div>
                <ArrowRight className="w-5 h-5 text-stone-500 ml-auto" />
              </div>
            </div>
          </div>
        </div>

        {/* Faixa diagonal */}
        <div className="mt-12 rounded-2xl p-8 md:p-10 text-center" style={{ background: "#f9f6f1", border: "1px solid #e2ddd6" }}>
          <p className="text-lg md:text-xl font-bold mb-4" style={{ fontFamily: "'Playfair Display', Georgia, serif", color: "#1a1a1a" }}>
            "Seu pet merece o melhor cuidado de Ji-Paraná."
          </p>
          <a
            href="https://wa.me/5569992216764"
            className="inline-block rounded-lg px-8 py-3 text-sm font-bold text-white transition-all duration-200 hover:-translate-y-0.5"
            style={{ background: "#e07b39" }}
            onMouseEnter={(e) => e.currentTarget.style.background = "#b85c20"}
            onMouseLeave={(e) => e.currentTarget.style.background = "#e07b39"}
          >
            Agendar agora →
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
