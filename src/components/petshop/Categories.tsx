const categories = [
  { emoji: "🛁", title: "Banho & Tosa", sub: "Cães e gatos" },
  { emoji: "🦴", title: "Rações", sub: "Todas as marcas" },
  { emoji: "✂️", title: "Tosa", sub: "Higiênica e estética" },
  { emoji: "🚗", title: "Busca e Entrega", sub: "Mesmo dia" },
];

const Categories = () => {
  return (
    <section className="py-12 px-4" style={{ background: "var(--verde-bg)" }}>
      <div className="max-w-[1100px] mx-auto">
        <p className="text-[13px] uppercase tracking-widest font-medium mb-3" style={{ color: "var(--verde)" }}>
          O que você precisa hoje?
        </p>
        <h2 className="text-2xl md:text-3xl font-black mb-8" style={{ fontFamily: "'Fraunces', Georgia, serif", color: "var(--txt)" }}>
          Escolha uma categoria
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {categories.map((c) => (
            <div
              key={c.title}
              className="rounded-xl p-6 text-center cursor-pointer transition-all duration-200 bg-white hover:-translate-y-1"
              style={{ border: "1px solid var(--borda)" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "var(--verde)";
                e.currentTarget.style.boxShadow = "0 8px 24px rgba(22,163,74,0.12)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "var(--borda)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <span className="text-5xl block mb-3">{c.emoji}</span>
              <h3 className="text-base font-bold mb-1" style={{ fontFamily: "'Fraunces', Georgia, serif", color: "var(--txt)" }}>{c.title}</h3>
              <p className="text-[13px]" style={{ color: "var(--txt2)" }}>{c.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
