import { Instagram, Facebook, MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer style={{ background: "#0f3d20" }} className="text-white">
      <div className="max-w-[1100px] mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* Col 1 */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-full flex items-center justify-center" style={{ background: "var(--amarelo)" }}>
                <span className="text-lg">🐾</span>
              </div>
              <span className="text-xl font-bold" style={{ fontFamily: "'Fraunces', Georgia, serif" }}>
                Patinhas <span style={{ color: "var(--amarelo)" }}>& Cia</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed max-w-xs" style={{ color: "rgba(255,255,255,0.6)" }}>
              Pet shop de bairro com 12 anos de história. Aqui, cada animal é tratado com nome e carinho.
            </p>
            <div className="flex gap-3 mt-6">
              {[Instagram, Facebook, MessageCircle].map((Icon, i) => (
                <a
                  key={i}
                  href="https://wa.me/5569992216764"
                  className="w-9 h-9 rounded-full flex items-center justify-center transition-colors duration-200"
                  style={{ background: "rgba(255,255,255,0.1)" }}
                  onMouseEnter={(e) => e.currentTarget.style.background = "rgba(255,255,255,0.2)"}
                  onMouseLeave={(e) => e.currentTarget.style.background = "rgba(255,255,255,0.1)"}
                >
                  <Icon className="w-4 h-4 text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Col 2 */}
          <div>
            <h4 className="text-[13px] uppercase tracking-widest mb-4" style={{ color: "rgba(255,255,255,0.5)" }}>Serviços</h4>
            {["Banho & Tosa", "Tosa Higiênica", "Rações", "Entrega em domicílio", "Agendamento online"].map((l) => (
              <a key={l} href="#servicos" className="block text-sm mb-2 transition-colors duration-200" style={{ color: "rgba(255,255,255,0.7)" }}
                onMouseEnter={(e) => e.currentTarget.style.color = "#fff"}
                onMouseLeave={(e) => e.currentTarget.style.color = "rgba(255,255,255,0.7)"}
              >{l}</a>
            ))}
          </div>

          {/* Col 3 */}
          <div>
            <h4 className="text-[13px] uppercase tracking-widest mb-4" style={{ color: "rgba(255,255,255,0.5)" }}>Atendimento</h4>
            {[
              "Segunda a Sexta: 8h–19h",
              "Sábado: 8h–16h",
            ].map((l) => (
              <p key={l} className="text-sm mb-2" style={{ color: "rgba(255,255,255,0.7)" }}>{l}</p>
            ))}
            <a href="https://wa.me/5569992216764" className="text-sm font-bold block mb-2" style={{ color: "var(--amarelo)" }}>
              (69) 99221-6764
            </a>
            <a href="https://wa.me/5569992216764" className="text-sm transition-colors duration-200" style={{ color: "rgba(255,255,255,0.7)" }}
              onMouseEnter={(e) => e.currentTarget.style.color = "#fff"}
              onMouseLeave={(e) => e.currentTarget.style.color = "rgba(255,255,255,0.7)"}
            >WhatsApp</a>
          </div>

          {/* Col 4 */}
          <div>
            <h4 className="text-[13px] uppercase tracking-widest mb-4" style={{ color: "rgba(255,255,255,0.5)" }}>Agendar</h4>
            <p className="text-sm mb-4" style={{ color: "rgba(255,255,255,0.7)" }}>
              Marque seu horário rápido pelo WhatsApp ou pelo formulário.
            </p>
            <a
              href="https://wa.me/5569992216764"
              className="block text-center rounded-md px-6 py-3 text-sm font-bold text-white w-full transition-all duration-200"
              style={{ background: "var(--laranja)" }}
              onMouseEnter={(e) => e.currentTarget.style.background = "var(--laranja-escuro)"}
              onMouseLeave={(e) => e.currentTarget.style.background = "var(--laranja)"}
            >
              AGENDAR AGORA
            </a>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center pt-8" style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}>
          <p className="text-[13px]" style={{ color: "rgba(255,255,255,0.4)" }}>
            © 2024 Patinhas & Cia — Todos os direitos reservados
          </p>
          <p className="text-xs" style={{ color: "rgba(255,255,255,0.25)" }}>
            Feito com carinho no bairro
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
