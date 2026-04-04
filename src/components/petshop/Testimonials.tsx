const testimonials = [
  {
    initials: "MA",
    initialsBg: "#dcfce7",
    name: "Maria Aparecida",
    role: "Cliente há 4 anos",
    text: "Levo o Bob aqui há 4 anos. Ele chega animado e sai cheiroso.",
    stars: 5,
  },
  {
    initials: "JC",
    initialsBg: "#ffedd5",
    name: "João Carlos",
    role: "Tutor do Mingau",
    text: "Eles conhecem o meu gato pelo nome. Sempre me avisam quando ele está agitado. Isso vale ouro. Já tentei outros pet shops mas aqui é diferente, o tratamento é outro nível.",
    stars: 5,
  },
  {
    initials: "RS",
    initialsBg: "#fef08a",
    name: "Renata Silva",
    role: "Tutora da Luna e da Mel",
    text: "Voltei depois de testar outros. Atendimento diferente.",
    stars: 4,
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 md:py-20 px-4 bg-white">
      <div className="max-w-[1100px] mx-auto">
        <h2 className="text-2xl md:text-[2.2rem] font-black mb-10" style={{ fontFamily: "'Fraunces', Georgia, serif", color: "#1c1917" }}>
          Quem já veio, voltou
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="rounded-xl p-6 transition-all duration-200"
              style={{ background: "#fafaf9", border: "1px solid #e7e5e4" }}
              onMouseEnter={(e) => e.currentTarget.style.background = "#f0fdf4"}
              onMouseLeave={(e) => e.currentTarget.style.background = "#fafaf9"}
            >
              <div className="flex gap-0.5 mb-3">
                {Array.from({ length: t.stars }, (_, i) => (
                  <span key={i} className="text-lg" style={{ color: "#f97316" }}>★</span>
                ))}
                {Array.from({ length: 5 - t.stars }, (_, i) => (
                  <span key={i} className="text-lg" style={{ color: "#d6d3d1" }}>★</span>
                ))}
              </div>
              <p className="text-[15px] leading-relaxed mb-4" style={{ color: "#57534e" }}>
                "{t.text}"
              </p>
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold"
                  style={{ background: t.initialsBg, color: "#16a34a" }}
                >
                  {t.initials}
                </div>
                <div>
                  <p className="text-sm font-semibold" style={{ color: "#1c1917" }}>{t.name}</p>
                  <p className="text-xs" style={{ color: "#78716c" }}>{t.role}</p>
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
