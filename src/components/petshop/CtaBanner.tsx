import { Calendar, MessageCircle } from "lucide-react";
import { useInView } from "@/hooks/useInView";

const WA_LINK = "https://wa.me/5569992216764?text=Oi%2C%20quero%20agendar%20e%20ganhar%20desconto";

const CtaBanner = () => {
  const { ref, visible } = useInView(0.3);

  return (
    <section className="py-10 sm:py-14 px-4" ref={ref}>
      <div
        className={`max-w-[1200px] mx-auto rounded-2xl px-6 sm:px-12 md:px-16 py-10 sm:py-14 text-white relative overflow-hidden scroll-scale-in ${visible ? "visible" : ""}`}
        style={{ background: "var(--pet-blue)" }}
      >
        <div className="relative z-10 max-w-xl mx-auto sm:mx-0">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold mb-3 leading-tight text-center sm:text-left" style={{ fontFamily: "'Baloo 2', cursive" }}>
            Agende hoje e ganhe 10% off no próximo serviço 🐾
          </h2>
          <p className="text-xs sm:text-sm leading-relaxed mb-6 text-white/70 text-center sm:text-left">
            Clientes que agendam pelo WhatsApp recebem desconto na próxima visita.
          </p>

          <div className="flex flex-wrap gap-3 justify-center sm:justify-start">
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl px-6 py-3 font-extrabold text-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl inline-flex items-center gap-2"
              style={{ background: "#FFA000", color: "#fff", boxShadow: "0 4px 14px rgba(255,160,0,0.4)" }}
            >
              <Calendar className="w-4 h-4" />
              AGENDAR AGORA
            </a>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl px-5 py-3 font-bold text-sm text-white/70 transition-all duration-200 inline-flex items-center gap-2 hover:text-white border border-white/20"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp
            </a>
          </div>
        </div>

        <div className="absolute -right-16 -bottom-16 w-56 h-56 rounded-full" style={{ background: "rgba(255,160,0,0.1)" }} />
        <div className="absolute right-8 top-6 w-24 h-24 rounded-full" style={{ background: "rgba(255,255,255,0.05)" }} />
      </div>
    </section>
  );
};

export default CtaBanner;
