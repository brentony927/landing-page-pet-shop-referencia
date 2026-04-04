import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Qual o horário de funcionamento?",
    a: "Funcionamos de segunda a sexta das 8h às 19h, e aos sábados das 8h às 16h. Domingos e feriados estamos fechados.",
  },
  {
    q: "Preciso agendar o banho com antecedência?",
    a: "Recomendamos agendar pelo WhatsApp pelo menos 1 dia antes, especialmente aos sábados. Mas aceitamos encaixes quando possível.",
  },
  {
    q: "Vocês fazem entrega de ração?",
    a: "Sim! Entregamos no bairro no mesmo dia, sem valor mínimo. Basta pedir pelo WhatsApp.",
  },
  {
    q: "Meu pet tem medo de secador, vocês conseguem atender?",
    a: "Claro! Conhecemos cada pet pelo nome e suas particularidades. Usamos secagem natural ou com baixa potência quando necessário.",
  },
  {
    q: "Aceitam cartão de crédito e Pix?",
    a: "Aceitamos Pix, cartão de débito e crédito (todas as bandeiras). Também aceitamos dinheiro.",
  },
  {
    q: "Têm estacionamento?",
    a: "Temos estacionamento gratuito na frente da loja. Fácil de acessar e seguro.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-16 md:py-20 px-4" style={{ background: "#fafaf9" }}>
      <div className="max-w-[800px] mx-auto">
        <h2 className="text-2xl md:text-[2.4rem] font-black mb-10 leading-tight" style={{ fontFamily: "'Fraunces', Georgia, serif", color: "#1c1917" }}>
          Perguntas frequentes
        </h2>

        <div className="space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className="rounded-xl bg-white overflow-hidden transition-all duration-200"
                style={{ border: `1px solid ${isOpen ? "#16a34a" : "#e7e5e4"}` }}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex items-center justify-between p-5 text-left"
                >
                  <span className="text-[15px] font-semibold pr-4" style={{ color: "#1c1917" }}>
                    {faq.q}
                  </span>
                  <ChevronDown
                    className="w-5 h-5 flex-shrink-0 transition-transform duration-200"
                    style={{
                      color: isOpen ? "#16a34a" : "#78716c",
                      transform: isOpen ? "rotate(180deg)" : "rotate(0)",
                    }}
                  />
                </button>
                <div
                  className="overflow-hidden transition-all duration-300"
                  style={{ maxHeight: isOpen ? 200 : 0, opacity: isOpen ? 1 : 0 }}
                >
                  <p className="px-5 pb-5 text-sm leading-relaxed" style={{ color: "#78716c" }}>
                    {faq.a}
                  </p>
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
