const items = [
  {
    title: "Салон красоты",
    text: "Для студии с несколькими услугами и администратором, которому важно видеть все заявки в одном месте.",
  },
  {
    title: "Частный мастер",
    text: "Для мастера маникюра, бровиста, lash-мастера, косметолога или массажиста.",
  },
  {
    title: "Небольшая студия",
    text: "Для локального сервиса, где важно отвечать быстро и не терять входящие обращения.",
  },
];

export function Solution() {
  return (
    <section className="section-pad" id="adaptation">
      <div className="page-shell">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <p className="eyebrow">Кому подходит</p>
            <h2 className="serif-display mt-4 text-5xl leading-[1.03] text-ink md:text-6xl">
              Для beauty-бизнеса, где важна скорость ответа
            </h2>
          </div>
          <p className="max-w-3xl leading-8 text-ink/65">
            Система помогает принять заявку с сайта, сразу показать ее
            владельцу и сохранить данные для дальнейшей записи клиента.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-[1.2fr_0.9fr_0.9fr]">
          {items.map((item, index) => (
            <article className="glass-panel rounded-[10px] p-6" key={item.title}>
              <p className="serif-display text-5xl text-accent">0{index + 1}</p>
              <h3 className="mt-7 text-xl font-semibold text-ink">{item.title}</h3>
              <p className="mt-3 leading-7 text-ink/65">{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
