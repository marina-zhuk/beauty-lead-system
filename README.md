# Beauty Lead System

MVP-система заявок для beauty-бизнеса: лендинг, форма заявки, Telegram-уведомления и Google Sheets.

## Problem

Заявки клиентов часто теряются в переписках, а владелец не видит их в одном месте.

## Solution

Клиент заполняет форму на сайте. Владелец получает заявку в Telegram. Данные сохраняются в Google Sheets.

## How It Works

- пользователь открывает лендинг;
- заполняет форму;
- заявка отправляется в Telegram;
- заявка записывается в Google Sheets.

## Features

- responsive landing page;
- lead form;
- Zod validation;
- Telegram notifications;
- Google Sheets via Apps Script;
- loading / success / error states.

## Stack

- Next.js;
- TypeScript;
- Tailwind CSS;
- Zod;
- Telegram Bot API;
- Google Apps Script;
- Google Sheets;
- Vercel.

## Environment Variables

Create `.env.local` in the project root:

```env
TELEGRAM_BOT_TOKEN=
TELEGRAM_CHAT_ID=
GOOGLE_APPS_SCRIPT_WEBHOOK_URL=
```

Do not commit real tokens, chat IDs, webhook URLs, or personal client data.

## Local Setup

```bash
npm install
npm run dev
```

Open:

```text
http://localhost:3000
```

## Deployment Notes

Deploy the project to Vercel, add all environment variables in Vercel Project Settings, then redeploy the project.

## Future Improvements

- Telegram bot;
- lead statuses;
- auto-reply;
- reminders;
- mini CRM;
- UTM tracking.
