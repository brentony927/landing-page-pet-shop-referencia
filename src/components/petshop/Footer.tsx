import { PawPrint } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-petshop-teal text-primary-foreground">
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <PawPrint className="w-6 h-6 text-accent" />
              <span className="text-lg font-bold" style={{ fontFamily: "'Fraunces', Georgia, serif" }}>Patinhas & Cia</span>
            </div>
            <p className="text-primary-foreground/50 text-sm leading-relaxed">
              Desde 2012 cuidando do seu melhor amigo com carinho de verdade.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-3 text-accent">Links</h4>
            <nav className="space-y-2">
              {["Início", "Serviços", "Rações", "Sobre", "Contato"].map((l) => (
                <a
                  key={l}
                  href={`#${l.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")}`}
                  className="block text-primary-foreground/50 text-sm hover:text-accent transition-colors duration-200"
                >
                  {l}
                </a>
              ))}
            </nav>
          </div>

          <div>
            <h4 className="font-bold mb-3 text-accent">Contato</h4>
            <p className="text-primary-foreground/50 text-sm mb-2">
              Seg a Sex: 8h – 19h<br />
              Sáb: 8h – 16h
            </p>
            <a href="https://wa.me/5569992216764" className="text-accent font-semibold text-sm hover:underline">
              (69) 99221-6764
            </a>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-6">
          <p className="text-primary-foreground/30 text-sm">
            © 2025 Patinhas & Cia — Todos os direitos reservados
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
