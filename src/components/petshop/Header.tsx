import { useState, useRef } from "react";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { label: "INÍCIO", href: "#inicio", emoji: "🐾" },
  { label: "SERVIÇOS", href: "#servicos", emoji: "🐶" },
  { label: "RAÇÕES", href: "#racoes", emoji: "🦴" },
  { label: "SOBRE", href: "#sobre", emoji: "🐱" },
  { label: "CONTATO", href: "#contato", emoji: "🐕" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeEmoji, setActiveEmoji] = useState<{ emoji: string; x: number; y: number; id: number } | null>(null);
  const idRef = useRef(0);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, emoji: string) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height;
    idRef.current += 1;
    setActiveEmoji({ emoji, x, y, id: idRef.current });
    setTimeout(() => setActiveEmoji(null), 900);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Topbar */}
      <div className="hidden md:flex items-center justify-center gap-6 py-1.5 text-xs font-medium text-white" style={{ background: "#16a34a" }}>
        <span>Seg–Sex: 8h–19h | Sáb: 8h–16h</span>
        <a href="https://wa.me/5569992216764" className="flex items-center gap-1 hover:underline">
          <Phone className="w-3 h-3" /> (69) 99221-6764
        </a>
      </div>

      {/* Navbar — branca e limpa */}
      <div className="h-16 bg-white border-b" style={{ borderColor: "#e7e5e4" }}>
        <div className="max-w-[1100px] mx-auto flex items-center justify-between h-full px-4">
          <a href="#inicio" className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-full flex items-center justify-center" style={{ background: "#16a34a" }}>
              <span className="text-lg">🐾</span>
            </div>
            <span className="text-xl font-bold" style={{ fontFamily: "'Fraunces', Georgia, serif", color: "#1c1917" }}>
              Patinhas <span style={{ color: "#16a34a" }}>& Cia</span>
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative text-[13px] font-medium tracking-widest uppercase transition-colors duration-200"
                style={{ color: "#57534e", fontFamily: "'DM Sans', sans-serif" }}
                onMouseEnter={(e) => e.currentTarget.style.color = "#1c1917"}
                onMouseLeave={(e) => e.currentTarget.style.color = "#57534e"}
                onClick={(e) => handleNavClick(e, link.emoji)}
              >
                <span className="relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-[#f97316] after:transition-all after:duration-200 hover:after:w-full">
                  {link.label}
                </span>
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://wa.me/5569992216764"
              className="rounded-md px-4 py-2 text-xs font-semibold tracking-wider transition-colors duration-200"
              style={{ border: "1.5px solid #e7e5e4", color: "#57534e" }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = "#16a34a"; e.currentTarget.style.color = "#16a34a"; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = "#e7e5e4"; e.currentTarget.style.color = "#57534e"; }}
            >
              WHATSAPP
            </a>
            <a
              href="https://wa.me/5569992216764"
              className="rounded-md px-6 py-2 text-xs font-bold tracking-wider text-white transition-all duration-200 hover:-translate-y-0.5"
              style={{ background: "#f97316" }}
              onMouseEnter={(e) => e.currentTarget.style.background = "#c2410c"}
              onMouseLeave={(e) => e.currentTarget.style.background = "#f97316"}
            >
              AGENDAR
            </a>
          </div>

          <button className="md:hidden p-2" style={{ color: "#1c1917" }} onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden px-4 py-4 space-y-1 bg-white border-b" style={{ borderColor: "#e7e5e4" }}>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="block text-sm font-semibold tracking-wider py-3 border-b"
              style={{ color: "#57534e", borderColor: "#f5f5f4" }}
              onClick={() => setMobileOpen(false)}
            >
              <span className="mr-2">{link.emoji}</span>
              {link.label}
            </a>
          ))}
          <div className="flex gap-3 pt-3">
            <a href="https://wa.me/5569992216764" className="flex-1 text-center rounded-md py-3 text-xs font-semibold tracking-wider" style={{ border: "1.5px solid #e7e5e4", color: "#57534e" }}>
              WHATSAPP
            </a>
            <a href="https://wa.me/5569992216764" className="flex-1 text-center rounded-md py-3 text-xs font-bold tracking-wider text-white" style={{ background: "#f97316" }}>
              AGENDAR
            </a>
          </div>
        </div>
      )}

      {/* Animal emoji animation */}
      {activeEmoji && (
        <div
          key={activeEmoji.id}
          className="fixed pointer-events-none z-[100]"
          style={{
            left: activeEmoji.x - 16,
            top: activeEmoji.y,
            animation: "navAnimalBounce 0.8s ease-out forwards",
          }}
        >
          <span className="text-3xl drop-shadow-lg">{activeEmoji.emoji}</span>
        </div>
      )}
    </header>
  );
};

export default Header;
