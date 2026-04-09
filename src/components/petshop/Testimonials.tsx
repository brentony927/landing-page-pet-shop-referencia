import { useInView } from "@/hooks/useInView";
import { MessageCircle, Quote, Star, CheckCircle } from "lucide-react";
import { useRef } from "react";

const WA = "https://wa.me/5569992216764?text=" + encodeURIComponent("Olá! Vi os depoimentos dos clientes e gostaria de agendar um serviço para o meu pet!");

const testimonials = [
  { name: "Maria Aparecida", role: "Cliente há 4 anos", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&q=80", text: "Meu Bob chega puxando a coleira de tanta vontade de entrar. Nunca vi ele tão feliz em outro lugar.", verified: true },
  { name: "João Carlos", role: "Tutor do Mingau", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&q=80", text: "O Mingau é difícil, mas aqui eles têm paciência. Voltou ronronando. Não troco por nada.", verified: true },
  { name: "Renata Silva", role: "Tutora da Luna", img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&q=80", text: "Testei 3 pet shops antes. Aqui a Luna volta feliz e cheirosa. Virei cliente fiel.", verified: true },
];

const Testimonials = () => {
  const { ref, visible } = useInView(0.1);
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section className="py-10 sm:py-18 lg:py-24 px-4" style={{ background: "var(--pet-bg-alt)" }} ref={ref}>
      <div className={`max-w-[1100px] mx-auto scroll-fade-up ${visible ? "visible" : ""}`}>
        <div className="text-center mb-10 sm:mb-12">
          <span className="inline-block text-[10px] font-extrabold uppercase tracking-[0.18em] mb-2.5 px-4 py-1.5 rounded-full" style={{ background: "var(--pet-orange-light)", color: "var(--pet-action)" }}>Depoimentos reais</span>
          <h2 className="text-[24px] sm:text-3xl lg:text-[40px] font-extrabold" style={{ fontFamily: "'Baloo 2', cursive", color: "var(--pet-navy)" }}>Quem já veio, voltou</h2>
          <p className="text-sm text-gray-400 mt-2">Avaliações verificadas dos nossos clientes</p>
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
                <img src={t.img} alt={t.name} className="w-9 h-9 rounded-full object-cover ring-2" style={{ "--tw-ring-color": "var(--pet-orange-light)" } as React.CSSProperties} />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1.5">
                    <p className="text-[13px] font-extrabold truncate" style={{ color: "var(--pet-navy)", fontFamily: "'Baloo 2', cursive" }}>{t.name}</p>
                    {t.verified && <CheckCircle className="w-3 h-3 flex-shrink-0" style={{ color: "var(--pet-green)" }} />}
                  </div>
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
