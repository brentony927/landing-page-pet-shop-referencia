import { useState, useEffect } from "react";
import { MessageCircle } from "lucide-react";

const WA_LINK = "https://wa.me/5569992216764?text=Oi%2C%20quero%20agendar%20um%20banho%20pro%20meu%20pet";

const WhatsAppButton = () => {
  const [showBubble, setShowBubble] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowBubble(true), 15000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed bottom-5 right-4 sm:bottom-6 sm:right-6 z-[999]">
      {showBubble && (
        <div
          className="absolute bottom-16 sm:bottom-20 right-0 bg-white rounded-2xl rounded-br-sm px-3 sm:px-4 py-2.5 sm:py-3 text-xs sm:text-sm font-bold"
          style={{
            color: "#333",
            border: "1.5px solid var(--pet-gray-border)",
            whiteSpace: "nowrap",
            animation: "fadeUp 0.4s ease both",
            boxShadow: "0 8px 24px rgba(0,0,0,0.1)",
          }}
        >
          Agende agora pelo WhatsApp! 🐾
          <button
            onClick={() => setShowBubble(false)}
            className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-white flex items-center justify-center text-xs"
            style={{ border: "1px solid var(--pet-gray-border)", color: "var(--pet-gray-light)" }}
          >
            ×
          </button>
        </div>
      )}
      <a
        href={WA_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center animate-pulse-ring transition-transform duration-200 hover:scale-110 active:scale-95"
        style={{ background: "#25d366", boxShadow: "0 6px 24px rgba(37,211,102,0.5)" }}
        aria-label="Chamar no WhatsApp"
      >
        <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
      </a>
    </div>
  );
};

export default WhatsAppButton;
