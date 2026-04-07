import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, Star, Dog, Scissors, Bone, Heart, Truck, Bath } from "lucide-react";

const slides = [
  {
    h1: "Tosa na tesoura,\nsecagem com\npaciência.",
    sub: "Ele entra precisando, e sai desfilando.",
    cta1: { text: "AGENDAR AGORA", href: "https://wa.me/5569992216764" },
    cta2: { text: "Ver serviços", href: "#servicos" },
    rightIcon: Scissors,
    rightBg: "#f0fdf4",
    rightColor: "#16a34a",
    rightLabel: "Banho & Tosa",
    floatingIcons: [
      { icon: Bath, x: "75%", y: "15%", bg: "#dcfce7", color: "#16a34a", size: 36 },
      { icon: Heart, x: "90%", y: "65%", bg: "#fef2f2", color: "#ef4444", size: 28 },
      { icon: Star, x: "65%", y: "80%", bg: "#fef9c3", color: "#ca8a04", size: 24 },
    ],
  },
  {
    h1: "12 anos no\nbairro. Seu vizinho\njá trouxe o pet.",
    sub: "Equipe pequena que conhece cada pet pelo nome.",
    cta1: { text: "FALE PELO WHATSAPP", href: "https://wa.me/5569992216764" },
    cta2: { text: "Nossa história", href: "#sobre" },
    rightIcon: Dog,
    rightBg: "#fff7ed",
    rightColor: "#f97316",
    rightLabel: "12 Anos",
    floatingIcons: [
      { icon: Heart, x: "70%", y: "12%", bg: "#fce7f3", color: "#ec4899", size: 32 },
      { icon: Bone, x: "92%", y: "55%", bg: "#f0fdf4", color: "#16a34a", size: 26 },
      { icon: Star, x: "68%", y: "78%", bg: "#fef9c3", color: "#ca8a04", size: 30 },
    ],
  },
  {
    h1: "Ração de\nqualidade\nno mesmo dia.",
    sub: "Rações, petiscos e suplementos. Entrega sem taxa mínima.",
    cta1: { text: "VER RAÇÕES", href: "#racoes" },
    cta2: { text: "Agendar serviço", href: "https://wa.me/5569992216764" },
    rightIcon: Truck,
    rightBg: "#f0fdf4",
    rightColor: "#16a34a",
    rightLabel: "Entrega Rápida",
    floatingIcons: [
      { icon: Bone, x: "72%", y: "18%", bg: "#fff7ed", color: "#f97316", size: 30 },
      { icon: Dog, x: "88%", y: "60%", bg: "#dcfce7", color: "#16a34a", size: 28 },
      { icon: Heart, x: "70%", y: "75%", bg: "#fce7f3", color: "#ec4899", size: 24 },
    ],
  },
];

const HeroCarousel = () => {
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [slideDirection, setSlideDirection] = useState<"right" | "left">("right");

  const goTo = useCallback((index: number, dir: "left" | "right") => {
    if (isAnimating) return;
    setIsAnimating(true);
    setSlideDirection(dir);
    setCurrent(index);
    setTimeout(() => setIsAnimating(false), 700);
  }, [isAnimating]);

  const next = useCallback(() => goTo((current + 1) % slides.length, "right"), [current, goTo]);
  const prev = useCallback(() => goTo((current - 1 + slides.length) % slides.length, "left"), [current, goTo]);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  const s = slides[current];
  const RightIcon = s.rightIcon;

  return (
    <section id="inicio" className="bg-white relative overflow-hidden" style={{ paddingTop: "calc(64px + 32px)" }}>
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 md:px-10 py-10 md:py-16 min-h-[480px] md:min-h-[520px]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-6 items-center">
          {/* Left — Text */}
          <div
            className="transition-all duration-700 ease-out"
            style={{
              opacity: isAnimating ? 0 : 1,
              transform: isAnimating
                ? slideDirection === "right" ? "translateX(40px)" : "translateX(-40px)"
                : "translateX(0)",
            }}
          >
            <h1
              className="text-3xl sm:text-4xl md:text-[3.2rem] font-black leading-[1.06] mb-4"
              style={{ fontFamily: "'Fraunces', Georgia, serif", color: "#1c1917", whiteSpace: "pre-line" }}
            >
              {s.h1}
            </h1>
            <p className="text-base md:text-lg mb-7 max-w-md" style={{ color: "#78716c" }}>
              {s.sub}
            </p>
            <div className="flex flex-wrap gap-3 mb-8">
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
                className="rounded-lg px-7 py-3.5 text-sm font-semibold transition-all duration-200 hover:bg-stone-50"
                style={{ border: "1.5px solid #d6d3d1", color: "#57534e" }}
              >
                {s.cta2.text}
              </a>
            </div>

            {/* Stats */}
            <div className="flex items-center gap-5 md:gap-8">
              {[
                { icon: Star, value: "5.0", label: "Google", fill: true },
                { value: "500+", label: "pets" },
                { value: "12", label: "anos" },
              ].map((stat, i) => (
                <div key={i} className="flex items-center gap-1.5">
                  {stat.icon && <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />}
                  <span className="text-lg md:text-xl font-black" style={{ fontFamily: "'Fraunces', Georgia, serif", color: "#1c1917" }}>
                    {stat.value}
                  </span>
                  <span className="text-[10px] text-stone-400 uppercase tracking-wider">{stat.label}</span>
                  {i < 2 && <span className="w-px h-4 bg-stone-200 ml-3 md:ml-5" />}
                </div>
              ))}
            </div>
          </div>

          {/* Right — Visual */}
          <div
            className="relative hidden md:flex justify-center items-center transition-all duration-700 ease-out"
            style={{
              opacity: isAnimating ? 0 : 1,
              transform: isAnimating ? "scale(0.92) rotate(-2deg)" : "scale(1) rotate(0deg)",
            }}
          >
            {/* Main circle */}
            <div
              className="w-[260px] h-[260px] lg:w-[300px] lg:h-[300px] rounded-full flex flex-col items-center justify-center relative"
              style={{ background: s.rightBg }}
            >
              <RightIcon className="w-16 h-16 lg:w-20 lg:h-20 mb-2" style={{ color: s.rightColor }} />
              <span
                className="text-base lg:text-lg font-bold"
                style={{ fontFamily: "'Fraunces', Georgia, serif", color: s.rightColor }}
              >
                {s.rightLabel}
              </span>

              {/* Decorative ring */}
              <div
                className="absolute inset-[-12px] rounded-full animate-spin"
                style={{
                  border: `2px dashed ${s.rightColor}20`,
                  animationDuration: "30s",
                }}
              />
            </div>

            {/* Floating icons */}
            {s.floatingIcons.map((fi, i) => {
              const FIcon = fi.icon;
              return (
                <div
                  key={i}
                  className="absolute rounded-xl flex items-center justify-center shadow-sm animate-float"
                  style={{
                    left: fi.x,
                    top: fi.y,
                    background: fi.bg,
                    width: fi.size + 16,
                    height: fi.size + 16,
                    animationDelay: `${i * 0.8}s`,
                    animationDuration: `${3 + i * 0.5}s`,
                  }}
                >
                  <FIcon style={{ width: fi.size * 0.5, height: fi.size * 0.5, color: fi.color }} />
                </div>
              );
            })}

            {/* Badge */}
            <div
              className="absolute -bottom-2 left-1/2 -translate-x-1/2 rounded-full px-4 py-2 text-[12px] font-bold bg-white shadow-md flex items-center gap-1.5"
              style={{ color: "#1c1917", whiteSpace: "nowrap" }}
            >
              <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
              Nota 5.0 no Google
            </div>
          </div>
        </div>

        {/* Dots + Progress */}
        <div className="flex gap-2 mt-8 md:mt-10">
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
                <span
                  className="absolute inset-0 bg-orange-800/20 animate-progress"
                  style={{ "--duration": "5s" } as React.CSSProperties}
                />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Nav arrows */}
      <button
        onClick={prev}
        className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full hidden md:flex items-center justify-center bg-white/90 backdrop-blur-sm border border-stone-200/60 hover:border-stone-300 hover:shadow-sm transition-all"
      >
        <ChevronLeft className="w-5 h-5 text-stone-400" />
      </button>
      <button
        onClick={next}
        className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full hidden md:flex items-center justify-center bg-white/90 backdrop-blur-sm border border-stone-200/60 hover:border-stone-300 hover:shadow-sm transition-all"
      >
        <ChevronRight className="w-5 h-5 text-stone-400" />
      </button>
    </section>
  );
};

export default HeroCarousel;
