import Image from "next/image";

const navItems = [
  { href: "#flow", label: "Как работает" },
  { href: "#features", label: "Возможности" },
  { href: "#included", label: "Форматы" },
  { href: "#proof", label: "Пример" },
  { href: "#faq", label: "FAQ" },
];

const quickStats = [
  ["Быстро", "заявка сразу приходит владельцу"],
  ["Удобно", "данные не теряются в переписках"],
  ["Под контролем", "история остается в таблице"],
];

export function Hero() {
  return (
    <section className="relative min-h-[100dvh] overflow-hidden pb-14">
      <div className="page-shell">
        <header className="flex items-center justify-between gap-6 py-8">
          <a className="flex items-center gap-4" href="#">
            <span className="serif-display text-4xl leading-none text-accent">BLS</span>
            <span className="serif-display text-xl text-ink">Beauty Lead System</span>
          </a>

          <nav className="hidden items-center gap-8 text-sm font-medium text-ink/80 lg:flex">
            {navItems.map((item) => (
              <a className="transition hover:text-accent" href={item.href} key={item.href}>
                {item.label}
              </a>
            ))}
          </nav>

          <a
            className="hidden min-h-12 items-center justify-center rounded-[6px] bg-ink px-6 text-sm font-semibold text-white shadow-panel transition duration-300 hover:-translate-y-0.5 hover:bg-berry active:translate-y-[1px] sm:inline-flex"
            href="#lead-form"
          >
            Получить консультацию
          </a>
        </header>

        <div className="grid min-w-0 gap-10 pt-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:pt-12">
          <div className="min-w-0 max-w-full animate-reveal-up overflow-hidden">
            <p className="eyebrow max-w-[32ch] leading-6 sm:max-w-none">
              Лендинг · форма · Telegram · таблица
            </p>
            <h1 className="hero-title serif-display mt-8 text-[clamp(2.35rem,10vw,7.4rem)] leading-[0.98] text-ink [overflow-wrap:anywhere]">
              Не теряйте клиентов. Каждая заявка на учете.
            </h1>
            <p className="mt-7 max-w-[34ch] text-base leading-8 text-ink/70 [overflow-wrap:anywhere] sm:max-w-2xl sm:text-lg">
              Сайт для beauty-бизнеса, который принимает заявки, сразу
              уведомляет владельца в Telegram и сохраняет контакты в таблицу
              для дальнейшей работы.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <a
                className="inline-flex min-h-14 w-full max-w-sm items-center justify-center rounded-[6px] bg-accent px-8 font-semibold text-white shadow-panel transition duration-300 hover:-translate-y-0.5 hover:bg-berry active:translate-y-[1px] sm:w-auto"
                href="#lead-form"
              >
                Оставить заявку
              </a>
              <a
                className="inline-flex min-h-14 w-full max-w-sm items-center justify-center rounded-[6px] border border-line bg-white/60 px-8 font-semibold text-ink transition duration-300 hover:-translate-y-0.5 hover:border-accent/50 active:translate-y-[1px] sm:w-auto"
                href="#flow"
              >
                Посмотреть схему
              </a>
            </div>

            <dl className="mt-14 grid gap-5 border-t border-line pt-7 sm:grid-cols-3">
              {quickStats.map(([title, text]) => (
                <div key={title}>
                  <dt className="serif-display text-2xl text-ink">{title}</dt>
                  <dd className="mt-2 text-sm leading-6 text-ink/60">{text}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative min-h-[520px] min-w-0 lg:min-h-[720px]">
            <div className="absolute inset-0 overflow-hidden rounded-bl-[180px] rounded-tl-[180px] border border-line bg-petal shadow-soft">
              <Image
                alt="Премиальный beauty-визуал для сайта системы заявок"
                className="object-cover object-center"
                fill
                priority
                sizes="(min-width: 1024px) 50vw, 100vw"
                src="/beauty-assets/hero-beauty.png"
              />
            </div>

            <div className="glass-panel absolute left-0 top-16 w-[min(84%,360px)] rounded-[10px] p-5 sm:left-3 lg:-left-5">
              <p className="serif-display text-3xl text-ink">Запись в салон</p>
              <p className="mt-2 text-sm text-ink/60">Короткая форма без лишних шагов</p>
              <div className="mt-5 space-y-3">
                {["Имя", "Телефон", "Услуга", "Комментарий"].map((field) => (
                  <div className="h-11 rounded-[6px] border border-line bg-white/70 px-4 py-3 text-sm text-ink/45" key={field}>
                    {field}
                  </div>
                ))}
              </div>
              <div className="mt-4 h-12 rounded-[6px] bg-accent px-4 py-3 text-center font-semibold text-white">
                Записаться
              </div>
            </div>

            <div className="glass-panel absolute bottom-24 right-0 w-[min(76%,330px)] rounded-[10px] p-5">
              <div className="flex items-center justify-between gap-3">
                <p className="font-semibold text-ink">Telegram</p>
                <span className="text-xs text-ink/45">сейчас</span>
              </div>
              <p className="mt-4 font-semibold text-ink">Новая заявка</p>
              <p className="mt-2 text-sm leading-6 text-ink/65">
                Имя: клиент<br />
                Телефон: скрыт<br />
                Услуга: маникюр
              </p>
            </div>

            <div className="glass-panel absolute bottom-0 left-8 hidden w-[min(86%,520px)] rounded-[10px] p-5 md:block">
              <div className="flex items-center justify-between">
                <p className="font-semibold text-ink">Таблица заявок</p>
                <span className="text-xs text-moss">данные сохранены</span>
              </div>
              <div className="mt-4 grid grid-cols-4 gap-2 text-xs text-ink/65">
                {["Дата", "Имя", "Услуга", "Статус"].map((header) => (
                  <span className="font-semibold text-ink" key={header}>{header}</span>
                ))}
                {["сегодня", "клиент", "уход", "новая"].map((cell) => (
                  <span className="rounded bg-white/70 px-2 py-2" key={cell}>{cell}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
