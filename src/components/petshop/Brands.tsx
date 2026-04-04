import premierpetLogo from '@/assets/brands/premierpet.png';
import royalcaninLogo from '@/assets/brands/royalcanin.png';
import granplusLogo from '@/assets/brands/granplus.png';
import goldenLogo from '@/assets/brands/golden.png';
import pedigreeLogo from '@/assets/brands/pedigree.png';
import whiskasLogo from '@/assets/brands/whiskas.png';
import farminaLogo from '@/assets/brands/farmina.png';
import guabiLogo from '@/assets/brands/guabi.png';

const brands = [
  { name: "PremieRpet", logo: premierpetLogo },
  { name: "Royal Canin", logo: royalcaninLogo },
  { name: "GranPlus", logo: granplusLogo },
  { name: "Golden", logo: goldenLogo },
  { name: "Pedigree", logo: pedigreeLogo },
  { name: "Whiskas", logo: whiskasLogo },
  { name: "Farmina", logo: farminaLogo },
  { name: "Guabi", logo: guabiLogo },
];

const BrandLogo = ({ brand }: { brand: { name: string; logo: string } }) => {
  return (
    <div className="flex flex-col items-center gap-2 px-6">
      <div className="h-16 w-32 flex items-center justify-center">
        <img
          src={brand.logo}
          alt={brand.name}
          className="h-14 w-auto max-w-[128px] object-contain grayscale hover:grayscale-0 transition-all duration-300"
          loading="lazy"
          width={128}
          height={56}
        />
      </div>
      <span className="text-muted-foreground font-bold text-xs">{brand.name}</span>
    </div>
  );
};

const Brands = () => {
  return (
    <section className="py-10 bg-background overflow-hidden">
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
