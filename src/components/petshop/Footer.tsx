import { PawPrint } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const instagramPets = ["🐕", "🐈", "🐾", "🐶", "🐱", "🐕‍🦺"];

const Footer = () => {
  return (
    <footer className="bg-petshop-teal text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center">
                <PawPrint className="w-5 h-5 text-accent-foreground" />
              </div>
              <span className="font-heading text-lg font-bold">Patinhas & Cia</span>
            </div>
            <p className="text-primary-foreground/50 text-sm leading-relaxed">
              Cuidando do seu melhor amigo com carinho, respeito e profissionalismo desde 2012.
            </p>
          </div>

          <div>
            <h4 className="font-heading font-bold mb-3 text-accent">Links</h4>
            <nav className="space-y-2">
              {["Início", "Serviços", "Rações", "Sobre", "Contato"].map((l) => (
                <a
                  key={l}
                  href={`#${l.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")}`}
                  className="block text-primary-foreground/50 text-sm hover:text-accent transition-colors"
                >
                  {l}
                </a>
              ))}
            </nav>
          </div>

          <div>
            <h4 className="font-heading font-bold mb-3 text-accent">Newsletter</h4>
            <p className="text-primary-foreground/50 text-sm mb-3">Receba dicas e promoções</p>
            <div className="flex gap-2">
              <Input placeholder="Seu e-mail" className="rounded-full bg-petshop-teal-light border-petshop-teal-light text-primary-foreground placeholder:text-primary-foreground/30 text-sm" />
              <Button className="rounded-full bg-accent text-accent-foreground font-bold text-xs px-4 hover:bg-accent/90">
                OK
              </Button>
            </div>
            <p className="text-primary-foreground/40 text-sm mt-4">
              Seg a Sex: 8h – 19h<br />
              Sáb: 8h – 16h
            </p>
          </div>

          <div>
            <h4 className="font-heading font-bold mb-3 text-accent">Instagram</h4>
            <div className="grid grid-cols-3 gap-2">
              {instagramPets.map((emoji, i) => (
                <div
                  key={i}
                  className="w-full aspect-square rounded-lg bg-petshop-teal-light flex items-center justify-center text-2xl cursor-pointer hover:bg-primary/20 transition-colors"
                >
                  {emoji}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-6 text-center">
          <p className="text-primary-foreground/30 text-sm">
            Feito com 🐾 para quem ama pets — © 2024 Patinhas & Cia
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
