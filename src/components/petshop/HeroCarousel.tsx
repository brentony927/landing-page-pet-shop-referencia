import { useState, useEffect, useCallback, useRef } from "react";
import { MessageCircle, ChevronLeft, ChevronRight, Shield, Star, Clock, Truck, Sparkles, Users } from "lucide-react";
import heroSlide1 from "@/assets/hero-slide-1.jpg";
import heroSlide2 from "@/assets/hero-slide-2.jpg";
import heroSlide3 from "@/assets/hero-slide-3.jpg";
import heroSlide4 from "@/assets/hero-slide-4.jpg";
import heroSlide5 from "@/assets/hero-slide-5.jpg";
import heroSlide6 from "@/assets/hero-slide-6.jpg";

const WA_LINK = "https://wa.me/5569992216764?text=Oi%2C%20quero%20agendar%20um%20banho%20pro%20meu%20pet";

const slides = [
  {
    img: heroSlide1,
    title: "Seu pet merece o melhor cuidado!",
    sub: "Banho, tosa e carinho profissional há 12 anos",
    cta: "Agendar Banho",
    accent: "#F5851F",
    badge: "Mais de 5.000 pets atendidos",
  },
  {
    img: heroSlide4,
    title: "Banho & Tosa Profissional",
    sub: "Equipe treinada, produtos de qualidade e muito amor",
    cta: "Agendar Agora",
    accent: "#22A66E",
    badge: "Nota 5.0 no Google",
  },
  {
    img: heroSlide2,
    title: "Qualidade que seu pet merece",
    sub: "Produtos de alta performance e cuidado de verdade",
    cta: "Ver Produtos",
    accent: "#F5851F",
    badge: "Marcas premium",
  },
  {
    img: heroSlide5,
    title: "As melhores marcas estão aqui",
    sub: "Rações, petiscos e acessórios das marcas líderes",
    cta: "Ver Catálogo",
    accent: "#FFB300",
    badge: "Preço justo sempre",
  },
  {
    img: heroSlide3,
    title: "Entrega rápida no seu bairro",
    sub: "Rações e petiscos na porta da sua casa no mesmo dia",
    cta: "Pedir Agora",
    accent: "#22A66E",
    badge: "Entrega em < 1h",
  },
  {
    img: heroSlide6,
    title: "Delivery de ração expressa",
    sub: "Peça pelo WhatsApp e receba em menos de 1 hora",
    cta: "Pedir pelo WhatsApp",
    accent: "#F5851F",
    badge: "Frete grátis",
  },
];

const trustBadges = [
  { icon: Shield, label: "12 anos" },
  { icon: Star, label: "5.0 Google" },
  { icon: Users, label: "5.000+ pets" },
  { icon: Truck, label: "Frete grátis" },
];

const HeroCarousel = () => {
  const [cur, setCur] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [direction, setDirection] = useState<"left" | "right">("right");
  const tx = useRef(0);
  const te = useRef(0);
  const timerRef = useRef<ReturnType<typeof setInterval>>();

  const goTo = useCallback((idx: number, dir?: "left" | "right") => {
    if (isTransitioning) return;
    setDirection(dir || (idx > cur ? "right" : "left"));
    setIsTransitioning(true);
    setCur(idx);
    setTimeout(() => setIsTransitioning(false), 600);
  }, [isTransitioning, cur]);

  const next = useCallback(() => goTo((cur + 1) % slides.length, "right"), [cur, goTo]);
  const prev = useCallback(() => goTo((cur - 1 + slides.length) % slides.length, "left"), [cur, goTo]);

  useEffect(() => {
    timerRef.current = setInterval(next, 5500);
    return () => clearInterval(timerRef.current);
  }, [next]);

  const pause = () => clearInterval(timerRef.current);
  const resume = () => { timerRef.current = setInterval(next, 5500); };

  return (
    <section
      id="inicio"
      className="relative w-full overflow-hidden"
      style={{ marginTop: 52 }}
      onMouseEnter={pause}
      onMouseLeave={resume}
      onTouchStart={e => { tx.current = e.touches[0].clientX; te.current = tx.current; pause(); }}
      onTouchMove={e => { te.current = e.touches[0].clientX; }}
      onTouchEnd={() => { const d = tx.current - te.current; if (Math.abs(d) > 40) d > 0 ? next() : prev(); resume(); }}
    >
      <style>{`
        @media (min-width: 768px) { section#inicio { margin-top: 92px !important; } }
        @keyframes heroTextIn {
          from { opacity: 0; transform: translateY(18px); filter: blur(4px); }
          to { opacity: 1; transform: translateY(0); filter: blur(0); }
        }
        @keyframes heroBadgeIn {
          from { opacity: 0; transform: scale(0.85); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes progressFill { from { transform: scaleX(0); } to { transform: scaleX(1); } }
        @keyframes kenBurns {
          0% { transform: scale(1); }
          100% { transform: scale(1.06); }
        }
        .hero-text-in { animation: heroTextIn 0.55s cubic-bezier(0.16,1,0.3,1) forwards; }
        .hero-badge-in { animation: heroBadgeIn 0.4s cubic-bezier(0.34,1.56,0.64,1) forwards; }
        .hero-d1 { animation-delay: 0.05s; opacity: 0; }
        .hero-d2 { animation-delay: 0.15s; opacity: 0; }
        .hero-d3 { animation-delay: 0.25s; opacity: 0; }
        .hero-d4 { animation-delay: 0.4s; opacity: 0; }
        .ken-burns { animation: kenBurns 6s ease-out forwards; }
      `}</style>

      {/* Carousel — responsive like Petz */}
      <div className="relative w-full h-[85vw] min-h-[360px] max-h-[520px] sm:h-[55vw] sm:max-h-[600px] md:h-[42vw] md:max-h-[560px] lg:max-h-[620px]">
        
        {slides.map((s, i) => (
          <div
            key={i}
            className="absolute inset-0"
            style={{
              opacity: i === cur ? 1 : 0,
              transition: "opacity 0.6s ease-in-out",
              zIndex: i === cur ? 1 : 0,
            }}
          >
            <img
              src={s.img}
              alt={s.title}
              className={`w-full h-full object-cover ${i === cur ? "ken-burns" : ""}`}
              style={{ objectPosition: "center 40%" }}
              loading={i === 0 ? "eager" : "lazy"}
              width={1920}
              height={800}
            />
            <div className="absolute inset-0" style={{
              background: `linear-gradient(180deg, rgba(13,27,42,0.15) 0%, rgba(13,27,42,0.4) 40%, rgba(13,27,42,0.85) 75%, rgba(13,27,42,0.95) 100%)`
            }} />
          </div>
        ))}

        {/* Content */}
        <div className="absolute inset-0 z-10 flex flex-col justify-center px-5 pt-8 sm:justify-end sm:pb-10 md:pb-14 lg:pb-16 sm:px-8 md:px-12 lg:px-16">
          <div className="max-w-3xl" key={cur}>
            {/* Slide badge — gatilho de prova social */}
            <div className="hero-text-in hero-d1 mb-2 sm:mb-3 inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-full text-[9px] sm:text-xs font-bold text-white/95 border border-white/15" style={{ background: "rgba(255,255,255,0.08)", backdropFilter: "blur(12px)" }}>
              <Sparkles className="w-2.5 h-2.5 sm:w-3 sm:h-3" style={{ color: slides[cur].accent }} />
              {slides[cur].badge}
            </div>

            <h1
              className="hero-text-in hero-d2 text-white text-[24px] sm:text-3xl md:text-4xl lg:text-[48px] font-extrabold leading-[1.1] mb-2 sm:mb-3"
              style={{ fontFamily: "'Baloo 2', cursive", textShadow: "0 2px 30px rgba(0,0,0,0.5)" }}
            >
              {slides[cur].title}
            </h1>

            <p className="hero-text-in hero-d3 text-white/85 text-[13px] sm:text-base md:text-lg mb-4 sm:mb-5 max-w-lg leading-relaxed">
              {slides[cur].sub}
            </p>

            {/* CTA com gatilho de urgência */}
            <div className="hero-text-in hero-d4 flex flex-wrap items-center gap-3">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl px-6 py-3 sm:px-8 sm:py-3.5 text-[13px] sm:text-sm font-extrabold text-white transition-all duration-200 active:scale-95 hover:-translate-y-0.5 inline-flex items-center gap-2"
                style={{
                  background: slides[cur].accent,
                  boxShadow: `0 8px 28px ${slides[cur].accent}55`,
                }}
              >
                <MessageCircle className="w-[18px] h-[18px]" />
                {slides[cur].cta}
              </a>
              <span className="flex items-center gap-1.5 text-[10px] sm:text-xs font-semibold text-white/50">
                <Clock className="w-3 h-3" />
                Vagas limitadas hoje
              </span>
            </div>
          </div>

          {/* Trust badges + dots */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mt-3 sm:mt-6 gap-3 sm:gap-4">
            <div className="hidden sm:flex flex-wrap gap-1.5 sm:gap-2">
              {trustBadges.map((b, i) => (
                <span
                  key={i}
                  className="hero-badge-in flex items-center gap-1 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full text-[9px] sm:text-[11px] font-bold text-white/90 border border-white/10 transition-all hover:bg-white/15"
                  style={{ background: "rgba(255,255,255,0.06)", backdropFilter: "blur(8px)", animationDelay: `${0.5 + i * 0.08}s`, opacity: 0 }}
                >
                  <b.icon className="w-3 h-3 flex-shrink-0" style={{ color: "#FFB300" }} />
                  <span className="whitespace-nowrap">{b.label}</span>
                </span>
              ))}
            </div>

            <div className="flex items-center gap-1.5">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  className="relative h-[4px] rounded-full overflow-hidden transition-all duration-500"
                  style={{ width: i === cur ? 36 : 12, background: i === cur ? "transparent" : "rgba(255,255,255,0.25)" }}
                  aria-label={`Slide ${i + 1}`}
                >
                  {i === cur && (
                    <>
                      <span className="absolute inset-0 rounded-full" style={{ background: "rgba(255,255,255,0.2)" }} />
                      <span className="absolute inset-0 rounded-full origin-left" style={{ background: slides[cur].accent, animation: "progressFill 5.5s linear forwards" }} />
                    </>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Arrows — desktop */}
        <button onClick={prev} className="absolute left-4 top-1/2 -translate-y-1/2 z-20 hidden md:flex w-11 h-11 rounded-full items-center justify-center text-white/60 hover:text-white bg-white/5 hover:bg-white/15 backdrop-blur-md border border-white/10 transition-all duration-200 hover:scale-110" aria-label="Anterior">
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button onClick={next} className="absolute right-4 top-1/2 -translate-y-1/2 z-20 hidden md:flex w-11 h-11 rounded-full items-center justify-center text-white/60 hover:text-white bg-white/5 hover:bg-white/15 backdrop-blur-md border border-white/10 transition-all duration-200 hover:scale-110" aria-label="Próximo">
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* Thumbnails — desktop */}
        <div className="absolute bottom-4 right-4 z-20 hidden lg:flex gap-2">
          {slides.map((s, i) => (
            <button key={i} onClick={() => goTo(i)} className="relative w-16 h-10 rounded-lg overflow-hidden border-2 transition-all duration-300 hover:scale-105" style={{ borderColor: i === cur ? slides[cur].accent : "rgba(255,255,255,0.15)", opacity: i === cur ? 1 : 0.5 }}>
              <img src={s.img} alt="" className="w-full h-full object-cover" loading="lazy" />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroCarousel;
