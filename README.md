# Beauty Lead System

Commercial MVP / portfolio demo for a beauty salon, independent beauty master, or small service business.

The project demonstrates a practical lead-capture flow:

```text
Landing page -> lead form -> /api/lead -> Telegram notification -> Google Apps Script -> Google Sheets
```

## Live Demo

- Website: https://beauty-lead-system.vercel.app
- Demo flow: submit the form and check the Telegram / Google Sheets result in screenshots.

## Business Problem

Small beauty businesses often receive leads from ads, landing pages, social media, messengers, and direct messages. Without a simple intake system, a salon owner can miss a new request, reply too late, or lose client details in scattered chats.

The core business problem:

- leads from the website or ads are easy to miss;
- client details are not stored in one place;
- the owner sees requests too late;
- follow-up depends on manual copying between chats and notes.

## Solution

Beauty Lead System turns a simple landing page into a small lead automation flow.

The landing page collects the request, the backend endpoint validates and processes the lead, Telegram notifies the owner, and Google Sheets stores the row for basic tracking.

## How It Works

```text
Visitor -> Lead Form -> /api/lead -> Telegram Notification -> Google Sheets Row
```

1. A visitor opens the landing page.
2. The visitor submits name, phone, service, preferred date/time, and comment.
3. `POST /api/lead` validates the payload with Zod.
4. The server sends a Telegram notification to the owner.
5. The server sends the same lead to Google Apps Script.
6. Google Apps Script writes the lead into Google Sheets.

## Features

- Responsive landing page
- Lead form
- API endpoint
- Telegram notification
- Google Sheets integration through Google Apps Script
- Success/error states
- Environment-based configuration
- Portfolio/demo-ready structure

## User Flow

The website visitor lands on the page, understands the offer, opens the form, fills in contact details and preferred service, submits the request, and sees a clear success or error state.

## Owner Flow

The business owner receives a Telegram message with the lead details, checks the new row in Google Sheets, and contacts the client from the provided phone number. The spreadsheet can be used as a lightweight manual lead tracker with statuses.

## Screenshots

Place final screenshots in `docs/screenshots/`:

- `docs/screenshots/landing-page.png`
- `docs/screenshots/lead-form.png`
- `docs/screenshots/success-state.png`
- `docs/screenshots/telegram-notification.png`
- `docs/screenshots/google-sheets-row.png`

Current status: screenshot placeholders are documented in [docs/screenshots/README.md](docs/screenshots/README.md). Add real screenshots after testing the deployed demo.

## Tech Stack

Checked against `package.json`:

- Next.js
- React
- TypeScript
- Tailwind CSS
- Zod
- ESLint
- Telegram Bot API
- Google Apps Script
- Google Sheets
- Vercel

## Environment Variables

The project uses environment variables for integrations. Never commit real tokens, chat IDs, or webhook URLs.

Use `.env.example` as the public template and create `.env.local` for local development.

| Variable | Required | Used by | Description |
| --- | --- | --- | --- |
| `TELEGRAM_BOT_TOKEN` | Yes | `src/lib/telegram.ts` | Telegram bot token for sending lead notifications. |
| `TELEGRAM_CHAT_ID` | Yes | `src/lib/telegram.ts` | Telegram chat ID that receives lead notifications. |
| `GOOGLE_APPS_SCRIPT_WEBHOOK_URL` | Optional for local UI, required for Sheets sync | `src/lib/googleAppsScript.ts` | Deployed Google Apps Script Web App URL that writes leads to Google Sheets. |

## Local Setup

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open:

```text
http://localhost:3000
```

On Windows PowerShell in this workspace, use:

```bash
npm.cmd run dev
```

## Deployment

The project is ready for Vercel deployment.

Deployment notes:

1. Push the repository to GitHub.
2. Import the project in Vercel.
3. Add environment variables in Vercel Project Settings.
4. Deploy the project.
5. Submit a test lead on the deployed URL.
6. Confirm that Telegram receives the notification.
7. Confirm that Google Sheets receives a new row.
8. Redeploy after changing environment variables.

## Demo Limitations

- This is a portfolio MVP/demo, not a production CRM.
- No production CRM authorization is implemented.
- No anti-spam or captcha is implemented.
- Google Sheets integration depends on a correctly configured Google Apps Script deployment.
- Telegram delivery depends on a valid bot token, chat ID, and server access to Telegram API.
- No payments, user accounts, calendar booking, or admin dashboard are included.

## What Can Be Adapted For Real Business

- Fields in the form
- Business niche
- Notification text
- Google Sheets columns
- CRM integration
- Analytics
- Domain and branding
- Visual style and landing copy
- Lead statuses and follow-up workflow

## Validation Checklist

- [ ] Landing opens
- [ ] Mobile layout works
- [ ] Form validation works
- [ ] Telegram message received
- [ ] Google Sheets row created
- [ ] Error state works
- [ ] Build passes
- [ ] No secrets in repo

## Portfolio Value

This project shows a complete small-business MVP flow: landing page, lead form, backend endpoint, Telegram notification, and Google Sheets automation. It is designed as a practical portfolio case for a digital MVP specialist who builds lightweight automations for real business workflows.
