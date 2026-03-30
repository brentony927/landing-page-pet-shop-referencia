import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/5511999991234"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-secondary flex items-center justify-center shadow-[0_4px_15px_rgba(34,166,110,0.4)] pulse-soft hover:scale-110 transition-transform"
      style={{ perspective: "200px", transform: "rotateX(5deg) rotateY(-5deg)" }}
      aria-label="Chamar no WhatsApp"
    >
      <MessageCircle className="w-7 h-7 text-primary-foreground drop-shadow-md" strokeWidth={2.5} />
    </a>
  );
};

export default WhatsAppButton;
