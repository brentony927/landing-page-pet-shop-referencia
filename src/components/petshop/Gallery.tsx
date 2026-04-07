import { useInView } from "@/hooks/useInView";
import { Camera, MessageCircle } from "lucide-react";

const photos = [
  { badge: "Antes", badgeColor: "var(--pet-gray)", alt: "Pet antes do banho e tosa" },
  { badge: "Depois ✨", badgeColor: "var(--pet-green)", alt: "Pet após banho e tosa" },
  { badge: "Nossa loja", badgeColor: "var(--pet-blue)", alt: "Estrutura da Pet Shop Amazônia" },
];

const WA_LINK = "https://wa.me/5569992216764?text=Oi%2C%20quero%20agendar%20um%20banho%20pro%20meu%20pet";

const Gallery = () => {
  const { ref, visible } = useInView(0.1);

  return (
    <section className="py-16 md:py-20 px-4 bg-white" ref={ref}>
      <div className={`max-w-[1100px] mx-auto transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <h2 className="text-2xl md:text-[2rem] font-extrabold mb-10" style={{ fontFamily: "'Baloo 2', cursive", color: "#333" }}>
          📸 Antes e depois
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {photos.map((photo, i) => (
            <div
              key={i}
              className="relative rounded-3xl overflow-hidden aspect-[4/3] group cursor-pointer transition-all duration-300"
              style={{ background: "var(--pet-bg-alt)", border: "1.5px solid var(--pet-gray-border)", boxShadow: "0 8px 32px rgba(0,0,0,0.06)" }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-3px)"; e.currentTarget.style.boxShadow = "0 12px 30px rgba(0,0,0,0.08)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "0 8px 32px rgba(0,0,0,0.06)"; }}
            >
              <div className="absolute inset-0 flex flex-col items-center justify-center" style={{ color: "#ccc" }}>
                <Camera className="w-8 h-8 mb-2" />
                <span className="text-xs">Foto em breve</span>
              </div>
              <span className="absolute top-3 left-3 text-white font-extrabold text-[10px] px-3 py-1 rounded-full z-10" style={{ background: photo.badgeColor }}>
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
            className="inline-flex items-center gap-2 rounded-full px-8 py-3 text-sm font-extrabold transition-all duration-200 hover:-translate-y-0.5"
            style={{ background: "var(--pet-yellow)", color: "#333", boxShadow: "0 4px 14px rgba(255,193,7,0.3)" }}
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
