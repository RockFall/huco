import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Contato — Hu.Co",
  description: "Entre em contato com a Hu.Co. Respondemos mensagens durante o horário comercial.",
};

export default function ContatoPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-1 pt-20">
        {/* Hero */}
        <section className="py-24 lg:py-32 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="max-w-3xl">
              <p className="text-[#1e3a5f] font-medium mb-4">Contato</p>
              <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
                Fale com a gente.
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Temos pessoas que leem mensagens e respondem. 
                Durante o horário comercial.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Info + Form */}
        <section className="py-24 lg:py-32">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="grid lg:grid-cols-[400px_1fr] gap-16">
              {/* Contact Info */}
              <div className="space-y-12">
                <div>
                  <h2 className="text-2xl font-bold mb-6">Informações de contato</h2>
                  
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-[#1e3a5f]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <svg className="w-6 h-6 text-[#1e3a5f]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-bold mb-1">E-mail</h3>
                        <p className="text-gray-600">contato@huco.com.br</p>
                        <p className="text-gray-500 text-sm mt-1">Respondemos em até 2 dias úteis</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-[#1e3a5f]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <svg className="w-6 h-6 text-[#1e3a5f]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-bold mb-1">Telefone</h3>
                        <p className="text-gray-600">(11) 1234-5678</p>
                        <p className="text-gray-500 text-sm mt-1">Seg a Sex, 9h às 18h</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-[#1e3a5f]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <svg className="w-6 h-6 text-[#1e3a5f]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-bold mb-1">Endereço</h3>
                        <p className="text-gray-600">
                          Av. Paulista, 1000 - 15º andar<br />
                          Bela Vista, São Paulo - SP<br />
                          CEP: 01310-100
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-bold mb-4">Escritório São Paulo</h3>
                  <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center">
                    <div className="text-center text-gray-500">
                      <svg className="w-12 h-12 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                      </svg>
                      <p className="text-sm">Mapa do escritório</p>
                      <p className="text-xs">(Fica na Av. Paulista)</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="font-bold mb-2">Horário de atendimento</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Segunda a Sexta</span>
                      <span className="font-medium">9h às 18h</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Sábado</span>
                      <span className="font-medium">Fechado</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Domingo</span>
                      <span className="font-medium">Fechado</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Feriados</span>
                      <span className="font-medium">Fechado</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Form */}
              <div className="bg-white rounded-xl border border-gray-200 p-8 lg:p-12">
                <h2 className="text-2xl font-bold mb-2">Envie uma mensagem</h2>
                <p className="text-gray-600 mb-8">Preencha o formulário. Alguém vai ler.</p>

                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Nome completo *
                      </label>
                      <input
                        type="text"
                        id="name"
                        placeholder="Seu nome"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1e3a5f] focus:border-transparent outline-none transition-all"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        E-mail *
                      </label>
                      <input
                        type="email"
                        id="email"
                        placeholder="seu@email.com"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1e3a5f] focus:border-transparent outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Telefone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        placeholder="(11) 99999-9999"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1e3a5f] focus:border-transparent outline-none transition-all"
                      />
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                        Assunto *
                      </label>
                      <select
                        id="subject"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1e3a5f] focus:border-transparent outline-none transition-all bg-white"
                      >
                        <option value="">Selecione</option>
                        <option value="vagas">Dúvidas sobre vagas</option>
                        <option value="candidatura">Minha candidatura</option>
                        <option value="curriculo">Enviar currículo</option>
                        <option value="imprensa">Imprensa</option>
                        <option value="parcerias">Parcerias</option>
                        <option value="outro">Outro assunto</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Mensagem *
                    </label>
                    <textarea
                      id="message"
                      rows={6}
                      placeholder="Escreva sua mensagem aqui..."
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1e3a5f] focus:border-transparent outline-none transition-all resize-none"
                    ></textarea>
                  </div>

                  <div>
                    <label htmlFor="attachment" className="block text-sm font-medium text-gray-700 mb-2">
                      Anexo (opcional)
                    </label>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-gray-400 transition-colors cursor-pointer">
                      <svg className="w-8 h-8 mx-auto text-gray-400 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                      </svg>
                      <p className="text-gray-600 text-sm">Arraste um arquivo ou clique para selecionar</p>
                      <p className="text-gray-400 text-xs mt-1">PDF, DOC ou DOCX até 5MB</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      id="privacy"
                      className="mt-1 w-4 h-4 rounded border-gray-300 text-[#1e3a5f] focus:ring-[#1e3a5f]"
                    />
                    <label htmlFor="privacy" className="text-sm text-gray-600">
                      Li e concordo com a{' '}
                      <a href="/privacidade" className="text-[#1e3a5f] hover:underline">Política de Privacidade</a>
                      {' '}e autorizo o tratamento dos meus dados para resposta a esta mensagem.
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#1e3a5f] text-white font-medium py-4 rounded-lg hover:bg-[#152a45] transition-colors"
                  >
                    Enviar mensagem
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-24 lg:py-32 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight mb-4">Perguntas frequentes</h2>
              <p className="text-gray-600">Talvez a resposta já esteja aqui.</p>
            </div>
            
            <div className="max-w-3xl mx-auto space-y-6">
              {[
                {
                  question: "Quanto tempo demora para receber uma resposta?",
                  answer: "Respondemos e-mails em até 2 dias úteis. Se for urgente, ligue."
                },
                {
                  question: "Posso visitar o escritório?",
                  answer: "Sim, com agendamento prévio. Não aparecemos sem avisar em lugar nenhum; esperamos o mesmo."
                },
                {
                  question: "Como sei se meu currículo foi recebido?",
                  answer: "Enviamos um e-mail de confirmação. Se não recebeu, verifique o spam ou envie novamente."
                },
                {
                  question: "Vocês respondem mensagens no LinkedIn?",
                  answer: "Às vezes. E-mail é mais confiável."
                }
              ].map((faq, index) => (
                <div key={index} className="bg-white p-6 rounded-xl border border-gray-200">
                  <h3 className="font-bold mb-2">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
