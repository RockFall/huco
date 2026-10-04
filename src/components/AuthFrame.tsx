import Link from "next/link";

export default function AuthFrame({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle: string;
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl font-black tracking-tight">Hu.Co</span>
            <span className="text-xs text-gray-500">Human Company</span>
          </Link>
        </div>
      </header>

      <main className="flex-1 flex items-center justify-center py-12 px-6">
        <div className="w-full max-w-md">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
            <div className="text-center mb-8">
              <h1 className="text-2xl font-bold mb-2">{title}</h1>
              <p className="text-gray-600">{subtitle}</p>
            </div>
            {children}
          </div>
          <p className="text-center text-xs text-gray-500 mt-6">
            Ao continuar, você concorda com nossos{" "}
            <Link href="/termos" className="underline">Termos de Uso</Link> e{" "}
            <Link href="/privacidade" className="underline">Política de Privacidade</Link>.
          </p>
        </div>
      </main>
    </div>
  );
}
