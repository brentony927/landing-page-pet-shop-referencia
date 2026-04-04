import { Check } from "lucide-react";

const benefits = [
  "Mais de 10 anos cuidando de pets no bairro",
  "Equipe que trata seu bicho como da família",
  "Atendimento que você não encontra em rede grande",
  "Entrega rápida na sua porta, no mesmo dia",
];

const AboutUs = () => {
  return (
    <section id="sobre" className="py-16 md:py-20 px-4" style={{ background: "#fff8f0" }}>
      <div className="max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
        <div>
          <p className="text-xs uppercase tracking-widest font-medium mb-3" style={{ color: "var(--verde)" }}>
            Nossa história
          </p>
          <h2
            className="text-2xl md:text-[2.4rem] font-black mb-4 leading-tight"
            style={{ fontFamily: "'Fraunces', Georgia, serif", color: "var(--txt)" }}
          >
            Começou com um balde e uma mangueira.
          </h2>
          <p className="text-base leading-relaxed mb-8" style={{ color: "var(--txt2)" }}>
            Aqui não tem franquia nem manual de rede grande. É uma equipe pequena que conhece cada pet pelo nome. O Thor tem medo de secador? A gente sabe. A Luna só come ração de salmão? Tá anotado.
          </p>

          <div
            className="relative rounded-xl p-7 mb-8"
            style={{ background: "var(--amarelo)", border: "1.5px solid var(--amarelo-borda)" }}
          >
            <span
              className="absolute -top-4 left-5 text-7xl leading-none opacity-70"
              style={{ fontFamily: "Georgia, serif", color: "var(--laranja)" }}
            >
              "
            </span>
            <p className="text-base leading-relaxed" style={{ color: "var(--txt)" }}>
              Comecei sozinho, com um balde e uma mangueira. Hoje tenho equipe, mas ainda sou eu que abro a porta todo dia.
            </p>
            <p className="text-sm font-bold mt-3" style={{ color: "#92400e" }}>
              — Dono do Patinhas & Cia
            </p>
          </div>

          <ul className="space-y-3">
            {benefits.map((b) => (
              <li key={b} className="flex items-start gap-3">
                <Check className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: "var(--verde)" }} />
                <span className="text-[15px]" style={{ color: "var(--txt2)" }}>{b}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="col-span-2 rounded-2xl p-7" style={{ background: "var(--verde-escuro)" }}>
            <span className="text-4xl font-black block mb-1" style={{ fontFamily: "'Fraunces', Georgia, serif", color: "var(--amarelo)" }}>
              12 anos
            </span>
            <p className="text-sm" style={{ color: "rgba(255,255,255,0.8)" }}>
              servindo o bairro com dedicação e amor
            </p>
          </div>
          <div className="rounded-2xl p-7" style={{ background: "var(--laranja)" }}>
            <span className="text-4xl font-black block mb-1 text-white" style={{ fontFamily: "'Fraunces', Georgia, serif" }}>
              500+
            </span>
            <p className="text-sm" style={{ color: "rgba(255,255,255,0.85)" }}>
              pets atendidos
            </p>
          </div>
          <div className="rounded-2xl p-7" style={{ background: "var(--verde-claro)" }}>
            <span className="text-4xl font-black block mb-1" style={{ fontFamily: "'Fraunces', Georgia, serif", color: "var(--verde-escuro)" }}>
              5 ★
            </span>
            <p className="text-sm" style={{ color: "var(--txt2)" }}>
              avaliação média
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
