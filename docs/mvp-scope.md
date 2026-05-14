# MVP Scope

## Что входит в MVP

- лендинг на Next.js App Router;
- TypeScript;
- Tailwind CSS;
- адаптивный дизайн;
- форма заявки;
- API route для обработки заявки;
- валидация через Zod;
- Telegram-уведомление владельцу;
- README;
- `.env.local.example`.

## Секции лендинга

- Hero;
- Services;
- Benefits;
- Process;
- LeadForm;
- Reviews;
- FAQ;
- Footer.

## Поля заявки

- `name`;
- `phone`;
- `service`;
- `preferredDate`;
- `preferredTime`;
- `comment`.

## Системные поля заявки

API route добавляет системные поля к валидной заявке:

- `createdAt`;
- `source`;
- `status`.

По умолчанию новая заявка получает статус `new`.

## Не делать в первой версии

- оплату;
- личный кабинет;
- полноценную CRM;
- авторизацию;
- Telegram Mini App;
- AI-чат;
- сложную админку;
- сложную аналитику;
- базу данных;
- Google Cloud.

## Важное ограничение текущей версии

В текущей реализации `POST /api/lead` принимает данные, валидирует их через Zod, отправляет Telegram-уведомление владельцу и возвращает `success/error`.
