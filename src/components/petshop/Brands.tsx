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
    <section className="py-12 overflow-hidden" style={{ background: "var(--cream)" }}>
      <div className="max-w-[1100px] mx-auto px-4 mb-8">
        <h2 className="text-xl md:text-2xl font-black text-center" style={{ fontFamily: "'Playfair Display', Georgia, serif", color: "var(--txt-primary)" }}>
          Marcas que trabalhamos
        </h2>
      </div>

      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-20 z-10" style={{ background: "linear-gradient(to right, var(--cream), transparent)" }} />
        <div className="absolute right-0 top-0 bottom-0 w-20 z-10" style={{ background: "linear-gradient(to left, var(--cream), transparent)" }} />

        <div className="flex animate-marquee gap-8 w-max">
          {[...brands, ...brands, ...brands].map((b, i) => (
            <div key={i} className="flex-shrink-0 group">
              <div className="w-36 h-20 rounded-xl bg-white flex items-center justify-center px-4 transition-all duration-300 group-hover:shadow-md group-hover:-translate-y-1" style={{ border: "1px solid var(--border)" }}>
                <img src={b.logo} alt={b.name} className="h-12 w-auto max-w-[110px] object-contain grayscale group-hover:grayscale-0 transition-all duration-300" loading="lazy" width={110} height={48} />
              </div>
              <p className="text-center text-[11px] font-semibold mt-2 transition-colors" style={{ color: "var(--txt-muted)" }}>{b.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Brands;
