import { useState, useEffect, useCallback } from "react";
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

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % slides.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((c) => (c - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section id="inicio" className="relative w-full overflow-hidden mt-16 md:mt-[92px]" style={{ height: "calc(100svh - 64px)", maxHeight: "720px", minHeight: "350px" }}>
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
            style={{ objectPosition: "center 35%" }}
            loading={i === 0 ? "eager" : "lazy"}
            fetchPriority={i === 0 ? "high" : undefined}
          />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.15) 35%, transparent 65%)" }} />
        </div>
      ))}

      {/* Conteúdo flutuante */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-end pb-10 sm:pb-16 px-4">
        <div className="flex items-center gap-2 mb-3 px-4 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/20">
          <PawPrint className="w-3 h-3 text-white" />
          <span className="text-[10px] sm:text-[11px] font-bold text-white tracking-wider uppercase">Pet Shop de confiança há 12 anos</span>
        </div>

        <a
          href={WA_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-2xl px-6 py-3 sm:px-10 sm:py-4 text-sm sm:text-base font-extrabold transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl inline-flex items-center gap-2"
          style={{ background: "#FFA000", color: "#fff", boxShadow: "0 8px 30px rgba(255,160,0,0.5)" }}
        >
          <MessageCircle className="w-5 h-5" />
          Agende pelo WhatsApp
        </a>

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

      {/* Arrows */}
      <button
        onClick={prev}
        className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-11 sm:h-11 rounded-full flex items-center justify-center transition-all duration-200 text-white border border-white/20 bg-black/20 backdrop-blur-sm hover:bg-black/40"
        aria-label="Anterior"
      >
        <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
      </button>
      <button
        onClick={next}
        className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-11 sm:h-11 rounded-full flex items-center justify-center transition-all duration-200 text-white border border-white/20 bg-black/20 backdrop-blur-sm hover:bg-black/40"
        aria-label="Próximo"
      >
        <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
      </button>
    </section>
  );
};

export default HeroCarousel;
