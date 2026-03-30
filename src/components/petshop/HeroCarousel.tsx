import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, PawPrint, Heart, ChevronDown } from "lucide-react";
import Icon3D from "./Icon3D";
import ImagePlaceholder from "./ImagePlaceholder";

const slides = [
  {
    title: "Seu pet merece o",
    highlight: "melhor",
    titleEnd: ", e a gente entrega!",
    subtitle: "Banho, ração, veterinário — tudo num só lugar, com gente que ama bicho de verdade",
    cta1: "COMPRAR AGORA",
    cta2: "Agendar ligação",
  },
  {
    title: "Banho & tosa que seu pet vai",
    highlight: "amar",
    titleEnd: "",
    subtitle: "Ele entra precisando, e sai desfilando. Pode confiar!",
    cta1: "AGENDAR AGORA",
    cta2: "Ver serviços",
  },
  {
    title: "Ração boa de",
    highlight: "verdade",
    titleEnd: ", sem enrolação",
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
  const [progressKey, setProgressKey] = useState(0);

  const goTo = useCallback((idx: number) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrent(idx);
      setIsTransitioning(false);
      setProgressKey(k => k + 1);
    }, 300);
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
      <div className="bg-petshop-teal relative overflow-hidden min-h-[600px] md:min-h-[650px]">
        {/* Floating paw decorations */}
        <div className="absolute top-10 left-10 opacity-15 animate-float">
          <Icon3D icon={PawPrint} size="lg" color="green" animate="none" />
        </div>
        <div className="absolute bottom-20 right-10 opacity-15 animate-float-delayed">
          <Icon3D icon={Heart} size="xl" color="orange" animate="none" />
        </div>
        <div className="absolute top-1/4 right-1/4 opacity-10 hidden md:block animate-float">
          <Icon3D icon={PawPrint} size="md" color="yellow" animate="none" />
        </div>
        <div className="absolute bottom-1/3 left-1/4 opacity-8 hidden lg:block animate-float-delayed">
          <Icon3D icon={PawPrint} size="sm" color="green" animate="none" />
        </div>

        <div className={`container mx-auto px-4 py-16 md:py-24 relative z-10 transition-all duration-300 ${isTransitioning ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"}`}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="text-center lg:text-left">
              <h1 className="font-heading text-3xl md:text-5xl lg:text-6xl font-bold text-primary-foreground max-w-2xl leading-tight mb-4" style={{ textShadow: "0 2px 20px rgba(0,0,0,0.2)" }}>
                {slide.title} <span className="text-accent">{slide.highlight}</span>{slide.titleEnd}
              </h1>
              <p className="text-primary-foreground/60 text-lg md:text-xl max-w-xl mb-8 font-medium">
                {slide.subtitle}
              </p>
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <button className="animate-cta-pulse bg-primary text-primary-foreground font-bold px-10 py-4 rounded-lg text-sm tracking-wider uppercase shadow-lg hover:-translate-y-1 hover:shadow-[0_0_24px_hsl(18_100%_59%/0.5)] transition-all duration-300">
                  {slide.cta1}
                </button>
                <button className="border-2 border-primary-foreground/30 text-primary-foreground font-bold px-8 py-4 rounded-lg text-sm tracking-wider hover:border-accent hover:text-accent hover:-translate-y-1 transition-all duration-300">
                  {slide.cta2}
                </button>
              </div>

              <div className="flex flex-wrap gap-8 md:gap-12 mt-12 justify-center lg:justify-start">
                {stats.map((s, i) => (
                  <div key={s.label} className="text-center lg:text-left">
                    <div className="flex items-center gap-2 justify-center lg:justify-start">
                      <Icon3D icon={[PawPrint, Heart, PawPrint][i]} size="sm" color={["green", "orange", "yellow"][i] as "green" | "orange" | "yellow"} animate="float" className="!w-8 !h-8" />
                      <p className="font-heading text-3xl md:text-4xl font-bold text-accent">{s.value}</p>
                    </div>
                    <p className="text-primary-foreground/50 text-sm font-semibold mt-1">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-center">
              <div className="relative w-72 h-72 md:w-96 md:h-96 animate-hero-image">
                <ImagePlaceholder className="w-full h-full" variant="neutral" />
                <div className="absolute -bottom-3 -right-3 animate-bounce-small">
                  <Icon3D icon={Heart} size="md" color="orange" animate="none" />
                </div>
                <div className="absolute -top-3 -left-3 animate-float">
                  <Icon3D icon={PawPrint} size="sm" color="green" animate="none" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 animate-scroll-down">
          <ChevronDown className="w-6 h-6 text-primary-foreground/40" />
        </div>

        <button onClick={prev} className="absolute left-4 top-1/2 -translate-y-1/2 bg-primary-foreground/10 hover:bg-primary-foreground/20 rounded-lg p-3 transition-all duration-200 z-20 hover:scale-110 backdrop-blur-sm">
          <ChevronLeft className="w-6 h-6 text-primary-foreground" />
        </button>
        <button onClick={next} className="absolute right-4 top-1/2 -translate-y-1/2 bg-primary-foreground/10 hover:bg-primary-foreground/20 rounded-lg p-3 transition-all duration-200 z-20 hover:scale-110 backdrop-blur-sm">
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
