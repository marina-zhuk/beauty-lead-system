const questions = [
  {
    question: "Это готовый продукт или demo project?",
    answer: "Это portfolio MVP: рабочий пример лендинга, формы, Telegram-уведомления и записи в Google Sheets. Для клиента его нужно адаптировать под конкретный бизнес, тексты, услуги и интеграции.",
  },
  {
    question: "Сколько может стоить такая система?",
    answer: "На странице указаны примерные пакеты. Итоговая цена зависит от объема: одна форма или полноценный лендинг, нужна ли Google Sheets, бот, дополнительные поля и настройка деплоя.",
  },
  {
    question: "Можно ли адаптировать не только под салон?",
    answer: "Да. Такой поток подходит для мастеров, студий, локальных услуг, консультаций и небольших сервисных бизнесов. Меняются услуги, поля формы, тексты, статусы и таблица.",
  },
  {
    question: "Сколько времени занимает внедрение?",
    answer: "Простой вариант с лендингом, формой и Telegram обычно можно собрать быстрее, чем систему с ботом, таблицей, несколькими сценариями и деплоем. Точный срок зависит от требований и готовности текстов.",
  },
  {
    question: "Есть ли здесь оплата или payment mock?",
    answer: "Нет. В этом MVP нет оплаты и mock-платежей. Проект честно показывает прием заявки, уведомление владельцу и базовый учет в Google Sheets.",
  },
  {
    question: "Какие есть ограничения по интеграциям?",
    answer: "Текущий demo использует Telegram Bot API и Google Apps Script для Google Sheets. Другие CRM, email-сервисы, платежи или Mini App потребуют отдельной доработки.",
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
