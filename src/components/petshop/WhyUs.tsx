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
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) { current = target; clearInterval(timer); }
      setValue(isDecimal ? Math.round(current * 10) / 10 : Math.floor(current));
    }, 2000 / steps);
    return () => clearInterval(timer);
  }, [active, target]);

  return (
    <span className="text-3xl sm:text-4xl md:text-5xl font-extrabold" style={{ fontFamily: "'Baloo 2', cursive", color: "#FFA000" }}>
      {target % 1 !== 0 ? value.toFixed(1) : value.toLocaleString("pt-BR")}
      {suffix}
    </span>
  );
};

const WhyUs = () => {
  const { ref, visible } = useInView(0.3);

  return (
    <section className="py-10 sm:py-14" style={{ background: "var(--pet-blue-dark)" }} ref={ref}>
      <div className={`max-w-[1200px] mx-auto px-4 scroll-fade-up ${visible ? "visible" : ""}`}>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {stats.map((s, i) => (
            <div key={s.label} className="flex items-center gap-4 justify-center text-center sm:text-left">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "rgba(255,160,0,0.2)" }}>
                <s.Icon className="w-5 h-5" style={{ color: "#FFA000" }} />
              </div>
              <div>
                <AnimatedNumber target={s.number} suffix={s.suffix} active={visible} />
                <p className="text-sm font-semibold text-white/70">{s.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
