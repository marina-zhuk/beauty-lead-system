const questions = [
  {
    question: "Это готовый продукт или demo project?",
    answer: "Это portfolio MVP: рабочий пример лендинга, формы, Telegram notification и записи в Google Sheets. Для клиента его нужно адаптировать под конкретный бизнес, тексты, услуги и интеграции.",
  },
  {
    question: "Можно ли адаптировать не только под салон?",
    answer: "Да. Такой flow подходит для мастеров, студий, локальных услуг, консультаций и небольших сервисных бизнесов. Меняются услуги, поля формы, тексты, статусы и таблица.",
  },
  {
    question: "Где хранятся токены и webhook URL?",
    answer: "Telegram and Google Sheets integrations are configured through environment variables. Реальные значения не добавляются в код, README или публичные файлы.",
  },
  {
    question: "Есть ли здесь оплата или личный кабинет?",
    answer: "Нет. В этом MVP нет оплаты, авторизации, личного кабинета и полноценной CRM. Проект честно показывает прием заявки, уведомление владельцу и базовый учет в Google Sheets.",
  },
  {
    question: "Что нужно сделать перед реальным запуском?",
    answer: "Заменить demo-тексты на контент бизнеса, проверить Telegram bot, Apps Script webhook, таблицу, юридические тексты и финальный deploy на Vercel.",
  },
];

export function FAQ() {
  return (
    <section className="bg-white px-5 py-14">
      <div className="mx-auto max-w-5xl">
        <p className="text-sm font-semibold uppercase tracking-[0.12em] text-accent">FAQ</p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">Частые вопросы</h2>
        <div className="mt-8 divide-y divide-ink/10 border-y border-ink/10">
          {questions.map((item) => (
            <details className="group py-5" key={item.question}>
              <summary className="cursor-pointer list-none font-semibold text-ink transition hover:text-accent">
                {item.question}
              </summary>
              <p className="mt-3 leading-7 text-ink/65">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
