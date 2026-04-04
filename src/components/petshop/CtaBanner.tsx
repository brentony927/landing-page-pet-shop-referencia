const CtaBanner = () => {
  return (
    <section className="py-16 md:py-20 px-4 text-center text-white" style={{ background: "var(--verde-escuro)" }}>
      <div className="max-w-[800px] mx-auto">
        <span
          className="inline-block rounded-full px-4 py-2 text-sm font-semibold mb-4"
          style={{ background: "rgba(255,255,255,0.15)", border: "1px solid rgba(255,255,255,0.2)" }}
        >
          🎁 Para clientes do bairro
        </span>

        <h2
          className="text-2xl md:text-[2.8rem] font-black mb-4 leading-tight"
          style={{ fontFamily: "'Fraunces', Georgia, serif" }}
        >
          Agende hoje e ganhe 10% off no próximo serviço.
        </h2>

        <p className="text-base md:text-lg leading-relaxed mb-8" style={{ color: "rgba(255,255,255,0.75)" }}>
          Clientes que agendam pelo WhatsApp ou pelo formulário recebem desconto especial na próxima visita. É nossa forma de agradecer a confiança.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="https://wa.me/5569992216764"
            className="rounded-md px-8 py-4 font-bold text-lg text-white transition-all duration-200 hover:-translate-y-0.5"
            style={{ background: "var(--laranja)" }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "var(--laranja-escuro)";
              e.currentTarget.style.boxShadow = "0 8px 24px rgba(249,115,22,0.3)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "var(--laranja)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            📅 AGENDAR AGORA
          </a>
          <a
            href="https://wa.me/5569992216764"
            className="rounded-md px-8 py-4 font-semibold text-white transition-all duration-200"
            style={{ border: "2px solid rgba(255,255,255,0.5)" }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "#fff";
              e.currentTarget.style.background = "rgba(255,255,255,0.1)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.5)";
              e.currentTarget.style.background = "transparent";
            }}
          >
            💬 Falar pelo WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default CtaBanner;
