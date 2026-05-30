import Image from "next/image";

const problems = [
  "Заявки приходят в разные чаты и теряются среди сообщений.",
  "Администратор не сразу видит услугу, дату и контакт клиента.",
  "Данные приходится вручную переносить в таблицу.",
  "Часть обращений остается без ответа, когда поток заявок растет.",
];

const solution = [
  "Клиент заполняет короткую форму на сайте.",
  "Владелец получает понятное уведомление в Telegram.",
  "Контакт и услуга сохраняются в таблице заявок.",
  "Администратору проще вернуться к клиенту и довести заявку до записи.",
];

const tableRows = [
  ["сегодня", "клиент", "маникюр", "новая"],
  ["сегодня", "клиент", "уход", "новая"],
];

export function Benefits() {
  return (
    <section className="section-pad" id="business-problem">
      <div className="page-shell">
        <p className="eyebrow text-center">Проблема и решение</p>
        <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_1fr]">
          <article className="glass-panel overflow-hidden rounded-[10px]">
            <div className="grid gap-7 p-6 md:grid-cols-[0.78fr_1fr] md:p-8">
              <div>
                <h2 className="serif-display text-4xl leading-tight text-ink md:text-5xl">
                  Куда теряются заявки и клиенты
                </h2>
                <ul className="mt-7 space-y-4">
                  {problems.map((item) => (
                    <li className="flex gap-3 text-sm leading-6 text-ink/70" key={item}>
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-accent" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="relative min-h-[360px] overflow-hidden rounded-[8px] bg-petal">
                <Image
                  alt="Администратор салона разбирает заявки на ноутбуке"
                  className="object-cover"
                  fill
                  sizes="(min-width: 768px) 36vw, 100vw"
                  src="/beauty-assets/problem-beauty.png"
                />
                <div className="glass-panel absolute left-5 top-8 rounded-[8px] px-4 py-3 text-sm font-semibold text-ink">
                  новая заявка
                </div>
                <div className="glass-panel absolute bottom-8 right-5 rounded-[8px] px-4 py-3 text-sm font-semibold text-ink">
                  нужен быстрый ответ
                </div>
              </div>
            </div>
          </article>

          <article className="glass-panel overflow-hidden rounded-[10px]">
            <div className="grid h-full gap-7 p-6 md:grid-cols-[1fr_0.82fr] md:p-8">
              <div>
                <h2 className="serif-display text-4xl leading-tight text-ink md:text-5xl">
                  Единая система: заявка сразу попадает в работу
                </h2>
                <p className="mt-5 max-w-2xl leading-7 text-ink/65">
                  Beauty Lead System собирает обращения с сайта, отправляет их владельцу и
                  сохраняет данные для учета.
                </p>
                <ul className="mt-7 space-y-4">
                  {solution.map((item) => (
                    <li className="flex gap-3 text-sm leading-6 text-ink/70" key={item}>
                      <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-accent/45 text-[10px] font-bold text-accent">
                        OK
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="relative min-h-[380px] overflow-hidden rounded-[8px] border border-line bg-cream p-4">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(194,126,100,0.12),transparent_32%),radial-gradient(circle_at_90%_80%,rgba(77,43,35,0.08),transparent_34%)]" />
                <div className="relative flex h-full flex-col justify-between gap-4">
                  <div className="rounded-[8px] border border-line bg-white/85 p-4 shadow-soft">
                    <p className="text-xs uppercase tracking-[0.14em] text-ink/45">Форма сайта</p>
                    <div className="mt-3 space-y-2">
                      {["Имя", "Телефон", "Услуга"].map((field) => (
                        <div
                          className="rounded-[6px] border border-line bg-white px-3 py-2 text-sm text-ink/55"
                          key={field}
                        >
                          {field}
                        </div>
                      ))}
                    </div>
                    <div className="mt-3 rounded-[6px] bg-accent px-3 py-2 text-center text-sm font-semibold text-white">
                      Отправить
                    </div>
                  </div>

                  <div className="ml-auto w-[88%] rounded-[8px] border border-line bg-white/90 p-4 shadow-soft">
                    <div className="flex items-center justify-between gap-3">
                      <p className="font-semibold text-ink">Telegram</p>
                      <span className="rounded-full bg-accent/10 px-2 py-1 text-xs font-semibold text-accent">
                        сейчас
                      </span>
                    </div>
                    <p className="mt-3 font-semibold text-ink">Новая заявка</p>
                    <p className="mt-1 text-sm leading-6 text-ink/65">
                      Услуга, контакт и комментарий уже в сообщении.
                    </p>
                  </div>

                  <div className="rounded-[8px] border border-line bg-white/90 p-4 shadow-soft">
                    <div className="flex items-center justify-between gap-3">
                      <p className="font-semibold text-ink">Таблица заявок</p>
                      <span className="text-xs font-semibold text-accent">сохранено</span>
                    </div>
                    <div className="mt-3 overflow-hidden rounded-[6px] border border-line">
                      {tableRows.map((row) => (
                        <div className="grid grid-cols-4 border-b border-line last:border-b-0" key={row.join("-")}>
                          {row.map((cell) => (
                            <div className="truncate bg-white px-2 py-2 text-xs text-ink/65" key={cell}>
                              {cell}
                            </div>
                          ))}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
