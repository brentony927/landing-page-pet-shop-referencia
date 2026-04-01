import { Check } from "lucide-react";
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
    <section id="sobre" className="py-12 bg-primary/5 overflow-hidden" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className={`transition-all duration-500 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <div className="border-l-[6px] border-primary pl-6 mb-8">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground leading-tight">
                12 anos no bairro. Seu vizinho já trouxe o pet dele.
              </h2>
            </div>

            <p className="text-muted-foreground text-base mb-6 leading-relaxed">
              Aqui não tem franquia nem manual de rede grande. É uma equipe pequena que conhece cada pet pelo nome. O Thor tem medo de secador? A gente sabe. A Luna só come ração de salmão? Tá anotado.
            </p>

            <blockquote className="border-l-4 border-secondary pl-5 my-8 italic text-foreground/80 text-lg">
              "Comecei sozinho, com um balde e uma mangueira. Hoje tenho equipe, mas ainda sou eu que abro a porta todo dia."
              <span className="block text-sm font-bold text-primary mt-2 not-italic">— Dono do Patinhas & Cia</span>
            </blockquote>

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

            <a href="https://wa.me/5569992216764" className="inline-block bg-primary text-primary-foreground font-bold px-8 py-3 rounded-lg text-sm uppercase tracking-wider shadow-md hover:-translate-y-1 glow-orange transition-all duration-200">
              Fale com a gente →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
