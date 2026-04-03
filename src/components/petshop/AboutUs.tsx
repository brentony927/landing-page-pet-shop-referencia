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
    <section id="sobre" className="py-12 bg-background overflow-hidden" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className={`transition-all duration-500 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <h2 className="text-3xl md:text-4xl font-black text-foreground leading-tight mb-8">
              12 anos no bairro. Seu vizinho já trouxe o pet dele.
            </h2>

            <p className="text-muted-foreground text-base mb-6 leading-relaxed">
              Aqui não tem franquia nem manual de rede grande. É uma equipe pequena que conhece cada pet pelo nome. O Thor tem medo de secador? A gente sabe. A Luna só come ração de salmão? Tá anotado.
            </p>

            {/* Blockquote com fundo amarelo quente */}
            <div className="relative bg-accent/30 border border-accent rounded-lg p-8 my-8">
              <span className="absolute -top-3 left-6 text-7xl leading-none text-primary" style={{ fontFamily: "Georgia, serif" }}>"</span>
              <p className="text-foreground text-lg leading-relaxed pt-4">
                Comecei sozinho, com um balde e uma mangueira. Hoje tenho equipe, mas ainda sou eu que abro a porta todo dia.
              </p>
              <p className="text-sm font-bold text-accent-foreground mt-4">— Dono do Patinhas & Cia</p>
            </div>

            <ul className="space-y-3 mb-8">
              {benefits.map((b, i) => (
                <li
                  key={b}
                  className={`flex items-start gap-3 transition-all duration-300 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
                  style={{ transitionDelay: `${400 + i * 80}ms` }}
                >
                  <Check className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground text-sm">{b}</span>
                </li>
              ))}
            </ul>

            <a href="https://wa.me/5569992216764" className="inline-block bg-primary text-primary-foreground font-bold px-8 py-3 rounded-md text-sm uppercase tracking-wider hover:-translate-y-0.5 hover:shadow-[0_6px_20px_hsl(25_95%_53%/0.35)] transition-all duration-200">
              Fale com a gente →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
