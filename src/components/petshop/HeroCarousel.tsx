import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, Star, Dog } from "lucide-react";

const slides = [
  {
    h1: "Tosa na tesoura,\nsecagem com paciência.\nNada de pressa.",
    sub: "Ele entra precisando, e sai desfilando. Pode confiar!",
    cta1: { text: "AGENDAR AGORA", href: "https://wa.me/5569992216764" },
    cta2: { text: "Ver serviços", href: "#servicos" },
    accent: "#16a34a",
    stats: [
      { value: "5.0", label: "Google" },
      { value: "500+", label: "pets" },
      { value: "12", label: "anos" },
    ],
  },
  {
    h1: "12 anos no bairro.\nSeu vizinho já trouxe\no pet dele.",
    sub: "Equipe pequena que conhece cada pet pelo nome. Sem franquia, sem manual.",
    cta1: { text: "FALE PELO WHATSAPP", href: "https://wa.me/5569992216764" },
    cta2: { text: "Nossa história", href: "#sobre" },
    accent: "#f97316",
    stats: [
      { value: "5.0", label: "Google" },
      { value: "500+", label: "pets" },
      { value: "12", label: "anos" },
    ],
  },
  {
    h1: "Ração de qualidade\nentregue no\nmesmo dia.",
    sub: "Rações, petiscos e suplementos. Entrega no bairro sem taxa mínima.",
    cta1: { text: "VER RAÇÕES", href: "#racoes" },
    cta2: { text: "Agendar serviço", href: "https://wa.me/5569992216764" },
    accent: "#16a34a",
    stats: [
      { value: "5.0", label: "Google" },
      { value: "500+", label: "pets" },
      { value: "12", label: "anos" },
    ],
  },
];

const HeroCarousel = () => {
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState<"left" | "right">("right");

  const goTo = useCallback((index: number, dir: "left" | "right") => {
    if (isAnimating) return;
    setIsAnimating(true);
    setDirection(dir);
    setCurrent(index);
    setTimeout(() => setIsAnimating(false), 600);
  }, [isAnimating]);

  const next = useCallback(() => goTo((current + 1) % slides.length, "right"), [current, goTo]);
  const prev = useCallback(() => goTo((current - 1 + slides.length) % slides.length, "left"), [current, goTo]);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  const s = slides[current];

  return (
    <section id="inicio" className="bg-white relative overflow-hidden" style={{ paddingTop: "calc(64px + 32px)" }}>
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 md:px-10 py-14 md:py-20">
        <div className={`transition-all duration-600 ${isAnimating ? (direction === "right" ? "opacity-0 translate-x-6" : "opacity-0 -translate-x-6") : "opacity-100 translate-x-0"}`}>
          <h1
            className="text-3xl sm:text-4xl md:text-[3.8rem] font-black leading-[1.08] mb-5 max-w-2xl"
            style={{ fontFamily: "'Fraunces', Georgia, serif", color: "#1c1917", whiteSpace: "pre-line" }}
          >
            {s.h1}
          </h1>
          <p className="text-base md:text-lg mb-8 max-w-lg" style={{ color: "#78716c" }}>
            {s.sub}
          </p>
          <div className="flex flex-wrap gap-3 mb-10">
            <a
              href={s.cta1.href}
              className="rounded-lg px-7 py-3.5 text-sm font-bold text-white transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
              style={{ background: "#f97316" }}
              onMouseEnter={(e) => e.currentTarget.style.background = "#c2410c"}
              onMouseLeave={(e) => e.currentTarget.style.background = "#f97316"}
            >
              {s.cta1.text}
            </a>
            <a
              href={s.cta2.href}
              className="rounded-lg px-7 py-3.5 text-sm font-semibold transition-all duration-200 hover:bg-gray-50"
              style={{ border: "1.5px solid #d6d3d1", color: "#57534e" }}
            >
              {s.cta2.text}
            </a>
          </div>

          {/* Stats inline */}
          <div className="flex items-center gap-6 md:gap-10">
            {s.stats.map((stat, i) => (
              <div key={i} className="flex items-center gap-2">
                {i === 0 && <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />}
                <span className="text-xl md:text-2xl font-black" style={{ fontFamily: "'Fraunces', Georgia, serif", color: "#1c1917" }}>
                  {stat.value}
                </span>
                <span className="text-xs text-stone-400 uppercase tracking-wider">{stat.label}</span>
                {i < s.stats.length - 1 && <span className="w-px h-5 bg-stone-200 ml-4 md:ml-6" />}
              </div>
            ))}
          </div>
        </div>

        {/* Dots */}
        <div className="flex gap-2 mt-12">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i, i > current ? "right" : "left")}
              className="h-1.5 rounded-full transition-all duration-300 relative overflow-hidden"
              style={{
                width: i === current ? 32 : 8,
                background: i === current ? "#f97316" : "#e7e5e4",
              }}
            >
              {i === current && (
                <span className="absolute inset-0 bg-orange-800/20 animate-progress" style={{ "--duration": "5s" } as React.CSSProperties} />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Nav arrows */}
      <button onClick={prev} className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full hidden md:flex items-center justify-center bg-white/80 backdrop-blur border border-stone-200 hover:border-stone-400 transition-all">
        <ChevronLeft className="w-5 h-5 text-stone-500" />
      </button>
      <button onClick={next} className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full hidden md:flex items-center justify-center bg-white/80 backdrop-blur border border-stone-200 hover:border-stone-400 transition-all">
        <ChevronRight className="w-5 h-5 text-stone-500" />
      </button>
    </section>
  );
};

export default HeroCarousel;
