import { Instagram, Facebook, MessageCircle, Dog } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white border-t" style={{ borderColor: "#e7e5e4" }}>
      <div className="max-w-[1100px] mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-full flex items-center justify-center" style={{ background: "#16a34a" }}>
                <Dog className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold" style={{ fontFamily: "'Fraunces', Georgia, serif", color: "#1c1917" }}>
                Patinhas <span style={{ color: "#16a34a" }}>& Cia</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed max-w-xs" style={{ color: "#78716c" }}>
              Pet shop de bairro com 12 anos de história.
            </p>
            <div className="flex gap-3 mt-6">
              {[Instagram, Facebook, MessageCircle].map((Icon, i) => (
                <a
                  key={i}
                  href="https://wa.me/5569992216764"
                  className="w-9 h-9 rounded-full flex items-center justify-center transition-colors duration-200"
                  style={{ background: "#f5f5f4", color: "#78716c" }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = "#16a34a"; e.currentTarget.style.color = "#fff"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = "#f5f5f4"; e.currentTarget.style.color = "#78716c"; }}
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-[13px] uppercase tracking-widest mb-4" style={{ color: "#a8a29e" }}>Serviços</h4>
            {["Banho & Tosa", "Tosa Higiênica", "Rações", "Entrega em domicílio"].map((l) => (
              <a key={l} href="#servicos" className="block text-sm mb-2 transition-colors duration-200" style={{ color: "#78716c" }}
                onMouseEnter={(e) => e.currentTarget.style.color = "#16a34a"}
                onMouseLeave={(e) => e.currentTarget.style.color = "#78716c"}
              >{l}</a>
            ))}
          </div>

          <div>
            <h4 className="text-[13px] uppercase tracking-widest mb-4" style={{ color: "#a8a29e" }}>Atendimento</h4>
            {["Segunda a Sexta: 8h–19h", "Sábado: 8h–16h"].map((l) => (
              <p key={l} className="text-sm mb-2" style={{ color: "#78716c" }}>{l}</p>
            ))}
            <a href="https://wa.me/5569992216764" className="text-sm font-bold block mb-2" style={{ color: "#16a34a" }}>
              (69) 99221-6764
            </a>
          </div>

          <div>
            <h4 className="text-[13px] uppercase tracking-widest mb-4" style={{ color: "#a8a29e" }}>Agendar</h4>
            <p className="text-sm mb-4" style={{ color: "#78716c" }}>
              Marque seu horário pelo WhatsApp ou formulário.
            </p>
            <a
              href="https://wa.me/5569992216764"
              className="block text-center rounded-md px-6 py-3 text-sm font-bold text-white w-full transition-all duration-200"
              style={{ background: "#f97316" }}
              onMouseEnter={(e) => e.currentTarget.style.background = "#c2410c"}
              onMouseLeave={(e) => e.currentTarget.style.background = "#f97316"}
            >
              AGENDAR AGORA
            </a>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center pt-8" style={{ borderTop: "1px solid #e7e5e4" }}>
          <p className="text-[13px]" style={{ color: "#a8a29e" }}>
            © 2025 Patinhas & Cia — Todos os direitos reservados
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
