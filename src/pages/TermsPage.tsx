import Header from "@/components/petshop/Header";
import Footer from "@/components/petshop/Footer";

const TermsPage = () => (
  <div className="min-h-screen bg-white">
    <Header />
    <main className="max-w-[800px] mx-auto px-4 py-32">
      <h1 className="text-3xl font-extrabold mb-8" style={{ fontFamily: "'Baloo 2', cursive", color: "#333" }}>
        Termos de Uso
      </h1>

      <div className="space-y-6 text-sm leading-relaxed" style={{ color: "var(--pet-gray)" }}>
        <p><strong>Última atualização:</strong> Abril de 2025</p>

        <section>
          <h2 className="text-lg font-bold mb-2" style={{ color: "#333" }}>1. Aceitação dos termos</h2>
          <p>Ao acessar e utilizar este site, você concorda com estes Termos de Uso. Se não concordar com algum dos termos, por favor, não utilize o site.</p>
        </section>

        <section>
          <h2 className="text-lg font-bold mb-2" style={{ color: "#333" }}>2. Serviços</h2>
          <p>Este site apresenta os serviços oferecidos pelo nosso pet shop, incluindo banho, tosa, venda de rações e entrega em domicílio. Os agendamentos são realizados via WhatsApp e estão sujeitos à disponibilidade.</p>
        </section>

        <section>
          <h2 className="text-lg font-bold mb-2" style={{ color: "#333" }}>3. Preços</h2>
          <p>Os preços exibidos no site são valores de referência ("a partir de") e podem variar conforme o porte, raça e condição do animal. O valor final será informado no momento do agendamento.</p>
        </section>

        <section>
          <h2 className="text-lg font-bold mb-2" style={{ color: "#333" }}>4. Agendamento e cancelamento</h2>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>Os agendamentos devem ser feitos com antecedência pelo WhatsApp</li>
            <li>Cancelamentos devem ser comunicados com pelo menos 2 horas de antecedência</li>
            <li>O pet shop reserva o direito de recusar atendimento caso o animal apresente comportamento agressivo ou problemas de saúde não informados previamente</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-bold mb-2" style={{ color: "#333" }}>5. Responsabilidades</h2>
          <p>O tutor é responsável por informar sobre condições de saúde, alergias e comportamento do animal antes do atendimento. Nosso pet shop toma todas as precauções necessárias para garantir o bem-estar do animal durante os serviços.</p>
        </section>

        <section>
          <h2 className="text-lg font-bold mb-2" style={{ color: "#333" }}>6. Promoções</h2>
          <p>As promoções divulgadas no site têm prazo de validade e condições específicas informadas no momento da divulgação. O pet shop pode alterar ou encerrar promoções a qualquer momento.</p>
        </section>

        <section>
          <h2 className="text-lg font-bold mb-2" style={{ color: "#333" }}>7. Propriedade intelectual</h2>
          <p>Todo o conteúdo deste site (textos, imagens, logotipo) é de propriedade do Demonstração e não pode ser reproduzido sem autorização prévia.</p>
        </section>

        <section>
          <h2 className="text-lg font-bold mb-2" style={{ color: "#333" }}>8. Contato</h2>
          <p>Para dúvidas sobre estes termos, entre em contato pelo WhatsApp: (69) 99221-6764.</p>
        </section>
      </div>

      <div className="mt-10">
        <a href="/" className="text-sm font-bold hover:underline" style={{ color: "var(--pet-green)" }}>← Voltar ao início</a>
      </div>
    </main>
    <Footer />
  </div>
);

export default TermsPage;
