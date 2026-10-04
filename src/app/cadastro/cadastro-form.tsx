"use client";

import { useActionState, useState } from "react";
import Link from "next/link";
import AuthFrame from "@/components/AuthFrame";
import OfficeCaptcha from "@/components/OfficeCaptcha";
import { signup } from "@/app/actions/auth";

export default function CadastroForm() {
  const [state, formAction, pending] = useActionState(signup, undefined);
  const [captchaVerified, setCaptchaVerified] = useState(false);

  return (
    <AuthFrame
      title="Criar conta"
      subtitle="Uma conta por pessoa. A senha fica só no banco, embaralhada."
    >
      <form action={formAction} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            Nome
          </label>
          <input
            id="name"
            name="name"
            autoComplete="name"
            required
            placeholder="Seu nome"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1e3a5f] focus:border-transparent outline-none transition-all"
          />
          {state?.errors?.name && <p className="mt-1 text-sm text-red-600">{state.errors.name[0]}</p>}
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            E-mail
          </label>
          <input
            type="email"
            id="email"
            name="email"
            autoComplete="email"
            required
            placeholder="seu@email.com"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1e3a5f] focus:border-transparent outline-none transition-all"
          />
          {state?.errors?.email && <p className="mt-1 text-sm text-red-600">{state.errors.email[0]}</p>}
        </div>

        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
            Senha
          </label>
          <input
            type="password"
            id="password"
            name="password"
            autoComplete="new-password"
            required
            minLength={8}
            placeholder="Pelo menos 8 caracteres"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1e3a5f] focus:border-transparent outline-none transition-all"
          />
          {state?.errors?.password && <p className="mt-1 text-sm text-red-600">{state.errors.password[0]}</p>}
        </div>

        <div>
          <label htmlFor="passwordConfirm" className="block text-sm font-medium text-gray-700 mb-1">
            Confirmar senha
          </label>
          <input
            type="password"
            id="passwordConfirm"
            name="passwordConfirm"
            autoComplete="new-password"
            required
            minLength={8}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1e3a5f] focus:border-transparent outline-none transition-all"
          />
        </div>

        <OfficeCaptcha verified={captchaVerified} onVerified={() => setCaptchaVerified(true)} />

        {state?.message && <p className="text-sm text-red-600">{state.message}</p>}

        <button
          type="submit"
          disabled={!captchaVerified || pending}
          className={`w-full py-3 rounded-lg font-medium transition-colors ${
            captchaVerified && !pending
              ? "bg-[#1e3a5f] text-white hover:bg-[#152a45]"
              : "bg-gray-200 text-gray-500 cursor-not-allowed"
          }`}
        >
          {pending ? "Criando conta..." : "Criar conta"}
        </button>
      </form>

      <div className="mt-8 pt-6 border-t border-gray-200 text-center">
        <p className="text-gray-600">
          Já trabalha aqui?{" "}
          <Link href="/login" className="text-[#1e3a5f] font-medium hover:underline">
            Entrar
          </Link>
        </p>
      </div>
    </AuthFrame>
  );
}
