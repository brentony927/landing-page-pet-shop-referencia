import { Gift, Calendar, MessageCircle } from "lucide-react";
import { useInView } from "@/hooks/useInView";

const CtaBanner = () => {
  const { ref, visible } = useInView(0.3);

  return (
    <section className="py-14 md:py-16 px-4" ref={ref}>
      <div
        className={`max-w-[1100px] mx-auto rounded-2xl px-8 md:px-16 py-12 md:py-16 text-white relative overflow-hidden transition-all duration-700 ${visible ? "opacity-100 scale-100" : "opacity-0 scale-[0.97]"}`}
        style={{
          background: "var(--forest)",
          backgroundImage: "radial-gradient(circle at 90% 10%, rgba(255,255,255,0.04) 0%, transparent 50%), radial-gradient(circle at 10% 90%, rgba(212,98,26,0.08) 0%, transparent 40%)",
        }}
      >
        <div className="relative z-10 max-w-xl">
          <span className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-semibold mb-5" style={{ background: "rgba(255,255,255,0.1)" }}>
            <Gift className="w-3.5 h-3.5" />
            Para clientes do bairro
          </span>

          <h2 className="text-2xl md:text-3xl font-black mb-3 leading-tight" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
            Agende hoje e ganhe 10% off no próximo serviço.
          </h2>

          <p className="text-sm leading-relaxed mb-8" style={{ color: "rgba(255,255,255,0.6)" }}>
            Clientes que agendam pelo WhatsApp recebem desconto na próxima visita.
          </p>

          <div className="flex flex-wrap gap-3">
            <a
              href="https://wa.me/5569992216764"
              className="rounded-lg px-6 py-3 font-bold text-sm text-white transition-all duration-200 hover:-translate-y-0.5 inline-flex items-center gap-2"
              style={{ background: "var(--amber)" }}
              onMouseEnter={(e) => e.currentTarget.style.background = "var(--amber-dark)"}
              onMouseLeave={(e) => e.currentTarget.style.background = "var(--amber)"}
            >
              <Calendar className="w-4 h-4" />
              AGENDAR AGORA
            </a>
            <a
              href="https://wa.me/5569992216764"
              className="rounded-lg px-6 py-3 font-semibold text-sm text-white/70 transition-all duration-200 inline-flex items-center gap-2 hover:text-white"
              style={{ border: "1px solid rgba(255,255,255,0.2)" }}
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp
            </a>
          </div>
        </div>

        <div className="absolute -right-20 -bottom-20 w-72 h-72 rounded-full" style={{ background: "rgba(255,255,255,0.03)" }} />
        <div className="absolute right-10 top-10 w-32 h-32 rounded-full" style={{ background: "rgba(255,255,255,0.02)" }} />
      </div>
    </section>
  );
};

export default CtaBanner;
