import { useEffect, useState } from "react";
import { useInView } from "@/hooks/useInView";
import { Bath, Home, Star } from "lucide-react";

const stats = [
  { number: 5000, suffix: "+", label: "banhos por ano", Icon: Bath },
  { number: 12, suffix: " anos", label: "no bairro", Icon: Home },
  { number: 4.8, suffix: "", label: "no Google", Icon: Star },
];

const AnimatedNumber = ({ target, suffix, active }: { target: number; suffix: string; active: boolean }) => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!active) return;
    const isDecimal = target % 1 !== 0;
    const steps = 50;
    const increment = target / steps;
    let current = 0;
    let step = 0;
    const timer = setInterval(() => {
      step++;
      current += increment;
      if (step >= steps) { current = target; clearInterval(timer); }
      setValue(isDecimal ? Math.round(current * 10) / 10 : Math.floor(current));
    }, 30);
    return () => clearInterval(timer);
  }, [active, target]);

  return (
    <span className="text-3xl sm:text-4xl lg:text-5xl font-extrabold" style={{ fontFamily: "'Baloo 2', cursive", color: "#FFA000" }}>
      {target % 1 !== 0 ? value.toFixed(1) : value.toLocaleString("pt-BR")}
      {suffix}
    </span>
  );
};

const WhyUs = () => {
  const { ref, visible } = useInView(0.2);

  return (
    <section className="py-8 sm:py-12 lg:py-14" style={{ background: "#1565C0" }} ref={ref}>
      <div className={`max-w-[1200px] mx-auto px-4 scroll-fade-up ${visible ? "visible" : ""}`}>
        <div className="grid grid-cols-3 gap-3 sm:gap-6">
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col items-center text-center gap-1 sm:gap-2">
              <div className="w-11 h-11 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center mb-1" style={{ background: "rgba(255,160,0,0.2)" }}>
                <s.Icon className="w-5 h-5 sm:w-6 sm:h-6" style={{ color: "#FFA000" }} />
              </div>
              <AnimatedNumber target={s.number} suffix={s.suffix} active={visible} />
              <p className="text-xs sm:text-sm font-semibold text-white/70">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
