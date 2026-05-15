const questions = [
  {
    question: "Можно ли адаптировать под мой салон?",
    answer: "Да. Тексты, услуги, поля формы и визуальный стиль можно адаптировать под салон, частного мастера или студию.",
  },
  {
    question: "Куда приходят заявки?",
    answer: "В Telegram владельца или администратора. Данные заявки приходят одним сообщением.",
  },
  {
    question: "Нужна ли сложная CRM?",
    answer: "Для MVP не обязательно. На первом этапе достаточно формы и Telegram-уведомлений, чтобы не терять заявки.",
  },
  {
    question: "Можно ли потом добавить таблицу?",
    answer: "Да. Следующим этапом можно подключить Google Sheets через Apps Script, чтобы сохранять заявки в таблицу.",
  },
];

export function FAQ() {
  return (
    <section className="bg-white px-5 py-12">
      <div className="mx-auto max-w-4xl">
        <p className="text-sm font-semibold uppercase tracking-[0.12em] text-accent">FAQ</p>
        <h2 className="mt-3 text-3xl font-semibold text-ink sm:text-4xl">Частые вопросы</h2>
        <div className="mt-8 divide-y divide-ink/10 rounded-lg border border-ink/10 bg-cream">
          {questions.map((item) => (
            <details className="group p-5" key={item.question}>
              <summary className="cursor-pointer list-none font-semibold text-ink">
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
