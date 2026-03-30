import { useEffect, useRef, useState } from "react";
import { Scissors, Stethoscope, Hotel, Dog, Car, Sun } from "lucide-react";

const services = [
  {
    icon: Scissors,
    title: "Banho & Tosa",
    desc: "Seu pet limpinho, cheiroso e estiloso. Tosa higiênica, na máquina ou na tesoura.",
    color: "bg-primary",
  },
  {
    icon: Stethoscope,
    title: "Veterinário",
    desc: "Consultas, vacinas e check-ups completos com profissionais que amam o que fazem.",
    color: "bg-secondary",
  },
  {
    icon: Hotel,
    title: "Hotel Pet",
    desc: "Viajou? Seu pet fica hospedado com conforto, diversão e atenção 24h.",
    color: "bg-petshop-purple",
  },
  {
    icon: Dog,
    title: "Adestramento",
    desc: "Comportamento, socialização e obediência. Treino com reforço positivo.",
    color: "bg-petshop-yellow",
  },
  {
    icon: Car,
    title: "Taxi Dog",
    desc: "Buscamos e levamos seu pet com segurança e pontualidade. Sem stress.",
    color: "bg-primary",
  },
  {
    icon: Sun,
    title: "Day Care",
    desc: "Creche diurna com atividades, brincadeiras e socialização o dia todo.",
    color: "bg-secondary",
  },
];

const Services = () => {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="servicos" className="py-20 bg-background" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <span className="text-4xl mb-3 block">✨</span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-3">
            O que fazemos pelo seu pet
          </h2>
          <p className="text-muted-foreground text-lg max-w-md mx-auto">
            Cada serviço pensado com carinho e feito por quem entende de bicho
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <div
              key={s.title}
              className={`bg-card rounded-2xl p-6 shadow-sm border border-border hover-scale cursor-pointer transition-all duration-500 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className={`${s.color} w-14 h-14 rounded-2xl flex items-center justify-center mb-4`}>
                <s.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="font-heading text-xl font-bold text-foreground mb-2">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
