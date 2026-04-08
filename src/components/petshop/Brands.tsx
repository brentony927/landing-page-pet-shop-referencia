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

const Brands = () => {
  return (
    <section className="py-12 overflow-hidden bg-white">
      <div className="max-w-[1100px] mx-auto px-4 mb-8">
        <h2 className="text-xl md:text-2xl font-extrabold text-center" style={{ fontFamily: "'Baloo 2', cursive", color: "var(--pet-navy)" }}>
          Marcas que trabalhamos
        </h2>
      </div>

      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-20 z-10" style={{ background: "linear-gradient(to right, white, transparent)" }} />
        <div className="absolute right-0 top-0 bottom-0 w-20 z-10" style={{ background: "linear-gradient(to left, white, transparent)" }} />

        <div className="flex animate-marquee gap-8 w-max">
          {[...brands, ...brands, ...brands].map((b, i) => (
            <div key={i} className="flex-shrink-0 group">
              <div className="w-36 h-20 rounded-xl bg-white flex items-center justify-center px-4 transition-all duration-300 group-hover:shadow-lg group-hover:-translate-y-1" style={{ border: "1.5px solid var(--pet-gray-border)" }}>
                <img src={b.logo} alt={b.name} className="h-12 w-auto max-w-[110px] object-contain grayscale group-hover:grayscale-0 transition-all duration-300" loading="lazy" width={110} height={48} />
              </div>
              <p className="text-center text-[11px] font-bold mt-2" style={{ color: "var(--pet-gray-light)" }}>{b.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Brands;
