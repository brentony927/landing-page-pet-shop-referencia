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
  const [direction, setDirection] = useState(1);

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((c) => (c + 1) % slides.length);
  }, []);

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrent((c) => (c - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section id="inicio" className="relative w-full overflow-hidden" style={{ marginTop: "calc(64px + 28px)", height: "calc(100vh - 92px)", maxHeight: "700px", minHeight: "400px" }}>
      {/* Slides */}
      {slides.map((slide, i) => (
        <div
          key={i}
          className="absolute inset-0 transition-all duration-700 ease-in-out"
          style={{
            opacity: i === current ? 1 : 0,
            transform: i === current ? "scale(1)" : `scale(1.05)`,
            zIndex: i === current ? 1 : 0,
          }}
        >
          <img
            src={slide.img}
            alt={`Slide ${i + 1}`}
            className="w-full h-full object-cover"
            style={{ objectPosition: "center 30%" }}
            loading={i === 0 ? "eager" : "lazy"}
          />
          {/* Overlay escuro sutil para legibilidade */}
          <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.1) 40%, transparent 70%)" }} />
        </div>
      ))}

      {/* Conteúdo flutuante */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-end pb-16 sm:pb-20 px-4">
        {/* Badge de confiança */}
        <div className="flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/20">
          <PawPrint className="w-3.5 h-3.5 text-white" />
          <span className="text-[11px] font-bold text-white tracking-wider uppercase">Pet Shop de confiança há 12 anos</span>
        </div>

        {/* CTA */}
        <a
          href={WA_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full px-8 py-3.5 sm:px-10 sm:py-4 text-sm sm:text-base font-extrabold transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl inline-flex items-center gap-2.5"
          style={{ background: "var(--pet-yellow)", color: "#333", boxShadow: "0 8px 30px rgba(255,193,7,0.5)" }}
        >
          <MessageCircle className="w-5 h-5" />
          Agende pelo WhatsApp
        </a>

        {/* Dots */}
        <div className="flex gap-2 mt-5">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className="h-2 rounded-full transition-all duration-500 relative overflow-hidden"
              style={{
                width: i === current ? 32 : 10,
                background: i === current ? "var(--pet-yellow)" : "rgba(255,255,255,0.4)",
              }}
            >
              {i === current && (
                <span
                  className="absolute inset-0 rounded-full"
                  style={{ background: "rgba(255,255,255,0.3)", animation: "progressBar 5s linear" }}
                />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Navigation arrows — mais elegantes */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full flex items-center justify-center transition-all duration-200 text-white border border-white/20"
        style={{ background: "rgba(255,255,255,0.1)", backdropFilter: "blur(8px)" }}
        onMouseEnter={(e) => e.currentTarget.style.background = "rgba(255,255,255,0.25)"}
        onMouseLeave={(e) => e.currentTarget.style.background = "rgba(255,255,255,0.1)"}
        aria-label="Anterior"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full flex items-center justify-center transition-all duration-200 text-white border border-white/20"
        style={{ background: "rgba(255,255,255,0.1)", backdropFilter: "blur(8px)" }}
        onMouseEnter={(e) => e.currentTarget.style.background = "rgba(255,255,255,0.25)"}
        onMouseLeave={(e) => e.currentTarget.style.background = "rgba(255,255,255,0.1)"}
        aria-label="Próximo"
      >
        <ChevronRight className="w-5 h-5" />
      </button>
    </section>
  );
};

export default HeroCarousel;
