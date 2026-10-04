import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "O Trabalho — Hu.Co",
  description: "Como funciona trabalhar na Hu.Co. Você é contratado, trabalha, e recebe.",
};

export default function TrabalhoPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-1 pt-20">
        {/* Hero */}
        <section className="py-24 lg:py-32 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="max-w-3xl">
              <p className="text-[#1e3a5f] font-medium mb-4">Como trabalhamos</p>
              <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
                Trabalho funciona assim.
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Você vem para o escritório, faz o que foi combinado, e vai embora 
                quando o expediente termina. Simples.
              </p>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-24 lg:py-32">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="text-center mb-20">
              <h2 className="text-4xl font-bold tracking-tight mb-4">O processo completo</h2>
              <p className="text-gray-600 text-lg">Da candidatura ao pagamento. Passo a passo.</p>
            </div>
            
            <div className="space-y-16 max-w-4xl mx-auto">
              {[
                {
                  step: "01",
                  title: "Você se candidata",
                  description: "Envia seu currículo. Uma pessoa lê. Se você atende aos requisitos, entramos em contato.",
                  detail: "O currículo deve conter informações sobre você. Nome, experiência, essas coisas."
                },
                {
                  step: "02",
                  title: "Conversamos",
                  description: "Fazemos perguntas. Você responde. Explicamos o que a vaga envolve.",
                  detail: "A conversa acontece em uma sala. Ou por vídeo. Depende da situação."
                },
                {
                  step: "03",
                  title: "Você é avaliado",
                  description: "Analisamos se você consegue fazer o trabalho. Às vezes há um teste prático.",
                  detail: "O teste mede se você sabe fazer o que diz que sabe fazer."
                },
                {
                  step: "04",
                  title: "Fazemos uma proposta",
                  description: "Dizemos quanto vamos pagar. Você aceita ou não. Se aceitar, passamos para o próximo passo.",
                  detail: "A proposta inclui salário, benefícios e data de início."
                },
                {
                  step: "05",
                  title: "Você é contratado",
                  description: "Assinamos papéis. Você passa a ser um funcionário. Oficialmente.",
                  detail: "A partir daqui, você tem direitos e deveres. Como qualquer funcionário."
                },
                {
                  step: "06",
                  title: "Você trabalha",
                  description: "Vem para o escritório. Faz o trabalho. Usa os equipamentos. Participa de reuniões.",
                  detail: "O horário de trabalho é o horário comercial. Com intervalo para almoço."
                },
                {
                  step: "07",
                  title: "Você é pago",
                  description: "No dia combinado, o dinheiro aparece na sua conta. Todo mês.",
                  detail: "O pagamento acontece mesmo se for feriado. Antecipamos."
                }
              ].map((item, index) => (
                <div key={index} className="grid md:grid-cols-[100px_1fr] gap-8">
                  <span className="text-6xl font-bold text-gray-100">{item.step}</span>
                  <div>
                    <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                    <p className="text-gray-600 text-lg mb-2">{item.description}</p>
                    <p className="text-gray-500 text-sm">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Day in the life */}
        <section className="py-24 lg:py-32 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold tracking-tight mb-4">Um dia típico</h2>
              <p className="text-gray-600 text-lg">O que acontece entre chegar e ir embora.</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { time: "08:00", activity: "Chegada", description: "Você chega. Guarda suas coisas. Liga o computador." },
                { time: "08:30", activity: "Trabalho", description: "Começa a fazer o que precisa fazer." },
                { time: "10:30", activity: "Café", description: "Pausa para café. Opcional, mas disponível." },
                { time: "10:45", activity: "Mais trabalho", description: "Continua o trabalho anterior." },
                { time: "12:00", activity: "Almoço", description: "Uma hora para comer. Pode sair ou ficar." },
                { time: "13:00", activity: "Retorno", description: "Volta ao trabalho. O computador ainda está lá." },
                { time: "15:00", activity: "Reunião", description: "Às vezes tem reunião. Nem sempre." },
                { time: "17:00", activity: "Saída", description: "O expediente termina. Você vai embora." }
              ].map((item, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
                  <span className="text-2xl font-bold text-[#1e3a5f]">{item.time}</span>
                  <h3 className="text-lg font-bold mt-2 mb-1">{item.activity}</h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section id="beneficios" className="py-24 lg:py-32">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold tracking-tight mb-4">Benefícios</h2>
              <p className="text-gray-600 text-lg">Coisas que você recebe além do salário.</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: "💰",
                  title: "Salário",
                  description: "Dinheiro depositado na sua conta todo mês. O valor é combinado antes.",
                  detail: "Pagamento no dia 5"
                },
                {
                  icon: "🏥",
                  title: "Plano de saúde",
                  description: "Cobertura médica para quando você não estiver se sentindo bem.",
                  detail: "Sem coparticipação"
                },
                {
                  icon: "🦷",
                  title: "Plano odontológico",
                  description: "Para cuidar dos seus dentes. Dentistas aceitam o plano.",
                  detail: "Inclui ortodontia"
                },
                {
                  icon: "🍽️",
                  title: "Vale refeição",
                  description: "Dinheiro para você comprar comida durante o almoço.",
                  detail: "R$ 45/dia"
                },
                {
                  icon: "🚌",
                  title: "Vale transporte",
                  description: "Para você chegar ao trabalho. E voltar para casa depois.",
                  detail: "Desconto legal"
                },
                {
                  icon: "🏖️",
                  title: "Férias",
                  description: "30 dias por ano em que você não precisa trabalhar. Mas ainda recebe.",
                  detail: "Com adicional de 1/3"
                },
                {
                  icon: "💻",
                  title: "Equipamentos",
                  description: "Computador, monitor, teclado, mouse. As ferramentas necessárias.",
                  detail: "Fornecidos pela empresa"
                },
                {
                  icon: "📚",
                  title: "Capacitação",
                  description: "Cursos para você aprender coisas relacionadas ao trabalho.",
                  detail: "Até R$ 3.000/ano"
                },
                {
                  icon: "☕",
                  title: "Café",
                  description: "Café disponível na copa. Pode tomar durante o expediente.",
                  detail: "Ilimitado"
                },
                {
                  icon: "🎂",
                  title: "Day off de aniversário",
                  description: "No dia do seu aniversário, você pode não vir trabalhar.",
                  detail: "Folga remunerada"
                },
                {
                  icon: "🏠",
                  title: "Home office",
                  description: "Alguns dias você pode trabalhar de casa. Se a função permitir.",
                  detail: "2x por semana"
                },
                {
                  icon: "🏋️",
                  title: "Gympass",
                  description: "Desconto em academias. Para você se exercitar fora do trabalho.",
                  detail: "Várias academias parceiras"
                }
              ].map((benefit, index) => (
                <div 
                  key={index} 
                  className="p-6 border border-gray-200 rounded-xl hover:border-[#1e3a5f]/20 hover:shadow-md transition-all"
                >
                  <span className="text-3xl">{benefit.icon}</span>
                  <h3 className="text-lg font-bold mt-3 mb-1">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm mb-2">{benefit.description}</p>
                  <span className="text-xs text-[#1e3a5f] font-medium bg-[#1e3a5f]/5 px-2 py-1 rounded">
                    {benefit.detail}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Work Environment */}
        <section className="py-24 lg:py-32 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold tracking-tight mb-4">O ambiente</h2>
              <p className="text-gray-600 text-lg">Onde o trabalho acontece.</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {[
                { image: "/images/office-meeting.jpg", title: "Salas de reunião", description: "Para quando precisamos falar sobre o trabalho. Têm mesa, cadeiras e uma TV." },
                { image: "/images/office-desks.jpg", title: "Área de trabalho", description: "Mesas, cadeiras, computadores. Cada pessoa tem seu lugar." },
                { image: "/images/office-copa.jpg", title: "Copa", description: "Geladeira, microondas, café. Para as pausas necessárias." },
                { image: "/images/office-reception.jpg", title: "Recepção", description: "Por onde você entra. Tem alguém para receber visitantes." }
              ].map((item, index) => (
                <div key={index} className="group relative overflow-hidden rounded-xl">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={600}
                    height={400}
                    className="w-full h-[300px] object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
                    <h3 className="text-white font-bold text-xl">{item.title}</h3>
                    <p className="text-white/80 text-sm mt-1">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-24 lg:py-32">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold tracking-tight mb-4">Dúvidas sobre trabalhar aqui</h2>
            </div>
            
            <div className="max-w-3xl mx-auto space-y-8">
              {[
                {
                  question: "Qual é o dress code?",
                  answer: "Use roupas. De preferência apropriadas para um ambiente profissional. Bermuda pode em dias quentes."
                },
                {
                  question: "Posso levar meu pet?",
                  answer: "Não. Mas você pode ter fotos dele na mesa."
                },
                {
                  question: "Como são as avaliações de desempenho?",
                  answer: "Semestrais. Conversamos sobre o que você fez bem e o que pode melhorar. Documentamos."
                },
                {
                  question: "Tem plano de carreira?",
                  answer: "Sim. Se você fizer bem o trabalho, pode ser promovido. Promoção vem com mais responsabilidade e mais salário."
                },
                {
                  question: "Quanto tempo demora o processo seletivo?",
                  answer: "Geralmente 2-3 semanas. Depende da vaga e da disponibilidade das pessoas envolvidas."
                },
                {
                  question: "Vocês contratam estagiários?",
                  answer: "Sim. Estagiários trabalham aqui também. Com carga horária reduzida, como manda a lei."
                }
              ].map((faq, index) => (
                <div key={index} className="border-b border-gray-200 pb-8">
                  <h3 className="text-xl font-bold mb-3">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 lg:py-32 bg-[#1e3a5f] text-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Parece trabalho para você?
            </h2>
            <p className="text-xl text-white/80 mb-8">
              Veja as vagas disponíveis. Uma delas pode ser sua.
            </p>
            <a 
              href="/vagas"
              className="inline-flex items-center justify-center bg-white text-[#1e3a5f] font-medium px-10 py-4 rounded hover:bg-gray-100 transition-colors"
            >
              Ver vagas
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
