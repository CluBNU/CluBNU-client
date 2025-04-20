import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";

export const metadata: Metadata = {
  title: "CluBNU",
  description: "충북대학교 중앙 동아리 플랫폼",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
  <body>
    <div className="relative max-w-[460px] w-full min-h-[calc(var(--vh,1vh)*100)] bg-white shadow-[0px_0px_20px_0px_#191E2333] mx-auto px-4 py-0">
    <header className="sticky top-0 left-0 z-[10000000] flex flex-row justify-between items-center w-full h-[60px] px-[16px] shadow-[inset_0px_-1px_0px_0px_rgba(255,255,255,0.15)]">
      <Link href={"/"}>CluBNU</Link>
      <Link href={"/signin"}>로그인</Link>
    </header>
      <main className="pt-[10px]">
        {children}
      </main>
    </div>
  </body>
</html>

  );
}
