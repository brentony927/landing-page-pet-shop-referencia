import { useState } from "react";

interface Props {
  src: string;
  alt: string;
  className?: string;
  style?: React.CSSProperties;
  onError?: () => void;
}

const ImageSkeleton = ({ src, alt, className = "", style, onError }: Props) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="relative w-full h-full">
      {!loaded && (
        <div className="absolute inset-0 rounded-xl overflow-hidden">
          <div
            className="w-full h-full"
            style={{
              background: "linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%)",
              backgroundSize: "200% 100%",
              animation: "shimmer 1.5s infinite",
            }}
          />
        </div>
      )}
      <img
        src={src}
        alt={alt}
        className={`${className} transition-opacity duration-500 ${loaded ? "opacity-100" : "opacity-0"}`}
        style={style}
        loading="lazy"
        onLoad={() => setLoaded(true)}
        onError={onError}
      />
      <style>{`
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
      `}</style>
    </div>
  );
};

export default ImageSkeleton;
