"use client";

import Image from "next/image";
import { useState } from "react";

const exampleCards = [
  {
    title: "Уведомление владельцу",
    description: "После отправки формы заявка приходит в Telegram с именем, услугой, датой и комментарием.",
    imageAlt: "Пример Telegram-уведомления о заявке",
    imageSrc: "/screenshots/telegram-lead.png",
    fallback: "Здесь отображается пример уведомления о заявке.",
  },
  {
    title: "История заявок в таблице",
    description: "Контакты сохраняются в таблице, чтобы администратор видел новые обращения и мог вернуться к ним позже.",
    imageAlt: "Пример строки заявки в таблице",
    imageSrc: "/screenshots/google-sheets-lead.png",
    fallback: "Здесь отображается пример таблицы с заявками.",
  },
];

type ImageState = Record<string, boolean>;

export function WorkExample() {
  const [failedImages, setFailedImages] = useState<ImageState>({});

  return (
    <section className="section-pad bg-white/45" id="proof">
      <div className="page-shell">
        <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">
          <div>
            <p className="eyebrow">Пример работы</p>
            <h2 className="serif-display mt-4 text-5xl leading-[1.03] text-ink md:text-6xl">
              Что видит владелец после заявки
            </h2>
          </div>
          <p className="max-w-3xl leading-8 text-ink/65">
            Сайт не просто собирает контакты. Он помогает быстро увидеть новую
            заявку и сохранить ее для дальнейшей обработки.
          </p>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          {exampleCards.map((card) => {
            const imageFailed = failedImages[card.imageSrc];

            return (
              <article className="glass-panel overflow-hidden rounded-[10px]" key={card.title}>
                <div className="p-6">
                  <h3 className="serif-display text-3xl text-ink">{card.title}</h3>
                  <p className="mt-3 leading-7 text-ink/65">{card.description}</p>
                </div>

                <div className="border-t border-line bg-white/60 p-4">
                  {imageFailed ? (
                    <div className="flex min-h-64 items-center justify-center rounded-[8px] border border-dashed border-line bg-cream px-6 text-center">
                      <p className="max-w-xs text-sm font-semibold text-ink/60">{card.fallback}</p>
                    </div>
                  ) : (
                    <Image
                      alt={card.imageAlt}
                      className="h-auto w-full rounded-[8px] border border-line bg-cream object-contain"
                      height={720}
                      onError={() =>
                        setFailedImages((current) => ({
                          ...current,
                          [card.imageSrc]: true,
                        }))
                      }
                      src={card.imageSrc}
                      width={1280}
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
