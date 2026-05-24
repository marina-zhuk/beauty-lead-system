export function FinalCTA() {
  return (
    <section className="px-5 py-14">
      <div className="mx-auto max-w-6xl rounded-lg border border-ink/10 bg-ink px-5 py-10 text-white shadow-soft sm:px-8">
        <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.12em] text-white/60">Final CTA</p>
            <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
              Хотите такую систему для своего салона?
            </h2>
            <p className="mt-4 max-w-2xl leading-7 text-white/70">
              Оставьте демо-заявку и проверьте реальный сценарий: сайт, форма, Telegram-уведомление и строка в Google Sheets.
            </p>
          </div>
          <a
            className="inline-flex min-h-12 items-center justify-center rounded-md bg-accent px-6 font-semibold text-white transition hover:bg-accent/90"
            href="#lead-form"
          >
            Оставить демо-заявку
          </a>
        </div>
      </div>
    </section>
  );
}
