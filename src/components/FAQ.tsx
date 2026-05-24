const questions = [
  {
    question: "Можно ли адаптировать под мой салон?",
    answer: "Да. Тексты, услуги, поля формы и визуальный стиль можно адаптировать под салон, частного мастера или студию.",
  },
  {
    question: "Куда приходят заявки?",
    answer: "В Telegram владельца или администратора. Параллельно та же заявка сохраняется новой строкой в Google Sheets.",
  },
  {
    question: "Нужна ли сложная CRM?",
    answer: "Нет. Это портфолио-MVP: форма собирает лид, Telegram помогает быстро увидеть заявку, а Google Sheets подходит для простого tracking и статусов.",
  },
  {
    question: "Google Sheets уже подключен?",
    answer: "Да. Текущий MVP отправляет данные из /api/lead в Google Apps Script, а скрипт сохраняет заявку в Google Sheets.",
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
