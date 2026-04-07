import { useInView } from "@/hooks/useInView";
import { MessageCircle, Quote } from "lucide-react";

const WA_LINK = "https://wa.me/5569992216764?text=Oi%2C%20quero%20agendar%20um%20banho%20pro%20meu%20pet";

const testimonials = [
  {
    name: "Maria Aparecida",
    role: "Cliente há 4 anos",
    petImage: "https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=100&q=80",
    text: "Meu Bob chega puxando a coleira de tanta vontade de entrar. Nunca vi ele tão feliz em outro lugar.",
  },
  {
    name: "João Carlos",
    role: "Tutor do Mingau",
    petImage: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=100&q=80",
    text: "O Mingau é difícil, mas aqui eles têm paciência. Voltou ronronando. Não troco por nada.",
  },
  {
    name: "Renata Silva",
    role: "Tutora da Luna",
    petImage: "https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?w=100&q=80",
    text: "Testei 3 pet shops antes. Aqui a Luna volta feliz e cheirosa. Virei cliente fiel.",
  },
];

const Testimonials = () => {
  const { ref, visible } = useInView(0.1);

  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4" style={{ background: "#F5F8FC" }} ref={ref}>
      <div className={`max-w-[1200px] mx-auto scroll-fade-up ${visible ? "visible" : ""}`}>
        <div className="text-center mb-8 sm:mb-12">
          <span className="inline-block text-[10px] sm:text-[11px] font-bold uppercase tracking-widest mb-2 px-4 py-1.5 rounded-full" style={{ background: "#FFF3E8", color: "#F5851F" }}>
            Depoimentos
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold" style={{ fontFamily: "'Baloo 2', cursive", color: "#1565C0" }}>
            Quem já veio, voltou
          </h2>
        </div>

        {/* Mobile: horizontal scroll, Desktop: grid */}
        <div className={`flex gap-4 overflow-x-auto sm:grid sm:grid-cols-3 sm:overflow-visible pb-4 sm:pb-0 scrollbar-hide stagger-children ${visible ? "visible" : ""}`}>
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="rounded-3xl p-5 sm:p-6 bg-white transition-all duration-300 hover:-translate-y-2 hover:shadow-lg flex-shrink-0 w-[280px] sm:w-auto"
              style={{ border: "1px solid #E8E8E8", boxShadow: "0 4px 20px rgba(0,0,0,0.04)" }}
            >
              <Quote className="w-6 h-6 mb-2" style={{ color: "#F5851F", opacity: 0.3 }} />
              <div className="flex gap-0.5 mb-3">
                {Array.from({ length: 5 }, (_, i) => (
                  <span key={i} className="text-sm" style={{ color: "#FFA000" }}>★</span>
                ))}
              </div>
              <p className="text-sm leading-relaxed mb-4" style={{ color: "#555" }}>
                "{t.text}"
              </p>
              <div className="flex items-center gap-3 pt-3" style={{ borderTop: "1px solid #E8E8E8" }}>
                <img src={t.petImage} alt={t.name} className="w-10 h-10 rounded-full object-cover" style={{ border: "2px solid #F5851F" }} />
                <div>
                  <p className="text-sm font-extrabold" style={{ color: "#333", fontFamily: "'Baloo 2', cursive" }}>{t.name}</p>
                  <p className="text-xs" style={{ color: "#999" }}>{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-2xl px-6 py-3 text-sm font-extrabold transition-all duration-200 hover:-translate-y-0.5 active:scale-95 text-white"
            style={{ background: "#F5851F", boxShadow: "0 6px 20px rgba(245,133,31,0.35)" }}
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
