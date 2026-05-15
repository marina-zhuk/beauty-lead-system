const items = [
  {
    title: "Форма на лендинге",
    text: "Клиент оставляет имя, телефон, услугу, удобное время и комментарий в одном месте.",
  },
  {
    title: "Заявка приходит в Telegram",
    text: "Владелец или администратор сразу получает понятное сообщение со всеми данными.",
  },
  {
    title: "Быстрый ответ клиенту",
    text: "Не нужно искать заявку в переписках: можно сразу связаться с клиентом и подтвердить запись.",
  },
];

export function Solution() {
  return (
    <section className="px-5 py-14" id="solution">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.12em] text-accent">Solution</p>
          <h2 className="mt-3 text-3xl font-semibold text-ink sm:text-4xl">
            Одна форма — одно уведомление — быстрый ответ
          </h2>
          <p className="mt-4 leading-7 text-ink/65">
            Beauty Booking System собирает входящие заявки через сайт и отправляет их в Telegram без сложной CRM на старте.
          </p>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {items.map((item) => (
            <article className="rounded-lg border border-ink/10 bg-white p-5 shadow-sm" key={item.title}>
              <h3 className="text-xl font-semibold text-ink">{item.title}</h3>
              <p className="mt-3 leading-7 text-ink/65">{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
