const questions = [
  {
    question: "Сколько времени занимает запуск?",
    answer:
      "Базовую систему можно подготовить быстро: согласовать структуру страницы, поля формы, список услуг и канал для заявок.",
  },
  {
    question: "Нужны ли технические знания владельцу?",
    answer:
      "Нет. Владелец получает заявки в Telegram и работает с простой таблицей. Техническая настройка выполняется при запуске.",
  },
  {
    question: "Можно ли подключить несколько услуг?",
    answer:
      "Да. В форму можно добавить услуги салона, студии или частного мастера: маникюр, брови, массаж, косметологию и другие направления.",
  },
  {
    question: "Что происходит с заявкой после отправки?",
    answer:
      "Она приходит владельцу в Telegram и сохраняется в таблице, чтобы контакт не потерялся после первого уведомления.",
  },
  {
    question: "Подойдет ли это маленькому салону?",
    answer:
      "Да. Система рассчитана на простой и понятный процесс без сложного личного кабинета и лишней нагрузки на администратора.",
  },
];

export function FAQ() {
  return (
    <section className="section-pad bg-white/45" id="faq">
      <div className="page-shell grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="eyebrow">FAQ</p>
          <h2 className="serif-display mt-4 text-5xl leading-[1.03] text-ink md:text-6xl">
            Частые вопросы
          </h2>
        </div>

        <div className="divide-y divide-line rounded-[10px] border border-line bg-white/70">
          {questions.map((item) => (
            <details className="group p-5" key={item.question}>
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-ink transition hover:text-accent">
                {item.question}
                <span className="text-xl font-light text-accent transition group-open:rotate-45">+</span>
              </summary>
              <p className="mt-4 leading-7 text-ink/65">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
