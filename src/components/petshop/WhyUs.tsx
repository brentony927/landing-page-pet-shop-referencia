import { useEffect, useState } from "react";
import { useInView } from "@/hooks/useInView";
import { Bath, Home, Star } from "lucide-react";

const stats = [
  { target: 5000, suffix: "+", label: "banhos por ano", Icon: Bath },
  { target: 12, suffix: " anos", label: "no bairro", Icon: Home },
  { target: 4.8, suffix: "", label: "no Google", Icon: Star },
];

const Counter = ({ target, suffix, go }: { target: number; suffix: string; go: boolean }) => {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!go) return;
    const dec = target % 1 !== 0;
    let frame = 0;
    const total = 45;
    const id = setInterval(() => {
      frame++;
      const progress = frame / total;
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      const v = eased * target;
      setVal(dec ? Math.round(v * 10) / 10 : Math.round(v));
      if (frame >= total) clearInterval(id);
    }, 28);
    return () => clearInterval(id);
  }, [go, target]);

  return (
    <span className="text-[28px] sm:text-4xl lg:text-5xl font-extrabold tabular-nums" style={{ fontFamily: "'Baloo 2', cursive", color: "#FFB300" }}>
      {target % 1 !== 0 ? val.toFixed(1) : val.toLocaleString("pt-BR")}{suffix}
    </span>
  );
};

const WhyUs = () => {
  const { ref, visible } = useInView(0.25);

  return (
    <section ref={ref} style={{ background: "var(--pet-navy)" }}>
      <div className={`max-w-[1100px] mx-auto px-5 py-8 sm:py-10 lg:py-12 scroll-fade-up ${visible ? "visible" : ""}`}>
        <div className="grid grid-cols-3 gap-2 sm:gap-8">
          {stats.map(s => (
            <div key={s.label} className="flex flex-col items-center text-center gap-1.5">
              <div className="w-11 h-11 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center" style={{ background: "rgba(255,179,0,0.15)" }}>
                <s.Icon className="w-5 h-5 sm:w-6 sm:h-6" style={{ color: "#FFB300" }} />
              </div>
              <Counter target={s.target} suffix={s.suffix} go={visible} />
              <p className="text-[11px] sm:text-sm font-medium text-white/60">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
