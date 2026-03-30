import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Mariana Silva",
    pet: "Luna (Golden Retriever)",
    text: "A Luna adora ir lá! Sempre volta cheirosa, feliz e com lacinho novo. O carinho da equipe é visível.",
    avatar: "🧑‍🦰",
  },
  {
    name: "Carlos Oliveira",
    pet: "Thor (Bulldog Francês)",
    text: "O Thor é medroso, mas a equipe tem paciência infinita. É o único lugar que ele não treme.",
    avatar: "👨",
  },
  {
    name: "Ana Beatriz",
    pet: "Mimi (Persa)",
    text: "Difícil encontrar quem cuide bem de gato. Aqui eles sabem lidar com a Mimi sem stress nenhum.",
    avatar: "👩",
  },
  {
    name: "Roberto Mendes",
    pet: "Pipoca (SRD)",
    text: "Pipoca ficou no hotel enquanto viajamos. Recebemos foto todo dia! Voltamos tranquilos.",
    avatar: "👴",
  },
];

const Testimonials = () => {
  const [idx, setIdx] = useState(0);
  const next = useCallback(() => setIdx((i) => (i + 1) % testimonials.length), []);
  const prev = useCallback(() => setIdx((i) => (i - 1 + testimonials.length) % testimonials.length), []);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  const t = testimonials[idx];

  return (
    <section className="py-20 bg-petshop-mint-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-4xl mb-3 block">💬</span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-3">
            O que dizem sobre nós
          </h2>
        </div>

        <div className="max-w-2xl mx-auto relative">
          <div className="bg-card rounded-2xl p-8 md:p-10 shadow-sm border border-border text-center transition-all duration-500">
            <span className="text-5xl mb-4 block">{t.avatar}</span>
            <p className="text-foreground text-lg md:text-xl italic mb-6 leading-relaxed">
              "{t.text}"
            </p>
            <p className="font-heading font-bold text-foreground">{t.name}</p>
            <p className="text-secondary text-sm font-semibold">{t.pet}</p>
          </div>

          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-card border border-border rounded-full p-2 shadow hover:bg-muted transition-colors"
          >
            <ChevronLeft className="w-5 h-5 text-foreground" />
          </button>
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-card border border-border rounded-full p-2 shadow hover:bg-muted transition-colors"
          >
            <ChevronRight className="w-5 h-5 text-foreground" />
          </button>

          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setIdx(i)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  i === idx ? "bg-secondary w-7" : "bg-border"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
