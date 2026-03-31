const brands = [
  { name: "PremieRpet", logo: "https://www.premierpet.com.br/wp-content/themes/developer-developer/img/logo-premier.svg" },
  { name: "Royal Canin", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Royal_Canin_logo.svg/320px-Royal_Canin_logo.svg.png" },
  { name: "GranPlus", logo: "https://www.granplus.com.br/img/logo-granplus.png" },
  { name: "Golden", logo: "https://www.premierpet.com.br/wp-content/themes/developer-developer/img/logo-golden.svg" },
  { name: "Pedigree", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Pedigree_logo.svg/320px-Pedigree_logo.svg.png" },
  { name: "Whiskas", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Whiskas_logo.svg/320px-Whiskas_logo.svg.png" },
  { name: "Farmina", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Farmina_Pet_Foods_logo.svg/320px-Farmina_Pet_Foods_logo.svg.png" },
  { name: "Guabi", logo: "https://guabi.com.br/wp-content/uploads/2021/08/logo-guabi.svg" },
];

const BrandLogo = ({ brand }: { brand: { name: string; logo: string } }) => {
  return (
    <div className="flex flex-col items-center gap-2 px-6">
      <div className="h-12 w-24 flex items-center justify-center">
        <img
          src={brand.logo}
          alt={brand.name}
          className="h-10 w-auto max-w-[96px] object-contain grayscale hover:grayscale-0 transition-all duration-300"
          loading="lazy"
          onError={(e) => {
            const target = e.currentTarget;
            target.style.display = "none";
            const fallback = target.nextElementSibling as HTMLElement;
            if (fallback) fallback.style.display = "flex";
          }}
        />
        <span
          className="hidden font-heading font-bold text-foreground/60 text-sm tracking-tight"
          style={{ display: "none" }}
        >
          {brand.name}
        </span>
      </div>
      <span className="text-muted-foreground font-bold text-xs">{brand.name}</span>
    </div>
  );
};

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
            <BrandLogo key={i} brand={b} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Brands;
