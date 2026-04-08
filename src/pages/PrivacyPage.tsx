import { Link } from "react-router-dom";
import Header from "@/components/petshop/Header";
import Footer from "@/components/petshop/Footer";
import { ArrowLeft, Shield } from "lucide-react";

const PrivacyPage = () => (
  <div className="min-h-screen bg-white">
    <Header />
    <div className="pt-14 md:pt-[92px]">
      {/* Hero */}
      <section className="py-8 sm:py-10 px-4" style={{ background: "var(--pet-navy)" }}>
        <div className="max-w-[800px] mx-auto">
          <Link to="/" className="inline-flex items-center gap-2 text-sm font-medium mb-4 text-white/70 hover:text-white transition-colors">
            <ArrowLeft className="w-4 h-4" /> Voltar ao início
          </Link>
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl flex items-center justify-center" style={{ background: "rgba(255,179,0,0.2)" }}>
              <Shield className="w-5 h-5" style={{ color: "#FFB300" }} />
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white" style={{ fontFamily: "'Baloo 2', cursive" }}>Política de Privacidade</h1>
          </div>
        </div>
      </section>

      <main className="max-w-[800px] mx-auto px-4 py-10 sm:py-14">
        <div className="space-y-6 text-sm leading-relaxed" style={{ color: "#666" }}>
          <p className="text-xs font-bold" style={{ color: "#999" }}>Última atualização: Abril de 2025</p>

          {[
            { t: "1. Informações que coletamos", c: "Coletamos apenas as informações fornecidas voluntariamente por você ao entrar em contato via WhatsApp ou formulário de contato, como: nome, telefone e informações sobre o seu pet." },
            { t: "2. Como usamos suas informações", c: "Utilizamos seus dados exclusivamente para agendar e prestar nossos serviços, entrar em contato sobre agendamentos, e enviar promoções (apenas com seu consentimento)." },
            { t: "3. Compartilhamento de dados", c: "Não vendemos, alugamos ou compartilhamos suas informações pessoais com terceiros, exceto quando exigido por lei." },
            { t: "4. Armazenamento e segurança", c: "Seus dados são armazenados de forma segura e mantidos apenas pelo tempo necessário para a prestação dos serviços." },
            { t: "5. Seus direitos", c: "Você pode solicitar acesso, correção ou exclusão dos seus dados a qualquer momento pelo WhatsApp: (69) 99221-6764." },
            { t: "6. Cookies", c: "Este site não utiliza cookies de rastreamento. Podemos utilizar cookies técnicos essenciais para o funcionamento do site." },
            { t: "7. Alterações", c: "Esta política pode ser atualizada periodicamente. Recomendamos que você revise esta página regularmente." },
          ].map(s => (
            <section key={s.t} className="rounded-[16px] p-5" style={{ background: "#F8FAFD", border: "1px solid #f0f0f0" }}>
              <h2 className="text-base font-extrabold mb-2" style={{ fontFamily: "'Baloo 2', cursive", color: "var(--pet-navy)" }}>{s.t}</h2>
              <p>{s.c}</p>
            </section>
          ))}
        </div>
      </main>
    </div>
    <Footer />
  </div>
);

export default PrivacyPage;
