import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    h1: "Tosa na tesoura,\nsecagem com paciência.\nNada de pressa.",
    sub: "Ele entra precisando, e sai desfilando. Pode confiar!",
    cta1: { text: "AGENDAR AGORA", href: "https://wa.me/5569992216764" },
    cta2: { text: "Ver serviços", href: "#servicos" },
    visual: { bg: "var(--verde-escuro)", emoji: "🐶", label: "Banho & Tosa" },
    badgeA: "⭐ Nota 5.0",
    badgeB: "🐾 +500 pets felizes",
  },
  {
    h1: "12 anos no bairro.\nSeu vizinho\njá trouxe o pet dele.",
    sub: "Aqui não tem franquia nem manual de rede grande. É uma equipe pequena que conhece cada pet pelo nome.",
    cta1: { text: "FALE PELO WHATSAPP", href: "https://wa.me/5569992216764" },
    cta2: { text: "Nossa história", href: "#sobre" },
    visual: { bg: "var(--laranja)", emoji: "🏘️", label: "12 Anos" },
    badgeA: "⭐ Nota 5.0",
    badgeB: "🐾 +500 pets felizes",
  },
  {
    h1: "Ração premium\nentregue no\nmesmo dia.",
    sub: "Linha completa de rações, petiscos e suplementos. Entrega no bairro sem taxa mínima.",
    cta1: { text: "VER RAÇÕES", href: "#racoes" },
    cta2: { text: "Agendar serviço", href: "https://wa.me/5569992216764" },
    visual: { bg: "var(--amarelo)", emoji: "🦴", label: "Entrega Rápida" },
    badgeA: "⭐ Nota 5.0",
    badgeB: "🐾 +500 pets felizes",
  },
];

const HeroCarousel = () => {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => setCurrent((p) => (p + 1) % slides.length), []);
  const prev = useCallback(() => setCurrent((p) => (p - 1 + slides.length) % slides.length), []);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  const s = slides[current];
  const isYellow = s.visual.bg === "var(--amarelo)";

  return (
    <section id="inicio" className="bg-white relative overflow-hidden" style={{ paddingTop: "calc(64px + 32px)" }}>
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 md:px-10 py-12 md:py-[72px]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Text */}
          <div className="animate-fadeUp">
            <h1
              className="text-3xl sm:text-4xl md:text-[3.5rem] font-black leading-tight mb-4"
              style={{ fontFamily: "'Fraunces', Georgia, serif", color: "var(--txt)", whiteSpace: "pre-line" }}
            >
              {s.h1}
            </h1>
            <p className="text-base md:text-lg mb-8 leading-relaxed" style={{ color: "var(--txt2)" }}>
              {s.sub}
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={s.cta1.href}
                className="rounded-md px-6 py-3 text-sm font-bold text-white transition-all duration-200 hover:-translate-y-0.5"
                style={{ background: "var(--laranja)" }}
                onMouseEnter={(e) => e.currentTarget.style.background = "var(--laranja-escuro)"}
                onMouseLeave={(e) => e.currentTarget.style.background = "var(--laranja)"}
              >
                {s.cta1.text}
              </a>
              <a
                href={s.cta2.href}
                className="rounded-md px-6 py-3 text-sm font-semibold transition-all duration-200"
                style={{ border: "1.5px solid var(--verde)", color: "var(--verde)" }}
              >
                {s.cta2.text}
              </a>
            </div>
          </div>

          {/* Visual */}
          <div className="flex justify-center relative">
            <div
              className="w-[220px] h-[220px] md:w-[280px] md:h-[280px] rounded-3xl flex flex-col items-center justify-center animate-float"
              style={{ background: s.visual.bg }}
            >
              <span className="text-5xl md:text-6xl mb-3">{s.visual.emoji}</span>
              <span
                className="text-lg md:text-xl font-bold"
                style={{ fontFamily: "'Fraunces', Georgia, serif", color: isYellow ? "var(--amarelo-texto)" : "#fff" }}
              >
                {s.visual.label}
              </span>
            </div>
            <div
              className="absolute -top-2 md:-top-4 right-0 md:-right-6 rounded-xl px-3 py-2 text-[13px] font-bold"
              style={{ background: "var(--amarelo)", border: "1.5px solid var(--amarelo-borda)", color: "var(--amarelo-texto)" }}
            >
              {s.badgeA}
            </div>
            <div
              className="absolute bottom-4 -left-4 md:-left-10 rounded-xl px-3 py-2 text-[13px] font-bold"
              style={{ background: "var(--amarelo)", border: "1.5px solid var(--amarelo-borda)", color: "var(--amarelo-texto)" }}
            >
              {s.badgeB}
            </div>
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-10">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className="h-2 rounded-full transition-all duration-300"
              style={{
                width: i === current ? 24 : 8,
                background: i === current ? "var(--laranja)" : "rgba(0,0,0,0.2)",
              }}
            />
          ))}
        </div>
      </div>

      <button
        onClick={prev}
        className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full hidden md:flex items-center justify-center transition-colors duration-200"
        style={{ background: "rgba(255,255,255,0.8)" }}
        onMouseEnter={(e) => e.currentTarget.style.background = "#fff"}
        onMouseLeave={(e) => e.currentTarget.style.background = "rgba(255,255,255,0.8)"}
      >
        <ChevronLeft className="w-5 h-5" style={{ color: "var(--verde-escuro)" }} />
      </button>
      <button
        onClick={next}
        className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full hidden md:flex items-center justify-center transition-colors duration-200"
        style={{ background: "rgba(255,255,255,0.8)" }}
        onMouseEnter={(e) => e.currentTarget.style.background = "#fff"}
        onMouseLeave={(e) => e.currentTarget.style.background = "rgba(255,255,255,0.8)"}
      >
        <ChevronRight className="w-5 h-5" style={{ color: "var(--verde-escuro)" }} />
      </button>
    </section>
  );
};

export default HeroCarousel;
