import { Link } from "react-router-dom";
import Header from "@/components/petshop/Header";
import Footer from "@/components/petshop/Footer";
import { ArrowLeft, FileText } from "lucide-react";

const TermsPage = () => (
  <div className="min-h-screen bg-white">
    <Header />
    <div className="pt-14 md:pt-[92px]">
      {/* Hero */}
      <section className="py-8 sm:py-10 px-4" style={{ background: "linear-gradient(135deg, #0D47A1 0%, #1565C0 100%)" }}>
        <div className="max-w-[800px] mx-auto">
          <Link to="/" className="inline-flex items-center gap-2 text-sm font-medium mb-4 text-white/70 hover:text-white transition-colors">
            <ArrowLeft className="w-4 h-4" /> Voltar ao início
          </Link>
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl flex items-center justify-center" style={{ background: "rgba(255,179,0,0.2)" }}>
              <FileText className="w-5 h-5" style={{ color: "#FFB300" }} />
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white" style={{ fontFamily: "'Baloo 2', cursive" }}>Termos de Uso</h1>
          </div>
        </div>
      </section>

      <main className="max-w-[800px] mx-auto px-4 py-10 sm:py-14">
        <div className="space-y-6 text-sm leading-relaxed" style={{ color: "#666" }}>
          <p className="text-xs font-bold" style={{ color: "#999" }}>Última atualização: Abril de 2025</p>

          {[
            { t: "1. Aceitação dos termos", c: "Ao acessar e utilizar este site, você concorda com estes Termos de Uso. Se não concordar, por favor não utilize o site." },
            { t: "2. Serviços", c: "Este site apresenta os serviços do nosso pet shop, incluindo banho, tosa, venda de rações e entrega em domicílio. Agendamentos via WhatsApp, sujeitos à disponibilidade." },
            { t: "3. Preços", c: "Os preços exibidos são valores de referência ('a partir de') e podem variar conforme porte, raça e condição do animal." },
            { t: "4. Agendamento e cancelamento", c: "Agendamentos devem ser feitos com antecedência pelo WhatsApp. Cancelamentos com pelo menos 2 horas de antecedência." },
            { t: "5. Responsabilidades", c: "O tutor é responsável por informar condições de saúde, alergias e comportamento do animal antes do atendimento." },
            { t: "6. Promoções", c: "Promoções têm prazo de validade e condições específicas. O pet shop pode alterar ou encerrar promoções a qualquer momento." },
            { t: "7. Propriedade intelectual", c: "Todo o conteúdo deste site é de propriedade do Demonstração e não pode ser reproduzido sem autorização prévia." },
            { t: "8. Contato", c: "Para dúvidas sobre estes termos, entre em contato pelo WhatsApp: (69) 99221-6764." },
          ].map(s => (
            <section key={s.t} className="rounded-[16px] p-5" style={{ background: "#F8FAFD", border: "1px solid #f0f0f0" }}>
              <h2 className="text-base font-extrabold mb-2" style={{ fontFamily: "'Baloo 2', cursive", color: "#1a3a5c" }}>{s.t}</h2>
              <p>{s.c}</p>
            </section>
          ))}
        </div>
      </main>
    </div>
    <Footer />
  </div>
);

export default TermsPage;
