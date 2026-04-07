import { Check } from "lucide-react";
import { useInView } from "@/hooks/useInView";

const benefits = [
  "Mais de 10 anos cuidando de pets no bairro",
  "Equipe que trata seu bicho como da família",
  "Atendimento que você não encontra em rede grande",
  "Entrega rápida na sua porta, no mesmo dia",
];

const timeline = [
  { year: "2013", text: "Começamos com 1 mesa de banho e muito sabão 🧼" },
  { year: "2016", text: "Primeiro funcionário contratado 👋" },
  { year: "2019", text: "Expandimos para entrega de ração no bairro" },
  { year: "2024", text: "500+ pets atendidos por ano, nota 5.0 no Google" },
];

const AboutUs = () => {
  const { ref, visible } = useInView(0.2);

  return (
    <section id="sobre" className="py-16 md:py-20 px-4 bg-white" ref={ref}>
      <div className={`max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <div>
          <h2 className="text-2xl md:text-[2rem] font-extrabold mb-4 leading-tight" style={{ fontFamily: "'Baloo 2', cursive", color: "#333" }}>
            Começou com um balde e uma mangueira.
          </h2>
          <div style={{ borderLeft: "4px solid var(--pet-green)", paddingLeft: "1.5rem" }}>
            <p className="text-base leading-relaxed mb-8" style={{ color: "var(--pet-gray)" }}>
              Aqui não tem franquia nem manual de rede grande. É uma equipe pequena que conhece cada pet pelo nome. O Thor tem medo de secador? A gente sabe. A Luna só come ração de salmão? Tá anotado.
            </p>
          </div>

          <div className="relative rounded-2xl p-7 mb-8" style={{ background: "var(--pet-yellow-light)", border: "1px dashed var(--pet-yellow)" }}>
            <span className="absolute -top-3 left-5 text-6xl leading-none" style={{ fontFamily: "Georgia, serif", color: "var(--pet-orange)", opacity: 0.4 }}>"</span>
            <p className="text-base leading-relaxed" style={{ color: "#333" }}>
              Comecei sozinho, com um balde e uma mangueira. Hoje tenho equipe, mas ainda sou eu que abro a porta todo dia.
            </p>
            <p className="text-sm font-extrabold mt-3" style={{ color: "var(--pet-orange)" }}>— Dono do Demonstração</p>
          </div>

          <ul className="space-y-3">
            {benefits.map((b) => (
              <li key={b} className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{ background: "var(--pet-green)" }}>
                  <Check className="w-3 h-3 text-white" />
                </div>
                <span className="text-sm font-medium" style={{ color: "var(--pet-gray)" }}>{b}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="pl-8 relative" style={{ borderLeft: "3px solid var(--pet-green-light)" }}>
          {timeline.map((item) => (
            <div key={item.year} className="relative mb-8 last:mb-0 pl-6">
              <div className="absolute -left-[1.85rem] top-0.5 w-5 h-5 rounded-full border-3 bg-white" style={{ borderColor: "var(--pet-green)", borderWidth: "3px" }} />
              <p className="text-lg font-extrabold" style={{ fontFamily: "'Baloo 2', cursive", color: "var(--pet-green-dark)" }}>{item.year}</p>
              <p className="text-sm mt-1" style={{ color: "var(--pet-gray)" }}>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
