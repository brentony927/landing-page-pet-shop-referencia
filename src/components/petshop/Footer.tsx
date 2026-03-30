import { PawPrint, Dog, Cat, Bird, Fish, Heart } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Icon3D from "./Icon3D";

const instagramIcons = [
  { icon: Dog, color: "orange" as const },
  { icon: Cat, color: "green" as const },
  { icon: PawPrint, color: "yellow" as const },
  { icon: Heart, color: "orange" as const },
  { icon: Bird, color: "teal" as const },
  { icon: Fish, color: "green" as const },
];

const Footer = () => {
  return (
    <footer className="bg-petshop-teal text-primary-foreground">
      <div className="h-1 bg-primary" />
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Icon3D icon={PawPrint} size="sm" color="yellow" animate="none" />
              <span className="font-heading text-lg font-bold">Patinhas & Cia</span>
            </div>
            <p className="text-primary-foreground/50 text-sm leading-relaxed mb-4">
              Desde 2012 cuidando do seu melhor amigo com carinho de verdade.
            </p>
            <p className="text-primary-foreground/40 text-sm">
              Seg a Sex: 8h – 19h<br />
              Sáb: 8h – 16h<br />
              <span className="text-accent font-semibold">(11) 99999-1234</span>
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
            <h4 className="font-heading font-bold mb-3 text-accent">Newsletter</h4>
            <p className="text-primary-foreground/50 text-sm mb-3">Dicas, promos e fofura na sua caixa</p>
            <div className="flex gap-2">
              <Input placeholder="Seu e-mail" className="rounded-lg bg-petshop-teal-light border-petshop-teal-light text-primary-foreground placeholder:text-primary-foreground/30 text-sm" />
              <Button className="rounded-lg bg-accent text-accent-foreground font-bold text-xs px-4 hover:bg-accent/90">
                OK
              </Button>
            </div>
          </div>

          <div>
            <h4 className="font-heading font-bold mb-3 text-accent">@patinhasecia</h4>
            <div className="grid grid-cols-3 gap-2">
              {instagramIcons.map((item, i) => (
                <div
                  key={i}
                  className="w-full aspect-square rounded-lg bg-petshop-teal-light flex items-center justify-center cursor-pointer hover:bg-primary/20 transition-colors duration-200"
                >
                  <Icon3D icon={item.icon} size="sm" color={item.color} animate="none" className="!rounded-lg !shadow-none" />
                </div>
              ))}
            </div>
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
