const items = [
  {
    title: "Beauty salon",
    text: "Можно заменить список услуг, тексты, CTA и структуру Google Sheets под администратора салона.",
  },
  {
    title: "Private beauty master",
    text: "Подходит для мастера маникюра, бровиста, lash-мастера, косметолога или массажиста.",
  },
  {
    title: "Small service business",
    text: "Тот же flow можно использовать для консультаций, локальных услуг и небольших сервисных команд.",
  },
];

export function Solution() {
  return (
    <section className="px-5 py-14" id="adaptation">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.12em] text-accent">Adaptation for real business</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Демо можно адаптировать под реальный процесс салона
          </h2>
          <p className="mt-4 leading-7 text-ink/65">
            Основа уже показывает рабочий прием заявок. Для клиента можно поменять визуальный стиль,
            услуги, тексты, поля формы, Telegram message template и колонки таблицы.
          </p>
        </div>

        <div className="mt-9 grid gap-4 md:grid-cols-[1.25fr_0.95fr] lg:grid-cols-[1.4fr_0.85fr_0.85fr]">
          {items.map((item, index) => (
            <article
              className={`rounded-lg border border-ink/10 bg-white p-5 shadow-[0_18px_35px_rgba(31,33,31,0.04)] transition duration-300 hover:-translate-y-1 ${
                index === 0 ? "md:row-span-2 lg:row-span-1 lg:min-h-72 lg:p-7" : ""
              }`}
              key={item.title}
            >
              <p className="mb-5 text-sm font-semibold text-moss">0{index + 1}</p>
              <h3 className="text-xl font-semibold text-ink">{item.title}</h3>
              <p className="mt-3 leading-7 text-ink/65">{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
