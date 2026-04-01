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
    <section id="inicio" className="pt-16">
      <div className="bg-petshop-teal relative overflow-hidden min-h-[400px] md:min-h-[560px]">
        <div className={`container mx-auto px-4 py-12 md:py-24 relative z-10 transition-all duration-200 ${isTransitioning ? "opacity-0 translate-y-3" : "opacity-100 translate-y-0"}`} style={{ willChange: "opacity, transform" }}>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-heading text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-4 md:mb-6" style={{ textShadow: "0 2px 20px rgba(0,0,0,0.2)" }}>
              {slide.title} <span className="text-accent">{slide.highlight}</span>{slide.titleEnd}
            </h1>
            <p className="text-primary-foreground/60 text-base md:text-xl max-w-xl mx-auto mb-8 md:mb-10 font-medium">
              {slide.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <a href={slide.cta1Link} className="bg-primary text-primary-foreground font-bold px-8 md:px-10 py-3 md:py-4 rounded-lg text-sm tracking-wider uppercase shadow-lg hover:-translate-y-1 hover:shadow-[0_0_24px_hsl(18_100%_59%/0.5)] transition-all duration-200">
                {slide.cta1}
              </a>
              <a href={slide.cta2Link} className="border-2 border-primary-foreground/30 text-primary-foreground font-bold px-6 md:px-8 py-3 md:py-4 rounded-lg text-sm tracking-wider hover:border-accent hover:text-accent hover:-translate-y-1 transition-all duration-200">
                {slide.cta2}
              </a>
            </div>
          </div>
        </div>

        <button onClick={prev} className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 bg-primary-foreground/10 hover:bg-primary-foreground/20 rounded-lg p-2 md:p-3 transition-all duration-200 z-20 backdrop-blur-sm">
          <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-primary-foreground" />
        </button>
        <button onClick={next} className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 bg-primary-foreground/10 hover:bg-primary-foreground/20 rounded-lg p-2 md:p-3 transition-all duration-200 z-20 backdrop-blur-sm">
          <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-primary-foreground" />
        </button>
      </div>

      <div className="bg-accent/15 py-4 md:py-6">
        <div className="container mx-auto px-4 flex flex-wrap justify-center gap-6 md:gap-16">
          <div className="text-center">
            <p className="font-heading text-xl md:text-3xl font-bold text-primary">5.000+</p>
            <p className="text-muted-foreground text-xs md:text-sm font-semibold">Pets atendidos</p>
          </div>
          <div className="text-center">
            <p className="font-heading text-xl md:text-3xl font-bold text-primary">12 anos</p>
            <p className="text-muted-foreground text-xs md:text-sm font-semibold">No mercado</p>
          </div>
          <div className="text-center">
            <p className="font-heading text-xl md:text-3xl font-bold text-primary">4.8★</p>
            <p className="text-muted-foreground text-xs md:text-sm font-semibold">Avaliação Google</p>
          </div>
        </div>
      </div>

      <div className="flex justify-center gap-3 -mt-3 relative z-20">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className="relative h-1.5 rounded-full overflow-hidden bg-border transition-all duration-200"
            style={{ width: i === current ? "3rem" : "1.5rem" }}
          >
            {i === current && (
              <div
                key={progressKey}
                className="absolute inset-0 bg-accent rounded-full animate-progress"
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
