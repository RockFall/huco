"use client";

import { useState } from "react";
import TopBar from "@/components/platform/TopBar";

interface Task {
  id: number;
  title: string;
  description?: string;
  priority: "alta" | "média" | "baixa";
  dueDate: string;
  status: "todo" | "doing" | "done";
  assignee?: string;
  labels: string[];
}

const initialTasks: Task[] = [
  {
    id: 1,
    title: "Finalizar relatório mensal",
    description: "Consolidar dados de outubro e preparar apresentação",
    priority: "alta",
    dueDate: "Hoje",
    status: "doing",
    assignee: "Você",
    labels: ["Financeiro", "Urgente"],
  },
  {
    id: 2,
    title: "Revisar proposta comercial",
    description: "Proposta para Cliente X - verificar valores e prazos",
    priority: "média",
    dueDate: "Amanhã",
    status: "todo",
    assignee: "Você",
    labels: ["Comercial"],
  },
  {
    id: 3,
    title: "Atualizar planilha de custos",
    priority: "baixa",
    dueDate: "Sex",
    status: "todo",
    labels: ["Financeiro"],
  },
  {
    id: 4,
    title: "Responder pesquisa de clima",
    priority: "média",
    dueDate: "Sex",
    status: "todo",
    labels: ["RH"],
  },
  {
    id: 5,
    title: "Preparar apresentação Q4",
    description: "Slides para reunião de planejamento",
    priority: "alta",
    dueDate: "Seg",
    status: "todo",
    assignee: "Você",
    labels: ["Planejamento"],
  },
  {
    id: 6,
    title: "Enviar feedback para equipe",
    priority: "média",
    dueDate: "Concluído",
    status: "done",
    labels: ["Gestão"],
  },
  {
    id: 7,
    title: "Configurar novo projeto no sistema",
    priority: "baixa",
    dueDate: "Concluído",
    status: "done",
    labels: ["TI"],
  },
];

const columns = [
  { id: "todo", title: "A fazer", color: "bg-gray-500" },
  { id: "doing", title: "Em andamento", color: "bg-blue-500" },
  { id: "done", title: "Concluído", color: "bg-green-500" },
];

export default function TarefasPage() {
  const [tasks, setTasks] = useState(initialTasks);
  const [view, setView] = useState<"board" | "list">("board");
  const [showNewTask, setShowNewTask] = useState(false);

  const getTasksByStatus = (status: string) => tasks.filter(t => t.status === status);

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "alta": return "bg-red-100 text-red-700";
      case "média": return "bg-yellow-100 text-yellow-700";
      default: return "bg-gray-100 text-gray-600";
    }
  };

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <TopBar 
        title="Tarefas"
        actions={
          <div className="flex items-center gap-3">
            <div className="flex items-center bg-gray-100 rounded-lg p-1">
              <button
                onClick={() => setView("board")}
                className={`p-2 rounded transition-colors ${
                  view === "board" ? "bg-white shadow-sm" : "text-gray-500 hover:text-gray-700"
                }`}
                title="Kanban"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
                </svg>
              </button>
              <button
                onClick={() => setView("list")}
                className={`p-2 rounded transition-colors ${
                  view === "list" ? "bg-white shadow-sm" : "text-gray-500 hover:text-gray-700"
                }`}
                title="Lista"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                </svg>
              </button>
            </div>
            <button
              onClick={() => setShowNewTask(true)}
              className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded text-sm font-medium hover:bg-blue-700 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
              Nova tarefa
            </button>
          </div>
        }
      />

      <div className="flex-1 overflow-auto p-6">
        {view === "board" ? (
          <div className="flex gap-6 h-full">
            {columns.map((column) => (
              <div key={column.id} className="flex-1 min-w-[300px] max-w-[400px] flex flex-col">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <div className={`w-3 h-3 rounded-full ${column.color}`}></div>
                    <h3 className="font-semibold text-gray-700">{column.title}</h3>
                    <span className="text-sm text-gray-400 bg-gray-200 px-2 py-0.5 rounded-full">
                      {getTasksByStatus(column.id).length}
                    </span>
                  </div>
                  <button className="p-1 text-gray-400 hover:text-gray-600 hover:bg-gray-200 rounded">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                  </button>
                </div>

                <div className="flex-1 space-y-3 overflow-y-auto">
                  {getTasksByStatus(column.id).map((task) => (
                    <div
                      key={task.id}
                      className="bg-white rounded-lg border border-gray-200 p-4 cursor-pointer hover:shadow-md transition-all group"
                    >
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex flex-wrap gap-1">
                          {task.labels.map((label) => (
                            <span key={label} className="text-xs bg-blue-50 text-blue-600 px-2 py-0.5 rounded">
                              {label}
                            </span>
                          ))}
                        </div>
                        <button className="p-1 text-gray-400 opacity-0 group-hover:opacity-100 hover:text-gray-600 transition-all">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                          </svg>
                        </button>
                      </div>

                      <h4 className="font-medium text-gray-900 mb-1">{task.title}</h4>
                      {task.description && (
                        <p className="text-sm text-gray-500 mb-3 line-clamp-2">{task.description}</p>
                      )}

                      <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                        <div className="flex items-center gap-2">
                          <span className={`text-xs px-2 py-0.5 rounded ${getPriorityColor(task.priority)}`}>
                            {task.priority}
                          </span>
                          <span className="text-xs text-gray-400">{task.dueDate}</span>
                        </div>
                        {task.assignee && (
                          <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white text-xs font-semibold">
                            {task.assignee[0]}
                          </div>
                        )}
                      </div>
                    </div>
                  ))}

                  <button className="w-full py-3 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg text-sm font-medium transition-colors flex items-center justify-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                    Adicionar tarefa
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200 bg-gray-50">
                  <th className="text-left text-xs font-semibold text-gray-500 uppercase tracking-wider px-6 py-3 w-8">
                    <input type="checkbox" className="w-4 h-4 rounded border-gray-300" />
                  </th>
                  <th className="text-left text-xs font-semibold text-gray-500 uppercase tracking-wider px-6 py-3">Tarefa</th>
                  <th className="text-left text-xs font-semibold text-gray-500 uppercase tracking-wider px-6 py-3 w-24">Prioridade</th>
                  <th className="text-left text-xs font-semibold text-gray-500 uppercase tracking-wider px-6 py-3 w-32">Status</th>
                  <th className="text-left text-xs font-semibold text-gray-500 uppercase tracking-wider px-6 py-3 w-24">Prazo</th>
                  <th className="text-left text-xs font-semibold text-gray-500 uppercase tracking-wider px-6 py-3 w-20"></th>
                </tr>
              </thead>
              <tbody>
                {tasks.map((task) => (
                  <tr key={task.id} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4">
                      <input
                        type="checkbox"
                        checked={task.status === "done"}
                        className="w-4 h-4 rounded border-gray-300"
                        readOnly
                      />
                    </td>
                    <td className="px-6 py-4">
                      <p className={`font-medium ${task.status === "done" ? "text-gray-400 line-through" : "text-gray-900"}`}>
                        {task.title}
                      </p>
                      {task.description && (
                        <p className="text-sm text-gray-500 mt-0.5">{task.description}</p>
                      )}
                    </td>
                    <td className="px-6 py-4">
                      <span className={`text-xs px-2 py-1 rounded ${getPriorityColor(task.priority)}`}>
                        {task.priority}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <select
                        value={task.status}
                        className="text-sm border border-gray-200 rounded px-2 py-1 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        <option value="todo">A fazer</option>
                        <option value="doing">Em andamento</option>
                        <option value="done">Concluído</option>
                      </select>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">{task.dueDate}</td>
                    <td className="px-6 py-4">
                      <button className="p-1 text-gray-400 hover:text-gray-600 rounded hover:bg-gray-100">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                        </svg>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* New Task Modal */}
      {showNewTask && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-2xl w-full max-w-lg mx-4">
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
              <h2 className="text-lg font-semibold">Nova tarefa</h2>
              <button onClick={() => setShowNewTask(false)} className="text-gray-400 hover:text-gray-600">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Título</label>
                <input
                  type="text"
                  placeholder="O que precisa ser feito?"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Descrição</label>
                <textarea
                  rows={3}
                  placeholder="Adicionar detalhes..."
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                ></textarea>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Prioridade</label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white">
                    <option>Baixa</option>
                    <option>Média</option>
                    <option>Alta</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Prazo</label>
                  <input
                    type="date"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Responsável</label>
                <input
                  type="text"
                  placeholder="Atribuir a..."
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
            <div className="flex items-center justify-end gap-3 px-6 py-4 border-t border-gray-200 bg-gray-50">
              <button onClick={() => setShowNewTask(false)} className="px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded transition-colors">
                Cancelar
              </button>
              <button className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded hover:bg-blue-700 transition-colors">
                Criar tarefa
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
