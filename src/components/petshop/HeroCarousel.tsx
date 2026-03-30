import { useState, useEffect, useCallback, useRef } from "react";
import { ChevronLeft, ChevronRight, PawPrint, Heart, ShoppingBag } from "lucide-react";
import Icon3D from "./Icon3D";
import ImagePlaceholder from "./ImagePlaceholder";

const slides = [
  {
    title: "Seu pet merece o melhor, e a gente entrega!",
    subtitle: "Banho, ração, veterinário — tudo num só lugar, com gente que ama bicho de verdade",
    cta1: "COMPRAR AGORA",
    cta2: "Agendar ligação",
  },
  {
    title: "Banho & tosa que seu pet vai amar",
    subtitle: "Ele entra precisando, e sai desfilando. Pode confiar!",
    cta1: "AGENDAR AGORA",
    cta2: "Ver serviços",
  },
  {
    title: "Ração boa de verdade, sem enrolação",
    subtitle: "Do filhote ao velhinho, só o que tem qualidade vai pra tigela",
    cta1: "VER RAÇÕES",
    cta2: "Fale conosco",
  },
];

const stats = [
  { value: "5.000+", label: "Pets atendidos" },
  { value: "12 anos", label: "No mercado" },
  { value: "4.8★", label: "Avaliação Google" },
];

const SLIDE_DURATION = 5000;

const HeroCarousel = () => {
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [progress, setProgress] = useState(0);
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
        <div className="absolute top-10 left-10 opacity-20">
          <Icon3D icon={PawPrint} size="lg" color="green" animate="float" />
        </div>
        <div className="absolute bottom-10 right-10 opacity-20">
          <Icon3D icon={Heart} size="xl" color="orange" animate="float" />
        </div>
        <div className="absolute top-1/3 right-20 opacity-10 hidden md:block">
          <Icon3D icon={PawPrint} size="md" color="yellow" animate="float" />
        </div>

        <div className={`container mx-auto px-4 py-16 md:py-24 relative z-10 transition-all duration-500 ${isTransitioning ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"}`}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="text-center lg:text-left">
              <h1 className="font-heading text-3xl md:text-5xl lg:text-6xl font-bold text-primary-foreground max-w-2xl leading-tight mb-4" style={{ textShadow: "0 2px 20px rgba(0,0,0,0.2)" }}>
                {slide.title}
              </h1>
              <p className="text-primary-foreground/60 text-lg md:text-xl max-w-xl mb-8 font-medium">
                {slide.subtitle}
              </p>
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <button className="bg-primary text-primary-foreground font-bold px-8 py-3 rounded-lg text-sm tracking-wider shadow-lg uppercase hover:-translate-y-1 transition-transform duration-300">
                  {slide.cta1}
                </button>
                <button className="border-2 border-primary-foreground/30 text-primary-foreground font-bold px-8 py-3 rounded-lg text-sm tracking-wider hover:border-accent hover:text-accent hover:-translate-y-1 transition-all duration-300">
                  {slide.cta2}
                </button>
              </div>

              <div className="flex flex-wrap gap-8 md:gap-12 mt-12 justify-center lg:justify-start">
                {stats.map((s) => (
                  <div key={s.label} className="text-center lg:text-left">
                    <p className="font-heading text-3xl md:text-4xl font-bold text-accent">{s.value}</p>
                    <p className="text-primary-foreground/50 text-sm font-semibold mt-1">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-center">
              <div className="relative w-72 h-72 md:w-96 md:h-96">
                <ImagePlaceholder className="w-full h-full" variant="neutral" />
                <div className="absolute -bottom-3 -right-3">
                  <Icon3D icon={Heart} size="md" color="orange" animate="pulse" />
                </div>
                <div className="absolute -top-3 -left-3">
                  <Icon3D icon={PawPrint} size="sm" color="green" animate="float" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <button onClick={prev} className="absolute left-4 top-1/2 -translate-y-1/2 bg-primary-foreground/10 hover:bg-primary-foreground/20 rounded-lg p-3 transition-all z-20 hover:scale-110 backdrop-blur-sm">
          <ChevronLeft className="w-6 h-6 text-primary-foreground" />
        </button>
        <button onClick={next} className="absolute right-4 top-1/2 -translate-y-1/2 bg-primary-foreground/10 hover:bg-primary-foreground/20 rounded-lg p-3 transition-all z-20 hover:scale-110 backdrop-blur-sm">
          <ChevronRight className="w-6 h-6 text-primary-foreground" />
        </button>
      </div>

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
