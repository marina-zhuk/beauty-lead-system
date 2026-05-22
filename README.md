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

Production URL:

```text
https://beauty-lead-system.vercel.app
```

Deploy from local machine:

```bash
npx vercel deploy --prod
```

Required Vercel production environment variables:

```env
TELEGRAM_BOT_TOKEN=
TELEGRAM_CHAT_ID=
GOOGLE_APPS_SCRIPT_WEBHOOK_URL=
```

After changing environment variables in Vercel, redeploy the project.

Production test:

1. Open `https://beauty-lead-system.vercel.app`.
2. Submit the lead form with test data.
3. Check that the owner receives a Telegram message.
4. Check that the lead appears in Google Sheets.

## Future Improvements

- Telegram bot;
- lead statuses;
- auto-reply;
- reminders;
- mini CRM;
- UTM tracking.
