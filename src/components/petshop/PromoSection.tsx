import { MessageCircle, Clock, Sparkles, PawPrint } from "lucide-react";
import { useInView } from "@/hooks/useInView";

const WA_LINK = "https://wa.me/5569992216764?text=Oi%2C%20quero%20agendar%20banho%20%2B%20tosa%20com%20desconto";

const PromoSection = () => {
  const { ref, visible } = useInView(0.2);

  return (
    <section className="py-6 sm:py-10 px-4" ref={ref}>
      <div
        className={`max-w-[1200px] mx-auto rounded-3xl px-6 sm:px-12 lg:px-16 py-8 sm:py-12 relative overflow-hidden scroll-scale-in ${visible ? "visible" : ""}`}
        style={{ background: "linear-gradient(135deg, #FFA000 0%, #F5851F 100%)" }}
      >
        <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-5">
          <div className="text-center sm:text-left">
            <div className="flex items-center gap-2 mb-2 justify-center sm:justify-start">
              <Sparkles className="w-4 h-4 text-white" />
              <span className="text-[11px] font-extrabold uppercase tracking-wider text-white/90">Promoção da semana</span>
            </div>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold mb-2 text-white" style={{ fontFamily: "'Baloo 2', cursive" }}>
              Banho + Tosa com desconto
            </h2>
            <div className="flex items-center gap-2 justify-center sm:justify-start">
              <Clock className="w-4 h-4 text-white/70" />
              <p className="text-xs sm:text-sm font-bold text-white/85">Vagas limitadas hoje</p>
            </div>
          </div>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-2xl px-6 sm:px-8 py-3.5 text-sm font-extrabold text-white transition-all duration-300 hover:-translate-y-1 active:scale-95 inline-flex items-center gap-2 flex-shrink-0"
            style={{ background: "rgba(0,0,0,0.2)", boxShadow: "0 6px 20px rgba(0,0,0,0.15)", backdropFilter: "blur(4px)" }}
          >
            <MessageCircle className="w-5 h-5" />
            Agendar com desconto
          </a>
        </div>
        {/* Decorations */}
        <PawPrint className="absolute -right-4 -bottom-4 w-24 h-24 text-white/10 rotate-12" />
        <div className="absolute right-20 top-2 w-16 h-16 rounded-full bg-white/5" />
        <div className="absolute left-4 -top-6 w-20 h-20 rounded-full bg-white/5" />
      </div>
    </section>
  );
};

export default PromoSection;
