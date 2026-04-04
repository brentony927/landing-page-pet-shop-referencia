import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/5569992216764"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-[999] w-14 h-14 rounded-full flex items-center justify-center animate-pulse-ring transition-transform duration-200 hover:scale-110"
      style={{ background: "var(--verde)", boxShadow: "0 4px 16px rgba(22,163,74,0.4)" }}
      aria-label="Chamar no WhatsApp"
    >
      <MessageCircle className="w-[26px] h-[26px] text-white" />
    </a>
  );
};

export default WhatsAppButton;
