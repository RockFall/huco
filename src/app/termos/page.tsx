import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Termos de Uso — Hu.Co",
  description: "Termos e condições de uso do site da Hu.Co. As regras de convivência digital.",
};

export default function TermosPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-1 pt-20">
        <section className="py-16 lg:py-24">
          <div className="max-w-3xl mx-auto px-6 lg:px-12">
            <p className="text-[#1e3a5f] font-medium mb-4">Legal</p>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              Termos de Uso
            </h1>
            <p className="text-gray-500 mb-12">Última atualização: Janeiro de 2024</p>

            <div className="prose prose-lg max-w-none">
              <p className="lead text-xl text-gray-600 mb-8">
                Ao usar este site, você concorda com estes termos. Se não concorda, 
                não use o site. É simples assim.
              </p>

              <h2 className="text-2xl font-bold mt-12 mb-4">1. Quem somos</h2>
              <p className="text-gray-600 mb-6">
                Este site pertence à Hu.Co Human Company Ltda., CNPJ 12.345.678/0001-90. 
                Quando dizemos "nós", "nosso" ou "Hu.Co", é de nós que estamos falando.
              </p>

              <h2 className="text-2xl font-bold mt-12 mb-4">2. Para que serve este site</h2>
              <p className="text-gray-600 mb-4">Este site serve para:</p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-6">
                <li>Apresentar a empresa (quem somos, o que fazemos)</li>
                <li>Divulgar vagas de trabalho</li>
                <li>Receber candidaturas</li>
                <li>Permitir que candidatos acompanhem seus processos</li>
              </ul>

              <h2 className="text-2xl font-bold mt-12 mb-4">3. Sua conta</h2>
              <p className="text-gray-600 mb-4">Se você criar uma conta:</p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-6">
                <li>Use informações verdadeiras (não invente dados)</li>
                <li>Mantenha sua senha segura (não conte para ninguém)</li>
                <li>Você é responsável por tudo que acontece na sua conta</li>
                <li>Avise se alguém usar sua conta sem permissão</li>
              </ul>
              <p className="text-gray-600 mb-6">
                Podemos suspender contas que violem estes termos.
              </p>

              <h2 className="text-2xl font-bold mt-12 mb-4">4. Candidaturas</h2>
              <p className="text-gray-600 mb-4">Quando você se candidata a uma vaga:</p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-6">
                <li>As informações devem ser verdadeiras</li>
                <li>Você autoriza que analisemos seus dados para a vaga em questão</li>
                <li>Não garantimos que você será selecionado (depende da vaga e do processo)</li>
                <li>Candidatar-se não cria vínculo empregatício</li>
              </ul>

              <h2 className="text-2xl font-bold mt-12 mb-4">5. O que você não pode fazer</h2>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-6">
                <li>Mentir em candidaturas ou informações de perfil</li>
                <li>Usar o site para enviar spam ou conteúdo malicioso</li>
                <li>Tentar acessar áreas não autorizadas do sistema</li>
                <li>Copiar, modificar ou distribuir conteúdo do site sem autorização</li>
                <li>Usar robôs ou scripts para acessar o site automaticamente</li>
                <li>Fazer qualquer coisa ilegal</li>
              </ul>

              <h2 className="text-2xl font-bold mt-12 mb-4">6. Propriedade intelectual</h2>
              <p className="text-gray-600 mb-6">
                O site, seu design, textos, imagens e código pertencem à Hu.Co ou a quem 
                nos licenciou. Você pode usar o site, mas não pode copiar partes dele 
                para uso comercial sem nossa autorização.
              </p>
              <p className="text-gray-600 mb-6">
                O conteúdo que você enviar (currículo, mensagens) continua sendo seu. 
                Mas você nos autoriza a usar para os fins descritos na Política de Privacidade.
              </p>

              <h2 className="text-2xl font-bold mt-12 mb-4">7. Links externos</h2>
              <p className="text-gray-600 mb-6">
                Podemos ter links para outros sites. Não controlamos esses sites e não 
                somos responsáveis pelo conteúdo deles. Cuidado por onde você clica.
              </p>

              <h2 className="text-2xl font-bold mt-12 mb-4">8. Disponibilidade</h2>
              <p className="text-gray-600 mb-6">
                Fazemos o possível para manter o site funcionando, mas às vezes ele pode 
                ficar fora do ar para manutenção ou por problemas técnicos. Não garantimos 
                disponibilidade 100% do tempo.
              </p>

              <h2 className="text-2xl font-bold mt-12 mb-4">9. Limitação de responsabilidade</h2>
              <p className="text-gray-600 mb-6">
                O site é oferecido "como está". Não garantimos que seja perfeito ou que 
                atenda todas as suas expectativas. Dentro dos limites da lei, não somos 
                responsáveis por danos indiretos decorrentes do uso do site.
              </p>

              <h2 className="text-2xl font-bold mt-12 mb-4">10. Alterações</h2>
              <p className="text-gray-600 mb-6">
                Podemos mudar estes termos quando necessário. Se as mudanças forem 
                significativas, avisaremos no site. Continuar usando o site após as 
                mudanças significa que você aceita os novos termos.
              </p>

              <h2 className="text-2xl font-bold mt-12 mb-4">11. Encerramento</h2>
              <p className="text-gray-600 mb-6">
                Você pode parar de usar o site quando quiser. Podemos encerrar seu acesso 
                se você violar estes termos. Em caso de encerramento, as seções sobre 
                propriedade intelectual e limitação de responsabilidade continuam valendo.
              </p>

              <h2 className="text-2xl font-bold mt-12 mb-4">12. Lei aplicável</h2>
              <p className="text-gray-600 mb-6">
                Estes termos são regidos pela lei brasileira. Qualquer disputa será 
                resolvida nos tribunais de São Paulo, SP.
              </p>

              <h2 className="text-2xl font-bold mt-12 mb-4">13. Contato</h2>
              <p className="text-gray-600 mb-6">
                Dúvidas sobre estes termos? Escreva para{' '}
                <a href="mailto:juridico@huco.com.br" className="text-[#1e3a5f] hover:underline">juridico@huco.com.br</a>.
              </p>

              <div className="bg-[#1e3a5f]/5 border border-[#1e3a5f]/10 p-6 rounded-xl mt-12">
                <p className="text-gray-700">
                  <strong>Resumo:</strong> Use o site para o que ele foi feito (conhecer a empresa, 
                  se candidatar a vagas). Seja honesto, não faça coisas ilegais, e respeite nossa 
                  propriedade intelectual. Se tiver problemas, entre em contato.
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
