# Beauty Lead System

## Краткое описание

Beauty Lead System - это portfolio MVP для beauty-бизнеса: адаптивный лендинг, форма заявки, backend endpoint и интеграции для передачи лида владельцу.

Проект показывает реальный рабочий сценарий:

```text
Landing page -> lead form -> /api/lead -> Telegram + Google Apps Script -> Google Sheets
```

## Какую проблему решает

У мастеров и небольших салонов заявки часто теряются в личных сообщениях, Direct, WhatsApp или Telegram. Владелец может не увидеть новый запрос, забыть ответить клиенту или потерять данные заявки.

Этот MVP показывает простой поток: клиент оставляет заявку на сайте, владелец получает уведомление в Telegram, а данные заявки сохраняются в Google Sheets для базового учета.

## Как работает

1. Клиент открывает лендинг.
2. Заполняет форму заявки: имя, телефон, услуга, желаемая дата, время и комментарий.
3. Frontend проверяет обязательные поля.
4. Форма отправляет данные в API endpoint `/api/lead`.
5. Backend валидирует данные и формирует заявку.
6. Заявка отправляется владельцу в Telegram.
7. Эти же данные передаются через Google Apps Script.
8. Google Apps Script добавляет строку в Google Sheets.

## Features

- Responsive landing page
- Lead form
- Frontend validation
- API endpoint `/api/lead`
- Telegram notification
- Google Apps Script integration
- Google Sheets lead storage
- Vercel deployment
- Environment variables for secrets

## Tech Stack

- Next.js App Router
- TypeScript
- React
- Tailwind CSS
- Zod
- Next.js API Route
- Telegram Bot API
- Google Apps Script
- Google Sheets
- Vercel

## Environment Variables

Переменные окружения нужны для хранения токенов и ключей вне кода. Реальные значения нельзя добавлять в README, GitHub или публичные файлы.

Названия переменных:

```env
TELEGRAM_BOT_TOKEN=
TELEGRAM_CHAT_ID=
GOOGLE_SHEETS_SPREADSHEET_ID=
GOOGLE_SHEETS_CLIENT_EMAIL=
GOOGLE_SHEETS_PRIVATE_KEY=
```

## Локальный запуск

Установить зависимости:

```bash
npm install
```

Создать `.env.local` в корне проекта и добавить переменные окружения.

Запустить проект:

```bash
npm run dev
```

Открыть в браузере:

```text
http://localhost:3000
```

Проверка локально:

1. Открыть главную страницу.
2. Заполнить форму заявки тестовыми данными.
3. Проверить success/error состояние формы.
4. Проверить Telegram-уведомление.
5. Проверить новую строку в Google Sheets.

## Deployment

Проект подготовлен для деплоя на Vercel.

Базовые шаги:

1. Загрузить проект на GitHub.
2. Импортировать репозиторий в Vercel.
3. Добавить environment variables в настройках Vercel.
4. Запустить deploy.
5. После изменения env variables выполнить redeploy.

Команда для production deploy через Vercel CLI:

```bash
npx vercel deploy --prod
```

## Portfolio Note

Это portfolio MVP, а не production-ready CRM. Проект демонстрирует коммерчески полезный flow для малого beauty-бизнеса: лендинг собирает заявку, backend обрабатывает данные, Telegram помогает быстро увидеть лид, а Google Sheets подходит для простого учета.

В проекте не реализованы оплата, личный кабинет, календарное бронирование и полноценная CRM-система.

## Что можно улучшить позже

- Реальные screenshots Telegram и Google Sheets в proof-секции
- Админ-панель для просмотра заявок
- Фильтры по статусам заявок
- UTM tracking
- Telegram bot commands
- Автоответ клиенту
- Напоминания владельцу
- Более подробная обработка ошибок интеграций
