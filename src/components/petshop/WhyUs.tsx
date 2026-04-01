import { useEffect, useState } from "react";
import { Bath, Heart, Star } from "lucide-react";
import { useInView } from "@/hooks/useInView";

const stats = [
  { number: 5000, suffix: "+", label: "banhos por ano", icon: Bath, bg: "bg-secondary/20" },
  { number: 12, suffix: " anos", label: "cuidando de pets", icon: Heart, bg: "bg-primary/15" },
  { number: 4.8, suffix: "", label: "nota no Google", icon: Star, bg: "bg-accent/20" },
];

const AnimatedNumber = ({ target, suffix, active }: { target: number; suffix: string; active: boolean }) => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!active) return;
    const isDecimal = target % 1 !== 0;
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      setValue(isDecimal ? Math.round(current * 10) / 10 : Math.floor(current));
    }, duration / steps);
    return () => clearInterval(timer);
  }, [active, target]);

  return (
    <span className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold text-primary">
      {target % 1 !== 0 ? value.toFixed(1) : value.toLocaleString("pt-BR")}
      {suffix}
    </span>
  );
};

const WhyUs = () => {
  const { ref, visible } = useInView(0.3);

  return (
    <section className="py-14 bg-petshop-teal/90" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="mb-10 md:mb-14">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-3">
            Números que contam nossa história
          </h2>
          <p className="text-primary-foreground/50 text-lg">Resultados de quem trabalha com amor</p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center max-w-3xl mx-auto gap-4 md:gap-0">
          {stats.map((s, i) => {
            const Icon = s.icon;
            return (
              <div key={s.label} className="flex-1 text-center p-4 sm:p-6 relative w-full md:w-auto">
                <div className="flex justify-center mb-3 md:mb-4">
                  <div className={`${s.bg} rounded-lg p-4 md:p-5`}>
                    <Icon className="w-8 h-8 md:w-10 md:h-10 text-primary-foreground" />
                  </div>
                </div>
                <AnimatedNumber target={s.number} suffix={s.suffix} active={visible} />
                <p className="text-primary-foreground/60 font-semibold mt-2 text-sm md:text-base">{s.label}</p>
                {i < stats.length - 1 && (
                  <>
                    <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-16 bg-primary-foreground/15" />
                    <div className="md:hidden w-24 h-px bg-primary-foreground/15 mx-auto mt-4" />
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
