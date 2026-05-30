const steps = [
  {
    number: "01",
    title: "Клиент оставляет заявку",
    text: "Заполняет короткую форму на сайте: имя, телефон, услугу и удобное время.",
    visual: "form",
  },
  {
    number: "02",
    title: "Владелец получает уведомление",
    text: "Заявка сразу приходит в Telegram, чтобы администратор мог быстро ответить.",
    visual: "telegram",
  },
  {
    number: "03",
    title: "Данные сохраняются в таблице",
    text: "Контакты и услуга остаются в одном месте, а не теряются в переписках.",
    visual: "table",
  },
];

function StepVisual({ type }: { type: string }) {
  if (type === "telegram") {
    return (
      <div className="mt-7 rounded-[8px] border border-line bg-white/75 p-4">
        <div className="flex items-center justify-between text-xs text-ink/50">
          <span>Telegram</span>
          <span>сейчас</span>
        </div>
        <p className="mt-4 font-semibold text-ink">Новая заявка</p>
        <p className="mt-2 text-sm leading-6 text-ink/65">
          Имя: клиент<br />
          Телефон: скрыт<br />
          Услуга: брови
        </p>
      </div>
    );
  }

  if (type === "table") {
    return (
      <div className="mt-7 rounded-[8px] border border-line bg-white/75 p-4">
        <div className="grid grid-cols-3 gap-2 text-xs">
          <span className="font-semibold text-ink">Имя</span>
          <span className="font-semibold text-ink">Услуга</span>
          <span className="font-semibold text-ink">Статус</span>
          <span className="rounded bg-cream px-2 py-2 text-ink/65">клиент</span>
          <span className="rounded bg-cream px-2 py-2 text-ink/65">уход</span>
          <span className="rounded bg-accent/10 px-2 py-2 text-accent">новая</span>
        </div>
      </div>
    );
  }

  return (
    <div className="mt-7 rounded-[8px] border border-line bg-white/75 p-4">
      <div className="grid gap-3">
        <div className="rounded-[6px] border border-line bg-cream px-3 py-2 text-sm text-ink/55">Имя</div>
        <div className="rounded-[6px] border border-line bg-cream px-3 py-2 text-sm text-ink/55">Телефон</div>
        <div className="rounded-[6px] border border-line bg-cream px-3 py-2 text-sm text-ink/55">Услуга</div>
        <div className="rounded-[6px] bg-accent px-3 py-3 text-center text-sm font-semibold text-white">
          Записаться
        </div>
      </div>
    </div>
  );
}

export function Process() {
  return (
    <section className="section-pad bg-white/45" id="flow">
      <div className="page-shell">
        <div className="grid gap-10 lg:grid-cols-[0.62fr_1fr] lg:items-end">
          <div>
            <p className="eyebrow">Как это работает</p>
            <h2 className="serif-display mt-4 text-5xl leading-[1.02] text-ink md:text-6xl">
              3 шага от заявки до записи
            </h2>
          </div>
          <p className="max-w-3xl text-lg leading-8 text-ink/65">
            Клиент оставляет заявку на сайте, владелец сразу видит ее в
            Telegram, а данные сохраняются в таблице для учета и follow-up.
          </p>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {steps.map((step) => (
            <article className="glass-panel rounded-[10px] p-6 transition duration-300 hover:-translate-y-1" key={step.number}>
              <p className="serif-display text-5xl text-accent">{step.number}</p>
              <h3 className="mt-5 text-xl font-semibold text-ink">{step.title}</h3>
              <p className="mt-3 leading-7 text-ink/65">{step.text}</p>
              <StepVisual type={step.visual} />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
