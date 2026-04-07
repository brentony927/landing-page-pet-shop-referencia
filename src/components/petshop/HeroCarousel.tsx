import { useState, useEffect, useCallback, useRef } from "react";
import { MessageCircle, ChevronLeft, ChevronRight, PawPrint, Shield, Star, Clock } from "lucide-react";
import heroSlide1 from "@/assets/hero-slide-1.png";
import heroSlide2 from "@/assets/hero-slide-2.png";
import heroSlide3 from "@/assets/hero-slide-3.png";

const WA_LINK = "https://wa.me/5569992216764?text=Oi%2C%20quero%20agendar%20um%20banho%20pro%20meu%20pet";

const slides = [
  {
    img: heroSlide1,
    title: "Seu pet merece o melhor!",
    subtitle: "Banho, tosa, rações e entrega no bairro",
  },
  {
    img: heroSlide2,
    title: "Qualidade profissional",
    subtitle: "Produtos premium e carinho de verdade",
  },
  {
    img: heroSlide3,
    title: "Entrega no mesmo dia",
    subtitle: "Rações e petiscos na porta da sua casa",
  },
];

const badges = [
  { icon: Shield, text: "12 anos" },
  { icon: Star, text: "Nota 5.0" },
  { icon: Clock, text: "< 1 hora" },
];

const HeroCarousel = () => {
  const [current, setCurrent] = useState(0);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const isDragging = useRef(false);

  const next = useCallback(() => setCurrent((c) => (c + 1) % slides.length), []);
  const prev = useCallback(() => setCurrent((c) => (c - 1 + slides.length) % slides.length), []);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next, current]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchEndX.current = e.touches[0].clientX;
    isDragging.current = true;
  };
  const handleTouchMove = (e: React.TouchEvent) => {
    if (isDragging.current) touchEndX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = () => {
    isDragging.current = false;
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) > 40) {
      if (diff > 0) next(); else prev();
    }
  };

  return (
    <section
      id="inicio"
      className="relative w-full overflow-hidden"
      style={{ marginTop: "56px" }}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Mobile: 3/4 aspect, Tablet: 4/3, Desktop: 16/7 */}
      <style>{`
        .hero-container { aspect-ratio: 3/4; }
        @media (min-width: 640px) { .hero-container { aspect-ratio: 4/3; } }
        @media (min-width: 1024px) { .hero-container { aspect-ratio: 16/7; } }
        @media (min-width: 768px) { section#inicio { margin-top: 92px; } }
      `}</style>

      <div className="hero-container relative w-full">
        {/* Slides */}
        {slides.map((slide, i) => (
          <div
            key={i}
            className="absolute inset-0 transition-opacity duration-700"
            style={{ opacity: i === current ? 1 : 0, zIndex: i === current ? 1 : 0 }}
          >
            <img
              src={slide.img}
              alt={slide.title}
              className="w-full h-full object-cover"
              style={{ objectPosition: "center 30%" }}
              loading={i === 0 ? "eager" : "lazy"}
              fetchPriority={i === 0 ? "high" : undefined}
            />
            {/* Gradient overlay - stronger at bottom */}
            <div className="absolute inset-0" style={{
              background: "linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.3) 40%, rgba(0,0,0,0.05) 70%, transparent 100%)"
            }} />
          </div>
        ))}

        {/* Content overlay */}
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-end px-5 pb-6 sm:pb-10 lg:pb-16">
          {/* Title with slide transition */}
          <div className="text-center mb-3 sm:mb-4" key={current}>
            <h1
              className="text-white text-2xl sm:text-3xl lg:text-5xl font-extrabold mb-1.5 sm:mb-2 animate-fadeUp"
              style={{ fontFamily: "'Baloo 2', cursive", textShadow: "0 3px 20px rgba(0,0,0,0.5)" }}
            >
              {slides[current].title}
            </h1>
            <p className="text-white/80 text-sm sm:text-base animate-fadeUp" style={{ animationDelay: "0.1s" }}>
              {slides[current].subtitle}
            </p>
          </div>

          {/* Trust badges */}
          <div className="flex items-center gap-2 sm:gap-3 mb-4">
            {badges.map((b, i) => (
              <div key={i} className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-white/15 backdrop-blur-md border border-white/20">
                <b.icon className="w-3 h-3 text-[#FFA000]" />
                <span className="text-[10px] sm:text-xs font-bold text-white">{b.text}</span>
              </div>
            ))}
          </div>

          {/* CTA */}
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-2xl w-full max-w-[300px] sm:w-auto sm:max-w-none py-3.5 sm:px-10 sm:py-4 text-sm sm:text-base font-extrabold transition-all duration-300 active:scale-95 hover:-translate-y-1 inline-flex items-center justify-center gap-2.5"
            style={{ background: "#FFA000", color: "#fff", boxShadow: "0 8px 30px rgba(255,160,0,0.5)" }}
          >
            <MessageCircle className="w-5 h-5" />
            Agende pelo WhatsApp
          </a>

          {/* Dots */}
          <div className="flex gap-2 mt-4 sm:mt-5">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className="h-1.5 rounded-full transition-all duration-500 relative overflow-hidden"
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

        {/* Arrows — desktop */}
        <button onClick={prev} className="absolute left-4 top-1/2 -translate-y-1/2 z-20 hidden md:flex w-11 h-11 rounded-full items-center justify-center text-white bg-black/25 backdrop-blur-sm border border-white/15 hover:bg-black/50 transition-all" aria-label="Anterior">
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button onClick={next} className="absolute right-4 top-1/2 -translate-y-1/2 z-20 hidden md:flex w-11 h-11 rounded-full items-center justify-center text-white bg-black/25 backdrop-blur-sm border border-white/15 hover:bg-black/50 transition-all" aria-label="Próximo">
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
};

export default HeroCarousel;
