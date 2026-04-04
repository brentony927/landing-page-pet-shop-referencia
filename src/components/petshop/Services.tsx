import { Bath, Scissors, Bone, Truck, Star } from "lucide-react";

const services = [
  {
    icon: Bath,
    title: "Banho & Tosa",
    desc: "Banho completo com produtos profissionais, secagem e acabamento pra todas as raças.",
    price: "Consulte",
    highlight: true,
  },
  {
    icon: Scissors,
    title: "Tosa Higiênica",
    desc: "Higienização das áreas sensíveis com cuidado e segurança.",
    price: "Consulte",
  },
  {
    icon: Bone,
    title: "Rações & Petiscos",
    desc: "Linha completa de rações de qualidade. Entrega no bairro no mesmo dia.",
    price: "Consulte",
  },
];

const Services = () => {
  return (
    <section id="servicos" className="py-16 md:py-20 px-4 bg-white">
      <div className="max-w-[1100px] mx-auto">
        <div className="flex items-end justify-between mb-10">
          <h2 className="text-2xl md:text-[2rem] font-black leading-tight" style={{ fontFamily: "'Fraunces', Georgia, serif", color: "#1c1917" }}>
            Banho, tosa e ração
          </h2>
          <a href="https://wa.me/5569992216764" className="hidden md:block text-sm font-semibold hover:underline" style={{ color: "#16a34a" }}>
            Agendar pelo WhatsApp →
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {services.map((s, idx) => {
            const Icon = s.icon;
            return (
              <div
                key={s.title}
                className="group relative rounded-2xl p-7 bg-white overflow-hidden cursor-pointer transition-all duration-300"
                style={{ border: `1.5px solid ${s.highlight ? "#16a34a" : "#e7e5e4"}` }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-3px)";
                  e.currentTarget.style.boxShadow = "0 12px 32px rgba(0,0,0,0.08)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "none";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                {s.highlight && (
                  <span className="absolute top-0 right-6 bg-[#16a34a] text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-b-md">
                    Mais pedido
                  </span>
                )}

                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-5" style={{ background: idx === 0 ? "#f0fdf4" : "#f5f5f4" }}>
                  <Icon className="w-5 h-5" style={{ color: idx === 0 ? "#16a34a" : "#78716c" }} />
                </div>

                <h3 className="text-xl font-bold mb-2" style={{ fontFamily: "'Fraunces', Georgia, serif", color: "#1c1917" }}>
                  {s.title}
                </h3>
                <p className="text-sm leading-relaxed mb-6" style={{ color: "#78716c" }}>{s.desc}</p>

                <a
                  href="https://wa.me/5569992216764"
                  className="inline-block rounded-lg px-5 py-2.5 text-sm font-bold text-white transition-all duration-200"
                  style={{ background: "#f97316" }}
                  onMouseEnter={(e) => e.currentTarget.style.background = "#c2410c"}
                  onMouseLeave={(e) => e.currentTarget.style.background = "#f97316"}
                >
                  Agendar →
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
