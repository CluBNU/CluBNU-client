import type { Metadata } from "next";
import "./globals.css";

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
        {children}
      </body>
    </html>
  );
}
