import { useInView } from "@/hooks/useInView";
import { MessageCircle } from "lucide-react";

const WA_LINK = "https://wa.me/5569992216764?text=Oi%2C%20quero%20agendar%20um%20banho%20pro%20meu%20pet";

const testimonials = [
  {
    name: "Maria Aparecida",
    role: "Cliente há 4 anos",
    petName: "🐕 Bob",
    petImage: "https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=100&q=80",
    text: "Meu Bob chega puxando a coleira de tanta vontade de entrar. Nunca vi ele tão feliz em outro lugar.",
    stars: 5,
  },
  {
    name: "João Carlos",
    role: "Tutor do Mingau",
    petName: "🐱 Mingau",
    petImage: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=100&q=80",
    text: "O Mingau é difícil, mas aqui eles têm paciência. Voltou ronronando. Não troco por nada.",
    stars: 5,
  },
  {
    name: "Renata Silva",
    role: "Tutora da Luna e da Mel",
    petName: "🐕 Luna",
    petImage: "https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?w=100&q=80",
    text: "Testei 3 pet shops antes. Aqui a Luna volta feliz e cheirosa. Virei cliente fiel.",
    stars: 5,
  },
];

const Testimonials = () => {
  const { ref, visible } = useInView(0.2);

  return (
    <section className="py-16 md:py-20 px-4" style={{ background: "var(--pet-bg)" }} ref={ref}>
      <div className={`max-w-[1100px] mx-auto transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <h2 className="text-2xl md:text-[2rem] font-extrabold mb-10" style={{ fontFamily: "'Baloo 2', cursive", color: "#333" }}>
          💬 Quem já veio, voltou
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {testimonials.map((t, idx) => (
            <div
              key={t.name}
              className="rounded-3xl p-6 transition-all duration-300"
              style={{
                background: idx === 1 ? "var(--pet-green)" : "white",
                border: idx === 1 ? "none" : "1.5px solid var(--pet-gray-border)",
                boxShadow: "0 8px 32px rgba(0,0,0,0.06)",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = idx === 1 ? "0 16px 40px rgba(76,175,80,0.25)" : "0 12px 30px rgba(0,0,0,0.08)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "0 8px 32px rgba(0,0,0,0.06)"; }}
            >
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: 5 }, (_, i) => (
                  <span key={i} className="text-base" style={{ color: "var(--pet-yellow)" }}>★</span>
                ))}
              </div>
              <p className="text-[15px] leading-relaxed mb-5" style={{ color: idx === 1 ? "rgba(255,255,255,0.9)" : "var(--pet-gray)" }}>
                "{t.text}"
              </p>
              <div className="flex items-center gap-3">
                <img src={t.petImage} alt={`Pet ${t.petName}`} className="w-10 h-10 rounded-full object-cover" style={{ border: idx === 1 ? "2px solid rgba(255,255,255,0.3)" : "2px solid var(--pet-gray-border)" }} />
                <div>
                  <p className="text-sm font-extrabold" style={{ color: idx === 1 ? "#fff" : "#333", fontFamily: "'Baloo 2', cursive" }}>{t.name}</p>
                  <p className="text-xs" style={{ color: idx === 1 ? "rgba(255,255,255,0.7)" : "var(--pet-gray-light)" }}>{t.role}</p>
                  <p className="text-[11px] font-bold" style={{ color: idx === 1 ? "var(--pet-yellow)" : "var(--pet-orange)" }}>{t.petName}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full px-8 py-3 text-sm font-extrabold transition-all duration-200 hover:-translate-y-0.5"
            style={{ background: "var(--pet-yellow)", color: "#333", boxShadow: "0 4px 14px rgba(255,193,7,0.3)" }}
          >
            <MessageCircle className="w-4 h-4" />
            Quer o mesmo resultado? Agende agora
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
