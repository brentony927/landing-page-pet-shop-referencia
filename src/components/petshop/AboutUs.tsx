import { Check, Heart, PawPrint } from "lucide-react";
import Icon3D from "./Icon3D";
import ImagePlaceholder from "./ImagePlaceholder";
import { useInView } from "@/hooks/useInView";

const benefits = [
  "Mais de 10 anos cuidando de pets",
  "Equipe que trata seu bicho como da família",
  "Produtos escolhidos a dedo",
  "Atendimento que você não encontra em rede grande",
  "Entrega rápida na sua porta",
];

const AboutUs = () => {
  const { ref, visible } = useInView(0.2);

  return (
    <section id="sobre" className="py-16 bg-primary/8 overflow-hidden" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-center max-w-5xl mx-auto">
          <div className={`lg:col-span-2 flex items-center justify-center transition-all duration-500 ${visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-16"}`}>
            <div className="relative">
              <ImagePlaceholder className="w-56 h-56 md:w-72 md:h-72" variant="orange" />
              <div className="absolute -bottom-4 -right-4 animate-bounce-small">
                <Icon3D icon={Heart} size="md" color="orange" animate="none" />
              </div>
              <div className="absolute -top-4 -left-4 animate-float">
                <Icon3D icon={PawPrint} size="sm" color="green" animate="none" />
              </div>
            </div>
          </div>

          <div className={`lg:col-span-3 transition-all duration-500 delay-200 ${visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-16"}`}>
            <div className="border-l-4 border-primary pl-4 mb-6">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground leading-tight">
                A gente cuida do seu pet como se fosse nosso
              </h2>
            </div>
            <p className="text-muted-foreground text-base mb-8 leading-relaxed">
              Aqui não é rede, não é franquia — é gente que ama bicho. Cada banho, cada consulta, cada ração que a gente indica tem carinho de verdade por trás. Seu pet percebe, pode ter certeza.
            </p>

            <ul className="space-y-3 mb-8">
              {benefits.map((b, i) => (
                <li
                  key={b}
                  className={`flex items-center gap-3 transition-all duration-300 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
                  style={{ transitionDelay: `${400 + i * 80}ms` }}
                >
                  <div className="w-6 h-6 rounded-md bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-foreground font-semibold text-sm">{b}</span>
                </li>
              ))}
            </ul>

            <button className="bg-primary text-primary-foreground font-bold px-8 py-3 rounded-lg text-sm uppercase tracking-wider shadow-md hover:-translate-y-1 glow-orange transition-all duration-200">
              Conhecer mais →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
