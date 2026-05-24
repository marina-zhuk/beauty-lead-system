export function Hero() {
  const leadRows = [
    ["Услуга", "Маникюр"],
    ["Клиент", "Анна"],
    ["Время", "сегодня 16:30"],
    ["Статус", "new в Google Sheets"],
  ];

  return (
    <section className="px-5 pb-14 pt-10 sm:pt-14 lg:pb-20 lg:pt-20">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div>
          <p className="mb-5 inline-flex rounded-full border border-accent/20 bg-white px-4 py-2 text-sm font-medium text-accent">
            Beauty Lead System
          </p>
          <h1 className="max-w-3xl text-4xl font-semibold leading-[1.05] text-ink sm:text-5xl lg:text-6xl">
            Мини-система заявок для beauty-мастеров и салонов
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-ink/70">
            Portfolio MVP для beauty-бизнеса: клиент оставляет заявку на лендинге,
            владелец получает ее в Telegram, а те же данные автоматически сохраняются в Google Sheets.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#lead-form"
              className="inline-flex min-h-12 items-center justify-center rounded-md bg-accent px-6 text-base font-semibold text-white shadow-soft transition hover:bg-accent/90"
            >
              Посмотреть демо заявки
            </a>
            <a
              href="#included"
              className="inline-flex min-h-12 items-center justify-center rounded-md border border-ink/15 bg-white px-6 text-base font-semibold text-ink transition hover:border-accent/35 hover:text-accent"
            >
              Что входит
            </a>
          </div>
        </div>

        <div className="rounded-lg border border-ink/10 bg-white p-5 shadow-soft">
          <div className="rounded-md bg-cream p-5">
            <div className="flex items-center justify-between gap-4">
              <p className="text-sm font-semibold uppercase tracking-[0.12em] text-accent">
                Новая заявка
              </p>
              <span className="rounded-full bg-moss/10 px-3 py-1 text-xs font-semibold text-moss">
                Telegram + Sheets
              </span>
            </div>
            <div className="mt-5 space-y-3">
              {leadRows.map(([label, value]) => (
                <div
                  className="grid gap-1 rounded-md border border-ink/10 bg-white px-4 py-3 sm:grid-cols-[120px_1fr]"
                  key={label}
                >
                  <span className="text-sm text-ink/55">{label}</span>
                  <span className="font-medium text-ink">{value}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-5 grid grid-cols-2 gap-3 text-sm">
            <div className="rounded-md border border-ink/10 p-4">
              <p className="text-2xl font-semibold text-accent">24/7</p>
              <p className="mt-1 text-ink/65">прием заявок</p>
            </div>
            <div className="rounded-md border border-ink/10 p-4">
              <p className="text-2xl font-semibold text-moss">new</p>
              <p className="mt-1 text-ink/65">статус заявки</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
