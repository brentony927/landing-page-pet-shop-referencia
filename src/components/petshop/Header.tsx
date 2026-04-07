import { useState } from "react";
import { Menu, X, Phone, Dog } from "lucide-react";

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
      <div className="hidden md:flex items-center justify-center gap-6 py-1.5 text-xs font-medium text-white" style={{ background: "var(--forest)" }}>
        <span>Seg–Sex: 8h–19h | Sáb: 8h–16h</span>
        <a href="https://wa.me/5569992216764" className="flex items-center gap-1 hover:underline">
          <Phone className="w-3 h-3" /> (69) 99221-6764
        </a>
        <span className="text-white/70">💳 Pix · Cartão · Dinheiro</span>
      </div>

      <div className="h-16" style={{ background: "var(--cream)", borderBottom: "1px solid var(--border)" }}>
        <div className="max-w-[1100px] mx-auto flex items-center justify-between h-full px-4">
          <a href="#inicio" className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-full flex items-center justify-center" style={{ background: "var(--forest)" }}>
              <Dog className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl" style={{ fontFamily: "'Playfair Display', Georgia, serif", color: "var(--forest)", fontWeight: 900 }}>
              Patinhas <span style={{ color: "var(--forest)" }}>& Cia</span>
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative text-[13px] font-medium tracking-widest uppercase transition-colors duration-200"
                style={{ color: "var(--txt-secondary)", fontFamily: "'DM Sans', sans-serif" }}
                onMouseEnter={(e) => e.currentTarget.style.color = "var(--forest)"}
                onMouseLeave={(e) => e.currentTarget.style.color = "var(--txt-secondary)"}
              >
                <span className="relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:transition-all after:duration-200 hover:after:w-full" style={{ ['--tw-after-bg' as string]: "var(--amber)" }}>
                  {link.label}
                </span>
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://wa.me/5569992216764"
              className="rounded-md px-4 py-2 text-xs font-semibold tracking-wider transition-colors duration-200"
              style={{ border: "1.5px solid var(--border)", color: "var(--txt-secondary)" }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = "var(--forest)"; e.currentTarget.style.color = "var(--forest)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.color = "var(--txt-secondary)"; }}
            >
              WHATSAPP
            </a>
            <a
              href="https://wa.me/5569992216764"
              className="rounded-md px-6 py-2 text-xs font-bold tracking-wider text-white transition-all duration-200 hover:-translate-y-0.5"
              style={{ background: "var(--amber)" }}
              onMouseEnter={(e) => e.currentTarget.style.background = "var(--amber-dark)"}
              onMouseLeave={(e) => e.currentTarget.style.background = "var(--amber)"}
            >
              AGENDAR
            </a>
          </div>

          <button className="md:hidden p-2" style={{ color: "var(--txt-primary)" }} onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <>
          <div
            className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm md:hidden"
            onClick={() => setMobileOpen(false)}
          />
          <div
            className="fixed top-0 right-0 z-50 w-72 h-full md:hidden flex flex-col"
            style={{
              background: "rgba(255,255,255,0.85)",
              backdropFilter: "blur(20px) saturate(180%)",
              WebkitBackdropFilter: "blur(20px) saturate(180%)",
              borderLeft: "1px solid rgba(0,0,0,0.08)",
            }}
          >
            <div className="flex items-center justify-between px-5 py-4" style={{ borderBottom: "1px solid var(--border)" }}>
              <span className="text-base font-bold" style={{ fontFamily: "'Playfair Display', Georgia, serif", color: "var(--txt-primary)" }}>Menu</span>
              <button onClick={() => setMobileOpen(false)} className="p-1">
                <X className="w-5 h-5" style={{ color: "var(--txt-secondary)" }} />
              </button>
            </div>
            <nav className="flex-1 px-5 py-4 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block text-sm font-semibold tracking-wider py-3 transition-colors duration-200"
                  style={{ color: "var(--txt-primary)", borderBottom: "1px solid var(--border)" }}
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </nav>
            <div className="px-5 py-5 space-y-3" style={{ borderTop: "1px solid var(--border)" }}>
              <a href="https://wa.me/5569992216764" className="block text-center rounded-lg py-3 text-xs font-semibold tracking-wider" style={{ border: "1.5px solid var(--border)", color: "var(--txt-secondary)" }}>
                WHATSAPP
              </a>
              <a href="https://wa.me/5569992216764" className="block text-center rounded-lg py-3 text-xs font-bold tracking-wider text-white" style={{ background: "var(--amber)" }}>
                AGENDAR
              </a>
              <p className="text-center text-[11px]" style={{ color: "var(--txt-muted)" }}>💳 Pix · Cartão · Dinheiro</p>
            </div>
          </div>
        </>
      )}
    </header>
  );
};

export default Header;
