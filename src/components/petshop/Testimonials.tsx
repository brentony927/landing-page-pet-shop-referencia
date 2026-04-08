import { useInView } from "@/hooks/useInView";
import { MessageCircle, Quote, Star } from "lucide-react";
import { useRef } from "react";

const WA = "https://wa.me/5569992216764?text=Oi%2C%20quero%20agendar%20um%20banho%20pro%20meu%20pet";

const testimonials = [
  { name: "Maria Aparecida", role: "Cliente há 4 anos", img: "https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=80&q=80", text: "Meu Bob chega puxando a coleira de tanta vontade de entrar. Nunca vi ele tão feliz em outro lugar." },
  { name: "João Carlos", role: "Tutor do Mingau", img: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=80&q=80", text: "O Mingau é difícil, mas aqui eles têm paciência. Voltou ronronando. Não troco por nada." },
  { name: "Renata Silva", role: "Tutora da Luna", img: "https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?w=80&q=80", text: "Testei 3 pet shops antes. Aqui a Luna volta feliz e cheirosa. Virei cliente fiel." },
];

const Testimonials = () => {
  const { ref, visible } = useInView(0.1);
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4" style={{ background: "#F8FAFD" }} ref={ref}>
      <div className={`max-w-[1100px] mx-auto scroll-fade-up ${visible ? "visible" : ""}`}>
        <div className="text-center mb-8 sm:mb-10">
          <span className="inline-block text-[10px] font-extrabold uppercase tracking-[0.15em] mb-2 px-4 py-1.5 rounded-full" style={{ background: "#FFF3E8", color: "#F5851F" }}>Depoimentos</span>
          <h2 className="text-[22px] sm:text-3xl lg:text-4xl font-extrabold" style={{ fontFamily: "'Baloo 2', cursive", color: "var(--pet-navy)" }}>Quem já veio, voltou</h2>
        </div>

        <div ref={scrollRef} className={`flex gap-4 overflow-x-auto sm:grid sm:grid-cols-3 sm:overflow-visible pb-4 sm:pb-0 snap-x snap-mandatory scrollbar-hide stagger-children ${visible ? "visible" : ""}`}>
          {testimonials.map(t => (
            <div key={t.name} className="rounded-[18px] p-5 sm:p-6 bg-white flex-shrink-0 w-[275px] sm:w-auto snap-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg" style={{ border: "1.5px solid #f0f0f0", boxShadow: "0 2px 16px rgba(0,0,0,0.04)" }}>
              <Quote className="w-5 h-5 mb-2" style={{ color: "#F5851F", opacity: 0.25 }} />
              <div className="flex gap-0.5 mb-3">
                {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="w-3.5 h-3.5 fill-current" style={{ color: "#FFB300" }} />)}
              </div>
              <p className="text-[13px] sm:text-sm leading-relaxed mb-4" style={{ color: "#555" }}>"{t.text}"</p>
              <div className="flex items-center gap-2.5 pt-3" style={{ borderTop: "1px solid #f0f0f0" }}>
                <img src={t.img} alt={t.name} className="w-9 h-9 rounded-full object-cover ring-2 ring-orange-200" />
                <div>
                  <p className="text-[13px] font-extrabold" style={{ color: "var(--pet-navy)", fontFamily: "'Baloo 2', cursive" }}>{t.name}</p>
                  <p className="text-[11px]" style={{ color: "#999" }}>{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 sm:mt-8 text-center">
          <a href={WA} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-extrabold text-white transition-all hover:-translate-y-0.5 active:scale-95" style={{ background: "#F5851F", boxShadow: "0 6px 20px rgba(245,133,31,0.3)" }}>
            <MessageCircle className="w-4 h-4" /> Quer o mesmo resultado? Agende
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
