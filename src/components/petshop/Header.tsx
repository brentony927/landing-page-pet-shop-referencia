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

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Top bar — desktop */}
      <div className="hidden md:flex items-center justify-center gap-6 py-1.5 text-xs font-semibold text-white" style={{ background: "#1565C0" }}>
        <span>🐾 Seg–Sex: 8h–19h | Sáb: 8h–16h</span>
        <a href="https://wa.me/5569992216764" className="flex items-center gap-1 hover:underline">
          <Phone className="w-3 h-3" /> (69) 99221-6764
        </a>
        <span className="text-white/70">💳 Pix · Cartão · Dinheiro</span>
      </div>

      <div
        className="h-14 md:h-16 transition-all duration-300"
        style={{
          background: scrolled ? "rgba(255,255,255,0.98)" : "rgba(255,255,255,0.95)",
          backdropFilter: "blur(16px)",
          boxShadow: scrolled ? "0 2px 20px rgba(0,0,0,0.08)" : "none",
        }}
      >
        <div className="max-w-[1200px] mx-auto flex items-center justify-between h-full px-4">
          <a href="#inicio" className="flex items-center gap-2">
            <div className="w-9 h-9 md:w-10 md:h-10 rounded-xl flex items-center justify-center" style={{ background: "#F5851F" }}>
              <PawPrint className="w-4 h-4 md:w-5 md:h-5 text-white" />
            </div>
            <span className="text-lg md:text-xl font-extrabold" style={{ fontFamily: "'Baloo 2', cursive", color: "#1565C0" }}>
              Demonstração
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="relative text-[13px] font-bold tracking-wider uppercase transition-colors duration-200 group" style={{ color: "#444" }}>
                {link.label}
                <span className="absolute -bottom-1 left-0 h-[2px] w-0 group-hover:w-full transition-all duration-300" style={{ background: "#F5851F" }} />
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a href="https://wa.me/5569992216764" className="rounded-xl px-5 py-2 text-xs font-bold tracking-wider transition-all duration-200 border-2" style={{ borderColor: "#1E88E5", color: "#1E88E5" }}
              onMouseEnter={(e) => { e.currentTarget.style.background = "#1E88E5"; e.currentTarget.style.color = "#fff"; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "#1E88E5"; }}
            >WHATSAPP</a>
            <a href="https://wa.me/5569992216764" className="rounded-xl px-6 py-2.5 text-xs font-extrabold tracking-wider text-white transition-all duration-200 hover:-translate-y-0.5" style={{ background: "#F5851F", boxShadow: "0 4px 14px rgba(245,133,31,0.35)" }}>
              🐕 AGENDAR
            </a>
          </div>

          <button className="md:hidden p-2 -mr-1" style={{ color: "#444" }} onClick={() => setMobileOpen(true)}>
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* SIDEBAR MOBILE — GLASSMORPHISM */}
      {mobileOpen && (
        <>
          <div
            className="fixed inset-0 z-[60] md:hidden"
            style={{ background: "rgba(0,0,0,0.5)", backdropFilter: "blur(6px)" }}
            onClick={() => setMobileOpen(false)}
          />
          <div
            className="fixed top-0 right-0 z-[70] w-[82%] max-w-[320px] h-full md:hidden flex flex-col"
            style={{
              background: "rgba(255,255,255,0.92)",
              backdropFilter: "blur(24px)",
              WebkitBackdropFilter: "blur(24px)",
              borderLeft: "1px solid rgba(255,255,255,0.4)",
              boxShadow: "-10px 0 50px rgba(0,0,0,0.2)",
              animation: "slideInRight 0.35s cubic-bezier(0.32, 0.72, 0, 1)",
            }}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-5 py-4">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: "#F5851F" }}>
                  <PawPrint className="w-4 h-4 text-white" />
                </div>
                <span className="text-lg font-extrabold" style={{ fontFamily: "'Baloo 2', cursive", color: "#1565C0" }}>
                  Menu
                </span>
              </div>
              <button onClick={() => setMobileOpen(false)} className="w-9 h-9 rounded-xl flex items-center justify-center transition-colors" style={{ background: "rgba(0,0,0,0.06)" }}>
                <X className="w-4 h-4" style={{ color: "#444" }} />
              </button>
            </div>

            <div className="mx-5 h-px" style={{ background: "rgba(0,0,0,0.08)" }} />

            {/* Nav */}
            <nav className="flex-1 px-3 py-4 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="flex items-center gap-3.5 px-3 py-3 rounded-2xl text-[15px] font-semibold transition-all duration-200 active:scale-[0.97] active:bg-blue-50/50"
                  style={{ color: "#333" }}
                  onClick={() => setMobileOpen(false)}
                >
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: "rgba(30,136,229,0.1)" }}>
                    <link.icon className="w-[18px] h-[18px]" style={{ color: "#1E88E5" }} />
                  </div>
                  {link.label}
                </a>
              ))}
            </nav>

            {/* CTAs */}
            <div className="px-4 pb-8 pt-2 space-y-3">
              <div className="h-px mb-2" style={{ background: "rgba(0,0,0,0.08)" }} />
              <a
                href="https://wa.me/5569992216764"
                className="flex items-center justify-center gap-2.5 rounded-2xl py-3.5 text-sm font-bold text-white active:scale-[0.97] transition-transform"
                style={{ background: "#1E88E5", boxShadow: "0 6px 20px rgba(30,136,229,0.3)" }}
              >
                <MessageSquare className="w-4 h-4" />
                WhatsApp
              </a>
              <a
                href="https://wa.me/5569992216764"
                className="flex items-center justify-center gap-2.5 rounded-2xl py-3.5 text-sm font-extrabold text-white active:scale-[0.97] transition-transform"
                style={{ background: "#F5851F", boxShadow: "0 6px 20px rgba(245,133,31,0.3)" }}
              >
                <PawPrint className="w-4 h-4" />
                Agendar Agora
              </a>

              <p className="text-center text-[11px] pt-1" style={{ color: "#999" }}>
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
