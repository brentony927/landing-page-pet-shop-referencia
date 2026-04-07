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
    <section id="contato" className="py-16 md:py-20 px-4" style={{ background: "#f2ede6" }} ref={ref}>
      <div className={`max-w-[1100px] mx-auto transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <h2 className="text-2xl md:text-[2rem] font-black mb-10" style={{ fontFamily: "'Playfair Display', Georgia, serif", color: "#1a1a1a" }}>
          Fale com a gente
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-start">
          <div className="space-y-3">
            {[
              { icon: Clock, title: "Horário", info: "Seg–Sex: 8h às 19h · Sábado: 8h às 16h" },
              { icon: Phone, title: "WhatsApp", info: "(69) 99221-6764", href: "https://wa.me/5569992216764", isLink: true },
              { icon: MapPin, title: "Localização", info: "Av. Marechal Rondon, Nº 1200 — Centro, Ji-Paraná/RO", link: { text: "Ver no Google Maps →", href: "https://maps.google.com/?q=Pet+Shop+Amazonia+Ji-Parana+RO" } },
            ].map((c) => (
              <div
                key={c.title}
                className="flex items-center gap-4 rounded-xl p-4 transition-all duration-200 hover:bg-white/50"
                style={{ border: "1px solid #e2ddd6" }}
              >
                <div className="w-9 h-9 rounded-lg flex items-center justify-center" style={{ background: "#d8f3dc" }}>
                  <c.icon className="w-4 h-4" style={{ color: "#1b4332" }} />
                </div>
                <div>
                  <h4 className="text-sm font-semibold" style={{ color: "#1a1a1a" }}>{c.title}</h4>
                  {c.isLink ? (
                    <a href={c.href} className="text-[13px] font-bold" style={{ color: "#1b4332" }}>{c.info}</a>
                  ) : (
                    <p className="text-[13px]" style={{ color: "#6b6b6b" }}>{c.info}</p>
                  )}
                  {c.link && (
                    <a href={c.link.href} target="_blank" rel="noopener noreferrer" className="text-[13px] font-semibold block" style={{ color: "#1b4332" }}>{c.link.text}</a>
                  )}
                </div>
              </div>
            ))}

            <div className="rounded-xl overflow-hidden mt-4" style={{ border: "1px solid #e2ddd6" }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3943.5!2d-61.95!3d-10.88!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTDCsDUyJzQ4LjAiUyA2McKwNTcnMDAuMCJX!5e0!3m2!1spt-BR!2sbr!4v1"
                width="100%"
                height="200"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização Pet Shop Amazônia"
              />
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="rounded-2xl p-8 bg-white"
            style={{ border: "1px solid #e2ddd6", boxShadow: "0 4px 24px rgba(0,0,0,0.04)" }}
          >
            <h3 className="text-lg font-bold mb-6" style={{ fontFamily: "'Playfair Display', Georgia, serif", color: "#1a1a1a" }}>
              Agendar serviço
            </h3>

            {[
              { label: "Nome", placeholder: "Seu nome", key: "nome", half: true },
              { label: "Telefone", placeholder: "(69) 99999-0000", key: "telefone", half: true },
              { label: "Nome do pet", placeholder: "Como chama o bichinho?", key: "pet" },
            ].map((field) => (
              <div key={field.key} className={`mb-3 ${field.half ? "inline-block w-[calc(50%-6px)] mr-3 align-top" : "block"}`}>
                <label className="block text-[13px] font-semibold mb-1.5" style={{ color: "#6b6b6b" }}>{field.label}</label>
                <input
                  className="w-full border rounded-lg px-3.5 py-2.5 text-sm outline-none transition-all duration-200 focus:border-[#1b4332] focus:ring-2 focus:ring-[#1b4332]/10"
                  style={{ fontFamily: "'DM Sans', sans-serif", color: "#1a1a1a", borderColor: "#e2ddd6" }}
                  placeholder={field.placeholder}
                  value={form[field.key as keyof typeof form]}
                  onChange={(e) => setForm({ ...form, [field.key]: e.target.value })}
                  required={field.key !== "pet"}
                />
              </div>
            ))}

            <div className="mb-4">
              <label className="block text-[13px] font-semibold mb-1.5" style={{ color: "#6b6b6b" }}>Serviço</label>
              <select
                className="w-full border rounded-lg px-3.5 py-2.5 text-sm outline-none transition-all duration-200 focus:border-[#1b4332] focus:ring-2 focus:ring-[#1b4332]/10 appearance-auto"
                style={{ fontFamily: "'DM Sans', sans-serif", color: "#1a1a1a", borderColor: "#e2ddd6" }}
                value={form.servico}
                onChange={(e) => setForm({ ...form, servico: e.target.value })}
              >
                <option>Banho & Tosa</option>
                <option>Tosa Higiênica</option>
                <option>Rações & Petiscos</option>
                <option>Outro</option>
              </select>
            </div>

            <button
              type="submit"
              className="w-full rounded-lg py-3 text-sm font-bold text-white transition-all duration-200 hover:-translate-y-0.5"
              style={{ background: "#e07b39" }}
              onMouseEnter={(e) => e.currentTarget.style.background = "#b85c20"}
              onMouseLeave={(e) => e.currentTarget.style.background = "#e07b39"}
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
