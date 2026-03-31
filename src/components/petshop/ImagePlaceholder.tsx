import { Camera } from "lucide-react";

interface ImagePlaceholderProps {
  className?: string;
  text?: string;
  variant?: "green" | "orange" | "neutral";
}

const variantMap = {
  green: { bg: "bg-secondary/15", text: "text-secondary/60", border: "border-secondary/20" },
  orange: { bg: "bg-primary/15", text: "text-primary/60", border: "border-primary/20" },
  neutral: { bg: "bg-muted", text: "text-muted-foreground/50", border: "border-border" },
};

const ImagePlaceholder = ({ className = "", text = "Sua foto aqui", variant = "green" }: ImagePlaceholderProps) => {
  const v = variantMap[variant];
  return (
    <div className={`${v.bg} border ${v.border} rounded-lg flex flex-col items-center justify-center gap-2 ${className}`}>
      <Camera className={`w-10 h-10 ${v.text}`} />
      <span className={`font-bold text-xs uppercase tracking-wider ${v.text}`}>
        {text}
      </span>
    </div>
  );
};

export default ImagePlaceholder;