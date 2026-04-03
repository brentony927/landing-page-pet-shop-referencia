import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    name: "Mariana Silva",
    pet: "Luna (Golden Retriever)",
    text: "A Luna adora ir lá! Sempre volta cheirosa, feliz e com lacinho novo. O carinho da equipe é visível — você percebe que eles gostam mesmo do que fazem.",
    stars: 5,
  },
  {
    name: "Carlos Oliveira",
    pet: "Thor (Bulldog Francês)",
    text: "O Thor é medroso, mas lá eles têm paciência. É o único lugar que ele não treme.",
    stars: 5,
  },
  {
    name: "Ana Beatriz",
    pet: "Mimi (Persa)",
    text: "Difícil encontrar quem cuide bem de gato. Aqui eles sabem lidar com a Mimi sem stress nenhum. Já indicamos pra três vizinhas e todas ficaram fãs também.",
    stars: 4,
  },
  {
    name: "Roberto Mendes",
    pet: "Pipoca (SRD)",
    text: "Pipoca ficou no hotel enquanto viajamos. Recebemos foto todo dia!",
    stars: 5,
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
    }, 150);
  }, []);

  const next = useCallback(() => goTo((idx + 1) % testimonials.length), [idx, goTo]);
  const prev = useCallback(() => goTo((idx - 1 + testimonials.length) % testimonials.length), [idx, goTo]);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  const t = testimonials[idx];

  return (
    <section className="py-12 md:py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-black text-foreground mb-8 md:mb-10">
          O que nossos clientes dizem
        </h2>

        <div className="max-w-2xl mx-auto relative px-8 md:px-12">
          <div className={`bg-muted/50 rounded-lg p-6 sm:p-8 md:p-10 transition-all duration-150 border border-border ${isTransitioning ? "opacity-0 scale-95" : "opacity-100 scale-100"}`}>
            <div className="flex gap-0.5 mb-4">
              {Array.from({ length: 5 }, (_, i) => (
                <Star key={i} className={`w-4 h-4 ${i < t.stars ? "text-accent fill-accent" : "text-border"}`} />
              ))}
            </div>
            <p className="text-foreground text-base md:text-lg mb-6 leading-relaxed">
              "{t.text}"
            </p>
            <div>
              <p className="font-bold text-foreground">{t.name}</p>
              <p className="text-primary text-sm font-medium">{t.pet}</p>
            </div>
          </div>

          <button onClick={prev} className="absolute left-0 top-1/2 -translate-y-1/2 bg-primary rounded-md p-2 shadow hover:bg-primary/90 transition-all duration-200">
            <ChevronLeft className="w-4 h-4 md:w-5 md:h-5 text-primary-foreground" />
          </button>
          <button onClick={next} className="absolute right-0 top-1/2 -translate-y-1/2 bg-primary rounded-md p-2 shadow hover:bg-primary/90 transition-all duration-200">
            <ChevronRight className="w-4 h-4 md:w-5 md:h-5 text-primary-foreground" />
          </button>

          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className={`h-2 rounded-sm transition-all duration-200 ${i === idx ? "bg-primary w-6" : "bg-border w-2.5"}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
