import { MessageCircle, Clock, Sparkles } from "lucide-react";
import { useInView } from "@/hooks/useInView";

const WA_LINK = "https://wa.me/5569992216764?text=Oi%2C%20quero%20agendar%20banho%20%2B%20tosa%20com%20desconto";

const PromoSection = () => {
  const { ref, visible } = useInView(0.2);

  return (
    <section className="py-8 sm:py-10 px-4" ref={ref}>
      <div
        className={`max-w-[1200px] mx-auto rounded-2xl px-6 sm:px-12 md:px-16 py-10 sm:py-14 relative overflow-hidden scroll-scale-in ${visible ? "visible" : ""}`}
        style={{ background: "#FFA000" }}
      >
        <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-5">
          <div className="text-center sm:text-left">
            <div className="flex items-center gap-2 mb-2 justify-center sm:justify-start">
              <Sparkles className="w-4 h-4 text-white" />
              <span className="text-[11px] font-extrabold uppercase tracking-wider text-white/90">Promoção da semana</span>
            </div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold mb-2 text-white" style={{ fontFamily: "'Baloo 2', cursive" }}>
              Banho + Tosa com desconto
            </h2>
            <div className="flex items-center gap-2 justify-center sm:justify-start">
              <Clock className="w-4 h-4 text-white/70" />
              <p className="text-xs sm:text-sm font-bold text-white/80">Vagas limitadas hoje</p>
            </div>
          </div>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl px-6 sm:px-8 py-3 sm:py-4 text-sm font-extrabold text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl inline-flex items-center gap-2 flex-shrink-0"
            style={{ background: "var(--pet-orange)", boxShadow: "0 6px 20px rgba(0,0,0,0.2)" }}
          >
            <MessageCircle className="w-5 h-5" />
            Agendar com desconto
          </a>
        </div>
        <div className="absolute -right-10 -bottom-10 w-32 sm:w-40 h-32 sm:h-40 rounded-full bg-white/10" />
        <div className="absolute right-16 top-0 w-16 sm:w-20 h-16 sm:h-20 rounded-full bg-white/5" />
      </div>
    </section>
  );
};

export default PromoSection;
