import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata = {
  title: "Vagas — Hu.Co",
  description: "Vagas abertas na Hu.Co. Trabalhos que precisam de alguém.",
};

const jobs = [
  {
    id: "assistente-administrativo",
    title: "Assistente Administrativo",
    department: "Administrativo",
    location: "São Paulo, SP",
    type: "CLT",
    level: "Júnior",
    salary: "R$ 2.500 - R$ 3.200",
    description: "Precisamos de alguém para organizar documentos e manter informações atualizadas.",
    posted: "Há 3 dias"
  },
  {
    id: "analista-financeiro",
    title: "Analista Financeiro",
    department: "Financeiro",
    location: "São Paulo, SP",
    type: "CLT",
    level: "Pleno",
    salary: "R$ 5.000 - R$ 7.000",
    description: "Precisamos de alguém para acompanhar o dinheiro da empresa.",
    posted: "Há 1 semana"
  },
  {
    id: "atendimento",
    title: "Atendimento ao Cliente",
    department: "Comercial",
    location: "Remoto",
    type: "CLT",
    level: "Júnior",
    salary: "R$ 2.200 - R$ 2.800",
    description: "Precisamos de alguém para responder às pessoas que entram em contato.",
    posted: "Há 2 dias"
  },
  {
    id: "desenvolvedor-frontend",
    title: "Desenvolvedor Frontend",
    department: "Tecnologia",
    location: "São Paulo, SP / Híbrido",
    type: "CLT",
    level: "Pleno",
    salary: "R$ 8.000 - R$ 12.000",
    description: "Precisamos de alguém para fazer telas que as pessoas vão usar.",
    posted: "Há 5 dias"
  },
  {
    id: "analista-rh",
    title: "Analista de RH",
    department: "Recursos Humanos",
    location: "São Paulo, SP",
    type: "CLT",
    level: "Pleno",
    salary: "R$ 4.500 - R$ 6.000",
    description: "Precisamos de alguém para ajudar a cuidar das pessoas que trabalham aqui.",
    posted: "Há 1 dia"
  },
  {
    id: "estagiario-marketing",
    title: "Estágio em Marketing",
    department: "Marketing",
    location: "São Paulo, SP",
    type: "Estágio",
    level: "Estágio",
    salary: "R$ 1.500 + benefícios",
    description: "Precisamos de alguém para aprender a fazer marketing enquanto ajuda a equipe.",
    posted: "Há 4 dias"
  },
  {
    id: "gerente-operacoes",
    title: "Gerente de Operações",
    department: "Operações",
    location: "São Paulo, SP",
    type: "CLT",
    level: "Sênior",
    salary: "R$ 12.000 - R$ 18.000",
    description: "Precisamos de alguém para gerenciar as operações. Experiência necessária.",
    posted: "Há 2 semanas"
  },
  {
    id: "designer-grafico",
    title: "Designer Gráfico",
    department: "Marketing",
    location: "Remoto",
    type: "CLT",
    level: "Pleno",
    salary: "R$ 5.500 - R$ 7.500",
    description: "Precisamos de alguém para criar coisas visuais. Imagens, layouts, essas coisas.",
    posted: "Há 6 dias"
  }
];

const departments = ["Todos", "Administrativo", "Financeiro", "Comercial", "Tecnologia", "Recursos Humanos", "Marketing", "Operações"];
const locations = ["Todas", "São Paulo, SP", "Remoto", "Híbrido"];
const levels = ["Todos", "Estágio", "Júnior", "Pleno", "Sênior"];

export default function VagasPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-1 pt-20">
        {/* Hero */}
        <section className="py-24 lg:py-32 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="max-w-3xl">
              <p className="text-[#1e3a5f] font-medium mb-4">Carreiras</p>
              <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
                Trabalhos disponíveis.
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Temos vagas abertas. Cada uma precisa de alguém. 
                Talvez uma delas seja para você.
              </p>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-8 bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="flex flex-wrap justify-center md:justify-start gap-8">
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold text-[#1e3a5f]">{jobs.length}</span>
                <span className="text-gray-600">vagas abertas</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold text-[#1e3a5f]">6</span>
                <span className="text-gray-600">departamentos contratando</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold text-[#1e3a5f]">2-3</span>
                <span className="text-gray-600">semanas para resposta</span>
              </div>
            </div>
          </div>
        </section>

        {/* Filters & Jobs */}
        <section className="py-12 lg:py-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="grid lg:grid-cols-[280px_1fr] gap-12">
              {/* Filters */}
              <aside className="space-y-8">
                <div>
                  <h3 className="font-bold mb-4">Departamento</h3>
                  <div className="space-y-2">
                    {departments.map((dept) => (
                      <label key={dept} className="flex items-center gap-2 cursor-pointer">
                        <input 
                          type="checkbox" 
                          defaultChecked={dept === "Todos"}
                          className="w-4 h-4 rounded border-gray-300 text-[#1e3a5f] focus:ring-[#1e3a5f]"
                        />
                        <span className="text-gray-600 text-sm">{dept}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-bold mb-4">Localização</h3>
                  <div className="space-y-2">
                    {locations.map((loc) => (
                      <label key={loc} className="flex items-center gap-2 cursor-pointer">
                        <input 
                          type="checkbox" 
                          defaultChecked={loc === "Todas"}
                          className="w-4 h-4 rounded border-gray-300 text-[#1e3a5f] focus:ring-[#1e3a5f]"
                        />
                        <span className="text-gray-600 text-sm">{loc}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-bold mb-4">Nível</h3>
                  <div className="space-y-2">
                    {levels.map((level) => (
                      <label key={level} className="flex items-center gap-2 cursor-pointer">
                        <input 
                          type="checkbox" 
                          defaultChecked={level === "Todos"}
                          className="w-4 h-4 rounded border-gray-300 text-[#1e3a5f] focus:ring-[#1e3a5f]"
                        />
                        <span className="text-gray-600 text-sm">{level}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-200">
                  <button className="text-[#1e3a5f] text-sm font-medium hover:underline">
                    Limpar filtros
                  </button>
                </div>
              </aside>

              {/* Jobs List */}
              <div className="space-y-6">
                {jobs.map((job) => (
                  <Link
                    key={job.id}
                    href={`/vagas/${job.id}`}
                    className="block bg-white p-8 rounded-xl border border-gray-100 hover:border-[#1e3a5f]/20 hover:shadow-lg transition-all group"
                  >
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-2 mb-3">
                          <span className="text-xs font-medium bg-[#1e3a5f]/5 text-[#1e3a5f] px-2 py-1 rounded">
                            {job.department}
                          </span>
                          <span className="text-xs font-medium bg-gray-100 text-gray-600 px-2 py-1 rounded">
                            {job.level}
                          </span>
                          <span className="text-xs text-gray-400">{job.posted}</span>
                        </div>
                        
                        <h2 className="text-xl font-bold group-hover:text-[#1e3a5f] transition-colors">
                          {job.title}
                        </h2>
                        
                        <p className="text-gray-600 mt-2">{job.description}</p>
                        
                        <div className="flex flex-wrap gap-4 mt-4 text-sm text-gray-500">
                          <span className="flex items-center gap-1">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            {job.location}
                          </span>
                          <span className="flex items-center gap-1">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            {job.type}
                          </span>
                          <span className="flex items-center gap-1">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            {job.salary}
                          </span>
                        </div>
                      </div>
                      
                      <div className="flex-shrink-0">
                        <span className="inline-flex items-center gap-2 bg-white border-2 border-[#1e3a5f] text-[#1e3a5f] font-medium px-6 py-3 rounded group-hover:bg-[#1e3a5f] group-hover:text-white transition-colors">
                          Ver vaga
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* No job for you? */}
        <section className="py-24 lg:py-32 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight mb-4">
              Não encontrou uma vaga que combina com você?
            </h2>
            <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
              Envie seu currículo mesmo assim. Se surgir uma vaga que combine, 
              entramos em contato. Ou não. Depende.
            </p>
            <a 
              href="/contato"
              className="inline-flex items-center justify-center border-2 border-[#1e3a5f] text-[#1e3a5f] font-medium px-8 py-4 rounded hover:bg-[#1e3a5f] hover:text-white transition-colors"
            >
              Enviar currículo espontâneo
            </a>
          </div>
        </section>

        {/* Process reminder */}
        <section className="py-24 lg:py-32">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight mb-4">Como funciona</h2>
              <p className="text-gray-600">O processo seletivo, resumido.</p>
            </div>
            
            <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {[
                { step: "1", title: "Candidatura", description: "Você se candidata. Lemos seu currículo." },
                { step: "2", title: "Conversa", description: "Se houver interesse, marcamos uma conversa." },
                { step: "3", title: "Avaliação", description: "Pode ter teste prático. Depende da vaga." },
                { step: "4", title: "Proposta", description: "Se der certo, fazemos uma oferta." }
              ].map((item) => (
                <div key={item.step} className="text-center">
                  <span className="inline-flex items-center justify-center w-12 h-12 bg-[#1e3a5f] text-white font-bold rounded-full mb-4">
                    {item.step}
                  </span>
                  <h3 className="font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
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
