import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    emoji: "🐕",
    title: "Seu melhor amigo merece o melhor cuidado",
    subtitle: "Banho, tosa, veterinário e muito carinho em um só lugar",
    cta: "Conhecer serviços",
    bg: "bg-primary",
  },
  {
    emoji: "🛁",
    title: "Banho & Tosa com carinho de verdade",
    subtitle: "Profissionais que tratam seu pet como parte da família",
    cta: "Agendar agora",
    bg: "bg-secondary",
  },
  {
    emoji: "🥣",
    title: "Rações selecionadas pra cada fase da vida",
    subtitle: "Do filhote ao sênior, só o que há de melhor na tigela",
    cta: "Ver rações",
    bg: "bg-petshop-purple",
  },
];

const HeroCarousel = () => {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => setCurrent((c) => (c + 1) % slides.length), []);
  const prev = useCallback(() => setCurrent((c) => (c - 1 + slides.length) % slides.length), []);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  const slide = slides[current];

  return (
    <section id="inicio" className="pt-16">
      <div className={`${slide.bg} transition-colors duration-700 relative overflow-hidden`}>
        <div className="container mx-auto px-4 py-20 md:py-32 flex flex-col items-center text-center relative z-10">
          <span className="text-7xl md:text-9xl mb-6 block animate-bounce">{slide.emoji}</span>
          <h1 className="font-heading text-3xl md:text-5xl lg:text-6xl font-bold text-primary-foreground max-w-3xl leading-tight mb-4">
            {slide.title}
          </h1>
          <p className="text-primary-foreground/80 text-lg md:text-xl max-w-xl mb-8 font-medium">
            {slide.subtitle}
          </p>
          <button className="bg-card text-foreground font-bold px-8 py-3 rounded-full text-lg hover-scale shadow-lg">
            {slide.cta} →
          </button>
        </div>

        {/* Decorative paws */}
        <div className="absolute top-10 left-10 text-5xl opacity-20 rotate-[-20deg]">🐾</div>
        <div className="absolute bottom-10 right-10 text-6xl opacity-20 rotate-[15deg]">🐾</div>
        <div className="absolute top-1/2 right-20 text-4xl opacity-10 rotate-[40deg] hidden md:block">🐾</div>

        {/* Nav arrows */}
        <button
          onClick={prev}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-card/30 hover:bg-card/60 rounded-full p-2 transition-colors z-20"
        >
          <ChevronLeft className="w-6 h-6 text-primary-foreground" />
        </button>
        <button
          onClick={next}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-card/30 hover:bg-card/60 rounded-full p-2 transition-colors z-20"
        >
          <ChevronRight className="w-6 h-6 text-primary-foreground" />
        </button>
      </div>

      {/* Indicators */}
      <div className="flex justify-center gap-2 -mt-5 relative z-20">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              i === current ? "bg-primary w-8" : "bg-border"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroCarousel;
