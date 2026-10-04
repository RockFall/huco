import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "A Empresa — Hu.Co",
  description: "Conheça a Hu.Co, uma empresa onde pessoas trabalham e recebem por isso. Desde 1997.",
};

export default function EmpresaPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-1 pt-20">
        {/* Hero */}
        <section className="py-24 lg:py-32 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="max-w-3xl">
              <p className="text-[#1e3a5f] font-medium mb-4">Sobre a Hu.Co</p>
              <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
                Uma empresa que existe.
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                A Hu.Co foi fundada com um propósito claro: ser uma empresa. 
                Desde então, temos conseguido manter esse status com sucesso.
              </p>
            </div>
          </div>
        </section>

        {/* Mission */}
        <section className="py-24 lg:py-32">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl font-bold tracking-tight mb-6">Nossa missão</h2>
                <p className="text-xl text-gray-600 leading-relaxed mb-6">
                  Oferecer trabalho para pessoas que querem trabalhar, em troca de dinheiro.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Acreditamos que quando alguém faz um trabalho, essa pessoa deve receber uma 
                  compensação financeira. Essa crença guia todas as nossas decisões desde 1997.
                </p>
              </div>
              <div className="relative">
                <Image
                  src="/images/team-photo.jpg"
                  alt="Equipe Hu.Co"
                  width={600}
                  height={400}
                  className="rounded-xl shadow-xl object-cover w-full h-[400px]"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section id="valores" className="py-24 lg:py-32 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold tracking-tight mb-4">Nossos valores</h2>
              <p className="text-gray-600 text-lg">Princípios que orientam a existência desta empresa.</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: "Pontualidade",
                  description: "Chegamos no horário. Saímos no horário. O relógio existe por um motivo.",
                  icon: "🕐"
                },
                {
                  title: "Pagamento",
                  description: "Pagamos os funcionários. Todo mês. No dia combinado.",
                  icon: "💰"
                },
                {
                  title: "Honestidade",
                  description: "Dizemos o que a pessoa vai fazer antes de contratá-la. Depois, ela faz aquilo.",
                  icon: "🤝"
                },
                {
                  title: "Presença",
                  description: "Estamos aqui. No escritório. Durante o horário comercial.",
                  icon: "📍"
                }
              ].map((value, index) => (
                <div key={index} className="bg-white p-8 rounded-xl shadow-sm">
                  <span className="text-4xl mb-4 block">{value.icon}</span>
                  <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* History Timeline */}
        <section id="historia" className="py-24 lg:py-32">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold tracking-tight mb-4">Nossa história</h2>
              <p className="text-gray-600 text-lg">Como chegamos até aqui. E o que fizemos no caminho.</p>
            </div>
            
            <div className="space-y-12 max-w-4xl mx-auto">
              <div className="grid md:grid-cols-[200px_1fr] gap-8 items-start">
                <div className="text-right">
                  <span className="text-4xl font-bold text-[#1e3a5f]">1997</span>
                  <p className="text-gray-500 text-sm">A fundação</p>
                </div>
                <div className="border-l-2 border-gray-200 pl-8 pb-8">
                  <Image
                    src="/images/history-founding.jpg"
                    alt="Fundação da Hu.Co"
                    width={600}
                    height={300}
                    className="rounded-lg mb-4 w-full h-48 object-cover"
                  />
                  <h3 className="text-xl font-bold mb-2">A empresa foi fundada</h3>
                  <p className="text-gray-600">
                    Três pessoas decidiram criar uma empresa. Alugaram uma sala. 
                    Compraram mesas. Começaram a trabalhar. A empresa passou a existir.
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-[200px_1fr] gap-8 items-start">
                <div className="text-right">
                  <span className="text-4xl font-bold text-[#1e3a5f]">2003</span>
                  <p className="text-gray-500 text-sm">Crescimento</p>
                </div>
                <div className="border-l-2 border-gray-200 pl-8 pb-8">
                  <h3 className="text-xl font-bold mb-2">Contratamos mais pessoas</h3>
                  <p className="text-gray-600">
                    O número de funcionários aumentou. Precisamos de mais mesas. 
                    Compramos mais mesas. As pessoas sentaram nelas.
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-[200px_1fr] gap-8 items-start">
                <div className="text-right">
                  <span className="text-4xl font-bold text-[#1e3a5f]">2010</span>
                  <p className="text-gray-500 text-sm">Mudança</p>
                </div>
                <div className="border-l-2 border-gray-200 pl-8 pb-8">
                  <h3 className="text-xl font-bold mb-2">Mudamos de escritório</h3>
                  <p className="text-gray-600">
                    O escritório antigo ficou pequeno. Encontramos um maior. 
                    Levamos as coisas para lá. Agora trabalhamos aqui.
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-[200px_1fr] gap-8 items-start">
                <div className="text-right">
                  <span className="text-4xl font-bold text-[#1e3a5f]">2018</span>
                  <p className="text-gray-500 text-sm">Expansão</p>
                </div>
                <div className="border-l-2 border-gray-200 pl-8 pb-8">
                  <Image
                    src="/images/history-expansion.jpg"
                    alt="Expansão da Hu.Co"
                    width={600}
                    height={300}
                    className="rounded-lg mb-4 w-full h-48 object-cover"
                  />
                  <h3 className="text-xl font-bold mb-2">Abrimos outro escritório</h3>
                  <p className="text-gray-600">
                    Agora temos dois lugares onde as pessoas trabalham. 
                    Alguns funcionários vão para um. Outros vão para o outro.
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-[200px_1fr] gap-8 items-start">
                <div className="text-right">
                  <span className="text-4xl font-bold text-[#1e3a5f]">2024</span>
                  <p className="text-gray-500 text-sm">Hoje</p>
                </div>
                <div className="border-l-2 border-[#1e3a5f] pl-8">
                  <h3 className="text-xl font-bold mb-2">Continuamos existindo</h3>
                  <p className="text-gray-600">
                    A empresa ainda existe. As pessoas ainda trabalham aqui. 
                    Ainda pagamos elas. Tudo continua funcionando.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Numbers */}
        <section className="py-24 lg:py-32 bg-[#1e3a5f] text-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold tracking-tight mb-4">Em números</h2>
              <p className="text-white/70 text-lg">Dados que existem sobre esta empresa.</p>
            </div>
            
            <div className="grid md:grid-cols-4 gap-8 text-center">
              {[
                { number: "27", label: "Anos de existência", sublabel: "A empresa foi fundada em 1997" },
                { number: "48", label: "Funcionários", sublabel: "Pessoas que trabalham aqui" },
                { number: "2", label: "Escritórios", sublabel: "Lugares onde trabalhamos" },
                { number: "324", label: "Salários pagos", sublabel: "Só neste ano" },
              ].map((stat, index) => (
                <div key={index}>
                  <span className="text-6xl font-bold">{stat.number}</span>
                  <p className="text-xl font-medium mt-2">{stat.label}</p>
                  <p className="text-white/60 text-sm mt-1">{stat.sublabel}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Leadership Preview */}
        <section className="py-24 lg:py-32">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
              <div>
                <h2 className="text-4xl font-bold tracking-tight mb-2">Liderança</h2>
                <p className="text-gray-600">As pessoas que tomam decisões aqui.</p>
              </div>
              <a href="/equipe" className="text-[#1e3a5f] font-medium hover:underline mt-4 md:mt-0">
                Ver toda a equipe →
              </a>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: "Ricardo Mendes",
                  role: "CEO",
                  description: "Fundou a empresa. Ainda está aqui.",
                  image: "/images/team-ceo.jpg"
                },
                {
                  name: "Helena Costa",
                  role: "COO",
                  description: "Garante que as coisas aconteçam.",
                  image: "/images/team-coo.jpg"
                },
                {
                  name: "Fernando Oliveira",
                  role: "CFO",
                  description: "Cuida do dinheiro. Inclusive do seu salário.",
                  image: "/images/team-finance.jpg"
                }
              ].map((leader, index) => (
                <div key={index} className="text-center">
                  <Image
                    src={leader.image}
                    alt={leader.name}
                    width={200}
                    height={200}
                    className="rounded-full w-40 h-40 object-cover mx-auto mb-4"
                  />
                  <h3 className="text-xl font-bold">{leader.name}</h3>
                  <p className="text-[#1e3a5f] font-medium">{leader.role}</p>
                  <p className="text-gray-600 mt-2">{leader.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 lg:py-32 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
            <h2 className="text-4xl font-bold tracking-tight mb-6">
              Quer fazer parte desta empresa?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Temos vagas. Algumas delas podem ser adequadas para você.
            </p>
            <a 
              href="/vagas"
              className="inline-flex items-center justify-center bg-[#1e3a5f] text-white font-medium px-10 py-4 rounded hover:bg-[#152a45] transition-colors"
            >
              Ver vagas disponíveis
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
