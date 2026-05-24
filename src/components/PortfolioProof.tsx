"use client";

import { useState } from "react";

const proofCards = [
  {
    title: "Telegram-уведомление",
    description: "Владелец получает лид одним сообщением сразу после отправки формы.",
    imageAlt: "Скриншот Telegram-уведомления о заявке",
    imageSrc: "/screenshots/telegram-lead.png",
    fallback: "Скриншот Telegram будет добавлен здесь",
  },
  {
    title: "Строка в Google Sheets",
    description: "Та же заявка сохраняется строкой в Google Sheets для простого учета.",
    imageAlt: "Скриншот строки заявки в Google Sheets",
    imageSrc: "/screenshots/google-sheets-lead.png",
    fallback: "Скриншот Google Sheets будет добавлен здесь",
  },
];

type ImageState = Record<string, boolean>;

export function PortfolioProof() {
  const [failedImages, setFailedImages] = useState<ImageState>({});

  return (
    <section className="bg-white px-5 py-14" id="proof">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.12em] text-moss">
            Подтверждение работы
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-ink sm:text-4xl">
            Как выглядит заявка у владельца
          </h2>
          <p className="mt-4 leading-7 text-ink/65">
            Форма отправляется с сайта. Данные автоматически попадают в Telegram и Google Sheets.
          </p>
        </div>

        <div className="mt-8 grid gap-5 lg:grid-cols-2">
          {proofCards.map((card) => {
            const imageFailed = failedImages[card.imageSrc];

            return (
              <article className="overflow-hidden rounded-lg border border-ink/10 bg-cream shadow-sm" key={card.title}>
                <div className="border-b border-ink/10 bg-white px-5 py-4">
                  <h3 className="text-xl font-semibold text-ink">{card.title}</h3>
                  <p className="mt-2 leading-6 text-ink/65">{card.description}</p>
                </div>

                <div className="bg-white p-4">
                  {imageFailed ? (
                    <div className="flex min-h-56 items-center justify-center rounded-md border border-dashed border-ink/20 bg-cream px-6 text-center sm:min-h-64">
                      <p className="max-w-xs text-sm font-semibold text-ink/60">{card.fallback}</p>
                    </div>
                  ) : (
                    <img
                      alt={card.imageAlt}
                      className="h-auto w-full rounded-md border border-ink/10 bg-cream object-contain"
                      onError={() =>
                        setFailedImages((current) => ({
                          ...current,
                          [card.imageSrc]: true,
                        }))
                      }
                      src={card.imageSrc}
                    />
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
