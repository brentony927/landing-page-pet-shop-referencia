import { useState } from "react";
import { useInView } from "@/hooks/useInView";
import { Sparkles, Camera, ImagePlus } from "lucide-react";

const WA = "https://wa.me/5569992216764?text=" + encodeURIComponent("Olá! Vi as transformações no site e quero agendar um banho e tosa para o meu pet!");

const transformations = [
  { name: "Thor", breed: "Golden Retriever", service: "Banho + Tosa completa" },
  { name: "Luna", breed: "Poodle", service: "Banho + Hidratação" },
  { name: "Bob", breed: "Shih Tzu", service: "Tosa higiênica" },
];

const BeforeAfter = () => {
  const { ref, visible } = useInView(0.08);
  const [activeIdx, setActiveIdx] = useState(0);

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
          <p className="text-sm text-gray-400 mt-2">Resultados reais dos nossos clientes</p>
        </div>

        {/* Main card */}
        <div className="rounded-[22px] overflow-hidden" style={{ border: "2px solid #f0f0f0", boxShadow: "0 8px 32px rgba(0,0,0,0.06)" }}>
          <div className="grid grid-cols-2">
            {/* Antes */}
            <div className="relative aspect-[3/4] sm:aspect-[4/3] flex flex-col items-center justify-center" style={{ background: "linear-gradient(180deg, #f8f0ea 0%, #f0e4d8 100%)" }}>
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center mb-3" style={{ background: "rgba(245,133,31,0.1)" }}>
                <Camera className="w-6 h-6 sm:w-7 sm:h-7" style={{ color: "var(--pet-action)", opacity: 0.5 }} />
              </div>
              <p className="text-xs sm:text-sm font-bold" style={{ color: "var(--pet-action)", opacity: 0.6 }}>Foto real em breve</p>
              <span className="absolute top-3 left-3 sm:top-4 sm:left-4 text-[9px] sm:text-[11px] font-extrabold uppercase px-2.5 py-1 rounded-full text-white" style={{ background: "rgba(0,0,0,0.4)", backdropFilter: "blur(8px)" }}>Antes</span>
            </div>

            {/* Depois */}
            <div className="relative aspect-[3/4] sm:aspect-[4/3] flex flex-col items-center justify-center" style={{ background: "linear-gradient(180deg, #e8f5e9 0%, #c8e6c9 100%)" }}>
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center mb-3" style={{ background: "rgba(34,166,110,0.1)" }}>
                <ImagePlus className="w-6 h-6 sm:w-7 sm:h-7" style={{ color: "var(--pet-green-cta)", opacity: 0.5 }} />
              </div>
              <p className="text-xs sm:text-sm font-bold" style={{ color: "var(--pet-green-cta)", opacity: 0.6 }}>Foto real em breve</p>
              <span className="absolute top-3 right-3 sm:top-4 sm:right-4 text-[9px] sm:text-[11px] font-extrabold uppercase px-2.5 py-1 rounded-full text-white" style={{ background: "var(--pet-green-cta)" }}>Depois</span>
            </div>
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
                  onClick={() => setActiveIdx(i)}
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
              onClick={() => setActiveIdx(i)}
              className="rounded-xl px-4 py-2 text-xs font-bold transition-all duration-300"
              style={{
                border: i === activeIdx ? "2px solid var(--pet-action)" : "2px solid #e8e8e8",
                background: i === activeIdx ? "var(--pet-orange-light)" : "white",
                color: i === activeIdx ? "var(--pet-action)" : "#999",
              }}
            >
              {tr.name}
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
