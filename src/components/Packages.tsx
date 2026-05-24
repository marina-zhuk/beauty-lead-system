const packages = [
  {
    title: "Start",
    description: "Минимальный пакет для приема заявок без лишней CRM.",
    price: "от 7 000 ₽",
    items: ["Форма заявки", "Telegram-уведомление", "Базовая настройка"],
  },
  {
    title: "Standard",
    description: "Рекомендуемый MVP для beauty-бизнеса: сайт, заявка и простой учет лидов.",
    price: "от 15 000 ₽",
    recommended: true,
    items: [
      "Лендинг",
      "Форма заявки",
      "Telegram-уведомление",
      "Интеграция с Google Sheets",
      "Базовый учет лидов",
    ],
  },
  {
    title: "Pro",
    description: "Расширенный вариант с ботом и простой логикой обработки заявок.",
    price: "от 30 000 ₽",
    items: [
      "Лендинг",
      "Telegram-бот",
      "Google Sheets / простая CRM-таблица",
      "Статусы обработки заявок",
      "Базовая логика автоматизации",
    ],
  },
];

export function Packages() {
  return (
    <section className="px-5 py-14" id="included">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.12em] text-accent">
            Примеры услуг
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-ink sm:text-4xl">
            Пакеты для beauty-бизнеса
          </h2>
          <p className="mt-4 leading-7 text-ink/65">
            Примеры упаковки услуги на базе этого portfolio MVP: от простой формы до
            лендинга с Telegram, Google Sheets и базовой автоматизацией.
          </p>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {packages.map((item) => (
            <article
              className={`relative rounded-lg border p-5 shadow-sm ${
                item.recommended ? "border-accent/35 bg-white shadow-soft" : "border-ink/10 bg-white"
              }`}
              key={item.title}
            >
              {item.recommended ? (
                <p className="mb-4 inline-flex rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold text-accent">
                  Рекомендуемый
                </p>
              ) : null}
              <h3 className="text-2xl font-semibold text-ink">{item.title}</h3>
              <p className="mt-3 min-h-16 leading-7 text-ink/65">{item.description}</p>
              <p className="mt-5 text-3xl font-semibold text-ink">{item.price}</p>
              <ul className="mt-5 space-y-3 text-sm text-ink/75">
                {item.items.map((included) => (
                  <li className="flex gap-2" key={included}>
                    <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-moss" />
                    <span>{included}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <p className="mt-6 rounded-lg border border-ink/10 bg-white p-4 text-sm leading-6 text-ink/65">
          Цены указаны как пример упаковки услуги для портфолио. Финальная стоимость зависит
          от задачи клиента. При необходимости проект можно адаптировать в двухъязычную
          версию с переключением RU / EN.
        </p>
      </div>
    </section>
  );
}
