const packages = [
  {
    title: "Start",
    description: "Форма + Telegram для быстрого запуска приема заявок.",
    items: ["Форма заявки", "Валидация полей", "Telegram-уведомление"],
  },
  {
    title: "Landing",
    description: "Лендинг + форма + Telegram для мастера или небольшой студии.",
    items: ["Адаптивный лендинг", "Conversion blocks", "Подготовка к Vercel deploy"],
  },
  {
    title: "Pro",
    description: "Расширение системы, которое можно добавить позже.",
    items: ["Telegram-бот", "Google Sheets / Apps Script", "Статусы обработки"],
  },
];

export function Packages() {
  return (
    <section className="px-5 py-14" id="included">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.12em] text-accent">What included</p>
          <h2 className="mt-3 text-3xl font-semibold text-ink sm:text-4xl">
            Что можно собрать под beauty-бизнес
          </h2>
          <p className="mt-4 leading-7 text-ink/65">
            В MVP достаточно формы и Telegram. Таблицу, бота и дополнительные статусы можно подключить следующим этапом.
          </p>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {packages.map((item) => (
            <article className="rounded-lg border border-ink/10 bg-white p-5 shadow-sm" key={item.title}>
              <h3 className="text-2xl font-semibold text-ink">{item.title}</h3>
              <p className="mt-3 min-h-14 leading-7 text-ink/65">{item.description}</p>
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
      </div>
    </section>
  );
}
