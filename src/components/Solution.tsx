const items = [
  {
    title: "Для записи на услуги",
    text: "Клиент выбирает услугу, дату и время. Владелец получает заявку в формате, с которым сразу можно работать.",
  },
  {
    title: "Для ручной обработки лидов",
    text: "Telegram помогает быстро увидеть новый запрос, а Google Sheets оставляет список заявок для follow-up и статусов.",
  },
  {
    title: "Для адаптации под нишу",
    text: "Поля формы, услуги, тексты, статусы и таблицу можно переделать под салон, мастера, студию или другой локальный бизнес.",
  },
];

export function Solution() {
  return (
    <section className="px-5 py-14" id="solution">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.12em] text-accent">Solution</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Как система помогает не пропустить клиента
          </h2>
          <p className="mt-4 leading-7 text-ink/65">
            На странице есть форма заявки. После отправки владелец получает сообщение в Telegram,
            а заявка остается в Google Sheets для учета и дальнейшей обработки.
          </p>
        </div>

        <div className="mt-9 grid gap-4 md:grid-cols-[1.25fr_0.95fr] lg:grid-cols-[1.4fr_0.85fr_0.85fr]">
          {items.map((item, index) => (
            <article
              className={`rounded-lg border border-ink/10 bg-white p-5 shadow-[0_18px_35px_rgba(31,33,31,0.04)] transition duration-300 hover:-translate-y-1 ${
                index === 0 ? "md:row-span-2 lg:row-span-1 lg:min-h-72 lg:p-7" : ""
              }`}
              key={item.title}
            >
              <p className="mb-5 text-sm font-semibold text-moss">0{index + 1}</p>
              <h3 className="text-xl font-semibold text-ink">{item.title}</h3>
              <p className="mt-3 leading-7 text-ink/65">{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
