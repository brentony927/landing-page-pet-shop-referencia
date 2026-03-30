import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    emoji: "🐕",
    title: "ESTAMOS SEMPRE AQUI PARA A SAÚDE DO SEU PET",
    subtitle: "Cuidado completo, profissional e cheio de carinho pro seu melhor amigo",
    cta1: "COMPRAR AGORA",
    cta2: "Agendar ligação",
  },
  {
    emoji: "🛁",
    title: "BANHO & TOSA COM CARINHO DE VERDADE",
    subtitle: "Profissionais que tratam seu pet como parte da família",
    cta1: "AGENDAR AGORA",
    cta2: "Ver serviços",
  },
  {
    emoji: "🥣",
    title: "RAÇÕES SELECIONADAS PRA CADA FASE DA VIDA",
    subtitle: "Do filhote ao sênior, só o que há de melhor na tigela",
    cta1: "VER RAÇÕES",
    cta2: "Fale conosco",
  },
];

const stats = [
  { value: "200K+", label: "Nutrição Completa" },
  { value: "R$4", label: "Menor Preço" },
  { value: "97%", label: "Satisfação" },
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
      <div className="bg-petshop-teal relative overflow-hidden">
        <div className="container mx-auto px-4 py-20 md:py-28 flex flex-col items-center text-center relative z-10">
          <span className="text-7xl md:text-9xl mb-6 block animate-bounce">{slide.emoji}</span>
          <h1 className="font-heading text-3xl md:text-5xl lg:text-6xl font-bold text-primary-foreground max-w-4xl leading-tight mb-4 uppercase tracking-tight">
            {slide.title}
          </h1>
          <p className="text-primary-foreground/60 text-lg md:text-xl max-w-xl mb-8 font-medium">
            {slide.subtitle}
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button className="bg-accent-foreground text-primary-foreground font-bold px-8 py-3 rounded-full text-sm tracking-wider hover-scale shadow-lg uppercase">
              {slide.cta1}
            </button>
            <button className="border-2 border-primary-foreground/30 text-primary-foreground font-bold px-8 py-3 rounded-full text-sm tracking-wider hover:border-accent hover:text-accent transition-colors">
              {slide.cta2}
            </button>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-8 md:gap-16 mt-14 justify-center">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <p className="font-heading text-3xl md:text-4xl font-bold text-accent">{s.value}</p>
                <p className="text-primary-foreground/50 text-sm font-semibold mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Decorative paws */}
        <div className="absolute top-10 left-10 text-5xl opacity-10 rotate-[-20deg]">🐾</div>
        <div className="absolute bottom-10 right-10 text-6xl opacity-10 rotate-[15deg]">🐾</div>
        <div className="absolute top-1/2 right-20 text-4xl opacity-5 rotate-[40deg] hidden md:block">🐾</div>
        <div className="absolute bottom-20 left-1/4 text-3xl opacity-5 rotate-[-10deg] hidden md:block">🐾</div>

        {/* Nav arrows */}
        <button
          onClick={prev}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-primary-foreground/10 hover:bg-primary-foreground/20 rounded-full p-2 transition-colors z-20"
        >
          <ChevronLeft className="w-6 h-6 text-primary-foreground" />
        </button>
        <button
          onClick={next}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-primary-foreground/10 hover:bg-primary-foreground/20 rounded-full p-2 transition-colors z-20"
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
              i === current ? "bg-accent w-8" : "bg-border"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroCarousel;
