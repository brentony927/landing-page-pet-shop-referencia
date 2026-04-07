import { useEffect, useState } from "react";
import { useInView } from "@/hooks/useInView";

const stats = [
  { number: 5000, suffix: "+", label: "banhos por ano", emoji: "🛁" },
  { number: 12, suffix: " anos", label: "no bairro", emoji: "🏠" },
  { number: 4.8, suffix: "", label: "no Google", emoji: "⭐" },
];

const AnimatedNumber = ({ target, suffix, active }: { target: number; suffix: string; active: boolean }) => {
  const [value, setValue] = useState(0);
  const [popped, setPopped] = useState(false);

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
        setPopped(true);
        setTimeout(() => setPopped(false), 200);
      }
      setValue(isDecimal ? Math.round(current * 10) / 10 : Math.floor(current));
    }, duration / steps);
    return () => clearInterval(timer);
  }, [active, target]);

  return (
    <span
      className="text-3xl sm:text-4xl md:text-5xl font-extrabold"
      style={{
        display: "inline-block",
        transform: popped ? "scale(1.12)" : "scale(1)",
        transition: "transform 0.2s ease",
        fontFamily: "'Baloo 2', cursive",
        color: "var(--pet-green-dark)",
      }}
    >
      {target % 1 !== 0 ? value.toFixed(1) : value.toLocaleString("pt-BR")}
      {suffix}
    </span>
  );
};

const WhyUs = () => {
  const { ref, visible } = useInView(0.3);

  return (
    <section className="py-14" style={{ background: "var(--pet-green-light)" }} ref={ref}>
      <div className={`max-w-[1100px] mx-auto px-4 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {stats.map((s, i) => (
            <div key={s.label} className="flex items-baseline gap-2 md:gap-3" style={{ transitionDelay: `${i * 150}ms` }}>
              <span className="text-2xl">{s.emoji}</span>
              <AnimatedNumber target={s.number} suffix={s.suffix} active={visible} />
              <p className="text-sm font-bold" style={{ color: "var(--pet-gray)" }}>{s.label}</p>
              {i < stats.length - 1 && <span className="hidden md:block w-px h-8 ml-8 bg-green-200" />}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
