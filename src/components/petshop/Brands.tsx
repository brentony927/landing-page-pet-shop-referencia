const brands = [
  { name: "PremieRpet", logo: "https://logo.clearbit.com/premierpet.com.br" },
  { name: "Royal Canin", logo: "https://logo.clearbit.com/royalcanin.com" },
  { name: "GranPlus", logo: "https://logo.clearbit.com/granplus.com.br" },
  { name: "Golden", logo: "https://logo.clearbit.com/goldenpet.com.br" },
  { name: "Pedigree", logo: "https://logo.clearbit.com/pedigree.com" },
  { name: "Whiskas", logo: "https://logo.clearbit.com/whiskas.com" },
  { name: "Farmina", logo: "https://logo.clearbit.com/farmina.com" },
  { name: "Guabi", logo: "https://logo.clearbit.com/guabi.com.br" },
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
              <img
                src={b.logo}
                alt={b.name}
                className="h-10 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
                loading="lazy"
              />
              <span className="text-muted-foreground font-bold text-xs">{b.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Brands;
