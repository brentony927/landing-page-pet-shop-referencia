import { useInView } from "@/hooks/useInView";
import { MessageCircle, Quote, Star } from "lucide-react";
import { useRef } from "react";

const WA = "https://wa.me/5569992216764?text=" + encodeURIComponent("Olá! Vi os depoimentos dos clientes e gostaria de agendar um serviço para o meu pet!");

const testimonials = [
  { name: "Maria Aparecida", role: "Cliente há 4 anos", initials: "MA", color: "#FF6B2C", text: "Meu Bob chega puxando a coleira de tanta vontade de entrar. Nunca vi ele tão feliz em outro lugar." },
  { name: "João Carlos", role: "Tutor do Mingau", initials: "JC", color: "#22A66E", text: "O Mingau é difícil, mas aqui eles têm paciência. Voltou ronronando. Não troco por nada." },
  { name: "Renata Silva", role: "Tutora da Luna", initials: "RS", color: "#FFB300", text: "Testei 3 pet shops antes. Aqui a Luna volta feliz e cheirosa. Virei cliente fiel." },
];

const Testimonials = () => {
  const { ref, visible } = useInView(0.1);
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section className="py-10 sm:py-18 lg:py-24 px-4" style={{ background: "var(--pet-bg-alt)" }} ref={ref}>
      <div className={`max-w-[1100px] mx-auto scroll-fade-up ${visible ? "visible" : ""}`}>
        <div className="text-center mb-10 sm:mb-12">
          <span className="inline-block text-[10px] font-extrabold uppercase tracking-[0.18em] mb-2.5 px-4 py-1.5 rounded-full" style={{ background: "var(--pet-orange-light)", color: "var(--pet-action)" }}>O que dizem por aí</span>
          <h2 className="text-[24px] sm:text-3xl lg:text-[40px] font-extrabold" style={{ fontFamily: "'Baloo 2', cursive", color: "var(--pet-navy)" }}>Quem já veio, voltou</h2>
          <p className="text-sm text-gray-400 mt-2">Histórias de clientes do bairro</p>
        </div>

        <div ref={scrollRef} className={`flex gap-4 overflow-x-auto sm:grid sm:grid-cols-3 sm:overflow-visible pb-4 sm:pb-0 snap-x snap-mandatory scrollbar-hide stagger-children ${visible ? "visible" : ""}`}>
          {testimonials.map(t => (
            <div key={t.name} className="rounded-[20px] p-5 sm:p-6 bg-white flex-shrink-0 w-[280px] sm:w-auto snap-center transition-all duration-300 hover:-translate-y-2 hover:shadow-xl group" style={{ border: "1.5px solid #f0f0f0", boxShadow: "0 2px 16px rgba(0,0,0,0.03)" }}>
              <Quote className="w-5 h-5 mb-2 transition-transform group-hover:scale-110" style={{ color: "var(--pet-action)", opacity: 0.2 }} />
              <div className="flex gap-0.5 mb-3">
                {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="w-3.5 h-3.5 fill-current" style={{ color: "#FFB300" }} />)}
              </div>
              <p className="text-[13px] sm:text-sm leading-relaxed mb-4" style={{ color: "#555" }}>"{t.text}"</p>
              <div className="flex items-center gap-2.5 pt-3" style={{ borderTop: "1px solid #f5f5f5" }}>
                <div className="w-9 h-9 rounded-full flex items-center justify-center text-white text-[12px] font-extrabold flex-shrink-0" style={{ background: t.color, fontFamily: "'Baloo 2', cursive" }}>
                  {t.initials}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[13px] font-extrabold truncate" style={{ color: "var(--pet-navy)", fontFamily: "'Baloo 2', cursive" }}>{t.name}</p>
                  <p className="text-[11px]" style={{ color: "#aaa" }}>{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 sm:mt-10 text-center">
          <a href={WA} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-2xl px-6 py-3 text-sm font-extrabold text-white transition-all hover:-translate-y-0.5 active:scale-95" style={{ background: "var(--pet-action)", boxShadow: "0 6px 20px var(--pet-action-glow)" }}>
            <MessageCircle className="w-4 h-4" /> Quer o mesmo resultado? Agende
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
