import './globals.css';

import { Analytics } from '@vercel/analytics/react';
import Logo from '@/components/icons/logo';

export const metadata = {
  title: 'Grimório',
  description:
    'Plataforma que utiliza IA para criar materiais de curso detalhados e cativantes, adaptados as solicitações do usuário.'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className="min-h-screen bg-gradient-to-b from-gray-25 to-gray-50">
        <header className="flex flex-wrap items-center justify-between py-5 px-7">
          <div className="flex items-center gap-x-3">
            <a href="/">
              <Logo />
            </a>
            <span className="px-1.5 py-0.5 text-[10px] uppercase bg-white border rounded-full border-gray-200/75 text-gray-500">
              Acesso antecipado
            </span>
          </div>
          <nav className="hidden text-sm text-center gap-x-1 md:flex">
            <a
              href="https://github.com/patrickgdl"
              className="px-3 py-1.5 text-gray-800 hover:text-gray-9000 hover:bg-alpha-black-50 rounded-xl"
            >
              Fale conosco
            </a>
          </nav>
          <div className="hidden gap-x-2 md:flex">
            <a
              className="px-3 py-[0.45rem] text-sm font-medium text-white bg-gray-900 rounded-xl hover:bg-gray-800 border border-gray-900"
              href="/#waitlist"
            >
              Entrar
            </a>
          </div>
        </header>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
