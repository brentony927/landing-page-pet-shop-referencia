import { useState } from "react";
import { useInView } from "@/hooks/useInView";
import { Sparkles, ArrowRight } from "lucide-react";
import ba1 from "@/assets/before-after-1.jpg";
import ba2 from "@/assets/before-after-2.jpg";
import ba3 from "@/assets/before-after-3.jpg";

const WA = "https://wa.me/5569992216764?text=Oi%2C%20quero%20agendar%20um%20banho%20pro%20meu%20pet";

const transformations = [
  { img: ba1, name: "Thor", breed: "Golden Retriever", service: "Banho + Tosa" },
  { img: ba2, name: "Luna", breed: "Poodle", service: "Banho + Hidratação" },
  { img: ba3, name: "Mel", breed: "Yorkshire", service: "Tosa Completa" },
];

const BeforeAfter = () => {
  const { ref, visible } = useInView(0.08);
  const [sliderPos, setSliderPos] = useState<number[]>([50, 50, 50]);

  const handleMove = (idx: number, e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
    const rect = (e.currentTarget as HTMLDivElement).getBoundingClientRect();
    const clientX = "touches" in e ? e.touches[0].clientX : (e as React.MouseEvent).clientX;
    const x = Math.max(5, Math.min(95, ((clientX - rect.left) / rect.width) * 100));
    setSliderPos(prev => prev.map((v, i) => i === idx ? x : v));
  };

  return (
    <section className="py-10 sm:py-18 lg:py-24 px-4 bg-white" ref={ref}>
      <div className={`max-w-[1100px] mx-auto scroll-fade-up ${visible ? "visible" : ""}`}>
        <div className="text-center mb-10">
          <span className="inline-block text-[10px] font-extrabold uppercase tracking-[0.18em] mb-2.5 px-4 py-1.5 rounded-full" style={{ background: "var(--pet-orange-light)", color: "var(--pet-action)" }}>
            Transformações
          </span>
          <h2 className="text-[24px] sm:text-3xl lg:text-[40px] font-extrabold" style={{ fontFamily: "'Baloo 2', cursive", color: "var(--pet-navy)" }}>
            Antes e depois reais
          </h2>
          <p className="text-sm text-gray-400 mt-2">Arraste para ver a transformação</p>
        </div>

        <div className={`grid grid-cols-1 sm:grid-cols-3 gap-4 stagger-children ${visible ? "visible" : ""}`}>
          {transformations.map((t, i) => (
            <div key={i} className="group">
              <div
                className="relative rounded-2xl overflow-hidden aspect-[4/3] cursor-col-resize select-none"
                style={{ border: "2px solid #f0f0f0" }}
                onMouseMove={(e) => e.buttons === 1 && handleMove(i, e)}
                onTouchMove={(e) => handleMove(i, e)}
              >
                {/* Full image (after) */}
                <img src={t.img} alt={`${t.name} depois`} className="absolute inset-0 w-full h-full object-cover" loading="lazy" width={1024} height={640} />

                {/* Before overlay clipped */}
                <div className="absolute inset-0 overflow-hidden" style={{ width: `${sliderPos[i]}%` }}>
                  <img src={t.img} alt={`${t.name} antes`} className="absolute inset-0 w-full h-full object-cover brightness-75 contrast-90 saturate-50" style={{ minWidth: `${100 / (sliderPos[i] / 100)}%`, maxWidth: `${100 / (sliderPos[i] / 100)}%` }} loading="lazy" />
                </div>

                {/* Slider line */}
                <div className="absolute top-0 bottom-0 z-10" style={{ left: `${sliderPos[i]}%`, transform: "translateX(-50%)" }}>
                  <div className="w-0.5 h-full bg-white shadow-lg" />
                  <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-lg" style={{ boxShadow: "0 2px 12px rgba(0,0,0,0.25)" }}>
                    <div className="flex items-center gap-0.5">
                      <ArrowRight className="w-3 h-3 rotate-180" style={{ color: "var(--pet-action)" }} />
                      <ArrowRight className="w-3 h-3" style={{ color: "var(--pet-action)" }} />
                    </div>
                  </div>
                </div>

                {/* Labels */}
                <span className="absolute top-3 left-3 text-[9px] font-extrabold uppercase px-2 py-0.5 rounded-full bg-black/50 text-white backdrop-blur-sm z-20">Antes</span>
                <span className="absolute top-3 right-3 text-[9px] font-extrabold uppercase px-2 py-0.5 rounded-full text-white backdrop-blur-sm z-20" style={{ background: "rgba(34,166,110,0.7)" }}>Depois</span>
              </div>

              {/* Info */}
              <div className="mt-3 px-1">
                <p className="text-sm font-extrabold" style={{ color: "var(--pet-navy)" }}>{t.name} <span className="font-normal text-gray-400">· {t.breed}</span></p>
                <p className="text-xs font-bold" style={{ color: "var(--pet-action)" }}>{t.service}</p>
              </div>
            </div>
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
