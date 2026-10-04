"use server";

import { eq } from "drizzle-orm";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { z } from "zod";
import { getDb } from "@/db";
import { sessions, tasks, users } from "@/db/schema";
import type { AuthFormState } from "@/lib/auth-form";
import { decryptSession, encryptSession, SESSION_COOKIE, SESSION_TTL_MS } from "@/lib/session";
import { hashPassword, verifyPassword } from "@/lib/password";
import { officeToday } from "@/lib/tasks";

const emailSchema = z.string().trim().toLowerCase().pipe(z.email("Informe um e-mail válido."));

const loginSchema = z.object({
  email: emailSchema,
  password: z.string().min(1, "Informe a senha.").max(200),
});

const signupSchema = z.object({
  name: z.string().trim().min(2, "O nome precisa ter pelo menos 2 caracteres.").max(80),
  email: emailSchema,
  password: z
    .string()
    .min(8, "A senha precisa ter pelo menos 8 caracteres.")
    .max(200, "A senha está longa demais."),
});

const DUMMY_HASH = `${"a".repeat(32)}:${"b".repeat(128)}`;

function fieldErrors(error: z.ZodError): AuthFormState["errors"] {
  const errors: AuthFormState["errors"] = {};
  for (const issue of error.issues) {
    const key = issue.path[0];
    if (key !== "name" && key !== "email" && key !== "password") continue;
    errors[key] = [...(errors[key] ?? []), issue.message];
  }
  return errors;
}

function isUniqueViolation(error: unknown) {
  const seen = new Set<unknown>();
  let current: unknown = error;
  while (current && typeof current === "object" && !seen.has(current)) {
    seen.add(current);
    if ("code" in current && (current as { code?: string }).code === "23505") return true;
    current = (current as { cause?: unknown }).cause;
  }
  return false;
}

async function createSession(userId: string) {
  const sessionId = crypto.randomUUID();
  const expiresAt = new Date(Date.now() + SESSION_TTL_MS);
  const db = await getDb();
  await db.insert(sessions).values({ id: sessionId, userId, expiresAt });

  const token = await encryptSession({ userId, sessionId });
  const jar = await cookies();
  jar.set(SESSION_COOKIE, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    expires: expiresAt,
    path: "/",
  });
}

export async function destroySession() {
  const jar = await cookies();
  const token = jar.get(SESSION_COOKIE)?.value;
  const session = await decryptSession(token);

  if (session) {
    const db = await getDb();
    await db.delete(sessions).where(eq(sessions.id, session.sessionId));
  }

  jar.delete(SESSION_COOKIE);
}

export async function login(_state: AuthFormState | undefined, formData: FormData): Promise<AuthFormState> {
  const parsed = loginSchema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (!parsed.success) {
    return { errors: fieldErrors(parsed.error), message: "Confira e-mail e senha." };
  }

  const db = await getDb();
  const rows = await db
    .select({ id: users.id, passwordHash: users.passwordHash })
    .from(users)
    .where(eq(users.email, parsed.data.email))
    .limit(1);
  const user = rows[0];
  const valid = await verifyPassword(parsed.data.password, user?.passwordHash ?? DUMMY_HASH);

  if (!user || !valid) {
    return { message: "E-mail ou senha incorretos." };
  }

  await createSession(user.id);
  redirect("/dashboard");
}

export async function signup(_state: AuthFormState | undefined, formData: FormData): Promise<AuthFormState> {
  const password = formData.get("password");
  const confirmation = formData.get("passwordConfirm");
  if (password !== confirmation) {
    return { errors: { password: ["As senhas não coincidem."] } };
  }

  const parsed = signupSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    password,
  });

  if (!parsed.success) {
    return { errors: fieldErrors(parsed.error), message: "Confira os dados da conta." };
  }

  const db = await getDb();
  const userId = crypto.randomUUID();

  try {
    await db.insert(users).values({
      id: userId,
      name: parsed.data.name,
      email: parsed.data.email,
      passwordHash: await hashPassword(parsed.data.password),
    });
    await db.insert(tasks).values({
      id: crypto.randomUUID(),
      userId,
      title: "Conhecer o workspace da Hu.Co",
      description: "Suas tarefas ficam salvas na sua conta. O restante do escritório ainda está sendo mobiliado.",
      priority: "média",
      status: "todo",
      dueOn: officeToday(),
      labels: ["Começo"],
    });
  } catch (error) {
    if (isUniqueViolation(error)) {
      return { errors: { email: ["Já existe uma conta com esse e-mail."] } };
    }
    throw error;
  }

  await createSession(userId);
  redirect("/dashboard");
}

export async function logout() {
  await destroySession();
  redirect("/login");
}
