import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, User, Star } from "lucide-react";
import Icon3D from "./Icon3D";

const borderColors = ["border-l-primary", "border-l-secondary", "border-l-petshop-teal", "border-l-accent"];

const testimonials = [
  {
    name: "Mariana Silva",
    pet: "Luna (Golden Retriever)",
    text: "A Luna adora ir lá! Sempre volta cheirosa, feliz e com lacinho novo. O carinho da equipe é visível.",
    color: "orange" as const,
  },
  {
    name: "Carlos Oliveira",
    pet: "Thor (Bulldog Francês)",
    text: "O Thor é medroso, mas a equipe tem paciência infinita. É o único lugar que ele não treme.",
    color: "green" as const,
  },
  {
    name: "Ana Beatriz",
    pet: "Mimi (Persa)",
    text: "Difícil encontrar quem cuide bem de gato. Aqui eles sabem lidar com a Mimi sem stress nenhum.",
    color: "teal" as const,
  },
  {
    name: "Roberto Mendes",
    pet: "Pipoca (SRD)",
    text: "Pipoca ficou no hotel enquanto viajamos. Recebemos foto todo dia! Voltamos tranquilos.",
    color: "yellow" as const,
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
    }, 200);
  }, []);

  const next = useCallback(() => goTo((idx + 1) % testimonials.length), [idx, goTo]);
  const prev = useCallback(() => goTo((idx - 1 + testimonials.length) % testimonials.length), [idx, goTo]);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  const t = testimonials[idx];

  return (
    <section className="py-16 bg-petshop-cream relative overflow-hidden">
      {/* Floating star decorations */}
      <div className="absolute top-8 left-8 opacity-10 animate-float">
        <Star className="w-12 h-12 text-accent fill-accent" />
      </div>
      <div className="absolute bottom-8 right-12 opacity-10 animate-float-delayed">
        <Star className="w-8 h-8 text-primary fill-primary" />
      </div>
      <div className="absolute top-1/3 right-8 opacity-8 hidden md:block animate-float">
        <Star className="w-6 h-6 text-secondary fill-secondary" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
            Quem trouxe o pet, voltou!
          </h2>
        </div>

        <div className="max-w-2xl mx-auto relative">
          <div className={`bg-card rounded-lg p-8 md:p-10 shadow-sm text-center transition-all duration-200 relative border-l-[6px] ${borderColors[idx]} ${isTransitioning ? "opacity-0 scale-95" : "opacity-100 scale-100"}`}>
            <p className="text-foreground text-lg md:text-xl italic mb-6 leading-relaxed relative z-10">
              "{t.text}"
            </p>
            <div className="flex justify-center mb-3">
              <Icon3D icon={User} size="lg" color={t.color} animate="none" />
            </div>
            <p className="font-heading font-bold text-foreground">{t.name}</p>
            <p className="text-primary text-sm font-semibold">{t.pet}</p>
          </div>

          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-primary rounded-lg p-2 shadow hover:bg-primary/90 hover:scale-110 transition-all duration-200"
          >
            <ChevronLeft className="w-5 h-5 text-primary-foreground" />
          </button>
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-primary rounded-lg p-2 shadow hover:bg-primary/90 hover:scale-110 transition-all duration-200"
          >
            <ChevronRight className="w-5 h-5 text-primary-foreground" />
          </button>

          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className={`h-2.5 rounded-full transition-all duration-200 ${
                  i === idx ? "bg-primary w-7" : "bg-border w-2.5"
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
