import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Política de Privacidade — Hu.Co",
  description: "Como a Hu.Co trata seus dados pessoais. Com palavras que você consegue entender.",
};

export default function PrivacidadePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-1 pt-20">
        <section className="py-16 lg:py-24">
          <div className="max-w-3xl mx-auto px-6 lg:px-12">
            <p className="text-[#1e3a5f] font-medium mb-4">Legal</p>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              Política de Privacidade
            </h1>
            <p className="text-gray-500 mb-12">Última atualização: Janeiro de 2024</p>

            <div className="prose prose-lg max-w-none">
              <p className="lead text-xl text-gray-600 mb-8">
                Esta política explica como tratamos seus dados. Tentamos usar palavras 
                que pessoas normais conseguem entender.
              </p>

              <h2 className="text-2xl font-bold mt-12 mb-4">1. Quem somos</h2>
              <p className="text-gray-600 mb-6">
                Somos a Hu.Co Human Company Ltda., CNPJ 12.345.678/0001-90, com sede na 
                Av. Paulista, 1000, São Paulo - SP. Somos os responsáveis pelo tratamento 
                dos seus dados pessoais.
              </p>

              <h2 className="text-2xl font-bold mt-12 mb-4">2. Que dados coletamos</h2>
              <p className="text-gray-600 mb-4">Coletamos dados quando você:</p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-6">
                <li><strong>Se candidata a uma vaga:</strong> nome, e-mail, telefone, currículo, histórico profissional, formação</li>
                <li><strong>Cria uma conta:</strong> nome, e-mail, senha (criptografada)</li>
                <li><strong>Entra em contato:</strong> nome, e-mail, mensagem</li>
                <li><strong>Navega no site:</strong> cookies, endereço IP, páginas visitadas</li>
              </ul>

              <h2 className="text-2xl font-bold mt-12 mb-4">3. Para que usamos seus dados</h2>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-6">
                <li>Analisar sua candidatura (se você se candidatou)</li>
                <li>Entrar em contato sobre vagas (se você autorizou)</li>
                <li>Responder suas mensagens (se você enviou alguma)</li>
                <li>Melhorar o site (através de estatísticas anônimas)</li>
                <li>Cumprir obrigações legais (porque a lei manda)</li>
              </ul>

              <h2 className="text-2xl font-bold mt-12 mb-4">4. Com quem compartilhamos</h2>
              <p className="text-gray-600 mb-4">Seus dados podem ser compartilhados com:</p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-6">
                <li><strong>Gestores de vagas:</strong> quando você se candidata, o responsável pela vaga vê seu currículo</li>
                <li><strong>Ferramentas que usamos:</strong> serviços de e-mail, armazenamento em nuvem, análise de dados</li>
                <li><strong>Autoridades:</strong> se a lei exigir</li>
              </ul>
              <p className="text-gray-600 mb-6">
                Não vendemos seus dados. Isso seria estranho.
              </p>

              <h2 className="text-2xl font-bold mt-12 mb-4">5. Quanto tempo guardamos</h2>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-6">
                <li><strong>Candidaturas:</strong> 2 anos após o último contato</li>
                <li><strong>Contas de usuário:</strong> enquanto você mantiver a conta ativa</li>
                <li><strong>Mensagens de contato:</strong> 1 ano</li>
                <li><strong>Cookies:</strong> varia conforme o tipo (ver seção de cookies)</li>
              </ul>

              <h2 className="text-2xl font-bold mt-12 mb-4">6. Seus direitos</h2>
              <p className="text-gray-600 mb-4">Você pode:</p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-6">
                <li><strong>Acessar:</strong> pedir uma cópia dos seus dados</li>
                <li><strong>Corrigir:</strong> atualizar informações incorretas</li>
                <li><strong>Deletar:</strong> pedir que apaguemos seus dados</li>
                <li><strong>Portabilidade:</strong> receber seus dados em formato que você possa levar para outro lugar</li>
                <li><strong>Revogar consentimento:</strong> mudar de ideia sobre autorizações que você deu</li>
              </ul>
              <p className="text-gray-600 mb-6">
                Para exercer esses direitos, envie um e-mail para <a href="mailto:privacidade@huco.com.br" className="text-[#1e3a5f] hover:underline">privacidade@huco.com.br</a>.
              </p>

              <h2 className="text-2xl font-bold mt-12 mb-4">7. Cookies</h2>
              <p className="text-gray-600 mb-4">Usamos cookies para:</p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-6">
                <li><strong>Funcionamento básico:</strong> manter você logado, lembrar preferências</li>
                <li><strong>Análise:</strong> entender como as pessoas usam o site</li>
                <li><strong>Marketing:</strong> mostrar anúncios relevantes (se você permitir)</li>
              </ul>
              <p className="text-gray-600 mb-6">
                Você pode desativar cookies no navegador, mas algumas coisas podem não funcionar direito.
              </p>

              <h2 className="text-2xl font-bold mt-12 mb-4">8. Segurança</h2>
              <p className="text-gray-600 mb-6">
                Usamos criptografia, controle de acesso e outras medidas técnicas para proteger seus dados. 
                Mas nenhum sistema é 100% seguro. Fazemos o melhor possível.
              </p>

              <h2 className="text-2xl font-bold mt-12 mb-4">9. Menores de idade</h2>
              <p className="text-gray-600 mb-6">
                Este site não é direcionado a menores de 18 anos. Se você é menor de idade 
                e enviou dados, peça para seu responsável entrar em contato conosco.
              </p>

              <h2 className="text-2xl font-bold mt-12 mb-4">10. Alterações</h2>
              <p className="text-gray-600 mb-6">
                Podemos atualizar esta política. Quando fizermos mudanças importantes, 
                avisaremos por e-mail ou no site. A data no topo indica quando foi a última atualização.
              </p>

              <h2 className="text-2xl font-bold mt-12 mb-4">11. Contato</h2>
              <p className="text-gray-600 mb-6">
                Para questões sobre privacidade:
              </p>
              <div className="bg-gray-50 p-6 rounded-xl mb-6">
                <p className="font-bold mb-2">Encarregado de Dados (DPO)</p>
                <p className="text-gray-600">
                  E-mail: <a href="mailto:privacidade@huco.com.br" className="text-[#1e3a5f] hover:underline">privacidade@huco.com.br</a><br />
                  Endereço: Av. Paulista, 1000, 15º andar - São Paulo, SP
                </p>
              </div>

              <div className="bg-[#1e3a5f]/5 border border-[#1e3a5f]/10 p-6 rounded-xl mt-12">
                <p className="text-gray-700">
                  <strong>Resumo:</strong> Coletamos dados para processar candidaturas e melhorar o site. 
                  Não vendemos seus dados. Você pode pedir para ver, corrigir ou apagar suas informações. 
                  Se tiver dúvidas, escreva para nós.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
