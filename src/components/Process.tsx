const steps = [
  {
    title: "Клиент оставляет заявку",
    text: "Заполняет форму на лендинге и указывает желаемую услугу.",
  },
  {
    title: "Владелец получает данные",
    text: "В первой версии API проверяет заявку и возвращает результат отправки.",
  },
  {
    title: "Заявка готова к обработке",
    text: "Структура уже подготовлена для следующих этапов с Telegram и Google Sheets.",
  },
];

export function Process() {
  return (
    <section className="px-5 py-12">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.12em] text-berry">Процесс</p>
          <h2 className="mt-3 text-3xl font-semibold text-ink sm:text-4xl">
            Три шага от интереса до заявки
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
