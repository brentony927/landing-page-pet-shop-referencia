import { useState } from "react";
import { Menu, X, PawPrint, Search, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "INÍCIO", href: "#inicio" },
  { label: "SERVIÇOS", href: "#servicos" },
  { label: "RAÇÕES", href: "#racoes" },
  { label: "SOBRE", href: "#sobre" },
  { label: "CONTATO", href: "#contato" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-petshop-teal border-b border-petshop-teal-light">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <a href="#inicio" className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center">
            <PawPrint className="w-6 h-6 text-accent-foreground" />
          </div>
          <span className="font-heading text-xl font-bold text-primary-foreground">
            Patinhas <span className="text-accent">& Cia</span>
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs font-bold tracking-wider text-primary-foreground/70 hover:text-accent transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <button className="text-primary-foreground/70 hover:text-accent transition-colors">
            <Search className="w-5 h-5" />
          </button>
          <button className="text-primary-foreground/70 hover:text-accent transition-colors">
            <ShoppingBag className="w-5 h-5" />
          </button>
          <Button className="bg-accent-foreground text-primary-foreground font-bold rounded-full px-6 text-xs tracking-wider hover:bg-accent-foreground/80">
            COMPRAR AGORA
          </Button>
        </div>

        <button
          className="md:hidden p-2 text-primary-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-petshop-teal border-t border-petshop-teal-light px-4 py-4 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="block text-xs font-bold tracking-wider text-primary-foreground/70 hover:text-accent"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <Button className="w-full bg-accent-foreground text-primary-foreground font-bold rounded-full text-xs tracking-wider">
            COMPRAR AGORA
          </Button>
        </div>
      )}
    </header>
  );
};

export default Header;
