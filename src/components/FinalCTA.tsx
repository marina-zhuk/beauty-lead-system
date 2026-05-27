export function FinalCTA() {
  return (
    <section className="px-5 py-16">
      <div className="mx-auto max-w-7xl rounded-lg border border-ink/10 bg-ink px-5 py-10 text-white shadow-soft sm:px-8">
        <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.12em] text-white/60">CTA</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              Хотите показать клиенту рабочий прием заявок, а не просто макет сайта?
            </h2>
            <p className="mt-4 max-w-2xl leading-7 text-white/70">
              Отправьте demo-заявку и проверьте базовый flow: visitor submits form,
              owner receives Telegram notification, lead is saved to Google Sheets.
            </p>
          </div>
          <a
            className="inline-flex min-h-12 items-center justify-center rounded-md bg-white px-6 font-semibold text-ink transition duration-300 hover:-translate-y-0.5 hover:bg-petal active:translate-y-[1px]"
            href="#lead-form"
          >
            Отправить demo-заявку
          </a>
        </div>
      </div>
    </section>
  );
}
