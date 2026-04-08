import { useState, useEffect } from "react";
import { Menu, X, Phone, PawPrint, Home, Scissors, Info, MessageSquare, ChevronRight, ShoppingBag } from "lucide-react";

const navLinks = [
  { label: "Início", href: "/", icon: Home },
  { label: "Serviços", href: "/#servicos", icon: Scissors },
  { label: "Catálogo", href: "/catalogo", icon: ShoppingBag },
  { label: "Sobre", href: "/#sobre", icon: Info },
  { label: "Contato", href: "/#contato", icon: MessageSquare },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [closing, setClosing] = useState(false);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", h, { passive: true });
    return () => window.removeEventListener("scroll", h);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const closeSidebar = () => {
    setClosing(true);
    setTimeout(() => { setOpen(false); setClosing(false); }, 280);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Top bar */}
      <div className="hidden md:flex items-center justify-center gap-6 py-1.5 text-xs font-semibold text-white" style={{ background: "#0D47A1" }}>
        <span className="flex items-center gap-1"><PawPrint className="w-3 h-3" /> Seg–Sex: 8h–19h | Sáb: 8h–16h</span>
        <a href="https://wa.me/5569992216764" className="flex items-center gap-1 hover:underline"><Phone className="w-3 h-3" /> (69) 99221-6764</a>
        <span className="text-white/60">Pix · Cartão · Dinheiro</span>
      </div>

      {/* Main bar */}
      <div className="h-14 md:h-16 transition-all duration-300" style={{ background: scrolled ? "rgba(255,255,255,0.98)" : "rgba(255,255,255,0.96)", backdropFilter: "blur(16px)", boxShadow: scrolled ? "0 1px 12px rgba(0,0,0,0.06)" : "none" }}>
        <div className="max-w-[1100px] mx-auto flex items-center justify-between h-full px-4">
          <a href="/" className="flex items-center gap-2">
            <div className="w-9 h-9 md:w-10 md:h-10 rounded-xl flex items-center justify-center" style={{ background: "#F5851F" }}>
              <PawPrint className="w-4 h-4 md:w-5 md:h-5 text-white" />
            </div>
            <span className="text-lg md:text-xl font-extrabold" style={{ fontFamily: "'Baloo 2', cursive", color: "var(--pet-gray)" }}>Demonstração</span>
          </a>

          <nav className="hidden md:flex items-center gap-7">
            {navLinks.map(l => (
              <a key={l.href} href={l.href} className="relative text-[13px] font-bold tracking-wider uppercase group" style={{ color: "#444" }}>
                {l.label}
                <span className="absolute -bottom-1 left-0 h-[2px] w-0 group-hover:w-full transition-all duration-300" style={{ background: "#F5851F" }} />
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-2.5">
            <a href="https://wa.me/5569992216764" className="rounded-xl px-5 py-2 text-xs font-bold tracking-wider border-2 transition-all" style={{ borderColor: "var(--pet-action)", color: "var(--pet-action)" }}
              onMouseEnter={e => { e.currentTarget.style.background = "var(--pet-action)"; e.currentTarget.style.color = "#fff"; }}
              onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "var(--pet-action)"; }}
            >WHATSAPP</a>
            <a href="https://wa.me/5569992216764" className="rounded-xl px-5 py-2.5 text-xs font-extrabold tracking-wider text-white hover:-translate-y-0.5 transition-all flex items-center gap-1.5" style={{ background: "#F5851F", boxShadow: "0 4px 14px rgba(245,133,31,0.3)" }}><PawPrint className="w-3.5 h-3.5" /> AGENDAR</a>
          </div>

          <button className="md:hidden p-2 -mr-1" onClick={() => setOpen(true)}>
            <Menu className="w-6 h-6" style={{ color: "#333" }} />
          </button>
        </div>
      </div>

      {/* ========== SIDEBAR MOBILE — GLASS PROFISSIONAL ========== */}
      {open && (
        <>
          {/* Backdrop escuro com blur */}
          <div
            className="fixed inset-0 z-[60] md:hidden transition-opacity duration-300"
            style={{
              background: "rgba(0,0,0,0.35)",
              backdropFilter: "blur(8px)",
              WebkitBackdropFilter: "blur(8px)",
              opacity: closing ? 0 : 1,
            }}
            onClick={closeSidebar}
          />

          {/* Sidebar glass */}
          <div
            className="fixed top-0 right-0 z-[70] w-[82%] max-w-[320px] h-full md:hidden flex flex-col"
            style={{
              background: "rgba(255,255,255,0.65)",
              backdropFilter: "saturate(180%) blur(30px)",
              WebkitBackdropFilter: "saturate(180%) blur(30px)",
              borderLeft: "1px solid rgba(255,255,255,0.5)",
              boxShadow: "-20px 0 60px rgba(0,0,0,0.12), inset 1px 0 0 rgba(255,255,255,0.4)",
              animation: closing
                ? "slideOutRight 0.28s cubic-bezier(0.32,0.72,0,1) forwards"
                : "slideInRight 0.32s cubic-bezier(0.32,0.72,0,1)",
            }}
          >
            {/* Header da sidebar */}
            <div className="flex items-center justify-between px-5 py-5">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl flex items-center justify-center shadow-sm" style={{ background: "#F5851F" }}>
                  <PawPrint className="w-4 h-4 text-white" />
                </div>
                <div>
                  <span className="text-base font-extrabold block leading-none" style={{ fontFamily: "'Baloo 2', cursive", color: "var(--pet-gray)" }}>Menu</span>
                  <span className="text-[10px] font-medium" style={{ color: "#999" }}>Navegação</span>
                </div>
              </div>
              <button
                onClick={closeSidebar}
                className="w-8 h-8 rounded-full flex items-center justify-center transition-all active:scale-90"
                style={{ background: "rgba(0,0,0,0.06)", backdropFilter: "blur(4px)" }}
              >
                <X className="w-4 h-4" style={{ color: "#666" }} />
              </button>
            </div>

            {/* Divider glass */}
            <div className="mx-5 h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(0,0,0,0.08), transparent)" }} />

            {/* Nav items */}
            <nav className="flex-1 px-3 py-4 space-y-0.5 overflow-y-auto">
              {navLinks.map((l, i) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="flex items-center gap-3 px-3 py-3 rounded-2xl text-[15px] font-semibold transition-all duration-200 active:scale-[0.97]"
                  style={{
                    color: "#333",
                    animationDelay: `${i * 40}ms`,
                    animation: closing ? "none" : `fadeInItem 0.3s ease ${i * 40}ms both`,
                  }}
                  onClick={closeSidebar}
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{
                      background: "rgba(245,133,31,0.08)",
                      backdropFilter: "blur(4px)",
                      border: "1px solid rgba(245,133,31,0.1)",
                    }}
                  >
                    <l.icon className="w-[18px] h-[18px]" style={{ color: "var(--pet-action)" }} />
                  </div>
                  <span className="flex-1">{l.label}</span>
                  <ChevronRight className="w-3.5 h-3.5" style={{ color: "#ccc" }} />
                </a>
              ))}
            </nav>

            {/* Bottom CTAs */}
            <div className="px-4 pb-8 pt-3">
              {/* Divider */}
              <div className="h-px mb-4" style={{ background: "linear-gradient(90deg, transparent, rgba(0,0,0,0.06), transparent)" }} />

              <div className="space-y-2.5">
                <a
                  href="https://wa.me/5569992216764"
                  className="flex items-center justify-center gap-2 rounded-2xl py-3.5 text-sm font-bold text-white active:scale-[0.97] transition-all"
                  style={{
                    background: "#25d366",
                    backdropFilter: "blur(8px)",
                    boxShadow: "0 8px 24px rgba(37,211,102,0.25), inset 0 1px 0 rgba(255,255,255,0.2)",
                  }}
                >
                  <MessageSquare className="w-4 h-4" /> WhatsApp
                </a>
                <a
                  href="https://wa.me/5569992216764"
                  className="flex items-center justify-center gap-2 rounded-2xl py-3.5 text-sm font-extrabold text-white active:scale-[0.97] transition-all"
                  style={{
                    background: "rgba(245,133,31,0.92)",
                    backdropFilter: "blur(8px)",
                    boxShadow: "0 8px 24px rgba(245,133,31,0.25), inset 0 1px 0 rgba(255,255,255,0.2)",
                  }}
                >
                  <PawPrint className="w-4 h-4" /> Agendar Agora
                </a>
              </div>

              <p className="text-center text-[10px] pt-3" style={{ color: "#aaa" }}>
                (69) 99221-6764 · Seg–Sex 8h–19h
              </p>
            </div>
          </div>
        </>
      )}

      <style>{`
        @keyframes slideInRight {
          from { transform: translateX(100%); opacity: 0.5; }
          to { transform: translateX(0); opacity: 1; }
        }
        @keyframes slideOutRight {
          from { transform: translateX(0); opacity: 1; }
          to { transform: translateX(100%); opacity: 0; }
        }
        @keyframes fadeInItem {
          from { opacity: 0; transform: translateX(12px); }
          to { opacity: 1; transform: translateX(0); }
        }
      `}</style>
    </header>
  );
};

export default Header;
