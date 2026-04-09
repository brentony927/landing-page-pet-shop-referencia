import { MessageCircle, Clock, Sparkles, PawPrint, AlertCircle } from "lucide-react";
import { useInView } from "@/hooks/useInView";

const WA = "https://wa.me/5569992216764?text=" + encodeURIComponent("Olá! Vi a promoção de Banho + Tosa no site e quero aproveitar! Quais horários estão disponíveis?");

const PromoSection = () => {
  const { ref, visible } = useInView(0.2);

  return (
    <section className="py-4 sm:py-8 px-4" ref={ref}>
      <div className={`max-w-[1100px] mx-auto rounded-[22px] px-6 sm:px-10 lg:px-14 py-8 sm:py-10 relative overflow-hidden scroll-scale-in ${visible ? "visible" : ""}`} style={{ background: "var(--pet-action)", boxShadow: "0 20px 60px var(--pet-action-glow)" }}>
        <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-5">
          <div className="text-center sm:text-left">
            <div className="flex items-center gap-1.5 mb-2 justify-center sm:justify-start">
              <Sparkles className="w-3.5 h-3.5 text-white" />
              <span className="text-[10px] font-extrabold uppercase tracking-wider text-white/90">Promoção da semana</span>
            </div>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white mb-2" style={{ fontFamily: "'Baloo 2', cursive" }}>
              Banho + Tosa com desconto
            </h2>
            {/* Gatilho de escassez */}
            <div className="flex flex-wrap items-center gap-3 justify-center sm:justify-start">
              <span className="flex items-center gap-1 text-xs font-bold text-white/80">
                <Clock className="w-3.5 h-3.5 text-white/60" /> Só hoje
              </span>
              <span className="flex items-center gap-1 text-xs font-bold text-white/70">
                <AlertCircle className="w-3 h-3" /> Últimas 3 vagas
              </span>
            </div>
          </div>
          <a href={WA} target="_blank" rel="noopener noreferrer" className="rounded-2xl px-6 py-3.5 text-sm font-extrabold bg-white transition-all hover:-translate-y-0.5 hover:shadow-xl active:scale-95 inline-flex items-center gap-2 flex-shrink-0" style={{ color: "var(--pet-action-dark)", boxShadow: "0 4px 16px rgba(0,0,0,0.15)" }}>
            <MessageCircle className="w-4 h-4" /> Garantir minha vaga
          </a>
        </div>
        <PawPrint className="absolute -right-3 -bottom-3 w-24 h-24 text-white/10 rotate-12" />
      </div>
    </section>
  );
};

export default PromoSection;
