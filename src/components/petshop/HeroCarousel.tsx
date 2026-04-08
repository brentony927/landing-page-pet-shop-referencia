import { useState, useEffect, useCallback, useRef } from "react";
import { MessageCircle, ChevronLeft, ChevronRight, Shield, Star, Clock, Truck, Sparkles } from "lucide-react";
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
  },
  {
    img: heroSlide4,
    title: "Banho & Tosa Profissional",
    sub: "Equipe treinada, produtos de qualidade e muito amor",
    cta: "Agendar Agora",
    accent: "#22A66E",
  },
  {
    img: heroSlide2,
    title: "Qualidade que seu pet merece",
    sub: "Produtos de alta performance e cuidado de verdade",
    cta: "Ver Produtos",
    accent: "#F5851F",
  },
  {
    img: heroSlide5,
    title: "As melhores marcas estão aqui",
    sub: "Rações, petiscos e acessórios das marcas líderes",
    cta: "Ver Catálogo",
    accent: "#FFB300",
  },
  {
    img: heroSlide3,
    title: "Entrega rápida no seu bairro",
    sub: "Rações e petiscos na porta da sua casa no mesmo dia",
    cta: "Pedir Agora",
    accent: "#22A66E",
  },
  {
    img: heroSlide6,
    title: "Delivery de ração expressa",
    sub: "Peça pelo WhatsApp e receba em menos de 1 hora",
    cta: "Pedir pelo WhatsApp",
    accent: "#F5851F",
  },
];

const badges = [
  { icon: Shield, label: "12 anos de experiência" },
  { icon: Star, label: "Nota 5.0 no Google" },
  { icon: Clock, label: "Entrega < 1 hora" },
  { icon: Truck, label: "Frete grátis" },
];

const HeroCarousel = () => {
  const [cur, setCur] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const tx = useRef(0);
  const te = useRef(0);
  const timerRef = useRef<ReturnType<typeof setInterval>>();

  const goTo = useCallback((idx: number) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCur(idx);
    setTimeout(() => setIsTransitioning(false), 700);
  }, [isTransitioning]);

  const next = useCallback(() => goTo((cur + 1) % slides.length), [cur, goTo]);
  const prev = useCallback(() => goTo((cur - 1 + slides.length) % slides.length), [cur, goTo]);

  // Auto-play
  useEffect(() => {
    timerRef.current = setInterval(next, 5000);
    return () => clearInterval(timerRef.current);
  }, [next]);

  // Pause on hover (desktop)
  const pause = () => clearInterval(timerRef.current);
  const resume = () => { timerRef.current = setInterval(next, 5000); };

  return (
    <section
      id="inicio"
      className="relative w-full overflow-hidden"
      style={{ marginTop: 56 }}
      onMouseEnter={pause}
      onMouseLeave={resume}
      onTouchStart={e => { tx.current = e.touches[0].clientX; te.current = tx.current; pause(); }}
      onTouchMove={e => { te.current = e.touches[0].clientX; }}
      onTouchEnd={() => { const d = tx.current - te.current; if (Math.abs(d) > 40) d > 0 ? next() : prev(); resume(); }}
    >
      <style>{`
        @media (min-width: 768px) { section#inicio { margin-top: 92px !important; } }
        @keyframes heroFadeUp { from { opacity: 0; transform: translateY(24px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes heroFadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes progressFill { from { transform: scaleX(0); } to { transform: scaleX(1); } }
        .hero-fade-up { animation: heroFadeUp 0.6s cubic-bezier(0.16,1,0.3,1) forwards; }
        .hero-fade-in { animation: heroFadeIn 0.5s ease forwards; }
        .hero-delay-1 { animation-delay: 0.1s; opacity: 0; }
        .hero-delay-2 { animation-delay: 0.2s; opacity: 0; }
        .hero-delay-3 { animation-delay: 0.35s; opacity: 0; }
        .hero-delay-4 { animation-delay: 0.5s; opacity: 0; }
      `}</style>

      {/* Carousel container — responsive heights like Petz/Cobasi */}
      <div className="relative w-full h-[55vw] min-h-[280px] max-h-[600px] md:h-[42vw] md:max-h-[560px] lg:max-h-[620px]">
        
        {/* Slides */}
        {slides.map((s, i) => (
          <div
            key={i}
            className="absolute inset-0 transition-all duration-700 ease-in-out"
            style={{
              opacity: i === cur ? 1 : 0,
              transform: i === cur ? "scale(1)" : "scale(1.08)",
              zIndex: i === cur ? 1 : 0,
            }}
          >
            <img
              src={s.img}
              alt={s.title}
              className="w-full h-full object-cover"
              style={{ objectPosition: "center 30%" }}
              loading={i === 0 ? "eager" : "lazy"}
              width={1920}
              height={800}
            />
            {/* Overlay — stronger gradient for text readability */}
            <div className="absolute inset-0" style={{
              background: `linear-gradient(135deg, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.3) 40%, rgba(0,0,0,0.1) 60%, transparent 100%),
                           linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.2) 50%, transparent 100%)`
            }} />
          </div>
        ))}

        {/* Content overlay */}
        <div className="absolute inset-0 z-10 flex flex-col justify-end px-5 pb-6 sm:pb-10 md:pb-12 lg:pb-16 sm:px-8 md:px-12 lg:px-16">
          <div className="max-w-3xl" key={cur}>
            {/* Slide counter */}
            <div className="hero-fade-up hero-delay-1 mb-3 inline-flex items-center gap-2 px-3 py-1 rounded-full text-[10px] sm:text-xs font-bold text-white/90 bg-white/10 backdrop-blur-md border border-white/15">
              <Sparkles className="w-3 h-3" style={{ color: slides[cur].accent }} />
              {String(cur + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
            </div>

            {/* Title */}
            <h1
              className="hero-fade-up hero-delay-2 text-white text-[22px] sm:text-3xl md:text-4xl lg:text-[48px] font-extrabold leading-[1.1] mb-2 sm:mb-3"
              style={{
                fontFamily: "'Baloo 2', cursive",
                textShadow: "0 2px 32px rgba(0,0,0,0.5)",
              }}
            >
              {slides[cur].title}
            </h1>

            {/* Subtitle */}
            <p className="hero-fade-up hero-delay-3 text-white/85 text-[13px] sm:text-base md:text-lg mb-5 max-w-lg leading-relaxed">
              {slides[cur].sub}
            </p>

            {/* CTA Button */}
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="hero-fade-up hero-delay-4 self-start rounded-xl px-6 py-3 sm:px-8 sm:py-3.5 text-[13px] sm:text-sm font-extrabold text-white transition-all duration-200 active:scale-95 hover:-translate-y-0.5 hover:shadow-2xl inline-flex items-center gap-2.5"
              style={{
                background: slides[cur].accent,
                boxShadow: `0 8px 32px ${slides[cur].accent}66`,
              }}
            >
              <MessageCircle className="w-[18px] h-[18px]" />
              {slides[cur].cta}
            </a>
          </div>

          {/* Bottom bar: badges + dots */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mt-6 gap-4">
            {/* Trust badges */}
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              {badges.map((b, i) => (
                <span
                  key={i}
                  className="flex items-center gap-1 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full text-[9px] sm:text-[11px] font-bold text-white/90 bg-white/10 backdrop-blur-md border border-white/15 transition-all hover:bg-white/20"
                >
                  <b.icon className="w-3 h-3 flex-shrink-0" style={{ color: "#FFB300" }} />
                  <span className="whitespace-nowrap">{b.label}</span>
                </span>
              ))}
            </div>

            {/* Slide indicators */}
            <div className="flex items-center gap-1.5">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  className="relative h-[4px] rounded-full overflow-hidden transition-all duration-500"
                  style={{
                    width: i === cur ? 36 : 12,
                    background: i === cur ? "transparent" : "rgba(255,255,255,0.3)",
                  }}
                  aria-label={`Slide ${i + 1}`}
                >
                  {i === cur && (
                    <>
                      <span className="absolute inset-0 rounded-full" style={{ background: "rgba(255,255,255,0.25)" }} />
                      <span
                        className="absolute inset-0 rounded-full origin-left"
                        style={{
                          background: slides[cur].accent,
                          animation: "progressFill 5s linear forwards",
                        }}
                      />
                    </>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Navigation arrows — desktop */}
        <button
          onClick={prev}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 hidden md:flex w-12 h-12 rounded-full items-center justify-center text-white/70 hover:text-white bg-black/20 hover:bg-black/40 backdrop-blur-md border border-white/10 transition-all duration-200 hover:scale-110"
          aria-label="Anterior"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={next}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 hidden md:flex w-12 h-12 rounded-full items-center justify-center text-white/70 hover:text-white bg-black/20 hover:bg-black/40 backdrop-blur-md border border-white/10 transition-all duration-200 hover:scale-110"
          aria-label="Próximo"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* Thumbnail strip — desktop only, like Petz */}
        <div className="absolute bottom-4 right-4 z-20 hidden lg:flex gap-2">
          {slides.map((s, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className="relative w-16 h-10 rounded-lg overflow-hidden border-2 transition-all duration-300 hover:scale-105"
              style={{
                borderColor: i === cur ? slides[cur].accent : "rgba(255,255,255,0.2)",
                opacity: i === cur ? 1 : 0.6,
              }}
            >
              <img src={s.img} alt="" className="w-full h-full object-cover" loading="lazy" />
              {i === cur && (
                <div className="absolute inset-0 rounded-lg" style={{ boxShadow: `inset 0 0 0 2px ${slides[cur].accent}` }} />
              )}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroCarousel;
