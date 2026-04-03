import { Scissors, Stethoscope, Hotel, Dog, Car, Sun } from "lucide-react";
import { useInView } from "@/hooks/useInView";

const services = [
  { icon: Scissors, title: "Banho & Tosa", desc: "Sai cheiroso e desfilando. Com paciência, sem pressa.", price: "R$ 79", duration: "1h30", badge: "Mais pedido" },
  { icon: Stethoscope, title: "Veterinário", desc: "Check-up, vacina, tudo em dia", price: "R$ 120", duration: "45min" },
  { icon: Hotel, title: "Hotel Pet", desc: "Ele fica bem enquanto você viaja", price: "R$ 89/dia", duration: "24h" },
  { icon: Dog, title: "Adestramento", desc: "Treino com paciência e reforço positivo", price: "R$ 99", duration: "1h" },
  { icon: Car, title: "Taxi Dog", desc: "A gente busca e leva, sem stress", price: "R$ 45", duration: "Ida" },
  { icon: Sun, title: "Day Care", desc: "Creche com brincadeira o dia todo", price: "R$ 69", duration: "8h" },
];

const Services = () => {
  const { ref, visible } = useInView(0.15);

  return (
    <section id="servicos" className="py-20 bg-muted/50" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-black text-foreground">
            O que a gente faz de melhor
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {/* Featured first card */}
          <div
            className={`lg:col-span-2 bg-background border border-border rounded-lg p-8 transition-all duration-200 hover:-translate-y-1 hover:border-secondary hover:shadow-[0_8px_24px_hsl(142_72%_37%/0.12)] relative ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <span className="inline-block bg-accent text-accent-foreground text-xs font-bold px-3 py-1 rounded-md mb-4">
              {services[0].badge}
            </span>
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="bg-secondary/10 rounded-lg p-4">
                <Scissors className="w-8 h-8 text-secondary" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-black text-foreground mb-2">{services[0].title}</h3>
                <p className="text-muted-foreground mb-4">{services[0].desc}</p>
                <div className="flex items-center gap-4">
                  <span className="text-2xl font-black text-primary">{services[0].price}</span>
                  <span className="text-muted-foreground text-sm bg-muted px-3 py-1 rounded-md">{services[0].duration}</span>
                </div>
              </div>
            </div>
          </div>

          {services.slice(1).map((s, i) => {
            const Icon = s.icon;
            return (
              <div
                key={s.title}
                className={`bg-background border border-border rounded-lg p-6 transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_8px_24px_hsl(142_72%_37%/0.12)] hover:border-secondary ${
                  visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${(i + 1) * 80}ms` }}
              >
                <div className="bg-secondary/10 rounded-lg p-3 w-fit mb-4">
                  <Icon className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-1">{s.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{s.desc}</p>
                <div className="flex items-center justify-between border-t border-border/50 pt-3">
                  <span className="text-xl font-black text-primary">{s.price}</span>
                  <span className="text-muted-foreground text-xs bg-muted px-3 py-1 rounded-md">{s.duration}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
