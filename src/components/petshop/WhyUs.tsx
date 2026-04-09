import { useEffect, useState } from "react";
import { useInView } from "@/hooks/useInView";
import { Bath, Home, Star, TrendingUp } from "lucide-react";

const stats = [
  { target: 5000, suffix: "+", label: "pets atendidos", Icon: Bath },
  { target: 12, suffix: " anos", label: "no bairro", Icon: Home },
  { target: 4.8, suffix: "", label: "no Google", Icon: Star },
];

const Counter = ({ target, suffix, go }: { target: number; suffix: string; go: boolean }) => {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!go) return;
    const dec = target % 1 !== 0;
    let frame = 0;
    const total = 50;
    const id = setInterval(() => {
      frame++;
      const progress = frame / total;
      const eased = 1 - Math.pow(1 - progress, 3);
      const v = eased * target;
      setVal(dec ? Math.round(v * 10) / 10 : Math.round(v));
      if (frame >= total) clearInterval(id);
    }, 25);
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
      <div className={`max-w-[1100px] mx-auto px-5 py-10 sm:py-12 lg:py-14 scroll-fade-up ${visible ? "visible" : ""}`}>
        {/* Gatilho de prova social */}
        <div className="flex items-center justify-center gap-2 mb-6">
          <TrendingUp className="w-4 h-4" style={{ color: "#22A66E" }} />
          <span className="text-[11px] sm:text-xs font-bold text-white/50">Números que falam por nós</span>
        </div>
        <div className="grid grid-cols-3 gap-2 sm:gap-8">
          {stats.map((s, i) => (
            <div key={s.label} className="flex flex-col items-center text-center gap-2" style={{ animationDelay: `${i * 100}ms` }}>
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center transition-transform duration-300 hover:scale-110" style={{ background: "rgba(255,179,0,0.12)" }}>
                <s.Icon className="w-5 h-5 sm:w-6 sm:h-6" style={{ color: "#FFB300" }} />
              </div>
              <Counter target={s.target} suffix={s.suffix} go={visible} />
              <p className="text-[11px] sm:text-sm font-medium text-white/50">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
