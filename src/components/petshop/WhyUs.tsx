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
    <span className="text-4xl sm:text-5xl md:text-6xl font-black" style={{ color: "#16a34a" }}>
      {target % 1 !== 0 ? value.toFixed(1) : value.toLocaleString("pt-BR")}
      {suffix}
    </span>
  );
};

const WhyUs = () => {
  const { ref, visible } = useInView(0.3);

  return (
    <section className="py-14 bg-white border-y" style={{ borderColor: "#e7e5e4" }} ref={ref}>
      <div className="max-w-[1100px] mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-black mb-10" style={{ fontFamily: "'Fraunces', Georgia, serif", color: "#1c1917" }}>
          Em números
        </h2>

        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-0">
          {stats.map((s, i) => (
            <div key={s.label} className="flex-1 text-center p-4 sm:p-6 relative w-full md:w-auto">
              <AnimatedNumber target={s.number} suffix={s.suffix} active={visible} />
              <p className="font-medium mt-2 text-sm md:text-base" style={{ color: "#78716c" }}>{s.label}</p>
              {i < stats.length - 1 && (
                <>
                  <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-16" style={{ background: "#e7e5e4" }} />
                  <div className="md:hidden w-24 h-px mx-auto mt-4" style={{ background: "#e7e5e4" }} />
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
