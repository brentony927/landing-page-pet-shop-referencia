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
    <section className="py-16 md:py-20 px-4" style={{ background: "var(--pet-bg)" }} ref={ref}>
      <div className={`max-w-[800px] mx-auto transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <h2 className="text-2xl md:text-[2rem] font-extrabold mb-8" style={{ fontFamily: "'Baloo 2', cursive", color: "#333" }}>
          ❓ Perguntas frequentes
        </h2>

        <div className="space-y-2">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={i} className="rounded-3xl bg-white overflow-hidden transition-all duration-200 border" style={{ borderColor: isOpen ? "var(--pet-green)" : "var(--pet-gray-border)", boxShadow: "0 4px 16px rgba(0,0,0,0.04)" }}>
                <button onClick={() => setOpenIndex(isOpen ? null : i)} className="w-full flex items-center justify-between p-5 text-left group">
                  <span className="text-sm font-bold pr-4" style={{ color: "#333" }}>{faq.q}</span>
                  <ChevronDown
                    className="w-4 h-4 flex-shrink-0 transition-transform duration-200"
                    style={{ color: isOpen ? "var(--pet-green)" : "var(--pet-gray-light)", transform: isOpen ? "rotate(180deg)" : "rotate(0)" }}
                  />
                </button>
                <div className="overflow-hidden transition-all duration-300" style={{ maxHeight: isOpen ? 200 : 0, opacity: isOpen ? 1 : 0 }}>
                  <p className="px-5 pb-5 text-sm leading-relaxed" style={{ color: "var(--pet-gray)" }}>{faq.a}</p>
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
