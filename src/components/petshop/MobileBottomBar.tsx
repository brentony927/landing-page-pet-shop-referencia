import { useState, useEffect } from "react";
import { MessageCircle, Phone } from "lucide-react";

const WA_LINK = "https://wa.me/5569992216764?text=Oi%2C%20quero%20agendar%20um%20banho%20pro%20meu%20pet";

const MobileBottomBar = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[998] sm:hidden" style={{ paddingBottom: "env(safe-area-inset-bottom)" }}>
      <div className="flex items-center gap-2 px-3 py-2.5 bg-white/95 backdrop-blur-lg" style={{ borderTop: "1px solid #f0f0f0", boxShadow: "0 -4px 20px rgba(0,0,0,0.08)" }}>
        <a
          href="tel:+5569992216764"
          className="flex items-center justify-center gap-1.5 rounded-xl py-2.5 text-[12px] font-bold flex-1 transition-all active:scale-95"
          style={{ border: "1.5px solid var(--pet-action)", color: "var(--pet-action)" }}
        >
          <Phone className="w-3.5 h-3.5" /> Ligar
        </a>
        <a
          href={WA_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-1.5 rounded-xl py-2.5 text-[12px] font-extrabold text-white flex-[2] transition-all active:scale-95"
          style={{ background: "var(--pet-action)", boxShadow: "0 4px 16px var(--pet-action-glow)" }}
        >
          <MessageCircle className="w-3.5 h-3.5" /> Agendar agora
        </a>
      </div>
    </div>
  );
};

export default MobileBottomBar;
