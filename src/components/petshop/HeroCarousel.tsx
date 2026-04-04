import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, Dog, Home, Bone, Star } from "lucide-react";

const slides = [
  {
    h1: "Tosa na tesoura,\nsecagem com paciência.\nNada de pressa.",
    sub: "Ele entra precisando, e sai desfilando. Pode confiar!",
    cta1: { text: "AGENDAR AGORA", href: "https://wa.me/5569992216764" },
    cta2: { text: "Ver serviços", href: "#servicos" },
    visual: { icon: Dog, label: "Banho & Tosa" },
    badgeA: "Nota 5.0",
    badgeB: "+500 pets felizes",
  },
  {
    h1: "12 anos no bairro.\nSeu vizinho\njá trouxe o pet dele.",
    sub: "Aqui não tem franquia nem manual de rede grande. É uma equipe pequena que conhece cada pet pelo nome.",
    cta1: { text: "FALE PELO WHATSAPP", href: "https://wa.me/5569992216764" },
    cta2: { text: "Nossa história", href: "#sobre" },
    visual: { icon: Home, label: "12 Anos" },
    badgeA: "Nota 5.0",
    badgeB: "+500 pets felizes",
  },
  {
    h1: "Ração de qualidade\nentregue no\nmesmo dia.",
    sub: "Linha completa de rações, petiscos e suplementos. Entrega no bairro sem taxa mínima.",
    cta1: { text: "VER RAÇÕES", href: "#racoes" },
    cta2: { text: "Agendar serviço", href: "https://wa.me/5569992216764" },
    visual: { icon: Bone, label: "Entrega Rápida" },
    badgeA: "Nota 5.0",
    badgeB: "+500 pets felizes",
  },
];

const HeroCarousel = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState<"left" | "right">("right");
  const [isAnimating, setIsAnimating] = useState(false);

  const goTo = useCallback((index: number, dir: "left" | "right") => {
    if (isAnimating) return;
    setIsAnimating(true);
    setDirection(dir);
    setCurrent(index);
    setTimeout(() => setIsAnimating(false), 500);
  }, [isAnimating]);

  const next = useCallback(() => goTo((current + 1) % slides.length, "right"), [current, goTo]);
  const prev = useCallback(() => goTo((current - 1 + slides.length) % slides.length, "left"), [current, goTo]);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  const s = slides[current];
  const VisualIcon = s.visual.icon;

  return (
    <section id="inicio" className="bg-white relative overflow-hidden" style={{ paddingTop: "calc(64px + 32px)" }}>
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 md:px-10 py-12 md:py-[72px]">
        <div
          className={`grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center transition-all duration-500 ${
            isAnimating
              ? direction === "right"
                ? "opacity-0 translate-x-8"
                : "opacity-0 -translate-x-8"
              : "opacity-100 translate-x-0"
          }`}
        >
          {/* Text */}
          <div>
            <h1
              className="text-3xl sm:text-4xl md:text-[3.5rem] font-black leading-tight mb-4"
              style={{ fontFamily: "'Fraunces', Georgia, serif", color: "#1c1917", whiteSpace: "pre-line" }}
            >
              {s.h1}
            </h1>
            <p className="text-base md:text-lg mb-8 leading-relaxed" style={{ color: "#57534e" }}>
              {s.sub}
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={s.cta1.href}
                className="rounded-md px-6 py-3 text-sm font-bold text-white transition-all duration-200 hover:-translate-y-0.5"
                style={{ background: "#f97316" }}
                onMouseEnter={(e) => e.currentTarget.style.background = "#c2410c"}
                onMouseLeave={(e) => e.currentTarget.style.background = "#f97316"}
              >
                {s.cta1.text}
              </a>
              <a
                href={s.cta2.href}
                className="rounded-md px-6 py-3 text-sm font-semibold transition-all duration-200"
                style={{ border: "1.5px solid #16a34a", color: "#16a34a" }}
              >
                {s.cta2.text}
              </a>
            </div>
          </div>

          {/* Visual */}
          <div className="flex justify-center relative">
            <div
              className="w-[220px] h-[220px] md:w-[280px] md:h-[280px] rounded-3xl flex flex-col items-center justify-center animate-float"
              style={{ background: "#f0fdf4" }}
            >
              <VisualIcon className="w-16 h-16 md:w-20 md:h-20 mb-3" style={{ color: "#16a34a" }} />
              <span
                className="text-lg md:text-xl font-bold"
                style={{ fontFamily: "'Fraunces', Georgia, serif", color: "#16a34a" }}
              >
                {s.visual.label}
              </span>
            </div>
            <div
              className="absolute -top-2 md:-top-4 right-0 md:-right-6 rounded-xl px-3 py-2 text-[13px] font-bold bg-white flex items-center gap-1.5"
              style={{ border: "1.5px solid #e7e5e4", color: "#1c1917" }}
            >
              <Star className="w-3.5 h-3.5 text-yellow-500 fill-yellow-500" />
              {s.badgeA}
            </div>
            <div
              className="absolute bottom-4 -left-4 md:-left-10 rounded-xl px-3 py-2 text-[13px] font-bold bg-white flex items-center gap-1.5"
              style={{ border: "1.5px solid #e7e5e4", color: "#1c1917" }}
            >
              <Dog className="w-3.5 h-3.5" style={{ color: "#16a34a" }} />
              {s.badgeB}
            </div>
          </div>
        </div>

        {/* Dots + Progress */}
        <div className="flex justify-center gap-2 mt-10">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i, i > current ? "right" : "left")}
              className="h-2 rounded-full transition-all duration-300 relative overflow-hidden"
              style={{
                width: i === current ? 24 : 8,
                background: i === current ? "#f97316" : "#d6d3d1",
              }}
            >
              {i === current && (
                <span
                  className="absolute inset-0 bg-orange-700/30 animate-progress"
                  style={{ "--duration": "5s" } as React.CSSProperties}
                />
              )}
            </button>
          ))}
        </div>
      </div>

      <button
        onClick={prev}
        className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full hidden md:flex items-center justify-center transition-colors duration-200 bg-white border"
        style={{ borderColor: "#e7e5e4" }}
        onMouseEnter={(e) => e.currentTarget.style.borderColor = "#16a34a"}
        onMouseLeave={(e) => e.currentTarget.style.borderColor = "#e7e5e4"}
      >
        <ChevronLeft className="w-5 h-5" style={{ color: "#57534e" }} />
      </button>
      <button
        onClick={next}
        className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full hidden md:flex items-center justify-center transition-colors duration-200 bg-white border"
        style={{ borderColor: "#e7e5e4" }}
        onMouseEnter={(e) => e.currentTarget.style.borderColor = "#16a34a"}
        onMouseLeave={(e) => e.currentTarget.style.borderColor = "#e7e5e4"}
      >
        <ChevronRight className="w-5 h-5" style={{ color: "#57534e" }} />
      </button>
    </section>
  );
};


export default HeroCarousel;
