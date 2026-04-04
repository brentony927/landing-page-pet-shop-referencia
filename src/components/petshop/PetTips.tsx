import { Dog, Cat, Bone, Sparkles, Heart, Shield } from "lucide-react";

const tips = [
  {
    icon: Dog,
    title: "Banho ideal: de quanto em quanto tempo?",
    desc: "Cães de pelo curto podem tomar banho a cada 15 dias. Já os de pelo longo, semanalmente. Sempre com produtos específicos.",
    tag: "Cuidados",
  },
  {
    icon: Cat,
    title: "Gatos e a areia: como escolher?",
    desc: "Areia higiênica granulada absorve melhor e reduz odor. Troque completamente a cada 5 dias.",
    tag: "Dica",
  },
  {
    icon: Bone,
    title: "Ração seca vs úmida: qual a melhor?",
    desc: "A combinação das duas é o ideal. Ração seca ajuda na limpeza dos dentes, e a úmida garante hidratação.",
    tag: "Alimentação",
  },
  {
    icon: Sparkles,
    title: "5 sinais de que seu pet está feliz",
    desc: "Rabo abanando, orelhas relaxadas, brincadeiras frequentes, apetite normal e sono tranquilo.",
    tag: "Bem-estar",
  },
  {
    icon: Heart,
    title: "Adoção responsável: por onde começar?",
    desc: "Visite abrigos, conheça o animal antes, prepare sua casa e leve ao veterinário na primeira semana.",
    tag: "Adoção",
  },
  {
    icon: Shield,
    title: "Vacinação em dia: calendário essencial",
    desc: "Filhotes: V8/V10 a partir de 45 dias. Adultos: reforço anual. Antirrábica: obrigatória a partir dos 4 meses.",
    tag: "Saúde",
  },
];

const PetTips = () => {
  return (
    <section className="py-16 md:py-20 px-4 bg-white">
      <div className="max-w-[1100px] mx-auto">
        <p className="text-xs uppercase tracking-widest font-medium mb-3" style={{ color: "var(--verde)" }}>
          Dicas & Conteúdo
        </p>
        <h2 className="text-2xl md:text-[2.4rem] font-black mb-2 leading-tight" style={{ fontFamily: "'Fraunces', Georgia, serif", color: "var(--txt)" }}>
          Cuidar bem começa com informação
        </h2>
        <p className="text-base mb-12" style={{ color: "var(--txt2)" }}>
          Dicas práticas pra quem ama seu pet de verdade.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {tips.map((t) => {
            const Icon = t.icon;
            return (
              <div
                key={t.title}
                className="group rounded-xl p-6 bg-white cursor-pointer transition-all duration-200 hover:-translate-y-1"
                style={{ border: "1px solid var(--borda)" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "var(--verde)";
                  e.currentTarget.style.boxShadow = "0 8px 24px rgba(22,163,74,0.1)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "var(--borda)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-lg flex items-center justify-center" style={{ background: "var(--verde-bg)" }}>
                    <Icon className="w-4.5 h-4.5" style={{ color: "var(--verde)" }} />
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full"
                    style={{ background: "var(--amarelo)", color: "var(--amarelo-texto)" }}
                  >
                    {t.tag}
                  </span>
                </div>
                <h3 className="text-base font-bold mb-2" style={{ fontFamily: "'Fraunces', Georgia, serif", color: "var(--txt)" }}>
                  {t.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--txt2)" }}>{t.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PetTips;
