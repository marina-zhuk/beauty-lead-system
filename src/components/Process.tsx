const steps = [
  {
    title: "Клиент оставляет понятную заявку",
    text: "Форма собирает имя, телефон, услугу, дату, время и комментарий без переписки туда-сюда.",
  },
  {
    title: "Владелец получает сообщение",
    text: "Telegram-уведомление показывает все детали заявки, чтобы можно было быстро связаться с клиентом.",
  },
  {
    title: "Заявка остается в учете",
    text: "Google Sheets хранит строку заявки и статус обработки. Это проще, чем полноценная CRM, но достаточно для MVP.",
  },
];

export function Process() {
  return (
    <section className="bg-white px-5 py-16">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.75fr_1.25fr]">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.12em] text-accent">How it works</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Работает в три понятных шага
          </h2>
          <p className="mt-4 leading-7 text-ink/65">
            Без личного кабинета, оплаты и сложной CRM: только прием заявки, быстрый сигнал владельцу и базовый учет.
          </p>
        </div>
        <div className="grid gap-0 divide-y divide-ink/10 rounded-lg border border-ink/10 bg-cream">
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
