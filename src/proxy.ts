import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { decryptSession, SESSION_COOKIE } from "@/lib/session";

const protectedPaths = [
  "/dashboard",
  "/email",
  "/reunioes",
  "/calendario",
  "/chat",
  "/tarefas",
  "/notas",
  "/planilhas",
];

export async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const isProtected = protectedPaths.some((path) => pathname === path || pathname.startsWith(`${path}/`));
  if (!isProtected) return NextResponse.next();

  const session = await decryptSession(request.cookies.get(SESSION_COOKIE)?.value);
  if (!session) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/dashboard/:path*",
    "/email/:path*",
    "/reunioes/:path*",
    "/calendario/:path*",
    "/chat/:path*",
    "/tarefas/:path*",
    "/notas/:path*",
    "/planilhas/:path*",
  ],
};
