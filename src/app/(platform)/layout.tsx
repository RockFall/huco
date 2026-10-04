import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import Sidebar from "@/components/platform/Sidebar";
import { getCurrentUser } from "@/lib/dal";
import { SESSION_COOKIE } from "@/lib/session";

export default async function PlatformLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = await getCurrentUser();
  if (!user) {
    const token = (await cookies()).get(SESSION_COOKIE)?.value;
    if (token) redirect("/api/auth/logout");
    redirect("/login");
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar name={user.name} email={user.email} />
      <main className="ml-64 min-h-screen">{children}</main>
    </div>
  );
}
