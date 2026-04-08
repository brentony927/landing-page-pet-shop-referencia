import { useState } from "react";
import { Clock, Phone, MapPin, Send } from "lucide-react";
import { useInView } from "@/hooks/useInView";

const Contact = () => {
  const [form, setForm] = useState({ nome: "", telefone: "", pet: "", servico: "Banho & Tosa" });
  const { ref, visible } = useInView(0.1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Olá! Gostaria de agendar:\n\nNome: ${form.nome}\nTelefone: ${form.telefone}\nPet: ${form.pet}\nServiço: ${form.servico}`;
    window.open(`https://wa.me/5569992216764?text=${encodeURIComponent(msg)}`, "_blank");
  };

  const infos = [
    { icon: Clock, title: "Horário", info: "Seg–Sex: 8h–19h · Sáb: 8h–16h" },
    { icon: Phone, title: "WhatsApp", info: "(69) 99221-6764", href: "https://wa.me/5569992216764" },
    { icon: MapPin, title: "Local", info: "Av. Marechal Rondon, 1200 — Centro", mapHref: "https://maps.google.com/?q=Pet+Shop+Amazonia+Ji-Parana+RO" },
  ];

  return (
    <section id="contato" className="py-12 sm:py-16 lg:py-20 px-4" style={{ background: "#F8FAFD" }} ref={ref}>
      <div className={`max-w-[1100px] mx-auto scroll-fade-up ${visible ? "visible" : ""}`}>
        <div className="text-center mb-8">
          <span className="inline-block text-[10px] font-extrabold uppercase tracking-[0.15em] mb-2 px-4 py-1.5 rounded-full" style={{ background: "var(--pet-orange-light)", color: "var(--pet-action)" }}>Contato</span>
          <h2 className="text-[22px] sm:text-3xl lg:text-4xl font-extrabold" style={{ fontFamily: "'Baloo 2', cursive", color: "var(--pet-navy)" }}>Fale com a gente</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-8">
          <div className="space-y-3">
            {infos.map(c => (
              <div key={c.title} className="flex items-center gap-3 rounded-2xl p-4 bg-white hover:shadow-md transition-all" style={{ border: "1.5px solid #f0f0f0" }}>
                <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "var(--pet-orange-light)" }}>
                  <c.icon className="w-4 h-4" style={{ color: "var(--pet-action)" }} />
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-extrabold" style={{ color: "var(--pet-navy)" }}>{c.title}</p>
                  {c.href ? (
                    <a href={c.href} className="text-sm font-bold" style={{ color: "var(--pet-action)" }}>{c.info}</a>
                  ) : (
                    <p className="text-[13px] truncate" style={{ color: "#666" }}>{c.info}</p>
                  )}
                  {c.mapHref && <a href={c.mapHref} target="_blank" rel="noopener noreferrer" className="text-[11px] font-bold" style={{ color: "#F5851F" }}>Ver no Maps →</a>}
                </div>
              </div>
            ))}
            <div className="rounded-2xl overflow-hidden" style={{ border: "1.5px solid #f0f0f0" }}>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3943.5!2d-61.95!3d-10.88!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTDCsDUyJzQ4LjAiUyA2McKwNTcnMDAuMCJX!5e0!3m2!1spt-BR!2sbr!4v1" width="100%" height="150" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Localização" />
            </div>
          </div>

          <form onSubmit={handleSubmit} className="rounded-[20px] p-6 sm:p-7 bg-white" style={{ border: "1.5px solid #f0f0f0", boxShadow: "0 4px 24px rgba(0,0,0,0.04)" }}>
            <h3 className="text-lg font-extrabold mb-5" style={{ fontFamily: "'Baloo 2', cursive", color: "var(--pet-navy)" }}>Agendar serviço</h3>
            <div className="space-y-3">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-bold mb-1" style={{ color: "#888" }}>Nome</label>
                  <input className="w-full rounded-xl px-3.5 py-2.5 text-sm outline-none transition-all focus:ring-2 focus:ring-orange-100 bg-gray-50" style={{ border: "1.5px solid #eee", color: "#333" }} placeholder="Seu nome" value={form.nome} onChange={e => setForm({ ...form, nome: e.target.value })} required />
                </div>
                <div>
                  <label className="block text-[11px] font-bold mb-1" style={{ color: "#888" }}>Telefone</label>
                  <input className="w-full rounded-xl px-3.5 py-2.5 text-sm outline-none transition-all focus:ring-2 focus:ring-orange-100 bg-gray-50" style={{ border: "1.5px solid #eee", color: "#333" }} placeholder="(69) 99999-0000" value={form.telefone} onChange={e => setForm({ ...form, telefone: e.target.value })} required />
                </div>
              </div>
              <div>
                <label className="block text-[11px] font-bold mb-1" style={{ color: "#888" }}>Nome do pet</label>
                <input className="w-full rounded-xl px-3.5 py-2.5 text-sm outline-none transition-all focus:ring-2 focus:ring-orange-100 bg-gray-50" style={{ border: "1.5px solid #eee", color: "#333" }} placeholder="Como chama o bichinho?" value={form.pet} onChange={e => setForm({ ...form, pet: e.target.value })} />
              </div>
              <div>
                <label className="block text-[11px] font-bold mb-1" style={{ color: "#888" }}>Serviço</label>
                <select className="w-full rounded-xl px-3.5 py-2.5 text-sm outline-none transition-all focus:ring-2 focus:ring-orange-100 bg-gray-50 appearance-auto" style={{ border: "1.5px solid #eee", color: "#333" }} value={form.servico} onChange={e => setForm({ ...form, servico: e.target.value })}>
                  <option>Banho & Tosa</option>
                  <option>Tosa Higiênica</option>
                  <option>Rações & Petiscos</option>
                  <option>Outro</option>
                </select>
              </div>
            </div>
            <button type="submit" className="w-full rounded-xl py-3 text-sm font-extrabold text-white mt-5 transition-all hover:-translate-y-0.5 active:scale-[0.98] inline-flex items-center justify-center gap-2" style={{ background: "#F5851F", boxShadow: "0 6px 20px rgba(245,133,31,0.3)" }}>
              <Send className="w-4 h-4" /> ENVIAR PELO WHATSAPP
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
