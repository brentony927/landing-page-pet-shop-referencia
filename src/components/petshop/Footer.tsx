import { Instagram, Facebook, MessageCircle, PawPrint } from "lucide-react";

const Footer = () => {
  return (
    <footer style={{ background: "#1a1a2e" }}>
      <div className="max-w-[1200px] mx-auto px-4 lg:px-6 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: "var(--pet-orange)" }}>
                <PawPrint className="w-5 h-5 text-white" />
              </div>
              <span className="text-lg font-extrabold text-white" style={{ fontFamily: "'Baloo 2', cursive" }}>
                Demonstração
              </span>
            </div>
            <p className="text-sm leading-relaxed text-white/50 mb-5">
              Pet shop de bairro com 12 anos de história cuidando dos seus pets.
            </p>
            <div className="flex gap-2">
              {[Instagram, Facebook, MessageCircle].map((Icon, i) => (
                <a key={i} href="https://wa.me/5569992216764" className="w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-200 text-white/50 hover:text-white hover:bg-white/10">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-widest mb-5 font-bold text-white/80">Serviços</h4>
            {["Banho & Tosa", "Tosa Higiênica", "Rações", "Entrega em domicílio"].map((l) => (
              <a key={l} href="#servicos" className="block text-sm mb-2.5 transition-colors text-white/40 hover:text-white">{l}</a>
            ))}
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-widest mb-5 font-bold text-white/80">Atendimento</h4>
            <p className="text-sm mb-1 text-white/40">Segunda a Sexta: 8h–19h</p>
            <p className="text-sm mb-4 text-white/40">Sábado: 8h–16h</p>
            <a href="https://wa.me/5569992216764" className="text-sm font-extrabold" style={{ color: "var(--pet-yellow)" }}>(69) 99221-6764</a>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-widest mb-5 font-bold text-white/80">Agendar</h4>
            <p className="text-sm mb-5 text-white/40">Pelo WhatsApp é mais rápido.</p>
            <a
              href="https://wa.me/5569992216764"
              className="block text-center rounded-xl px-5 py-3 text-sm font-extrabold text-white w-full transition-all duration-200 hover:-translate-y-0.5"
              style={{ background: "var(--pet-orange)", boxShadow: "0 4px 14px rgba(255,138,101,0.3)" }}
            >
              🐾 AGENDAR AGORA
            </a>
          </div>
        </div>

        <div className="pt-6 border-t border-white/10 text-center">
          <p className="text-xs text-white/30">
            © 2025 Demonstração — Todos os direitos reservados ·{" "}
            <a href="/privacidade" className="underline hover:text-white/60 transition-colors">Política de Privacidade</a> ·{" "}
            <a href="/termos" className="underline hover:text-white/60 transition-colors">Termos de Uso</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
