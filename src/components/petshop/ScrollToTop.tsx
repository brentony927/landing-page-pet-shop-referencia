import { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react";

const ScrollToTop = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const h = () => setShow(window.scrollY > 400);
    window.addEventListener("scroll", h, { passive: true });
    return () => window.removeEventListener("scroll", h);
  }, []);

  if (!show) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-36 sm:bottom-24 right-5 z-40 w-11 h-11 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl active:scale-90"
      style={{
        background: "var(--pet-navy)",
        boxShadow: "0 4px 20px rgba(13,27,42,0.3)",
        animation: "fadeUp 0.3s ease",
      }}
      aria-label="Voltar ao topo"
    >
      <ChevronUp className="w-5 h-5" />
    </button>
  );
};

export default ScrollToTop;
