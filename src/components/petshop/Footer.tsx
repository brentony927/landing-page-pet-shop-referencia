import { PawPrint } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                <PawPrint className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="font-heading text-lg font-bold">Patinhas & Cia</span>
            </div>
            <p className="text-background/60 text-sm leading-relaxed">
              Cuidando do seu melhor amigo com carinho, respeito e profissionalismo desde 2012.
            </p>
          </div>

          <div>
            <h4 className="font-heading font-bold mb-3">Links Rápidos</h4>
            <nav className="space-y-2">
              {["Início", "Serviços", "Rações", "Sobre", "Contato"].map((l) => (
                <a
                  key={l}
                  href={`#${l.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")}`}
                  className="block text-background/60 text-sm hover:text-primary transition-colors"
                >
                  {l}
                </a>
              ))}
            </nav>
          </div>

          <div>
            <h4 className="font-heading font-bold mb-3">Redes Sociais</h4>
            <div className="flex gap-3">
              {["📸", "📘", "🎵"].map((emoji, i) => (
                <span
                  key={i}
                  className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center text-xl cursor-pointer hover:bg-background/20 transition-colors"
                >
                  {emoji}
                </span>
              ))}
            </div>
            <p className="text-background/60 text-sm mt-4">
              Seg a Sex: 8h – 19h<br />
              Sáb: 8h – 16h
            </p>
          </div>
        </div>

        <div className="border-t border-background/10 pt-6 text-center">
          <p className="text-background/40 text-sm">
            Feito com 🐾 para quem ama pets — © 2024 Patinhas & Cia
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
