import { useInView } from "@/hooks/useInView";

const tips = [
  { emoji: "🐕", title: "Banho ideal: de quanto em quanto tempo?", desc: "Cães de pelo curto podem tomar banho a cada 15 dias. Já os de pelo longo, semanalmente." },
  { emoji: "🐱", title: "Gatos e a areia: como escolher?", desc: "Areia granulada absorve melhor e reduz odor. Troque completamente a cada 5 dias." },
  { emoji: "🦴", title: "Ração seca vs úmida: qual a melhor?", desc: "A combinação das duas é o ideal. Seca limpa os dentes, úmida hidrata." },
  { emoji: "✨", title: "5 sinais de que seu pet está feliz", desc: "Rabo abanando, orelhas relaxadas, brincadeiras frequentes, apetite normal e sono tranquilo." },
  { emoji: "❤️", title: "Adoção responsável", desc: "Visite abrigos, conheça o animal antes, prepare sua casa e leve ao veterinário na primeira semana." },
  { emoji: "💉", title: "Vacinação em dia", desc: "Filhotes: V8/V10 a partir de 45 dias. Adultos: reforço anual. Antirrábica: obrigatória." },
];

const PetTips = () => {
  const { ref, visible } = useInView(0.1);

  return (
    <section className="py-16 md:py-20 px-4 bg-white" ref={ref}>
      <div className="max-w-[1100px] mx-auto">
        <h2 className="text-2xl md:text-[2rem] font-extrabold mb-10" style={{ fontFamily: "'Baloo 2', cursive", color: "#333" }}>
          💡 Dicas rápidas
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {tips.map((t, idx) => (
            <div
              key={t.title}
              className={`rounded-2xl p-5 cursor-pointer transition-all duration-300 border bg-white ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
              style={{ transitionDelay: `${idx * 60}ms`, borderColor: "var(--pet-gray-border)" }}
              onMouseEnter={(e) => { e.currentTarget.style.background = "var(--pet-bg-alt)"; e.currentTarget.style.transform = "translateY(-3px)"; e.currentTarget.style.boxShadow = "0 8px 24px rgba(0,0,0,0.06)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = "#fff"; e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "none"; }}
            >
              <span className="text-2xl mb-3 block">{t.emoji}</span>
              <h3 className="text-sm font-extrabold mb-1.5" style={{ fontFamily: "'Baloo 2', cursive", color: "#333" }}>
                {t.title}
              </h3>
              <p className="text-[13px] leading-relaxed" style={{ color: "var(--pet-gray)" }}>{t.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PetTips;
