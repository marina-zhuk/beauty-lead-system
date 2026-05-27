import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Beauty Lead System",
  description:
    "Portfolio MVP: landing page, lead form, Telegram notification and Google Sheets storage for beauty businesses.",
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
