import "server-only";

import { cache } from "react";
import { and, asc, desc, eq } from "drizzle-orm";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { getDb } from "@/db";
import { sessions, tasks, users } from "@/db/schema";
import { decryptSession, SESSION_COOKIE } from "@/lib/session";
import { dueLabel, isTaskPriority, isTaskStatus, readLabels, type TaskDTO } from "@/lib/tasks";

export type SessionUser = {
  id: string;
  name: string;
  email: string;
};

export const getCurrentUser = cache(async (): Promise<SessionUser | null> => {
  const token = (await cookies()).get(SESSION_COOKIE)?.value;
  const session = await decryptSession(token);
  if (!session) return null;

  const db = await getDb();
  const rows = await db
    .select({
      id: users.id,
      name: users.name,
      email: users.email,
      expiresAt: sessions.expiresAt,
    })
    .from(sessions)
    .innerJoin(users, eq(users.id, sessions.userId))
    .where(eq(sessions.id, session.sessionId))
    .limit(1);

  const row = rows[0];
  if (!row || row.expiresAt.getTime() <= Date.now() || row.id !== session.userId) return null;
  return { id: row.id, name: row.name, email: row.email };
});

export async function requireUser() {
  const user = await getCurrentUser();
  if (user) return user;

  const token = (await cookies()).get(SESSION_COOKIE)?.value;
  if (token) redirect("/api/auth/logout");
  redirect("/login");
}

function toTask(row: typeof tasks.$inferSelect): TaskDTO | null {
  if (!isTaskPriority(row.priority) || !isTaskStatus(row.status)) return null;
  return {
    id: row.id,
    title: row.title,
    description: row.description,
    priority: row.priority,
    status: row.status,
    dueOn: row.dueOn,
    dueLabel: dueLabel(row.dueOn),
    labels: readLabels(row.labels),
  };
}

export async function getTasks() {
  const user = await requireUser();
  const db = await getDb();
  const rows = await db
    .select()
    .from(tasks)
    .where(and(eq(tasks.userId, user.id)))
    .orderBy(asc(tasks.dueOn), desc(tasks.createdAt));

  return rows.flatMap((row) => {
    const task = toTask(row);
    return task ? [task] : [];
  });
}
