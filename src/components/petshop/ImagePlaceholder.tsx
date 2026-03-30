import { ImageIcon } from "lucide-react";

interface ImagePlaceholderProps {
  className?: string;
  text?: string;
}

const ImagePlaceholder = ({ className = "", text = "A SUA IMAGEM AQUI" }: ImagePlaceholderProps) => {
  return (
    <div className={`bg-secondary/10 border-2 border-dashed border-secondary/40 rounded-3xl flex flex-col items-center justify-center gap-3 ${className}`}>
      <ImageIcon className="w-10 h-10 text-secondary/50" />
      <span className="font-heading font-bold text-sm text-secondary/60 uppercase tracking-wider text-center px-4">
        {text}
      </span>
    </div>
  );
};

export default ImagePlaceholder;
