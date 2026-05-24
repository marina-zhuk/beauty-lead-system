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
            Contacts are hidden because this is a demonstration project.
          </p>
        </div>

        <div className="space-y-2 md:text-right">
          <p>
            <span className="font-medium text-ink">Telegram:</span> @your_username
          </p>
          <p>
            <span className="font-medium text-ink">GitHub:</span> Repository link
          </p>
        </div>
      </div>
    </footer>
  );
}
