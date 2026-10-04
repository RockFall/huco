import { requireUser } from "@/lib/dal";

export default async function PlatformTemplate({ children }: { children: React.ReactNode }) {
  await requireUser();
  return children;
}
