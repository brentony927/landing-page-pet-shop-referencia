import { useState, useEffect } from "react";
import { Menu, X, Phone, PawPrint, Home, Scissors, Bone, Info, MessageSquare } from "lucide-react";

const navLinks = [
  { label: "Início", href: "#inicio", icon: Home },
  { label: "Serviços", href: "#servicos", icon: Scissors },
  { label: "Rações", href: "/catalogo", icon: Bone },
  { label: "Sobre", href: "#sobre", icon: Info },
  { label: "Contato", href: "#contato", icon: MessageSquare },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Previne scroll quando sidebar aberta
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Top bar — desktop only */}
      <div className="hidden md:flex items-center justify-center gap-6 py-1.5 text-xs font-semibold text-white" style={{ background: "var(--pet-blue-dark)" }}>
        <span>🐾 Seg–Sex: 8h–19h | Sáb: 8h–16h</span>
        <a href="https://wa.me/5569992216764" className="flex items-center gap-1 hover:underline">
          <Phone className="w-3 h-3" /> (69) 99221-6764
        </a>
        <span className="text-white/70">💳 Pix · Cartão · Dinheiro</span>
      </div>

      <div
        className="h-14 sm:h-16 transition-all duration-300"
        style={{
          background: scrolled ? "rgba(255,255,255,0.97)" : "rgba(255,255,255,0.95)",
          backdropFilter: "blur(12px)",
          boxShadow: scrolled ? "0 1px 12px rgba(0,0,0,0.06)" : "none",
          borderBottom: scrolled ? "none" : "1px solid rgba(0,0,0,0.05)",
        }}
      >
        <div className="max-w-[1200px] mx-auto flex items-center justify-between h-full px-4">
          <a href="#inicio" className="flex items-center gap-2">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center" style={{ background: "var(--pet-orange)" }}>
              <PawPrint className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
            </div>
            <span className="text-base sm:text-xl font-extrabold" style={{ fontFamily: "'Baloo 2', cursive", color: "var(--pet-blue-dark)" }}>
              Demonstração
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="relative text-[13px] font-bold tracking-wider uppercase transition-colors duration-200 group" style={{ color: "var(--pet-gray)" }}>
                {link.label}
                <span className="absolute -bottom-1 left-0 h-[2px] w-0 group-hover:w-full transition-all duration-300" style={{ background: "var(--pet-orange)" }} />
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a href="https://wa.me/5569992216764" className="rounded-xl px-5 py-2 text-xs font-bold tracking-wider transition-all duration-200" style={{ border: "2px solid var(--pet-blue)", color: "var(--pet-blue)" }}
              onMouseEnter={(e) => { e.currentTarget.style.background = "var(--pet-blue)"; e.currentTarget.style.color = "#fff"; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "var(--pet-blue)"; }}
            >WHATSAPP</a>
            <a href="https://wa.me/5569992216764" className="rounded-xl px-6 py-2.5 text-xs font-extrabold tracking-wider text-white transition-all duration-200 hover:-translate-y-0.5" style={{ background: "var(--pet-orange)", boxShadow: "0 4px 14px rgba(245,133,31,0.35)" }}>
              🐕 AGENDAR
            </a>
          </div>

          <button className="md:hidden p-2 -mr-1" style={{ color: "var(--pet-gray)" }} onClick={() => setMobileOpen(true)}>
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* SIDEBAR MOBILE — TRANSPARENTE GLASS */}
      {mobileOpen && (
        <>
          <div
            className="fixed inset-0 z-[60] md:hidden"
            style={{ background: "rgba(0,0,0,0.4)", backdropFilter: "blur(4px)" }}
            onClick={() => setMobileOpen(false)}
          />
          <div
            className="fixed top-0 right-0 z-[70] w-[80%] max-w-[300px] h-full md:hidden flex flex-col"
            style={{
              background: "rgba(255,255,255,0.85)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              borderLeft: "1px solid rgba(255,255,255,0.3)",
              boxShadow: "-8px 0 40px rgba(0,0,0,0.15)",
              animation: "slideInRight 0.3s cubic-bezier(0.32, 0.72, 0, 1)",
            }}
          >
            {/* Header sidebar */}
            <div className="flex items-center justify-between px-5 py-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: "var(--pet-orange)" }}>
                  <PawPrint className="w-4 h-4 text-white" />
                </div>
                <span className="text-base font-extrabold" style={{ fontFamily: "'Baloo 2', cursive", color: "var(--pet-blue-dark)" }}>
                  Menu
                </span>
              </div>
              <button onClick={() => setMobileOpen(false)} className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: "rgba(0,0,0,0.05)" }}>
                <X className="w-4 h-4" style={{ color: "var(--pet-gray)" }} />
              </button>
            </div>

            {/* Divider */}
            <div className="mx-5 h-px" style={{ background: "rgba(0,0,0,0.06)" }} />

            {/* Nav items com ícones */}
            <nav className="flex-1 px-3 py-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="flex items-center gap-3 px-3 py-3.5 rounded-xl text-[14px] font-semibold transition-all duration-200 active:scale-[0.98]"
                  style={{ color: "var(--pet-gray)" }}
                  onClick={() => setMobileOpen(false)}
                >
                  <div className="w-9 h-9 rounded-lg flex items-center justify-center" style={{ background: "rgba(30,136,229,0.08)" }}>
                    <link.icon className="w-4 h-4" style={{ color: "var(--pet-blue)" }} />
                  </div>
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Footer sidebar — CTAs */}
            <div className="px-4 pb-8 pt-2 space-y-2.5">
              <div className="h-px mb-3" style={{ background: "rgba(0,0,0,0.06)" }} />
              <a
                href="https://wa.me/5569992216764"
                className="flex items-center justify-center gap-2 rounded-xl py-3 text-[13px] font-bold text-white active:scale-[0.97]"
                style={{ background: "var(--pet-blue)", boxShadow: "0 4px 14px rgba(30,136,229,0.25)" }}
              >
                <MessageSquare className="w-4 h-4" />
                WhatsApp
              </a>
              <a
                href="https://wa.me/5569992216764"
                className="flex items-center justify-center gap-2 rounded-xl py-3 text-[13px] font-extrabold text-white active:scale-[0.97]"
                style={{ background: "var(--pet-orange)", boxShadow: "0 4px 14px rgba(245,133,31,0.25)" }}
              >
                <PawPrint className="w-4 h-4" />
                Agendar Agora
              </a>

              <p className="text-center text-[10px] pt-2" style={{ color: "var(--pet-gray-light)" }}>
                (69) 99221-6764 · Seg–Sex 8h–19h
              </p>
            </div>
          </div>
        </>
      )}

      <style>{`
        @keyframes slideInRight {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }
      `}</style>
    </header>
  );
};

export default Header;
