import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { getCurrentUser } from "@/lib/dal";
import CadastroForm from "./cadastro-form";

export const metadata: Metadata = {
  title: "Criar conta — Hu.Co",
  description: "Crie uma conta na Hu.Co para usar o workspace.",
};

export default async function CadastroPage() {
  const user = await getCurrentUser();
  if (user) redirect("/dashboard");
  return <CadastroForm />;
}
