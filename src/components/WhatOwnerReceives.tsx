const leadFields = [
  {
    label: "Клиент",
    value: "имя из формы",
  },
  {
    label: "Контакт",
    value: "телефон сохранен",
  },
  {
    label: "Услуга",
    value: "выбранная услуга",
  },
  {
    label: "Когда удобно",
    value: "дата и время",
  },
  {
    label: "Комментарий",
    value: "пожелание клиента",
  },
  {
    label: "Источник",
    value: "форма на сайте",
  },
];

export function WhatOwnerReceives() {
  return (
    <section className="section-pad bg-white/45" id="owner-view">
      <div className="page-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div>
          <p className="eyebrow">Для владельца</p>
          <h2 className="serif-display mt-4 text-5xl leading-[1.03] text-ink md:text-6xl">
            Заявка приходит в понятном формате
          </h2>
          <p className="mt-6 max-w-2xl leading-8 text-ink/65">
            Владелец сразу видит, кто оставил заявку, какая услуга нужна, когда удобно связаться
            и что важно учесть перед первым ответом.
          </p>
        </div>

        <div className="glass-panel rounded-[10px] p-6">
          <div className="rounded-[8px] border border-line bg-white/75 p-5">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="font-semibold text-ink">Новая заявка</p>
                <p className="mt-1 text-sm text-ink/55">Все данные собраны в одной карточке</p>
              </div>
              <span className="rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold text-accent">
                новая
              </span>
            </div>

            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {leadFields.map((field) => (
                <div className="rounded-[6px] border border-line bg-cream px-4 py-3" key={field.label}>
                  <p className="text-xs uppercase tracking-[0.14em] text-ink/45">{field.label}</p>
                  <p className="mt-2 font-medium text-ink">{field.value}</p>
                </div>
              ))}
            </div>

            <div className="mt-4 rounded-[8px] border border-accent/20 bg-accent/5 px-4 py-3">
              <p className="text-sm font-semibold text-ink">Следующий шаг</p>
              <p className="mt-1 text-sm leading-6 text-ink/65">
                Ответить клиенту, уточнить детали и перевести заявку в запись.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
