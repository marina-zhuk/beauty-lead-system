export function Footer() {
  return (
    <footer className="px-5 py-8">
      <div className="mx-auto grid max-w-6xl gap-4 border-t border-ink/10 pt-6 text-sm text-ink/65 md:grid-cols-[1fr_1.4fr_1fr] md:items-start">
        <div>
          <p className="font-semibold text-ink">Beauty Lead System</p>
          <p className="mt-1">Demo project for portfolio</p>
        </div>

        <div className="rounded-lg border border-ink/10 bg-white p-4">
          <p className="font-semibold text-ink">Demo project for portfolio</p>
          <p className="mt-2 leading-6">
            Демо-проект для портфолио. При необходимости проект можно адаптировать
            в двухъязычную версию с переключением RU / EN.
          </p>
        </div>

        <div className="space-y-2 md:text-right">
          <p>
            <span className="font-medium text-ink">Telegram:</span>{" "}
            <a className="text-accent underline-offset-4 hover:underline" href="https://t.me/prssfff">
              @prssfff
            </a>
          </p>
          <p>
            <span className="font-medium text-ink">GitHub:</span> available on request
          </p>
        </div>
      </div>
    </footer>
  );
}
