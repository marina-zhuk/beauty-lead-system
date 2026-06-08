const audience = [
  {
    title: "Частный мастер",
    text: "Получает заявки с сайта и видит контакт клиента сразу в Telegram.",
  },
  {
    title: "Небольшой салон",
    text: "Администратор хранит обращения в одной таблице и быстрее возвращается к клиентам.",
  },
  {
    title: "Студия с несколькими услугами",
    text: "Можно адаптировать форму под разные направления и статусы обработки.",
  },
];

const outcomes = [
  "меньше потерянных обращений после рекламы и соцсетей",
  "быстрее первый ответ клиенту",
  "понятная история заявок без ручного копирования из чатов",
];

export function WhoFits() {
  return (
    <section className="section-pad bg-white/35" id="audience">
      <div className="page-shell">
        <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
          <div>
            <p className="eyebrow">Для кого</p>
            <h2 className="serif-display mt-4 text-5xl leading-[1.03] text-ink md:text-6xl">
              Когда системе заявок уже пора заменить хаос в чатах
            </h2>
            <p className="mt-6 leading-8 text-ink/65">
              Решение подходит beauty-бизнесу, где заявки приходят из рекламы,
              соцсетей и мессенджеров, но владельцу нужен один понятный канал
              обработки.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {audience.map((item) => (
              <article className="glass-panel rounded-[10px] p-6" key={item.title}>
                <h3 className="serif-display text-3xl text-ink">{item.title}</h3>
                <p className="mt-4 text-sm leading-6 text-ink/65">{item.text}</p>
              </article>
            ))}

            <article className="rounded-[10px] border border-accent/35 bg-accent p-6 text-white shadow-soft md:col-span-3">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-white/70">
                Коммерческий результат
              </p>
              <ul className="mt-5 grid gap-3 text-sm leading-6 md:grid-cols-3">
                {outcomes.map((item) => (
                  <li className="flex gap-3" key={item}>
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-white" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
