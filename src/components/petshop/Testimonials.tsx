import { useInView } from "@/hooks/useInView";
import { MessageCircle, Quote } from "lucide-react";

const WA_LINK = "https://wa.me/5569992216764?text=Oi%2C%20quero%20agendar%20um%20banho%20pro%20meu%20pet";

const testimonials = [
  {
    name: "Maria Aparecida",
    role: "Cliente há 4 anos",
    petName: "Bob",
    petImage: "https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=100&q=80",
    text: "Meu Bob chega puxando a coleira de tanta vontade de entrar. Nunca vi ele tão feliz em outro lugar.",
  },
  {
    name: "João Carlos",
    role: "Tutor do Mingau",
    petName: "Mingau",
    petImage: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=100&q=80",
    text: "O Mingau é difícil, mas aqui eles têm paciência. Voltou ronronando. Não troco por nada.",
  },
  {
    name: "Renata Silva",
    role: "Tutora da Luna e da Mel",
    petName: "Luna",
    petImage: "https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?w=100&q=80",
    text: "Testei 3 pet shops antes. Aqui a Luna volta feliz e cheirosa. Virei cliente fiel.",
  },
];

const Testimonials = () => {
  const { ref, visible } = useInView(0.2);

  return (
    <section className="py-16 md:py-24 px-4 bg-white" ref={ref}>
      <div className={`max-w-[1200px] mx-auto transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <div className="text-center mb-12">
          <span className="inline-block text-xs font-bold uppercase tracking-widest mb-3 px-4 py-1.5 rounded-full" style={{ background: "var(--pet-yellow-light)", color: "var(--pet-yellow-dark)" }}>
            Depoimentos
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold" style={{ fontFamily: "'Baloo 2', cursive", color: "var(--pet-blue-dark)" }}>
            Quem já veio, voltou
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, idx) => (
            <div
              key={t.name}
              className="rounded-2xl p-7 bg-white transition-all duration-300 relative"
              style={{
                border: "1px solid var(--pet-gray-border)",
                boxShadow: "0 4px 20px rgba(0,0,0,0.04)",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "0 16px 40px rgba(0,0,0,0.08)"; e.currentTarget.style.borderColor = "var(--pet-orange)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,0,0,0.04)"; e.currentTarget.style.borderColor = "var(--pet-gray-border)"; }}
            >
              <Quote className="w-8 h-8 mb-4" style={{ color: "var(--pet-orange)", opacity: 0.3 }} />
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: 5 }, (_, i) => (
                  <span key={i} className="text-sm" style={{ color: "var(--pet-yellow)" }}>★</span>
                ))}
              </div>
              <p className="text-[15px] leading-relaxed mb-6" style={{ color: "var(--pet-gray)" }}>
                "{t.text}"
              </p>
              <div className="flex items-center gap-3 pt-4" style={{ borderTop: "1px solid var(--pet-gray-border)" }}>
                <img src={t.petImage} alt={t.petName} className="w-11 h-11 rounded-full object-cover" style={{ border: "2px solid var(--pet-orange)" }} />
                <div>
                  <p className="text-sm font-extrabold" style={{ color: "#333", fontFamily: "'Baloo 2', cursive" }}>{t.name}</p>
                  <p className="text-xs" style={{ color: "var(--pet-gray-light)" }}>{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl px-8 py-3.5 text-sm font-extrabold transition-all duration-200 hover:-translate-y-0.5 text-white"
            style={{ background: "var(--pet-orange)", boxShadow: "0 4px 14px rgba(255,138,101,0.35)" }}
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
