import { useInView } from "@/hooks/useInView";
import { Camera } from "lucide-react";

const photos = [
  { badge: "Antes", badgeColor: "var(--pet-gray)", alt: "Pet antes do banho e tosa" },
  { badge: "Depois ✨", badgeColor: "var(--pet-green)", alt: "Pet após banho e tosa" },
  { badge: "Antes", badgeColor: "var(--pet-gray)", alt: "Pet antes do banho" },
  { badge: "Depois ✨", badgeColor: "var(--pet-green)", alt: "Pet após tosa completa" },
  { badge: "🏠 Nossa loja", badgeColor: "var(--pet-blue)", alt: "Estrutura da Pet Shop Amazônia" },
  { badge: "👥 Nossa equipe", badgeColor: "var(--pet-orange)", alt: "Equipe Pet Shop Amazônia" },
];

const Gallery = () => {
  const { ref, visible } = useInView(0.1);

  return (
    <section className="py-16 md:py-20 px-4 bg-white" ref={ref}>
      <div className={`max-w-[1100px] mx-auto transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <div className="flex items-end justify-between mb-10">
          <h2 className="text-2xl md:text-[2rem] font-extrabold" style={{ fontFamily: "'Baloo 2', cursive", color: "#333" }}>
            📸 Antes e depois
          </h2>
          <a href="https://wa.me/5569992216764" className="hidden md:block text-sm font-bold hover:underline" style={{ color: "var(--pet-green)" }}>
            Agendar para o meu pet →
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {photos.map((photo, i) => (
            <div
              key={i}
              className="relative rounded-2xl overflow-hidden aspect-[4/3] group cursor-pointer transition-all duration-300"
              style={{ background: "var(--pet-bg-alt)", border: "1.5px solid var(--pet-gray-border)" }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-3px)"; e.currentTarget.style.boxShadow = "0 12px 30px rgba(0,0,0,0.08)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "none"; }}
            >
              <div className="absolute inset-0 flex flex-col items-center justify-center" style={{ color: "#ccc" }}>
                <Camera className="w-8 h-8 mb-2" />
                <span className="text-xs">Foto em breve</span>
              </div>
              <span className="absolute top-2 left-2 text-white font-extrabold text-[10px] px-2.5 py-1 rounded-full z-10" style={{ background: photo.badgeColor }}>
                {photo.badge}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
