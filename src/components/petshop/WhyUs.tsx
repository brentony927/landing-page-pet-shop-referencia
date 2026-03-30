import { useEffect, useRef, useState } from "react";
import { Bath, Heart, Star } from "lucide-react";
import Icon3D from "./Icon3D";

const stats = [
  { number: 5000, suffix: "+", label: "banhos por ano", icon: Bath, color: "green" as const },
  { number: 12, suffix: " anos", label: "cuidando de pets", icon: Heart, color: "orange" as const },
  { number: 4.8, suffix: "", label: "nota no Google", icon: Star, color: "yellow" as const },
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
    <span className="font-heading text-4xl md:text-5xl font-bold text-primary">
      {target % 1 !== 0 ? value.toFixed(1) : value.toLocaleString("pt-BR")}
      {suffix}
    </span>
  );
};

const WhyUs = () => {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-20 bg-background" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-3">
            Por que nos escolher?
          </h2>
          <p className="text-muted-foreground text-lg">Números que falam por si</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
          {stats.map((s) => (
            <div key={s.label} className="text-center p-6">
              <div className="flex justify-center mb-4">
                <Icon3D icon={s.icon} size="lg" color={s.color} animate="float" />
              </div>
              <AnimatedNumber target={s.number} suffix={s.suffix} active={visible} />
              <p className="text-muted-foreground font-semibold mt-2">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
