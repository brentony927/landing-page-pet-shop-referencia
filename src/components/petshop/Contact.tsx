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
    <section id="contato" className="py-16 md:py-20 px-4 bg-white" ref={ref}>
      <div className={`max-w-[1100px] mx-auto transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <h2 className="text-2xl md:text-[2rem] font-black mb-10" style={{ fontFamily: "'Fraunces', Georgia, serif", color: "#1c1917" }}>
          Fale com a gente
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-start">
          <div className="space-y-3">
            {[
              { icon: Clock, title: "Horário", info: "Seg–Sex: 8h às 19h · Sábado: 8h às 16h" },
              { icon: Phone, title: "WhatsApp", info: "(69) 99221-6764", href: "https://wa.me/5569992216764", isLink: true },
              { icon: MapPin, title: "Localização", info: "Nos chame no WhatsApp para o endereço", link: { text: "Pedir localização →", href: "https://wa.me/5569992216764" } },
            ].map((c) => (
              <div
                key={c.title}
                className="flex items-center gap-4 rounded-xl p-4 transition-all duration-200 hover:bg-stone-50"
                style={{ border: "1px solid #e7e5e4" }}
              >
                <div className="w-9 h-9 rounded-lg flex items-center justify-center bg-stone-100">
                  <c.icon className="w-4 h-4" style={{ color: "#78716c" }} />
                </div>
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

          <form
            onSubmit={handleSubmit}
            className="rounded-2xl p-8 bg-white"
            style={{ border: "1px solid #e7e5e4", boxShadow: "0 4px 24px rgba(0,0,0,0.04)" }}
          >
            <h3 className="text-lg font-bold mb-6" style={{ fontFamily: "'Fraunces', Georgia, serif", color: "#1c1917" }}>
              Agendar serviço
            </h3>

            {[
              { label: "Nome", placeholder: "Seu nome", key: "nome", half: true },
              { label: "Telefone", placeholder: "(69) 99999-0000", key: "telefone", half: true },
              { label: "Nome do pet", placeholder: "Como chama o bichinho?", key: "pet" },
            ].map((field) => (
              <div key={field.key} className={`mb-3 ${field.half ? "inline-block w-[calc(50%-6px)] mr-3 align-top" : "block"}`}>
                <label className="block text-[13px] font-semibold mb-1.5" style={{ color: "#78716c" }}>{field.label}</label>
                <input
                  className="w-full border border-stone-200 rounded-lg px-3.5 py-2.5 text-sm outline-none transition-all duration-200 focus:border-[#16a34a] focus:ring-2 focus:ring-[#16a34a]/10"
                  style={{ fontFamily: "'DM Sans', sans-serif", color: "#1c1917" }}
                  placeholder={field.placeholder}
                  value={form[field.key as keyof typeof form]}
                  onChange={(e) => setForm({ ...form, [field.key]: e.target.value })}
                  required={field.key !== "pet"}
                />
              </div>
            ))}

            <div className="mb-4">
              <label className="block text-[13px] font-semibold mb-1.5" style={{ color: "#78716c" }}>Serviço</label>
              <select
                className="w-full border border-stone-200 rounded-lg px-3.5 py-2.5 text-sm outline-none transition-all duration-200 focus:border-[#16a34a] focus:ring-2 focus:ring-[#16a34a]/10 appearance-auto"
                style={{ fontFamily: "'DM Sans', sans-serif", color: "#1c1917" }}
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
              style={{ background: "#f97316" }}
              onMouseEnter={(e) => e.currentTarget.style.background = "#c2410c"}
              onMouseLeave={(e) => e.currentTarget.style.background = "#f97316"}
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
