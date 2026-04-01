import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/5569992216764"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-secondary flex items-center justify-center shadow-[0_4px_15px_rgba(34,166,110,0.4)] hover:scale-110 transition-transform"
      aria-label="Chamar no WhatsApp"
    >
      <MessageCircle className="w-7 h-7 text-primary-foreground" strokeWidth={2.5} />
    </a>
  );
};

export default WhatsAppButton;
