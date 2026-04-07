import { useInView } from "@/hooks/useInView";
import { Camera, MessageCircle } from "lucide-react";

const photos = [
  { badge: "Antes", alt: "Pet antes do banho e tosa" },
  { badge: "Depois ✨", alt: "Pet após banho e tosa" },
  { badge: "Nossa loja", alt: "Estrutura da Pet Shop" },
];

const WA_LINK = "https://wa.me/5569992216764?text=Oi%2C%20quero%20agendar%20um%20banho%20pro%20meu%20pet";

const Gallery = () => {
  const { ref, visible } = useInView(0.1);

  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 bg-white" ref={ref}>
      <div className={`max-w-[1200px] mx-auto scroll-fade-up ${visible ? "visible" : ""}`}>
        <div className="text-center mb-8 sm:mb-10">
          <span className="inline-block text-[10px] sm:text-[11px] font-bold uppercase tracking-widest mb-2 px-4 py-1.5 rounded-full" style={{ background: "#E3F2FD", color: "#1E88E5" }}>
            Resultados
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold" style={{ fontFamily: "'Baloo 2', cursive", color: "#1565C0" }}>
            Antes e depois
          </h2>
        </div>

        <div className={`grid grid-cols-3 gap-2 sm:gap-4 stagger-children ${visible ? "visible" : ""}`}>
          {photos.map((photo, i) => (
            <div
              key={i}
              className="relative rounded-2xl sm:rounded-3xl overflow-hidden aspect-[3/4] sm:aspect-[4/3] group cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              style={{ background: i === 1 ? "#FFF3E8" : "#E3F2FD", border: `2px solid ${i === 1 ? "#F5851F" : "#1E88E5"}20` }}
            >
              <div className="absolute inset-0 flex flex-col items-center justify-center" style={{ color: i === 1 ? "#F5851F" : "#1E88E5" }}>
                <Camera className="w-6 h-6 sm:w-8 sm:h-8 mb-1.5" />
                <span className="text-[10px] sm:text-xs font-bold">Em breve</span>
              </div>
              <span className="absolute top-2 left-2 sm:top-3 sm:left-3 text-white font-extrabold text-[9px] sm:text-[10px] px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full z-10" style={{ background: i === 1 ? "#F5851F" : "#1E88E5" }}>
                {photo.badge}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-6 sm:mt-8 text-center">
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-2xl px-6 py-3 text-sm font-extrabold transition-all duration-200 hover:-translate-y-0.5 active:scale-95 text-white"
            style={{ background: "#F5851F", boxShadow: "0 6px 20px rgba(245,133,31,0.35)" }}
          >
            <MessageCircle className="w-4 h-4" />
            Quer ver seu pet assim? Agende agora
          </a>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
