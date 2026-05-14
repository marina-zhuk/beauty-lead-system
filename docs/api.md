# API

## Endpoint

```http
POST /api/lead
```

## Назначение

API route принимает данные формы заявки, валидирует их через Zod, отправляет Telegram-уведомление владельцу и возвращает результат.

Google Cloud и Google Sheets API в текущем MVP не используются.

## Request body

```json
{
  "name": "Анна",
  "phone": "+7 999 123-45-67",
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

## Telegram-сообщение

После успешной валидации API отправляет владельцу сообщение:

```text
Новая заявка с сайта:
Имя: Анна
Телефон: +7 999 123-45-67
Услуга: Маникюр
Дата: 2026-05-20
Время: 14:30
Комментарий: Хочу вечернее время
Источник: landing
Время создания: 2026-05-13T00:00:00.000Z
```

Если Telegram API возвращает ошибку, пользователь видит безопасное сообщение без технических деталей, а проблема логируется без токена.

## Успешный ответ

```json
{
  "success": true,
  "lead": {
    "name": "Анна",
    "phone": "+7 999 123-45-67",
    "service": "Маникюр",
    "preferredDate": "2026-05-20",
    "preferredTime": "14:30",
    "comment": "Хочу вечернее время",
    "createdAt": "2026-05-13T00:00:00.000Z",
    "source": "landing",
    "status": "new"
  }
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
  "message": "Не удалось отправить заявку. Попробуйте еще раз."
}
```

## Где находится код

Zod-схема:

```text
src/lib/lead-schema.ts
```

Форматирование Telegram-сообщения:

```text
src/lib/formatLeadMessage.ts
```

Отправка Telegram-сообщения:

```text
src/lib/telegram.ts
```

API route:

```text
src/app/api/lead/route.ts
```
