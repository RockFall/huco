"use server";

import { and, eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";
import { z } from "zod";
import { getDb } from "@/db";
import { tasks } from "@/db/schema";
import { requireUser } from "@/lib/dal";
import {
  dueLabel,
  isTaskPriority,
  isTaskStatus,
  taskPriorities,
  taskStatuses,
  type TaskDTO,
  type TaskStatus,
} from "@/lib/tasks";

const createTaskSchema = z.object({
  title: z.string().trim().min(1, "Dê um título à tarefa.").max(200),
  description: z.string().trim().max(2000).optional(),
  priority: z.enum(taskPriorities),
  status: z.enum(taskStatuses),
  dueOn: z.string().regex(/^\d{4}-\d{2}-\d{2}$/).optional().or(z.literal("")),
  labels: z.array(z.string().trim().min(1).max(40)).max(8),
});

export type TaskActionResult = {
  error?: string;
  task?: TaskDTO;
};

function refreshTasks() {
  revalidatePath("/tarefas");
  revalidatePath("/dashboard");
}

export async function createTask(input: {
  title: string;
  description?: string;
  priority: string;
  status: string;
  dueOn?: string;
  labels: string[];
}): Promise<TaskActionResult> {
  const user = await requireUser();
  const parsed = createTaskSchema.safeParse(input);
  if (!parsed.success) {
    return { error: parsed.error.issues[0]?.message ?? "Não foi possível criar a tarefa." };
  }

  const id = crypto.randomUUID();
  const dueOn = parsed.data.dueOn ? parsed.data.dueOn : null;
  const description = parsed.data.description ? parsed.data.description : null;
  const db = await getDb();

  await db.insert(tasks).values({
    id,
    userId: user.id,
    title: parsed.data.title,
    description,
    priority: parsed.data.priority,
    status: parsed.data.status,
    dueOn,
    labels: parsed.data.labels,
  });

  refreshTasks();
  return {
    task: {
      id,
      title: parsed.data.title,
      description,
      priority: parsed.data.priority,
      status: parsed.data.status,
      dueOn,
      dueLabel: dueLabel(dueOn),
      labels: parsed.data.labels,
    },
  };
}

export async function setTaskStatus(id: string, status: TaskStatus): Promise<TaskActionResult> {
  const user = await requireUser();
  if (!z.uuid().safeParse(id).success || !isTaskStatus(status)) {
    return { error: "Tarefa inválida." };
  }

  const db = await getDb();
  const updated = await db
    .update(tasks)
    .set({ status, updatedAt: new Date() })
    .where(and(eq(tasks.id, id), eq(tasks.userId, user.id)))
    .returning();

  if (!updated[0] || !isTaskPriority(updated[0].priority)) {
    return { error: "Tarefa não encontrada." };
  }

  refreshTasks();
  return {};
}

export async function deleteTask(id: string): Promise<TaskActionResult> {
  const user = await requireUser();
  if (!z.uuid().safeParse(id).success) return { error: "Tarefa inválida." };

  const db = await getDb();
  const removed = await db
    .delete(tasks)
    .where(and(eq(tasks.id, id), eq(tasks.userId, user.id)))
    .returning({ id: tasks.id });

  if (!removed[0]) return { error: "Tarefa não encontrada." };
  refreshTasks();
  return {};
}
