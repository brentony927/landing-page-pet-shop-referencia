import { useState, useEffect } from "react";
import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const [showBubble, setShowBubble] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowBubble(true), 30000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-[999]">
      {showBubble && (
        <div
          className="absolute bottom-16 right-0 bg-white rounded-2xl rounded-br-sm px-4 py-3 text-sm font-medium shadow-lg"
          style={{
            color: "var(--txt-primary)",
            border: "0.5px solid var(--border)",
            whiteSpace: "nowrap",
            animation: "fadeUp 0.4s ease both",
          }}
        >
          Precisa agendar? Me chama! 👇
          <button
            onClick={() => setShowBubble(false)}
            className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-white flex items-center justify-center text-xs"
            style={{ border: "0.5px solid var(--border)", color: "var(--txt-muted)" }}
          >
            ×
          </button>
        </div>
      )}
      <a
        href="https://wa.me/5569992216764"
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 rounded-full flex items-center justify-center animate-pulse-ring transition-transform duration-200 hover:scale-110"
        style={{ background: "#25d366", boxShadow: "0 4px 16px rgba(37,211,102,0.4)" }}
        aria-label="Chamar no WhatsApp"
      >
        <MessageCircle className="w-[26px] h-[26px] text-white" />
      </a>
    </div>
  );
};

export default WhatsAppButton;
