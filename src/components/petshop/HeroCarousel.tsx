import { useState, useEffect, useCallback, useRef } from "react";
import { MessageCircle, ChevronLeft, ChevronRight, Shield, Star, Clock } from "lucide-react";
import heroSlide1 from "@/assets/hero-slide-1.jpg";
import heroSlide2 from "@/assets/hero-slide-2.jpg";
import heroSlide3 from "@/assets/hero-slide-3.jpg";

const WA_LINK = "https://wa.me/5569992216764?text=Oi%2C%20quero%20agendar%20um%20banho%20pro%20meu%20pet";

const slides = [
  { img: heroSlide1, title: "Seu pet merece o melhor!", sub: "Banho, tosa, rações e entrega no bairro" },
  { img: heroSlide2, title: "Qualidade profissional", sub: "Produtos de alta performance e carinho de verdade" },
  { img: heroSlide3, title: "Entrega no mesmo dia", sub: "Rações e petiscos na porta da sua casa" },
];

const badges = [
  { icon: Shield, label: "12 anos" },
  { icon: Star, label: "Nota 5.0" },
  { icon: Clock, label: "< 1 hora" },
];

const HeroCarousel = () => {
  const [cur, setCur] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const tx = useRef(0);
  const te = useRef(0);

  const next = useCallback(() => setCur(c => (c + 1) % slides.length), []);
  const prev = useCallback(() => setCur(c => (c - 1 + slides.length) % slides.length), []);

  useEffect(() => { const t = setInterval(next, 5500); return () => clearInterval(t); }, [next, cur]);

  return (
    <section
      id="inicio"
      className="relative w-full overflow-hidden"
      style={{ marginTop: 56 }}
      onTouchStart={e => { tx.current = e.touches[0].clientX; te.current = tx.current; }}
      onTouchMove={e => { te.current = e.touches[0].clientX; }}
      onTouchEnd={() => { const d = tx.current - te.current; if (Math.abs(d) > 40) d > 0 ? next() : prev(); }}
    >
      <style>{`
        @media (min-width: 768px) { section#inicio { margin-top: 92px; } }
      `}</style>

      {/* Fixed height approach — no aspect-ratio quirks */}
      <div className="relative w-full h-[480px] sm:h-[420px] md:h-[500px] lg:h-[560px]">
        {slides.map((s, i) => (
          <div key={i} className="absolute inset-0 transition-all duration-700" style={{ opacity: i === cur ? 1 : 0, transform: i === cur ? "scale(1)" : "scale(1.05)", zIndex: i === cur ? 1 : 0 }}>
            <img
              src={s.img}
              alt={s.title}
              className="w-full h-full object-cover"
              style={{ objectPosition: "center 25%" }}
              loading={i === 0 ? "eager" : "lazy"}
              onLoad={() => i === 0 && setLoaded(true)}
            />
            <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.15) 30%, rgba(0,0,0,0.55) 70%, rgba(0,0,0,0.8) 100%)" }} />
          </div>
        ))}

        {/* Content */}
        <div className="absolute inset-0 z-10 flex flex-col justify-end px-5 pb-7 sm:pb-10 lg:pb-14 sm:px-8 lg:px-12">
          <div className="max-w-2xl" key={cur}>
            <h1 className="text-white text-[26px] sm:text-3xl lg:text-[44px] font-extrabold leading-[1.15] mb-2 animate-fadeUp" style={{ fontFamily: "'Baloo 2', cursive", textShadow: "0 2px 24px rgba(0,0,0,0.4)" }}>
              {slides[cur].title}
            </h1>
            <p className="text-white/80 text-[13px] sm:text-base mb-4 animate-fadeUp" style={{ animationDelay: "80ms" }}>
              {slides[cur].sub}
            </p>
          </div>

          {/* Badges */}
          <div className="flex gap-2 mb-4">
            {badges.map((b, i) => (
              <span key={i} className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[10px] sm:text-xs font-bold text-white bg-white/15 backdrop-blur-md border border-white/20">
                <b.icon className="w-3 h-3" style={{ color: "#FFB300" }} />
                {b.label}
              </span>
            ))}
          </div>

          {/* CTA */}
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="self-start rounded-2xl px-7 py-3.5 text-[13px] sm:text-sm font-extrabold text-white transition-all duration-200 active:scale-95 hover:-translate-y-0.5 inline-flex items-center gap-2.5"
            style={{ background: "#F5851F", boxShadow: "0 8px 28px rgba(245,133,31,0.5)" }}
          >
            <MessageCircle className="w-[18px] h-[18px]" />
            Agende pelo WhatsApp
          </a>

          {/* Dots */}
          <div className="flex gap-2 mt-5">
            {slides.map((_, i) => (
              <button key={i} onClick={() => setCur(i)} className="h-[5px] rounded-full transition-all duration-500 relative overflow-hidden" style={{ width: i === cur ? 32 : 8, background: i === cur ? "#F5851F" : "rgba(255,255,255,0.35)" }}>
                {i === cur && <span className="absolute inset-0 rounded-full bg-white/30" style={{ animation: "progressBar 5.5s linear" }} />}
              </button>
            ))}
          </div>
        </div>

        {/* Desktop arrows */}
        <button onClick={prev} className="absolute left-5 top-1/2 -translate-y-1/2 z-20 hidden md:flex w-11 h-11 rounded-full items-center justify-center text-white/80 hover:text-white bg-black/20 hover:bg-black/40 backdrop-blur-sm transition-all"><ChevronLeft className="w-5 h-5" /></button>
        <button onClick={next} className="absolute right-5 top-1/2 -translate-y-1/2 z-20 hidden md:flex w-11 h-11 rounded-full items-center justify-center text-white/80 hover:text-white bg-black/20 hover:bg-black/40 backdrop-blur-sm transition-all"><ChevronRight className="w-5 h-5" /></button>
      </div>
    </section>
  );
};

export default HeroCarousel;
