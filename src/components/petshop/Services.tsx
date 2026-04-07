import { Bath, Scissors, Bone, Truck, MessageCircle } from "lucide-react";

const WA_LINK = "https://wa.me/5569992216764?text=Oi%2C%20quero%20agendar%20um%20banho%20pro%20meu%20pet";

const Services = () => {
  return (
    <section id="servicos" className="py-16 md:py-24 px-4 bg-white">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block text-xs font-bold uppercase tracking-widest mb-3 px-4 py-1.5 rounded-full" style={{ background: "var(--pet-orange-light)", color: "var(--pet-orange-dark)" }}>
            Nossos Serviços
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold" style={{ fontFamily: "'Baloo 2', cursive", color: "var(--pet-blue-dark)" }}>
            Tudo pro seu pet em um só lugar
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
          {/* Card principal */}
          <div
            className="md:col-span-7 relative rounded-2xl p-8 md:p-10 overflow-hidden cursor-pointer transition-all duration-300 group"
            style={{ background: "var(--pet-orange)", boxShadow: "0 8px 40px rgba(255,138,101,0.2)" }}
            onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "0 20px 50px rgba(255,138,101,0.3)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "0 8px 40px rgba(255,138,101,0.2)"; }}
          >
            <span className="absolute top-4 right-4 text-[10px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full bg-white/20 text-white">
              ⭐ Mais pedido
            </span>
            <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 bg-white/20">
              <Bath className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-2xl md:text-3xl font-extrabold mb-3 text-white" style={{ fontFamily: "'Baloo 2', cursive" }}>
              Banho & Tosa
            </h3>
            <p className="text-base leading-relaxed mb-2 max-w-md text-white/80">
              Seu pet sai cheiroso em menos de 1 hora. Produtos profissionais, secagem cuidadosa.
            </p>
            <p className="text-sm font-extrabold mb-6 text-white/90">
              A partir de <span className="text-2xl text-white">R$ 35</span>
            </p>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl px-7 py-3 text-sm font-extrabold transition-all duration-200 hover:-translate-y-0.5"
              style={{ background: "var(--pet-yellow)", color: "#333", boxShadow: "0 4px 14px rgba(0,0,0,0.15)" }}
            >
              <MessageCircle className="w-4 h-4" />
              Agendar agora
            </a>
            {/* Decorativo */}
            <div className="absolute -right-8 -bottom-8 w-40 h-40 rounded-full bg-white/5" />
            <div className="absolute right-16 top-0 w-24 h-24 rounded-full bg-white/5" />
          </div>

          <div className="md:col-span-5 flex flex-col gap-4">
            {/* Tosa */}
            <div
              className="rounded-2xl p-6 bg-white cursor-pointer transition-all duration-300"
              style={{ border: "1px solid var(--pet-gray-border)", boxShadow: "0 4px 20px rgba(0,0,0,0.04)" }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-3px)"; e.currentTarget.style.boxShadow = "0 12px 30px rgba(66,165,245,0.12)"; e.currentTarget.style.borderColor = "var(--pet-blue)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,0,0,0.04)"; e.currentTarget.style.borderColor = "var(--pet-gray-border)"; }}
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "var(--pet-blue-light)" }}>
                  <Scissors className="w-5 h-5" style={{ color: "var(--pet-blue)" }} />
                </div>
                <div>
                  <h3 className="text-lg font-extrabold mb-1" style={{ fontFamily: "'Baloo 2', cursive", color: "#333" }}>Tosa Higiênica</h3>
                  <p className="text-sm leading-relaxed mb-1" style={{ color: "var(--pet-gray)" }}>Áreas sensíveis limpas com cuidado e segurança.</p>
                  <p className="text-xs font-extrabold mb-2" style={{ color: "var(--pet-blue)" }}>A partir de R$ 20</p>
                  <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="text-sm font-bold hover:underline" style={{ color: "var(--pet-orange)" }}>Agendar →</a>
                </div>
              </div>
            </div>

            {/* Rações */}
            <div
              className="rounded-2xl p-6 bg-white cursor-pointer transition-all duration-300"
              style={{ border: "1px solid var(--pet-gray-border)", boxShadow: "0 4px 20px rgba(0,0,0,0.04)" }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-3px)"; e.currentTarget.style.boxShadow = "0 12px 30px rgba(255,193,7,0.12)"; e.currentTarget.style.borderColor = "var(--pet-yellow)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,0,0,0.04)"; e.currentTarget.style.borderColor = "var(--pet-gray-border)"; }}
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "var(--pet-yellow-light)" }}>
                  <Bone className="w-5 h-5" style={{ color: "var(--pet-yellow-dark)" }} />
                </div>
                <div>
                  <h3 className="text-lg font-extrabold mb-1" style={{ fontFamily: "'Baloo 2', cursive", color: "#333" }}>Rações & Petiscos</h3>
                  <p className="text-sm leading-relaxed mb-1" style={{ color: "var(--pet-gray)" }}>Entrega no bairro no mesmo dia, sem taxa mínima.</p>
                  <a href="/catalogo" className="text-sm font-bold hover:underline" style={{ color: "var(--pet-orange)" }}>Ver catálogo →</a>
                </div>
              </div>
            </div>

            {/* Entrega */}
            <div
              className="rounded-2xl p-6 cursor-pointer transition-all duration-300 text-white"
              style={{ background: "var(--pet-blue-dark)", boxShadow: "0 8px 32px rgba(30,136,229,0.2)" }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-3px)"; e.currentTarget.style.boxShadow = "0 16px 40px rgba(30,136,229,0.3)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "0 8px 32px rgba(30,136,229,0.2)"; }}
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "var(--pet-orange)" }}>
                  <Truck className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-base font-extrabold">Entrega no mesmo dia</h3>
                  <p className="text-xs text-white/60">Chega na sua porta no bairro</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-14 text-center">
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl px-8 py-4 text-sm font-extrabold transition-all duration-200 hover:-translate-y-0.5 text-white"
            style={{ background: "var(--pet-blue)", boxShadow: "0 8px 30px rgba(66,165,245,0.3)" }}
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
