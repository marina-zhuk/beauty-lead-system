const features = [
  {
    title: "Лендинг",
    text: "Страница объясняет услугу, отвечает на базовые вопросы и ведет посетителя к заявке.",
    className: "lg:col-span-2",
  },
  {
    title: "Форма заявки",
    text: "Клиент оставляет имя, телефон, услугу и удобное время без долгой переписки.",
    className: "",
  },
  {
    title: "Уведомление",
    text: "Владелец сразу видит новую заявку и может быстро связаться с клиентом.",
    className: "",
  },
  {
    title: "Таблица заявок",
    text: "Контакты и услуги сохраняются в одном месте, чтобы администратор видел историю обращений.",
    className: "lg:col-span-2",
  },
];

export function Features() {
  return (
    <section className="section-pad" id="features">
      <div className="page-shell">
        <p className="eyebrow">Что входит</p>
        <h2 className="serif-display mt-4 max-w-4xl text-5xl leading-[1.02] text-ink md:text-6xl">
          Все, что нужно для приема заявок с сайта
        </h2>

        <div className="mt-10 grid gap-5 lg:grid-cols-4">
          {features.map((feature, index) => (
            <article
              className={`glass-panel min-h-64 rounded-[10px] p-6 ${feature.className}`}
              key={feature.title}
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/20 text-sm font-bold text-accent">
                0{index + 1}
              </span>
              <h3 className="serif-display mt-8 text-3xl text-ink">{feature.title}</h3>
              <p className="mt-3 max-w-md leading-7 text-ink/65">{feature.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
