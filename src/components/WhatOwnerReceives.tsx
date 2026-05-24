const fields = [
  "Telegram-уведомление",
  "Новая строка в Google Sheets",
  "Дата и время заявки",
  "Имя клиента",
  "Телефон",
  "Выбранная услуга",
  "Желаемое время",
  "Комментарий",
  "Статус обработки",
];

export function WhatOwnerReceives() {
  return (
    <section className="bg-white px-5 py-14">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.12em] text-moss">Owner view</p>
          <h2 className="mt-3 text-3xl font-semibold text-ink sm:text-4xl">
            Что получает владелец
          </h2>
          <p className="mt-4 leading-7 text-ink/65">
            Владелец получает заявку в Telegram и видит ту же информацию в Google Sheets:
            этого достаточно для простого учета лидов и ручной обработки статусов.
          </p>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
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
