import { MessageCircle, Star, Shield, Clock, PawPrint } from "lucide-react";

const WA_LINK = "https://wa.me/5569992216764?text=Oi%2C%20quero%20agendar%20um%20banho%20pro%20meu%20pet";

const HeroCarousel = () => {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden"
      style={{
        paddingTop: "calc(64px + 32px)",
        background: "var(--pet-bg)",
        backgroundImage: "radial-gradient(circle at 80% 20%, var(--pet-green-light) 0%, transparent 50%), radial-gradient(circle at 10% 80%, var(--pet-blue-light) 0%, transparent 40%)",
      }}
    >
      <PawPrint className="absolute top-32 right-20 w-16 h-16 opacity-[0.04] rotate-12" />
      <PawPrint className="absolute bottom-20 left-10 w-12 h-12 opacity-[0.04] -rotate-12" />

      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 md:px-10 py-14 md:py-24 min-h-[500px] md:min-h-[540px]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-center">
          <div className="animate-fadeUp">
            <h1
              className="text-3xl sm:text-4xl md:text-[3.2rem] font-extrabold leading-[1.1] mb-5"
              style={{ fontFamily: "'Baloo 2', cursive", color: "#333" }}
            >
              Banho e tosa com qualidade profissional por preço justo 🐶
            </h1>
            <p className="text-base md:text-lg mb-8 max-w-md leading-relaxed" style={{ color: "var(--pet-gray-light)" }}>
              Deixe seu pet limpo, cheiroso e bem cuidado em menos de 1 hora
            </p>
            <div className="flex flex-wrap gap-3 mb-10">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full px-8 py-4 text-sm font-extrabold transition-all duration-300 hover:-translate-y-1 inline-flex items-center gap-2"
                style={{ background: "var(--pet-yellow)", color: "#333", boxShadow: "0 6px 20px rgba(255,193,7,0.4)" }}
                onMouseEnter={(e) => e.currentTarget.style.background = "#FFB300"}
                onMouseLeave={(e) => e.currentTarget.style.background = "var(--pet-yellow)"}
              >
                <MessageCircle className="w-5 h-5" />
                Agendar agora no WhatsApp
              </a>
              <a
                href="#servicos"
                className="rounded-full px-8 py-4 text-sm font-bold transition-all duration-200"
                style={{ border: "2px solid var(--pet-gray-border)", color: "var(--pet-gray)" }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = "var(--pet-green)"; e.currentTarget.style.color = "var(--pet-green)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = "var(--pet-gray-border)"; e.currentTarget.style.color = "var(--pet-gray)"; }}
              >
                Ver serviços
              </a>
            </div>

            <div className="flex flex-wrap items-center gap-5 md:gap-8">
              {[
                { icon: Star, label: "500+ pets atendidos" },
                { icon: Shield, label: "Nota 5.0 no Google" },
                { icon: Clock, label: "12 anos no bairro" },
              ].map((badge, i) => (
                <div key={i} className="flex items-center gap-2 text-sm font-bold" style={{ color: "var(--pet-gray)" }}>
                  <badge.icon className="w-4 h-4" style={{ color: "var(--pet-green)" }} />
                  {badge.label}
                </div>
              ))}
            </div>
          </div>

          <div className="relative hidden md:flex justify-center items-center animate-fadeUp" style={{ animationDelay: "0.2s" }}>
            <div
              className="relative w-[300px] h-[360px] lg:w-[340px] lg:h-[400px] rounded-[2rem] overflow-hidden"
              style={{ boxShadow: "0 24px 60px rgba(76,175,80,0.15), 0 4px 12px rgba(0,0,0,0.06)" }}
            >
              <img src="https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=700&q=80" alt="Pet feliz após banho" className="w-full h-full object-cover" />
              <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(76,175,80,0.2) 0%, transparent 50%)" }} />
            </div>
            <div
              className="absolute -bottom-3 left-1/2 -translate-x-1/2 rounded-full px-5 py-2.5 text-xs font-extrabold bg-white flex items-center gap-2"
              style={{ color: "#333", whiteSpace: "nowrap", boxShadow: "0 4px 16px rgba(0,0,0,0.10)" }}
            >
              <Star className="w-3.5 h-3.5" style={{ color: "var(--pet-yellow)", fill: "var(--pet-yellow)" }} />
              Nota 5.0 no Google
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroCarousel;
