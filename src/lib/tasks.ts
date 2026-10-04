export const taskPriorities = ["alta", "média", "baixa"] as const;
export const taskStatuses = ["todo", "doing", "done"] as const;

export type TaskPriority = (typeof taskPriorities)[number];
export type TaskStatus = (typeof taskStatuses)[number];

export type TaskDTO = {
  id: string;
  title: string;
  description: string | null;
  priority: TaskPriority;
  status: TaskStatus;
  dueOn: string | null;
  dueLabel: string;
  labels: string[];
};

export function isTaskPriority(value: string): value is TaskPriority {
  return taskPriorities.includes(value as TaskPriority);
}

export function isTaskStatus(value: string): value is TaskStatus {
  return taskStatuses.includes(value as TaskStatus);
}

export function officeToday(now = new Date()) {
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: "America/Sao_Paulo",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(now);
}

export function addDays(isoDate: string, days: number) {
  const [year, month, day] = isoDate.split("-").map(Number);
  const date = new Date(Date.UTC(year, month - 1, day));
  date.setUTCDate(date.getUTCDate() + days);
  return date.toISOString().slice(0, 10);
}

export function dueLabel(dueOn: string | null, now = new Date()) {
  if (!dueOn) return "Sem prazo";
  const today = officeToday(now);
  if (dueOn === today) return "Hoje";
  if (dueOn === addDays(today, 1)) return "Amanhã";
  if (dueOn === addDays(today, -1)) return "Ontem";
  const [year, month, day] = dueOn.split("-").map(Number);
  return new Date(Date.UTC(year, month - 1, day)).toLocaleDateString("pt-BR", { timeZone: "UTC" });
}

export function readLabels(value: unknown): string[] {
  if (!Array.isArray(value)) return [];
  return value.filter((item): item is string => typeof item === "string");
}
