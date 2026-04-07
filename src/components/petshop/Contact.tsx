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
    <section id="contato" className="py-14 sm:py-20 px-4" style={{ background: "var(--pet-bg-alt)" }} ref={ref}>
      <div className={`max-w-[1200px] mx-auto scroll-fade-up ${visible ? "visible" : ""}`}>
        <div className="text-center mb-10">
          <span className="inline-block text-[11px] font-bold uppercase tracking-widest mb-3 px-4 py-1.5 rounded-full" style={{ background: "var(--pet-orange-light)", color: "var(--pet-orange)" }}>
            Contato
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold" style={{ fontFamily: "'Baloo 2', cursive", color: "var(--pet-blue-dark)" }}>
            Fale com a gente
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 items-start">
          <div className="space-y-3">
            {[
              { icon: Clock, title: "Horário", info: "Seg–Sex: 8h às 19h · Sáb: 8h às 16h" },
              { icon: Phone, title: "WhatsApp", info: "(69) 99221-6764", href: "https://wa.me/5569992216764", isLink: true },
              { icon: MapPin, title: "Localização", info: "Av. Marechal Rondon, 1200 — Centro, Ji-Paraná/RO", link: { text: "Ver no Maps →", href: "https://maps.google.com/?q=Pet+Shop+Amazonia+Ji-Parana+RO" } },
            ].map((c) => (
              <div key={c.title} className="flex items-center gap-3 sm:gap-4 rounded-2xl p-4 transition-all duration-200 bg-white hover:shadow-md" style={{ border: "1px solid var(--pet-gray-border)" }}>
                <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "var(--pet-blue-light)" }}>
                  <c.icon className="w-4 h-4" style={{ color: "var(--pet-blue)" }} />
                </div>
                <div className="min-w-0">
                  <h4 className="text-sm font-extrabold" style={{ color: "#333" }}>{c.title}</h4>
                  {c.isLink ? (
                    <a href={c.href} className="text-[13px] font-bold" style={{ color: "var(--pet-blue)" }}>{c.info}</a>
                  ) : (
                    <p className="text-[13px] truncate" style={{ color: "var(--pet-gray)" }}>{c.info}</p>
                  )}
                  {c.link && (
                    <a href={c.link.href} target="_blank" rel="noopener noreferrer" className="text-[12px] font-bold block" style={{ color: "var(--pet-orange)" }}>{c.link.text}</a>
                  )}
                </div>
              </div>
            ))}

            <div className="rounded-2xl overflow-hidden" style={{ border: "1px solid var(--pet-gray-border)" }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3943.5!2d-61.95!3d-10.88!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTDCsDUyJzQ4LjAiUyA2McKwNTcnMDAuMCJX!5e0!3m2!1spt-BR!2sbr!4v1"
                width="100%" height="180" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Localização"
              />
            </div>
          </div>

          <form onSubmit={handleSubmit} className="rounded-2xl p-6 sm:p-8 bg-white" style={{ border: "1px solid var(--pet-gray-border)", boxShadow: "0 4px 24px rgba(0,0,0,0.04)" }}>
            <h3 className="text-lg font-extrabold mb-5" style={{ fontFamily: "'Baloo 2', cursive", color: "var(--pet-blue-dark)" }}>
              🐾 Agendar serviço
            </h3>

            <div className="grid grid-cols-2 gap-3 mb-3">
              <div>
                <label className="block text-[12px] font-bold mb-1" style={{ color: "var(--pet-gray)" }}>Nome</label>
                <input className="w-full border rounded-xl px-3 py-2.5 text-sm outline-none transition-all focus:ring-2" style={{ borderColor: "var(--pet-gray-border)", color: "#333" }} placeholder="Seu nome" value={form.nome} onChange={(e) => setForm({ ...form, nome: e.target.value })} required />
              </div>
              <div>
                <label className="block text-[12px] font-bold mb-1" style={{ color: "var(--pet-gray)" }}>Telefone</label>
                <input className="w-full border rounded-xl px-3 py-2.5 text-sm outline-none transition-all focus:ring-2" style={{ borderColor: "var(--pet-gray-border)", color: "#333" }} placeholder="(69) 99999-0000" value={form.telefone} onChange={(e) => setForm({ ...form, telefone: e.target.value })} required />
              </div>
            </div>

            <div className="mb-3">
              <label className="block text-[12px] font-bold mb-1" style={{ color: "var(--pet-gray)" }}>Nome do pet</label>
              <input className="w-full border rounded-xl px-3 py-2.5 text-sm outline-none transition-all focus:ring-2" style={{ borderColor: "var(--pet-gray-border)", color: "#333" }} placeholder="Como chama o bichinho?" value={form.pet} onChange={(e) => setForm({ ...form, pet: e.target.value })} />
            </div>

            <div className="mb-5">
              <label className="block text-[12px] font-bold mb-1" style={{ color: "var(--pet-gray)" }}>Serviço</label>
              <select className="w-full border rounded-xl px-3 py-2.5 text-sm outline-none transition-all focus:ring-2 appearance-auto" style={{ borderColor: "var(--pet-gray-border)", color: "#333" }} value={form.servico} onChange={(e) => setForm({ ...form, servico: e.target.value })}>
                <option>Banho & Tosa</option>
                <option>Tosa Higiênica</option>
                <option>Rações & Petiscos</option>
                <option>Outro</option>
              </select>
            </div>

            <button
              type="submit"
              className="w-full rounded-xl py-3.5 text-sm font-extrabold text-white transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
              style={{ background: "var(--pet-orange)", boxShadow: "0 4px 14px rgba(245,133,31,0.35)" }}
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
