import { Bone, Heart, Leaf, PawPrint, Cat, Droplets, Star, ShoppingBag } from "lucide-react";
import Icon3D from "./Icon3D";

const brands = [
  { name: "PetNutri", icon: Bone, color: "orange" as const },
  { name: "VitaPet", icon: Heart, color: "green" as const },
  { name: "NaturDog", icon: Leaf, color: "teal" as const },
  { name: "FreshPaws", icon: PawPrint, color: "yellow" as const },
  { name: "CatLife", icon: Cat, color: "green" as const },
  { name: "BioVet", icon: Droplets, color: "orange" as const },
  { name: "AquaPet", icon: Droplets, color: "teal" as const },
  { name: "PetMax", icon: Star, color: "yellow" as const },
];

const Brands = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <p className="text-muted-foreground font-bold text-sm uppercase tracking-wider mb-2">Parceiros</p>
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground">
            MARCAS QUE CONFIAMOS
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-6 md:gap-10">
          {brands.map((b) => (
            <div
              key={b.name}
              className="flex items-center gap-2 px-6 py-3 bg-card rounded-xl border border-border hover-scale cursor-pointer transition-all hover:border-primary hover:shadow-md"
            >
              <Icon3D icon={b.icon} size="sm" color={b.color} animate="none" className="!rounded-lg !shadow-none" />
              <span className="font-heading font-bold text-foreground text-sm">{b.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Brands;
