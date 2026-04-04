import { Check } from "lucide-react";

const benefits = [
  "Mais de 10 anos cuidando de pets no bairro",
  "Equipe que trata seu bicho como da família",
  "Atendimento que você não encontra em rede grande",
  "Entrega rápida na sua porta, no mesmo dia",
];

const AboutUs = () => {
  return (
    <section id="sobre" className="py-16 md:py-20 px-4 bg-white">
      <div className="max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
        <div>
          <h2
            className="text-2xl md:text-[2.4rem] font-black mb-4 leading-tight"
            style={{ fontFamily: "'Fraunces', Georgia, serif", color: "#1c1917" }}
          >
            Começou com um balde e uma mangueira.
          </h2>
          <p className="text-base leading-relaxed mb-8" style={{ color: "#57534e" }}>
            Aqui não tem franquia nem manual de rede grande. É uma equipe pequena que conhece cada pet pelo nome. O Thor tem medo de secador? A gente sabe. A Luna só come ração de salmão? Tá anotado.
          </p>

          <div
            className="relative rounded-xl p-7 mb-8 bg-white"
            style={{ border: "1.5px solid #e7e5e4" }}
          >
            <span
              className="absolute -top-4 left-5 text-7xl leading-none opacity-40"
              style={{ fontFamily: "Georgia, serif", color: "#f97316" }}
            >
              "
            </span>
            <p className="text-base leading-relaxed" style={{ color: "#1c1917" }}>
              Comecei sozinho, com um balde e uma mangueira. Hoje tenho equipe, mas ainda sou eu que abro a porta todo dia.
            </p>
            <p className="text-sm font-bold mt-3" style={{ color: "#f97316" }}>
              — Dono do Patinhas & Cia
            </p>
          </div>

          <ul className="space-y-3">
            {benefits.map((b) => (
              <li key={b} className="flex items-start gap-3">
                <Check className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: "#16a34a" }} />
                <span className="text-[15px]" style={{ color: "#57534e" }}>{b}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="col-span-2 rounded-2xl p-7" style={{ background: "#f0fdf4" }}>
            <span className="text-4xl font-black block mb-1" style={{ fontFamily: "'Fraunces', Georgia, serif", color: "#16a34a" }}>
              12 anos
            </span>
            <p className="text-sm" style={{ color: "#57534e" }}>
              servindo o bairro com dedicação e amor
            </p>
          </div>
          <div className="rounded-2xl p-7" style={{ background: "#fff7ed" }}>
            <span className="text-4xl font-black block mb-1" style={{ fontFamily: "'Fraunces', Georgia, serif", color: "#f97316" }}>
              500+
            </span>
            <p className="text-sm" style={{ color: "#57534e" }}>
              pets atendidos
            </p>
          </div>
          <div className="rounded-2xl p-7" style={{ background: "#f5f5f4" }}>
            <span className="text-4xl font-black block mb-1" style={{ fontFamily: "'Fraunces', Georgia, serif", color: "#1c1917" }}>
              5 ★
            </span>
            <p className="text-sm" style={{ color: "#57534e" }}>
              avaliação média
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
