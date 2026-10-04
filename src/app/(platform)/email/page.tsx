"use client";

import { useState } from "react";
import TopBar from "@/components/platform/TopBar";

const folders = [
  { name: "Caixa de entrada", count: 3, icon: "📥" },
  { name: "Enviados", count: 0, icon: "📤" },
  { name: "Rascunhos", count: 1, icon: "📝" },
  { name: "Importante", count: 0, icon: "⭐" },
  { name: "Spam", count: 12, icon: "🚫" },
  { name: "Lixeira", count: 0, icon: "🗑️" },
];

const emails = [
  {
    id: 1,
    from: "Ricardo Mendes",
    email: "ricardo.mendes@huco.com.br",
    subject: "Re: Atualização do projeto Alpha",
    preview: "Olá! Segue a atualização que você pediu. Os números do último trimestre mostram que estamos...",
    time: "10:32",
    unread: true,
    starred: true,
    hasAttachment: true,
  },
  {
    id: 2,
    from: "RH Hu.Co",
    email: "rh@huco.com.br",
    subject: "Lembrete: Avaliação de desempenho - Prazo amanhã",
    preview: "Prezado(a) colaborador(a), lembramos que o prazo para preenchimento da avaliação de desempenho...",
    time: "09:15",
    unread: true,
    starred: false,
    hasAttachment: false,
  },
  {
    id: 3,
    from: "Helena Costa",
    email: "helena.costa@huco.com.br",
    subject: "Documento para revisão - Proposta comercial Cliente X",
    preview: "Oi! Consegui finalizar a proposta que discutimos na reunião de ontem. Por favor, revise e me...",
    time: "Ontem",
    unread: true,
    starred: false,
    hasAttachment: true,
  },
  {
    id: 4,
    from: "Financeiro",
    email: "financeiro@huco.com.br",
    subject: "Comprovante de pagamento - Outubro/2024",
    preview: "Segue em anexo o comprovante de pagamento referente ao mês de Outubro/2024. Qualquer dúvida...",
    time: "Ontem",
    unread: false,
    starred: false,
    hasAttachment: true,
  },
  {
    id: 5,
    from: "Lucas Ferreira",
    email: "lucas.ferreira@huco.com.br",
    subject: "Deploy realizado com sucesso",
    preview: "Pessoal, informo que o deploy da versão 2.4.1 foi realizado com sucesso no ambiente de produção...",
    time: "Seg",
    unread: false,
    starred: false,
    hasAttachment: false,
  },
  {
    id: 6,
    from: "Sistema de Ponto",
    email: "ponto@huco.com.br",
    subject: "Registro de ponto - Semana 42",
    preview: "Segue o resumo dos seus registros de ponto da semana. Total de horas trabalhadas: 44h...",
    time: "Seg",
    unread: false,
    starred: false,
    hasAttachment: false,
  },
  {
    id: 7,
    from: "Amanda Ribeiro",
    email: "amanda.ribeiro@huco.com.br",
    subject: "Materiais da campanha de fim de ano",
    preview: "Bom dia! Estou enviando os primeiros materiais da campanha de fim de ano para aprovação...",
    time: "Sex",
    unread: false,
    starred: true,
    hasAttachment: true,
  },
];

export default function EmailPage() {
  const [selectedFolder, setSelectedFolder] = useState("Caixa de entrada");
  const [selectedEmails, setSelectedEmails] = useState<number[]>([]);
  const [showCompose, setShowCompose] = useState(false);

  const toggleEmailSelection = (id: number) => {
    setSelectedEmails((prev) =>
      prev.includes(id) ? prev.filter((e) => e !== id) : [...prev, id]
    );
  };

  return (
    <div className="flex flex-col h-screen bg-white">
      <TopBar 
        title="Email" 
        actions={
          <button
            onClick={() => setShowCompose(true)}
            className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-blue-700 transition-colors shadow-md"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            Escrever
          </button>
        }
      />

      <div className="flex flex-1 overflow-hidden">
        {/* Folders Sidebar */}
        <div className="w-56 border-r border-gray-200 bg-gray-50 overflow-y-auto">
          <div className="p-3">
            {folders.map((folder) => (
              <button
                key={folder.name}
                onClick={() => setSelectedFolder(folder.name)}
                className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-left transition-colors ${
                  selectedFolder === folder.name
                    ? "bg-blue-100 text-blue-800"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                <span>{folder.icon}</span>
                <span className="flex-1 text-sm font-medium">{folder.name}</span>
                {folder.count > 0 && (
                  <span className={`text-xs font-semibold ${
                    selectedFolder === folder.name ? "text-blue-600" : "text-gray-400"
                  }`}>
                    {folder.count}
                  </span>
                )}
              </button>
            ))}
          </div>

          <div className="p-3 border-t border-gray-200">
            <p className="text-xs text-gray-400 px-3 mb-2">Marcadores</p>
            {["Trabalho", "Pessoal", "Projetos"].map((label) => (
              <button
                key={label}
                className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-left text-gray-600 hover:bg-gray-100 transition-colors"
              >
                <span className={`w-3 h-3 rounded-full ${
                  label === "Trabalho" ? "bg-blue-500" :
                  label === "Pessoal" ? "bg-green-500" : "bg-purple-500"
                }`}></span>
                <span className="text-sm">{label}</span>
              </button>
            ))}
          </div>

          <div className="p-4 border-t border-gray-200">
            <div className="bg-gray-100 rounded-lg p-3">
              <p className="text-xs text-gray-500 mb-1">Armazenamento</p>
              <div className="w-full h-1.5 bg-gray-200 rounded-full overflow-hidden">
                <div className="w-1/3 h-full bg-blue-500 rounded-full"></div>
              </div>
              <p className="text-xs text-gray-400 mt-1">2.4 GB de 15 GB</p>
            </div>
          </div>
        </div>

        {/* Email List */}
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* Toolbar */}
          <div className="flex items-center gap-2 px-4 py-2 border-b border-gray-200 bg-white">
            <input
              type="checkbox"
              className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              onChange={(e) => {
                if (e.target.checked) {
                  setSelectedEmails(emails.map((e) => e.id));
                } else {
                  setSelectedEmails([]);
                }
              }}
            />
            <button className="p-2 text-gray-500 hover:bg-gray-100 rounded-full transition-colors" title="Atualizar">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
            </button>
            <button className="p-2 text-gray-500 hover:bg-gray-100 rounded-full transition-colors" title="Arquivar">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
              </svg>
            </button>
            <button className="p-2 text-gray-500 hover:bg-gray-100 rounded-full transition-colors" title="Spam">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </button>
            <button className="p-2 text-gray-500 hover:bg-gray-100 rounded-full transition-colors" title="Excluir">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
            </button>
            <div className="w-px h-5 bg-gray-200 mx-2"></div>
            <button className="p-2 text-gray-500 hover:bg-gray-100 rounded-full transition-colors" title="Marcar como lido">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </button>
            <span className="flex-1"></span>
            <span className="text-sm text-gray-500">1-{emails.length} de {emails.length}</span>
            <button className="p-2 text-gray-400 hover:bg-gray-100 rounded-full transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button className="p-2 text-gray-400 hover:bg-gray-100 rounded-full transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Email List */}
          <div className="flex-1 overflow-y-auto">
            {emails.map((email) => (
              <div
                key={email.id}
                className={`flex items-center gap-3 px-4 py-3 border-b border-gray-100 cursor-pointer transition-colors ${
                  email.unread ? "bg-white font-semibold" : "bg-gray-50"
                } hover:shadow-inner hover:bg-gray-100`}
              >
                <input
                  type="checkbox"
                  checked={selectedEmails.includes(email.id)}
                  onChange={() => toggleEmailSelection(email.id)}
                  className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <button className={`text-lg ${email.starred ? "text-yellow-400" : "text-gray-300 hover:text-yellow-400"}`}>
                  ★
                </button>
                <div className="w-48 flex-shrink-0">
                  <p className={`text-sm truncate ${email.unread ? "font-semibold text-gray-900" : "text-gray-700"}`}>
                    {email.from}
                  </p>
                </div>
                <div className="flex-1 min-w-0 flex items-center gap-2">
                  <p className={`text-sm truncate ${email.unread ? "text-gray-900" : "text-gray-600"}`}>
                    {email.subject}
                  </p>
                  <span className="text-gray-400">—</span>
                  <p className="text-sm text-gray-400 truncate flex-1">{email.preview}</p>
                </div>
                {email.hasAttachment && (
                  <svg className="w-4 h-4 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                  </svg>
                )}
                <span className={`text-xs flex-shrink-0 ${email.unread ? "text-gray-900 font-semibold" : "text-gray-400"}`}>
                  {email.time}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Compose Modal */}
      {showCompose && (
        <div className="fixed bottom-0 right-6 w-[560px] bg-white rounded-t-xl shadow-2xl border border-gray-200 z-50">
          <div className="flex items-center justify-between px-4 py-3 bg-gray-800 text-white rounded-t-xl">
            <span className="font-medium">Nova mensagem</span>
            <div className="flex items-center gap-1">
              <button className="p-1 hover:bg-gray-700 rounded transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                </svg>
              </button>
              <button className="p-1 hover:bg-gray-700 rounded transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                </svg>
              </button>
              <button onClick={() => setShowCompose(false)} className="p-1 hover:bg-gray-700 rounded transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
          <div className="p-4 space-y-3">
            <div className="flex items-center border-b border-gray-200 pb-2">
              <span className="text-sm text-gray-500 w-16">Para</span>
              <input type="text" className="flex-1 text-sm outline-none" placeholder="destinatarios@email.com" />
            </div>
            <div className="flex items-center border-b border-gray-200 pb-2">
              <span className="text-sm text-gray-500 w-16">Assunto</span>
              <input type="text" className="flex-1 text-sm outline-none" />
            </div>
            <textarea
              className="w-full h-64 text-sm outline-none resize-none"
              placeholder="Escreva sua mensagem..."
            ></textarea>
          </div>
          <div className="flex items-center justify-between px-4 py-3 border-t border-gray-200">
            <div className="flex items-center gap-2">
              <button className="bg-blue-600 text-white px-6 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors">
                Enviar
              </button>
              <button className="p-2 text-gray-500 hover:bg-gray-100 rounded-full transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                </svg>
              </button>
              <button className="p-2 text-gray-500 hover:bg-gray-100 rounded-full transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </button>
            </div>
            <button className="p-2 text-gray-500 hover:bg-gray-100 rounded-full transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
