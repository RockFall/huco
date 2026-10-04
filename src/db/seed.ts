import { tasks, users } from "@/db/schema";
import type { AppDatabase } from "@/db/types";
import { demoAccount } from "@/lib/demo-account";
import { hashPassword } from "@/lib/password";
import { addDays, officeToday } from "@/lib/tasks";

function nextWeekday(isoDate: string, weekday: number) {
  const [year, month, day] = isoDate.split("-").map(Number);
  const date = new Date(Date.UTC(year, month - 1, day));
  const delta = (weekday - date.getUTCDay() + 7) % 7;
  return addDays(isoDate, delta);
}

export async function seedIfEmpty(db: AppDatabase) {
  const existing = await db.select({ id: users.id }).from(users).limit(1);
  if (existing.length > 0) return;

  const userId = crypto.randomUUID();
  const today = officeToday();
  const friday = nextWeekday(today, 5);
  const monday = nextWeekday(addDays(today, 1), 1);

  await db.insert(users).values({
    id: userId,
    name: demoAccount.name,
    email: demoAccount.email,
    passwordHash: await hashPassword(demoAccount.password),
  });

  await db.insert(tasks).values([
    {
      id: crypto.randomUUID(),
      userId,
      title: "Finalizar relatório mensal",
      description: "Consolidar dados de outubro e preparar apresentação",
      priority: "alta",
      status: "doing",
      dueOn: today,
      labels: ["Financeiro", "Urgente"],
    },
    {
      id: crypto.randomUUID(),
      userId,
      title: "Revisar proposta comercial",
      description: "Proposta para Cliente X - verificar valores e prazos",
      priority: "média",
      status: "todo",
      dueOn: addDays(today, 1),
      labels: ["Comercial"],
    },
    {
      id: crypto.randomUUID(),
      userId,
      title: "Atualizar planilha de custos",
      description: null,
      priority: "baixa",
      status: "todo",
      dueOn: friday,
      labels: ["Financeiro"],
    },
    {
      id: crypto.randomUUID(),
      userId,
      title: "Responder pesquisa de clima",
      description: null,
      priority: "média",
      status: "todo",
      dueOn: friday,
      labels: ["RH"],
    },
    {
      id: crypto.randomUUID(),
      userId,
      title: "Preparar apresentação Q4",
      description: "Slides para reunião de planejamento",
      priority: "alta",
      status: "todo",
      dueOn: monday,
      labels: ["Planejamento"],
    },
    {
      id: crypto.randomUUID(),
      userId,
      title: "Enviar feedback para equipe",
      description: null,
      priority: "média",
      status: "done",
      dueOn: null,
      labels: ["Gestão"],
    },
    {
      id: crypto.randomUUID(),
      userId,
      title: "Configurar novo projeto no sistema",
      description: null,
      priority: "baixa",
      status: "done",
      dueOn: null,
      labels: ["TI"],
    },
  ]);
}
