import { Check } from "lucide-react";
import { useInView } from "@/hooks/useInView";

const benefits = [
  "Mais de 10 anos cuidando de pets no bairro",
  "Equipe que trata seu bicho como da família",
  "Atendimento que você não encontra em rede grande",
  "Entrega rápida na sua porta, no mesmo dia",
];

const timeline = [
  { year: "2013", text: "Começamos com 1 mesa de banho e muito sabão" },
  { year: "2016", text: "Primeiro funcionário contratado" },
  { year: "2019", text: "Expandimos para entrega de ração no bairro" },
  { year: "2024", text: "500+ pets atendidos por ano, nota 5.0 no Google" },
];

const AboutUs = () => {
  const { ref, visible } = useInView(0.2);

  return (
    <section id="sobre" className="py-16 md:py-20 px-4 bg-white" ref={ref}>
      <div className={`max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <div>
          <h2
            className="text-2xl md:text-[2rem] font-black mb-4 leading-tight"
            style={{ fontFamily: "'Playfair Display', Georgia, serif", color: "var(--txt-primary)" }}
          >
            Começou com um balde e uma mangueira.
          </h2>
          <div style={{ borderLeft: "3px solid var(--forest)", paddingLeft: "1.5rem" }}>
            <p className="text-base leading-relaxed mb-8" style={{ color: "var(--txt-secondary)" }}>
              Aqui não tem franquia nem manual de rede grande. É uma equipe pequena que conhece cada pet pelo nome. O Thor tem medo de secador? A gente sabe. A Luna só come ração de salmão? Tá anotado.
            </p>
          </div>

          <div
            className="relative rounded-xl p-7 mb-8" style={{ background: "var(--cream)" }}
          >
            <span
              className="absolute -top-3 left-5 text-6xl leading-none"
              style={{ fontFamily: "Georgia, serif", color: "var(--amber)", opacity: 0.3 }}
            >
              "
            </span>
            <p className="text-base leading-relaxed" style={{ color: "var(--txt-primary)" }}>
              Comecei sozinho, com um balde e uma mangueira. Hoje tenho equipe, mas ainda sou eu que abro a porta todo dia.
            </p>
            <p className="text-sm font-bold mt-3" style={{ color: "var(--amber)" }}>
              — Dono do Patinhas & Cia
            </p>
          </div>

          <ul className="space-y-3">
            {benefits.map((b) => (
              <li key={b} className="flex items-start gap-3">
                <Check className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: "var(--forest)" }} />
                <span className="text-sm" style={{ color: "var(--txt-secondary)" }}>{b}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Timeline vertical */}
        <div className="pl-8 relative" style={{ borderLeft: "2px solid var(--forest-light)" }}>
          {timeline.map((item) => (
            <div key={item.year} className="relative mb-8 last:mb-0 pl-6">
              <div
                className="absolute -left-[1.85rem] top-0.5 w-4 h-4 rounded-full border-2 bg-white"
                style={{ borderColor: "var(--amber)", backgroundColor: "white" }}
              />
              <p className="text-lg font-black" style={{ fontFamily: "'Playfair Display', Georgia, serif", color: "var(--forest)" }}>
                {item.year}
              </p>
              <p className="text-sm mt-1" style={{ color: "var(--txt-secondary)" }}>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
