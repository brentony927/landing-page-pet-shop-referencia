import { Scissors, Stethoscope, Hotel, Dog, Car, Sun } from "lucide-react";
import Icon3D from "./Icon3D";
import { useInView } from "@/hooks/useInView";

const services = [
  { icon: Scissors, title: "Banho & Tosa", desc: "Sai cheiroso e desfilando. Com paciência, sem pressa.", price: "R$ 79", duration: "1h30", color: "green" as const, badge: "Mais pedido" },
  { icon: Stethoscope, title: "Veterinário", desc: "Check-up, vacina, tudo em dia", price: "R$ 120", duration: "45min", color: "orange" as const },
  { icon: Hotel, title: "Hotel Pet", desc: "Ele fica bem enquanto você viaja", price: "R$ 89/dia", duration: "24h", color: "teal" as const },
  { icon: Dog, title: "Adestramento", desc: "Treino com paciência e reforço positivo", price: "R$ 99", duration: "1h", color: "yellow" as const },
  { icon: Car, title: "Taxi Dog", desc: "A gente busca e leva, sem stress", price: "R$ 45", duration: "Ida", color: "orange" as const },
  { icon: Sun, title: "Day Care", desc: "Creche com brincadeira o dia todo", price: "R$ 69", duration: "8h", color: "green" as const },
];

const Services = () => {
  const { ref, visible } = useInView(0.15);

  return (
    <section id="servicos" className="py-20 bg-background" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
            O que a gente faz de melhor
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {/* Featured first card - spans 2 cols on lg */}
          <div
            className={`lg:col-span-2 bg-secondary/10 border border-secondary/30 rounded-lg p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg relative ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <span className="absolute top-4 right-4 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-md">
              {services[0].badge}
            </span>
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <Icon3D icon={services[0].icon} size="lg" color={services[0].color} animate="none" />
              <div className="flex-1">
                <h3 className="font-heading text-2xl font-bold text-foreground mb-2">{services[0].title}</h3>
                <p className="text-muted-foreground mb-4">{services[0].desc}</p>
                <div className="flex items-center gap-4">
                  <span className="font-heading text-2xl font-bold text-primary">{services[0].price}</span>
                  <span className="text-muted-foreground text-sm font-semibold bg-muted px-3 py-1 rounded-md">{services[0].duration}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Remaining cards */}
          {services.slice(1).map((s, i) => (
            <div
              key={s.title}
              className={`bg-card border border-border rounded-lg p-6 transition-all duration-200 hover:-translate-y-1 hover:shadow-md hover:border-primary/40 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${(i + 1) * 80}ms` }}
            >
              <Icon3D icon={s.icon} size="md" color={s.color} animate="none" className="mb-4" />
              <h3 className="font-heading text-lg font-bold text-foreground mb-1">{s.title}</h3>
              <p className="text-muted-foreground text-sm mb-4">{s.desc}</p>
              <div className="flex items-center justify-between border-t border-border/50 pt-3">
                <span className="font-heading text-xl font-bold text-primary">{s.price}</span>
                <span className="text-muted-foreground text-xs font-semibold bg-muted px-3 py-1 rounded-md">{s.duration}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Strip */}
      <div className="bg-primary mt-12 py-4">
        <div className="container mx-auto px-4 flex flex-col sm:flex-row items-center justify-center gap-4 text-center">
          <span className="text-primary-foreground font-bold text-lg">Agende o banho do seu pet agora</span>
          <a href="https://wa.me/5569992216764" className="bg-primary-foreground text-primary font-bold px-6 py-2 rounded-lg text-sm uppercase tracking-wider hover:scale-105 transition-transform duration-200">
            WhatsApp →
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
