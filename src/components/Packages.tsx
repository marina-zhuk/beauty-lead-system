const packages = [
  {
    title: "Start",
    description: "Для мастера, которому нужна простая форма и быстрые уведомления о заявках.",
    price: "от 7 000 ₽",
    items: ["Форма под услуги", "Уведомление в Telegram", "Базовая настройка текстов"],
  },
  {
    title: "Standard",
    description: "Для студии или салона, где важно не только получить заявку, но и сохранить ее в таблице.",
    price: "от 15 000 ₽",
    recommended: true,
    items: [
      "Лендинг под бизнес",
      "Форма заявки",
      "Уведомление владельцу",
      "Сохранение в Google Sheets",
      "Статусы для ручной обработки",
    ],
  },
  {
    title: "Pro",
    description: "Для проекта, где нужны дополнительные сценарии обработки заявок и несколько направлений услуг.",
    price: "от 30 000 ₽",
    items: [
      "Лендинг",
      "Расширенная форма",
      "Таблица заявок",
      "Несколько статусов обработки",
      "Дополнительная логика автоматизации",
    ],
  },
];

export function Packages() {
  return (
    <section className="section-pad" id="included">
      <div className="page-shell">
        <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-start">
          <div>
            <p className="eyebrow">Форматы</p>
            <h2 className="serif-display mt-4 text-5xl leading-[1.03] text-ink md:text-6xl">
              Выберите систему под ваш объем заявок
            </h2>
            <p className="mt-6 leading-8 text-ink/65">
              Можно начать с простой формы и Telegram-уведомлений, а затем
              добавить таблицу, статусы и дополнительные сценарии обработки.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {packages.map((item) => (
              <article
                className={`relative rounded-[10px] border p-6 transition duration-300 hover:-translate-y-1 ${
                  item.recommended
                    ? "border-accent/50 bg-white shadow-soft md:-mt-5"
                    : "border-line bg-white/65 shadow-sm"
                }`}
                key={item.title}
              >
                {item.recommended ? (
                  <p className="absolute -top-3 right-5 rounded-full bg-accent px-4 py-1 text-xs font-semibold text-white">
                    популярный
                  </p>
                ) : null}
                <h3 className="serif-display text-3xl text-ink">{item.title}</h3>
                <p className="mt-4 min-h-24 text-sm leading-6 text-ink/65">{item.description}</p>
                <p className="serif-display mt-6 text-4xl text-ink">{item.price}</p>
                <ul className="mt-6 space-y-3 text-sm text-ink/70">
                  {item.items.map((included) => (
                    <li className="flex gap-3" key={included}>
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      <span>{included}</span>
                    </li>
                  ))}
                </ul>
                <a
                  className="mt-7 inline-flex min-h-11 w-full items-center justify-center rounded-[6px] border border-accent/40 bg-white/40 px-4 text-sm font-semibold text-accent transition hover:bg-accent hover:text-white active:translate-y-[1px]"
                  href="#lead-form"
                >
                  Обсудить формат
                </a>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
