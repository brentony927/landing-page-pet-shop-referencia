import { Check } from "lucide-react";

const benefits = [
  { text: "Mais de 10 anos de experiência", color: "text-secondary" },
  { text: "20 veterinários especializados", color: "text-primary" },
  { text: "Produtos de alta qualidade", color: "text-petshop-purple" },
  { text: "Atendimento humanizado", color: "text-secondary" },
  { text: "Entrega rápida na sua casa", color: "text-primary" },
];

const AboutUs = () => {
  return (
    <section id="sobre" className="py-20 bg-petshop-cream">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          {/* Left — visual */}
          <div className="flex items-center justify-center">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 bg-accent rounded-3xl flex items-center justify-center shadow-lg">
                <span className="text-[8rem] md:text-[10rem]">🐕</span>
              </div>
              <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-primary rounded-2xl flex items-center justify-center shadow-md">
                <span className="text-4xl">❤️</span>
              </div>
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-secondary rounded-2xl flex items-center justify-center shadow-md">
                <span className="text-3xl">🐾</span>
              </div>
            </div>
          </div>

          {/* Right — text */}
          <div>
            <p className="text-primary font-bold text-sm uppercase tracking-wider mb-2">Sobre Nós</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4 leading-tight">
              CUIDAMOS DO SEU PET COMO SE FOSSE NOSSO
            </h2>
            <p className="text-muted-foreground text-base mb-8 leading-relaxed">
              Na Patinhas & Cia, cada pet é tratado com respeito, carinho e profissionalismo. 
              Somos referência em cuidado animal há mais de uma década.
            </p>

            <ul className="space-y-4 mb-8">
              {benefits.map((b) => (
                <li key={b.text} className="flex items-center gap-3">
                  <div className={`w-6 h-6 rounded-full bg-card flex items-center justify-center shadow-sm`}>
                    <Check className={`w-4 h-4 ${b.color}`} />
                  </div>
                  <span className="text-foreground font-semibold text-sm">{b.text}</span>
                </li>
              ))}
            </ul>

            <button className="bg-primary text-primary-foreground font-bold px-8 py-3 rounded-full text-sm uppercase tracking-wider hover-scale shadow-md">
              SAIBA MAIS →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
