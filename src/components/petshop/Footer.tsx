import { Instagram, Facebook, MessageCircle, PawPrint } from "lucide-react";

const Footer = () => (
  <footer style={{ background: "#0D1B2A" }}>
    <div className="max-w-[1100px] mx-auto px-5 py-10 sm:py-12">
      {/* Top — logo + social */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8 pb-6" style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
        <div className="flex items-center gap-2.5">
          <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: "#F5851F" }}>
            <PawPrint className="w-5 h-5 text-white" />
          </div>
          <span className="text-lg font-extrabold text-white" style={{ fontFamily: "'Baloo 2', cursive" }}>Demonstração</span>
        </div>
        <div className="flex gap-2">
          {[Instagram, Facebook, MessageCircle].map((Icon, i) => (
            <a key={i} href="https://wa.me/5569992216764" className="w-9 h-9 rounded-lg flex items-center justify-center text-white/35 hover:text-white hover:bg-white/10 transition-all">
              <Icon className="w-4 h-4" />
            </a>
          ))}
        </div>
      </div>

      {/* Links grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 mb-8">
        <div>
          <h4 className="text-[10px] uppercase tracking-widest mb-3 font-bold text-white/50">Serviços</h4>
          {["Banho & Tosa", "Tosa Higiênica", "Rações", "Entrega"].map(l => (
            <a key={l} href="#servicos" className="block text-sm mb-2 text-white/35 hover:text-white transition-colors">{l}</a>
          ))}
        </div>
        <div>
          <h4 className="text-[10px] uppercase tracking-widest mb-3 font-bold text-white/50">Atendimento</h4>
          <p className="text-sm text-white/35 mb-1">Seg–Sex: 8h–19h</p>
          <p className="text-sm text-white/35 mb-3">Sáb: 8h–16h</p>
          <a href="https://wa.me/5569992216764" className="text-sm font-extrabold" style={{ color: "#FFB300" }}>(69) 99221-6764</a>
        </div>
        <div className="col-span-2 sm:col-span-1">
          <h4 className="text-[10px] uppercase tracking-widest mb-3 font-bold text-white/50">Agendar</h4>
          <p className="text-sm text-white/35 mb-3">Pelo WhatsApp é mais rápido.</p>
          <a href="https://wa.me/5569992216764" className="inline-flex items-center justify-center gap-2 rounded-xl px-5 py-2.5 text-sm font-extrabold text-white transition-all hover:-translate-y-0.5 active:scale-[0.98]" style={{ background: "#F5851F", boxShadow: "0 4px 14px rgba(245,133,31,0.25)" }}>
            AGENDAR
          </a>
        </div>
      </div>

      {/* Bottom */}
      <div className="pt-5 text-center" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
        <p className="text-[11px] text-white/25">
          © 2025 Demonstração — Todos os direitos reservados ·{" "}
          <a href="/privacidade" className="underline hover:text-white/50 transition-colors">Privacidade</a> ·{" "}
          <a href="/termos" className="underline hover:text-white/50 transition-colors">Termos</a>
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
