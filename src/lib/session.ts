import { randomBytes } from "crypto";
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "fs";
import path from "path";
import { SignJWT, jwtVerify } from "jose";

export const SESSION_COOKIE = "session";
export const SESSION_TTL_MS = 14 * 24 * 60 * 60 * 1000;

export type SessionPayload = {
  userId: string;
  sessionId: string;
};

let encodedSecret: Uint8Array | null = null;

function readOrCreateDevSecret() {
  const file = path.join(process.cwd(), "data", "session-secret");
  mkdirSync(path.dirname(file), { recursive: true });

  if (existsSync(file)) {
    const existing = readFileSync(file, "utf8").trim();
    if (existing.length >= 32) return existing;
  }

  const secret = randomBytes(32).toString("base64url");
  try {
    writeFileSync(file, secret, { encoding: "utf8", mode: 0o600, flag: "wx" });
    return secret;
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === "EEXIST") {
      return readFileSync(file, "utf8").trim();
    }
    throw error;
  }
}

export function getSessionSecret() {
  const fromEnv = process.env.SESSION_SECRET?.trim();
  if (fromEnv && fromEnv.length >= 32) return fromEnv;
  if (process.env.NODE_ENV === "production") {
    throw new Error("Defina SESSION_SECRET com pelo menos 32 caracteres.");
  }
  return readOrCreateDevSecret();
}

function getKey() {
  if (!encodedSecret) {
    encodedSecret = new TextEncoder().encode(getSessionSecret());
  }
  return encodedSecret;
}

export async function encryptSession(payload: SessionPayload) {
  return new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("14d")
    .sign(getKey());
}

export async function decryptSession(token: string | undefined | null): Promise<SessionPayload | null> {
  if (!token) return null;

  try {
    const { payload } = await jwtVerify(token, getKey(), { algorithms: ["HS256"] });
    if (typeof payload.userId !== "string" || typeof payload.sessionId !== "string") return null;
    return { userId: payload.userId, sessionId: payload.sessionId };
  } catch {
    return null;
  }
}
