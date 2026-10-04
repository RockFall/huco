import "server-only";

import { mkdirSync } from "fs";
import path from "path";
import { drizzle as drizzlePglite } from "drizzle-orm/pglite";
import * as schema from "@/db/schema";
import type { AppDatabase } from "@/db/types";
import { ensureSchema } from "@/db/migrate";
import { seedIfEmpty } from "@/db/seed";

const globalForDb = globalThis as unknown as { hucoDb?: Promise<AppDatabase> };

async function createDatabase(): Promise<AppDatabase> {
  const url = process.env.DATABASE_URL?.trim();
  let db: AppDatabase;

  if (url) {
    if (!url.startsWith("postgres://") && !url.startsWith("postgresql://")) {
      throw new Error("DATABASE_URL precisa começar com postgres:// ou postgresql://.");
    }
    const postgres = (await import("postgres")).default;
    const { drizzle } = await import("drizzle-orm/postgres-js");
    const client = postgres(url, { max: 10, prepare: false });
    db = drizzle(client, { schema }) as unknown as AppDatabase;
  } else {
    const { PGlite } = await import("@electric-sql/pglite");
    const dataDir = path.join(process.cwd(), "data", "pglite");
    mkdirSync(dataDir, { recursive: true });
    const client = await PGlite.create(dataDir);
    db = drizzlePglite(client, { schema });
  }

  await ensureSchema(db);
  await seedIfEmpty(db);
  return db;
}

export function getDb() {
  if (!globalForDb.hucoDb) {
    globalForDb.hucoDb = createDatabase().catch((error) => {
      globalForDb.hucoDb = undefined;
      throw error;
    });
  }
  return globalForDb.hucoDb;
}
