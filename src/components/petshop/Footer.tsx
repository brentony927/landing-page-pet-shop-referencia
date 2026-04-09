import { Instagram, Facebook, MessageCircle, PawPrint, Heart } from "lucide-react";

const Footer = () => (
  <footer style={{ background: "var(--pet-navy)" }}>
    <div className="max-w-[1100px] mx-auto px-5 py-8 sm:py-14">
      {/* Top */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-10 pb-7" style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
        <div className="flex items-center gap-2.5">
          <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: "var(--pet-action)" }}>
            <PawPrint className="w-5 h-5 text-white" />
          </div>
          <span className="text-lg font-extrabold text-white" style={{ fontFamily: "'Baloo 2', cursive" }}>Demonstração</span>
        </div>
        <div className="flex gap-2">
          {[Instagram, Facebook, MessageCircle].map((Icon, i) => (
            <a key={i} href="https://wa.me/5569992216764" className="w-9 h-9 rounded-xl flex items-center justify-center text-white/30 hover:text-white hover:bg-white/10 transition-all duration-200">
              <Icon className="w-4 h-4" />
            </a>
          ))}
        </div>
      </div>

      {/* Links */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 mb-10">
        <div>
          <h4 className="text-[10px] uppercase tracking-widest mb-3.5 font-bold text-white/40">Serviços</h4>
          {["Banho & Tosa", "Tosa Higiênica", "Rações", "Entrega"].map(l => (
            <a key={l} href="#servicos" className="block text-sm mb-2.5 text-white/30 hover:text-white/70 transition-colors duration-200">{l}</a>
          ))}
        </div>
        <div>
          <h4 className="text-[10px] uppercase tracking-widest mb-3.5 font-bold text-white/40">Atendimento</h4>
          <p className="text-sm text-white/30 mb-1">Seg–Sex: 8h–19h</p>
          <p className="text-sm text-white/30 mb-3">Sáb: 8h–16h</p>
          <a href={"https://wa.me/5569992216764?text=" + encodeURIComponent("Olá! Gostaria de informações sobre os serviços do pet shop")} target="_blank" rel="noopener noreferrer" className="text-sm font-extrabold" style={{ color: "#FFB300" }}>(69) 99221-6764</a>
        </div>
        <div className="col-span-2 sm:col-span-1">
          <h4 className="text-[10px] uppercase tracking-widest mb-3.5 font-bold text-white/40">Agendar</h4>
          <p className="text-sm text-white/30 mb-4">Pelo WhatsApp é mais rápido.</p>
          <a href={"https://wa.me/5569992216764?text=" + encodeURIComponent("Olá! Gostaria de agendar um serviço para o meu pet. Quais horários estão disponíveis?")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-2xl px-5 py-2.5 text-sm font-extrabold text-white transition-all hover:-translate-y-0.5 active:scale-[0.98]" style={{ background: "var(--pet-action)", boxShadow: "0 4px 14px var(--pet-action-glow)" }}>
            AGENDAR
          </a>
        </div>
      </div>

      {/* Bottom */}
      <div className="pt-6 text-center" style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <p className="text-[11px] text-white/20 flex items-center justify-center gap-1 flex-wrap">
          © 2025 Demonstração ·{" "}
          <a href="/privacidade" className="underline hover:text-white/40 transition-colors">Privacidade</a> ·{" "}
          <a href="/termos" className="underline hover:text-white/40 transition-colors">Termos</a>
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
