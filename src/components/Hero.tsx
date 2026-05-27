export function Hero() {
  const leadRows = [
    ["Service", "Manicure / beauty service"],
    ["Client", "Test lead"],
    ["Preferred time", "today, 16:30"],
    ["Next step", "reply from Telegram"],
  ];

  return (
    <section className="overflow-x-hidden px-5 pb-16 pt-8 sm:pt-12 lg:pb-24 lg:pt-20">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.12fr_0.88fr] lg:items-center">
        <div className="min-w-0 animate-reveal-up">
          <p className="mb-5 inline-flex max-w-full rounded-full border border-accent/20 bg-white/80 px-4 py-2 text-sm font-medium text-accent shadow-[inset_0_1px_0_rgba(255,255,255,0.75)]">
            Portfolio demo / commercial MVP concept
          </p>
          <h1 className="max-w-4xl text-4xl font-semibold leading-[1.02] tracking-tight text-ink [overflow-wrap:anywhere] sm:text-5xl lg:text-[4.35rem]">
            Система заявок для beauty-мастера, салона или локального сервиса
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-ink/70">
            Посетитель оставляет заявку на странице, владелец получает Telegram notification,
            а данные сохраняются в Google Sheets. MVP можно адаптировать под салон,
            косметолога, мастера маникюра, бровиста, массажиста или другой service business.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#lead-form"
              className="inline-flex min-h-12 items-center justify-center rounded-md bg-accent px-6 text-base font-semibold text-white shadow-soft transition duration-300 hover:-translate-y-0.5 hover:bg-accent/90 active:translate-y-[1px]"
            >
              Проверить demo form
            </a>
            <a
              href="#features"
              className="inline-flex min-h-12 items-center justify-center rounded-md border border-ink/15 bg-white/85 px-6 text-base font-semibold text-ink transition duration-300 hover:-translate-y-0.5 hover:border-accent/35 hover:text-accent active:translate-y-[1px]"
            >
              Посмотреть flow
            </a>
          </div>

          <dl className="mt-10 grid max-w-2xl grid-cols-2 gap-4 border-y border-ink/10 py-5 text-sm sm:grid-cols-3">
            <div>
              <dt className="text-ink/55">Notification</dt>
              <dd className="mt-1 font-semibold text-ink">Telegram</dd>
            </div>
            <div>
              <dt className="text-ink/55">Storage</dt>
              <dd className="mt-1 font-semibold text-ink">Google Sheets</dd>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <dt className="text-ink/55">Status</dt>
              <dd className="mt-1 font-semibold text-moss">portfolio MVP</dd>
            </div>
          </dl>
        </div>

        <div className="min-w-0 lg:pt-16">
          <div className="animate-slow-float rounded-lg border border-white/70 bg-white/85 p-4 shadow-soft shadow-ink/5 backdrop-blur">
            <div className="rounded-md border border-ink/10 bg-cream p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.65)]">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <p className="text-sm font-semibold uppercase tracking-[0.12em] text-accent">
                  New lead received
                </p>
                <span className="rounded-full bg-moss/10 px-3 py-1 text-xs font-semibold text-moss">
                  Telegram + Sheets
                </span>
              </div>
              <div className="mt-5 space-y-3">
                {leadRows.map(([label, value]) => (
                  <div
                    className="grid gap-1 rounded-md border border-ink/10 bg-white px-4 py-3 sm:grid-cols-[132px_1fr]"
                    key={label}
                  >
                    <span className="text-sm text-ink/55">{label}</span>
                    <span className="font-medium text-ink">{value}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-4 grid grid-cols-1 gap-3 text-sm sm:grid-cols-2">
              <div className="rounded-md border border-ink/10 bg-white/60 p-4">
                <p className="text-2xl font-semibold text-accent">24/7</p>
                <p className="mt-1 text-ink/65">форма принимает обращения</p>
              </div>
              <div className="rounded-md border border-ink/10 bg-white/60 p-4">
                <p className="text-2xl font-semibold text-moss">1 table</p>
                <p className="mt-1 text-ink/65">для учета заявок и статусов</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
