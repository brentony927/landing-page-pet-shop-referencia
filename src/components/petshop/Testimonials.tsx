import { useInView } from "@/hooks/useInView";

const testimonials = [
  {
    name: "Maria Aparecida",
    role: "Cliente há 4 anos",
    petName: "Bob",
    petImage: "https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=100&q=80",
    text: "Levo o Bob aqui há 4 anos. Ele chega animado e sai cheiroso.",
    stars: 5,
  },
  {
    name: "João Carlos",
    role: "Tutor do Mingau",
    petName: "Mingau",
    petImage: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=100&q=80",
    text: "Eles conhecem o meu gato pelo nome. Sempre me avisam quando ele está agitado. Isso vale ouro. Já tentei outros pet shops mas aqui é diferente, o tratamento é outro nível.",
    stars: 5,
  },
  {
    name: "Renata Silva",
    role: "Tutora da Luna e da Mel",
    petName: "Luna",
    petImage: "https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?w=100&q=80",
    text: "Voltei depois de testar outros. Atendimento diferente.",
    stars: 4,
  },
];

const Testimonials = () => {
  const { ref, visible } = useInView(0.2);

  return (
    <section className="py-16 md:py-20 px-4 bg-white" ref={ref}>
      <div className={`max-w-[1100px] mx-auto transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <h2 className="text-2xl md:text-[2rem] font-black mb-10" style={{ fontFamily: "'Playfair Display', Georgia, serif", color: "var(--txt-primary)" }}>
          Quem já veio, voltou
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {testimonials.map((t, idx) => (
            <div
              key={t.name}
              className="rounded-xl p-6 transition-all duration-300"
              style={{
                background: idx === 1 ? "var(--forest)" : "#fafaf9",
                border: idx === 1 ? "none" : "1px solid var(--border)",
                transitionDelay: `${idx * 100}ms`,
              }}
              onMouseEnter={(e) => {
                if (idx !== 1) e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "none";
              }}
            >
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: t.stars }, (_, i) => (
                  <span key={i} className="text-base" style={{ color: "var(--amber)" }}>★</span>
                ))}
                {Array.from({ length: 5 - t.stars }, (_, i) => (
                  <span key={i} className="text-base" style={{ color: idx === 1 ? "#374151" : "#d6d3d1" }}>★</span>
                ))}
              </div>
              <p className="text-[15px] leading-relaxed mb-5" style={{ color: idx === 1 ? "#d1d5db" : "var(--txt-secondary)" }}>
                "{t.text}"
              </p>
              <div className="flex items-center gap-3">
                <img
                  src={t.petImage}
                  alt={`Pet ${t.petName}`}
                  className="w-9 h-9 rounded-full object-cover"
                  style={{ border: "2px solid var(--border)" }}
                />
                <div>
                  <p className="text-sm font-semibold" style={{ color: idx === 1 ? "#fff" : "var(--txt-primary)", fontFamily: "'Playfair Display', Georgia, serif" }}>{t.name}</p>
                  <p className="text-xs" style={{ color: idx === 1 ? "#9ca3af" : "var(--txt-secondary)" }}>{t.role}</p>
                  <p className="text-[11px] italic" style={{ color: idx === 1 ? "var(--amber)" : "var(--amber)" }}>{t.petName}</p>
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
