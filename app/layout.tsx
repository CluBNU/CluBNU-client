import type { Metadata } from 'next';
import './globals.css';
import Link from 'next/link';
import MSWProvider from '@/applications/msw-provider';
import { ApolloWrapper } from '@/applications/apollo-wrapper';

export const metadata: Metadata = {
  title: 'CluBNU',
  description: '충북대학교 중앙 동아리 플랫폼',
};

export default function RootLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  const isMockingEnabled = process.env.NEXT_PUBLIC_API_MOCKING === 'enabled';
  return (
    <html lang="en">
      <ApolloWrapper>
        <body>
          <div className="relative mx-auto min-h-[calc(var(--vh,1vh)*100)] w-full bg-white py-0">
            <header className="h-top-navbar sticky top-0 left-0 z-[10000000] flex w-full flex-row items-center justify-between bg-white px-[16px]">
              <Link href={'/'}>CluBNU</Link>
              <Link href={'/signin'}>로그인</Link>
            </header>
            <main>
              {isMockingEnabled ? <MSWProvider>{children}</MSWProvider> : <>{children}</>}
            </main>
          </div>
          {modal}
          <div id="modal-root"></div>
        </body>
      </ApolloWrapper>
    </html>
  );
}
