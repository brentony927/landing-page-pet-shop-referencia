import { Bath, Scissors, Bone, Truck, Star } from "lucide-react";

const services = [
  {
    icon: Bath,
    title: "Banho & Tosa",
    desc: "Banho completo com produtos profissionais, secagem e acabamento pra todas as raças.",
    price: "Consulte",
    badge: "Mais pedido",
    badgeIcon: Star,
  },
  {
    icon: Scissors,
    title: "Tosa Higiênica",
    desc: "Higienização das áreas sensíveis com cuidado e segurança. Recomendado mensalmente.",
    price: "Consulte",
  },
  {
    icon: Bone,
    title: "Rações & Petiscos",
    desc: "Linha completa de rações de qualidade. Entrega no bairro no mesmo dia, sem valor mínimo.",
    price: "Consulte estoque",
    badge: "Entrega rápida",
    badgeIcon: Truck,
  },
];

const Services = () => {
  return (
    <section id="servicos" className="py-16 md:py-20 px-4 bg-white">
      <div className="max-w-[1100px] mx-auto">
        <p className="text-xs uppercase tracking-widest font-medium mb-3" style={{ color: "var(--verde)" }}>
          O que a gente faz
        </p>
        <h2 className="text-2xl md:text-[2.6rem] font-black mb-2 max-w-[500px] leading-tight" style={{ fontFamily: "'Fraunces', Georgia, serif", color: "var(--txt)" }}>
          Serviços que o seu pet merece
        </h2>
        <p className="text-base mb-12" style={{ color: "var(--txt2)" }}>
          Atendimento personalizado. Sem pressa, sem franquia.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.title}
                className="group relative rounded-xl p-7 bg-white overflow-hidden cursor-pointer transition-all duration-250 hover:-translate-y-1"
                style={{ border: "1px solid var(--borda)" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "var(--verde)";
                  e.currentTarget.style.boxShadow = "0 12px 32px rgba(22,163,74,0.12)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "var(--borda)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <div
                  className="absolute bottom-0 left-0 right-0 h-[3px] transition-transform duration-250 origin-left scale-x-0 group-hover:scale-x-100"
                  style={{ background: "var(--laranja)" }}
                />

                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ background: "var(--verde-bg)" }}>
                  <Icon className="w-6 h-6" style={{ color: "var(--verde)" }} />
                </div>

                {s.badge && (
                  <span
                    className="inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-bold mb-3"
                    style={{ background: "var(--amarelo)", border: "1px solid var(--amarelo-borda)", color: "var(--amarelo-texto)" }}
                  >
                    {s.badgeIcon && <s.badgeIcon className="w-3 h-3" />}
                    {s.badge}
                  </span>
                )}

                <h3 className="text-xl font-bold mb-2" style={{ fontFamily: "'Fraunces', Georgia, serif", color: "var(--txt)" }}>
                  {s.title}
                </h3>
                <p className="text-sm leading-relaxed mb-5" style={{ color: "var(--txt2)" }}>{s.desc}</p>

                <div className="pt-4" style={{ borderTop: "1px solid var(--borda)" }}>
                  <span className="font-bold" style={{ color: "var(--verde)" }}>{s.price}</span>
                </div>

                <a
                  href="https://wa.me/5569992216764"
                  className="mt-3 inline-block rounded-md px-4 py-2 text-sm font-bold text-white opacity-0 translate-y-2 transition-all duration-200 group-hover:opacity-100 group-hover:translate-y-0"
                  style={{ background: "var(--laranja)" }}
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
