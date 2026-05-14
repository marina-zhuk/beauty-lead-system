const reviews = [
  {
    name: "Демо-отзыв, мастер маникюра",
    text: "Клиенты стали оставлять заявки аккуратно: видно услугу, телефон и желаемое время.",
  },
  {
    name: "Демо-отзыв, brow-мастер",
    text: "Форма помогает быстро понять запрос клиента до переписки.",
  },
  {
    name: "Демо-отзыв, небольшой салон",
    text: "Лендинг выглядит просто, но закрывает главный сценарий записи.",
  },
];

export function Reviews() {
  return (
    <section className="px-5 py-12">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.12em] text-moss">
            Демо-отзывы
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-ink sm:text-4xl">
            Примеры обратной связи для портфолио
          </h2>
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {reviews.map((review) => (
            <article className="rounded-lg border border-ink/10 bg-white p-5 shadow-sm" key={review.name}>
              <p className="leading-7 text-ink/70">“{review.text}”</p>
              <p className="mt-5 font-semibold text-ink">{review.name}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
