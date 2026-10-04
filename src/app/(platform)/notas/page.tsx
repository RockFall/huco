"use client";

import { useState } from "react";
import TopBar from "@/components/platform/TopBar";

const notes = [
  {
    id: 1,
    title: "Ata de Reunião - Daily 04/10",
    preview: "Participantes: Ricardo, Helena, Lucas, Amanda. Pontos discutidos: 1. Status do projeto Alpha...",
    lastModified: "Há 2 horas",
    folder: "Reuniões",
    icon: "📋",
  },
  {
    id: 2,
    title: "Ideias para Campanha Q4",
    preview: "Brainstorm inicial: - Tema: Fim de ano corporativo - Canais: LinkedIn, Email marketing...",
    lastModified: "Ontem",
    folder: "Marketing",
    icon: "💡",
  },
  {
    id: 3,
    title: "Checklist - Onboarding Novo Funcionário",
    preview: "☐ Configurar email corporativo ☐ Acesso aos sistemas ☐ Apresentar equipe ☐ Tour pelo escritório...",
    lastModified: "3 dias atrás",
    folder: "RH",
    icon: "✅",
  },
  {
    id: 4,
    title: "Anotações: Treinamento Sistema Novo",
    preview: "Módulo 1: Visão Geral - O sistema permite gerenciar projetos de forma integrada...",
    lastModified: "1 semana atrás",
    folder: "Treinamentos",
    icon: "📚",
  },
  {
    id: 5,
    title: "Feedback 1:1 - Outubro",
    preview: "Pontos positivos: - Entrega consistente - Boa comunicação com a equipe...",
    lastModified: "1 semana atrás",
    folder: "Pessoal",
    icon: "💬",
  },
];

const folders = [
  { name: "Todas as notas", count: 12, icon: "📄" },
  { name: "Reuniões", count: 5, icon: "📋" },
  { name: "Marketing", count: 2, icon: "💡" },
  { name: "RH", count: 2, icon: "✅" },
  { name: "Treinamentos", count: 1, icon: "📚" },
  { name: "Pessoal", count: 2, icon: "💬" },
];

export default function NotasPage() {
  const [selectedFolder, setSelectedFolder] = useState("Todas as notas");
  const [activeNote, setActiveNote] = useState<number | null>(null);
  const [noteContent, setNoteContent] = useState(`# Ata de Reunião - Daily 04/10

**Data:** 04 de Outubro de 2024
**Horário:** 09:00 - 09:15
**Participantes:** Ricardo, Helena, Lucas, Amanda

---

## Pontos Discutidos

### 1. Status do Projeto Alpha
- Deploy realizado com sucesso ontem
- Feedback inicial dos usuários positivo
- Próximos passos: monitoramento por 1 semana

### 2. Bloqueios
- Nenhum bloqueio reportado

### 3. Prioridades da Semana
- [ ] Finalizar documentação técnica
- [ ] Preparar apresentação para cliente
- [ ] Revisar métricas de performance

---

## Próxima Reunião
**Amanhã, 09:00**

---

*Notas criadas por Você Silva*`);

  if (activeNote !== null) {
    return (
      <div className="flex flex-col h-screen bg-white">
        {/* Note Header */}
        <div className="flex items-center justify-between px-6 py-3 border-b border-gray-200">
          <div className="flex items-center gap-4">
            <button onClick={() => setActiveNote(null)} className="text-gray-500 hover:text-gray-700">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
            </button>
            <div className="flex items-center gap-2">
              <span className="text-2xl">📋</span>
              <input
                type="text"
                defaultValue={notes.find(n => n.id === activeNote)?.title}
                className="font-semibold text-lg border-0 focus:outline-none focus:ring-0"
              />
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-400">Salvo automaticamente</span>
            <button className="flex items-center gap-2 px-3 py-1.5 text-sm text-gray-600 hover:bg-gray-100 rounded transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
              </svg>
              Compartilhar
            </button>
            <button className="p-2 text-gray-500 hover:bg-gray-100 rounded transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
              </svg>
            </button>
          </div>
        </div>

        {/* Toolbar */}
        <div className="flex items-center gap-1 px-6 py-2 border-b border-gray-100 bg-gray-50">
          <button className="p-1.5 text-gray-600 hover:bg-gray-200 rounded text-sm font-bold">H1</button>
          <button className="p-1.5 text-gray-600 hover:bg-gray-200 rounded text-sm font-bold">H2</button>
          <button className="p-1.5 text-gray-600 hover:bg-gray-200 rounded text-sm font-bold">H3</button>
          <div className="w-px h-5 bg-gray-300 mx-1"></div>
          <button className="p-1.5 text-gray-600 hover:bg-gray-200 rounded font-bold">B</button>
          <button className="p-1.5 text-gray-600 hover:bg-gray-200 rounded italic">I</button>
          <button className="p-1.5 text-gray-600 hover:bg-gray-200 rounded underline">U</button>
          <button className="p-1.5 text-gray-600 hover:bg-gray-200 rounded line-through">S</button>
          <div className="w-px h-5 bg-gray-300 mx-1"></div>
          <button className="p-1.5 text-gray-600 hover:bg-gray-200 rounded">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
            </svg>
          </button>
          <button className="p-1.5 text-gray-600 hover:bg-gray-200 rounded">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
            </svg>
          </button>
          <div className="w-px h-5 bg-gray-300 mx-1"></div>
          <button className="p-1.5 text-gray-600 hover:bg-gray-200 rounded">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
            </svg>
          </button>
          <button className="p-1.5 text-gray-600 hover:bg-gray-200 rounded">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </button>
          <button className="p-1.5 text-gray-600 hover:bg-gray-200 rounded">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
          </button>
        </div>

        {/* Editor */}
        <div className="flex-1 overflow-auto">
          <div className="max-w-4xl mx-auto px-6 py-8">
            <textarea
              value={noteContent}
              onChange={(e) => setNoteContent(e.target.value)}
              className="w-full h-full min-h-[600px] text-gray-800 leading-relaxed resize-none focus:outline-none font-mono text-sm"
              placeholder="Comece a escrever..."
            />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-screen">
      <TopBar 
        title="Notas" 
        actions={
          <button
            onClick={() => setActiveNote(1)}
            className="flex items-center gap-2 bg-[#0f0f0f] text-white px-4 py-2 rounded text-sm font-medium hover:bg-gray-800 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            Nova nota
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
                    ? "bg-gray-200 text-gray-900"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                <span>{folder.icon}</span>
                <span className="flex-1 text-sm font-medium">{folder.name}</span>
                <span className="text-xs text-gray-400">{folder.count}</span>
              </button>
            ))}
          </div>

          <div className="p-3 border-t border-gray-200">
            <button className="w-full flex items-center gap-2 px-3 py-2 text-sm text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
              Nova pasta
            </button>
          </div>
        </div>

        {/* Notes List */}
        <div className="flex-1 overflow-auto p-6">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {notes.map((note) => (
              <button
                key={note.id}
                onClick={() => setActiveNote(note.id)}
                className="bg-white rounded-xl border border-gray-200 p-5 text-left hover:shadow-md hover:border-gray-300 transition-all group"
              >
                <div className="flex items-start justify-between mb-3">
                  <span className="text-2xl">{note.icon}</span>
                  <span className="text-xs text-gray-400">{note.lastModified}</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-black">
                  {note.title}
                </h3>
                <p className="text-sm text-gray-500 line-clamp-3">
                  {note.preview}
                </p>
                <div className="mt-4 pt-3 border-t border-gray-100">
                  <span className="text-xs text-gray-400 bg-gray-100 px-2 py-1 rounded">
                    {note.folder}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
