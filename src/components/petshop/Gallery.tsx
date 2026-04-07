import { useInView } from "@/hooks/useInView";
import { Camera } from "lucide-react";

const photos = [
  { badge: "Antes", badgeColor: "#6b6b6b", alt: "Pet antes do banho e tosa" },
  { badge: "Depois ✨", badgeColor: "#1b4332", alt: "Pet após banho e tosa" },
  { badge: "Antes", badgeColor: "#6b6b6b", alt: "Pet antes do banho" },
  { badge: "Depois ✨", badgeColor: "#1b4332", alt: "Pet após tosa completa" },
  { badge: "Nossa loja", badgeColor: "#e07b39", alt: "Estrutura da Pet Shop Amazônia" },
  { badge: "Nossa equipe", badgeColor: "#1a1a1a", alt: "Equipe Pet Shop Amazônia" },
];

const Gallery = () => {
  const { ref, visible } = useInView(0.1);

  return (
    <section className="py-16 md:py-20 px-4 bg-white" ref={ref}>
      <div className={`max-w-[1100px] mx-auto transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <div className="flex items-end justify-between mb-10">
          <h2 className="text-2xl md:text-[2rem] font-black" style={{ fontFamily: "'Playfair Display', Georgia, serif", color: "#1a1a1a" }}>
            Antes e depois
          </h2>
          <a href="https://wa.me/5569992216764" className="hidden md:block text-sm font-semibold hover:underline" style={{ color: "#1b4332" }}>
            Agendar para o meu pet →
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {photos.map((photo, i) => (
            <div
              key={i}
              className="relative rounded-xl overflow-hidden bg-stone-100 aspect-[4/3] group cursor-pointer transition-all duration-300"
              style={{ border: "1px solid #e2ddd6" }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,0,0,0.08)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "none"; }}
            >
              <div className="absolute inset-0 flex flex-col items-center justify-center text-stone-300">
                <Camera className="w-8 h-8 mb-2" />
                <span className="text-xs">Foto em breve</span>
              </div>

              <span
                className="absolute top-2 left-2 text-white font-bold text-[10px] px-2.5 py-1 rounded-md z-10"
                style={{ background: photo.badgeColor }}
              >
                {photo.badge}
              </span>
            </div>
          ))}
        </div>

        <p className="text-center text-xs mt-6" style={{ color: "#a8a29e" }}>
          Adicione fotos reais em /public/gallery/ para substituir os placeholders.
        </p>
      </div>
    </section>
  );
};

export default Gallery;
