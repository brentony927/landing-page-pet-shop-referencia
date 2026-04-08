import { Calendar, MessageCircle, PawPrint, Clock, Zap } from "lucide-react";
import { useInView } from "@/hooks/useInView";

const WA = "https://wa.me/5569992216764?text=Oi%2C%20quero%20agendar%20e%20ganhar%20desconto";

const CtaBanner = () => {
  const { ref, visible } = useInView(0.2);

  return (
    <section className="py-4 sm:py-8 px-4" ref={ref}>
      <div className={`max-w-[1100px] mx-auto rounded-[22px] px-6 sm:px-10 lg:px-14 py-10 sm:py-14 text-white relative overflow-hidden scroll-scale-in ${visible ? "visible" : ""}`} style={{ background: "var(--pet-navy)" }}>
        <div className="relative z-10 text-center sm:text-left max-w-lg mx-auto sm:mx-0">
          {/* Gatilho de urgência */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider mb-4" style={{ background: "rgba(245,133,31,0.15)", color: "#FFB300" }}>
            <Zap className="w-3 h-3" /> Oferta por tempo limitado
          </div>
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold mb-2.5 leading-tight" style={{ fontFamily: "'Baloo 2', cursive" }}>
            Agende hoje e ganhe 10% off no próximo serviço
          </h2>
          <p className="text-xs sm:text-sm text-white/55 mb-6 flex items-center gap-1.5 justify-center sm:justify-start">
            <Clock className="w-3.5 h-3.5" />
            Válido apenas para agendamentos de hoje
          </p>
          <div className="flex flex-col sm:flex-row gap-2.5 justify-center sm:justify-start">
            <a href={WA} target="_blank" rel="noopener noreferrer" className="rounded-2xl px-6 py-3.5 font-extrabold text-sm transition-all hover:-translate-y-0.5 active:scale-95 inline-flex items-center justify-center gap-2" style={{ background: "var(--pet-action)", boxShadow: "0 6px 24px rgba(245,133,31,0.4)" }}>
              <Calendar className="w-4 h-4" /> AGENDAR AGORA
            </a>
            <a href={WA} target="_blank" rel="noopener noreferrer" className="rounded-2xl px-5 py-3 font-bold text-sm text-white/65 hover:text-white transition-all inline-flex items-center justify-center gap-2 border border-white/15 hover:border-white/35">
              <MessageCircle className="w-4 h-4" /> WhatsApp
            </a>
          </div>
        </div>
        <PawPrint className="absolute -right-4 -bottom-4 w-36 h-36 text-white/[0.03] rotate-[-15deg]" />
        <div className="absolute right-16 top-4 w-24 h-24 rounded-full bg-white/[0.02]" />
        <div className="absolute right-40 bottom-8 w-16 h-16 rounded-full bg-white/[0.02]" />
      </div>
    </section>
  );
};

export default CtaBanner;
