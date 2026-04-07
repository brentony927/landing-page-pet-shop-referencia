import { useState, useEffect, useCallback, useRef } from "react";
import { MessageCircle, ChevronLeft, ChevronRight, PawPrint } from "lucide-react";
import heroSlide1 from "@/assets/hero-slide-1.jpg";
import heroSlide2 from "@/assets/hero-slide-2.jpg";
import heroSlide3 from "@/assets/hero-slide-3.jpg";

const WA_LINK = "https://wa.me/5569992216764?text=Oi%2C%20quero%20agendar%20um%20banho%20pro%20meu%20pet";

const slides = [
  { img: heroSlide1 },
  { img: heroSlide2 },
  { img: heroSlide3 },
];

const HeroCarousel = () => {
  const [current, setCurrent] = useState(0);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const timerRef = useRef<ReturnType<typeof setInterval>>();

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % slides.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((c) => (c - 1 + slides.length) % slides.length);
  }, []);

  // Auto-play
  useEffect(() => {
    timerRef.current = setInterval(next, 5000);
    return () => clearInterval(timerRef.current);
  }, [next, current]);

  // Touch swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) > 50) {
      if (diff > 0) next();
      else prev();
    }
  };

  return (
    <section
      id="inicio"
      className="relative w-full overflow-hidden mt-16 md:mt-[92px]"
      style={{ height: "calc(100svh - 64px)", maxHeight: "750px", minHeight: "420px" }}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Slides */}
      {slides.map((slide, i) => (
        <div
          key={i}
          className="absolute inset-0 transition-all duration-700 ease-in-out will-change-[opacity,transform]"
          style={{
            opacity: i === current ? 1 : 0,
            transform: i === current ? "scale(1)" : "scale(1.04)",
            zIndex: i === current ? 1 : 0,
          }}
        >
          <img
            src={slide.img}
            alt={`Slide ${i + 1}`}
            className="w-full h-full object-cover"
            style={{ objectPosition: "center center" }}
            loading={i === 0 ? "eager" : "lazy"}
            fetchPriority={i === 0 ? "high" : undefined}
          />
          {/* Gradient overlay — mais forte no mobile para legibilidade */}
          <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.2) 30%, rgba(0,0,0,0.05) 50%, transparent 70%)" }} />
        </div>
      ))}

      {/* Conteúdo flutuante — posição otimizada mobile */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-end pb-8 sm:pb-14 px-5">
        {/* Título grande mobile */}
        <h1 className="text-white text-center text-2xl sm:text-3xl md:text-4xl font-extrabold mb-3 drop-shadow-lg leading-tight" style={{ fontFamily: "'Baloo 2', cursive", textShadow: "0 2px 20px rgba(0,0,0,0.3)" }}>
          Seu pet merece o melhor!
        </h1>
        <p className="text-white/80 text-center text-xs sm:text-sm mb-4 max-w-xs">
          Banho, tosa, rações e entrega no bairro
        </p>

        {/* Badge */}
        <div className="flex items-center gap-1.5 mb-3 px-3 py-1 rounded-full bg-white/15 backdrop-blur-md border border-white/20">
          <PawPrint className="w-3 h-3 text-white" />
          <span className="text-[9px] sm:text-[11px] font-bold text-white tracking-wider uppercase">12 anos de confiança</span>
        </div>

        {/* CTA */}
        <a
          href={WA_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-2xl w-full max-w-[280px] sm:w-auto sm:max-w-none py-3.5 sm:px-10 sm:py-4 text-sm sm:text-base font-extrabold transition-all duration-300 hover:-translate-y-1 active:scale-95 inline-flex items-center justify-center gap-2"
          style={{ background: "#FFA000", color: "#fff", boxShadow: "0 8px 30px rgba(255,160,0,0.5)" }}
        >
          <MessageCircle className="w-5 h-5" />
          Agende pelo WhatsApp
        </a>

        {/* Dots */}
        <div className="flex gap-2 mt-4">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className="h-2 rounded-full transition-all duration-500 relative overflow-hidden"
              style={{
                width: i === current ? 28 : 8,
                background: i === current ? "#FFA000" : "rgba(255,255,255,0.4)",
              }}
            >
              {i === current && (
                <span className="absolute inset-0 rounded-full" style={{ background: "rgba(255,255,255,0.3)", animation: "progressBar 5s linear" }} />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Arrows — escondidos no mobile (swipe é melhor) */}
      <button
        onClick={prev}
        className="absolute left-3 top-1/2 -translate-y-1/2 z-20 hidden sm:flex w-11 h-11 rounded-full items-center justify-center transition-all duration-200 text-white border border-white/20 bg-black/20 backdrop-blur-sm hover:bg-black/40"
        aria-label="Anterior"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        onClick={next}
        className="absolute right-3 top-1/2 -translate-y-1/2 z-20 hidden sm:flex w-11 h-11 rounded-full items-center justify-center transition-all duration-200 text-white border border-white/20 bg-black/20 backdrop-blur-sm hover:bg-black/40"
        aria-label="Próximo"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Swipe hint — só mobile */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 z-10 sm:hidden">
        <span className="text-[9px] text-white/40 font-medium">← deslize →</span>
      </div>
    </section>
  );
};

export default HeroCarousel;
