import { useEffect, useState } from "react";
import { Bath, Heart, Star } from "lucide-react";
import Icon3D from "./Icon3D";
import { useInView } from "@/hooks/useInView";

const stats = [
  { number: 5000, suffix: "+", label: "banhos por ano", icon: Bath, color: "green" as const },
  { number: 12, suffix: " anos", label: "cuidando de pets", icon: Heart, color: "orange" as const },
  { number: 4.8, suffix: "", label: "nota no Google", icon: Star, color: "yellow" as const },
];

const AnimatedNumber = ({ target, suffix, active, onDone }: { target: number; suffix: string; active: boolean; onDone?: () => void }) => {
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
        onDone?.();
      }
      setValue(isDecimal ? Math.round(current * 10) / 10 : Math.floor(current));
    }, duration / steps);
    return () => clearInterval(timer);
  }, [active, target]);

  return (
    <span className="font-heading text-4xl md:text-5xl font-bold text-accent animate-glow-pulse">
      {target % 1 !== 0 ? value.toFixed(1) : value.toLocaleString("pt-BR")}
      {suffix}
    </span>
  );
};

const WhyUs = () => {
  const { ref, visible } = useInView(0.3);
  const [doneCount, setDoneCount] = useState<Set<number>>(new Set());

  return (
    <section className="py-14 bg-petshop-teal/90" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-3">
            Números que contam nossa história
          </h2>
          <p className="text-primary-foreground/50 text-lg">Resultados de quem trabalha com amor</p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center max-w-3xl mx-auto">
          {stats.map((s, i) => (
            <div key={s.label} className="flex-1 text-center p-6 relative">
              <div className={`flex justify-center mb-4 transition-all duration-300 ${doneCount.has(i) ? "" : ""}`}>
                <Icon3D icon={s.icon} size="lg" color={s.color} animate={visible ? "float" : "none"} />
              </div>
              <AnimatedNumber
                target={s.number}
                suffix={s.suffix}
                active={visible}
                onDone={() => setDoneCount(prev => new Set(prev).add(i))}
              />
              <p className="text-primary-foreground/60 font-semibold mt-2">{s.label}</p>
              {i < stats.length - 1 && (
                <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-16 bg-primary-foreground/10" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;