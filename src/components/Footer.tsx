export function Footer() {
  return (
    <footer className="px-4 pb-10 pt-4">
      <div className="page-shell">
        <div className="grid gap-6 border-t border-line pt-7 text-sm text-ink/60 md:grid-cols-[1fr_1.4fr_1fr]">
          <div>
            <p className="serif-display text-2xl text-ink">Beauty Lead System</p>
            <p className="mt-2">Система заявок для beauty-бизнеса</p>
          </div>

          <p className="leading-7">
            Лендинг, форма заявки, уведомление владельцу и таблица для учета
            обращений. Подходит салонам, студиям и частным мастерам.
          </p>

          <div className="space-y-2 md:text-right">
            <p>
              <span className="font-medium text-ink">Telegram:</span>{" "}
              <a className="text-accent underline-offset-4 hover:underline" href="https://t.me/prssfff">
                @prssfff
              </a>
            </p>
            <p>
              <span className="font-medium text-ink">Заявки:</span> через форму на сайте
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
