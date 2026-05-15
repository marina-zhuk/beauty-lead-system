# Beauty Booking System

Портфолио-MVP digital-услуги для владельцев beauty-бизнеса: лендинг, demo-форма заявки и Telegram-уведомления.

Главная идея: клиент оставляет заявку на сайте, а владелец сразу получает ее в Telegram.

## Текущая версия

- Next.js App Router;
- TypeScript;
- Tailwind CSS;
- Zod-валидация;
- лендинг для продажи мини-системы заявок владельцам beauty-бизнеса;
- demo-форма заявки;
- API route `POST /api/lead`;
- Telegram-уведомление владельцу после успешной валидации заявки;
- состояния формы: idle, loading, success, error;
- `.env.local.example`.

API валидирует данные, отправляет Telegram-уведомление и возвращает `success/error`.
Google Sheets пока не подключен, переменная под Apps Script оставлена для следующего этапа.

## Документация

Проектная документация лежит в [docs](docs/README.md):

- [идея и аудитория](docs/project-brief.md);
- [состав MVP](docs/mvp-scope.md);
- [запуск проекта](docs/setup.md);
- [API формы](docs/api.md);
- [интеграции](docs/integrations.md).

## Быстрый запуск

```bash
npm install
npm run dev
```

Если PowerShell блокирует `npm`, используйте:

```bash
npm.cmd install
npm.cmd run dev
```

Откройте `http://localhost:3000`.

## Как получить TELEGRAM_BOT_TOKEN

1. Откройте Telegram.
2. Найдите `@BotFather`.
3. Отправьте команду `/newbot`.
4. Задайте имя и username бота.
5. BotFather выдаст токен. Его нужно положить в `.env.local`, а не в код.

Если токен был отправлен в публичное место или чат, перевыпустите его через BotFather.

## Как получить TELEGRAM_CHAT_ID

1. Напишите любое сообщение своему боту в Telegram.
2. Откройте в браузере:

```text
https://api.telegram.org/bot<TELEGRAM_BOT_TOKEN>/getUpdates
```

3. Найдите в ответе поле `chat.id`.
4. Используйте это значение как `TELEGRAM_CHAT_ID`.

## .env.local

Создайте файл `.env.local` в корне проекта:

```env
TELEGRAM_BOT_TOKEN=
TELEGRAM_CHAT_ID=
GOOGLE_APPS_SCRIPT_WEBHOOK_URL=
```

`GOOGLE_APPS_SCRIPT_WEBHOOK_URL` сейчас не обязателен. Если он пустой, проект работает через Telegram.

`.env.local` закрыт в `.gitignore` правилом `.env*.local`.

## Проверка

```bash
npm run build
```

Форму можно проверить на главной странице: пустая форма должна показать ошибки, заполненная форма с настроенным Telegram должна отправить уведомление и показать success-сообщение.

Telegram test endpoint:

```text
GET /api/telegram-test
```
