import { CSSProperties } from "react";

type IconName =
  | "paw"
  | "bath"
  | "scissors"
  | "bone"
  | "truck"
  | "house"
  | "star"
  | "heart"
  | "camera"
  | "sparkle";

interface Props {
  name: IconName;
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  style?: CSSProperties;
}

/**
 * Ícones desenhados à mão (SVG inline com traço irregular).
 * Cor herdada via `currentColor` — passe `color` ou estilize o pai.
 */
const HandDrawnIcon = ({ name, size = 28, color = "currentColor", strokeWidth = 2, className = "", style }: Props) => {
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 64 64",
    fill: "none",
    stroke: color,
    strokeWidth,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    className,
    style,
    "aria-hidden": true,
  };

  switch (name) {
    case "paw":
      return (
        <svg {...common}>
          <path d="M22 38c-1 5 3 9 8 9 5 0 9-3 10-7 1-4-2-7-6-9-4-2-11 1-12 7Z" />
          <ellipse cx="16" cy="28" rx="4" ry="5" transform="rotate(-15 16 28)" />
          <ellipse cx="26" cy="18" rx="4" ry="5" transform="rotate(-5 26 18)" />
          <ellipse cx="38" cy="18" rx="4" ry="5" transform="rotate(8 38 18)" />
          <ellipse cx="48" cy="28" rx="4" ry="5" transform="rotate(15 48 28)" />
        </svg>
      );
    case "bath":
      return (
        <svg {...common}>
          {/* banheira */}
          <path d="M8 34c0-1 1-2 2-2h44c1 0 2 1 2 2v2c0 7-6 13-13 13H21c-7 0-13-6-13-13v-2Z" />
          <path d="M14 49l-2 5M50 49l2 5" />
          {/* chuveiro / gotas */}
          <path d="M44 12c0-3 2-5 5-5s5 2 5 5" />
          <path d="M45 16c1 2 3 3 4 3s3-1 4-3" />
          <path d="M40 22c1 1 1 3 0 4M48 24c1 1 1 3 0 4M44 27c1 1 1 3 0 4" />
        </svg>
      );
    case "scissors":
      return (
        <svg {...common}>
          <circle cx="18" cy="20" r="6" />
          <circle cx="18" cy="44" r="6" />
          <path d="M23 24l30 18M23 40l30-18" />
          <path d="M32 32l-3 1" />
        </svg>
      );
    case "bone":
      return (
        <svg {...common}>
          <path d="M16 18c-4 0-7 3-7 6 0 2 1 4 3 5-2 1-3 3-3 5 0 3 3 6 7 6 3 0 5-2 6-4l20 0c1 2 3 4 6 4 4 0 7-3 7-6 0-2-1-4-3-5 2-1 3-3 3-5 0-3-3-6-7-6-3 0-5 2-6 4l-20 0c-1-2-3-4-6-4Z" />
        </svg>
      );
    case "truck":
      return (
        <svg {...common}>
          <path d="M6 18h28v22H6z" />
          <path d="M34 26h10l8 8v6H34z" />
          <circle cx="16" cy="44" r="4" />
          <circle cx="44" cy="44" r="4" />
          <path d="M11 22l3 2M40 30l6 0" />
        </svg>
      );
    case "house":
      return (
        <svg {...common}>
          <path d="M8 30L32 10l24 20" />
          <path d="M14 28v22h36V28" />
          <path d="M26 50V36h12v14" />
        </svg>
      );
    case "star":
      return (
        <svg {...common}>
          <path d="M32 8l7 16 17 2-13 11 4 17-15-9-15 9 4-17L8 26l17-2z" />
        </svg>
      );
    case "heart":
      return (
        <svg {...common}>
          <path d="M32 52S10 38 10 24c0-7 6-12 12-12 5 0 8 3 10 6 2-3 5-6 10-6 6 0 12 5 12 12 0 14-22 28-22 28Z" />
        </svg>
      );
    case "camera":
      return (
        <svg {...common}>
          <path d="M8 20h10l4-6h20l4 6h10v28H8z" />
          <circle cx="32" cy="32" r="9" />
          <circle cx="32" cy="32" r="4" />
          <path d="M48 24h4" />
        </svg>
      );
    case "sparkle":
      return (
        <svg {...common}>
          <path d="M32 8v14M32 42v14M8 32h14M42 32h14" />
          <path d="M16 16l8 8M40 40l8 8M48 16l-8 8M16 48l8-8" />
        </svg>
      );
  }
};

export default HandDrawnIcon;