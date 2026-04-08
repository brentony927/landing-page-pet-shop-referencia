import { useState, useEffect } from "react";
import { X, Gift, MessageCircle, PawPrint, Sparkles } from "lucide-react";

const WA_BASE = "https://wa.me/5569992216764";

const FirstVisitPopup = () => {
  const [show, setShow] = useState(false);
  const [phone, setPhone] = useState("");
  const [closing, setClosing] = useState(false);

  useEffect(() => {
    const visited = localStorage.getItem("pet_visited");
    if (!visited) {
      const timer = setTimeout(() => setShow(true), 10000);
      return () => clearTimeout(timer);
    }
  }, []);

  const close = () => {
    setClosing(true);
    setTimeout(() => { setShow(false); setClosing(false); }, 280);
    localStorage.setItem("pet_visited", "1");
  };

  const handleClaim = () => {
    const msg = `Oi! Quero meu desconto de 15% no primeiro banho! Meu WhatsApp: ${phone}`;
    window.open(`${WA_BASE}?text=${encodeURIComponent(msg)}`, "_blank");
    close();
  };

  if (!show) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 z-[9998] transition-opacity duration-300 ${closing ? "opacity-0" : "opacity-100"}`}
        style={{ background: "rgba(0,0,0,0.5)", backdropFilter: "blur(4px)" }}
        onClick={close}
      />

      {/* Modal */}
      <div
        className={`fixed z-[9999] inset-0 flex items-center justify-center px-4 transition-all duration-300 ${closing ? "opacity-0 scale-95" : "opacity-100 scale-100"}`}
        style={{ animation: closing ? "none" : "popIn 0.4s cubic-bezier(0.34,1.56,0.64,1)" }}
      >
        <div className="relative w-full max-w-[380px] rounded-[24px] overflow-hidden bg-white" style={{ boxShadow: "0 25px 60px rgba(0,0,0,0.2)" }}>
          {/* Header colorido */}
          <div className="relative px-6 pt-7 pb-5 text-center" style={{ background: "var(--pet-action)" }}>
            <button onClick={close} className="absolute top-3 right-3 w-7 h-7 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors">
              <X className="w-4 h-4 text-white" />
            </button>
            <div className="w-16 h-16 rounded-full mx-auto mb-3 flex items-center justify-center" style={{ background: "rgba(255,255,255,0.2)" }}>
              <Gift className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-extrabold text-white mb-1" style={{ fontFamily: "'Baloo 2', cursive" }}>
              Bem-vindo! 🐾
            </h3>
            <p className="text-sm text-white/85 font-medium">Primeira vez aqui? Temos um presente!</p>
            <PawPrint className="absolute -left-3 -bottom-3 w-16 h-16 text-white/10 rotate-12" />
          </div>

          {/* Body */}
          <div className="px-6 py-5">
            <div className="text-center mb-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider mb-2" style={{ background: "var(--pet-orange-light)", color: "var(--pet-action)" }}>
                <Sparkles className="w-3 h-3" /> Exclusivo para novos clientes
              </div>
              <p className="text-2xl font-extrabold" style={{ fontFamily: "'Baloo 2', cursive", color: "var(--pet-navy)" }}>
                15% OFF
              </p>
              <p className="text-sm text-gray-500">no primeiro banho do seu pet</p>
            </div>

            <div className="space-y-3">
              <div>
                <label className="block text-[11px] font-bold mb-1.5" style={{ color: "#888" }}>Seu WhatsApp</label>
                <input
                  type="tel"
                  className="w-full rounded-xl px-4 py-3 text-sm outline-none transition-all duration-200 focus:ring-2 bg-gray-50/80"
                  style={{ border: "1.5px solid #eee", color: "#333", "--tw-ring-color": "var(--pet-orange-light)" } as React.CSSProperties}
                  placeholder="(69) 99999-0000"
                  value={phone}
                  onChange={e => setPhone(e.target.value)}
                />
              </div>

              <button
                onClick={handleClaim}
                disabled={phone.length < 10}
                className="w-full rounded-2xl py-3.5 text-sm font-extrabold text-white transition-all hover:-translate-y-0.5 active:scale-[0.98] inline-flex items-center justify-center gap-2 disabled:opacity-50 disabled:hover:translate-y-0"
                style={{ background: "var(--pet-action)", boxShadow: "0 6px 24px var(--pet-action-glow)" }}
              >
                <MessageCircle className="w-4 h-4" /> QUERO MEU DESCONTO
              </button>
            </div>

            <p className="text-[10px] text-center text-gray-400 mt-3">
              Válido para o primeiro serviço. Desconto aplicado no WhatsApp.
            </p>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes popIn {
          from { opacity: 0; transform: scale(0.85) translateY(20px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }
      `}</style>
    </>
  );
};

export default FirstVisitPopup;
