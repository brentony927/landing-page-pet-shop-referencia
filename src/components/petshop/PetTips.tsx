import { Dog, Cat, Bone, Sparkles, Heart, Shield } from "lucide-react";
import { useInView } from "@/hooks/useInView";

const tips = [
  { icon: Dog, title: "Banho ideal: de quanto em quanto tempo?", desc: "Cães de pelo curto podem tomar banho a cada 15 dias. Já os de pelo longo, semanalmente." },
  { icon: Cat, title: "Gatos e a areia: como escolher?", desc: "Areia granulada absorve melhor e reduz odor. Troque completamente a cada 5 dias." },
  { icon: Bone, title: "Ração seca vs úmida: qual a melhor?", desc: "A combinação das duas é o ideal. Seca limpa os dentes, úmida hidrata." },
  { icon: Sparkles, title: "5 sinais de que seu pet está feliz", desc: "Rabo abanando, orelhas relaxadas, brincadeiras frequentes, apetite normal e sono tranquilo." },
  { icon: Heart, title: "Adoção responsável", desc: "Visite abrigos, conheça o animal antes, prepare sua casa e leve ao veterinário na primeira semana." },
  { icon: Shield, title: "Vacinação em dia", desc: "Filhotes: V8/V10 a partir de 45 dias. Adultos: reforço anual. Antirrábica: obrigatória." },
];

const PetTips = () => {
  const { ref, visible } = useInView(0.1);

  return (
    <section className="py-16 md:py-20 px-4 bg-white" ref={ref}>
      <div className="max-w-[1100px] mx-auto">
        <h2 className="text-2xl md:text-[2rem] font-black mb-10" style={{ fontFamily: "'Playfair Display', Georgia, serif", color: "var(--txt-primary)" }}>
          Dicas rápidas
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {tips.map((t, idx) => {
            const Icon = t.icon;
            return (
              <div
                key={t.title}
                className={`rounded-xl p-5 cursor-pointer transition-all duration-300 border bg-white ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
                style={{ transitionDelay: `${idx * 60}ms`, borderColor: "var(--border)" }}
                onMouseEnter={(e) => { e.currentTarget.style.background = "var(--cream)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = "#fff"; }}
              >
                <Icon className="w-4 h-4 mb-3" style={{ color: "var(--txt-muted)" }} />
                <h3 className="text-sm font-bold mb-1.5" style={{ color: "var(--txt-primary)" }}>
                  {t.title}
                </h3>
                <p className="text-[13px] leading-relaxed" style={{ color: "var(--txt-secondary)" }}>{t.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PetTips;
