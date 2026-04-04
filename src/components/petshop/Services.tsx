import { Bath, Scissors, Bone, Truck, Star } from "lucide-react";

const services = [
  {
    icon: Bath,
    title: "Banho & Tosa",
    desc: "Banho completo com produtos profissionais, secagem e acabamento pra todas as raças.",
    price: "Consulte",
    badge: "Mais pedido",
    badgeIcon: Star,
    featured: true,
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
    badge: "Entrega rápida",
    badgeIcon: Truck,
  },
];

const Services = () => {
  return (
    <section id="servicos" className="py-16 md:py-20 px-4 bg-white">
      <div className="max-w-[1100px] mx-auto">
        <h2 className="text-2xl md:text-[2.4rem] font-black mb-10 leading-tight" style={{ fontFamily: "'Fraunces', Georgia, serif", color: "#1c1917" }}>
          Banho, tosa e ração
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {services.map((s, idx) => {
            const Icon = s.icon;
            return (
              <div
                key={s.title}
                className="group relative rounded-xl p-7 bg-white overflow-hidden cursor-pointer transition-all duration-250"
                style={{ border: "1px solid #e7e5e4" }}
                onMouseEnter={(e) => {
                  if (idx === 0) {
                    e.currentTarget.style.background = "#f0fdf4";
                  } else {
                    e.currentTarget.style.boxShadow = "0 8px 24px rgba(0,0,0,0.06)";
                  }
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "#fff";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <Icon className="w-6 h-6 mb-4" style={{ color: "#16a34a" }} />

                {s.badge && (
                  <span
                    className="inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-bold mb-3"
                    style={{ background: "#fef9c3", border: "1px solid #fde047", color: "#713f12" }}
                  >
                    {s.badgeIcon && <s.badgeIcon className="w-3 h-3" />}
                    {s.badge}
                  </span>
                )}

                <h3 className="text-xl font-bold mb-2" style={{ fontFamily: "'Fraunces', Georgia, serif", color: "#1c1917" }}>
                  {s.title}
                </h3>
                <p className="text-sm leading-relaxed mb-5" style={{ color: "#78716c" }}>{s.desc}</p>

                <div className="pt-4" style={{ borderTop: "1px solid #e7e5e4" }}>
                  <span className="font-bold" style={{ color: "#16a34a" }}>{s.price}</span>
                </div>

                <a
                  href="https://wa.me/5569992216764"
                  className="mt-3 inline-block rounded-md px-4 py-2 text-sm font-bold text-white transition-all duration-200"
                  style={{ background: "#f97316" }}
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
