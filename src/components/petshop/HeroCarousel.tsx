import { useState, useEffect, useCallback } from "react";
import { MessageCircle, Star, Shield, Clock, ChevronLeft, ChevronRight } from "lucide-react";

const WA_LINK = "https://wa.me/5569992216764?text=Oi%2C%20quero%20agendar%20um%20banho%20pro%20meu%20pet";

const slides = [
  {
    img: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=1400&q=80",
    h1: "Banho e tosa com qualidade profissional por preço justo 🐶",
    sub: "Deixe seu pet limpo, cheiroso e bem cuidado em menos de 1 hora",
  },
  {
    img: "https://images.unsplash.com/photo-1601979031925-424e53b6caaa?w=1400&q=80",
    h1: "12 anos cuidando dos pets do bairro 🏠",
    sub: "Equipe que conhece cada pet pelo nome. Atendimento de verdade.",
  },
  {
    img: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=1400&q=80",
    h1: "Ração de qualidade entregue no mesmo dia 📦",
    sub: "Rações, petiscos e acessórios. Entrega sem taxa mínima no bairro.",
  },
];

const HeroCarousel = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState<"left" | "right">("right");

  const next = useCallback(() => {
    setDirection("right");
    setCurrent((c) => (c + 1) % slides.length);
  }, []);

  const prev = useCallback(() => {
    setDirection("left");
    setCurrent((c) => (c - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  const s = slides[current];

  return (
    <section id="inicio" className="relative overflow-hidden" style={{ minHeight: "100vh" }}>
      {/* Full-screen background images - all preloaded, crossfade */}
      {slides.map((slide, i) => (
        <div
          key={i}
          className="absolute inset-0 transition-opacity duration-700 ease-in-out"
          style={{
            opacity: i === current ? 1 : 0,
            zIndex: i === current ? 0 : -1,
          }}
        >
          <img
            src={slide.img}
            alt=""
            className="w-full h-full object-cover"
            loading={i === 0 ? "eager" : "lazy"}
          />
        </div>
      ))}

      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 z-[1]" style={{ background: "linear-gradient(to right, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.35) 50%, rgba(0,0,0,0.15) 100%)" }} />

      {/* Content */}
      <div className="relative z-10 max-w-[1100px] mx-auto px-4 sm:px-6 md:px-10 flex items-center" style={{ paddingTop: "calc(64px + 40px)", paddingBottom: "3rem", minHeight: "100vh" }}>
        <div className="max-w-xl">
          <h1
            key={`h-${current}`}
            className="text-3xl sm:text-4xl md:text-[3.2rem] font-extrabold leading-[1.1] mb-5 text-white animate-fadeUp"
            style={{ fontFamily: "'Baloo 2', cursive" }}
          >
            {s.h1}
          </h1>
          <p
            key={`p-${current}`}
            className="text-base md:text-lg mb-8 max-w-md leading-relaxed text-white/80 animate-fadeUp"
            style={{ animationDelay: "0.1s" }}
          >
            {s.sub}
          </p>
          <div className="flex flex-wrap gap-3 mb-8 animate-fadeUp" style={{ animationDelay: "0.2s" }}>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full px-7 py-3.5 sm:px-8 sm:py-4 text-sm font-extrabold transition-all duration-300 hover:-translate-y-1 inline-flex items-center gap-2"
              style={{ background: "var(--pet-yellow)", color: "#333", boxShadow: "0 6px 20px rgba(255,193,7,0.4)" }}
            >
              <MessageCircle className="w-5 h-5" />
              Agendar agora no WhatsApp
            </a>
            <a
              href="#servicos"
              className="rounded-full px-7 py-3.5 sm:px-8 sm:py-4 text-sm font-bold transition-all duration-200 text-white/80 hover:text-white border-2 border-white/30 hover:border-white/60"
              style={{ backdropFilter: "blur(4px)" }}
            >
              Ver serviços
            </a>
          </div>

          <div className="flex flex-wrap items-center gap-4 md:gap-6">
            {[
              { icon: Star, label: "500+ pets atendidos" },
              { icon: Shield, label: "Nota 5.0 no Google" },
              { icon: Clock, label: "12 anos no bairro" },
            ].map((badge, i) => (
              <div key={i} className="flex items-center gap-2 text-xs sm:text-sm font-bold text-white/70">
                <badge.icon className="w-4 h-4" style={{ color: "var(--pet-yellow)" }} />
                {badge.label}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Navigation arrows */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full flex items-center justify-center bg-white/10 hover:bg-white/25 backdrop-blur-sm transition-all duration-200 text-white"
        aria-label="Anterior"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full flex items-center justify-center bg-white/10 hover:bg-white/25 backdrop-blur-sm transition-all duration-200 text-white"
        aria-label="Próximo"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Dots + progress */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => { setDirection(i > current ? "right" : "left"); setCurrent(i); }}
            className="h-2 rounded-full transition-all duration-500 relative overflow-hidden"
            style={{
              width: i === current ? 40 : 10,
              background: i === current ? "var(--pet-yellow)" : "rgba(255,255,255,0.4)",
            }}
          >
            {i === current && (
              <span
                className="absolute inset-0 rounded-full"
                style={{ background: "rgba(255,255,255,0.3)", animation: "progressBar 6s linear" }}
              />
            )}
          </button>
        ))}
      </div>
    </section>
  );
};

export default HeroCarousel;
