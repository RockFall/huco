"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import TopBar from "@/components/platform/TopBar";
import { createTask, deleteTask, setTaskStatus } from "@/app/actions/tasks";
import { taskPriorities, taskStatuses, type TaskDTO, type TaskPriority, type TaskStatus } from "@/lib/tasks";

const columns: { id: TaskStatus; title: string; color: string }[] = [
  { id: "todo", title: "A fazer", color: "bg-gray-500" },
  { id: "doing", title: "Em andamento", color: "bg-blue-500" },
  { id: "done", title: "Concluído", color: "bg-green-500" },
];

const priorityLabel: Record<TaskPriority, string> = {
  alta: "Alta",
  média: "Média",
  baixa: "Baixa",
};

const statusLabel: Record<TaskStatus, string> = {
  todo: "A fazer",
  doing: "Em andamento",
  done: "Concluído",
};

function priorityColor(priority: TaskPriority) {
  if (priority === "alta") return "bg-red-100 text-red-700";
  if (priority === "média") return "bg-yellow-100 text-yellow-700";
  return "bg-gray-100 text-gray-600";
}

export default function TaskBoard({ initialTasks }: { initialTasks: TaskDTO[] }) {
  const router = useRouter();
  const [tasks, setTasks] = useState(initialTasks);
  const [view, setView] = useState<"board" | "list">("board");
  const [showNewTask, setShowNewTask] = useState(false);
  const [draftStatus, setDraftStatus] = useState<TaskStatus>("todo");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState<TaskPriority>("média");
  const [dueOn, setDueOn] = useState("");
  const [labels, setLabels] = useState("");
  const [error, setError] = useState("");
  const [saving, setSaving] = useState(false);

  const openNew = (status: TaskStatus = "todo") => {
    setDraftStatus(status);
    setError("");
    setShowNewTask(true);
  };

  const closeNew = () => {
    setShowNewTask(false);
    setTitle("");
    setDescription("");
    setPriority("média");
    setDueOn("");
    setLabels("");
    setError("");
  };

  const changeStatus = async (id: string, status: TaskStatus) => {
    const previous = tasks;
    setTasks((current) => current.map((task) => (task.id === id ? { ...task, status } : task)));
    const result = await setTaskStatus(id, status);
    if (result.error) {
      setTasks(previous);
      return;
    }
    router.refresh();
  };

  const removeTask = async (id: string) => {
    const previous = tasks;
    setTasks((current) => current.filter((task) => task.id !== id));
    const result = await deleteTask(id);
    if (result.error) {
      setTasks(previous);
      return;
    }
    router.refresh();
  };

  const submitTask = async () => {
    setSaving(true);
    setError("");
    const result = await createTask({
      title,
      description,
      priority,
      status: draftStatus,
      dueOn,
      labels: labels
        .split(",")
        .map((label) => label.trim())
        .filter(Boolean),
    });
    setSaving(false);
    if (result.error || !result.task) {
      setError(result.error ?? "Não foi possível criar a tarefa.");
      return;
    }
    setTasks((current) => [result.task!, ...current]);
    closeNew();
    router.refresh();
  };

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <TopBar
        title="Tarefas"
        actions={
          <div className="flex items-center gap-3">
            <div className="flex items-center bg-gray-100 rounded-lg p-1">
              <button
                type="button"
                onClick={() => setView("board")}
                className={`p-2 rounded transition-colors ${view === "board" ? "bg-white shadow-sm" : "text-gray-500 hover:text-gray-700"}`}
                title="Kanban"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
                </svg>
              </button>
              <button
                type="button"
                onClick={() => setView("list")}
                className={`p-2 rounded transition-colors ${view === "list" ? "bg-white shadow-sm" : "text-gray-500 hover:text-gray-700"}`}
                title="Lista"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                </svg>
              </button>
            </div>
            <button
              type="button"
              onClick={() => openNew("todo")}
              className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded text-sm font-medium hover:bg-blue-700 transition-colors"
            >
              Nova tarefa
            </button>
          </div>
        }
      />

      <div className="flex-1 overflow-auto p-6">
        {view === "board" ? (
          <div className="flex gap-6 h-full">
            {columns.map((column) => {
              const columnTasks = tasks.filter((task) => task.status === column.id);
              return (
                <div key={column.id} className="flex-1 min-w-[300px] max-w-[400px] flex flex-col">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <div className={`w-3 h-3 rounded-full ${column.color}`}></div>
                      <h3 className="font-semibold text-gray-700">{column.title}</h3>
                      <span className="text-sm text-gray-400 bg-gray-200 px-2 py-0.5 rounded-full">
                        {columnTasks.length}
                      </span>
                    </div>
                  </div>
                  <div className="flex-1 space-y-3 overflow-y-auto">
                    {columnTasks.map((task) => (
                      <article key={task.id} className="bg-white rounded-lg border border-gray-200 p-4">
                        <div className="flex items-start justify-between mb-2 gap-2">
                          <div className="flex flex-wrap gap-1">
                            {task.labels.map((label) => (
                              <span key={label} className="text-xs bg-blue-50 text-blue-600 px-2 py-0.5 rounded">
                                {label}
                              </span>
                            ))}
                          </div>
                          <button
                            type="button"
                            onClick={() => removeTask(task.id)}
                            className="text-xs text-gray-400 hover:text-red-600"
                          >
                            Excluir
                          </button>
                        </div>
                        <h4 className="font-medium text-gray-900 mb-1">{task.title}</h4>
                        {task.description && <p className="text-sm text-gray-500 mb-3 line-clamp-2">{task.description}</p>}
                        <div className="flex items-center justify-between gap-2 pt-3 border-t border-gray-100">
                          <div className="flex items-center gap-2">
                            <span className={`text-xs px-2 py-0.5 rounded ${priorityColor(task.priority)}`}>
                              {priorityLabel[task.priority]}
                            </span>
                            <span className="text-xs text-gray-400">{task.dueLabel}</span>
                          </div>
                          <select
                            value={task.status}
                            onChange={(event) => changeStatus(task.id, event.target.value as TaskStatus)}
                            className="text-xs border border-gray-200 rounded px-2 py-1 bg-white"
                            aria-label={`Status de ${task.title}`}
                          >
                            {taskStatuses.map((status) => (
                              <option key={status} value={status}>
                                {statusLabel[status]}
                              </option>
                            ))}
                          </select>
                        </div>
                      </article>
                    ))}
                    <button
                      type="button"
                      onClick={() => openNew(column.id)}
                      className="w-full py-3 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg text-sm font-medium transition-colors"
                    >
                      Adicionar tarefa
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200 bg-gray-50">
                  <th className="text-left text-xs font-semibold text-gray-500 uppercase tracking-wider px-6 py-3">Tarefa</th>
                  <th className="text-left text-xs font-semibold text-gray-500 uppercase tracking-wider px-6 py-3 w-24">Prioridade</th>
                  <th className="text-left text-xs font-semibold text-gray-500 uppercase tracking-wider px-6 py-3 w-40">Status</th>
                  <th className="text-left text-xs font-semibold text-gray-500 uppercase tracking-wider px-6 py-3 w-28">Prazo</th>
                  <th className="px-6 py-3 w-20"></th>
                </tr>
              </thead>
              <tbody>
                {tasks.map((task) => (
                  <tr key={task.id} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <p className={`font-medium ${task.status === "done" ? "text-gray-400 line-through" : "text-gray-900"}`}>
                        {task.title}
                      </p>
                      {task.description && <p className="text-sm text-gray-500 mt-0.5">{task.description}</p>}
                    </td>
                    <td className="px-6 py-4">
                      <span className={`text-xs px-2 py-1 rounded ${priorityColor(task.priority)}`}>
                        {priorityLabel[task.priority]}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <select
                        value={task.status}
                        onChange={(event) => changeStatus(task.id, event.target.value as TaskStatus)}
                        className="text-sm border border-gray-200 rounded px-2 py-1 bg-white"
                      >
                        {taskStatuses.map((status) => (
                          <option key={status} value={status}>
                            {statusLabel[status]}
                          </option>
                        ))}
                      </select>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">{task.dueLabel}</td>
                    <td className="px-6 py-4">
                      <button type="button" onClick={() => removeTask(task.id)} className="text-sm text-gray-400 hover:text-red-600">
                        Excluir
                      </button>
                    </td>
                  </tr>
                ))}
                {tasks.length === 0 && (
                  <tr>
                    <td colSpan={5} className="px-6 py-10 text-center text-sm text-gray-500">
                      Nenhuma tarefa ainda.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {showNewTask && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-2xl w-full max-w-lg mx-4">
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
              <h2 className="text-lg font-semibold">Nova tarefa</h2>
              <button type="button" onClick={closeNew} className="text-gray-400 hover:text-gray-600" aria-label="Fechar">
                ×
              </button>
            </div>
            <form
              className="p-6 space-y-4"
              onSubmit={(event) => {
                event.preventDefault();
                void submitTask();
              }}
            >
              <div>
                <label htmlFor="task-title" className="block text-sm font-medium text-gray-700 mb-1">Título</label>
                <input
                  id="task-title"
                  value={title}
                  onChange={(event) => setTitle(event.target.value)}
                  required
                  placeholder="O que precisa ser feito?"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label htmlFor="task-description" className="block text-sm font-medium text-gray-700 mb-1">Descrição</label>
                <textarea
                  id="task-description"
                  value={description}
                  onChange={(event) => setDescription(event.target.value)}
                  rows={3}
                  placeholder="Adicionar detalhes..."
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="task-priority" className="block text-sm font-medium text-gray-700 mb-1">Prioridade</label>
                  <select
                    id="task-priority"
                    value={priority}
                    onChange={(event) => setPriority(event.target.value as TaskPriority)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white"
                  >
                    {taskPriorities.map((item) => (
                      <option key={item} value={item}>{priorityLabel[item]}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="task-due" className="block text-sm font-medium text-gray-700 mb-1">Prazo</label>
                  <input
                    id="task-due"
                    type="date"
                    value={dueOn}
                    onChange={(event) => setDueOn(event.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="task-labels" className="block text-sm font-medium text-gray-700 mb-1">Etiquetas</label>
                <input
                  id="task-labels"
                  value={labels}
                  onChange={(event) => setLabels(event.target.value)}
                  placeholder="Financeiro, Urgente"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                />
              </div>
              {error && <p className="text-sm text-red-600">{error}</p>}
              <div className="flex items-center justify-end gap-3 pt-2">
                <button type="button" onClick={closeNew} className="px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded">
                  Cancelar
                </button>
                <button
                  type="submit"
                  disabled={saving}
                  className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded hover:bg-blue-700 disabled:opacity-50"
                >
                  {saving ? "Salvando..." : "Criar tarefa"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
