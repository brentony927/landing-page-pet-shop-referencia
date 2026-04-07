import { Instagram, Facebook, MessageCircle, Dog } from "lucide-react";

const Footer = () => {
  return (
    <footer style={{ background: "#0a1f14" }}>
      <div className="max-w-[1100px] mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-10">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ background: "var(--forest)" }}>
                <Dog className="w-4 h-4 text-white" />
              </div>
              <span className="text-lg font-bold" style={{ fontFamily: "'Playfair Display', Georgia, serif", fontStyle: "italic", color: "#fff" }}>
                Patinhas & Cia
              </span>
            </div>
            <p className="text-sm leading-relaxed" style={{ color: "var(--txt-muted)" }}>
              Pet shop de bairro com 12 anos de história.
            </p>
            <div className="flex gap-2 mt-4">
              {[Instagram, Facebook, MessageCircle].map((Icon, i) => (
                <a key={i} href="https://wa.me/5569992216764" className="w-8 h-8 rounded-full flex items-center justify-center bg-white/10 transition-all duration-200 hover:bg-white/20" style={{ color: "var(--txt-muted)" }}>
                  <Icon className="w-3.5 h-3.5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-widest mb-4" style={{ color: "var(--txt-muted)" }}>Serviços</h4>
            {["Banho & Tosa", "Tosa Higiênica", "Rações", "Entrega em domicílio"].map((l) => (
              <a key={l} href="#servicos" className="block text-sm mb-2 transition-colors hover:text-white" style={{ color: "var(--txt-muted)" }}>{l}</a>
            ))}
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-widest mb-4" style={{ color: "var(--txt-muted)" }}>Atendimento</h4>
            <p className="text-sm mb-1" style={{ color: "var(--txt-muted)" }}>Segunda a Sexta: 8h–19h</p>
            <p className="text-sm mb-3" style={{ color: "var(--txt-muted)" }}>Sábado: 8h–16h</p>
            <a href="https://wa.me/5569992216764" className="text-sm font-bold" style={{ color: "var(--forest-light)" }}>(69) 99221-6764</a>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-widest mb-4" style={{ color: "var(--txt-muted)" }}>Agendar</h4>
            <p className="text-sm mb-4" style={{ color: "var(--txt-muted)" }}>Pelo WhatsApp ou formulário.</p>
            <a
              href="https://wa.me/5569992216764"
              className="block text-center rounded-lg px-5 py-2.5 text-sm font-bold text-white w-full transition-all duration-200 hover:-translate-y-0.5"
              style={{ background: "var(--amber)" }}
              onMouseEnter={(e) => e.currentTarget.style.background = "var(--amber-dark)"}
              onMouseLeave={(e) => e.currentTarget.style.background = "var(--amber)"}
            >
              AGENDAR AGORA
            </a>
          </div>
        </div>

        <div className="pt-6 border-t border-white/10 text-center">
          <p className="text-xs" style={{ color: "var(--txt-muted)" }}>© 2025 Patinhas & Cia — Todos os direitos reservados</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
