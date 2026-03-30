const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/5511999991234"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-lg pulse-soft hover:scale-110 transition-transform"
      aria-label="Chamar no WhatsApp"
    >
      <span className="text-2xl">💬</span>
    </a>
  );
};

export default WhatsAppButton;
