import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://beauty-lead-system.vercel.app"),
  title: "Система заявок для салона красоты | Beauty Lead System",
  description:
    "Лендинг, форма заявки, Telegram-уведомления и таблица учёта обращений для beauty-бизнеса. Подходит салонам, студиям и частным мастерам.",
  openGraph: {
    type: "website",
    locale: "ru_RU",
    title: "Система заявок для салона красоты | Beauty Lead System",
    description:
      "Клиент оставляет заявку на сайте — владелец сразу видит её в Telegram, контакт сохраняется в таблице.",
    images: [
      {
        url: "/beauty-assets/hero-beauty.png",
        width: 1200,
        height: 630,
        alt: "Beauty Lead System — система заявок для beauty-бизнеса",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Система заявок для салона красоты | Beauty Lead System",
    description:
      "Клиент оставляет заявку на сайте — владелец сразу видит её в Telegram, контакт сохраняется в таблице.",
    images: ["/beauty-assets/hero-beauty.png"],
  },
  icons: {
    icon: "/favicon.svg",
  },
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
