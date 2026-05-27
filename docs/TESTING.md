# Testing

Use this checklist before publishing the project as a portfolio case or deploying it for a client demo.

## Local Test

1. Install dependencies:

```bash
npm install
```

2. Create local env file:

```bash
cp .env.example .env.local
```

3. Add real local values to `.env.local`.
4. Start the project:

```bash
npm run dev
```

5. Open `http://localhost:3000`.
6. Check that the landing page opens and the mobile layout has no horizontal overflow.
7. Submit an empty form and confirm validation errors.
8. Submit a filled form and confirm success or integration-specific error state.

## Vercel Test

1. Add environment variables in Vercel Project Settings.
2. Deploy the project.
3. Open the deployed URL.
4. Submit a test lead.
5. Confirm the page shows a user-friendly success or error state.
6. Check Vercel Function logs only if the integration does not work.

## Telegram Test

1. Confirm `TELEGRAM_BOT_TOKEN` is set.
2. Confirm `TELEGRAM_CHAT_ID` is set.
3. Submit a test lead through the form.
4. Confirm the owner receives a Telegram message with name, phone, service, date, time, and comment.

Failure cases:

- Missing token or chat ID: the API cannot deliver the Telegram message.
- Invalid token or chat ID: Telegram API returns an error.
- Server network issue: the environment cannot reach `api.telegram.org`.

## Google Sheets Test

1. Confirm `GOOGLE_APPS_SCRIPT_WEBHOOK_URL` is set.
2. Confirm the Google Apps Script Web App is deployed and accessible.
3. Submit a test lead through the form.
4. Confirm a new row appears in Google Sheets.

Failure cases:

- Missing webhook URL: Sheets sync is skipped.
- Wrong deployment URL: webhook request fails.
- Apps Script permissions issue: the script cannot write to the spreadsheet.
- Unexpected Apps Script response: the backend treats the sync as failed.

## Build And Lint

Run:

```bash
npm run build
npm run lint
```

If a `typecheck` script is added later, run it before deployment.

## Publication Check

- No real secrets in `.env.example`, README, docs, screenshots, or source code.
- `.env.local` stays ignored by Git.
- Screenshots do not expose private user or business data.
- README contains live demo URL or a clear placeholder.
