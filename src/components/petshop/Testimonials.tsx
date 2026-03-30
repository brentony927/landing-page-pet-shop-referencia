import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

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
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goTo = useCallback((newIdx: number) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setIdx(newIdx);
      setIsTransitioning(false);
    }, 250);
  }, []);

  const next = useCallback(() => goTo((idx + 1) % testimonials.length), [idx, goTo]);
  const prev = useCallback(() => goTo((idx - 1 + testimonials.length) % testimonials.length), [idx, goTo]);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  const t = testimonials[idx];

  return (
    <section className="py-20 bg-accent">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-accent-foreground/60 font-bold text-sm uppercase tracking-wider mb-2">Depoimentos</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-accent-foreground uppercase">
            O QUE DIZEM SOBRE NÓS
          </h2>
        </div>

        <div className="max-w-2xl mx-auto relative">
          <div className={`bg-card rounded-2xl p-8 md:p-10 shadow-lg text-center transition-all duration-400 ${isTransitioning ? "opacity-0 scale-95" : "opacity-100 scale-100"}`}>
            <Quote className="w-10 h-10 text-primary mx-auto mb-4" />
            <p className="text-foreground text-lg md:text-xl italic mb-6 leading-relaxed">
              "{t.text}"
            </p>
            <span className="text-5xl mb-3 block">{t.avatar}</span>
            <p className="font-heading font-bold text-foreground">{t.name}</p>
            <p className="text-primary text-sm font-semibold">{t.pet}</p>
          </div>

          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-petshop-teal rounded-full p-2 shadow hover:bg-petshop-teal-light hover:scale-110 transition-all"
          >
            <ChevronLeft className="w-5 h-5 text-primary-foreground" />
          </button>
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-petshop-teal rounded-full p-2 shadow hover:bg-petshop-teal-light hover:scale-110 transition-all"
          >
            <ChevronRight className="w-5 h-5 text-primary-foreground" />
          </button>

          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  i === idx ? "bg-petshop-teal w-7" : "bg-accent-foreground/20 w-2.5"
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
