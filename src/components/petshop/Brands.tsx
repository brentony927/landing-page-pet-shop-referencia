const brands = [
  { name: "PetNutri", emoji: "🦴" },
  { name: "VitaPet", emoji: "💊" },
  { name: "NaturDog", emoji: "🌿" },
  { name: "FreshPaws", emoji: "🐾" },
  { name: "CatLife", emoji: "🐈" },
  { name: "BioVet", emoji: "🧬" },
  { name: "AquaPet", emoji: "💧" },
  { name: "PetMax", emoji: "⭐" },
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
              <span className="text-2xl">{b.emoji}</span>
              <span className="font-heading font-bold text-foreground text-sm">{b.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Brands;
