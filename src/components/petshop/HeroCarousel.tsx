import { useState, useEffect, useCallback } from "react";
import { MessageCircle, ChevronLeft, ChevronRight } from "lucide-react";
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
    <section id="inicio" className="relative overflow-hidden" style={{ minHeight: "60vh", maxHeight: "80vh", aspectRatio: "16/7" }}>
      {/* Full-screen slides with crossfade */}
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
            className="w-full h-full object-cover object-center"
            loading={i === 0 ? "eager" : "lazy"}
          />
        </div>
      ))}

      {/* CTA flutuante no canto inferior */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-3">
        <a
          href={WA_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full px-6 py-3 sm:px-8 sm:py-3.5 text-sm font-extrabold transition-all duration-300 hover:-translate-y-1 inline-flex items-center gap-2 shadow-xl"
          style={{ background: "var(--pet-yellow)", color: "#333" }}
        >
          <MessageCircle className="w-5 h-5" />
          Fale conosco no WhatsApp
        </a>

        {/* Dots */}
        <div className="flex gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className="h-2.5 rounded-full transition-all duration-500 relative overflow-hidden"
              style={{
                width: i === current ? 36 : 12,
                background: i === current ? "var(--pet-yellow)" : "rgba(255,255,255,0.5)",
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

      {/* Navigation arrows */}
      <button
        onClick={prev}
        className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full flex items-center justify-center bg-white/20 hover:bg-white/40 backdrop-blur-sm transition-all duration-200 text-white"
        aria-label="Anterior"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        onClick={next}
        className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full flex items-center justify-center bg-white/20 hover:bg-white/40 backdrop-blur-sm transition-all duration-200 text-white"
        aria-label="Próximo"
      >
        <ChevronRight className="w-5 h-5" />
      </button>
    </section>
  );
};

export default HeroCarousel;
