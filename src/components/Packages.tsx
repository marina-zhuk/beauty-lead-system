const packages = [
  {
    title: "Start",
    description: "Для бизнеса, которому нужна простая форма и быстрые уведомления без таблицы учета.",
    price: "от 7 000 ₽",
    items: ["Форма под ваши услуги", "Telegram-уведомление владельцу", "Базовая настройка текста и полей"],
  },
  {
    title: "Standard",
    description: "Для владельца, который хочет принимать заявки и видеть их в таблице для обработки.",
    price: "от 15 000 ₽",
    recommended: true,
    items: [
      "Лендинг под бизнес",
      "Форма заявки",
      "Telegram-уведомление",
      "Запись заявок в Google Sheets",
      "Статусы для ручной обработки",
    ],
  },
  {
    title: "Pro",
    description: "Для проекта, где кроме лендинга нужен Telegram-бот или дополнительные сценарии обработки.",
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
    <section className="px-5 py-16" id="included">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.12em] text-accent">
            Примеры услуг
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Что можно адаптировать под ваш бизнес
          </h2>
          <p className="mt-4 leading-7 text-ink/65">
            Текущий demo сделан для beauty-ниши, но основа подходит и для других услуг:
            форму, тексты, список услуг, Telegram-уведомления и таблицу можно изменить под конкретный процесс.
          </p>
        </div>

        <div className="mt-9 grid gap-4 lg:grid-cols-[0.85fr_1.3fr_0.85fr] lg:items-stretch">
          {packages.map((item) => (
            <article
              className={`relative rounded-lg border p-5 transition duration-300 hover:-translate-y-1 ${
                item.recommended ? "border-accent/35 bg-white p-6 shadow-soft lg:-mt-5" : "border-ink/10 bg-white/80 shadow-sm"
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
              <p className="mt-5 text-3xl font-semibold tracking-tight text-ink">{item.price}</p>
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

        <p className="mt-6 border-l-2 border-accent/35 bg-white/70 p-4 text-sm leading-6 text-ink/65">
          Цены указаны как пример упаковки услуги для портфолио. Финальная стоимость зависит
          от количества страниц, полей формы, интеграций и нужной логики обработки заявок.
        </p>
      </div>
    </section>
  );
}
