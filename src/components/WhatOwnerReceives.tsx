const fields = [
  "Кто оставил заявку",
  "Как с клиентом связаться",
  "Какая услуга интересует",
  "Когда клиенту удобно",
  "Что важно учесть перед ответом",
  "Какой сейчас статус обработки",
];

export function WhatOwnerReceives() {
  return (
    <section className="bg-white px-5 py-16">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.12em] text-moss">Owner view</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Что владелец видит после отправки формы
          </h2>
          <p className="mt-4 leading-7 text-ink/65">
            Вместо разрозненных сообщений владелец получает структурированную заявку:
            кому ответить, по какой услуге, на какое время и в каком статусе она сейчас.
          </p>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          {fields.map((field) => (
            <div className="border-t border-ink/10 py-4" key={field}>
              <p className="font-semibold text-ink">{field}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
