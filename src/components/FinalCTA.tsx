import Image from "next/image";

export function FinalCTA() {
  return (
    <section className="px-4 py-16">
      <div className="page-shell">
        <div className="overflow-hidden rounded-[14px] border border-accent/35 bg-[#efe0d7] shadow-soft">
          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div className="p-8 sm:p-12">
              <p className="eyebrow">Следующий шаг</p>
              <h2 className="serif-display mt-4 max-w-3xl text-5xl leading-[1.03] text-ink md:text-6xl">
                Настройте прием заявок без хаоса в переписках
              </h2>
              <p className="mt-5 max-w-2xl leading-8 text-ink/65">
                Оставьте заявку, и мы подберем формат системы под ваш салон,
                услуги и текущий поток обращений.
              </p>
              <a
                className="mt-8 inline-flex min-h-14 items-center justify-center rounded-[6px] bg-ink px-8 font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-berry active:translate-y-[1px]"
                href="#lead-form"
              >
                Оставить заявку
              </a>
            </div>
            <div className="relative min-h-[320px] overflow-hidden lg:h-full">
              <Image
                alt="Beauty-визуал для финального блока"
                className="object-cover"
                fill
                sizes="(min-width: 1024px) 45vw, 100vw"
                src="/beauty-assets/cta-beauty.png"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
