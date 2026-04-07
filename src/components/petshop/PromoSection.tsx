import { MessageCircle, Clock, Sparkles } from "lucide-react";
import { useInView } from "@/hooks/useInView";

const WA_LINK = "https://wa.me/5569992216764?text=Oi%2C%20quero%20agendar%20banho%20%2B%20tosa%20com%20desconto";

const PromoSection = () => {
  const { ref, visible } = useInView(0.2);

  return (
    <section className="py-10 px-4" ref={ref}>
      <div
        className={`max-w-[1100px] mx-auto rounded-3xl px-8 md:px-16 py-12 md:py-14 relative overflow-hidden transition-all duration-700 ${visible ? "opacity-100 scale-100" : "opacity-0 scale-[0.97]"}`}
        style={{ background: "var(--pet-yellow)" }}
      >
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Sparkles className="w-5 h-5" style={{ color: "#333" }} />
              <span className="text-xs font-extrabold uppercase tracking-wider" style={{ color: "#333" }}>Promoção da semana</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-2" style={{ fontFamily: "'Baloo 2', cursive", color: "#333" }}>
              Banho + Tosa com desconto
            </h2>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" style={{ color: "var(--pet-orange-dark)" }} />
              <p className="text-sm font-bold" style={{ color: "var(--pet-orange-dark)" }}>
                Vagas limitadas hoje
              </p>
            </div>
          </div>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full px-8 py-4 text-sm font-extrabold text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl inline-flex items-center gap-2 flex-shrink-0"
            style={{ background: "var(--pet-orange)", boxShadow: "0 6px 20px rgba(255,138,101,0.4)" }}
          >
            <MessageCircle className="w-5 h-5" />
            Agendar com desconto
          </a>
        </div>
        <div className="absolute -right-10 -bottom-10 w-40 h-40 rounded-full" style={{ background: "rgba(255,255,255,0.15)" }} />
        <div className="absolute right-20 top-0 w-20 h-20 rounded-full" style={{ background: "rgba(255,255,255,0.1)" }} />
      </div>
    </section>
  );
};

export default PromoSection;
