# API

## Endpoint

```http
POST /api/lead
```

## Назначение

API route принимает данные формы заявки, валидирует их через Zod, сохраняет заявку в Google Sheets через Google Apps Script, отправляет Telegram-уведомление владельцу и возвращает результат.

Google Cloud и Google Sheets API в текущем MVP не используются.

## Request body

```json
{
  "name": "Анна",
  "phone": "<client phone>",
  "service": "Маникюр",
  "preferredDate": "2026-05-20",
  "preferredTime": "14:30",
  "comment": "Хочу вечернее время"
}
```

## Обязательные поля

- `name`;
- `phone`;
- `service`.

## Необязательные поля

- `preferredDate`;
- `preferredTime`;
- `comment`.

`preferredDate` должна быть в формате `YYYY-MM-DD` и не раньше сегодняшней даты.

## Telegram-сообщение

После успешной валидации API отправляет владельцу сообщение:

```text
Новая заявка с сайта:
Имя: Анна
Телефон: <client phone>
Услуга: Маникюр
Дата: 2026-05-20
Время: 14:30
Комментарий: Хочу вечернее время
Источник: website
Время создания: 2026-05-13T00:00:00.000Z
```

Если Telegram API возвращает ошибку, пользователь видит безопасное сообщение без технических деталей, а проблема логируется без токена.

## Успешный ответ

```json
{
  "success": true,
  "message": "Заявка отправлена в Telegram и сохранена в Google Sheets.",
  "telegramDelivered": true,
  "googleSheetsSynced": true,
  "lead": {
    "name": "Анна",
    "phone": "<client phone>",
    "service": "Маникюр",
    "preferredDate": "2026-05-20",
    "preferredTime": "14:30",
    "comment": "Хочу вечернее время",
    "createdAt": "2026-05-13T00:00:00.000Z",
    "source": "website",
    "status": "new"
  }
}
```

Для рабочего MVP `GOOGLE_APPS_SCRIPT_WEBHOOK_URL` должен быть задан. Если переменную удалить в локальной среде, `googleSheetsSynced` будет `false`.

## Частичный успех

Если Google Sheets сохранил заявку, но Telegram недоступен, API возвращает `202`:

```json
{
  "success": true,
  "message": "Заявка сохранена, но Telegram сейчас недоступен. Проверьте доступ к api.telegram.org или настройки бота.",
  "telegramDelivered": false
}
```

Если Telegram отправлен, но Google Sheets не сохранил заявку, API тоже возвращает `202`:

```json
{
  "success": true,
  "message": "Заявка отправлена в Telegram, но не сохранилась в Google Sheets. Проверьте Web App URL и deploy Apps Script.",
  "telegramDelivered": true,
  "googleSheetsSynced": false
}
```

## Ошибка валидации

```json
{
  "success": false,
  "message": "Проверьте обязательные поля формы.",
  "errors": {
    "name": ["Укажите имя"],
    "phone": ["Укажите телефон"],
    "service": ["Выберите услугу"]
  }
}
```

## Ошибка отправки Telegram

```json
{
  "success": false,
  "message": "Не удалось отправить заявку в Telegram. Проверьте TELEGRAM_BOT_TOKEN, TELEGRAM_CHAT_ID и доступ к api.telegram.org."
}
```

## Где находится код

- Zod-схема: `src/lib/lead-schema.ts`;
- форматирование Telegram-сообщения: `src/lib/formatLeadMessage.ts`;
- отправка Telegram-сообщения: `src/lib/telegram.ts`;
- отправка в Google Apps Script: `src/lib/googleAppsScript.ts`;
- API route: `src/app/api/lead/route.ts`.
