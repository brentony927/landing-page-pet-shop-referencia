import { useState } from "react";
import { Clock, Phone, MapPin } from "lucide-react";
import { useInView } from "@/hooks/useInView";

const Contact = () => {
  const [form, setForm] = useState({ nome: "", telefone: "", pet: "", servico: "Banho & Tosa" });
  const { ref, visible } = useInView(0.1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Olá! Gostaria de agendar:\n\nNome: ${form.nome}\nTelefone: ${form.telefone}\nPet: ${form.pet}\nServiço: ${form.servico}`;
    window.open(`https://wa.me/5569992216764?text=${encodeURIComponent(msg)}`, "_blank");
  };

  return (
    <section id="contato" className="py-12 sm:py-16 lg:py-20 px-4" style={{ background: "#F5F8FC" }} ref={ref}>
      <div className={`max-w-[1200px] mx-auto scroll-fade-up ${visible ? "visible" : ""}`}>
        <div className="text-center mb-8 sm:mb-10">
          <span className="inline-block text-[10px] sm:text-[11px] font-bold uppercase tracking-widest mb-2 px-4 py-1.5 rounded-full" style={{ background: "#FFF3E8", color: "#F5851F" }}>
            Contato
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold" style={{ fontFamily: "'Baloo 2', cursive", color: "#1565C0" }}>
            Fale com a gente
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-10 items-start">
          <div className="space-y-3">
            {[
              { icon: Clock, title: "Horário", info: "Seg–Sex: 8h às 19h · Sáb: 8h às 16h" },
              { icon: Phone, title: "WhatsApp", info: "(69) 99221-6764", href: "https://wa.me/5569992216764", isLink: true },
              { icon: MapPin, title: "Localização", info: "Av. Marechal Rondon, 1200 — Centro", link: { text: "Ver no Maps →", href: "https://maps.google.com/?q=Pet+Shop+Amazonia+Ji-Parana+RO" } },
            ].map((c) => (
              <div key={c.title} className="flex items-center gap-3 rounded-2xl p-4 transition-all duration-200 bg-white hover:shadow-md" style={{ border: "1px solid #E8E8E8" }}>
                <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "#E3F2FD" }}>
                  <c.icon className="w-5 h-5" style={{ color: "#1E88E5" }} />
                </div>
                <div className="min-w-0">
                  <h4 className="text-sm font-extrabold" style={{ color: "#333" }}>{c.title}</h4>
                  {c.isLink ? (
                    <a href={c.href} className="text-sm font-bold" style={{ color: "#1E88E5" }}>{c.info}</a>
                  ) : (
                    <p className="text-sm truncate" style={{ color: "#666" }}>{c.info}</p>
                  )}
                  {c.link && (
                    <a href={c.link.href} target="_blank" rel="noopener noreferrer" className="text-xs font-bold block mt-0.5" style={{ color: "#F5851F" }}>{c.link.text}</a>
                  )}
                </div>
              </div>
            ))}

            <div className="rounded-2xl overflow-hidden" style={{ border: "1px solid #E8E8E8" }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3943.5!2d-61.95!3d-10.88!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTDCsDUyJzQ4LjAiUyA2McKwNTcnMDAuMCJX!5e0!3m2!1spt-BR!2sbr!4v1"
                width="100%" height="160" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Localização"
              />
            </div>
          </div>

          <form onSubmit={handleSubmit} className="rounded-3xl p-6 sm:p-8 bg-white" style={{ border: "1px solid #E8E8E8", boxShadow: "0 8px 30px rgba(0,0,0,0.05)" }}>
            <h3 className="text-lg font-extrabold mb-5" style={{ fontFamily: "'Baloo 2', cursive", color: "#1565C0" }}>
              🐾 Agendar serviço
            </h3>

            <div className="grid grid-cols-2 gap-3 mb-3">
              <div>
                <label className="block text-xs font-bold mb-1.5" style={{ color: "#555" }}>Nome</label>
                <input className="w-full rounded-xl px-3.5 py-3 text-sm outline-none transition-all focus:ring-2 focus:ring-blue-200" style={{ border: "1.5px solid #E8E8E8", color: "#333" }} placeholder="Seu nome" value={form.nome} onChange={(e) => setForm({ ...form, nome: e.target.value })} required />
              </div>
              <div>
                <label className="block text-xs font-bold mb-1.5" style={{ color: "#555" }}>Telefone</label>
                <input className="w-full rounded-xl px-3.5 py-3 text-sm outline-none transition-all focus:ring-2 focus:ring-blue-200" style={{ border: "1.5px solid #E8E8E8", color: "#333" }} placeholder="(69) 99999-0000" value={form.telefone} onChange={(e) => setForm({ ...form, telefone: e.target.value })} required />
              </div>
            </div>

            <div className="mb-3">
              <label className="block text-xs font-bold mb-1.5" style={{ color: "#555" }}>Nome do pet</label>
              <input className="w-full rounded-xl px-3.5 py-3 text-sm outline-none transition-all focus:ring-2 focus:ring-blue-200" style={{ border: "1.5px solid #E8E8E8", color: "#333" }} placeholder="Como chama o bichinho?" value={form.pet} onChange={(e) => setForm({ ...form, pet: e.target.value })} />
            </div>

            <div className="mb-5">
              <label className="block text-xs font-bold mb-1.5" style={{ color: "#555" }}>Serviço</label>
              <select className="w-full rounded-xl px-3.5 py-3 text-sm outline-none transition-all focus:ring-2 focus:ring-blue-200 appearance-auto" style={{ border: "1.5px solid #E8E8E8", color: "#333" }} value={form.servico} onChange={(e) => setForm({ ...form, servico: e.target.value })}>
                <option>Banho & Tosa</option>
                <option>Tosa Higiênica</option>
                <option>Rações & Petiscos</option>
                <option>Outro</option>
              </select>
            </div>

            <button
              type="submit"
              className="w-full rounded-2xl py-3.5 text-sm font-extrabold text-white transition-all duration-200 hover:-translate-y-0.5 active:scale-[0.98] hover:shadow-lg"
              style={{ background: "#F5851F", boxShadow: "0 6px 20px rgba(245,133,31,0.35)" }}
            >
              ENVIAR PELO WHATSAPP →
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
