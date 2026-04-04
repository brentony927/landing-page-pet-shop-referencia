import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";

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
      {/* Topbar */}
      <div className="hidden md:flex items-center justify-center gap-6 py-1.5 text-xs font-medium text-white" style={{ background: "var(--verde)" }}>
        <span>Seg–Sex: 8h–19h | Sáb: 8h–16h</span>
        <a href="https://wa.me/5569992216764" className="flex items-center gap-1 hover:underline">
          <Phone className="w-3 h-3" /> (69) 99221-6764
        </a>
      </div>

      {/* Navbar */}
      <div style={{ background: "var(--verde-escuro)" }} className="h-16">
        <div className="max-w-[1100px] mx-auto flex items-center justify-between h-full px-4">
          <a href="#inicio" className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-full flex items-center justify-center" style={{ background: "var(--amarelo)" }}>
              <span className="text-lg">🐾</span>
            </div>
            <span className="text-xl font-bold text-white" style={{ fontFamily: "'Fraunces', Georgia, serif" }}>
              Patinhas <span style={{ color: "var(--amarelo)" }}>& Cia</span>
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative text-[13px] font-medium tracking-widest uppercase transition-colors duration-200"
                style={{ color: "rgba(255,255,255,0.8)", fontFamily: "'DM Sans', sans-serif" }}
                onMouseEnter={(e) => e.currentTarget.style.color = "#fff"}
                onMouseLeave={(e) => e.currentTarget.style.color = "rgba(255,255,255,0.8)"}
              >
                <span className="relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:transition-all after:duration-200 hover:after:w-full" style={{ ["--tw-after-bg" as string]: "var(--laranja)" }}>
                  {link.label}
                </span>
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://wa.me/5569992216764"
              className="rounded-md px-4 py-2 text-xs font-semibold tracking-wider text-white transition-colors duration-200"
              style={{ border: "1.5px solid rgba(255,255,255,0.3)" }}
              onMouseEnter={(e) => e.currentTarget.style.background = "rgba(255,255,255,0.1)"}
              onMouseLeave={(e) => e.currentTarget.style.background = "transparent"}
            >
              WHATSAPP
            </a>
            <a
              href="https://wa.me/5569992216764"
              className="rounded-md px-6 py-2 text-xs font-bold tracking-wider text-white transition-all duration-200 hover:-translate-y-0.5"
              style={{ background: "var(--laranja)" }}
              onMouseEnter={(e) => e.currentTarget.style.background = "var(--laranja-escuro)"}
              onMouseLeave={(e) => e.currentTarget.style.background = "var(--laranja)"}
            >
              AGENDAR
            </a>
          </div>

          <button className="md:hidden p-2 text-white" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div style={{ background: "var(--verde-escuro)" }} className="md:hidden px-4 py-4 space-y-1 border-t border-white/10">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="block text-sm font-semibold tracking-wider py-3 border-b border-white/10"
              style={{ color: "rgba(255,255,255,0.8)" }}
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <div className="flex gap-3 pt-3">
            <a href="https://wa.me/5569992216764" className="flex-1 text-center rounded-md py-3 text-xs font-semibold tracking-wider text-white" style={{ border: "1.5px solid rgba(255,255,255,0.3)" }}>
              WHATSAPP
            </a>
            <a href="https://wa.me/5569992216764" className="flex-1 text-center rounded-md py-3 text-xs font-bold tracking-wider text-white" style={{ background: "var(--laranja)" }}>
              AGENDAR
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
