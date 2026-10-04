import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Quem Trabalha Aqui — Hu.Co",
  description: "Conheça as pessoas que trabalham na Hu.Co. Cada uma faz um trabalho.",
};

const teamMembers = [
  {
    name: "Ricardo Mendes",
    role: "CEO & Fundador",
    department: "Diretoria",
    image: "/images/team-ceo.jpg",
    bio: "Fundou a empresa em 1997. Desde então, vem para o escritório quase todo dia.",
    linkedin: "#",
    years: "27 anos"
  },
  {
    name: "Helena Costa",
    role: "COO",
    department: "Diretoria",
    image: "/images/team-coo.jpg",
    bio: "Garante que as operações aconteçam. Quando algo precisa ser feito, ela faz acontecer.",
    linkedin: "#",
    years: "12 anos"
  },
  {
    name: "Fernando Oliveira",
    role: "CFO",
    department: "Financeiro",
    image: "/images/team-finance.jpg",
    bio: "Cuida do dinheiro da empresa. Inclusive o dinheiro que vai para o seu salário.",
    linkedin: "#",
    years: "8 anos"
  },
  {
    name: "Juliana Santos",
    role: "Head de RH",
    department: "Recursos Humanos",
    image: "/images/team-hr.jpg",
    bio: "Contrata pessoas. Cuida das pessoas contratadas. Organiza as coisas de RH.",
    linkedin: "#",
    years: "6 anos"
  },
  {
    name: "Lucas Ferreira",
    role: "Tech Lead",
    department: "Tecnologia",
    image: "/images/team-tech.jpg",
    bio: "Lidera a equipe de tecnologia. Escreve código. Revisa código dos outros.",
    linkedin: "#",
    years: "4 anos"
  },
  {
    name: "Amanda Ribeiro",
    role: "Head de Marketing",
    department: "Marketing",
    image: "/images/team-marketing.jpg",
    bio: "Cuida da imagem da empresa. Faz as pessoas saberem que a Hu.Co existe.",
    linkedin: "#",
    years: "5 anos"
  },
  {
    name: "Carlos Eduardo",
    role: "Gerente de Operações",
    department: "Operações",
    image: "/images/team-operations.jpg",
    bio: "Gerencia as operações do dia a dia. Resolve problemas operacionais.",
    linkedin: "#",
    years: "9 anos"
  },
  {
    name: "Beatriz Lima",
    role: "Assistente Administrativa",
    department: "Administrativo",
    image: "/images/team-admin.jpg",
    bio: "Organiza documentos. Atende telefonemas. Mantém as coisas em ordem.",
    linkedin: "#",
    years: "2 anos"
  },
  {
    name: "Mariana Souza",
    role: "Analista Financeiro",
    department: "Financeiro",
    image: "/images/testimonial-mariana.jpg",
    bio: "Analisa números. Faz relatórios. Trabalha com planilhas.",
    linkedin: "#",
    years: "3 anos"
  },
  {
    name: "Pedro Almeida",
    role: "Analista de Operações",
    department: "Operações",
    image: "/images/testimonial-pedro.jpg",
    bio: "Cuida de processos operacionais. Faz o que precisa ser feito.",
    linkedin: "#",
    years: "4 anos"
  },
  {
    name: "Camila Rodrigues",
    role: "Assistente Administrativa",
    department: "Administrativo",
    image: "/images/testimonial-camila.jpg",
    bio: "Ajuda na administração. O computador dela fica na mesa dela.",
    linkedin: "#",
    years: "2 anos"
  },
  {
    name: "Rafael Silva",
    role: "Executivo Comercial",
    department: "Comercial",
    image: "/images/testimonial-rafael.jpg",
    bio: "Vende os serviços da empresa. Conversa com clientes. Fecha negócios.",
    linkedin: "#",
    years: "5 anos"
  }
];

const departments = ["Todos", "Diretoria", "Financeiro", "Recursos Humanos", "Tecnologia", "Marketing", "Operações", "Administrativo", "Comercial"];

export default function EquipePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-1 pt-20">
        {/* Hero */}
        <section className="py-24 lg:py-32 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="max-w-3xl">
              <p className="text-[#1e3a5f] font-medium mb-4">Nossa equipe</p>
              <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
                Pessoas que trabalham aqui.
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Cada pessoa tem um nome, um cargo e um trabalho a fazer. 
                Juntas, elas formam a empresa.
              </p>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-12 bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="flex flex-wrap justify-center gap-12 text-center">
              <div>
                <span className="text-4xl font-bold text-[#1e3a5f]">48</span>
                <p className="text-gray-600 text-sm mt-1">Funcionários</p>
              </div>
              <div>
                <span className="text-4xl font-bold text-[#1e3a5f]">8</span>
                <p className="text-gray-600 text-sm mt-1">Departamentos</p>
              </div>
              <div>
                <span className="text-4xl font-bold text-[#1e3a5f]">6.2</span>
                <p className="text-gray-600 text-sm mt-1">Anos médios de casa</p>
              </div>
              <div>
                <span className="text-4xl font-bold text-[#1e3a5f]">34</span>
                <p className="text-gray-600 text-sm mt-1">Idade média</p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Grid */}
        <section className="py-24 lg:py-32">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            {/* Department Filter */}
            <div className="flex flex-wrap gap-2 mb-12 justify-center">
              {departments.map((dept) => (
                <button
                  key={dept}
                  className="px-4 py-2 text-sm rounded-full border border-gray-200 text-gray-600 hover:border-[#1e3a5f] hover:text-[#1e3a5f] transition-colors first:bg-[#1e3a5f] first:text-white first:border-[#1e3a5f]"
                >
                  {dept}
                </button>
              ))}
            </div>
            
            {/* Team Members */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow group"
                >
                  <div className="relative">
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={400}
                      height={400}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 right-4">
                      <a 
                        href={member.linkedin}
                        className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-[#1e3a5f] hover:text-white transition-colors"
                        aria-label="LinkedIn"
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                      </a>
                    </div>
                  </div>
                  <div className="p-6">
                    <span className="text-xs text-[#1e3a5f] font-medium bg-[#1e3a5f]/5 px-2 py-1 rounded">
                      {member.department}
                    </span>
                    <h3 className="text-lg font-bold mt-3">{member.name}</h3>
                    <p className="text-[#1e3a5f] text-sm font-medium">{member.role}</p>
                    <p className="text-gray-600 text-sm mt-3">{member.bio}</p>
                    <p className="text-gray-400 text-xs mt-3">Na empresa há {member.years}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Quote */}
        <section className="py-24 lg:py-32 bg-gray-50">
          <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
            <svg className="w-12 h-12 text-[#1e3a5f]/20 mx-auto mb-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
            </svg>
            <p className="text-3xl md:text-4xl font-bold text-gray-800 leading-tight mb-8">
              "Todo mundo aqui recebeu salário pelo menos uma vez."
            </p>
            <div className="flex items-center justify-center gap-4">
              <Image
                src="/images/team-hr.jpg"
                alt="Juliana Santos"
                width={48}
                height={48}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div className="text-left">
                <p className="font-bold">Juliana Santos</p>
                <p className="text-gray-600 text-sm">Head de RH</p>
              </div>
            </div>
          </div>
        </section>

        {/* Join the team */}
        <section className="py-24 lg:py-32">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="bg-[#1e3a5f] rounded-2xl p-12 lg:p-16 text-center text-white">
              <h2 className="text-4xl font-bold tracking-tight mb-4">
                Quer aparecer nesta página?
              </h2>
              <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
                Se você for contratado, adicionamos sua foto aqui. 
                Com seu nome e cargo. Como todo mundo.
              </p>
              <a 
                href="/vagas"
                className="inline-flex items-center justify-center bg-white text-[#1e3a5f] font-medium px-10 py-4 rounded hover:bg-gray-100 transition-colors"
              >
                Ver vagas abertas
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
