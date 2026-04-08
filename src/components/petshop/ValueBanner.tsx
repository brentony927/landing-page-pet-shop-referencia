import { Heart, ShieldCheck, Sparkles } from "lucide-react";

const ValueBanner = () => {
  return (
    <section className="relative overflow-hidden py-10 sm:py-14" style={{ background: "var(--pet-navy)" }}>
      {/* Decorative paw prints */}
      <div className="absolute inset-0 opacity-[0.04]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60' viewBox='0 0 24 24' fill='white'%3E%3Cpath d='M12 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-4.5-2c-.83 0-1.5.67-1.5 1.5S6.67 11 7.5 11 9 10.33 9 9.5 8.33 8 7.5 8zm9 0c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5S17.33 8 16.5 8zm-9 6c-.83 0-1.5.67-1.5 1.5S6.67 17 7.5 17 9 16.33 9 15.5 8.33 14 7.5 14zm9 0c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5z'/%3E%3C/svg%3E")`,
        backgroundSize: "60px 60px",
      }} />

      <div className="relative max-w-5xl mx-auto px-5 text-center">
        {/* Main phrase */}
        <div className="mb-5">
          <span
            className="block text-[13px] sm:text-sm font-bold tracking-[0.2em] uppercase mb-3"
            style={{ color: "var(--pet-action)", fontFamily: "'Nunito', sans-serif" }}
          >
            Nossa filosofia
          </span>
          <h2
            className="text-[32px] sm:text-4xl md:text-5xl lg:text-[56px] font-extrabold text-white leading-[1.05]"
            style={{ fontFamily: "'Fredoka', cursive" }}
          >
            Não é preço,{" "}
            <span className="relative inline-block">
              é <span style={{ color: "var(--pet-action)" }}>valor</span>
              <svg className="absolute -bottom-1.5 left-0 w-full" viewBox="0 0 120 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 6C30 2 90 2 118 6" stroke="var(--pet-action)" strokeWidth="3" strokeLinecap="round" opacity="0.5" />
              </svg>
            </span>
          </h2>
          <p className="mt-4 text-white/60 text-sm sm:text-base max-w-lg mx-auto leading-relaxed" style={{ fontFamily: "'Nunito', sans-serif" }}>
            Cada banho, cada ração, cada consulta — feitos com o cuidado que seu pet merece de verdade.
          </p>
        </div>

        {/* 3 pillars */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 mt-6">
          {[
            { icon: Heart, text: "Amor em cada detalhe" },
            { icon: ShieldCheck, text: "12 anos de confiança" },
            { icon: Sparkles, text: "Produtos selecionados a dedo" },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-2.5 text-white/80">
              <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: "rgba(255,255,255,0.08)" }}>
                <item.icon className="w-4 h-4" style={{ color: "var(--pet-action)" }} />
              </div>
              <span className="text-[13px] sm:text-sm font-bold" style={{ fontFamily: "'Nunito', sans-serif" }}>
                {item.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueBanner;
