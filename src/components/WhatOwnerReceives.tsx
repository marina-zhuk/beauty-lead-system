const fields = [
  "Имя клиента",
  "Телефон",
  "Выбранная услуга",
  "Удобное время",
  "Комментарий",
];

export function WhatOwnerReceives() {
  return (
    <section className="bg-white px-5 py-14">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.12em] text-moss">Telegram message</p>
          <h2 className="mt-3 text-3xl font-semibold text-ink sm:text-4xl">
            Что получает владелец
          </h2>
          <p className="mt-4 leading-7 text-ink/65">
            В одном сообщении есть все, чтобы быстро ответить клиенту и не искать детали в разных чатах.
          </p>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {fields.map((field) => (
            <div className="rounded-lg border border-ink/10 bg-cream p-5" key={field}>
              <p className="font-semibold text-ink">{field}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
