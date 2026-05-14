const services = [
  {
    title: "Маникюр",
    description: "Аккуратная обработка, покрытие и уход за кожей рук.",
    price: "от 2 000 ₽",
  },
  {
    title: "Брови",
    description: "Коррекция формы, окрашивание и бережный уход.",
    price: "от 1 500 ₽",
  },
  {
    title: "Lash-услуги",
    description: "Ламинирование или наращивание с подбором эффекта.",
    price: "от 2 300 ₽",
  },
  {
    title: "Косметология",
    description: "Уходовые процедуры под состояние кожи клиента.",
    price: "от 3 000 ₽",
  },
  {
    title: "Массаж",
    description: "Расслабляющие и восстановительные программы.",
    price: "от 2 800 ₽",
  },
  {
    title: "Комплексный уход",
    description: "Комбинированные записи для экономии времени.",
    price: "от 4 500 ₽",
  },
];

export function Services() {
  return (
    <section className="px-5 py-12" id="services">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.12em] text-berry">Услуги</p>
          <h2 className="mt-3 text-3xl font-semibold text-ink sm:text-4xl">
            Клиент быстро понимает, что можно выбрать
          </h2>
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article
              className="rounded-lg border border-ink/10 bg-white p-5 shadow-sm"
              key={service.title}
            >
              <h3 className="text-xl font-semibold text-ink">{service.title}</h3>
              <p className="mt-3 min-h-12 text-ink/65">{service.description}</p>
              <p className="mt-5 font-semibold text-berry">{service.price}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
