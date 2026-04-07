import { Bath, Scissors, Bone, Truck, ArrowRight } from "lucide-react";

const Services = () => {
  return (
    <section id="servicos" className="py-16 md:py-20 px-4 bg-white">
      <div className="max-w-[1100px] mx-auto">
        <div className="flex items-end justify-between mb-10">
          <h2 className="text-2xl md:text-[2rem] font-black leading-tight" style={{ fontFamily: "'Playfair Display', Georgia, serif", color: "var(--txt-primary)" }}>
            Banho, tosa e ração
          </h2>
          <a href="https://wa.me/5569992216764" className="hidden md:block text-sm font-semibold hover:underline" style={{ color: "var(--forest)" }}>
            Agendar pelo WhatsApp →
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          <div
            className="md:col-span-7 relative rounded-2xl p-8 md:p-10 overflow-hidden cursor-pointer transition-all duration-300 group"
            style={{ background: "var(--forest-bg)", border: "1.5px solid var(--forest)" }}
            onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-3px)"; e.currentTarget.style.boxShadow = "0 16px 40px rgba(13,51,33,0.10)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "none"; }}
          >
            <span className="absolute top-0 right-6 text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-b-md" style={{ background: "var(--forest)" }}>
              Mais pedido
            </span>
            <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5" style={{ background: "var(--forest)" }}>
              <Bath className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-2xl md:text-3xl font-black mb-3" style={{ fontFamily: "'Playfair Display', Georgia, serif", color: "var(--txt-primary)", fontWeight: 700 }}>
              Banho & Tosa
            </h3>
            <p className="text-base leading-relaxed mb-3 max-w-md" style={{ color: "var(--txt-secondary)" }}>
              Banho completo com produtos profissionais, secagem e acabamento pra todas as raças. Seu pet sai cheiroso e bonito.
            </p>
            <p className="text-sm font-bold mb-6" style={{ color: "var(--forest)" }}>
              A partir de <span style={{ fontSize: "1.1rem" }}>R$ 35</span>
            </p>
            <a
              href="https://wa.me/5569992216764"
              className="inline-flex items-center gap-2 rounded-lg px-6 py-3 text-sm font-bold text-white transition-all duration-200 hover:-translate-y-0.5"
              style={{ background: "var(--amber)" }}
              onMouseEnter={(e) => e.currentTarget.style.background = "var(--amber-dark)"}
              onMouseLeave={(e) => e.currentTarget.style.background = "var(--amber)"}
            >
              Agendar agora <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <div className="md:col-span-5 flex flex-col gap-4">
            <div
              className="rounded-2xl p-6 bg-white cursor-pointer transition-all duration-300"
              style={{ border: "1.5px solid var(--border)" }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-3px)"; e.currentTarget.style.boxShadow = "0 16px 40px rgba(13,51,33,0.10)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "none"; }}
            >
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 bg-stone-100">
                  <Scissors className="w-5 h-5" style={{ color: "#7c3aed" }} />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-1" style={{ fontFamily: "'Playfair Display', Georgia, serif", color: "var(--txt-primary)", fontWeight: 700 }}>Tosa Higiênica</h3>
                  <p className="text-sm leading-relaxed mb-1" style={{ color: "var(--txt-secondary)" }}>Higienização das áreas sensíveis com cuidado e segurança.</p>
                  <p className="text-xs font-semibold mb-2" style={{ color: "#7c3aed" }}>A partir de R$ 20</p>
                  <a href="https://wa.me/5569992216764" className="text-sm font-semibold hover:underline" style={{ color: "var(--forest)" }}>Agendar →</a>
                </div>
              </div>
            </div>

            <div
              className="rounded-2xl p-6 bg-white cursor-pointer transition-all duration-300"
              style={{ border: "1.5px solid var(--border)" }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-3px)"; e.currentTarget.style.boxShadow = "0 16px 40px rgba(13,51,33,0.10)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "none"; }}
            >
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 bg-stone-100">
                  <Bone className="w-5 h-5" style={{ color: "var(--amber)" }} />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-1" style={{ fontFamily: "'Playfair Display', Georgia, serif", color: "var(--txt-primary)", fontWeight: 700 }}>Rações & Petiscos</h3>
                  <p className="text-sm leading-relaxed mb-1" style={{ color: "var(--txt-secondary)" }}>Linha completa de rações. Entrega no bairro no mesmo dia.</p>
                  <p className="text-xs font-semibold mb-2" style={{ color: "var(--amber)" }}>Consultar pelo WhatsApp</p>
                  <a href="https://wa.me/5569992216764" className="text-sm font-semibold hover:underline" style={{ color: "var(--forest)" }}>Ver rações →</a>
                </div>
              </div>
            </div>

            <div
              className="rounded-2xl p-6 cursor-pointer transition-all duration-300"
              style={{ background: "var(--forest)" }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-3px)"; e.currentTarget.style.boxShadow = "0 16px 40px rgba(13,51,33,0.30)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "none"; }}
            >
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "var(--amber)" }}>
                  <Truck className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">Entrega no mesmo dia</h3>
                  <p className="text-xs" style={{ color: "var(--txt-muted)" }}>No bairro, sem taxa mínima</p>
                </div>
                <ArrowRight className="w-5 h-5 ml-auto" style={{ color: "var(--txt-muted)" }} />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 rounded-2xl p-8 md:p-10 text-center" style={{ background: "var(--cream)", border: "1px solid var(--border)" }}>
          <p className="text-lg md:text-xl font-bold mb-4" style={{ fontFamily: "'Playfair Display', Georgia, serif", color: "var(--txt-primary)" }}>
            "Seu pet merece o melhor cuidado de Ji-Paraná."
          </p>
          <a
            href="https://wa.me/5569992216764"
            className="inline-block rounded-lg px-8 py-3 text-sm font-bold text-white transition-all duration-200 hover:-translate-y-0.5"
            style={{ background: "var(--amber)" }}
            onMouseEnter={(e) => e.currentTarget.style.background = "var(--amber-dark)"}
            onMouseLeave={(e) => e.currentTarget.style.background = "var(--amber)"}
          >
            Agendar agora →
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
