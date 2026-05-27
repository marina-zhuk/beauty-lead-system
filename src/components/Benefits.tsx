const outcomes = [
  "Заявки не остаются только в Direct, WhatsApp или личных заметках владельца.",
  "Владелец видит новый запрос в Telegram и может ответить, пока клиент еще выбирает мастера.",
  "Google Sheets хранит историю заявок, контакты, услугу, дату и текущий статус обработки.",
];

export function Benefits() {
  return (
    <section className="bg-white px-5 py-16" id="business-problem">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.12em] text-moss">
            Business problem
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Малый бизнес теряет заявки, когда они разбросаны по чатам
          </h2>
          <p className="mt-4 leading-7 text-ink/65">
            Для beauty-салона, частного мастера или локального сервиса важна скорость ответа.
            Этот demo показывает простой рабочий процесс: клиент оставляет заявку, владелец
            получает сигнал, а данные остаются в таблице для follow-up.
          </p>
        </div>
        <div className="grid gap-4">
          {outcomes.map((outcome, index) => (
            <div
              className="rounded-lg border border-ink/10 bg-cream p-5 transition duration-300 hover:-translate-y-0.5 hover:bg-white"
              key={outcome}
            >
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
