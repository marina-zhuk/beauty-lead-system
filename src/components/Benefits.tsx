const outcomes = [
  "Владелец быстрее видит новый запрос и может ответить, пока клиент еще выбирает мастера.",
  "Все заявки попадают в один понятный список, а не остаются в разных чатах и заметках.",
  "Администратору проще понять, кому уже ответили, кого записали, а кого еще нужно обработать.",
];

export function Benefits() {
  return (
    <section className="bg-white px-5 py-16">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.12em] text-moss">
            Business value
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Больше контроля над входящими заявками
          </h2>
          <p className="mt-4 leading-7 text-ink/65">
            Когда запросы приходят из разных каналов, часть клиентов легко пропустить.
            Эта система собирает заявки в один поток: сообщение владельцу и запись в таблицу.
          </p>
        </div>
        <div className="grid gap-4">
          {outcomes.map((outcome, index) => (
            <div className="rounded-lg border border-ink/10 bg-cream p-5 transition duration-300 hover:-translate-y-0.5 hover:bg-white" key={outcome}>
              <div className="flex gap-4">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-moss text-sm font-semibold text-white">
                  {index + 1}
                </span>
                <p className="leading-7 text-ink/75">{outcome}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
