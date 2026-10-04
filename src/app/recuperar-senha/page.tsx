import type { Metadata } from "next";
import Link from "next/link";
import AuthFrame from "@/components/AuthFrame";

export const metadata: Metadata = {
  title: "Recuperar senha — Hu.Co",
  description: "A Hu.Co ainda não envia e-mail de recuperação de senha.",
};

export default function RecuperarSenhaPage() {
  return (
    <AuthFrame
      title="Esqueci minha senha"
      subtitle="O departamento de RH ainda não contratou o envio de e-mails."
    >
      <p className="text-sm text-gray-600 leading-relaxed">
        A Juliana Santos, do RH, anota senhas em um caderno. Se a sua sumiu, fale com ela.
        Enquanto isso, entre com a conta de demonstração ou crie outra.
      </p>
      <div className="mt-6 flex flex-col gap-3">
        <Link
          href="/login"
          className="w-full py-3 rounded-lg font-medium text-center bg-[#1e3a5f] text-white hover:bg-[#152a45] transition-colors"
        >
          Voltar para entrar
        </Link>
        <Link href="/cadastro" className="text-center text-sm text-[#1e3a5f] font-medium hover:underline">
          Criar outra conta
        </Link>
      </div>
    </AuthFrame>
  );
}
