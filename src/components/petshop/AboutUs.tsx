import { Check } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import banhoTosaImg from "@/assets/banho-tosa.png";

const benefits = [
  { text: "Mais de 10 anos de experiência", color: "text-secondary" },
  { text: "20 veterinários especializados", color: "text-primary" },
  { text: "Produtos de alta qualidade", color: "text-petshop-purple" },
  { text: "Atendimento humanizado", color: "text-secondary" },
  { text: "Entrega rápida na sua casa", color: "text-primary" },
];

const AboutUs = () => {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="sobre" className="py-20 bg-petshop-cream overflow-hidden" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          {/* Left — image with slide-in */}
          <div className={`flex items-center justify-center transition-all duration-700 ${visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-16"}`}>
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 bg-accent rounded-3xl flex items-center justify-center shadow-lg overflow-hidden">
                <img src={banhoTosaImg} alt="Pet feliz" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-primary rounded-2xl flex items-center justify-center shadow-md animate-float">
                <span className="text-4xl">❤️</span>
              </div>
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-secondary rounded-2xl flex items-center justify-center shadow-md animate-float-delayed">
                <span className="text-3xl">🐾</span>
              </div>
            </div>
          </div>

          {/* Right — text with slide-in */}
          <div className={`transition-all duration-700 delay-200 ${visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-16"}`}>
            <p className="text-primary font-bold text-sm uppercase tracking-wider mb-2">Sobre Nós</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4 leading-tight">
              CUIDAMOS DO SEU PET COMO SE FOSSE NOSSO
            </h2>
            <p className="text-muted-foreground text-base mb-8 leading-relaxed">
              Na Patinhas & Cia, cada pet é tratado com respeito, carinho e profissionalismo. 
              Somos referência em cuidado animal há mais de uma década.
            </p>

            <ul className="space-y-4 mb-8">
              {benefits.map((b, i) => (
                <li
                  key={b.text}
                  className={`flex items-center gap-3 transition-all duration-500 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
                  style={{ transitionDelay: `${400 + i * 100}ms` }}
                >
                  <div className="w-6 h-6 rounded-full bg-card flex items-center justify-center shadow-sm">
                    <Check className={`w-4 h-4 ${b.color}`} />
                  </div>
                  <span className="text-foreground font-semibold text-sm">{b.text}</span>
                </li>
              ))}
            </ul>

            <button className="bg-primary text-primary-foreground font-bold px-8 py-3 rounded-full text-sm uppercase tracking-wider shadow-md hover:-translate-y-1 transition-transform duration-300">
              SAIBA MAIS →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
