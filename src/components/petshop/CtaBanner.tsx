import { Calendar, MessageCircle, PawPrint } from "lucide-react";
import { useInView } from "@/hooks/useInView";

const WA_LINK = "https://wa.me/5569992216764?text=Oi%2C%20quero%20agendar%20e%20ganhar%20desconto";

const CtaBanner = () => {
  const { ref, visible } = useInView(0.2);

  return (
    <section className="py-6 sm:py-10 px-4" ref={ref}>
      <div
        className={`max-w-[1200px] mx-auto rounded-3xl px-6 sm:px-12 lg:px-16 py-10 sm:py-14 text-white relative overflow-hidden scroll-scale-in ${visible ? "visible" : ""}`}
        style={{ background: "linear-gradient(135deg, #1565C0 0%, #1E88E5 100%)" }}
      >
        <div className="relative z-10 max-w-xl mx-auto sm:mx-0 text-center sm:text-left">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold mb-3 leading-tight" style={{ fontFamily: "'Baloo 2', cursive" }}>
            Agende hoje e ganhe 10% off no próximo serviço
          </h2>
          <p className="text-xs sm:text-sm leading-relaxed mb-6 text-white/75">
            Clientes que agendam pelo WhatsApp recebem desconto na próxima visita.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center sm:justify-start">
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl px-6 py-3.5 font-extrabold text-sm transition-all duration-200 hover:-translate-y-0.5 active:scale-95 inline-flex items-center justify-center gap-2"
              style={{ background: "#FFA000", color: "#fff", boxShadow: "0 6px 20px rgba(255,160,0,0.4)" }}
            >
              <Calendar className="w-4 h-4" />
              AGENDAR AGORA
            </a>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl px-5 py-3 font-bold text-sm text-white/80 transition-all duration-200 inline-flex items-center justify-center gap-2 hover:text-white border border-white/25"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp
            </a>
          </div>
        </div>

        <PawPrint className="absolute -right-6 -bottom-6 w-40 h-40 text-white/5 rotate-[-15deg]" />
        <div className="absolute right-12 top-6 w-24 h-24 rounded-full bg-white/5" />
      </div>
    </section>
  );
};

export default CtaBanner;
