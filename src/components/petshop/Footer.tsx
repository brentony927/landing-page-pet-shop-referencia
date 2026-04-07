import { Instagram, Facebook, MessageCircle, PawPrint } from "lucide-react";

const Footer = () => {
  return (
    <footer style={{ background: "var(--pet-green-dark)" }}>
      <div className="max-w-[1100px] mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-10">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-9 h-9 rounded-full flex items-center justify-center" style={{ background: "var(--pet-green)" }}>
                <PawPrint className="w-4 h-4 text-white" />
              </div>
              <span className="text-lg font-extrabold text-white" style={{ fontFamily: "'Baloo 2', cursive" }}>
                Patinhas & Cia
              </span>
            </div>
            <p className="text-sm leading-relaxed text-white/60">
              Pet shop de bairro com 12 anos de história. 🐾
            </p>
            <div className="flex gap-2 mt-4">
              {[Instagram, Facebook, MessageCircle].map((Icon, i) => (
                <a key={i} href="https://wa.me/5569992216764" className="w-9 h-9 rounded-full flex items-center justify-center bg-white/10 transition-all duration-200 hover:bg-white/25 text-white/60 hover:text-white">
                  <Icon className="w-3.5 h-3.5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-widest mb-4 text-white/50 font-bold">Serviços</h4>
            {["Banho & Tosa", "Tosa Higiênica", "Rações", "Entrega em domicílio"].map((l) => (
              <a key={l} href="#servicos" className="block text-sm mb-2 transition-colors text-white/50 hover:text-white">{l}</a>
            ))}
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-widest mb-4 text-white/50 font-bold">Atendimento</h4>
            <p className="text-sm mb-1 text-white/50">Segunda a Sexta: 8h–19h</p>
            <p className="text-sm mb-3 text-white/50">Sábado: 8h–16h</p>
            <a href="https://wa.me/5569992216764" className="text-sm font-extrabold" style={{ color: "var(--pet-yellow)" }}>(69) 99221-6764</a>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-widest mb-4 text-white/50 font-bold">Agendar</h4>
            <p className="text-sm mb-4 text-white/50">Pelo WhatsApp ou formulário.</p>
            <a
              href="https://wa.me/5569992216764"
              className="block text-center rounded-full px-5 py-2.5 text-sm font-extrabold text-white w-full transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
              style={{ background: "var(--pet-orange)", boxShadow: "0 4px 14px rgba(255,138,101,0.3)" }}
            >
              🐾 AGENDAR AGORA
            </a>
          </div>
        </div>

        <div className="pt-6 border-t border-white/10 text-center">
          <p className="text-xs text-white/40">© 2025 Patinhas & Cia — Todos os direitos reservados 🐶</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
