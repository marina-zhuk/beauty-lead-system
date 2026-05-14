const questions = [
  {
    question: "Это готовая CRM?",
    answer: "Нет. Это первая версия MVP: лендинг, форма и API route для проверки заявки.",
  },
  {
    question: "Telegram и Google Sheets уже подключены?",
    answer: "В этой версии нет. Переменные окружения подготовлены для следующих этапов.",
  },
  {
    question: "Можно ли деплоить на Vercel?",
    answer: "Да. Проект использует стандартный Next.js App Router и не требует отдельного сервера.",
  },
];

export function FAQ() {
  return (
    <section className="bg-white px-5 py-12">
      <div className="mx-auto max-w-4xl">
        <p className="text-sm font-semibold uppercase tracking-[0.12em] text-berry">FAQ</p>
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
