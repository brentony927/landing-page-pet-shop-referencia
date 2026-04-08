import { useInView } from "@/hooks/useInView";
import { Camera, MessageCircle } from "lucide-react";

const photos = [
  { badge: "Antes", color: "#1E88E5", bg: "#E3F2FD" },
  { badge: "Depois ✨", color: "#F5851F", bg: "#FFF3E8" },
  { badge: "Nossa loja", color: "#4CAF50", bg: "#E8F5E9" },
];

const WA = "https://wa.me/5569992216764?text=Oi%2C%20quero%20agendar%20um%20banho%20pro%20meu%20pet";

const Gallery = () => {
  const { ref, visible } = useInView(0.1);

  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 bg-white" ref={ref}>
      <div className={`max-w-[1100px] mx-auto scroll-fade-up ${visible ? "visible" : ""}`}>
        <div className="text-center mb-8">
          <span className="inline-block text-[10px] font-extrabold uppercase tracking-[0.15em] mb-2 px-4 py-1.5 rounded-full" style={{ background: "var(--pet-orange-light)", color: "var(--pet-action)" }}>Resultados</span>
          <h2 className="text-[22px] sm:text-3xl lg:text-4xl font-extrabold" style={{ fontFamily: "'Baloo 2', cursive", color: "var(--pet-navy)" }}>Antes e depois</h2>
        </div>

        <div className={`grid grid-cols-3 gap-2.5 sm:gap-4 stagger-children ${visible ? "visible" : ""}`}>
          {photos.map((p, i) => (
            <div key={i} className="relative rounded-2xl sm:rounded-[20px] overflow-hidden aspect-[3/4] sm:aspect-[4/3] group cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-xl" style={{ background: p.bg, border: `2px solid ${p.color}20` }}>
              <div className="absolute inset-0 flex flex-col items-center justify-center" style={{ color: p.color }}>
                <Camera className="w-6 h-6 sm:w-8 sm:h-8 mb-1 opacity-40" />
                <span className="text-[10px] sm:text-xs font-bold opacity-60">Em breve</span>
              </div>
              <span className="absolute top-2 left-2 sm:top-3 sm:left-3 text-white font-extrabold text-[9px] sm:text-[10px] px-2.5 py-0.5 rounded-full z-10" style={{ background: p.color }}>{p.badge}</span>
            </div>
          ))}
        </div>

        <div className="mt-6 sm:mt-8 text-center">
          <a href={WA} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-extrabold text-white transition-all hover:-translate-y-0.5 active:scale-95" style={{ background: "#F5851F", boxShadow: "0 6px 20px rgba(245,133,31,0.3)" }}>
            <MessageCircle className="w-4 h-4" /> Quer ver seu pet assim? Agende agora
          </a>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
