import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import VirtualAssistant from "@/components/VirtualAssistant";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Hu.Co — Human Company",
  description: "Aqui você trabalha. E você é pago. Na Hu.Co, pessoas fazem trabalhos e recebem dinheiro por isso.",
  openGraph: {
    title: "Hu.Co — Human Company",
    description: "Aqui você trabalha. E você é pago.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${inter.variable} antialiased`} data-scroll-behavior="smooth">
      <body className="min-h-screen bg-white text-[#0a0a0a]">
        {children}
        <VirtualAssistant />
      </body>
    </html>
  );
}
