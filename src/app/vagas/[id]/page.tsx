import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { notFound } from "next/navigation";

const jobs: Record<string, {
  title: string;
  department: string;
  location: string;
  type: string;
  level: string;
  salary: string;
  description: string;
  posted: string;
  responsibilities: string[];
  requirements: string[];
  niceToHave: string[];
  benefits: string[];
}> = {
  "assistente-administrativo": {
    title: "Assistente Administrativo",
    department: "Administrativo",
    location: "São Paulo, SP",
    type: "CLT",
    level: "Júnior",
    salary: "R$ 2.500 - R$ 3.200",
    description: "Precisamos de alguém para organizar documentos e manter informações atualizadas. A pessoa vai trabalhar no escritório, durante o horário comercial, fazendo coisas administrativas.",
    posted: "Há 3 dias",
    responsibilities: [
      "Organizar documentos físicos e digitais",
      "Manter planilhas atualizadas",
      "Atender telefonemas quando necessário",
      "Enviar e receber correspondências",
      "Agendar reuniões",
      "Solicitar materiais de escritório quando acabarem"
    ],
    requirements: [
      "Ensino médio completo",
      "Saber usar computador",
      "Saber usar Excel (ou aprender rápido)",
      "Conseguir ler e escrever em português",
      "Chegar no horário"
    ],
    niceToHave: [
      "Experiência anterior em funções administrativas",
      "Curso técnico em Administração",
      "Saber usar Google Workspace"
    ],
    benefits: [
      "Salário (óbvio)",
      "Vale refeição (R$ 45/dia)",
      "Vale transporte",
      "Plano de saúde",
      "Plano odontológico"
    ]
  },
  "analista-financeiro": {
    title: "Analista Financeiro",
    department: "Financeiro",
    location: "São Paulo, SP",
    type: "CLT",
    level: "Pleno",
    salary: "R$ 5.000 - R$ 7.000",
    description: "Precisamos de alguém para acompanhar o dinheiro da empresa. A pessoa vai olhar números, fazer relatórios e garantir que as contas estejam corretas.",
    posted: "Há 1 semana",
    responsibilities: [
      "Analisar relatórios financeiros",
      "Acompanhar fluxo de caixa",
      "Fazer conciliação bancária",
      "Preparar relatórios mensais",
      "Apoiar o fechamento contábil",
      "Identificar quando algo não bate"
    ],
    requirements: [
      "Graduação em Administração, Economia, Contabilidade ou área relacionada",
      "Experiência de 2+ anos na área financeira",
      "Excel avançado (de verdade, não básico fingindo ser avançado)",
      "Conhecimento em demonstrações financeiras",
      "Atenção a detalhes"
    ],
    niceToHave: [
      "Experiência com SAP ou similar",
      "Conhecimento em Power BI",
      "Pós-graduação na área"
    ],
    benefits: [
      "Salário (depositado todo mês)",
      "Vale refeição (R$ 45/dia)",
      "Vale transporte",
      "Plano de saúde sem coparticipação",
      "Plano odontológico",
      "Bônus anual (quando a empresa vai bem)"
    ]
  },
  "desenvolvedor-frontend": {
    title: "Desenvolvedor Frontend",
    department: "Tecnologia",
    location: "São Paulo, SP / Híbrido",
    type: "CLT",
    level: "Pleno",
    salary: "R$ 8.000 - R$ 12.000",
    description: "Precisamos de alguém para fazer telas que as pessoas vão usar. A pessoa vai escrever código, participar de reuniões sobre código, e às vezes consertar código que não funciona.",
    posted: "Há 5 dias",
    responsibilities: [
      "Desenvolver interfaces de usuário",
      "Escrever código limpo e testável",
      "Participar de code reviews",
      "Colaborar com designers",
      "Corrigir bugs (os seus e às vezes os de outros)",
      "Participar de reuniões sobre o produto"
    ],
    requirements: [
      "3+ anos de experiência com desenvolvimento frontend",
      "Conhecimento sólido em React",
      "Experiência com TypeScript",
      "Conhecimento em HTML, CSS (de verdade, não só Tailwind)",
      "Experiência com Git",
      "Capacidade de explicar código para não-desenvolvedores"
    ],
    niceToHave: [
      "Experiência com Next.js",
      "Conhecimento em testes automatizados",
      "Experiência com design systems",
      "Contribuições open source"
    ],
    benefits: [
      "Salário competitivo",
      "Vale refeição (R$ 45/dia)",
      "Plano de saúde completo",
      "Plano odontológico",
      "Gympass",
      "Budget para educação (R$ 3.000/ano)",
      "Home office 2x por semana",
      "Equipamento fornecido"
    ]
  }
};

type PageProps = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: PageProps) {
  const { id } = await params;
  const job = jobs[id];
  if (!job) return { title: "Vaga não encontrada — Hu.Co" };
  return {
    title: `${job.title} — Vagas Hu.Co`,
    description: job.description,
  };
}

export default async function VagaPage({ params }: PageProps) {
  const { id } = await params;
  const job = jobs[id];
  
  if (!job) {
    notFound();
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-1 pt-20">
        {/* Breadcrumb */}
        <div className="bg-gray-50 border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 py-4">
            <nav className="flex items-center gap-2 text-sm">
              <Link href="/" className="text-gray-500 hover:text-gray-700">Início</Link>
              <span className="text-gray-300">/</span>
              <Link href="/vagas" className="text-gray-500 hover:text-gray-700">Vagas</Link>
              <span className="text-gray-300">/</span>
              <span className="text-gray-900">{job.title}</span>
            </nav>
          </div>
        </div>

        {/* Header */}
        <section className="py-12 lg:py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8">
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-4">
                  <span className="text-sm font-medium bg-[#1e3a5f]/10 text-[#1e3a5f] px-3 py-1 rounded-full">
                    {job.department}
                  </span>
                  <span className="text-sm font-medium bg-gray-200 text-gray-700 px-3 py-1 rounded-full">
                    {job.level}
                  </span>
                  <span className="text-sm text-gray-500">{job.posted}</span>
                </div>
                
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
                  {job.title}
                </h1>
                
                <div className="flex flex-wrap gap-6 text-gray-600">
                  <span className="flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {job.location}
                  </span>
                  <span className="flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    {job.type}
                  </span>
                  <span className="flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {job.salary}
                  </span>
                </div>
              </div>
              
              <div className="flex flex-col gap-3">
                <Link
                  href="/login"
                  className="inline-flex items-center justify-center bg-[#1e3a5f] text-white font-medium px-8 py-4 rounded hover:bg-[#152a45] transition-colors"
                >
                  Candidatar-se
                </Link>
                <button className="inline-flex items-center justify-center border border-gray-300 text-gray-700 font-medium px-8 py-4 rounded hover:bg-gray-50 transition-colors">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                  </svg>
                  Compartilhar
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-12 lg:py-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="grid lg:grid-cols-[1fr_350px] gap-12">
              {/* Main Content */}
              <div className="space-y-12">
                <div>
                  <h2 className="text-2xl font-bold mb-4">Sobre a vaga</h2>
                  <p className="text-gray-600 leading-relaxed">{job.description}</p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">O que você vai fazer</h2>
                  <ul className="space-y-3">
                    {job.responsibilities.map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <svg className="w-5 h-5 text-[#1e3a5f] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="text-gray-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">O que esperamos de você</h2>
                  <ul className="space-y-3">
                    {job.requirements.map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <svg className="w-5 h-5 text-[#1e3a5f] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">Diferenciais</h2>
                  <p className="text-gray-500 text-sm mb-4">Não são obrigatórios, mas ajudam.</p>
                  <ul className="space-y-3">
                    {job.niceToHave.map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <svg className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                        </svg>
                        <span className="text-gray-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Sidebar */}
              <div className="space-y-8">
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="font-bold mb-4">O que oferecemos</h3>
                  <ul className="space-y-3">
                    {job.benefits.map((item, index) => (
                      <li key={index} className="flex items-center gap-2 text-sm text-gray-600">
                        <span className="w-1.5 h-1.5 bg-[#1e3a5f] rounded-full"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-[#1e3a5f] text-white p-6 rounded-xl">
                  <h3 className="font-bold mb-2">Interessado?</h3>
                  <p className="text-white/80 text-sm mb-4">
                    Faça login para se candidatar. Se ainda não tem conta, pode criar uma.
                  </p>
                  <Link
                    href="/login"
                    className="block w-full bg-white text-[#1e3a5f] font-medium py-3 rounded text-center hover:bg-gray-100 transition-colors"
                  >
                    Candidatar-se agora
                  </Link>
                </div>

                <div className="border border-gray-200 p-6 rounded-xl">
                  <h3 className="font-bold mb-4">Processo seletivo</h3>
                  <div className="space-y-4">
                    {[
                      { step: "1", label: "Análise de currículo" },
                      { step: "2", label: "Entrevista com RH" },
                      { step: "3", label: "Entrevista técnica" },
                      { step: "4", label: "Proposta" }
                    ].map((item) => (
                      <div key={item.step} className="flex items-center gap-3">
                        <span className="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center text-xs font-bold text-gray-600">
                          {item.step}
                        </span>
                        <span className="text-sm text-gray-600">{item.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Other jobs */}
        <section className="py-12 lg:py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <h2 className="text-2xl font-bold mb-8">Outras vagas que podem interessar</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {Object.entries(jobs)
                .filter(([key]) => key !== id)
                .slice(0, 3)
                .map(([key, otherJob]) => (
                  <Link
                    key={key}
                    href={`/vagas/${key}`}
                    className="bg-white p-6 rounded-xl border border-gray-100 hover:shadow-md transition-shadow"
                  >
                    <span className="text-xs font-medium bg-[#1e3a5f]/5 text-[#1e3a5f] px-2 py-1 rounded">
                      {otherJob.department}
                    </span>
                    <h3 className="font-bold mt-3">{otherJob.title}</h3>
                    <p className="text-gray-500 text-sm mt-1">{otherJob.location}</p>
                  </Link>
                ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
