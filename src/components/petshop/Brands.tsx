import { Dog, Cat, PawPrint, Heart, Bird, Fish, Star, Bone } from "lucide-react";
import Icon3D from "./Icon3D";

const brands = [
  { name: "PremieRpet", icon: Dog, color: "orange" as const },
  { name: "Royal Canin", icon: Cat, color: "green" as const },
  { name: "GranPlus", icon: PawPrint, color: "yellow" as const },
  { name: "Golden", icon: Heart, color: "orange" as const },
  { name: "Pedigree", icon: Bone, color: "teal" as const },
  { name: "Whiskas", icon: Fish, color: "green" as const },
  { name: "Farmina", icon: Star, color: "yellow" as const },
  { name: "Guabi", icon: Bird, color: "orange" as const },
];

const Brands = () => {
  return (
    <section className="py-10 bg-petshop-cream overflow-hidden">
      <div className="container mx-auto px-4 mb-6">
        <p className="text-center text-muted-foreground font-bold text-sm">
          Marcas que a gente confia e indica
        </p>
      </div>

      <div className="relative">
        <div className="flex animate-marquee gap-10 w-max">
          {[...brands, ...brands].map((b, i) => (
            <div key={i} className="flex flex-col items-center gap-2 px-4">
              <Icon3D icon={b.icon} size="md" color={b.color} animate="none" />
              <span className="text-muted-foreground font-bold text-xs">{b.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Brands;
