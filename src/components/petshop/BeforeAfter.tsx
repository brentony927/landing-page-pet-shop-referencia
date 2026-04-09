import { useState, useRef } from "react";
import { useInView } from "@/hooks/useInView";
import { Sparkles, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import ba1 from "@/assets/before-after-1.jpg";
import ba2 from "@/assets/before-after-2.jpg";
import ba3 from "@/assets/before-after-3.jpg";

const WA = "https://wa.me/5569992216764?text=Oi%2C%20quero%20agendar%20um%20banho%20pro%20meu%20pet";

const transformations = [
  { img: ba1, name: "Thor", breed: "Cocker Spaniel", service: "Banho + Tosa completa" },
  { img: ba2, name: "Luna", breed: "Maltês", service: "Banho + Hidratação" },
  { img: ba3, name: "Bob", breed: "Golden Retriever", service: "Banho + Tosa" },
];

const BeforeAfter = () => {
  const { ref, visible } = useInView(0.08);
  const [activeIdx, setActiveIdx] = useState(0);
  const [sliderPos, setSliderPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
    const rect = (e.currentTarget as HTMLDivElement).getBoundingClientRect();
    const clientX = "touches" in e ? e.touches[0].clientX : (e as React.MouseEvent).clientX;
    const x = Math.max(8, Math.min(92, ((clientX - rect.left) / rect.width) * 100));
    setSliderPos(x);
  };

  const goTo = (idx: number) => {
    setActiveIdx(idx);
    setSliderPos(50);
  };

  const t = transformations[activeIdx];

  return (
    <section className="py-12 sm:py-20 lg:py-28 px-4" style={{ background: "var(--pet-bg-alt)" }} ref={ref}>
      <div className={`max-w-[800px] mx-auto scroll-fade-up ${visible ? "visible" : ""}`}>
        <div className="text-center mb-8 sm:mb-12">
          <span className="inline-block text-[10px] font-extrabold uppercase tracking-[0.18em] mb-2.5 px-4 py-1.5 rounded-full" style={{ background: "var(--pet-orange-light)", color: "var(--pet-action)" }}>
            Transformações
          </span>
          <h2 className="text-[24px] sm:text-3xl lg:text-[40px] font-extrabold" style={{ fontFamily: "'Baloo 2', cursive", color: "var(--pet-navy)" }}>
            Antes e depois
          </h2>
          <p className="text-sm text-gray-400 mt-2">Arraste para ver a transformação</p>
        </div>

        {/* Main slider */}
        <div className="rounded-[22px] overflow-hidden relative" style={{ border: "2px solid #f0f0f0", boxShadow: "0 8px 32px rgba(0,0,0,0.08)" }}>
          <div
            ref={containerRef}
            className="relative aspect-[4/3] sm:aspect-[16/10] cursor-col-resize select-none"
            onMouseMove={(e) => e.buttons === 1 && handleMove(e)}
            onTouchMove={(e) => handleMove(e)}
          >
            {/* After (full) */}
            <img src={t.img} alt={`${t.name} depois`} className="absolute inset-0 w-full h-full object-cover" loading="lazy" width={1024} height={1024} />

            {/* Before (clipped left) */}
            <div className="absolute inset-0 overflow-hidden" style={{ width: `${sliderPos}%` }}>
              <img
                src={t.img}
                alt={`${t.name} antes`}
                className="absolute inset-0 h-full object-cover brightness-[0.6] contrast-[1.1] saturate-[0.3] sepia-[0.15]"
                style={{ width: `${containerRef.current?.offsetWidth || 800}px`, maxWidth: "none" }}
                loading="lazy"
              />
            </div>

            {/* Divider */}
            <div className="absolute top-0 bottom-0 z-10" style={{ left: `${sliderPos}%`, transform: "translateX(-50%)" }}>
              <div className="w-[2px] h-full bg-white/90" style={{ boxShadow: "0 0 8px rgba(0,0,0,0.3)" }} />
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-white flex items-center justify-center" style={{ boxShadow: "0 2px 16px rgba(0,0,0,0.3)" }}>
                <div className="flex items-center gap-0.5">
                  <ChevronLeft className="w-3.5 h-3.5" style={{ color: "var(--pet-action)" }} />
                  <ChevronRight className="w-3.5 h-3.5" style={{ color: "var(--pet-action)" }} />
                </div>
              </div>
            </div>

            {/* Labels */}
            <span className="absolute top-4 left-4 text-[10px] sm:text-xs font-extrabold uppercase px-3 py-1 rounded-full text-white backdrop-blur-md z-20" style={{ background: "rgba(0,0,0,0.5)" }}>Antes</span>
            <span className="absolute top-4 right-4 text-[10px] sm:text-xs font-extrabold uppercase px-3 py-1 rounded-full text-white backdrop-blur-md z-20" style={{ background: "var(--pet-green-cta)" }}>Depois</span>
          </div>

          {/* Info bar */}
          <div className="flex items-center justify-between px-5 py-3.5 bg-white">
            <div>
              <p className="text-sm font-extrabold" style={{ color: "var(--pet-navy)" }}>
                {t.name} <span className="font-normal text-gray-400">· {t.breed}</span>
              </p>
              <p className="text-xs font-bold" style={{ color: "var(--pet-action)" }}>{t.service}</p>
            </div>
            <div className="flex items-center gap-1.5">
              {transformations.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  className="w-2.5 h-2.5 rounded-full transition-all duration-300"
                  style={{
                    background: i === activeIdx ? "var(--pet-action)" : "#e0e0e0",
                    transform: i === activeIdx ? "scale(1.3)" : "scale(1)",
                  }}
                  aria-label={`Pet ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Thumbnails */}
        <div className="flex justify-center gap-3 mt-5">
          {transformations.map((tr, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl overflow-hidden transition-all duration-300 hover:scale-105"
              style={{
                border: i === activeIdx ? "2.5px solid var(--pet-action)" : "2px solid #e8e8e8",
                opacity: i === activeIdx ? 1 : 0.5,
                boxShadow: i === activeIdx ? "0 4px 16px var(--pet-action-glow)" : "none",
              }}
            >
              <img src={tr.img} alt={tr.name} className="w-full h-full object-cover" loading="lazy" />
            </button>
          ))}
        </div>

        <div className="mt-8 sm:mt-10 text-center">
          <a href={WA} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-2xl px-6 py-3 text-sm font-extrabold text-white transition-all hover:-translate-y-0.5 active:scale-95" style={{ background: "var(--pet-action)", boxShadow: "0 6px 20px var(--pet-action-glow)" }}>
            <Sparkles className="w-4 h-4" /> Quero meu pet assim
          </a>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfter;
