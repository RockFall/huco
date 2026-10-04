import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1 pt-20">
        {/* Hero Section */}
        <section className="min-h-[calc(100vh-80px)] flex items-center">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 lg:py-24">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div className="space-y-8">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight">
                  Aqui você trabalha.<br />
                  <span className="text-[#1e3a5f]">E você é pago.</span>
                </h1>
                <p className="text-xl text-gray-600 max-w-lg">
                  Na Hu.Co, pessoas fazem trabalhos e recebem dinheiro por isso.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a 
                    href="#vagas"
                    className="inline-flex items-center justify-center bg-[#1e3a5f] text-white font-medium px-8 py-4 rounded hover:bg-[#152a45] transition-colors"
                  >
                    Ver trabalhos disponíveis
                  </a>
                  <a 
                    href="#trabalho"
                    className="inline-flex items-center justify-center border-2 border-gray-200 text-gray-700 font-medium px-8 py-4 rounded hover:border-gray-300 hover:bg-gray-50 transition-colors"
                  >
                    Entender como funciona
                  </a>
                </div>
              </div>
              <div className="relative">
                <Image
                  src="/images/hero-working.jpg"
                  alt="Pessoa trabalhando em um escritório"
                  width={800}
                  height={600}
                  className="rounded-lg shadow-2xl object-cover w-full h-[400px] lg:h-[500px]"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* Stats Bar */}
        <section className="bg-gray-50 border-y border-gray-100">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 py-8">
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 text-center">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-[#1e3a5f] rounded-full"></div>
                <span className="text-gray-600">Funcionários humanos</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-[#1e3a5f] rounded-full"></div>
                <span className="text-gray-600">Salários em dinheiro</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-[#1e3a5f] rounded-full"></div>
                <span className="text-gray-600">Trabalho durante o expediente</span>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="empresa" className="py-24 lg:py-32">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
                Uma empresa composta por pessoas.
              </h2>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <Image
                  src="/images/team-photo.jpg"
                  alt="Equipe da Hu.Co"
                  width={800}
                  height={600}
                  className="rounded-lg shadow-xl object-cover w-full h-[400px]"
                />
              </div>
              <div className="space-y-6">
                <p className="text-xl text-gray-600 leading-relaxed">
                  Temos pessoas que trabalham aqui há mais tempo e pessoas que chegaram depois. 
                  Cada uma faz um trabalho. Juntas, elas formam a empresa.
                </p>
                <a 
                  href="#equipe"
                  className="inline-flex items-center text-[#1e3a5f] font-medium hover:underline"
                >
                  Conheça quem está aqui
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* How it Works Section */}
        <section id="trabalho" className="py-24 lg:py-32 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="max-w-3xl mx-auto text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
                Como funciona trabalhar aqui.
              </h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
              {[
                {
                  number: "1",
                  title: "Você é contratado.",
                  description: "Combinamos o que você fará e quanto receberá.",
                  image: "/images/step-hired.jpg"
                },
                {
                  number: "2",
                  title: "Você trabalha.",
                  description: "Faz o trabalho combinado durante o horário de trabalho.",
                  image: "/images/step-working.jpg"
                },
                {
                  number: "3",
                  title: "Você é pago.",
                  description: "O dinheiro vai para a sua conta.",
                  image: "/images/step-paid.jpg"
                }
              ].map((step) => (
                <div key={step.number} className="bg-white rounded-xl shadow-sm overflow-hidden">
                  <div className="relative h-48">
                    <Image
                      src={step.image}
                      alt={step.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-8">
                    <span className="text-6xl font-bold text-gray-100">{step.number}</span>
                    <h3 className="text-xl font-bold mt-2 mb-3">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-24 lg:py-32">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="max-w-3xl mx-auto text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
                O que oferecemos a quem trabalha.
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: "Salário", description: "Dinheiro recebido pelo trabalho." },
                { title: "Férias", description: "Um período em que você não trabalha aqui." },
                { title: "Equipamentos", description: "Coisas necessárias para fazer o trabalho." },
                { title: "Colegas", description: "Outras pessoas que também trabalham aqui." },
                { title: "Horário de saída", description: "O momento em que o expediente termina." },
                { title: "Café", description: "Café." },
              ].map((benefit, index) => (
                <div 
                  key={index} 
                  className="p-8 border border-gray-200 rounded-xl hover:border-[#1e3a5f]/20 hover:shadow-lg transition-all"
                >
                  <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="equipe" className="py-24 lg:py-32 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="max-w-3xl mx-auto text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
                Quem trabalhou confirma.
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {[
                {
                  quote: "Eu trabalhei na Hu.Co e recebi meu salário!",
                  name: "Mariana",
                  role: "Financeiro",
                  image: "/images/testimonial-mariana.jpg"
                },
                {
                  quote: "Na entrevista, explicaram o que eu faria. Quando comecei, era aquilo mesmo.",
                  name: "Pedro",
                  role: "Operações",
                  image: "/images/testimonial-pedro.jpg"
                },
                {
                  quote: "Meu computador fica na minha mesa. Isso facilita bastante.",
                  name: "Camila",
                  role: "Administrativo",
                  image: "/images/testimonial-camila.jpg"
                },
                {
                  quote: "Tirei férias. Quando voltei, continuava trabalhando aqui.",
                  name: "Rafael",
                  role: "Comercial",
                  image: "/images/testimonial-rafael.jpg"
                }
              ].map((testimonial, index) => (
                <div 
                  key={index}
                  className="bg-white p-8 rounded-xl shadow-sm flex gap-6"
                >
                  <div className="flex-shrink-0">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={80}
                      height={80}
                      className="rounded-full object-cover w-20 h-20"
                    />
                  </div>
                  <div>
                    <p className="text-lg mb-4 text-gray-800">"{testimonial.quote}"</p>
                    <p className="font-bold">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center">
              <p className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1e3a5f] max-w-4xl mx-auto leading-tight">
                "O pagamento aconteceu novamente no mês seguinte."
              </p>
            </div>
          </div>
        </section>

        {/* Office Gallery Section */}
        <section className="py-24 lg:py-32">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="max-w-3xl mx-auto text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
                Um lugar para trabalhar.
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {[
                { image: "/images/office-meeting.jpg", caption: "Aqui falamos sobre o trabalho." },
                { image: "/images/office-desks.jpg", caption: "Aqui fazemos o trabalho." },
                { image: "/images/office-copa.jpg", caption: "Aqui há uma geladeira." },
                { image: "/images/office-reception.jpg", caption: "Você passa por aqui quando chega." },
              ].map((item, index) => (
                <div key={index} className="group relative overflow-hidden rounded-xl">
                  <Image
                    src={item.image}
                    alt={item.caption}
                    width={800}
                    height={600}
                    className="w-full h-[300px] object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                    <p className="text-white font-medium p-6">{item.caption}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Jobs Section */}
        <section id="vagas" className="py-24 lg:py-32 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="max-w-3xl mx-auto text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
                Há trabalhos que precisam de alguém.
              </h2>
            </div>
            
            <div className="space-y-6 max-w-3xl mx-auto">
              {[
                {
                  title: "Assistente administrativo",
                  description: "Precisamos de alguém para organizar documentos e manter informações atualizadas.",
                  location: "São Paulo, SP",
                  type: "CLT",
                },
                {
                  title: "Analista financeiro",
                  description: "Precisamos de alguém para acompanhar o dinheiro da empresa.",
                  location: "São Paulo, SP",
                  type: "CLT",
                },
                {
                  title: "Atendimento",
                  description: "Precisamos de alguém para responder às pessoas que entram em contato.",
                  location: "Remoto",
                  type: "CLT",
                },
              ].map((job, index) => (
                <div 
                  key={index}
                  className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-bold mb-2">{job.title}</h3>
                      <p className="text-gray-600 mb-3">{job.description}</p>
                      <div className="flex gap-4 text-sm text-gray-500">
                        <span>{job.location}</span>
                        <span>•</span>
                        <span>{job.type}</span>
                      </div>
                    </div>
                    <button className="flex-shrink-0 bg-white border-2 border-[#1e3a5f] text-[#1e3a5f] font-medium px-6 py-3 rounded hover:bg-[#1e3a5f] hover:text-white transition-colors">
                      Posso fazer isso
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24 lg:py-32">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="max-w-3xl mx-auto text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
                Perguntas que você pode ter.
              </h2>
            </div>
            
            <div className="max-w-3xl mx-auto space-y-8">
              {[
                {
                  question: "Vocês pagam pelo trabalho?",
                  answer: "Sim. O valor é combinado antes."
                },
                {
                  question: "Preciso saber fazer tudo?",
                  answer: "Você precisa atender aos requisitos da vaga."
                },
                {
                  question: "Tem reunião?",
                  answer: "Tem. Algumas poderiam ser mensagens."
                },
                {
                  question: "O que acontece depois que envio meu currículo?",
                  answer: "Uma pessoa lê. Se houver compatibilidade, ela entra em contato."
                },
                {
                  question: "Posso trabalhar aí sem conhecer ninguém?",
                  answer: "Sim. Depois você conhecerá algumas pessoas."
                },
              ].map((faq, index) => (
                <div key={index} className="border-b border-gray-200 pb-8">
                  <h3 className="text-xl font-bold mb-3">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 lg:py-32 bg-[#1e3a5f] text-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
              Você sabe fazer alguma coisa?<br />
              <span className="text-white/80">Talvez precisemos dessa coisa.</span>
            </h2>
            <a 
              href="#vagas"
              className="inline-flex items-center justify-center bg-white text-[#1e3a5f] font-medium px-10 py-4 rounded hover:bg-gray-100 transition-colors mt-8"
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
