import { Camera } from "lucide-react";

interface ImagePlaceholderProps {
  className?: string;
  text?: string;
  variant?: "green" | "orange" | "neutral";
}

const variantMap = {
  green: "bg-secondary/8 text-secondary/40",
  orange: "bg-primary/8 text-primary/40",
  neutral: "bg-muted text-muted-foreground/40",
};

const ImagePlaceholder = ({ className = "", text = "Sua imagem aqui", variant = "green" }: ImagePlaceholderProps) => {
  const v = variantMap[variant];
  return (
    <div className={`${v.split(" ")[0]} rounded-lg flex flex-col items-center justify-center gap-2 ${className}`}>
      <Camera className={`w-8 h-8 ${v.split(" ").slice(1).join(" ")}`} />
      <span className={`font-bold text-xs uppercase tracking-wider ${v.split(" ").slice(1).join(" ")}`}>
        {text}
      </span>
    </div>
  );
};

export default ImagePlaceholder;
