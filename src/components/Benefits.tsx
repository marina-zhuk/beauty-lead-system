const problems = [
  "Клиент написал в Direct, но сообщение ушло вниз и осталось без ответа.",
  "Администратор ведет переписки в разных местах и не видит единую очередь заявок.",
  "Сложно понять, кто уже обработан, кому ответили, а кого еще нужно вернуть в диалог.",
];

export function Benefits() {
  return (
    <section className="bg-white px-5 py-14">
      <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.12em] text-moss">
            Problem
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-ink sm:text-4xl">
            Заявки теряются в переписках
          </h2>
          <p className="mt-4 leading-7 text-ink/65">
            Direct, WhatsApp, Telegram и личные сообщения удобны для общения, но плохо работают как система учета заявок.
          </p>
        </div>
        <div className="grid gap-4">
          {problems.map((problem, index) => (
            <div className="rounded-lg border border-ink/10 bg-cream p-5" key={problem}>
              <div className="flex gap-4">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-moss text-sm font-semibold text-white">
                  {index + 1}
                </span>
                <p className="leading-7 text-ink/75">{problem}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
