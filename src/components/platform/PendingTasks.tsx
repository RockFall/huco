"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { setTaskStatus } from "@/app/actions/tasks";
import type { TaskDTO, TaskPriority } from "@/lib/tasks";

function priorityColor(priority: TaskPriority) {
  if (priority === "alta") return "bg-red-100 text-red-700";
  if (priority === "média") return "bg-yellow-100 text-yellow-700";
  return "bg-gray-100 text-gray-600";
}

export default function PendingTasks({ tasks }: { tasks: TaskDTO[] }) {
  const router = useRouter();
  const [hidden, setHidden] = useState<string[]>([]);
  const visible = tasks.filter((task) => task.status !== "done" && !hidden.includes(task.id)).slice(0, 4);

  const complete = async (id: string) => {
    setHidden((current) => [...current, id]);
    const result = await setTaskStatus(id, "done");
    if (result.error) {
      setHidden((current) => current.filter((item) => item !== id));
      return;
    }
    router.refresh();
  };

  return (
    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
      <div className="px-5 py-4 border-b border-gray-100 flex items-center justify-between">
        <h3 className="font-semibold text-gray-900">Tarefas pendentes</h3>
        <Link href="/tarefas" className="text-sm text-blue-600 hover:underline">Ver todas</Link>
      </div>
      <div className="divide-y divide-gray-100">
        {visible.length === 0 && (
          <p className="px-5 py-6 text-sm text-gray-500">Nada pendente. O expediente agradece.</p>
        )}
        {visible.map((task) => (
          <div key={task.id} className="px-5 py-3 hover:bg-gray-50 transition-colors">
            <div className="flex items-start gap-3">
              <input
                type="checkbox"
                checked={false}
                onChange={() => void complete(task.id)}
                aria-label={`Concluir ${task.title}`}
                className="mt-1 w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-900">{task.title}</p>
                <div className="flex items-center gap-2 mt-1">
                  <span className={`text-xs px-1.5 py-0.5 rounded ${priorityColor(task.priority)}`}>
                    {task.priority}
                  </span>
                  <span className="text-xs text-gray-400">Prazo: {task.dueLabel}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="px-5 py-3 bg-gray-50 border-t border-gray-100">
        <Link href="/tarefas" className="flex items-center justify-center gap-2 text-sm font-medium text-green-600 hover:text-green-700">
          Nova tarefa
        </Link>
      </div>
    </div>
  );
}
