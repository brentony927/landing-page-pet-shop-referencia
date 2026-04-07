import { Check } from "lucide-react";
import { useInView } from "@/hooks/useInView";

const benefits = [
  "Mais de 10 anos cuidando de pets no bairro",
  "Equipe que trata seu bicho como da família",
  "Atendimento que você não encontra em rede grande",
  "Entrega rápida na sua porta, no mesmo dia",
];

const AboutUs = () => {
  const { ref, visible } = useInView(0.2);

  return (
    <section id="sobre" className="py-16 md:py-20 px-4 bg-white" ref={ref}>
      <div className={`max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <div>
          <h2
            className="text-2xl md:text-[2rem] font-black mb-4 leading-tight"
            style={{ fontFamily: "'Playfair Display', Georgia, serif", color: "#1a1a1a" }}
          >
            Começou com um balde e uma mangueira.
          </h2>
          <div style={{ borderLeft: "3px solid #1b4332", paddingLeft: "1.5rem" }}>
            <p className="text-base leading-relaxed mb-8" style={{ color: "#6b6b6b" }}>
              Aqui não tem franquia nem manual de rede grande. É uma equipe pequena que conhece cada pet pelo nome. O Thor tem medo de secador? A gente sabe. A Luna só come ração de salmão? Tá anotado.
            </p>
          </div>

          <div
            className="relative rounded-xl p-7 mb-8" style={{ background: "#f9f6f1" }}
          >
            <span
              className="absolute -top-3 left-5 text-6xl leading-none"
              style={{ fontFamily: "Georgia, serif", color: "#e07b39", opacity: 0.3 }}
            >
              "
            </span>
            <p className="text-base leading-relaxed" style={{ color: "#1a1a1a" }}>
              Comecei sozinho, com um balde e uma mangueira. Hoje tenho equipe, mas ainda sou eu que abro a porta todo dia.
            </p>
            <p className="text-sm font-bold mt-3" style={{ color: "#e07b39" }}>
              — Dono do Patinhas & Cia
            </p>
          </div>

          <ul className="space-y-3">
            {benefits.map((b) => (
              <li key={b} className="flex items-start gap-3">
                <Check className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: "#1b4332" }} />
                <span className="text-sm" style={{ color: "#6b6b6b" }}>{b}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div className="col-span-2 rounded-xl p-6" style={{ background: "#d8f3dc" }}>
            <span className="text-3xl md:text-4xl font-black block mb-1" style={{ fontFamily: "'Playfair Display', Georgia, serif", color: "#1b4332" }}>
              12 anos
            </span>
            <p className="text-sm" style={{ color: "#6b6b6b" }}>no bairro</p>
          </div>
          <div className="rounded-xl p-6" style={{ background: "#fff7ed" }}>
            <span className="text-3xl md:text-4xl font-black block mb-1" style={{ fontFamily: "'Playfair Display', Georgia, serif", color: "#e07b39" }}>
              500+
            </span>
            <p className="text-sm" style={{ color: "#6b6b6b" }}>pets atendidos</p>
          </div>
          <div className="rounded-xl p-6" style={{ background: "#f9f6f1" }}>
            <span className="text-3xl md:text-4xl font-black block mb-1" style={{ fontFamily: "'Playfair Display', Georgia, serif", color: "#1a1a1a" }}>
              5 ★
            </span>
            <p className="text-sm" style={{ color: "#6b6b6b" }}>no Google</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
