const steps = [
  {
    title: "Visitor submits form",
    text: "Форма собирает имя, телефон, услугу, желаемую дату, время и комментарий без длинной переписки.",
  },
  {
    title: "Owner receives Telegram notification",
    text: "В Telegram приходит структурированная заявка с данными клиента и услугой, по которой нужно ответить.",
  },
  {
    title: "Lead is saved to Google Sheets",
    text: "Через Google Apps Script заявка сохраняется в таблицу, где ее можно обрабатывать вручную по статусам.",
  },
];

export function Process() {
  return (
    <section className="bg-white px-5 py-16" id="flow">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.75fr_1.25fr]">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.12em] text-accent">How it works / lead flow</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Visitor → Telegram → Google Sheets
          </h2>
          <p className="mt-4 leading-7 text-ink/65">
            В MVP нет оплаты, личного кабинета и сложной CRM. Фокус на коммерчески полезном
            минимуме: принять заявку, быстро показать ее владельцу и сохранить для учета.
          </p>
        </div>
        <div className="grid gap-0 divide-y divide-ink/10 rounded-lg border border-ink/10 bg-cream overflow-hidden">
          {steps.map((step, index) => (
            <article className="grid gap-4 bg-white/55 p-5 sm:grid-cols-[86px_1fr] sm:p-6" key={step.title}>
              <p className="text-3xl font-semibold tracking-tight text-moss">0{index + 1}</p>
              <div>
                <h3 className="text-xl font-semibold text-ink">{step.title}</h3>
                <p className="mt-3 leading-7 text-ink/65">{step.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
