import { useState } from "react";
import { Clock, Phone, MapPin, Send, Shield, CheckCircle, Circle, Star } from "lucide-react";
import { useInView } from "@/hooks/useInView";
import { useOpenStatus } from "@/hooks/useOpenStatus";

const Contact = () => {
  const [form, setForm] = useState({ nome: "", telefone: "", pet: "", servico: "Banho & Tosa" });
  const { ref, visible } = useInView(0.1);
  const status = useOpenStatus();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Olá! Gostaria de agendar:\n\nNome: ${form.nome}\nTelefone: ${form.telefone}\nPet: ${form.pet}\nServiço: ${form.servico}`;
    window.open(`https://wa.me/5569992216764?text=${encodeURIComponent(msg)}`, "_blank");
  };

  const infos = [
    { icon: Clock, title: "Horário", info: "Seg–Sex: 8h–19h · Sáb: 8h–16h", statusBadge: true },
    { icon: Phone, title: "WhatsApp", info: "(69) 99221-6764", href: "https://wa.me/5569992216764" },
    { icon: MapPin, title: "Local", info: "Av. Marechal Rondon, 1200 — Centro", mapHref: "https://maps.google.com/?q=Pet+Shop+Amazonia+Ji-Parana+RO" },
  ];

  return (
    <section id="contato" className="py-14 sm:py-18 lg:py-24 px-4" style={{ background: "var(--pet-bg-alt)" }} ref={ref}>
      <div className={`max-w-[1100px] mx-auto scroll-fade-up ${visible ? "visible" : ""}`}>
        <div className="text-center mb-10">
          <span className="inline-block text-[10px] font-extrabold uppercase tracking-[0.18em] mb-2.5 px-4 py-1.5 rounded-full" style={{ background: "var(--pet-orange-light)", color: "var(--pet-action)" }}>Contato</span>
          <h2 className="text-[24px] sm:text-3xl lg:text-[40px] font-extrabold" style={{ fontFamily: "'Baloo 2', cursive", color: "var(--pet-navy)" }}>Fale com a gente</h2>
          <p className="text-sm text-gray-400 mt-2">Resposta em menos de 5 minutos pelo WhatsApp</p>
          <div className="flex items-center justify-center gap-2 mt-3">
            <div className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-white" style={{ border: "1.5px solid #f0f0f0", boxShadow: "0 2px 8px rgba(0,0,0,0.04)" }}>
              <Star className="w-3.5 h-3.5" style={{ color: "#FBBC04", fill: "#FBBC04" }} />
              <Star className="w-3.5 h-3.5" style={{ color: "#FBBC04", fill: "#FBBC04" }} />
              <Star className="w-3.5 h-3.5" style={{ color: "#FBBC04", fill: "#FBBC04" }} />
              <Star className="w-3.5 h-3.5" style={{ color: "#FBBC04", fill: "#FBBC04" }} />
              <Star className="w-3.5 h-3.5" style={{ color: "#FBBC04", fill: "#FBBC04" }} />
              <span className="text-xs font-extrabold ml-1" style={{ color: "var(--pet-navy)" }}>5.0</span>
              <span className="text-[10px] text-gray-400 font-bold">no Google</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-8">
          <div className="space-y-3">
            {infos.map(c => (
              <div key={c.title} className="flex items-center gap-3.5 rounded-2xl p-4 bg-white hover:shadow-md transition-all duration-300 hover:-translate-y-0.5" style={{ border: "1.5px solid #f0f0f0" }}>
                <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "var(--pet-orange-light)" }}>
                  <c.icon className="w-4 h-4" style={{ color: "var(--pet-action)" }} />
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <p className="text-sm font-extrabold" style={{ color: "var(--pet-navy)" }}>{c.title}</p>
                    {(c as any).statusBadge && (
                      <span className="flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold" style={{ background: status.isOpen ? "#DCFCE7" : "#FEE2E2", color: status.isOpen ? "#16A34A" : "#DC2626" }}>
                        <Circle className="w-1.5 h-1.5" style={{ fill: "currentColor", color: "currentColor" }} />
                        {status.label}
                      </span>
                    )}
                  </div>
                  {c.href ? (
                    <a href={c.href} className="text-sm font-bold" style={{ color: "var(--pet-action)" }}>{c.info}</a>
                  ) : (
                    <p className="text-[13px] truncate" style={{ color: "#666" }}>{c.info}</p>
                  )}
                  {c.mapHref && <a href={c.mapHref} target="_blank" rel="noopener noreferrer" className="text-[11px] font-bold" style={{ color: "var(--pet-action)" }}>Ver no Maps →</a>}
                </div>
              </div>
            ))}
            <div className="rounded-2xl overflow-hidden" style={{ border: "1.5px solid #f0f0f0" }}>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3943.5!2d-61.95!3d-10.88!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTDCsDUyJzQ4LjAiUyA2McKwNTcnMDAuMCJX!5e0!3m2!1spt-BR!2sbr!4v1" width="100%" height="150" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Localização" />
            </div>
          </div>

          <form onSubmit={handleSubmit} className="rounded-[22px] p-6 sm:p-7 bg-white relative" style={{ border: "1.5px solid #f0f0f0", boxShadow: "0 4px 24px rgba(0,0,0,0.04)" }}>
            <h3 className="text-lg font-extrabold mb-1" style={{ fontFamily: "'Baloo 2', cursive", color: "var(--pet-navy)" }}>Agendar serviço</h3>
            {/* Gatilho de segurança */}
            <div className="flex items-center gap-1.5 mb-5">
              <Shield className="w-3 h-3" style={{ color: "var(--pet-green)" }} />
              <span className="text-[10px] font-semibold text-gray-400">Seus dados são enviados apenas pelo WhatsApp</span>
            </div>
            <div className="space-y-3.5">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-bold mb-1.5" style={{ color: "#888" }}>Nome</label>
                  <input className="w-full rounded-xl px-3.5 py-2.5 text-sm outline-none transition-all duration-200 focus:ring-2 bg-gray-50/80" style={{ border: "1.5px solid #eee", color: "#333", "--tw-ring-color": "var(--pet-orange-light)" } as React.CSSProperties} placeholder="Seu nome" value={form.nome} onChange={e => setForm({ ...form, nome: e.target.value })} required />
                </div>
                <div>
                  <label className="block text-[11px] font-bold mb-1.5" style={{ color: "#888" }}>Telefone</label>
                  <input className="w-full rounded-xl px-3.5 py-2.5 text-sm outline-none transition-all duration-200 focus:ring-2 bg-gray-50/80" style={{ border: "1.5px solid #eee", color: "#333", "--tw-ring-color": "var(--pet-orange-light)" } as React.CSSProperties} placeholder="(69) 99999-0000" value={form.telefone} onChange={e => setForm({ ...form, telefone: e.target.value })} required />
                </div>
              </div>
              <div>
                <label className="block text-[11px] font-bold mb-1.5" style={{ color: "#888" }}>Nome do pet</label>
                <input className="w-full rounded-xl px-3.5 py-2.5 text-sm outline-none transition-all duration-200 focus:ring-2 bg-gray-50/80" style={{ border: "1.5px solid #eee", color: "#333", "--tw-ring-color": "var(--pet-orange-light)" } as React.CSSProperties} placeholder="Como chama o bichinho?" value={form.pet} onChange={e => setForm({ ...form, pet: e.target.value })} />
              </div>
              <div>
                <label className="block text-[11px] font-bold mb-1.5" style={{ color: "#888" }}>Serviço</label>
                <select className="w-full rounded-xl px-3.5 py-2.5 text-sm outline-none transition-all duration-200 focus:ring-2 bg-gray-50/80 appearance-auto" style={{ border: "1.5px solid #eee", color: "#333", "--tw-ring-color": "var(--pet-orange-light)" } as React.CSSProperties} value={form.servico} onChange={e => setForm({ ...form, servico: e.target.value })}>
                  <option>Banho & Tosa</option>
                  <option>Tosa Higiênica</option>
                  <option>Rações & Petiscos</option>
                  <option>Outro</option>
                </select>
              </div>
            </div>
            <button type="submit" className="w-full rounded-2xl py-3.5 text-sm font-extrabold text-white mt-5 transition-all hover:-translate-y-0.5 active:scale-[0.98] inline-flex items-center justify-center gap-2" style={{ background: "var(--pet-action)", boxShadow: "0 6px 24px var(--pet-action-glow)" }}>
              <Send className="w-4 h-4" /> ENVIAR PELO WHATSAPP
            </button>
            {/* Micro prova social */}
            <div className="flex items-center justify-center gap-1.5 mt-3">
              <CheckCircle className="w-3 h-3" style={{ color: "var(--pet-green)" }} />
              <span className="text-[10px] font-semibold text-gray-400">23 agendamentos hoje</span>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
