const features = [
  {
    title: "Landing page for the offer",
    text: "Страница объясняет услугу, снимает базовые вопросы и ведет посетителя к форме заявки.",
  },
  {
    title: "Demo lead form",
    text: "Форма собирает имя, телефон, услугу, дату, время и комментарий без лишних шагов для клиента.",
  },
  {
    title: "Backend validation",
    text: "Endpoint /api/lead проверяет данные через Zod и возвращает понятный статус для интерфейса.",
  },
  {
    title: "Telegram notification",
    text: "Владелец получает структурированную заявку в Telegram, чтобы быстро ответить клиенту.",
  },
  {
    title: "Google Sheets storage",
    text: "Заявка сохраняется через Google Apps Script в таблицу для простого учета и follow-up.",
  },
  {
    title: "Vercel-ready setup",
    text: "Интеграции подключаются через environment variables, без токенов и ключей в коде.",
  },
];

export function Features() {
  return (
    <section className="px-5 py-16" id="features">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.12em] text-accent">Features</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              Что входит в portfolio MVP
            </h2>
            <p className="mt-4 leading-7 text-ink/65">
              Это не просто красивая форма на странице. В демо показан полный путь заявки:
              frontend, backend endpoint, Telegram notification и запись в Google Sheets.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {features.map((feature) => (
              <article
                className="rounded-lg border border-ink/10 bg-white p-5 shadow-[0_18px_35px_rgba(31,33,31,0.04)] transition duration-300 hover:-translate-y-0.5"
                key={feature.title}
              >
                <h3 className="text-lg font-semibold text-ink">{feature.title}</h3>
                <p className="mt-3 leading-7 text-ink/65">{feature.text}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
