import TopBar from "@/components/platform/TopBar";
import Link from "next/link";

const upcomingMeetings = [
  { id: 1, title: "Daily Standup", time: "09:00", duration: "15 min", attendees: 5 },
  { id: 2, title: "Review de Projeto", time: "11:00", duration: "1 hora", attendees: 3 },
  { id: 3, title: "1:1 com Gestor", time: "14:30", duration: "30 min", attendees: 2 },
];

const recentEmails = [
  { id: 1, from: "Ricardo Mendes", subject: "Re: Atualização do projeto", time: "10:32", unread: true },
  { id: 2, from: "RH Hu.Co", subject: "Lembrete: Avaliação de desempenho", time: "09:15", unread: true },
  { id: 3, from: "Helena Costa", subject: "Documento para revisão", time: "Ontem", unread: false },
  { id: 4, from: "Financeiro", subject: "Comprovante de pagamento", time: "Ontem", unread: false },
];

const pendingTasks = [
  { id: 1, title: "Finalizar relatório mensal", priority: "alta", dueDate: "Hoje" },
  { id: 2, title: "Revisar proposta comercial", priority: "média", dueDate: "Amanhã" },
  { id: 3, title: "Atualizar planilha de custos", priority: "baixa", dueDate: "Sex" },
  { id: 4, title: "Responder pesquisa de clima", priority: "média", dueDate: "Sex" },
];

const quickActions = [
  { name: "Novo Email", href: "/email", icon: "✉️", color: "bg-red-50 text-red-600" },
  { name: "Agendar Reunião", href: "/reunioes", icon: "📹", color: "bg-purple-50 text-purple-600" },
  { name: "Nova Tarefa", href: "/tarefas", icon: "✓", color: "bg-green-50 text-green-600" },
  { name: "Nova Nota", href: "/notas", icon: "📝", color: "bg-yellow-50 text-yellow-600" },
  { name: "Nova Planilha", href: "/planilhas", icon: "📊", color: "bg-blue-50 text-blue-600" },
  { name: "Iniciar Chat", href: "/chat", icon: "💬", color: "bg-indigo-50 text-indigo-600" },
];

export default function DashboardPage() {
  const currentDate = new Date().toLocaleDateString("pt-BR", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="flex flex-col h-screen">
      <TopBar title="Início" />

      <div className="flex-1 overflow-auto p-6">
        {/* Welcome */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900">Bom dia, Você</h2>
          <p className="text-gray-500 capitalize">{currentDate}</p>
        </div>

        {/* Quick Actions */}
        <div className="mb-8">
          <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">Ações rápidas</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {quickActions.map((action) => (
              <Link
                key={action.name}
                href={action.href}
                className="flex flex-col items-center justify-center p-4 bg-white rounded-xl border border-gray-200 hover:shadow-md hover:border-gray-300 transition-all"
              >
                <span className={`w-12 h-12 rounded-full ${action.color} flex items-center justify-center text-xl mb-2`}>
                  {action.icon}
                </span>
                <span className="text-sm font-medium text-gray-700">{action.name}</span>
              </Link>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Upcoming Meetings */}
          <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
            <div className="px-5 py-4 border-b border-gray-100 flex items-center justify-between">
              <h3 className="font-semibold text-gray-900">Reuniões de hoje</h3>
              <Link href="/reunioes" className="text-sm text-blue-600 hover:underline">Ver todas</Link>
            </div>
            <div className="divide-y divide-gray-100">
              {upcomingMeetings.map((meeting) => (
                <div key={meeting.id} className="px-5 py-4 hover:bg-gray-50 transition-colors">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="font-medium text-gray-900">{meeting.title}</p>
                      <p className="text-sm text-gray-500">{meeting.duration} · {meeting.attendees} participantes</p>
                    </div>
                    <span className="text-sm font-medium text-gray-600 bg-gray-100 px-2 py-1 rounded">
                      {meeting.time}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            <div className="px-5 py-3 bg-gray-50 border-t border-gray-100">
              <Link href="/reunioes" className="flex items-center justify-center gap-2 text-sm font-medium text-purple-600 hover:text-purple-700">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
                Entrar na próxima reunião
              </Link>
            </div>
          </div>

          {/* Recent Emails */}
          <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
            <div className="px-5 py-4 border-b border-gray-100 flex items-center justify-between">
              <h3 className="font-semibold text-gray-900">Emails recentes</h3>
              <Link href="/email" className="text-sm text-blue-600 hover:underline">Ver todos</Link>
            </div>
            <div className="divide-y divide-gray-100">
              {recentEmails.map((email) => (
                <div key={email.id} className="px-5 py-3 hover:bg-gray-50 transition-colors cursor-pointer">
                  <div className="flex items-start gap-3">
                    {email.unread && (
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                    )}
                    {!email.unread && <span className="w-2 flex-shrink-0"></span>}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <p className={`text-sm truncate ${email.unread ? "font-semibold text-gray-900" : "text-gray-700"}`}>
                          {email.from}
                        </p>
                        <span className="text-xs text-gray-400 ml-2">{email.time}</span>
                      </div>
                      <p className={`text-sm truncate ${email.unread ? "text-gray-700" : "text-gray-500"}`}>
                        {email.subject}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="px-5 py-3 bg-gray-50 border-t border-gray-100">
              <Link href="/email" className="flex items-center justify-center gap-2 text-sm font-medium text-red-600 hover:text-red-700">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
                Escrever email
              </Link>
            </div>
          </div>

          {/* Pending Tasks */}
          <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
            <div className="px-5 py-4 border-b border-gray-100 flex items-center justify-between">
              <h3 className="font-semibold text-gray-900">Tarefas pendentes</h3>
              <Link href="/tarefas" className="text-sm text-blue-600 hover:underline">Ver todas</Link>
            </div>
            <div className="divide-y divide-gray-100">
              {pendingTasks.map((task) => (
                <div key={task.id} className="px-5 py-3 hover:bg-gray-50 transition-colors">
                  <div className="flex items-start gap-3">
                    <input type="checkbox" className="mt-1 w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-900">{task.title}</p>
                      <div className="flex items-center gap-2 mt-1">
                        <span className={`text-xs px-1.5 py-0.5 rounded ${
                          task.priority === "alta" ? "bg-red-100 text-red-700" :
                          task.priority === "média" ? "bg-yellow-100 text-yellow-700" :
                          "bg-gray-100 text-gray-600"
                        }`}>
                          {task.priority}
                        </span>
                        <span className="text-xs text-gray-400">Prazo: {task.dueDate}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="px-5 py-3 bg-gray-50 border-t border-gray-100">
              <Link href="/tarefas" className="flex items-center justify-center gap-2 text-sm font-medium text-green-600 hover:text-green-700">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
                Nova tarefa
              </Link>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-8 grid grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { label: "Emails não lidos", value: "3", change: "+2 hoje", color: "text-red-600" },
            { label: "Reuniões hoje", value: "3", change: "Próxima às 09:00", color: "text-purple-600" },
            { label: "Tarefas pendentes", value: "4", change: "1 vence hoje", color: "text-yellow-600" },
            { label: "Mensagens não lidas", value: "5", change: "3 de Helena", color: "text-blue-600" },
          ].map((stat, index) => (
            <div key={index} className="bg-white rounded-xl border border-gray-200 p-5">
              <p className="text-sm text-gray-500 mb-1">{stat.label}</p>
              <p className={`text-3xl font-bold ${stat.color}`}>{stat.value}</p>
              <p className="text-xs text-gray-400 mt-1">{stat.change}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
