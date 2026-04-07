import { useState } from "react";
import { Menu, X, Phone, PawPrint } from "lucide-react";

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
      {/* Top bar - LARANJA do carrossel */}
      <div className="hidden md:flex items-center justify-center gap-6 py-1.5 text-xs font-semibold text-white" style={{ background: "var(--pet-orange)" }}>
        <span>🐾 Seg–Sex: 8h–19h | Sáb: 8h–16h</span>
        <a href="https://wa.me/5569992216764" className="flex items-center gap-1 hover:underline">
          <Phone className="w-3 h-3" /> (69) 99221-6764
        </a>
        <span className="text-white/80">💳 Pix · Cartão · Dinheiro</span>
      </div>

      <div className="h-16 bg-white" style={{ borderBottom: "2px solid var(--pet-gray-border)" }}>
        <div className="max-w-[1100px] mx-auto flex items-center justify-between h-full px-4">
          <a href="#inicio" className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: "var(--pet-blue)" }}>
              <PawPrint className="w-5 h-5 text-white" />
            </div>
            <span className="text-2xl font-extrabold" style={{ fontFamily: "'Baloo 2', cursive", color: "var(--pet-blue-dark)" }}>
              Demonstração
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative text-[13px] font-bold tracking-wider uppercase transition-colors duration-200"
                style={{ color: "var(--pet-gray)" }}
                onMouseEnter={(e) => e.currentTarget.style.color = "var(--pet-blue)"}
                onMouseLeave={(e) => e.currentTarget.style.color = "var(--pet-gray)"}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://wa.me/5569992216764"
              className="rounded-full px-5 py-2 text-xs font-bold tracking-wider transition-all duration-200"
              style={{ border: "2px solid var(--pet-blue)", color: "var(--pet-blue)" }}
              onMouseEnter={(e) => { e.currentTarget.style.background = "var(--pet-blue)"; e.currentTarget.style.color = "#fff"; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "var(--pet-blue)"; }}
            >
              WHATSAPP
            </a>
            <a
              href="https://wa.me/5569992216764"
              className="rounded-full px-6 py-2.5 text-xs font-extrabold tracking-wider text-white transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
              style={{ background: "var(--pet-orange)", boxShadow: "0 4px 14px rgba(255,138,101,0.4)" }}
              onMouseEnter={(e) => e.currentTarget.style.background = "var(--pet-orange-dark)"}
              onMouseLeave={(e) => e.currentTarget.style.background = "var(--pet-orange)"}
            >
              🐕 AGENDAR
            </a>
          </div>

          <button className="md:hidden p-2" style={{ color: "var(--pet-gray)" }} onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <>
          <div className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm md:hidden" onClick={() => setMobileOpen(false)} />
          <div
            className="fixed top-0 right-0 z-50 w-72 h-full md:hidden flex flex-col bg-white/95 backdrop-blur-md"
            style={{ borderLeft: "1px solid var(--pet-gray-border)" }}
          >
            <div className="flex items-center justify-between px-5 py-4" style={{ borderBottom: "2px solid var(--pet-orange)" }}>
              <span className="text-lg font-extrabold" style={{ fontFamily: "'Baloo 2', cursive", color: "var(--pet-blue-dark)" }}>🐾 Menu</span>
              <button onClick={() => setMobileOpen(false)} className="p-1"><X className="w-5 h-5" style={{ color: "var(--pet-gray)" }} /></button>
            </div>
            <nav className="flex-1 px-5 py-4 space-y-1">
              {navLinks.map((link) => (
                <a key={link.href} href={link.href} className="block text-sm font-bold tracking-wider py-3 transition-colors duration-200" style={{ color: "var(--pet-gray)", borderBottom: "1px solid var(--pet-gray-border)" }} onClick={() => setMobileOpen(false)}>
                  {link.label}
                </a>
              ))}
            </nav>
            <div className="px-5 py-5 space-y-3" style={{ borderTop: "1px solid var(--pet-gray-border)" }}>
              <a href="https://wa.me/5569992216764" className="block text-center rounded-full py-3 text-xs font-bold tracking-wider" style={{ border: "2px solid var(--pet-blue)", color: "var(--pet-blue)" }}>WHATSAPP</a>
              <a href="https://wa.me/5569992216764" className="block text-center rounded-full py-3 text-xs font-extrabold tracking-wider text-white" style={{ background: "var(--pet-orange)" }}>🐕 AGENDAR</a>
            </div>
          </div>
        </>
      )}
    </header>
  );
};

export default Header;
