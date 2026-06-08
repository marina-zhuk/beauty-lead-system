# Документация Beauty Lead System

Эта папка содержит вспомогательную документацию для portfolio MVP.

## Разделы

- [project-brief.md](project-brief.md) — идея проекта, аудитория, бизнес-проблема и решение.
- [portfolio-case.md](portfolio-case.md) — портфолио-кейс: проблема, решение, коммерческая ценность, пакеты и demo script.
- [demo-flow.md](demo-flow.md) — пошаговый чеклист для скриншотов, видео и показа клиенту.
- [mvp-scope.md](mvp-scope.md) — что входит в MVP и что не входит.
- [setup.md](setup.md) — локальная настройка и запуск проекта.
- [api.md](api.md) — payload формы, Zod validation, Telegram и `POST /api/lead`.
- [integrations.md](integrations.md) — Telegram integration и Google Apps Script webhook.
- [google-apps-script.md](google-apps-script.md) — пример Google Apps Script Web App для записи заявок в Google Sheets.
- [TESTING.md](TESTING.md) — чеклист тестирования локально, на Vercel, в Telegram и Google Sheets.
- [screenshots/README.md](screenshots/README.md) — список нужных portfolio screenshots.

## Текущий статус

MVP включает адаптивный landing page, lead form, Zod validation, API route, Telegram notification и Google Sheets storage через Google Apps Script.

Проект подходит как портфолио-пример услуги после проверки production environment variables в Vercel и использования безопасных demo-данных в скриншотах.
