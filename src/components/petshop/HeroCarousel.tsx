import { useState, useEffect, useCallback, useRef } from "react";
import { MessageCircle, ChevronLeft, ChevronRight, PawPrint } from "lucide-react";
import heroSlide1 from "@/assets/hero-slide-1.png";
import heroSlide2 from "@/assets/hero-slide-2.png";
import heroSlide3 from "@/assets/hero-slide-3.png";

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

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % slides.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((c) => (c - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next, current]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchEndX.current = e.touches[0].clientX;
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
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Container com aspect-ratio responsivo — compacto no mobile, grande no desktop */}
      <div className="relative w-full" style={{ aspectRatio: "4/3" }}>
        {/* Desktop: aspect-ratio maior */}
        <style>{`
          @media (min-width: 640px) {
            #hero-ar { aspect-ratio: 16/7 !important; }
          }
        `}</style>
        <div id="hero-ar" className="relative w-full h-full" style={{ aspectRatio: "4/3" }}>
          {/* Slides */}
          {slides.map((slide, i) => (
            <div
              key={i}
              className="absolute inset-0 transition-opacity duration-700 ease-in-out"
              style={{
                opacity: i === current ? 1 : 0,
                zIndex: i === current ? 1 : 0,
              }}
            >
              <img
                src={slide.img}
                alt={`Slide ${i + 1}`}
                className="w-full h-full object-cover"
                style={{ objectPosition: "center 40%" }}
                loading={i === 0 ? "eager" : "lazy"}
                fetchPriority={i === 0 ? "high" : undefined}
              />
              <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.15) 35%, transparent 65%)" }} />
            </div>
          ))}

          {/* Conteúdo sobre as imagens */}
          <div className="absolute inset-0 z-10 flex flex-col items-center justify-end pb-5 sm:pb-10 md:pb-14 px-4">
            {/* Título */}
            <h1 className="text-white text-center text-xl sm:text-2xl md:text-4xl font-extrabold mb-1.5 sm:mb-3 leading-tight" style={{ fontFamily: "'Baloo 2', cursive", textShadow: "0 2px 16px rgba(0,0,0,0.4)" }}>
              Seu pet merece o melhor!
            </h1>
            <p className="text-white/75 text-center text-[11px] sm:text-sm mb-3 sm:mb-4">
              Banho, tosa, rações e entrega no bairro
            </p>

            {/* Badge */}
            <div className="flex items-center gap-1.5 mb-2.5 sm:mb-3 px-3 py-1 rounded-full bg-white/15 backdrop-blur-md border border-white/20">
              <PawPrint className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white" />
              <span className="text-[8px] sm:text-[11px] font-bold text-white tracking-wider uppercase">12 anos de confiança</span>
            </div>

            {/* CTA */}
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl w-[85%] max-w-[260px] sm:w-auto sm:max-w-none py-3 sm:px-10 sm:py-3.5 text-[13px] sm:text-base font-extrabold transition-all duration-300 active:scale-95 hover:-translate-y-1 inline-flex items-center justify-center gap-2"
              style={{ background: "#FFA000", color: "#fff", boxShadow: "0 6px 24px rgba(255,160,0,0.45)" }}
            >
              <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
              Agende pelo WhatsApp
            </a>

            {/* Dots */}
            <div className="flex gap-1.5 sm:gap-2 mt-3 sm:mt-4">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className="h-1.5 sm:h-2 rounded-full transition-all duration-500 relative overflow-hidden"
                  style={{
                    width: i === current ? 22 : 7,
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

          {/* Arrows — só desktop */}
          <button
            onClick={prev}
            className="absolute left-3 top-1/2 -translate-y-1/2 z-20 hidden sm:flex w-10 h-10 rounded-full items-center justify-center text-white bg-black/20 backdrop-blur-sm border border-white/15 hover:bg-black/40 transition-all"
            aria-label="Anterior"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={next}
            className="absolute right-3 top-1/2 -translate-y-1/2 z-20 hidden sm:flex w-10 h-10 rounded-full items-center justify-center text-white bg-black/20 backdrop-blur-sm border border-white/15 hover:bg-black/40 transition-all"
            aria-label="Próximo"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroCarousel;
