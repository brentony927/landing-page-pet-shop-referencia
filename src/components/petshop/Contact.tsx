import { useState } from "react";
import { Clock, Phone, MapPin } from "lucide-react";

const Contact = () => {
  const [form, setForm] = useState({ nome: "", telefone: "", pet: "", servico: "Banho & Tosa" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Olá! Gostaria de agendar:\n\nNome: ${form.nome}\nTelefone: ${form.telefone}\nPet: ${form.pet}\nServiço: ${form.servico}`;
    window.open(`https://wa.me/5569992216764?text=${encodeURIComponent(msg)}`, "_blank");
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    border: "1px solid #e7e5e4",
    borderRadius: 6,
    padding: "12px 14px",
    fontFamily: "'DM Sans', sans-serif",
    fontSize: 14,
    color: "#1c1917",
    background: "#fff",
    transition: "0.2s",
    outline: "none",
  };

  return (
    <section id="contato" className="py-16 md:py-20 px-4 bg-white">
      <div className="max-w-[1100px] mx-auto">
        <h2 className="text-2xl md:text-[2.2rem] font-black mb-10" style={{ fontFamily: "'Fraunces', Georgia, serif", color: "#1c1917" }}>
          Fale com a gente
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-start">
          <div>
            <div className="space-y-3">
              {[
                { icon: Clock, title: "Horário", info: "Seg–Sex: 8h às 19h · Sábado: 8h às 16h" },
                { icon: Phone, title: "WhatsApp", info: "(69) 99221-6764", href: "https://wa.me/5569992216764", isLink: true },
                { icon: MapPin, title: "Localização", info: "Nos chame no WhatsApp para o endereço", link: { text: "Pedir localização →", href: "https://wa.me/5569992216764" } },
              ].map((c) => (
                <div
                  key={c.title}
                  className="flex items-center gap-4 rounded-lg p-[18px] transition-all duration-200"
                  style={{ border: "1px solid #e7e5e4" }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = "#fafaf9"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; }}
                >
                  <c.icon className="w-5 h-5 flex-shrink-0" style={{ color: "#16a34a" }} />
                  <div>
                    <h4 className="text-sm font-semibold" style={{ color: "#1c1917" }}>{c.title}</h4>
                    {c.isLink ? (
                      <a href={c.href} className="text-[13px] font-bold" style={{ color: "#16a34a" }}>{c.info}</a>
                    ) : (
                      <p className="text-[13px]" style={{ color: "#78716c" }}>{c.info}</p>
                    )}
                    {c.link && (
                      <a href={c.link.href} className="text-[13px] font-semibold block" style={{ color: "#16a34a" }}>{c.link.text}</a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="rounded-2xl p-8 md:p-9 bg-white"
            style={{ border: "1px solid #e7e5e4", boxShadow: "0 4px 24px rgba(0,0,0,0.06)" }}
          >
            <h3 className="text-xl font-bold mb-6" style={{ fontFamily: "'Fraunces', Georgia, serif", color: "#1c1917" }}>
              Agendar serviço
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
              <div>
                <label className="block text-[13px] font-semibold mb-1.5" style={{ color: "#78716c" }}>Nome</label>
                <input
                  style={inputStyle}
                  placeholder="Seu nome"
                  value={form.nome}
                  onChange={(e) => setForm({ ...form, nome: e.target.value })}
                  onFocus={(e) => { e.target.style.borderColor = "#16a34a"; e.target.style.boxShadow = "0 0 0 3px rgba(22,163,74,0.15)"; }}
                  onBlur={(e) => { e.target.style.borderColor = "#e7e5e4"; e.target.style.boxShadow = "none"; }}
                  required
                />
              </div>
              <div>
                <label className="block text-[13px] font-semibold mb-1.5" style={{ color: "#78716c" }}>Telefone</label>
                <input
                  style={inputStyle}
                  placeholder="(69) 99999-0000"
                  value={form.telefone}
                  onChange={(e) => setForm({ ...form, telefone: e.target.value })}
                  onFocus={(e) => { e.target.style.borderColor = "#16a34a"; e.target.style.boxShadow = "0 0 0 3px rgba(22,163,74,0.15)"; }}
                  onBlur={(e) => { e.target.style.borderColor = "#e7e5e4"; e.target.style.boxShadow = "none"; }}
                  required
                />
              </div>
            </div>

            <div className="mb-3">
              <label className="block text-[13px] font-semibold mb-1.5" style={{ color: "#78716c" }}>Nome do pet</label>
              <input
                style={inputStyle}
                placeholder="Como chama o bichinho?"
                value={form.pet}
                onChange={(e) => setForm({ ...form, pet: e.target.value })}
                onFocus={(e) => { e.target.style.borderColor = "#16a34a"; e.target.style.boxShadow = "0 0 0 3px rgba(22,163,74,0.15)"; }}
                onBlur={(e) => { e.target.style.borderColor = "#e7e5e4"; e.target.style.boxShadow = "none"; }}
              />
            </div>

            <div className="mb-4">
              <label className="block text-[13px] font-semibold mb-1.5" style={{ color: "#78716c" }}>Serviço</label>
              <select
                style={{ ...inputStyle, appearance: "auto" as React.CSSProperties["appearance"] }}
                value={form.servico}
                onChange={(e) => setForm({ ...form, servico: e.target.value })}
                onFocus={(e) => { e.target.style.borderColor = "#16a34a"; e.target.style.boxShadow = "0 0 0 3px rgba(22,163,74,0.15)"; }}
                onBlur={(e) => { e.target.style.borderColor = "#e7e5e4"; e.target.style.boxShadow = "none"; }}
              >
                <option>Banho & Tosa</option>
                <option>Tosa Higiênica</option>
                <option>Rações & Petiscos</option>
                <option>Outro</option>
              </select>
            </div>

            <button
              type="submit"
              className="w-full rounded-md py-3.5 text-base font-bold text-white tracking-wide transition-all duration-200 hover:-translate-y-0.5 mt-2"
              style={{ background: "#f97316" }}
              onMouseEnter={(e) => { e.currentTarget.style.background = "#c2410c"; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = "#f97316"; }}
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
