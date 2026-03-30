import { LucideIcon } from "lucide-react";

interface Icon3DProps {
  icon: LucideIcon;
  size?: "sm" | "md" | "lg" | "xl";
  color?: "green" | "orange" | "yellow" | "teal";
  animate?: "float" | "pulse" | "spin" | "none";
  className?: string;
}

const sizeMap = {
  sm: { container: "w-10 h-10", icon: 16 },
  md: { container: "w-14 h-14", icon: 24 },
  lg: { container: "w-20 h-20", icon: 32 },
  xl: { container: "w-28 h-28", icon: 40 },
};

const colorMap = {
  green: {
    bg: "bg-secondary",
    shadow: "shadow-[inset_0_-4px_8px_rgba(0,0,0,0.15),_0_4px_12px_rgba(34,166,110,0.3)]",
    border: "border-secondary/30",
  },
  orange: {
    bg: "bg-primary",
    shadow: "shadow-[inset_0_-4px_8px_rgba(0,0,0,0.15),_0_4px_12px_rgba(255,107,44,0.3)]",
    border: "border-primary/30",
  },
  yellow: {
    bg: "bg-accent",
    shadow: "shadow-[inset_0_-4px_8px_rgba(0,0,0,0.1),_0_4px_12px_rgba(255,184,0,0.3)]",
    border: "border-accent/30",
  },
  teal: {
    bg: "bg-petshop-teal",
    shadow: "shadow-[inset_0_-4px_8px_rgba(0,0,0,0.2),_0_4px_12px_rgba(30,80,60,0.3)]",
    border: "border-petshop-teal-light/30",
  },
};

const animateMap = {
  float: "animate-float",
  pulse: "animate-[pulseSoft_2s_cubic-bezier(0.4,0,0.6,1)_infinite]",
  spin: "animate-spin-slow",
  none: "",
};

const Icon3D = ({ icon: IconComponent, size = "md", color = "green", animate = "float", className = "" }: Icon3DProps) => {
  const s = sizeMap[size];
  const c = colorMap[color];
  const a = animateMap[animate];

  return (
    <div
      className={`${s.container} rounded-xl ${c.bg} ${c.shadow} border ${c.border} flex items-center justify-center ${a} ${className}`}
      style={{ perspective: "200px", transform: "rotateX(5deg) rotateY(-5deg)" }}
    >
      <IconComponent className="text-primary-foreground drop-shadow-md" size={s.icon} strokeWidth={2.5} />
    </div>
  );
};

export default Icon3D;
