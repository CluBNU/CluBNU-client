import type { Metadata } from 'next';
import './globals.css';
import Link from 'next/link';
import MSWProvider from '@/applications/msw-provider';

export const metadata: Metadata = {
  title: 'CluBNU',
  description: '충북대학교 중앙 동아리 플랫폼',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const isMockingEnabled = process.env.NEXT_PUBLIC_API_MOCKING === 'enabled';

  return (
    <html lang="en">
      <body>
        <div className="relative mx-auto min-h-[calc(var(--vh,1vh)*100)] w-full max-w-[460px] bg-white px-4 py-0 shadow-[0px_0px_20px_0px_#191E2333]">
          <header className="sticky top-0 left-0 z-[10000000] flex h-[60px] w-full flex-row items-center justify-between px-[16px] shadow-[inset_0px_-1px_0px_0px_rgba(255,255,255,0.15)]">
            <Link href={'/'}>CluBNU</Link>
            <Link href={'/signin'}>로그인</Link>
          </header>
          <main className="flex h-[calc(100vh-60px)] flex-grow flex-col items-center justify-center">
            {isMockingEnabled ? <MSWProvider>{children}</MSWProvider> : <>{children}</>}
          </main>
        </div>
      </body>
    </html>
  );
}
