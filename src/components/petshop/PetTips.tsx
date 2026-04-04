import { Dog, Cat, Bone, Sparkles, Heart, Shield } from "lucide-react";

const tips = [
  {
    icon: Dog,
    title: "Banho ideal: de quanto em quanto tempo?",
    desc: "Cães de pelo curto podem tomar banho a cada 15 dias. Já os de pelo longo, semanalmente.",
  },
  {
    icon: Cat,
    title: "Gatos e a areia: como escolher?",
    desc: "Areia granulada absorve melhor e reduz odor. Troque completamente a cada 5 dias.",
  },
  {
    icon: Bone,
    title: "Ração seca vs úmida: qual a melhor?",
    desc: "A combinação das duas é o ideal. Seca limpa os dentes, úmida hidrata.",
  },
  {
    icon: Sparkles,
    title: "5 sinais de que seu pet está feliz",
    desc: "Rabo abanando, orelhas relaxadas, brincadeiras frequentes, apetite normal e sono tranquilo.",
  },
  {
    icon: Heart,
    title: "Adoção responsável",
    desc: "Visite abrigos, conheça o animal antes, prepare sua casa e leve ao veterinário na primeira semana.",
  },
  {
    icon: Shield,
    title: "Vacinação em dia",
    desc: "Filhotes: V8/V10 a partir de 45 dias. Adultos: reforço anual. Antirrábica: obrigatória.",
  },
];

const PetTips = () => {
  return (
    <section className="py-14 px-4 bg-white">
      <div className="max-w-[1100px] mx-auto">
        <h2 className="text-2xl md:text-3xl font-black mb-8" style={{ fontFamily: "'Fraunces', Georgia, serif", color: "#1c1917" }}>
          Dicas rápidas
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {tips.map((t) => {
            const Icon = t.icon;
            return (
              <div
                key={t.title}
                className="rounded-xl p-6 bg-white cursor-pointer transition-all duration-200"
                style={{ border: "1px solid #e7e5e4" }}
                onMouseEnter={(e) => { e.currentTarget.style.background = "#fafaf9"; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = "#fff"; }}
              >
                <Icon className="w-5 h-5 mb-3" style={{ color: "#78716c" }} />
                <h3 className="text-base font-bold mb-2" style={{ fontFamily: "'Fraunces', Georgia, serif", color: "#1c1917" }}>
                  {t.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "#78716c" }}>{t.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PetTips;
