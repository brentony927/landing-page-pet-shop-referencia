import { useEffect, useRef, useState } from "react";
import { Scissors, Stethoscope, Hotel, Dog, Car, Sun, ChevronLeft, ChevronRight } from "lucide-react";
import banhoTosaImg from "@/assets/banho-tosa.png";

const services = [
  { icon: Scissors, title: "Banho & Tosa", desc: "Limpeza completa com produtos naturais", price: "R$ 79", duration: "1h30", color: "bg-secondary" },
  { icon: Stethoscope, title: "Consulta Veterinária", desc: "Check-up completo e vacinação", price: "R$ 120", duration: "45min", color: "bg-primary" },
  { icon: Hotel, title: "Hotel Pet", desc: "Hospedagem com conforto e diversão 24h", price: "R$ 89/dia", duration: "24h", color: "bg-petshop-purple" },
  { icon: Dog, title: "Adestramento", desc: "Treino com reforço positivo e socialização", price: "R$ 99", duration: "1h", color: "bg-accent" },
  { icon: Car, title: "Taxi Dog", desc: "Transporte seguro e pontual para seu pet", price: "R$ 45", duration: "Ida", color: "bg-petshop-coral" },
  { icon: Sun, title: "Day Care", desc: "Creche diurna com atividades e brincadeiras", price: "R$ 69", duration: "8h", color: "bg-secondary" },
];

const Services = () => {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const scroll = (dir: number) => {
    scrollRef.current?.scrollBy({ left: dir * 320, behavior: "smooth" });
  };

  return (
    <section id="servicos" className="py-20 bg-background relative overflow-hidden" ref={ref}>
      {/* Decorative background image */}
      <div className="absolute top-0 right-0 w-64 h-64 opacity-5 pointer-events-none">
        <img src={banhoTosaImg} alt="" className="w-full h-full object-contain" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="text-primary font-bold text-sm uppercase tracking-wider mb-2">Nossos Serviços</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
              CUIDADO COMPLETO PRO SEU PET
            </h2>
          </div>
          <div className="hidden md:flex gap-2">
            <button onClick={() => scroll(-1)} className="w-10 h-10 rounded-full border-2 border-border flex items-center justify-center hover:border-primary hover:text-primary hover:scale-110 transition-all">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button onClick={() => scroll(1)} className="w-10 h-10 rounded-full border-2 border-border flex items-center justify-center hover:border-primary hover:text-primary hover:scale-110 transition-all">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div ref={scrollRef} className="flex gap-5 overflow-x-auto pb-4 snap-x snap-mandatory" style={{ scrollbarWidth: "none" }}>
          {services.map((s, i) => (
            <div
              key={s.title}
              className={`min-w-[280px] bg-card rounded-2xl p-6 border border-border cursor-pointer snap-start transition-all duration-500 hover:-translate-y-2 hover:shadow-xl ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className={`${s.color} w-14 h-14 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <s.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="font-heading text-lg font-bold text-foreground mb-1">{s.title}</h3>
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{s.desc}</p>
              <div className="flex items-center justify-between border-t border-border pt-3">
                <span className="font-heading text-xl font-bold text-primary">{s.price}</span>
                <span className="text-muted-foreground text-xs font-semibold bg-muted px-3 py-1 rounded-full">{s.duration}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
