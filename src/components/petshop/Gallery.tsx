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
    <section className="py-14 sm:py-20 px-4 bg-white" ref={ref}>
      <div className={`max-w-[1200px] mx-auto scroll-fade-up ${visible ? "visible" : ""}`}>
        <div className="text-center mb-10">
          <span className="inline-block text-[11px] font-bold uppercase tracking-widest mb-3 px-4 py-1.5 rounded-full" style={{ background: "var(--pet-blue-light)", color: "var(--pet-blue)" }}>
            Resultados
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold" style={{ fontFamily: "'Baloo 2', cursive", color: "var(--pet-blue-dark)" }}>
            Antes e depois
          </h2>
        </div>

        <div className={`grid grid-cols-1 sm:grid-cols-3 gap-4 stagger-children ${visible ? "visible" : ""}`}>
          {photos.map((photo, i) => (
            <div
              key={i}
              className="relative rounded-2xl overflow-hidden aspect-[4/3] group cursor-pointer transition-all duration-300 hover:-translate-y-2"
              style={{ background: i === 1 ? "var(--pet-orange-light)" : "var(--pet-blue-light)", border: `1px solid ${i === 1 ? "var(--pet-orange)" : "var(--pet-blue)"}` }}
            >
              <div className="absolute inset-0 flex flex-col items-center justify-center" style={{ color: i === 1 ? "var(--pet-orange)" : "var(--pet-blue)" }}>
                <Camera className="w-8 h-8 mb-2" />
                <span className="text-xs font-bold">Foto em breve</span>
              </div>
              <span className="absolute top-3 left-3 text-white font-extrabold text-[10px] px-3 py-1 rounded-full z-10" style={{ background: i === 1 ? "var(--pet-orange)" : "var(--pet-blue)" }}>
                {photo.badge}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl px-7 py-3 text-sm font-extrabold transition-all duration-200 hover:-translate-y-0.5 text-white"
            style={{ background: "var(--pet-orange)", boxShadow: "0 4px 14px rgba(245,133,31,0.35)" }}
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
