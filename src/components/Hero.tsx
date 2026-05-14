export function Hero() {
  return (
    <section className="px-5 py-10 sm:py-14 lg:py-20">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div>
          <p className="mb-4 inline-flex rounded-full border border-berry/20 bg-white px-4 py-2 text-sm font-medium text-berry">
            Demo MVP для beauty-бизнеса
          </p>
          <h1 className="max-w-3xl text-4xl font-semibold leading-tight text-ink sm:text-5xl lg:text-6xl">
            Beauty Lead System для записи клиентов без потерянных заявок
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-ink/70">
            Чистый лендинг с формой заявки для мастера или салона. Клиент выбирает услугу,
            оставляет удобное время и сразу видит статус отправки.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#lead-form"
              className="inline-flex min-h-12 items-center justify-center rounded-md bg-berry px-6 text-base font-semibold text-white shadow-soft transition hover:bg-berry/90"
            >
              Записаться
            </a>
            <a
              href="#services"
              className="inline-flex min-h-12 items-center justify-center rounded-md border border-ink/15 bg-white px-6 text-base font-semibold text-ink transition hover:border-berry/35 hover:text-berry"
            >
              Посмотреть услуги
            </a>
          </div>
        </div>

        <div className="rounded-lg border border-ink/10 bg-white p-5 shadow-soft">
          <div className="rounded-md bg-petal p-5">
            <p className="text-sm font-semibold uppercase tracking-[0.12em] text-berry">
              Сегодня в записи
            </p>
            <div className="mt-5 space-y-3">
              {["Маникюр с покрытием", "Коррекция и окрашивание бровей", "Уход за лицом"].map(
                (item, index) => (
                  <div
                    className="flex items-center justify-between rounded-md bg-white px-4 py-3"
                    key={item}
                  >
                    <span className="font-medium text-ink">{item}</span>
                    <span className="text-sm text-moss">{10 + index * 2}:30</span>
                  </div>
                ),
              )}
            </div>
          </div>
          <div className="mt-5 grid grid-cols-2 gap-3 text-sm">
            <div className="rounded-md border border-ink/10 p-4">
              <p className="text-2xl font-semibold text-berry">24/7</p>
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
