import { useState } from "react";
import { Menu, X, PawPrint, Phone } from "lucide-react";

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
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Barra de topo — verde vivo */}
      <div className="hidden md:flex items-center justify-center gap-6 bg-secondary py-1.5 text-secondary-foreground text-xs font-medium">
        <span>Seg a Sex: 8h – 19h | Sáb: 8h – 16h</span>
        <a href="https://wa.me/5569992216764" className="flex items-center gap-1 hover:underline">
          <Phone className="w-3 h-3" /> (69) 99221-6764
        </a>
      </div>

      {/* Navbar — fundo branco, como Petlove/Petz */}
      <div className="bg-background/95 backdrop-blur-md border-b border-border">
        <div className="container mx-auto flex items-center justify-between h-14 px-4">
          <a href="#inicio" className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-md bg-secondary flex items-center justify-center">
              <PawPrint className="w-5 h-5 text-secondary-foreground" />
            </div>
            <span className="text-xl font-bold text-foreground" style={{ fontFamily: "'Fraunces', Georgia, serif" }}>
              Patinhas <span className="text-secondary">& Cia</span>
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative text-xs font-semibold tracking-wider text-muted-foreground hover:text-foreground transition-colors after:content-[''] after:absolute after:bottom-[-2px] after:left-0 after:w-0 after:h-[2px] after:bg-secondary after:transition-all after:duration-200 hover:after:w-full"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a href="https://wa.me/5569992216764" className="border-[1.5px] border-secondary text-secondary font-semibold rounded-md px-4 py-2 text-xs tracking-wider hover:bg-secondary/10 transition-colors duration-200">
              WHATSAPP
            </a>
            <a href="https://wa.me/5569992216764" className="bg-secondary text-secondary-foreground font-bold rounded-md px-6 py-2 text-xs tracking-wider hover:-translate-y-0.5 hover:shadow-[0_6px_20px_hsl(142_72%_37%/0.3)] transition-all duration-200">
              AGENDAR
            </a>
          </div>

          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-background border-t border-border px-4 py-4 space-y-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="block text-sm font-semibold tracking-wider text-muted-foreground hover:text-secondary py-3 border-b border-border/50"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <div className="flex gap-3 pt-3">
            <a href="https://wa.me/5569992216764" className="flex-1 text-center border-[1.5px] border-secondary text-secondary font-semibold rounded-md py-3 text-xs tracking-wider">
              WHATSAPP
            </a>
            <a href="https://wa.me/5569992216764" className="flex-1 text-center bg-secondary text-secondary-foreground font-bold rounded-md py-3 text-xs tracking-wider">
              AGENDAR
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
