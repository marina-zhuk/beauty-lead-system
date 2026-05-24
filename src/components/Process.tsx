const steps = [
  {
    title: "Клиент заполняет форму",
    text: "Оставляет имя, телефон, выбранную услугу, желаемую дату, удобное время и комментарий.",
  },
  {
    title: "API отправляет уведомление",
    text: "POST /api/lead валидирует данные и отправляет владельцу понятное сообщение в Telegram.",
  },
  {
    title: "Заявка сохраняется в таблицу",
    text: "Google Apps Script добавляет новую строку в Google Sheets для простого tracking без сложной CRM.",
  },
];

export function Process() {
  return (
    <section className="bg-white px-5 py-14">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.12em] text-accent">How it works</p>
          <h2 className="mt-3 text-3xl font-semibold text-ink sm:text-4xl">
            Три шага от формы до Telegram и Google Sheets
          </h2>
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {steps.map((step, index) => (
            <article className="rounded-lg border border-ink/10 bg-white p-5 shadow-sm" key={step.title}>
              <p className="text-sm font-semibold text-moss">Шаг {index + 1}</p>
              <h3 className="mt-3 text-xl font-semibold text-ink">{step.title}</h3>
              <p className="mt-3 leading-7 text-ink/65">{step.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
