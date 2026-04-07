import { useState, useEffect } from "react";
import { Menu, X, Phone, PawPrint, Home, Scissors, Bone, Info, MessageSquare, ChevronRight } from "lucide-react";

const navLinks = [
  { label: "Início", href: "#inicio", icon: Home },
  { label: "Serviços", href: "#servicos", icon: Scissors },
  { label: "Rações", href: "/catalogo", icon: Bone },
  { label: "Sobre", href: "#sobre", icon: Info },
  { label: "Contato", href: "#contato", icon: MessageSquare },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", h, { passive: true });
    return () => window.removeEventListener("scroll", h);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Top bar */}
      <div className="hidden md:flex items-center justify-center gap-6 py-1.5 text-xs font-semibold text-white" style={{ background: "#0D47A1" }}>
        <span>🐾 Seg–Sex: 8h–19h | Sáb: 8h–16h</span>
        <a href="https://wa.me/5569992216764" className="flex items-center gap-1 hover:underline"><Phone className="w-3 h-3" /> (69) 99221-6764</a>
        <span className="text-white/60">💳 Pix · Cartão · Dinheiro</span>
      </div>

      {/* Main bar */}
      <div className="h-14 md:h-16 transition-all duration-300" style={{ background: scrolled ? "rgba(255,255,255,0.98)" : "rgba(255,255,255,0.96)", backdropFilter: "blur(16px)", boxShadow: scrolled ? "0 1px 12px rgba(0,0,0,0.06)" : "none" }}>
        <div className="max-w-[1100px] mx-auto flex items-center justify-between h-full px-4">
          <a href="#inicio" className="flex items-center gap-2">
            <div className="w-9 h-9 md:w-10 md:h-10 rounded-xl flex items-center justify-center" style={{ background: "#F5851F" }}>
              <PawPrint className="w-4 h-4 md:w-5 md:h-5 text-white" />
            </div>
            <span className="text-lg md:text-xl font-extrabold" style={{ fontFamily: "'Baloo 2', cursive", color: "#0D47A1" }}>Demonstração</span>
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
            <a href="https://wa.me/5569992216764" className="rounded-xl px-5 py-2 text-xs font-bold tracking-wider border-2 transition-all" style={{ borderColor: "#1E88E5", color: "#1E88E5" }}
              onMouseEnter={e => { e.currentTarget.style.background = "#1E88E5"; e.currentTarget.style.color = "#fff"; }}
              onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "#1E88E5"; }}
            >WHATSAPP</a>
            <a href="https://wa.me/5569992216764" className="rounded-xl px-5 py-2.5 text-xs font-extrabold tracking-wider text-white hover:-translate-y-0.5 transition-all" style={{ background: "#F5851F", boxShadow: "0 4px 14px rgba(245,133,31,0.3)" }}>🐕 AGENDAR</a>
          </div>

          <button className="md:hidden p-2 -mr-1" onClick={() => setOpen(true)}>
            <Menu className="w-6 h-6" style={{ color: "#333" }} />
          </button>
        </div>
      </div>

      {/* Mobile sidebar */}
      {open && (
        <>
          <div className="fixed inset-0 z-[60] md:hidden" style={{ background: "rgba(0,0,0,0.45)", backdropFilter: "blur(4px)" }} onClick={() => setOpen(false)} />
          <div className="fixed top-0 right-0 z-[70] w-[80%] max-w-[310px] h-full md:hidden flex flex-col" style={{ background: "rgba(255,255,255,0.95)", backdropFilter: "blur(24px)", borderLeft: "1px solid rgba(0,0,0,0.06)", boxShadow: "-12px 0 50px rgba(0,0,0,0.15)", animation: "slideInRight 0.3s cubic-bezier(0.32,0.72,0,1)" }}>
            <div className="flex items-center justify-between px-5 py-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: "#F5851F" }}>
                  <PawPrint className="w-4 h-4 text-white" />
                </div>
                <span className="text-base font-extrabold" style={{ fontFamily: "'Baloo 2', cursive", color: "#0D47A1" }}>Menu</span>
              </div>
              <button onClick={() => setOpen(false)} className="w-8 h-8 rounded-lg flex items-center justify-center bg-black/5">
                <X className="w-4 h-4" style={{ color: "#555" }} />
              </button>
            </div>

            <div className="mx-5 h-px bg-black/[0.06]" />

            <nav className="flex-1 px-3 py-3 space-y-0.5">
              {navLinks.map(l => (
                <a key={l.href} href={l.href} className="flex items-center gap-3 px-3 py-3 rounded-xl text-[15px] font-semibold active:bg-blue-50/50 transition-all" style={{ color: "#333" }} onClick={() => setOpen(false)}>
                  <div className="w-9 h-9 rounded-lg flex items-center justify-center" style={{ background: "rgba(30,136,229,0.08)" }}>
                    <l.icon className="w-4 h-4" style={{ color: "#1E88E5" }} />
                  </div>
                  <span className="flex-1">{l.label}</span>
                  <ChevronRight className="w-3.5 h-3.5 text-gray-300" />
                </a>
              ))}
            </nav>

            <div className="px-4 pb-7 space-y-2.5">
              <div className="h-px bg-black/[0.06] mb-3" />
              <a href="https://wa.me/5569992216764" className="flex items-center justify-center gap-2 rounded-xl py-3 text-sm font-bold text-white active:scale-[0.97] transition-transform" style={{ background: "#1E88E5", boxShadow: "0 4px 16px rgba(30,136,229,0.25)" }}>
                <MessageSquare className="w-4 h-4" /> WhatsApp
              </a>
              <a href="https://wa.me/5569992216764" className="flex items-center justify-center gap-2 rounded-xl py-3 text-sm font-extrabold text-white active:scale-[0.97] transition-transform" style={{ background: "#F5851F", boxShadow: "0 4px 16px rgba(245,133,31,0.25)" }}>
                <PawPrint className="w-4 h-4" /> Agendar Agora
              </a>
              <p className="text-center text-[10px] pt-1" style={{ color: "#aaa" }}>(69) 99221-6764 · Seg–Sex 8h–19h</p>
            </div>
          </div>
        </>
      )}

      <style>{`@keyframes slideInRight { from { transform: translateX(100%); } to { transform: translateX(0); } }`}</style>
    </header>
  );
};

export default Header;
