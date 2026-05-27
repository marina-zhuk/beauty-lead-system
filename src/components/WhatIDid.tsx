const completedItems = [
  "Responsive landing page",
  "Demo lead form",
  "Frontend validation",
  "API endpoint /api/lead",
  "Telegram notification",
  "Google Apps Script integration",
  "Google Sheets lead storage",
  "Vercel-ready environment variables",
];

export function WhatIDid() {
  return (
    <section className="px-5 py-14">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.12em] text-accent">
              Tech / automation proof
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-ink sm:text-4xl">
              Что подтверждает рабочий MVP
            </h2>
            <p className="mt-4 leading-7 text-ink/65">
              Проект показывает end-to-end flow: от формы на лендинге до backend validation,
              Telegram notification и записи в Google Sheets. Интеграции подключаются через
              environment variables, без секретов в репозитории.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {completedItems.map((item) => (
              <div className="flex gap-3 rounded-lg border border-ink/10 bg-white p-4 shadow-sm" key={item}>
                <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-moss text-[10px] font-semibold text-white">
                  OK
                </span>
                <p className="leading-6 text-ink/75">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
