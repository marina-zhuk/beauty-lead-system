import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Beauty Lead System",
  description: "MVP лендинга и формы заявок для beauty-мастеров.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
