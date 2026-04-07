import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { useInView } from "@/hooks/useInView";

const faqs = [
  { q: "Preciso agendar com antecedência?", a: "Recomendamos agendar pelo WhatsApp pelo menos 1 dia antes, especialmente aos sábados. Mas aceitamos encaixes quando possível." },
  { q: "Aceitam Pix e cartão?", a: "Aceitamos Pix, cartão de débito e crédito (todas as bandeiras). Também aceitamos dinheiro." },
  { q: "Vocês entregam ração?", a: "Sim! Entregamos no bairro no mesmo dia, sem valor mínimo. Basta pedir pelo WhatsApp." },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const { ref, visible } = useInView(0.1);

  return (
    <section className="py-14 sm:py-20 px-4 bg-white" ref={ref}>
      <div className={`max-w-[800px] mx-auto scroll-fade-up ${visible ? "visible" : ""}`}>
        <div className="text-center mb-8 sm:mb-10">
          <span className="inline-block text-[11px] font-bold uppercase tracking-widest mb-3 px-4 py-1.5 rounded-full" style={{ background: "var(--pet-blue-light)", color: "var(--pet-blue)" }}>
            Dúvidas
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold" style={{ fontFamily: "'Baloo 2', cursive", color: "var(--pet-blue-dark)" }}>
            Perguntas frequentes
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={i} className="rounded-2xl bg-white overflow-hidden transition-all duration-200" style={{ border: `1px solid ${isOpen ? "var(--pet-orange)" : "var(--pet-gray-border)"}`, boxShadow: isOpen ? "0 4px 20px rgba(245,133,31,0.1)" : "none" }}>
                <button onClick={() => setOpenIndex(isOpen ? null : i)} className="w-full flex items-center justify-between p-4 sm:p-5 text-left">
                  <span className="text-sm font-bold pr-4" style={{ color: "#333" }}>{faq.q}</span>
                  <ChevronDown className="w-4 h-4 flex-shrink-0 transition-transform duration-200" style={{ color: isOpen ? "var(--pet-orange)" : "var(--pet-gray-light)", transform: isOpen ? "rotate(180deg)" : "rotate(0)" }} />
                </button>
                <div className="overflow-hidden transition-all duration-300" style={{ maxHeight: isOpen ? 200 : 0, opacity: isOpen ? 1 : 0 }}>
                  <p className="px-4 sm:px-5 pb-4 sm:pb-5 text-sm leading-relaxed" style={{ color: "var(--pet-gray)" }}>{faq.a}</p>
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
