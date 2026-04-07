import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, Star, PawPrint } from "lucide-react";

const slides = [
  {
    h1: "Tosa na tesoura,\nsecagem com\npaciência. 🐶",
    sub: "Ele entra precisando, e sai desfilando.",
    cta1: { text: "🐾 AGENDAR AGORA", href: "https://wa.me/5569992216764" },
    cta2: { text: "Ver serviços", href: "#servicos" },
    heroImage: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=700&q=80",
  },
  {
    h1: "12 anos no\nbairro. Seu vizinho\njá trouxe o pet. 🏠",
    sub: "Equipe pequena que conhece cada pet pelo nome.",
    cta1: { text: "💬 FALE PELO WHATSAPP", href: "https://wa.me/5569992216764" },
    cta2: { text: "Nossa história", href: "#sobre" },
    heroImage: "https://images.unsplash.com/photo-1601979031925-424e53b6caaa?w=700&q=80",
  },
  {
    h1: "Ração de\nqualidade\nno mesmo dia. 📦",
    sub: "Rações, petiscos e suplementos. Entrega sem taxa mínima.",
    cta1: { text: "🦴 VER RAÇÕES", href: "#racoes" },
    cta2: { text: "Agendar serviço", href: "https://wa.me/5569992216764" },
    heroImage: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=700&q=80",
  },
];

const HeroCarousel = () => {
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [slideDirection, setSlideDirection] = useState<"right" | "left">("right");

  const goTo = useCallback((index: number, dir: "left" | "right") => {
    if (isAnimating) return;
    setIsAnimating(true);
    setSlideDirection(dir);
    setCurrent(index);
    setTimeout(() => setIsAnimating(false), 600);
  }, [isAnimating]);

  const next = useCallback(() => goTo((current + 1) % slides.length, "right"), [current, goTo]);
  const prev = useCallback(() => goTo((current - 1 + slides.length) % slides.length, "left"), [current, goTo]);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  const s = slides[current];

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
      {/* Floating paw decorations */}
      <PawPrint className="absolute top-32 right-20 w-16 h-16 opacity-[0.04] rotate-12" />
      <PawPrint className="absolute bottom-20 left-10 w-12 h-12 opacity-[0.04] -rotate-12" />

      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 md:px-10 py-12 md:py-20 min-h-[500px] md:min-h-[540px]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-center">
          <div
            style={{
              opacity: isAnimating ? 0 : 1,
              transform: isAnimating
                ? slideDirection === "right" ? "translateX(30px)" : "translateX(-30px)"
                : "translateX(0)",
              transition: "all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
            }}
          >
            <h1
              className="text-3xl sm:text-4xl md:text-[3.2rem] font-extrabold leading-[1.1] mb-5"
              style={{ fontFamily: "'Baloo 2', cursive", color: "#333", whiteSpace: "pre-line" }}
            >
              {s.h1}
            </h1>
            <p className="text-base md:text-lg mb-8 max-w-md leading-relaxed" style={{ color: "var(--pet-gray-light)" }}>
              {s.sub}
            </p>
            <div className="flex flex-wrap gap-3 mb-10">
              <a
                href={s.cta1.href}
                className="rounded-full px-8 py-4 text-sm font-extrabold text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                style={{ background: "var(--pet-orange)", boxShadow: "0 6px 20px rgba(255,138,101,0.4)" }}
                onMouseEnter={(e) => e.currentTarget.style.background = "var(--pet-orange-dark)"}
                onMouseLeave={(e) => e.currentTarget.style.background = "var(--pet-orange)"}
              >
                {s.cta1.text}
              </a>
              <a
                href={s.cta2.href}
                className="rounded-full px-8 py-4 text-sm font-bold transition-all duration-200"
                style={{ border: "2px solid var(--pet-gray-border)", color: "var(--pet-gray)" }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = "var(--pet-green)"; e.currentTarget.style.color = "var(--pet-green)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = "var(--pet-gray-border)"; e.currentTarget.style.color = "var(--pet-gray)"; }}
              >
                {s.cta2.text}
              </a>
            </div>

            <div className="flex items-center gap-6 md:gap-10">
              {[
                { icon: Star, value: "5.0", label: "Google", fill: true },
                { value: "500+", label: "pets" },
                { value: "12", label: "anos" },
              ].map((stat, i) => (
                <div key={i} className="flex items-center gap-2">
                  {stat.icon && <Star className="w-4 h-4" style={{ color: "var(--pet-yellow)", fill: "var(--pet-yellow)" }} />}
                  <span className="text-xl md:text-2xl font-extrabold" style={{ fontFamily: "'Baloo 2', cursive", color: "#333" }}>
                    {stat.value}
                  </span>
                  <span className="text-[11px] uppercase tracking-wider font-bold" style={{ color: "var(--pet-gray-light)" }}>{stat.label}</span>
                  {i < 2 && <span className="w-px h-5 ml-4 md:ml-6 bg-gray-200" />}
                </div>
              ))}
            </div>
          </div>

          <div
            className="relative hidden md:flex justify-center items-center"
            style={{
              opacity: isAnimating ? 0 : 1,
              transform: isAnimating ? "scale(0.94)" : "scale(1)",
              transition: "all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
            }}
          >
            <div
              className="relative w-[300px] h-[360px] lg:w-[340px] lg:h-[400px] rounded-[2rem] overflow-hidden"
              style={{ boxShadow: "0 24px 60px rgba(76,175,80,0.15), 0 4px 12px rgba(0,0,0,0.06)" }}
            >
              <img src={s.heroImage} alt="Pet feliz" className="w-full h-full object-cover" />
              <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(76,175,80,0.25) 0%, transparent 50%)" }} />
            </div>

            <div
              className="absolute -bottom-3 left-1/2 -translate-x-1/2 rounded-full px-5 py-2.5 text-xs font-extrabold bg-white flex items-center gap-2"
              style={{ color: "#333", whiteSpace: "nowrap", boxShadow: "0 4px 16px rgba(0,0,0,0.10)" }}
            >
              <Star className="w-3.5 h-3.5" style={{ color: "var(--pet-yellow)", fill: "var(--pet-yellow)" }} />
              Nota 5.0 no Google ⭐
            </div>
          </div>
        </div>

        <div className="flex gap-2 mt-10 md:mt-12">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i, i > current ? "right" : "left")}
              className="h-2 rounded-full transition-all duration-500 relative overflow-hidden"
              style={{
                width: i === current ? 40 : 10,
                background: i === current ? "var(--pet-green)" : "var(--pet-gray-border)",
              }}
            >
              {i === current && (
                <span className="absolute inset-0 rounded-full" style={{ background: "rgba(56,142,60,0.3)", animation: "progressBar 5s linear" }} />
              )}
            </button>
          ))}
        </div>
      </div>

      <button onClick={prev} className="absolute left-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full hidden md:flex items-center justify-center bg-white hover:shadow-lg transition-all duration-200" style={{ border: "2px solid var(--pet-gray-border)" }} aria-label="Anterior">
        <ChevronLeft className="w-5 h-5" style={{ color: "var(--pet-gray)" }} />
      </button>
      <button onClick={next} className="absolute right-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full hidden md:flex items-center justify-center bg-white hover:shadow-lg transition-all duration-200" style={{ border: "2px solid var(--pet-gray-border)" }} aria-label="Próximo">
        <ChevronRight className="w-5 h-5" style={{ color: "var(--pet-gray)" }} />
      </button>
    </section>
  );
};

export default HeroCarousel;
