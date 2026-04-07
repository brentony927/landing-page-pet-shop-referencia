import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { useInView } from "@/hooks/useInView";

const faqs = [
  { q: "Preciso agendar com antecedência?", a: "Recomendamos agendar pelo WhatsApp pelo menos 1 dia antes, especialmente aos sábados. Mas aceitamos encaixes quando possível." },
  { q: "Aceitam Pix e cartão?", a: "Aceitamos Pix, cartão de débito e crédito (todas as bandeiras). Também aceitamos dinheiro." },
  { q: "Vocês entregam ração?", a: "Sim! Entregamos no bairro no mesmo dia, sem valor mínimo. Basta pedir pelo WhatsApp." },
];

const FAQ = () => {
  const [open, setOpen] = useState<number | null>(0);
  const { ref, visible } = useInView(0.1);

  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 bg-white" ref={ref}>
      <div className={`max-w-[650px] mx-auto scroll-fade-up ${visible ? "visible" : ""}`}>
        <div className="text-center mb-6 sm:mb-8">
          <span className="inline-block text-[10px] font-extrabold uppercase tracking-[0.15em] mb-2 px-4 py-1.5 rounded-full" style={{ background: "#E3F2FD", color: "#1E88E5" }}>Dúvidas</span>
          <h2 className="text-[22px] sm:text-3xl font-extrabold" style={{ fontFamily: "'Baloo 2', cursive", color: "#1a3a5c" }}>Perguntas frequentes</h2>
        </div>

        <div className="space-y-2.5">
          {faqs.map((f, i) => {
            const active = open === i;
            return (
              <div key={i} className="rounded-2xl overflow-hidden transition-all duration-300" style={{ background: active ? "#FFFAF5" : "#fff", border: `1.5px solid ${active ? "#F5851F" : "#f0f0f0"}`, boxShadow: active ? "0 4px 20px rgba(245,133,31,0.08)" : "0 1px 4px rgba(0,0,0,0.03)" }}>
                <button onClick={() => setOpen(active ? null : i)} className="w-full flex items-center gap-3 p-4 sm:p-5 text-left">
                  <HelpCircle className="w-4 h-4 flex-shrink-0" style={{ color: active ? "#F5851F" : "#ccc" }} />
                  <span className="flex-1 text-sm sm:text-[15px] font-bold" style={{ color: "#1a3a5c" }}>{f.q}</span>
                  <ChevronDown className="w-4 h-4 flex-shrink-0 transition-transform duration-300" style={{ color: active ? "#F5851F" : "#ccc", transform: active ? "rotate(180deg)" : "none" }} />
                </button>
                <div className="transition-all duration-300 overflow-hidden" style={{ maxHeight: active ? 180 : 0, opacity: active ? 1 : 0 }}>
                  <p className="px-4 sm:px-5 pb-4 sm:pb-5 pl-11 text-sm leading-relaxed" style={{ color: "#666" }}>{f.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
