import Header from "@/components/petshop/Header";
import Footer from "@/components/petshop/Footer";

const PrivacyPage = () => (
  <div className="min-h-screen bg-white">
    <Header />
    <main className="max-w-[800px] mx-auto px-4 py-32">
      <h1 className="text-3xl font-extrabold mb-8" style={{ fontFamily: "'Baloo 2', cursive", color: "#333" }}>
        Política de Privacidade
      </h1>

      <div className="space-y-6 text-sm leading-relaxed" style={{ color: "var(--pet-gray)" }}>
        <p><strong>Última atualização:</strong> Abril de 2025</p>

        <section>
          <h2 className="text-lg font-bold mb-2" style={{ color: "#333" }}>1. Informações que coletamos</h2>
          <p>Coletamos apenas as informações fornecidas voluntariamente por você ao entrar em contato via WhatsApp ou formulário de contato, como: nome, telefone e informações sobre o seu pet.</p>
        </section>

        <section>
          <h2 className="text-lg font-bold mb-2" style={{ color: "#333" }}>2. Como usamos suas informações</h2>
          <p>Utilizamos seus dados exclusivamente para:</p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>Agendar e prestar nossos serviços (banho, tosa, entrega de ração)</li>
            <li>Entrar em contato sobre agendamentos</li>
            <li>Enviar promoções e novidades (apenas com seu consentimento)</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-bold mb-2" style={{ color: "#333" }}>3. Compartilhamento de dados</h2>
          <p>Não vendemos, alugamos ou compartilhamos suas informações pessoais com terceiros, exceto quando exigido por lei.</p>
        </section>

        <section>
          <h2 className="text-lg font-bold mb-2" style={{ color: "#333" }}>4. Armazenamento e segurança</h2>
          <p>Seus dados são armazenados de forma segura e mantidos apenas pelo tempo necessário para a prestação dos serviços. Tomamos medidas razoáveis para proteger suas informações contra acesso não autorizado.</p>
        </section>

        <section>
          <h2 className="text-lg font-bold mb-2" style={{ color: "#333" }}>5. Seus direitos</h2>
          <p>Você pode solicitar a qualquer momento:</p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>Acesso aos seus dados pessoais</li>
            <li>Correção de informações incorretas</li>
            <li>Exclusão dos seus dados</li>
          </ul>
          <p className="mt-2">Para exercer seus direitos, entre em contato pelo WhatsApp: (69) 99221-6764.</p>
        </section>

        <section>
          <h2 className="text-lg font-bold mb-2" style={{ color: "#333" }}>6. Cookies</h2>
          <p>Este site não utiliza cookies de rastreamento. Podemos utilizar cookies técnicos essenciais para o funcionamento do site.</p>
        </section>

        <section>
          <h2 className="text-lg font-bold mb-2" style={{ color: "#333" }}>7. Alterações</h2>
          <p>Esta política pode ser atualizada periodicamente. Recomendamos que você revise esta página regularmente.</p>
        </section>
      </div>

      <div className="mt-10">
        <a href="/" className="text-sm font-bold hover:underline" style={{ color: "var(--pet-green)" }}>← Voltar ao início</a>
      </div>
    </main>
    <Footer />
  </div>
);

export default PrivacyPage;
