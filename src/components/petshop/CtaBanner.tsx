import { Calendar, MessageCircle, PawPrint } from "lucide-react";
import { useInView } from "@/hooks/useInView";

const WA = "https://wa.me/5569992216764?text=Oi%2C%20quero%20agendar%20e%20ganhar%20desconto";

const CtaBanner = () => {
  const { ref, visible } = useInView(0.2);

  return (
    <section className="py-4 sm:py-8 px-4" ref={ref}>
      <div className={`max-w-[1100px] mx-auto rounded-[20px] px-6 sm:px-10 lg:px-14 py-8 sm:py-12 text-white relative overflow-hidden scroll-scale-in ${visible ? "visible" : ""}`} style={{ background: "var(--pet-navy)" }}>
        <div className="relative z-10 text-center sm:text-left max-w-lg mx-auto sm:mx-0">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold mb-2 leading-tight" style={{ fontFamily: "'Baloo 2', cursive" }}>
            Agende hoje e ganhe 10% off no próximo serviço
          </h2>
          <p className="text-xs sm:text-sm text-white/65 mb-5">
            Clientes que agendam pelo WhatsApp recebem desconto na próxima visita.
          </p>
          <div className="flex flex-col sm:flex-row gap-2.5 justify-center sm:justify-start">
            <a href={WA} target="_blank" rel="noopener noreferrer" className="rounded-xl px-6 py-3 font-extrabold text-sm transition-all hover:-translate-y-0.5 active:scale-95 inline-flex items-center justify-center gap-2" style={{ background: "#F5851F", boxShadow: "0 6px 20px rgba(245,133,31,0.4)" }}>
              <Calendar className="w-4 h-4" /> AGENDAR AGORA
            </a>
            <a href={WA} target="_blank" rel="noopener noreferrer" className="rounded-xl px-5 py-3 font-bold text-sm text-white/75 hover:text-white transition-all inline-flex items-center justify-center gap-2 border border-white/20 hover:border-white/40">
              <MessageCircle className="w-4 h-4" /> WhatsApp
            </a>
          </div>
        </div>
        <PawPrint className="absolute -right-4 -bottom-4 w-32 h-32 text-white/[0.04] rotate-[-15deg]" />
        <div className="absolute right-16 top-4 w-20 h-20 rounded-full bg-white/[0.03]" />
      </div>
    </section>
  );
};

export default CtaBanner;
