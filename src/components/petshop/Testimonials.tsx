const testimonials = [
  {
    initials: "MA",
    initialsBg: "#dcfce7",
    name: "Maria Aparecida",
    role: "Cliente há 4 anos",
    text: "Levo o Bob aqui há 4 anos. Ele chega animado, sai cheiroso e ainda fica querendo ficar mais tempo. Melhor banho e tosa do bairro sem dúvida.",
    stars: 5,
  },
  {
    initials: "JC",
    initialsBg: "#ffedd5",
    name: "João Carlos",
    role: "Tutor do Mingau",
    text: "Eles conhecem o meu gato pelo nome. Sempre me avisam quando ele está agitado. Isso vale ouro.",
    stars: 5,
  },
  {
    initials: "RS",
    initialsBg: "#fef08a",
    name: "Renata Silva",
    role: "Tutora da Luna e da Mel",
    text: "Tentei outros pet shops do bairro, mas voltei. O atendimento aqui é diferente. Parece que realmente gostam dos animais.",
    stars: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 md:py-20 px-4 bg-white">
      <div className="max-w-[1100px] mx-auto">
        <p className="text-xs uppercase tracking-widest font-medium mb-3" style={{ color: "var(--verde)" }}>
          O que dizem sobre a gente
        </p>
        <h2 className="text-2xl md:text-[2.2rem] font-black mb-12" style={{ fontFamily: "'Fraunces', Georgia, serif", color: "var(--txt)" }}>
          Pets felizes. Donos mais felizes ainda.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="rounded-xl p-6 transition-all duration-200 hover:-translate-y-1"
              style={{ background: "var(--verde-bg)", border: "1px solid #bbf7d0" }}
              onMouseEnter={(e) => e.currentTarget.style.boxShadow = "0 8px 24px rgba(22,163,74,0.1)"}
              onMouseLeave={(e) => e.currentTarget.style.boxShadow = "none"}
            >
              <div className="flex gap-0.5 mb-3">
                {Array.from({ length: t.stars }, (_, i) => (
                  <span key={i} className="text-lg" style={{ color: "var(--laranja)" }}>★</span>
                ))}
              </div>
              <p className="text-[15px] leading-relaxed mb-4 italic" style={{ color: "var(--txt2)" }}>
                "{t.text}"
              </p>
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold"
                  style={{ background: t.initialsBg, color: "var(--verde)" }}
                >
                  {t.initials}
                </div>
                <div>
                  <p className="text-sm font-semibold" style={{ color: "var(--txt)" }}>{t.name}</p>
                  <p className="text-xs" style={{ color: "var(--txt2)" }}>{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
