const items = [
  "🐾 Banho & Tosa",
  "✂️ Tosa Higiênica",
  "🦴 Rações Premium",
  "🐱 Gatos e Cães",
  "🚗 Busca e Entrega",
  "💊 Produtos Veterinários",
  "⭐ 12 Anos de Bairro",
  "📦 Entrega no Dia",
];

const AnimatedStrip = () => {
  return (
    <div className="overflow-hidden py-3" style={{ background: "var(--verde)" }}>
      <div className="flex gap-12 w-max animate-scrollX">
        {[...items, ...items].map((item, i) => (
          <span key={i} className="text-white text-sm font-medium whitespace-nowrap" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

export default AnimatedStrip;
