const benefits = [
  "Заявка приходит в одном понятном формате: имя, телефон, услуга и удобное время.",
  "Клиент может отправить форму в любое время, даже когда мастер занят процедурой.",
  "Владелец сразу видит, какая услуга интересует клиента и как с ним связаться.",
];

export function Benefits() {
  return (
    <section className="bg-white px-5 py-12">
      <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.12em] text-moss">
            Преимущества
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-ink sm:text-4xl">
            Меньше ручной переписки до первого контакта
          </h2>
        </div>
        <div className="grid gap-4">
          {benefits.map((benefit, index) => (
            <div className="rounded-lg border border-ink/10 bg-cream p-5" key={benefit}>
              <div className="flex gap-4">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-moss text-sm font-semibold text-white">
                  {index + 1}
                </span>
                <p className="leading-7 text-ink/75">{benefit}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
