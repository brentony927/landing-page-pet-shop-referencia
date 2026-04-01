import { PawPrint } from "lucide-react";
import Icon3D from "./Icon3D";

const Footer = () => {
  return (
    <footer className="bg-petshop-teal/95 text-primary-foreground">
      <div className="h-1.5 bg-primary" />
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Icon3D icon={PawPrint} size="sm" color="yellow" animate="none" />
              <span className="font-heading text-lg font-bold">Patinhas & Cia</span>
            </div>
            <p className="text-primary-foreground/50 text-sm leading-relaxed">
              Desde 2012 cuidando do seu melhor amigo com carinho de verdade.
            </p>
          </div>

          <div>
            <h4 className="font-heading font-bold mb-3 text-accent">Links</h4>
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
            <h4 className="font-heading font-bold mb-3 text-accent">Contato</h4>
            <p className="text-primary-foreground/50 text-sm mb-2">
              Seg a Sex: 8h – 19h<br />
              Sáb: 8h – 16h
            </p>
            <a href="https://wa.me/5569992216764" className="text-accent font-semibold text-sm hover:underline">
              (69) 99221-6764
            </a>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-primary-foreground/30 text-sm">
            © 2025 Patinhas & Cia — Todos os direitos reservados
          </p>
          <p className="text-primary-foreground/30 text-sm flex items-center gap-1">
            Feito com <PawPrint className="inline w-4 h-4 text-accent" /> pra quem ama pets
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
