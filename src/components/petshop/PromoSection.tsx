import { MessageCircle, Clock, Sparkles, PawPrint } from "lucide-react";
import { useInView } from "@/hooks/useInView";

const WA = "https://wa.me/5569992216764?text=Oi%2C%20quero%20agendar%20banho%20%2B%20tosa%20com%20desconto";

const PromoSection = () => {
  const { ref, visible } = useInView(0.2);

  return (
    <section className="py-4 sm:py-8 px-4" ref={ref}>
      <div className={`max-w-[1100px] mx-auto rounded-[20px] px-6 sm:px-10 lg:px-14 py-8 sm:py-10 relative overflow-hidden scroll-scale-in ${visible ? "visible" : ""}`} style={{ background: "linear-gradient(135deg, #FFB300 0%, #F5851F 100%)" }}>
        <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <div className="flex items-center gap-1.5 mb-1.5 justify-center sm:justify-start">
              <Sparkles className="w-3.5 h-3.5 text-white" />
              <span className="text-[10px] font-extrabold uppercase tracking-wider text-white/90">Promoção da semana</span>
            </div>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white mb-1.5" style={{ fontFamily: "'Baloo 2', cursive" }}>
              Banho + Tosa com desconto
            </h2>
            <div className="flex items-center gap-1.5 justify-center sm:justify-start">
              <Clock className="w-3.5 h-3.5 text-white/60" />
              <p className="text-xs font-bold text-white/80">Vagas limitadas hoje</p>
            </div>
          </div>
          <a href={WA} target="_blank" rel="noopener noreferrer" className="rounded-xl px-6 py-3 text-sm font-extrabold bg-white transition-all hover:-translate-y-0.5 active:scale-95 inline-flex items-center gap-2 flex-shrink-0" style={{ color: "#E06B0A", boxShadow: "0 4px 16px rgba(0,0,0,0.15)" }}>
            <MessageCircle className="w-4 h-4" /> Agendar com desconto
          </a>
        </div>
        <PawPrint className="absolute -right-3 -bottom-3 w-20 h-20 text-white/10 rotate-12" />
      </div>
    </section>
  );
};

export default PromoSection;
