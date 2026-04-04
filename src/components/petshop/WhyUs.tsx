import { useEffect, useState } from "react";
import { useInView } from "@/hooks/useInView";

const stats = [
  { number: 5000, suffix: "+", label: "banhos por ano" },
  { number: 12, suffix: " anos", label: "no bairro" },
  { number: 4.8, suffix: "", label: "no Google" },
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
    <span className="text-3xl sm:text-4xl md:text-5xl font-black" style={{ fontFamily: "'Fraunces', Georgia, serif", color: "#1c1917" }}>
      {target % 1 !== 0 ? value.toFixed(1) : value.toLocaleString("pt-BR")}
      {suffix}
    </span>
  );
};

const WhyUs = () => {
  const { ref, visible } = useInView(0.3);

  return (
    <section className="py-12 bg-stone-50" ref={ref}>
      <div className={`max-w-[1100px] mx-auto px-4 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {stats.map((s, i) => (
            <div key={s.label} className="flex items-baseline gap-2 md:gap-3">
              <AnimatedNumber target={s.number} suffix={s.suffix} active={visible} />
              <p className="text-sm font-medium" style={{ color: "#78716c" }}>{s.label}</p>
              {i < stats.length - 1 && <span className="hidden md:block w-px h-8 bg-stone-200 ml-8" />}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
