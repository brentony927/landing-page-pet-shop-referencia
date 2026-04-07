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
    setTimeout(() => setIsAnimating(false), 600);
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
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 md:px-10 py-12 md:py-20 min-h-[500px] md:min-h-[540px]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-center">
          {/* Left — Text */}
          <div
            className="transition-all duration-600 ease-out"
            style={{
              opacity: isAnimating ? 0 : 1,
              transform: isAnimating
                ? slideDirection === "right" ? "translateX(30px)" : "translateX(-30px)"
                : "translateX(0)",
              transition: "all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
            }}
          >
            <h1
              className="text-3xl sm:text-4xl md:text-[3.4rem] font-black leading-[1.04] mb-5"
              style={{ fontFamily: "'Fraunces', Georgia, serif", color: "#1c1917", whiteSpace: "pre-line" }}
            >
              {s.h1}
            </h1>
            <p className="text-base md:text-lg mb-8 max-w-md leading-relaxed" style={{ color: "#78716c" }}>
              {s.sub}
            </p>
            <div className="flex flex-wrap gap-3 mb-10">
              <a
                href={s.cta1.href}
                className="rounded-xl px-8 py-4 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-0.5"
                style={{ background: "#f97316", boxShadow: "0 4px 14px rgba(249,115,22,0.3)" }}
                onMouseEnter={(e) => { e.currentTarget.style.background = "#c2410c"; e.currentTarget.style.boxShadow = "0 6px 20px rgba(249,115,22,0.4)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = "#f97316"; e.currentTarget.style.boxShadow = "0 4px 14px rgba(249,115,22,0.3)"; }}
              >
                {s.cta1.text}
              </a>
              <a
                href={s.cta2.href}
                className="rounded-xl px-8 py-4 text-sm font-semibold transition-all duration-200 hover:bg-stone-50"
                style={{ border: "1.5px solid #d6d3d1", color: "#57534e" }}
              >
                {s.cta2.text}
              </a>
            </div>

            {/* Stats */}
            <div className="flex items-center gap-6 md:gap-10">
              {[
                { icon: Star, value: "5.0", label: "Google", fill: true },
                { value: "500+", label: "pets" },
                { value: "12", label: "anos" },
              ].map((stat, i) => (
                <div key={i} className="flex items-center gap-2">
                  {stat.icon && <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />}
                  <span className="text-xl md:text-2xl font-black" style={{ fontFamily: "'Fraunces', Georgia, serif", color: "#1c1917" }}>
                    {stat.value}
                  </span>
                  <span className="text-[11px] text-stone-400 uppercase tracking-wider font-medium">{stat.label}</span>
                  {i < 2 && <span className="w-px h-5 bg-stone-200 ml-4 md:ml-6" />}
                </div>
              ))}
            </div>
          </div>

          {/* Right — Visual */}
          <div
            className="relative hidden md:flex justify-center items-center"
            style={{
              opacity: isAnimating ? 0 : 1,
              transform: isAnimating ? "scale(0.9)" : "scale(1)",
              transition: "all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
            }}
          >
            {/* Main circle */}
            <div
              className="w-[280px] h-[280px] lg:w-[320px] lg:h-[320px] rounded-full flex flex-col items-center justify-center relative"
              style={{ background: s.rightBg }}
            >
              <RightIcon className="w-16 h-16 lg:w-20 lg:h-20 mb-3" style={{ color: s.rightColor }} />
              <span
                className="text-lg lg:text-xl font-bold"
                style={{ fontFamily: "'Fraunces', Georgia, serif", color: s.rightColor }}
              >
                {s.rightLabel}
              </span>

              {/* Decorative ring */}
              <div
                className="absolute inset-[-14px] rounded-full"
                style={{
                  border: `2px dashed ${s.rightColor}15`,
                  animation: "spin 40s linear infinite",
                }}
              />
            </div>

            {/* Floating icons */}
            {s.floatingIcons.map((fi, i) => {
              const FIcon = fi.icon;
              return (
                <div
                  key={i}
                  className="absolute rounded-xl flex items-center justify-center shadow-sm"
                  style={{
                    left: fi.x,
                    top: fi.y,
                    background: fi.bg,
                    width: fi.size + 16,
                    height: fi.size + 16,
                    animation: `float ${3 + i * 0.5}s ease-in-out infinite`,
                    animationDelay: `${i * 0.6}s`,
                  }}
                >
                  <FIcon style={{ width: fi.size * 0.5, height: fi.size * 0.5, color: fi.color }} />
                </div>
              );
            })}

            {/* Badge */}
            <div
              className="absolute -bottom-3 left-1/2 -translate-x-1/2 rounded-full px-5 py-2.5 text-xs font-bold bg-white flex items-center gap-2"
              style={{ color: "#1c1917", whiteSpace: "nowrap", boxShadow: "0 4px 16px rgba(0,0,0,0.08)" }}
            >
              <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
              Nota 5.0 no Google
            </div>
          </div>
        </div>

        {/* Dots + Progress */}
        <div className="flex gap-2 mt-10 md:mt-12">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i, i > current ? "right" : "left")}
              className="h-1.5 rounded-full transition-all duration-500 relative overflow-hidden"
              style={{
                width: i === current ? 40 : 8,
                background: i === current ? "#f97316" : "#e7e5e4",
              }}
            >
              {i === current && (
                <span
                  className="absolute inset-0 rounded-full"
                  style={{
                    background: "rgba(194,65,12,0.25)",
                    animation: "progress 5s linear",
                  }}
                />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Nav arrows */}
      <button
        onClick={prev}
        className="absolute left-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full hidden md:flex items-center justify-center bg-white/95 backdrop-blur-sm border border-stone-200/50 hover:shadow-md transition-all duration-200"
        aria-label="Anterior"
      >
        <ChevronLeft className="w-5 h-5 text-stone-500" />
      </button>
      <button
        onClick={next}
        className="absolute right-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full hidden md:flex items-center justify-center bg-white/95 backdrop-blur-sm border border-stone-200/50 hover:shadow-md transition-all duration-200"
        aria-label="Próximo"
      >
        <ChevronRight className="w-5 h-5 text-stone-500" />
      </button>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        @keyframes progress {
          from { width: 0; }
          to { width: 100%; }
        }
      `}</style>
    </section>
  );
};

export default HeroCarousel;
