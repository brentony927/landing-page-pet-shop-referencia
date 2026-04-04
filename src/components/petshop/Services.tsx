import { Bath, Scissors, Bone, Truck, Star, ArrowRight } from "lucide-react";

const Services = () => {
  return (
    <section id="servicos" className="py-16 md:py-20 px-4 bg-white">
      <div className="max-w-[1100px] mx-auto">
        <div className="flex items-end justify-between mb-10">
          <h2 className="text-2xl md:text-[2rem] font-black leading-tight" style={{ fontFamily: "'Fraunces', Georgia, serif", color: "#1c1917" }}>
            Banho, tosa e ração
          </h2>
          <a href="https://wa.me/5569992216764" className="hidden md:block text-sm font-semibold hover:underline" style={{ color: "#16a34a" }}>
            Agendar pelo WhatsApp →
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          {/* DESTAQUE — Banho & Tosa ocupa 7 colunas */}
          <div
            className="md:col-span-7 relative rounded-2xl p-8 md:p-10 overflow-hidden cursor-pointer transition-all duration-300 group"
            style={{ background: "#f0fdf4", border: "1.5px solid #16a34a" }}
            onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-3px)"; e.currentTarget.style.boxShadow = "0 16px 40px rgba(22,163,74,0.12)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "none"; }}
          >
            <span className="absolute top-0 right-6 bg-[#16a34a] text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-b-md">
              Mais pedido
            </span>
            <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5" style={{ background: "#16a34a" }}>
              <Bath className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-2xl md:text-3xl font-black mb-3" style={{ fontFamily: "'Fraunces', Georgia, serif", color: "#1c1917" }}>
              Banho & Tosa
            </h3>
            <p className="text-base leading-relaxed mb-6 max-w-md" style={{ color: "#57534e" }}>
              Banho completo com produtos profissionais, secagem e acabamento pra todas as raças. Seu pet sai cheiroso e bonito.
            </p>
            <a
              href="https://wa.me/5569992216764"
              className="inline-flex items-center gap-2 rounded-lg px-6 py-3 text-sm font-bold text-white transition-all duration-200 hover:-translate-y-0.5"
              style={{ background: "#f97316" }}
              onMouseEnter={(e) => e.currentTarget.style.background = "#c2410c"}
              onMouseLeave={(e) => e.currentTarget.style.background = "#f97316"}
            >
              Agendar agora <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Cards menores empilhados — 5 colunas */}
          <div className="md:col-span-5 flex flex-col gap-4">
            <div
              className="rounded-2xl p-6 bg-white cursor-pointer transition-all duration-300"
              style={{ border: "1.5px solid #e7e5e4" }}
              onMouseEnter={(e) => { e.currentTarget.style.boxShadow = "0 8px 24px rgba(0,0,0,0.06)"; e.currentTarget.style.transform = "translateY(-2px)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.boxShadow = "none"; e.currentTarget.style.transform = "none"; }}
            >
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 bg-stone-100">
                  <Scissors className="w-5 h-5" style={{ color: "#7c3aed" }} />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-1" style={{ fontFamily: "'Fraunces', Georgia, serif", color: "#1c1917" }}>Tosa Higiênica</h3>
                  <p className="text-sm leading-relaxed mb-3" style={{ color: "#78716c" }}>Higienização das áreas sensíveis com cuidado e segurança.</p>
                  <a href="https://wa.me/5569992216764" className="text-sm font-semibold hover:underline" style={{ color: "#16a34a" }}>Agendar →</a>
                </div>
              </div>
            </div>

            <div
              className="rounded-2xl p-6 bg-white cursor-pointer transition-all duration-300"
              style={{ border: "1.5px solid #e7e5e4" }}
              onMouseEnter={(e) => { e.currentTarget.style.boxShadow = "0 8px 24px rgba(0,0,0,0.06)"; e.currentTarget.style.transform = "translateY(-2px)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.boxShadow = "none"; e.currentTarget.style.transform = "none"; }}
            >
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 bg-stone-100">
                  <Bone className="w-5 h-5" style={{ color: "#f97316" }} />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-1" style={{ fontFamily: "'Fraunces', Georgia, serif", color: "#1c1917" }}>Rações & Petiscos</h3>
                  <p className="text-sm leading-relaxed mb-3" style={{ color: "#78716c" }}>Linha completa de rações. Entrega no bairro no mesmo dia.</p>
                  <a href="https://wa.me/5569992216764" className="text-sm font-semibold hover:underline" style={{ color: "#16a34a" }}>Ver rações →</a>
                </div>
              </div>
            </div>

            <div
              className="rounded-2xl p-6 cursor-pointer transition-all duration-300"
              style={{ background: "#1c1917" }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 8px 24px rgba(0,0,0,0.15)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "none"; }}
            >
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "#f97316" }}>
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
      </div>
    </section>
  );
};

export default Services;
