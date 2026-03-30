import { useState, useEffect, useCallback, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import banhoTosaImg from "@/assets/banho-tosa.png";
import racaoPetImg from "@/assets/racao-pet.png";

const slides = [
  {
    image: null,
    emoji: "🐕",
    title: "ESTAMOS SEMPRE AQUI PARA A SAÚDE DO SEU PET",
    subtitle: "Cuidado completo, profissional e cheio de carinho pro seu melhor amigo",
    cta1: "COMPRAR AGORA",
    cta2: "Agendar ligação",
  },
  {
    image: banhoTosaImg,
    emoji: "🛁",
    title: "BANHO & TOSA COM CARINHO DE VERDADE",
    subtitle: "Profissionais que tratam seu pet como parte da família",
    cta1: "AGENDAR AGORA",
    cta2: "Ver serviços",
  },
  {
    image: racaoPetImg,
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

const SLIDE_DURATION = 5000;

const HeroCarousel = () => {
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [progress, setProgress] = useState(0);
  const progressRef = useRef<number>(0);
  const rafRef = useRef<number>(0);
  const startTimeRef = useRef<number>(Date.now());

  const goTo = useCallback((idx: number) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrent(idx);
      setIsTransitioning(false);
      setProgress(0);
      startTimeRef.current = Date.now();
    }, 300);
  }, []);

  const next = useCallback(() => goTo((current + 1) % slides.length), [current, goTo]);
  const prev = useCallback(() => goTo((current - 1 + slides.length) % slides.length), [current, goTo]);

  // Progress bar animation
  useEffect(() => {
    const animate = () => {
      const elapsed = Date.now() - startTimeRef.current;
      const pct = Math.min(elapsed / SLIDE_DURATION, 1);
      setProgress(pct);
      if (pct >= 1) {
        goTo((current + 1) % slides.length);
        return;
      }
      rafRef.current = requestAnimationFrame(animate);
    };
    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, [current, goTo]);

  const slide = slides[current];

  return (
    <section id="inicio" className="pt-16">
      <div className="bg-petshop-teal relative overflow-hidden min-h-[600px] md:min-h-[650px]">
        {/* Floating paws */}
        <div className="absolute top-10 left-10 text-5xl opacity-10 animate-float">🐾</div>
        <div className="absolute bottom-10 right-10 text-6xl opacity-10 animate-float-delayed">🐾</div>
        <div className="absolute top-1/3 right-20 text-4xl opacity-5 animate-float hidden md:block">🐾</div>
        <div className="absolute bottom-32 left-1/4 text-3xl opacity-5 animate-float-delayed hidden md:block">🐾</div>
        <div className="absolute top-20 right-1/3 text-3xl opacity-5 animate-float hidden lg:block">🐾</div>

        <div className={`container mx-auto px-4 py-16 md:py-24 relative z-10 transition-all duration-500 ${isTransitioning ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"}`}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left — text */}
            <div className="text-center lg:text-left">
              <h1 className="font-heading text-3xl md:text-5xl lg:text-6xl font-bold text-primary-foreground max-w-2xl leading-tight mb-4 uppercase tracking-tight" style={{ textShadow: "0 2px 20px rgba(0,0,0,0.2)" }}>
                {slide.title}
              </h1>
              <p className="text-primary-foreground/60 text-lg md:text-xl max-w-xl mb-8 font-medium">
                {slide.subtitle}
              </p>
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <button className="bg-accent-foreground text-primary-foreground font-bold px-8 py-3 rounded-full text-sm tracking-wider shadow-lg uppercase hover:-translate-y-1 transition-transform duration-300">
                  {slide.cta1}
                </button>
                <button className="border-2 border-primary-foreground/30 text-primary-foreground font-bold px-8 py-3 rounded-full text-sm tracking-wider hover:border-accent hover:text-accent hover:-translate-y-1 transition-all duration-300">
                  {slide.cta2}
                </button>
              </div>

              {/* Stats */}
              <div className="flex flex-wrap gap-8 md:gap-12 mt-12 justify-center lg:justify-start">
                {stats.map((s) => (
                  <div key={s.label} className="text-center lg:text-left">
                    <p className="font-heading text-3xl md:text-4xl font-bold text-accent">{s.value}</p>
                    <p className="text-primary-foreground/50 text-sm font-semibold mt-1">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — image */}
            <div className="flex items-center justify-center">
              <div className="relative w-72 h-72 md:w-96 md:h-96">
                {slide.image ? (
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="w-full h-full object-contain drop-shadow-2xl animate-hero-image"
                  />
                ) : (
                  <div className="w-full h-full rounded-3xl bg-petshop-teal-light flex items-center justify-center">
                    <span className="text-[8rem] md:text-[10rem] animate-hero-image">{slide.emoji}</span>
                  </div>
                )}
                {/* Decorative ring */}
                <div className="absolute inset-0 border-4 border-accent/20 rounded-full animate-spin-slow pointer-events-none" />
              </div>
            </div>
          </div>
        </div>

        {/* Nav arrows */}
        <button
          onClick={prev}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-primary-foreground/10 hover:bg-primary-foreground/20 rounded-full p-3 transition-all z-20 hover:scale-110 backdrop-blur-sm"
        >
          <ChevronLeft className="w-6 h-6 text-primary-foreground" />
        </button>
        <button
          onClick={next}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-primary-foreground/10 hover:bg-primary-foreground/20 rounded-full p-3 transition-all z-20 hover:scale-110 backdrop-blur-sm"
        >
          <ChevronRight className="w-6 h-6 text-primary-foreground" />
        </button>
      </div>

      {/* Progress indicators */}
      <div className="flex justify-center gap-3 -mt-5 relative z-20">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className="relative h-1.5 rounded-full overflow-hidden bg-border transition-all duration-300"
            style={{ width: i === current ? "3rem" : "1.5rem" }}
          >
            {i === current && (
              <div
                className="absolute inset-0 bg-accent rounded-full"
                style={{ width: `${progress * 100}%`, transition: "width 0.1s linear" }}
              />
            )}
          </button>
        ))}
      </div>
    </section>
  );
};

export default HeroCarousel;
