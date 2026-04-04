import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    title: "Aqui o banho vem com carinho —",
    highlight: "e o biscoito",
    titleEnd: " é por nossa conta",
    subtitle: "Banho, ração, veterinário — tudo num só lugar, com gente que ama bicho de verdade",
    cta1: "AGENDAR AGORA",
    cta1Link: "https://wa.me/5569992216764",
    cta2: "Ver serviços",
    cta2Link: "#servicos",
  },
  {
    title: "Tosa na tesoura, secagem com",
    highlight: "paciência",
    titleEnd: ". Nada de pressa.",
    subtitle: "Ele entra precisando, e sai desfilando. Pode confiar!",
    cta1: "AGENDAR AGORA",
    cta1Link: "https://wa.me/5569992216764",
    cta2: "Ver serviços",
    cta2Link: "#servicos",
  },
  {
    title: "A gente prova? Não. Mas o",
    highlight: "rabo abanando",
    titleEnd: " já diz tudo.",
    subtitle: "Do filhote ao velhinho, só o que tem qualidade vai pra tigela",
    cta1: "VER RAÇÕES",
    cta1Link: "#racoes",
    cta2: "Fale conosco",
    cta2Link: "https://wa.me/5569992216764",
  },
];

const SLIDE_DURATION = 5000;

const HeroCarousel = () => {
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [progressKey, setProgressKey] = useState(0);

  const goTo = useCallback((idx: number) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrent(idx);
      setIsTransitioning(false);
      setProgressKey(k => k + 1);
    }, 200);
  }, []);

  const next = useCallback(() => goTo((current + 1) % slides.length), [current, goTo]);
  const prev = useCallback(() => goTo((current - 1 + slides.length) % slides.length), [current, goTo]);

  useEffect(() => {
    const timer = setInterval(() => {
      goTo((current + 1) % slides.length);
    }, SLIDE_DURATION);
    return () => clearInterval(timer);
  }, [current, goTo]);

  const slide = slides[current];

  return (
    <section id="inicio" className="pt-[3.5rem] md:pt-[5.5rem]">
      {/* Fundo branco com shape decorativo verde claro */}
      <div className="bg-background relative overflow-hidden min-h-[400px] md:min-h-[560px]">
        {/* Decorative shape */}
        <div className="absolute -top-20 -right-20 w-[400px] h-[400px] rounded-full bg-secondary/8 z-0" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full bg-secondary/5 z-0" />
        
        <div className={`container mx-auto px-4 py-12 md:py-24 relative z-10 transition-all duration-200 ${isTransitioning ? "opacity-0 translate-y-3" : "opacity-100 translate-y-0"}`} style={{ willChange: "opacity, transform" }}>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-black text-foreground leading-tight mb-4 md:mb-6">
              {slide.title} <span className="text-secondary">{slide.highlight}</span>{slide.titleEnd}
            </h1>
            <p className="text-muted-foreground text-base md:text-xl max-w-xl mx-auto mb-8 md:mb-10">
              {slide.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <a href={slide.cta1Link} className="bg-secondary text-secondary-foreground font-bold px-8 md:px-10 py-3 md:py-4 rounded-md text-sm tracking-wider uppercase shadow-lg hover:-translate-y-0.5 hover:shadow-[0_6px_20px_hsl(142_72%_37%/0.3)] transition-all duration-200">
                {slide.cta1}
              </a>
              <a href={slide.cta2Link} className="border-[1.5px] border-foreground/20 text-foreground font-bold px-6 md:px-8 py-3 md:py-4 rounded-md text-sm tracking-wider hover:bg-muted hover:border-foreground/40 transition-all duration-200">
                {slide.cta2}
              </a>
            </div>
          </div>
        </div>

        <button onClick={prev} className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 bg-foreground/5 hover:bg-foreground/10 rounded-md p-2 md:p-3 transition-all duration-200 z-20">
          <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-foreground" />
        </button>
        <button onClick={next} className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 bg-foreground/5 hover:bg-foreground/10 rounded-md p-2 md:p-3 transition-all duration-200 z-20">
          <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-foreground" />
        </button>
      </div>

      {/* Stats bar */}
      <div className="bg-background py-4 md:py-6 border-b border-border">
        <div className="container mx-auto px-4 flex flex-wrap justify-center gap-6 md:gap-16">
          <div className="text-center">
            <p className="text-xl md:text-3xl font-black text-secondary">5.000+</p>
            <p className="text-muted-foreground text-xs md:text-sm">Pets atendidos</p>
          </div>
          <div className="text-center">
            <p className="text-xl md:text-3xl font-black text-secondary">12 anos</p>
            <p className="text-muted-foreground text-xs md:text-sm">No mercado</p>
          </div>
          <div className="text-center">
            <p className="text-xl md:text-3xl font-black text-secondary">4.8★</p>
            <p className="text-muted-foreground text-xs md:text-sm">Avaliação Google</p>
          </div>
        </div>
      </div>

      <div className="flex justify-center gap-3 -mt-3 relative z-20">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className="relative h-1.5 rounded-sm overflow-hidden bg-border transition-all duration-200"
            style={{ width: i === current ? "3rem" : "1.5rem" }}
          >
            {i === current && (
              <div
                key={progressKey}
                className="absolute inset-0 bg-secondary rounded-sm animate-progress"
                style={{ "--duration": `${SLIDE_DURATION}ms` } as React.CSSProperties}
              />
            )}
          </button>
        ))}
      </div>
    </section>
  );
};

export default HeroCarousel;
