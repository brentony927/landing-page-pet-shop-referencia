import { useInView } from "@/hooks/useInView";
import { Camera, MessageCircle, Heart } from "lucide-react";

const photos = [
  { badge: "Antes", color: "var(--pet-action)", bg: "var(--pet-orange-light)" },
  { badge: "Depois", color: "var(--pet-green)", bg: "var(--pet-green-light)" },
  { badge: "Nossa loja", color: "var(--pet-yellow)", bg: "var(--pet-yellow-light)" },
];

const WA = "https://wa.me/5569992216764?text=Oi%2C%20quero%20agendar%20um%20banho%20pro%20meu%20pet";

const Gallery = () => {
  const { ref, visible } = useInView(0.1);

  return (
    <section className="py-10 sm:py-18 lg:py-24 px-4 bg-white" ref={ref}>
      <div className={`max-w-[1100px] mx-auto scroll-fade-up ${visible ? "visible" : ""}`}>
        <div className="text-center mb-10">
          <span className="inline-block text-[10px] font-extrabold uppercase tracking-[0.18em] mb-2.5 px-4 py-1.5 rounded-full" style={{ background: "var(--pet-orange-light)", color: "var(--pet-action)" }}>Resultados</span>
          <h2 className="text-[24px] sm:text-3xl lg:text-[40px] font-extrabold" style={{ fontFamily: "'Baloo 2', cursive", color: "var(--pet-navy)" }}>Antes e depois</h2>
          <p className="text-sm text-gray-400 mt-2">Transformações que falam por si</p>
        </div>

        <div className={`grid grid-cols-3 gap-3 sm:gap-4 stagger-children ${visible ? "visible" : ""}`}>
          {photos.map((p, i) => (
            <div key={i} className="relative rounded-2xl sm:rounded-[22px] overflow-hidden aspect-[3/4] sm:aspect-[4/3] group cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-xl" style={{ background: p.bg, border: `2px solid color-mix(in srgb, ${p.color} 15%, transparent)` }}>
              <div className="absolute inset-0 flex flex-col items-center justify-center transition-transform duration-300 group-hover:scale-110" style={{ color: p.color }}>
                <Camera className="w-6 h-6 sm:w-8 sm:h-8 mb-1.5 opacity-30" />
                <span className="text-[10px] sm:text-xs font-bold opacity-50">Em breve</span>
              </div>
              <span className="absolute top-2 left-2 sm:top-3 sm:left-3 text-white font-extrabold text-[9px] sm:text-[10px] px-2.5 py-0.5 rounded-full z-10" style={{ background: p.color }}>{p.badge}</span>
              {/* Like animado */}
              <div className="absolute bottom-2 right-2 sm:bottom-3 sm:right-3 w-7 h-7 rounded-full flex items-center justify-center bg-white/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300">
                <Heart className="w-3.5 h-3.5" style={{ color: p.color }} />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 sm:mt-10 text-center">
          <a href={WA} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-2xl px-6 py-3 text-sm font-extrabold text-white transition-all hover:-translate-y-0.5 active:scale-95" style={{ background: "var(--pet-action)", boxShadow: "0 6px 20px var(--pet-action-glow)" }}>
            <MessageCircle className="w-4 h-4" /> Quer ver seu pet assim? Agende
          </a>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
