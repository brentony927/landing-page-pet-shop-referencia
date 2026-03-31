import { Scissors, Stethoscope, Hotel, Dog, Car, Sun, ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";
import Icon3D from "./Icon3D";
import { useInView } from "@/hooks/useInView";

const cardBgColors = [
  "bg-secondary/15 hover:border-secondary",
  "bg-primary/15 hover:border-primary",
  "bg-petshop-teal/15 hover:border-petshop-teal",
  "bg-accent/15 hover:border-accent",
  "bg-primary/15 hover:border-primary",
  "bg-secondary/15 hover:border-secondary",
];

const services = [
  { icon: Scissors, title: "Banho & Tosa", desc: "Sai cheiroso e desfilando", price: "R$ 79", duration: "1h30", color: "green" as const, featured: true },
  { icon: Stethoscope, title: "Veterinário", desc: "Check-up, vacina, tudo em dia", price: "R$ 120", duration: "45min", color: "orange" as const },
  { icon: Hotel, title: "Hotel Pet", desc: "Ele fica bem enquanto você viaja", price: "R$ 89/dia", duration: "24h", color: "teal" as const },
  { icon: Dog, title: "Adestramento", desc: "Treino com paciência e reforço positivo", price: "R$ 99", duration: "1h", color: "yellow" as const },
  { icon: Car, title: "Taxi Dog", desc: "A gente busca e leva, sem stress", price: "R$ 45", duration: "Ida", color: "orange" as const },
  { icon: Sun, title: "Day Care", desc: "Creche com brincadeira o dia todo", price: "R$ 69", duration: "8h", color: "green" as const },
];

const Services = () => {
  const { ref, visible } = useInView(0.15);
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: number) => {
    scrollRef.current?.scrollBy({ left: dir * 320, behavior: "smooth" });
  };

  return (
    <section id="servicos" className="py-20 bg-background relative overflow-hidden" ref={ref}>
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex items-end justify-between mb-12">
          <div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
              Serviços pra deixar seu pet feliz
            </h2>
          </div>
          <div className="hidden md:flex gap-2">
            <button onClick={() => scroll(-1)} className="w-10 h-10 rounded-lg border-2 border-border flex items-center justify-center hover:border-primary hover:text-primary hover:scale-110 transition-all duration-200">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button onClick={() => scroll(1)} className="w-10 h-10 rounded-lg border-2 border-border flex items-center justify-center hover:border-primary hover:text-primary hover:scale-110 transition-all duration-200">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div ref={scrollRef} className="flex gap-5 overflow-x-auto pb-4 snap-x snap-mandatory" style={{ scrollbarWidth: "none" }}>
          {services.map((s, i) => (
            <div
              key={s.title}
              className={`${s.featured ? "min-w-[320px] border-l-4 border-l-primary" : "min-w-[280px]"} ${cardBgColors[i]} border border-transparent rounded-lg p-6 cursor-pointer snap-start transition-all duration-200 hover:-translate-y-2 hover:shadow-orange group ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <Icon3D icon={s.icon} size="md" color={s.color} animate="none" className="mb-4" />
              <h3 className="font-heading text-lg font-bold text-foreground mb-1">{s.title}</h3>
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{s.desc}</p>
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
          <a href="#contato" className="bg-primary-foreground text-primary font-bold px-6 py-2 rounded-lg text-sm uppercase tracking-wider hover:scale-105 transition-transform duration-200">
            WhatsApp →
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
